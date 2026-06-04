import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Chiropractic adjustments, soft tissue therapy, prenatal and pediatric care, and wellness consultations at Spine Bar Chiropractic in Toluca Lake.",
  alternates: { canonical: "https://spinebar.com/services" },
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
      <FadeIn>
        <section className="border-t border-cream-border bg-cream-dark py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">Conditions We Treat</p>
            <h2 className="mb-4 font-serif text-3xl text-green md:text-4xl">
              Not sure which service applies to you?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-green-muted">
              Browse conditions by name — each page explains what we look for, what we treat, and what your first visit looks like.
            </p>
            <Link
              href="/conditions"
              className="inline-flex items-center justify-center rounded-full border border-gold-light px-7 py-4 text-sm font-semibold tracking-wide text-green transition-all duration-300 hover:bg-cream-dark"
            >
              Browse All Conditions
            </Link>
          </div>
        </section>
      </FadeIn>
      <BookingCTA />
    </>
  );
}
