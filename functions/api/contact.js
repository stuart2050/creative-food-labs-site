export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "invalid_json" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = (data?.name || "").trim();
  const company = (data?.company || "").trim();
  const email = (data?.email || "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !email || !emailOk) {
    return new Response(JSON.stringify({ ok: false, error: "invalid_input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ ok: false, error: "db_binding_missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const createdAt = new Date().toISOString();

  const result = await env.DB.prepare(
    `INSERT INTO contact_requests (name, company, email, created_at)
     VALUES (?, ?, ?, ?)`
  )
    .bind(name, company || null, email, createdAt)
    .run();

  return new Response(
    JSON.stringify({
      ok: true,
      inserted: true,
      last_row_id: result?.meta?.last_row_id ?? null,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}