"use client";

import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

const contactItems = [
  { icon: MapPin, label: "Location", value: SITE.address, href: SITE.mapsUrl },
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9am–5pm · Sat 9am–1pm" },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-cream-border bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Top: heading + contact cards */}
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
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-green">{item.value}</p>
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
                  ) : content}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Contact form */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Send a Message</p>
              <h2 className="mb-3 font-serif text-3xl leading-tight text-green md:text-4xl">
                Have a question before booking?
              </h2>
              <p className="text-base leading-relaxed text-green-muted">
                Ask us anything — about your condition, what to expect, insurance, or anything else.
                We respond within one business day.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-cream-border">
            <iframe
              title="Spine Bar Chiropractic location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.3!2d-118.368756!3d34.1520198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf445b1e7905%3A0xcbc8bdbfdaac5cd1!2sSpine%20Bar%20Chiropractic!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between border-t border-cream-border bg-cream-dark px-8 py-5">
              <div>
                <p className="font-serif text-lg text-green">{SITE.address}</p>
                <p className="mt-0.5 text-sm text-green-muted">Free street parking available on Riverside Dr</p>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 flex flex-shrink-0 items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-green"
              >
                Open in Maps
                <ExternalLink size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
