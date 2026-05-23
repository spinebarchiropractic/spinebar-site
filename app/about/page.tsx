import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { DOCTOR } from "@/lib/constants";
// Testimonials hidden until real patient reviews are collected.
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "About",
  description: `${DOCTOR.name} — ${DOCTOR.practice}. Diversified, manual-first chiropractic care with a functional medicine perspective.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title={DOCTOR.name}
        description={DOCTOR.practice}
      />
      <AboutSection />
      {/* Testimonials hidden until real patient reviews are collected. */}
      {/* <TestimonialsSection /> */}
      <BookingCTA />
    </>
  );
}
