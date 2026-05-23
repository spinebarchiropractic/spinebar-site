import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection preview />
      <AboutSection preview />
      <TestimonialsSection />
      <FAQSection />
      <BookingCTA />
      <ContactSection />
    </>
  );
}
