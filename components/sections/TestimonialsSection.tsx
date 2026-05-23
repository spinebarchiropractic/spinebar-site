"use client";

import { Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="border-t border-cream-border bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <SectionHeading
            label="Testimonials"
            title="What our patients say."
            description="Real experiences from people who chose a calmer, more thoughtful approach to chiropractic care."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-cream-border bg-cream p-8 lg:p-10">
                <Quote
                  size={32}
                  className="mb-6 text-gold-light"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="flex-1 font-serif text-xl leading-relaxed text-green lg:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-cream-border pt-6">
                  <cite className="not-italic">
                    <p className="text-sm font-semibold text-green">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                      {testimonial.detail}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
