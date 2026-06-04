import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ConditionsSection } from "@/components/sections/ConditionsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Conditions Treated",
  description:
    "Spine Bar Chiropractic treats lower back pain, neck pain, sciatica, disc herniation, headaches, sports injuries, and more in Toluca Lake and the surrounding San Fernando Valley.",
  alternates: { canonical: "https://spinebar.com/conditions" },
};

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        label="Conditions We Treat"
        title="If it's affecting your spine, nerves, or how you move — we can help."
        description="Most patients come in with one of the conditions below. Some come in with several. Whatever brought you here, the approach is the same: understand it fully before treating it."
      />
      <ConditionsSection />
      <BookingCTA />
    </>
  );
}
