export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

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

    // D1 returns meta including last_row_id when successful
    return new Response(
      JSON.stringify({ ok: true, inserted: true, meta: result.meta }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "server_error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}