"use client";

import {
  Baby,
  ClipboardCheck,
  Heart,
  Leaf,
  RefreshCw,
  Sparkles,
  Target,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  newPatient: ClipboardCheck,
  adjustment: Sparkles,
  tissue: Target,
  wellnessInitial: Leaf,
  wellnessFollowUp: RefreshCw,
  prenatal: Heart,
  pediatric: Baby,
} as const;

type ServicesSectionProps = {
  preview?: boolean;
};

export function ServicesSection({ preview = false }: ServicesSectionProps) {
  const displayed = preview ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section
      id="services"
      className="border-t border-cream-border bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <SectionHeading
            label="Our Services"
            title="Thoughtful care, tailored to you."
            description="Every treatment plan is built around your body, your goals, and what you actually need — not a cookie-cutter protocol."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayed.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.title}>
                <div className="group h-full rounded-3xl border border-cream-border bg-cream-dark/40 p-8 transition-all duration-500 hover:border-gold-light hover:bg-cream-dark/80 hover:shadow-[0_8px_30px_-12px_rgba(157,135,83,0.25)]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green/5 text-gold transition-colors duration-300 group-hover:bg-green group-hover:text-cream">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-green">{service.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-green-muted">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {preview && (
          <FadeIn className="mt-12 text-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
