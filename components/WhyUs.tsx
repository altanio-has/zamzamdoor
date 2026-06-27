const reasons = [
  { icon: "🏆", title: "Market Leaders", desc: "Trusted by hundreds of clients across UAE and GCC for automatic door solutions." },
  { icon: "⚡", title: "Fast Response", desc: "Our team answers to repair and service requests as quickly as possible, every time." },
  { icon: "🔩", title: "Top Brands", desc: "We work with leading global brands ensuring quality parts and reliable performance." },
  { icon: "📋", title: "Free Estimates", desc: "Complimentary site visits and estimates — no obligation, no hidden fees." },
  { icon: "🛡️", title: "Warranty Backed", desc: "All installations come with warranty support for your complete peace of mind." },
  { icon: "🌍", title: "UAE & GCC Coverage", desc: "Serving clients across all emirates and GCC countries with consistent quality." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
              WHY CHOOSE US
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
              The Trusted Name in{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Door Solutions
              </span>
            </h2>
            <p style={{ color: "#9BB5D6", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
              Zam Zam Door brings years of expertise and a commitment to quality in every project. We supply, install, and service all types of automatic doors with professionalism and speed.
            </p>
            <a href="#contact" style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
              color: "#0A1628", fontWeight: 700, fontSize: 16,
              padding: "14px 36px", borderRadius: 6,
              textDecoration: "none", display: "inline-block"
            }}>
              Contact Us Today
            </a>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 10,
                padding: "24px 20px",
                display: "flex", gap: 16, alignItems: "flex-start"
              }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{r.icon}</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{r.title}</div>
                  <div style={{ color: "#7A9CBD", fontSize: 13, lineHeight: 1.7 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
