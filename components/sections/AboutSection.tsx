"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DOCTOR, SITE } from "@/lib/constants";

type AboutSectionProps = {
  preview?: boolean;
};

function DoctorHeadshot({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={DOCTOR.headshotAlt}
        className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-cream-border bg-cream-dark px-6 text-center"
      >
        {/* Placeholder slot — replace with <Image> when headshot is ready */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold-light/60 bg-cream">
          <span className="font-serif text-4xl text-gold">AC</span>
        </div>
        <p className="max-w-[12rem] text-xs uppercase tracking-[0.2em] text-gold">
          Photo coming soon
        </p>
      </div>
      <figcaption className="sr-only">{DOCTOR.headshotAlt}</figcaption>
    </figure>
  );
}

export function AboutSection({ preview = false }: AboutSectionProps) {
  if (!preview) {
    return (
      <section
        id="about"
        className="border-t border-cream-border bg-cream-dark py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:items-start">
            <FadeIn direction="right">
              <DoctorHeadshot />
            </FadeIn>

            <div>
              <FadeIn>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
                  {DOCTOR.practice}
                </p>
                <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
                  {DOCTOR.name}
                </h2>
              </FadeIn>

              <FadeIn className="mt-8 space-y-6" delay={0.1}>
                {DOCTOR.bio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-lg leading-relaxed text-green-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </FadeIn>

              <FadeIn className="mt-10 flex flex-wrap gap-4" delay={0.15}>
                <Button href={SITE.bookingUrl} external variant="primary">
                  Book a Consultation
                </Button>
                <Button href="https://mysupdoc.com" external variant="outline">
                  Explore SupDoc
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="border-t border-cream-border bg-cream-dark py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              label="About"
              title={DOCTOR.headline}
              description={DOCTOR.previewIntro}
            />
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Meet Dr. Chakrian
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <DoctorHeadshot className="max-w-sm mx-auto lg:mx-0" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
