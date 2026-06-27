"use client";
import { useState } from "react";

const faqs = [
  { q: "What areas do you serve?", a: "We serve all emirates across the UAE including Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, as well as GCC countries." },
  { q: "Do you offer emergency repair services?", a: "Yes, our team is available 24/7 for emergency door repairs. We respond as quickly as possible and our technicians carry full inventories of parts for on-site fixes." },
  { q: "Do you offer free site visits?", a: "Absolutely. We provide complimentary site inspections for all door and gate systems before providing any estimates or service plans — no obligation." },
  { q: "What brands do you work with?", a: "We are authorized dealers and installers for leading brands including DoorHan, Came, Nice, BFT, FAAC, and Hormann, among others." },
  { q: "How long does installation take?", a: "Installation time depends on the type and size of the door. Most residential doors are completed within a day, while larger industrial installations may take 2–3 days." },
  { q: "Do your installations come with a warranty?", a: "Yes, all our installations are backed by warranty coverage. Contact us for specific warranty terms based on the product and service." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Frequently Asked{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Questions
            </span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              backgroundColor: "#112240",
              border: `1px solid ${open === i ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
              borderRadius: 10,
              overflow: "hidden",
              transition: "border-color 0.3s"
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", textAlign: "left", padding: "20px 24px",
                background: "none", border: "none", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16
              }}>
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{f.q}</span>
                <span style={{ color: "#C9A84C", fontSize: 20, flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", color: "#9BB5D6", fontSize: 14, lineHeight: 1.8 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
