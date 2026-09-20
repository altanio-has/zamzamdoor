"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blog";

export default function BlogListPage() {
  return (
    <main style={{ backgroundColor: "#0A1628" }}>
      <Navbar />

      <section style={{
        background: "linear-gradient(135deg, #0A1628 0%, #112240 50%, #0A1628 100%)",
        paddingTop: 160,
        paddingBottom: 80,
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ color: "#9BB5D6", fontSize: 14, marginBottom: 20 }}>
            <Link href="/" style={{ color: "#9BB5D6", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9BB5D6")}>
              Home
            </Link>
            {" / "}
            <span style={{ color: "#C9A84C" }}>Blog</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 900, marginBottom: 16 }}>
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Zam Zam Door
            </span>{" "}
            Blog
          </h1>
          <p style={{ color: "#9BB5D6", fontSize: 18, lineHeight: 1.8, maxWidth: 640 }}>
            Guides and tips on automatic doors, gates, and access control for homes and businesses across UAE and GCC.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0A1628", padding: "0 0 100px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: 12,
                padding: "28px 24px",
                textDecoration: "none",
                display: "block",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#C9A84C";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.readMinutes} min read
                </div>
                <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 22, marginBottom: 12, lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ color: "#9BB5D6", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
