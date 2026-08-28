"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { categories, products, ProductCategory } from "@/data/products";

export default function CategoryPage({ slug }: { slug: ProductCategory }) {
  const category = categories.find((c) => c.slug === slug)!;
  const items = products.filter((p) => p.category === slug);

  return (
    <main style={{ backgroundColor: "#0A1628" }}>
      <Navbar />

      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #0A1628 0%, #112240 50%, #0A1628 100%)",
        paddingTop: 160,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(201,168,76,0.08) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: "relative" }}>
          <div style={{ color: "#9BB5D6", fontSize: 14, marginBottom: 20 }}>
            <Link href="/" style={{ color: "#9BB5D6", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9BB5D6")}>
              Home
            </Link>
            {" / "}
            <span style={{ color: "#C9A84C" }}>{category.title}</span>
          </div>

          <div className={category.heroImage ? "grid md:grid-cols-2 gap-12 items-center" : undefined}>
            <div>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{category.icon}</div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: 16 }}>
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {category.title}
                </span>
              </h1>
              <p style={{ color: "#9BB5D6", fontSize: 18, lineHeight: 1.8, maxWidth: category.heroImage ? undefined : 640 }}>
                {category.description}
              </p>
              <a href="#contact" style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
                color: "#0A1628", fontWeight: 700, fontSize: 16,
                padding: "14px 32px", borderRadius: 6,
                textDecoration: "none", display: "inline-block", marginTop: 32
              }}>
                Get Free Quote
              </a>
            </div>

            {category.heroImage && (
              <div className="hidden md:block" style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
              }}>
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  width={800}
                  height={600}
                  priority
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ backgroundColor: "#0A1628", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <div key={p.title} style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 10,
                padding: "28px 24px"
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "#7A9CBD", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Other categories */}
          <div style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>
              EXPLORE MORE
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.filter((c) => c.slug !== slug).map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 12, padding: "24px 20px",
                  textDecoration: "none", display: "block",
                  transition: "all 0.3s"
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#C9A84C";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                  <div style={{ color: "#9BB5D6", fontSize: 13 }}>{c.tagline}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
