"use client";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
            OUR PRODUCTS
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
            Complete Automatic Door and{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Industrial Door Solutions
            </span>
          </h2>
          <p style={{ color: "#9BB5D6", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>
            We supply and install the full range of automatic door systems for residential, commercial, and industrial applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.title} style={{
              backgroundColor: "#112240",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: 10,
              padding: "28px 24px",
              transition: "all 0.3s",
              cursor: "default"
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A84C";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(201,168,76,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: "#7A9CBD", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
