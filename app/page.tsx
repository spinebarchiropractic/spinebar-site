import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
// Testimonials hidden until real patient reviews are collected.
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection preview />
      <AboutSection preview />
      {/* Testimonials hidden until real patient reviews are collected. */}
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <BookingCTA />
      <ContactSection />
    </>
  );
}
