export default function Hero() {
  return (
    <section id="home" style={{
      background: "linear-gradient(135deg, #0A1628 0%, #112240 50%, #0A1628 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 80
    }}>
      {/* Background pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 40%)",
        pointerEvents: "none"
      }} />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div style={{
              display: "inline-block",
              border: "1px solid rgba(201,168,76,0.5)",
              borderRadius: 100,
              padding: "6px 20px",
              color: "#C9A84C",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
              letterSpacing: 1
            }}>
              UAE & GCC WIDE SERVICE
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Premium{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Automatic Door
              </span>{" "}
              Solutions
            </h1>

            <p style={{ color: "#9BB5D6", fontSize: 18, lineHeight: 1.8, marginBottom: 36, maxWidth: 500 }}>
              From garage doors to industrial shutters, we supply, install, and maintain the full range of automatic door systems across UAE and GCC. Quality products. Expert installation. 24/7 support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                color: "#0A1628", fontWeight: 700, fontSize: 16,
                padding: "14px 32px", borderRadius: 6,
                textDecoration: "none", display: "inline-block"
              }}>
                Get Free Quote
              </a>
              <a href="#products" style={{
                border: "2px solid #C9A84C",
                color: "#C9A84C", fontWeight: 700, fontSize: 16,
                padding: "14px 32px", borderRadius: 6,
                textDecoration: "none", display: "inline-block"
              }}>
                View Products
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-6 mt-12">
              {["✓ Free Site Visit", "✓ 24/7 Emergency", "✓ All UAE & GCC"].map((b) => (
                <span key={b} style={{ color: "#C9A84C", fontSize: 14, fontWeight: 600 }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Right — visual cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { icon: "🚪", title: "Automatic Doors", desc: "Sliding, swinging & revolving" },
              { icon: "🏠", title: "Garage Doors", desc: "Residential & commercial" },
              { icon: "🔒", title: "Security Gates", desc: "Barriers & turnstiles" },
              { icon: "🏭", title: "Industrial Doors", desc: "Roller shutters & high-speed" },
            ].map((c) => (
              <div key={c.title} style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: 12, padding: "24px 20px",
                transition: "all 0.3s"
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                <div style={{ color: "#9BB5D6", fontSize: 13 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
