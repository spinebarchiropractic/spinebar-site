"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ABOUT_CONTENT } from "@/lib/constants";

type AboutSectionProps = {
  preview?: boolean;
};

export function AboutSection({ preview = false }: AboutSectionProps) {
  const values = preview ? ABOUT_CONTENT.values.slice(0, 2) : ABOUT_CONTENT.values;

  return (
    <section
      id="about"
      className="border-t border-cream-border bg-cream-dark py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading
              label="About Us"
              title={ABOUT_CONTENT.headline}
              description={ABOUT_CONTENT.intro}
            />
            {preview && (
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Learn More About Us
                </Button>
              </div>
            )}
          </FadeIn>

          <StaggerContainer className="grid gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-cream-border bg-cream p-6 lg:p-8">
                  <h3 className="font-serif text-xl text-green lg:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-green-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {!preview && (
          <FadeIn className="mt-20 max-w-3xl">
            <p className="text-lg leading-relaxed text-green-muted">
              {ABOUT_CONTENT.mission}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
