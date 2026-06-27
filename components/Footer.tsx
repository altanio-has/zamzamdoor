"use client";
const products = ["Garage Doors", "Automatic Gates", "Gate Barriers", "Sliding Doors", "Revolving Doors", "Rolling Shutters"];
const services = ["Installation", "Repair", "Maintenance", "24/7 Emergency", "Free Site Visit"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060F1E", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                width: 44, height: 44, borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 18, color: "#0A1628"
              }}>ZZ</div>
              <div>
                <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: 18 }}>ZAM ZAM</div>
                <div style={{ color: "#fff", fontSize: 10, letterSpacing: 3 }}>DOOR</div>
              </div>
            </div>
            <p style={{ color: "#7A9CBD", fontSize: 14, lineHeight: 1.8 }}>
              Premium automatic door solutions for residential, commercial, and industrial clients across UAE and GCC.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: "#C9A84C", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>PRODUCTS</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {products.map((p) => (
                <a key={p} href="#products" style={{ color: "#7A9CBD", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7A9CBD")}>
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#C9A84C", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>SERVICES</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <a key={s} href="#services" style={{ color: "#7A9CBD", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7A9CBD")}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#C9A84C", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#7A9CBD", fontSize: 14 }}>📍 UAE & GCC</div>
              <div style={{ color: "#7A9CBD", fontSize: 14 }}>📞 +971 XX XXX XXXX</div>
              <div style={{ color: "#7A9CBD", fontSize: 14 }}>✉️ info@zamzamdoor.com</div>
              <a href="#contact" style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                color: "#0A1628", fontWeight: 700, fontSize: 13,
                padding: "10px 20px", borderRadius: 4, textDecoration: "none",
                display: "inline-block", marginTop: 8
              }}>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", marginTop: 48, paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div style={{ color: "#4A6A8A", fontSize: 13 }}>
            © {new Date().getFullYear()} Zam Zam Door. All rights reserved.
          </div>
          <div style={{ color: "#4A6A8A", fontSize: 13 }}>
            zamzamdoor.com
          </div>
        </div>
      </div>
    </footer>
  );
}
