import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { icon: "✉", label: "Email", value: "Email", href: "mailto:loki210905@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "Linkedin", href: "https://www.linkedin.com/in/lokesh-k-12360b2a5" },
  { icon: "🐙", label: "GitHub", value: "Github", href: "https://github.com/yoursstarboy-21" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      // These will be filled with the user's IDs
      const serviceId = "service_uvh0pun";
      const templateId = "template_z2bv08a";
      const publicKey = "9fsSYDfUfZZ_imiJ0";

      // Initialize EmailJS
      emailjs.init(publicKey);

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        message: `From: ${form.name} (${form.email})\n\nMessage: ${form.message}`,
        to_name: "Lokesh",
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200) {
        setSent(true);
        setLoading(false);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError(error.text || error.message || "Network Error");
      setLoading(false);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact">
      <div className="container fade-in">
        <div className="text-center">
          <span className="section-label">✉ REACH OUT</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>I'm currently available for work and open to exciting opportunities.</p>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noreferrer">
                  <span>{link.icon}</span> {link.value}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            {sent && <div className="success-toast" style={{ color: "var(--cyan)", fontWeight: 600 }}>✓ Message sent! Check your inbox.</div>}
            {error && <div className="success-toast" style={{ color: "#ff6b6b", fontWeight: 600 }}>✗ {error}</div>}
            <input className="form-input" type="text" name="name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required disabled={loading} />
            <input className="form-input" type="email" name="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required disabled={loading} />
            <textarea className="form-textarea" name="message" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required disabled={loading} />
            <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Sending..." : "SEND MESSAGE"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}