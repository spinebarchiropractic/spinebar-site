import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { CONDITIONS, SITE } from "@/lib/constants";
import { CheckCircle, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.slug === slug);
  if (!condition) return {};
  return {
    title: condition.title,
    description: condition.description,
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.slug === slug);
  if (!condition) notFound();

  const otherConditions = CONDITIONS.filter((c) => c.slug !== slug).slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.spinebar.com" },
      { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://www.spinebar.com/conditions" },
      { "@type": "ListItem", "position": 3, "name": condition.title, "item": `https://www.spinebar.com/conditions/${condition.slug}` },
    ],
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "description": condition.description,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Chiropractic Care",
      "provider": {
        "@type": "Chiropractor",
        "name": "Spine Bar Chiropractic",
                "url": "https://www.spinebar.com",
        "telephone": "+17477747144",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10918 Riverside Dr",
          "addressLocality": "North Hollywood",
          "addressRegion": "CA",
          "postalCode": "91602",
          "addressCountry": "US",
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />
      <PageHero
        label="Conditions We Treat"
        title={condition.title}
        description={condition.description}
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_340px] lg:items-start">

            <div>
              <FadeIn>
                <Link
                  href="/conditions"
                  className="mb-10 inline-flex items-center gap-2 text-sm text-green-muted transition-colors hover:text-green"
                >
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  All Conditions
                </Link>
              </FadeIn>

              <FadeIn className="space-y-6" delay={0.05}>
                {condition.fullDescription.map((para, i) => (
                  <p key={i} className="text-lg leading-relaxed text-green-muted">
                    {para}
                  </p>
                ))}
              </FadeIn>

              {condition.causes && (
                <FadeIn className="mt-14" delay={0.1}>
                  <h2 className="mb-6 font-serif text-3xl text-green">Common causes</h2>
                  <ul className="space-y-3">
                    {condition.causes.map((cause) => (
                      <li key={cause} className="flex items-start gap-3">
                        <CheckCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-gold" />
                        <span className="text-base text-green-muted">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              )}

              {condition.whatToExpect && (
                <FadeIn className="mt-14" delay={0.15}>
                  <div className="rounded-2xl border border-cream-border bg-cream-dark p-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">What to Expect</p>
                    <h3 className="mb-4 font-serif text-2xl text-green">
                      Your first visit for {condition.title.toLowerCase()}
                    </h3>
                    <p className="text-base leading-relaxed text-green-muted">{condition.whatToExpect}</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button href={SITE.bookingUrl} external variant="primary">Book Appointment</Button>
                      <Button href="/new-patient" variant="outline">New Patient Info</Button>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>

            <aside className="space-y-6">
              <FadeIn delay={0.2} direction="left">
                <div className="rounded-2xl border border-cream-border bg-cream-dark p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Clinical Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {condition.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-cream-border bg-cream px-3 py-1.5 text-xs text-green-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-green/10 bg-green p-6 text-cream">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-light">Ready to Begin?</p>
                  <h3 className="mb-3 font-serif text-2xl">Same-day treatment available.</h3>
                  <p className="mb-6 text-sm leading-relaxed text-cream/70">
                    Assessment and first treatment happen in the same visit. No waiting weeks to start feeling better.
                  </p>
                  <Button href={SITE.bookingUrl} external variant="secondary" className="w-full !bg-cream !text-green hover:!bg-cream-dark">
                    Book Your Visit
                  </Button>
                  <a href={SITE.phoneHref} className="mt-3 block text-center text-sm text-cream/60 transition-colors hover:text-cream">
                    Or call {SITE.phone}
                  </a>
                </div>

                <div className="rounded-2xl border border-cream-border bg-cream-dark p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Other Conditions</p>
                  <ul className="space-y-2">
                    {otherConditions.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/conditions/${c.slug}`} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-green-muted transition-colors hover:bg-cream hover:text-green">
                          <span className="font-serif text-base text-gold">{c.icon}</span>
                          {c.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/conditions" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-cream">
                        View all conditions →
                      </Link>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
