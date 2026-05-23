import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Spine Bar Chiropractic — a modern, patient-first chiropractic practice in Toluca Lake built on honest guidance and thoughtful care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Healthcare that feels human again."
        description="We built Spine Bar around a simple idea: chiropractic care should be calm, honest, and genuinely focused on helping you feel better."
      />
      <AboutSection />
      <TestimonialsSection />
      <BookingCTA />
    </>
  );
}
