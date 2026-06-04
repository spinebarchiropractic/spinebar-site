import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { DOCTOR } from "@/lib/constants";

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
      <ReviewsSection />
      <BookingCTA />
    </>
  );
}
