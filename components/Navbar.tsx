"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(201,168,76,0.3)" }}
      className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Zam Zam Automatic Door Repairs Logo" width={52} height={52} style={{ borderRadius: "50%" }} />
          <div>
            <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>ZAM ZAM</div>
            <div style={{ color: "#fff", fontSize: 10, letterSpacing: 1.5, opacity: 0.9 }}>AUTOMATIC DOOR REPAIRS</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              style={{ color: "#ccc", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}>
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{
            background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
            color: "#0A1628", fontWeight: 700, fontSize: 14,
            padding: "10px 24px", borderRadius: 4
          }}>
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ color: "#C9A84C", fontSize: 24, background: "none", border: "none", cursor: "pointer" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#112240", borderTop: "1px solid rgba(201,168,76,0.2)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "#ccc", fontSize: 15, fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: "linear-gradient(135deg, #C9A84C, #E8C96D)",
            color: "#0A1628", fontWeight: 700, fontSize: 14,
            padding: "10px 24px", borderRadius: 4, textAlign: "center"
          }}>
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
