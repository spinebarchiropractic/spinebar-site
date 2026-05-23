"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-cream-border bg-green py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#9d875320,_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <FadeIn>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-cream md:text-5xl lg:text-6xl">
            Your first visit starts with a conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            Book online in minutes. We&apos;ll take the time to understand your
            goals and build a care plan that actually makes sense for you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={SITE.bookingUrl}
              external
              variant="secondary"
              className="!bg-cream !text-green hover:!bg-cream-dark"
            >
              Book Your Appointment
            </Button>
            <a
              href={SITE.phoneHref}
              className="rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              Call {SITE.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
