import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ_ITEMS } from "@/lib/constants";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServicesSection />
      <AboutSection preview />
      {/* Testimonials hidden until real patient reviews are collected. */}
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <BookingCTA />
      <ContactSection />
    </>
  );
}
