"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%", backgroundColor: "#0A1628",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: 6, padding: "12px 16px",
    color: "#fff", fontSize: 15, outline: "none",
    boxSizing: "border-box" as const
  };

  const labelStyle = { color: "#9BB5D6", fontSize: 13, marginBottom: 6, display: "block", fontWeight: 500 };

  return (
    <section id="contact" style={{ backgroundColor: "#0A1B30", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>CONTACT US</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Get a{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Free Quote
            </span>
          </h2>
          <p style={{ color: "#9BB5D6", fontSize: 17 }}>Serving all of UAE and GCC. Contact us for a free site visit and estimate.</p>
        </div>

        {/* Map */}
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(201,168,76,0.2)", marginBottom: 48, height: 320 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5!2d54.4876022!3d24.348359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41a307eaa6eb%3A0x2c664478ddd97b36!2sZamzam%20Automatic%20Doors!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div style={{ backgroundColor: "#112240", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 12, padding: "40px 32px" }}>
              <h3 style={{ color: "#C9A84C", fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Contact Information</h3>
              {[
                { icon: "📍", label: "Location", value: "M40, Mussafah, Abu Dhabi, UAE" },
                { icon: "📞", label: "Phone", value: "+971 55 989 0724" },
                { icon: "📱", label: "WhatsApp", value: "+971 55 989 0724" },
                { icon: "✉️", label: "Email", value: "info@zamzamdoor.com" },
                { icon: "✉️", label: "Email", value: "zamzamadr@gmail.com" },
                { icon: "🕐", label: "Working Hours", value: "Sun–Thu: 8AM–6PM | Emergency: 24/7" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                  <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "#C9A84C", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{c.label}</div>
                    <div style={{ color: "#fff", fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: 24, marginTop: 8 }}>
                <div style={{ color: "#9BB5D6", fontSize: 14, marginBottom: 16 }}>Follow us</div>
                <div style={{ display: "flex", gap: 12 }}>
                  {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                    <span key={s} style={{
                      border: "1px solid rgba(201,168,76,0.3)", borderRadius: 6,
                      padding: "6px 14px", color: "#C9A84C", fontSize: 12, fontWeight: 600
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: "#112240", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 12, padding: "40px 32px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
                <h3 style={{ color: "#C9A84C", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: "#9BB5D6", fontSize: 16 }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Send us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input style={inputStyle} required placeholder="Your name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input style={inputStyle} required placeholder="+971 XX XXX XXXX"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input style={inputStyle} type="email" placeholder="your@email.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={labelStyle}>Service Required</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service...</option>
                    <option>Installation</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                    <option>Emergency Service</option>
                    <option>Free Site Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                    placeholder="Describe your requirements..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                  color: "#0A1628", fontWeight: 700, fontSize: 16,
                  padding: "14px", borderRadius: 6, border: "none", cursor: "pointer"
                }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
