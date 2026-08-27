"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const doorTypes = products.filter((p) => p.category === "automatic-doors");

const stats = [
  { value: "500+", label: "Automatic Doors Installed" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Free Site Visits" },
];

const reasons = [
  { icon: "🏆", title: "Trusted Across the UAE", text: "Hundreds of villas, offices, malls, hospitals, and industrial sites across UAE and GCC rely on our automatic doors." },
  { icon: "🔧", title: "Expert Installation", text: "Every automatic door is fitted by trained technicians to international safety and quality standards." },
  { icon: "🔩", title: "Top Global Brands", text: "Authorized dealer of DoorHan and other leading automation brands for reliable parts and performance." },
  { icon: "⚡", title: "Silent, Smooth Operation", text: "Precision-engineered motors and sensors deliver quiet, seamless opening and closing every time." },
  { icon: "🛡️", title: "Safety & Access Control", text: "Motion sensors, access control integration, and safety mechanisms built into every automatic door system." },
  { icon: "📋", title: "Free Site Visits & Estimates", text: "Complimentary inspection and no-obligation quote before any installation or service plan." },
];

const serviceAreas = [
  "Abu Dhabi", "Mussafah", "Khalifa City", "Al Reem Island", "Al Nahyan", "Corniche Abu Dhabi",
  "Dubai", "Business Bay", "Downtown Dubai", "Dubai Marina", "Al Barsha", "Jebel Ali",
  "Sharjah", "Al Nahda Sharjah", "Al Majaz", "Industrial Area Sharjah",
  "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain",
];

const faqs = [
  { q: "What types of automatic doors do you install?", a: "We supply and install automatic sliding, swing, folding, revolving, and glass doors for residential, commercial, and industrial properties across UAE and GCC." },
  { q: "How long does automatic door installation take?", a: "Most residential automatic doors are installed within a day. Larger commercial or multi-door projects typically take 2–3 days depending on scope." },
  { q: "Do automatic doors come with a warranty?", a: "Yes, every automatic door installation is backed by warranty coverage on both parts and workmanship. Contact us for warranty terms specific to your system." },
  { q: "Can automatic doors be integrated with access control?", a: "Absolutely. We integrate motion sensors, card readers, and access control systems with all our automatic door installations for added security." },
  { q: "Do you offer emergency repair for automatic doors?", a: "Yes, our technicians are available 24/7 for emergency automatic door repairs anywhere in the UAE, carrying full parts inventories for on-site fixes." },
  { q: "Which brands of automatic door systems do you use?", a: "We are an authorized dealer for DoorHan and work with other leading automation brands including Came, Nice, BFT, FAAC, and Hormann." },
];

export default function AutomaticDoorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0A1628" }}>
      <Navbar />

      {/* Hero */}
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
            <span style={{ color: "#C9A84C" }}>Automatic Doors</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                AUTOMATIC DOORS UAE
              </div>
              <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                Best{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Automatic Doors
                </span>{" "}
                Company in UAE
              </h1>
              <p style={{ color: "#9BB5D6", fontSize: 18, lineHeight: 1.8, marginBottom: 36 }}>
                Zam Zam Door supplies, installs, and maintains automatic doors for homes, offices, malls, hospitals, and industrial sites across Abu Dhabi, Dubai, Sharjah, and the wider UAE and GCC. Sliding, swing, folding, revolving, and glass — built for smooth, silent, secure entry.
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
                <a href="#types" style={{
                  border: "2px solid #C9A84C",
                  color: "#C9A84C", fontWeight: 700, fontSize: 16,
                  padding: "14px 32px", borderRadius: 6,
                  textDecoration: "none", display: "inline-block"
                }}>
                  View Door Types
                </a>
              </div>
            </div>

            <div className="hidden md:block" style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
            }}>
              <Image
                src="/heroimage.jpg"
                alt="Automatic sliding doors installed by Zam Zam Door in UAE"
                width={800}
                height={600}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#112240", borderTop: "1px solid rgba(201,168,76,0.2)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div style={{ color: "#9BB5D6", fontSize: 14, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door types */}
      <section id="types" style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
              OUR RANGE
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
              Every Type of{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Automatic Door
              </span>
            </h2>
            <p style={{ color: "#9BB5D6", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>
              From minimalist residential entrances to heavy-duty commercial systems, we have the right automatic door for every space.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doorTypes.map((d) => (
              <div key={d.title} style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 10,
                padding: "28px 24px"
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{d.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{d.title}</h3>
                <p style={{ color: "#7A9CBD", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ backgroundColor: "#0A1B30", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>WHY CHOOSE US</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 16 }}>
              The Trusted Name in{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Automatic Doors
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: 12, padding: "28px 24px"
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{r.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{r.title}</h3>
                <p style={{ color: "#9BB5D6", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 24 }}>
            Leading Automatic Doors Company in UAE
          </h2>
          <div style={{ color: "#9BB5D6", fontSize: 16, lineHeight: 1.9, display: "flex", flexDirection: "column", gap: 20 }}>
            <p>
              Automatic doors have become an essential feature for homes, offices, retail spaces, and industrial facilities across the UAE — improving accessibility, energy efficiency, and first impressions. Zam Zam Door supplies, installs, and maintains automatic doors for clients throughout Abu Dhabi, Dubai, Sharjah, and the rest of the UAE and GCC.
            </p>
            <p>
              Our automatic door range covers sliding, swing, folding, revolving, and glass systems, each engineered for smooth, silent operation and long-term durability. Whether you need an automatic door for a villa entrance, a hotel lobby, a hospital, or a warehouse, we tailor the system to your space and traffic requirements.
            </p>
            <p>
              Every automatic door we install is fitted with motion sensors and safety mechanisms as standard, and can be integrated with access control systems for added security. As an authorized dealer of DoorHan and other leading automation brands, we back every installation with genuine parts, warranty coverage, and ongoing maintenance support — plus 24/7 emergency repair when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section style={{ backgroundColor: "#0A1B30", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>SERVICE AREAS</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800 }}>
              Automatic Doors, Wherever You Are
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} style={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: 100,
                padding: "8px 18px",
                color: "#9BB5D6",
                fontSize: 13
              }}>
                Automatic Doors in {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#0A1628", padding: "100px 0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Automatic Doors{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                FAQ
              </span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                backgroundColor: "#112240",
                border: `1px solid ${openFaq === i ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                borderRadius: 10,
                overflow: "hidden",
                transition: "border-color 0.3s"
              }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", textAlign: "left", padding: "20px 24px",
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16
                }}>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{f.q}</span>
                  <span style={{ color: "#C9A84C", fontSize: 20, flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", color: "#9BB5D6", fontSize: 14, lineHeight: 1.8 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section style={{ backgroundColor: "#0A1628", padding: "0 0 100px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ paddingTop: 48, borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>
              EXPLORE MORE
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/garage-doors", icon: "🏠", title: "Garage Doors", desc: "Residential & commercial" },
                { href: "/security-gates", icon: "🔒", title: "Security Gates", desc: "Barriers & turnstiles" },
                { href: "/industrial-doors", icon: "🏭", title: "Industrial Doors", desc: "Roller shutters & high-speed" },
              ].map((c) => (
                <Link key={c.href} href={c.href} style={{
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
                  <div style={{ color: "#9BB5D6", fontSize: 13 }}>{c.desc}</div>
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
