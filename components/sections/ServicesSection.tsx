"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Baby,
  ClipboardCheck,
  Heart,
  Leaf,
  RefreshCw,
  Sparkles,
  Target,
  ChevronDown,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            description="Every treatment plan is built around your body, your goals, and what you actually need."
          />
        </FadeIn>

        <div className="mt-16 space-y-3">
          {displayed.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isOpen = openIndex === index;
            return (
              <FadeIn key={service.title} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-cream-border bg-cream-dark/30 transition-colors hover:border-gold-light/60">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green/5 text-gold transition-colors duration-300">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="flex-1 font-serif text-xl text-green lg:text-2xl">
                      {service.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-gold"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 pl-20 text-base leading-relaxed text-green-muted">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

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
