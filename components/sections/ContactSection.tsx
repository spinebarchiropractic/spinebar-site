"use client";

import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const contactItems = [
  {
    icon: MapPin,
    label: "Location",
    value: SITE.address,
    href: SITE.mapsUrl,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.hours,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-cream-border bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading
              label="Contact"
              title="Visit us in Toluca Lake."
              description="We're here to answer your questions and help you take the first step toward feeling better."
            />
            <div className="mt-8">
              <Button href={SITE.bookingUrl} external variant="primary">
                Book Appointment
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="rounded-2xl border border-cream-border bg-cream-dark/40 p-6 transition-all duration-300 hover:border-gold-light hover:bg-cream-dark/70">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green/5 text-gold">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-green">
                    {item.value}
                  </p>
                </div>
              );

              return (
                <StaggerItem key={item.label}>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Directions card — replaces broken map embed */}
        <FadeIn className="mt-16">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-cream-border bg-cream-dark transition-all duration-300 hover:border-gold-light hover:shadow-[0_8px_30px_-12px_rgba(157,135,83,0.2)]"
          >
            <div className="flex items-center justify-between p-8 lg:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Find Us
                </p>
                <p className="mt-2 font-serif text-2xl text-green lg:text-3xl">
                  {SITE.address}
                </p>
                <p className="mt-1 text-sm text-green-muted">
                  Free street parking available on Riverside Dr
                </p>
              </div>
              <div className="ml-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-cream-border bg-cream text-gold transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-cream">
                <ExternalLink size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div className="border-t border-cream-border px-8 py-4 lg:px-10">
              <span className="text-sm font-medium text-gold transition-colors duration-300 group-hover:text-green">
                Open in Google Maps →
              </span>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
