export async function onRequestPost({ request }) {
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

  // Temporary logging to confirm submissions arrive at the server
  console.log("New enquiry:", { name, company, email, at: new Date().toISOString() });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}