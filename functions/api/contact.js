export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const name = (data?.name || "").trim();
  const company = (data?.company || "").trim();
  const email = (data?.email || "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !email || !emailOk) {
    return new Response("Invalid input", { status: 400 });
  }

  // Store in D1
  const createdAt = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO contact_requests (name, company, email, created_at)
     VALUES (?, ?, ?, ?)`
  )
    .bind(name, company || null, email, createdAt)
    .run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}