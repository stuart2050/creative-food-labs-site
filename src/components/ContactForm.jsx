import { useMemo, useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    website: "", // honeypot (bots often fill this)
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const emailIsValid = useMemo(() => {
    // good-enough email format validation for client-side UX
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  }, [form.email]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Basic required checks
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailIsValid) {
      setError("Please enter a valid email address.");
      return;
    }

    // Honeypot: if filled, silently pretend success (reduces spam)
    if (form.website.trim()) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      // NOTE: this endpoint doesn't exist yet.
      // We'll create it when we do Cloudflare setup.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", company: "", email: "", website: "" });
    } catch (err) {
      setStatus("error");
      setError(
        "Sorry — something went wrong sending your message. Please try again."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="field">
          <span className="label">Name *</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>

        <label className="field">
          <span className="label">Company</span>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </label>

        <label className="field field-full">
          <span className="label">Email *</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {!emailIsValid && form.email.length > 3 && (
            <span className="hint">Enter a valid email (e.g. name@company.com)</span>
          )}
        </label>

        {/* Honeypot field (hidden from humans) */}
        <div className="honeypot" aria-hidden="true">
          <label>
            Website
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
      </div>

      {error && <p className="form-error">{error}</p>}
      {status === "sent" && (
        <p className="form-success">Thanks — I’ll be in touch shortly.</p>
      )}

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>

      <p className="privacy">
        By submitting this form, you agree to be contacted regarding your enquiry.
        Your details are used only to respond and are not shared with third parties.
      </p>
    </form>
  );
}