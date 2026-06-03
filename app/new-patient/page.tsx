import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { ClipboardList, Shirt, Clock, CreditCard, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "New Patient Information",
  description:
    "Everything you need to know before your first visit to Spine Bar Chiropractic in Toluca Lake. What to bring, what to wear, and what to expect.",
};

const steps = [
  {
    number: "01",
    title: "Health history & conversation",
    description:
      "We start by understanding you — not just your symptoms. Where the pain is, when it started, what makes it better or worse, your overall health history, and your goals. This isn't a form-filling exercise. It's a real conversation.",
    duration: "15–20 min",
  },
  {
    number: "02",
    title: "Postural & orthopedic assessment",
    description:
      "Dr. Chakrian performs a full postural analysis, orthopedic provocation tests relevant to your presentation, and hands-on motion palpation of the spine. We identify exactly where restriction, dysfunction, and compensation are occurring.",
    duration: "15–20 min",
  },
  {
    number: "03",
    title: "Findings review",
    description:
      "You'll hear exactly what we found, in plain language. What's restricted, what's compensating, and what we recommend. No mystery, no pressure. If chiropractic care isn't the right fit for your presentation, we'll tell you that too.",
    duration: "5–10 min",
  },
  {
    number: "04",
    title: "First treatment — same visit",
    description:
      "Most patients receive their first adjustment the same day. We don't make you wait for a follow-up appointment to start feeling better. Treatment is specific to what we found, adapted to your comfort level and history.",
    duration: "15–20 min",
  },
];

const bringItems = [
  {
    icon: ClipboardList,
    label: "Insurance or ID",
    detail:
      "If you're coming in on a PI lien or Workers' Comp case, bring any claim numbers, attorney contact info, or adjuster details you have. For cash patients, just a valid ID.",
  },
  {
    icon: Shirt,
    label: "Relaxed-fit clothing",
    detail:
      "Wear clothing you can move in. Shorts, athletic wear, or anything loose-fitting works well. We need access to your spine — tight jeans and restrictive clothing make assessment harder.",
  },
  {
    icon: ClipboardList,
    label: "Prior imaging if you have it",
    detail:
      "If you have recent X-rays or MRI results relevant to your condition, bring them or have them available digitally. It gives us a more complete picture and saves time.",
  },
  {
    icon: Clock,
    label: "45–60 minutes",
    detail:
      "Your first visit takes longer than follow-up appointments — intentionally. We don't rush the intake. Block out a full hour and don't feel rushed.",
  },
];

const payerInfo = [
  {
    type: "Cash Pay",
    description:
      "Pay at time of service. We provide a receipt at every visit. No insurance needed, no pre-authorization.",
  },
  {
    type: "Personal Injury (PI) Lien",
    description:
      "No out-of-pocket cost while your case is active. We document thoroughly and coordinate with your attorney's office directly. Bring claim or attorney info.",
  },
  {
    type: "Workers' Compensation",
    description:
      "We accept WC cases. Bring your claim number and employer/adjuster contact. Authorization may be required depending on your carrier.",
  },
  {
    type: "Superbill / PPO Out-of-Network",
    description:
      "Pay at time of service and we provide a detailed superbill for you to submit to your PPO for reimbursement. Reimbursement varies by plan.",
  },
];

export default function NewPatientPage() {
  return (
    <>
      <PageHero
        label="New Patients"
        title="Your first visit, explained."
        description="No surprises, no pressure. Here's exactly what happens when you walk through the door for the first time."
      />

      {/* What to bring */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <FadeIn>
            <div className="mb-16">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Before You Arrive</p>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
                What to bring & wear
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {bringItems.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <div className="rounded-2xl border border-cream-border bg-cream-dark p-8">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green/[0.06] text-gold">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-serif text-xl text-green">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-green-muted">{item.detail}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* Visit walkthrough */}
      <section className="border-t border-cream-border bg-cream-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Your First Visit</p>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
                What happens, step by step.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-green-muted">
                Your first appointment runs 45–60 minutes. Every minute of it is productive.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="grid gap-6 rounded-2xl border border-cream-border bg-cream p-8 lg:grid-cols-[80px_1fr_140px] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cream-border bg-cream-dark">
                    <span className="font-serif text-xl text-gold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-2xl text-green">{step.title}</h3>
                    <p className="text-base leading-relaxed text-green-muted">{step.description}</p>
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <span className="rounded-full border border-cream-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-green-muted">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* Payer info */}
      <section className="border-t border-cream-border bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Payment & Insurance</p>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
                How we work with your coverage.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-green-muted">
                We accept cash, PI liens, Workers&apos; Comp, and can provide a superbill for PPO reimbursement. We&apos;re actively credentialing with major insurance networks — contact us to ask about your specific plan.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {payerInfo.map((payer) => (
              <StaggerItem key={payer.type}>
                <div className="rounded-2xl border border-cream-border bg-cream-dark p-8">
                  <div className="mb-1 flex items-center gap-3">
                    <CreditCard size={16} strokeWidth={1.5} className="text-gold" />
                    <p className="text-xs uppercase tracking-[0.25em] text-gold">{payer.type}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-green-muted">{payer.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12">
            <div className="rounded-2xl border border-cream-border bg-cream-dark p-8">
              <p className="mb-2 text-sm text-green-muted">
                <strong className="font-medium text-green">Questions about your coverage?</strong>{" "}
                Call us before you book and we&apos;ll confirm what we can accept for your specific situation. We&apos;d rather spend two minutes on the phone than have you show up with the wrong expectation.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-green"
              >
                Call {SITE.phone}
                <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Ready CTA */}
      <section className="border-t border-cream-border bg-cream-dark py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">You&apos;re Ready</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-green md:text-5xl">
              Book your first visit.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-green-muted">
              Online booking takes about two minutes. Pick a time that works for you and we&apos;ll see you same day for assessment and first treatment.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE.bookingUrl} external variant="primary">
                Book Online Now
              </Button>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-green/20 px-7 py-4 text-sm font-semibold text-green transition-colors hover:border-green/40 hover:bg-green/5"
              >
                Call {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
