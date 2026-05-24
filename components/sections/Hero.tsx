"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const credentials = [
  "Manual-First Adjustments",
  "Solo Practice · No Rotating Staff",
  "Functional Medicine Perspective",
  "Toluca Lake, CA",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
      {/* Subtle right-side gradient for depth */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-cream-dark/70 via-cream-dark/20 to-transparent"
        aria-hidden="true"
      />
      {/* Left accent line */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:left-12"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-10 bg-gold/70 flex-shrink-0" />
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Holistic Chiropractic · {SITE.location}
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-green md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {SITE.tagline}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-green-muted lg:text-xl">
            {SITE.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={SITE.bookingUrl} external variant="primary">
              Book Appointment
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </FadeIn>

        {/* Credential tags */}
        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-wrap gap-3">
            {credentials.map((c) => (
              <span
                key={c}
                className="rounded-full border border-cream-border bg-cream-dark/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-green-muted backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Info strip */}
        <FadeIn delay={0.1}>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-cream-border pt-8 text-sm text-text-muted">
            <span>{SITE.location}</span>
            <a href={SITE.phoneHref} className="transition-colors hover:text-green">
              {SITE.phone}
            </a>
            <span>{SITE.hours}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
