import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { faqSchema, jsonLd } from "@/lib/schema";

// Home inherits the site-wide title/description from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* FAQPage structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema())}
      />

      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Leadership />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
