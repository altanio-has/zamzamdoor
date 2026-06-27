const services = [
  {
    icon: "🔧",
    title: "Installation",
    desc: "Expert installation of all automatic entrance systems by trained specialists. We are market leaders in supply and installation.",
    highlight: true
  },
  {
    icon: "🛠️",
    title: "Repair",
    desc: "Fast and efficient repair service for garage doors, automatic doors, gates, barriers, industrial doors, roller shutters, and more.",
  },
  {
    icon: "⚙️",
    title: "Maintenance",
    desc: "Quality servicing and preventative maintenance programs for automatic entrance systems throughout UAE and GCC.",
  },
  {
    icon: "🚨",
    title: "24/7 Emergency Service",
    desc: "Our expert team is available around the clock. Technicians carry full inventories for on-site repairs at any time.",
    highlight: true
  },
  {
    icon: "🏠",
    title: "Free Site Visits",
    desc: "Complimentary site inspections for all door and gate systems before providing estimates or service plans.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#0A1B30", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
            OUR SERVICES
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Everything You Need,{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Done Right
            </span>
          </h2>
          <p style={{ color: "#9BB5D6", fontSize: 17, maxWidth: 580, margin: "0 auto" }}>
            From installation to emergency repairs, we provide comprehensive door services across UAE and GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} style={{
              backgroundColor: s.highlight ? "rgba(201,168,76,0.08)" : "#112240",
              border: `1px solid ${s.highlight ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)"}`,
              borderRadius: 10,
              padding: "36px 28px",
              position: "relative",
              transition: "all 0.3s"
            }}>
              {s.highlight && (
                <div style={{
                  position: "absolute", top: -1, right: 24,
                  background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                  color: "#0A1628", fontSize: 10, fontWeight: 700,
                  padding: "4px 12px", borderRadius: "0 0 6px 6px", letterSpacing: 1
                }}>POPULAR</div>
              )}
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                backgroundColor: "rgba(201,168,76,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20
              }}>{s.icon}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "#7A9CBD", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
