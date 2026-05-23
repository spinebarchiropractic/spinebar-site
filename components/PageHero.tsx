"use client";

import { FadeIn } from "@/components/motion/FadeIn";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-cream-border bg-cream-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">{label}</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-muted">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
