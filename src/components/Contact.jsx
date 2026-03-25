import { useState } from "react";

const contactLinks = [
  { icon: "✉", label: "Email", value: "EMail", href: "mailto:loki210905@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "Linkedin", href: "https://www.linkedin.com/in/lokesh-k-12360b2a5" },
  { icon: "🐙", label: "GitHub", value: "Github", href: "https://github.com/yoursstarboy-21" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // IMPORTANT: Paste your Web3Forms Access Key below
    formData.append("access_key", "e284b37b-9393-4dd3-b43c-64fa0fee0e6a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Form error:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
            {sent && <div className="success-toast" style={{ color: "var(--cyan)", fontWeight: 600 }}>✓ Message sent successfully!</div>}
            <input className="form-input" type="text" name="name" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <input className="form-input" type="email" name="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <textarea className="form-textarea" name="message" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            <button type="submit" className="btn-primary">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}