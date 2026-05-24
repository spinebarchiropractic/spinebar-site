"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE, DOCTOR } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cream-dark/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">
              Holistic Chiropractic Care In {SITE.location}
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
              {SITE.tagline}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-green-muted lg:text-xl lg:leading-9">
              {SITE.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={SITE.bookingUrl} external variant="primary">
                Book Appointment
              </Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted">
              <span>{SITE.location}</span>
              <a href={SITE.phoneHref} className="transition-colors hover:text-green">
                {SITE.phone}
              </a>
              <span>{SITE.hours}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="overflow-hidden rounded-[40px] border border-cream-border bg-cream-dark">
              {/* Photo placeholder — replace src with real headshot when ready */}
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 border-b border-cream-border bg-cream/40">
                <Image
                  src="/logo/spinebar-logo.png"
                  alt={SITE.name}
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain opacity-40"
                />
                <p className="text-xs uppercase tracking-[0.25em] text-gold/60">
                  Photo coming soon
                </p>
              </div>
              <div className="space-y-3 p-8">
                <p className="font-serif text-xl text-green">{DOCTOR.name}</p>
                <p className="text-sm text-green-muted">
                  California-licensed chiropractor · Spine Bar Chiropractic
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    "Manual diversified approach",
                    "Solo practice — every visit with Dr. Chakrian",
                    "Functional medicine perspective",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="h-px w-4 flex-shrink-0 bg-gold/50" />
                      <p className="text-xs text-green-muted">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
