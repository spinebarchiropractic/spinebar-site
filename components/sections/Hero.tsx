"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

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
            <div className="rounded-[40px] border border-cream-border bg-cream-dark p-10 lg:p-12">
              <Image
                src="/logo/spinebar-logo.png"
                alt={SITE.name}
                width={128}
                height={128}
                className="mx-auto mb-8 h-28 w-28 object-contain lg:h-32 lg:w-32"
              />
              <h2 className="text-center font-serif text-3xl lg:text-4xl">
                Modern Chiropractic.
              </h2>
              <p className="mx-auto mt-6 max-w-md text-center text-lg leading-relaxed text-green-light">
                Built for patients looking for honest care, thoughtful treatment,
                wellness guidance, and a calmer healthcare experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
