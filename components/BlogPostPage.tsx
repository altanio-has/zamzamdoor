"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BlogPost } from "@/data/blog";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <main style={{ backgroundColor: "#0A1628" }}>
      <Navbar />

      <section style={{
        background: "linear-gradient(135deg, #0A1628 0%, #112240 50%, #0A1628 100%)",
        paddingTop: 160,
        paddingBottom: 64,
      }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ color: "#9BB5D6", fontSize: 14, marginBottom: 20 }}>
            <Link href="/" style={{ color: "#9BB5D6", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9BB5D6")}>
              Home
            </Link>
            {" / "}
            <Link href="/blog" style={{ color: "#9BB5D6", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9BB5D6")}>
              Blog
            </Link>
            {" / "}
            <span style={{ color: "#C9A84C" }}>{post.title}</span>
          </div>
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {post.readMinutes} min read
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: post.heroImage ? 40 : 0 }}>
            {post.title}
          </h1>

          {post.heroImage && (
            <div style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
            }}>
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </section>

      <section style={{ backgroundColor: "#0A1628", padding: "64px 0 100px" }}>
        <div className="max-w-4xl mx-auto px-6">
          {post.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: 48 }}>
              <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ color: "#9BB5D6", fontSize: 16, lineHeight: 1.9, marginBottom: 16 }}>{p}</p>
              ))}
              {s.linkHref && s.linkLabel && (
                <Link href={s.linkHref} style={{
                  color: "#C9A84C", fontWeight: 700, fontSize: 15, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 6
                }}>
                  {s.linkLabel} →
                </Link>
              )}
            </div>
          ))}

          <div style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            marginTop: 32,
            paddingTop: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Link href="/blog" style={{ color: "#9BB5D6", fontSize: 14, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9BB5D6")}>
              ← Back to Blog
            </Link>
            <a href="#contact" style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
              color: "#0A1628", fontWeight: 700, fontSize: 15,
              padding: "12px 28px", borderRadius: 6,
              textDecoration: "none", display: "inline-block"
            }}>
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
