const testimonials = [
  { name: "Ahmed Al Mansoori", role: "Villa Owner, Abu Dhabi", text: "Excellent service! They installed our garage door quickly and professionally. The team was very responsive and the quality is outstanding.", stars: 5 },
  { name: "Mohammed Al Rashidi", role: "Warehouse Manager, Dubai", text: "We needed emergency repair for our industrial roller shutter. Zam Zam Door responded within hours and fixed it on the spot. Highly recommended.", stars: 5 },
  { name: "Fatima Al Zaabi", role: "Property Developer, Sharjah", text: "We used them for automatic sliding doors in our commercial building. Great quality DoorHan products, professional installation, and excellent after-sales support.", stars: 5 },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#0A1B30", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>TESTIMONIALS</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Clients Say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} style={{
              backgroundColor: "#112240",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 12, padding: "32px 28px"
            }}>
              <div style={{ color: "#C9A84C", fontSize: 20, marginBottom: 16 }}>
                {"★".repeat(t.stars)}
              </div>
              <p style={{ color: "#9BB5D6", fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                <div style={{ color: "#C9A84C", fontSize: 13, marginTop: 4 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
