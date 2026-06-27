import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A1628" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Services />
      <WhyUs />
      <Brands />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
