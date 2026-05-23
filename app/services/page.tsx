import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore chiropractic adjustments, movement therapy, wellness guidance, and more at Spine Bar Chiropractic in Toluca Lake.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Comprehensive care for every stage of recovery."
        description="From acute pain relief to long-term wellness, our services are designed to meet you where you are — with honesty, precision, and respect for your time."
      />
      <ServicesSection />
      <BookingCTA />
    </>
  );
}
