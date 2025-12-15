function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    const name = (data?.name || "").trim();
    const company = (data?.company || "").trim();
    const email = (data?.email || "").trim();

    // Server-side honeypot check (must match client payload field name)
    const website = (data?.website || "").trim();
    if (website) {
      // Pretend success to bots
      return json({ ok: true });
    }

    if (!name || !email || !isValidEmail(email)) {
      return json({ ok: false, error: "invalid_input" }, 400);
    }

    if (!env.DB) {
      return json({ ok: false, error: "server_misconfigured" }, 500);
    }

    const createdAt = new Date().toISOString();

    await env.DB.prepare(
      `INSERT INTO contact_requests (name, company, email, created_at)
       VALUES (?, ?, ?, ?)`
    )
      .bind(name, company || null, email, createdAt)
      .run();

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "server_error" }, 500);
  }
}