"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { CONDITIONS, SITE } from "@/lib/constants";

export function ConditionsSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <FadeIn>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-green-muted">
            Chiropractic care is most effective when it starts with a thorough
            understanding of what&apos;s actually going on. Every condition listed
            here is something Dr. Chakrian regularly evaluates and treats at
            Spine Bar in Toluca Lake.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((condition) => (
            <StaggerItem key={condition.slug}>
              <article className="group flex h-full flex-col rounded-2xl border border-cream-border bg-cream p-8 transition-all duration-300 hover:border-gold/40 hover:bg-cream-dark hover:shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green/[0.08] text-gold">
                  <span className="font-serif text-xl">{condition.icon}</span>
                </div>
                <h2 className="mb-3 font-serif text-2xl leading-snug text-green">
                  {condition.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-green-muted">
                  {condition.description}
                </p>
                {condition.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {condition.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cream-border px-3 py-1 text-xs text-green-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-cream-border bg-cream-dark p-10 text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold">
              Not sure if we can help?
            </p>
            <h3 className="mb-4 font-serif text-3xl text-green">
              Just ask. We&apos;ll be honest.
            </h3>
            <p className="mb-8 text-base leading-relaxed text-green-muted">
              If your condition is outside the scope of chiropractic care,
              we&apos;ll tell you — and point you in the right direction. No
              pressure, no false promises.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE.bookingUrl} external variant="primary">
                Book a Consultation
              </Button>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-green/20 px-7 py-4 text-sm font-semibold text-green transition-colors hover:border-green/40 hover:bg-green/5"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
