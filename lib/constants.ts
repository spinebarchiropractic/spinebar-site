const ADDRESS = "10918 Riverside Dr, Toluca Lake, CA 91602";

export const SITE = {
  name: "Spine Bar Chiropractic",
  location: "Toluca Lake",
  phone: "747-774-7144",
  phoneHref: "tel:7477747144",
  email: "info@spinebarchiropractic.com",
  emailHref: "mailto:info@spinebarchiropractic.com",
  address: ADDRESS,
  mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`,
  hours: "Mon–Fri 9–5 · Sat 9–1",
  bookingUrl: "https://practice.chirotouch.com/portal/spinebarchiropractic",
  tagline: "The last chiropractor you'll want to try.",
  description:
    "A solo practice in Toluca Lake where every visit is one-on-one with Dr. Chakrian. Real time, honest answers, and care that actually gets to the root of what's going on.",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SERVICES = [
  {
    title: "New Patient Exam & Assessment",
    description:
      "Before anything else, we listen. Your first visit is a full conversation — health history, goals, what's been bothering you and for how long. We pair that with a comprehensive physical assessment and postural analysis, and your first adjustment. You'll leave knowing exactly what's going on and what we plan to do about it.",
    icon: "newPatient",
  },
  {
    title: "Chiropractic Adjustment",
    description:
      "Every adjustment at Spine Bar is manual, specific, and done with intention. Dr. Chakrian uses a diversified approach — adapting to your body, not the other way around. Whether it's your spine, your hips, or your extremities, the goal is always the same: restore movement, reduce pain, and help your body do what it's designed to do.",
    icon: "adjustment",
  },
  {
    title: "Soft Tissue Therapy",
    description:
      "Tight muscles don't release on their own. Targeted myofascial release and hands-on muscle work get to the root of chronic tension, complement your adjustment, and give your body a better baseline to heal from. Most patients notice the difference the same day.",
    icon: "tissue",
  },
  {
    title: "Wellness Consultation – Initial",
    description:
      "This isn't a typical doctor's visit. We go deep — nutrition, supplementation, sleep, movement, bloodwork if you have it, and the full picture of how your body is actually functioning. Dr. Chakrian will tell you what he sees, what he recommends, and why. No vague advice, no upsells.",
    icon: "wellnessInitial",
  },
  {
    title: "Wellness Consultation – Follow-Up",
    description:
      "Your body changes, and your plan should too. Follow-up sessions are for established wellness patients to check in on what's working, what isn't, and where to adjust. Expect honest answers and a plan that actually evolves with you.",
    icon: "wellnessFollowUp",
  },
  {
    title: "Prenatal Chiropractic",
    description:
      "Pregnancy changes everything — your posture, your pelvis, your center of gravity. Gentle, pregnancy-safe adjustments help keep your body comfortable and aligned through every trimester. Dr. Chakrian adapts technique and positioning to wherever you are in your pregnancy.",
    icon: "prenatal",
  },
  {
    title: "Pediatric Chiropractic",
    description:
      "For patients under 18. Kids take plenty of hits — from falls, from backpacks, from hours hunched over screens. Pediatric adjustments are light-touch and age-appropriate, designed to support healthy development and address issues early before they become bigger ones.",
    icon: "pediatric",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What should I expect at my first visit?",
    answer:
      "Your first visit is a real conversation, not a quick scan. We'll go through your health history, talk about your goals, do a thorough physical assessment, and explain exactly what we find. Most patients get their first adjustment the same day. No pressure, no surprises.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We currently accept Personal Injury (PI) liens and Workers' Compensation. We also work with patients on a cash-pay basis and can provide a superbill for PPO reimbursement. We are actively credentialing with major insurance networks — contact us to ask about your specific plan.",
  },
  {
    question: "How long is a typical appointment?",
    answer:
      "Initial visits typically run 45–60 minutes — enough time to actually understand what's going on. Follow-up appointments are usually 20–30 minutes. We don't rush.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "Chiropractic care is one of the safest non-invasive treatment options available. We use evidence-based techniques and always adapt to your comfort level and medical history. If something isn't the right fit, we'll tell you that too.",
  },
  {
    question: "How often will I need to come in?",
    answer:
      "That depends entirely on your condition and goals. Some patients come weekly during an acute phase; others come monthly for maintenance. We'll always be honest about what you actually need — not what maximizes visit count.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral needed. Book directly through our online portal, call us, or just show up when we have availability. We welcome new patients.",
  },
] as const;

export const TESTIMONIALS = [] as const;

export const DOCTOR = {
  name: "Dr. Arthur Chakrian, DC",
  practice: "Spine Bar Chiropractic, Toluca Lake",
  headshotSrc: "/images/dr-arthur-chakrian.jpg",
  headshotAlt: "Dr. Arthur Chakrian, DC — Spine Bar Chiropractic",
  headline: "One-on-one care, built around you.",
  previewIntro:
    "Spine Bar was built around a simple idea: you deserve a chiropractor who listens, explains what they find, and treats you like an adult. Every visit is one-on-one with Dr. Chakrian — no handoffs, no rushing.",
  bio: [
    "Dr. Arthur Chakrian started Spine Bar because he was tired of the assembly-line model — where you wait 20 minutes, get adjusted in 7, and leave without understanding any of it. This practice is built around the opposite: every visit is one-on-one with him, unhurried, and grounded in actually figuring out what your body needs.",
    "He uses a manual, diversified approach to chiropractic care — hands-on, specific, adapted to you. When relevant, he also brings a functional medicine lens: nutrition, supplementation, recovery, and the lifestyle factors that either support or undermine your health. The goal is never just to get you out of pain. It's to help you understand what was causing it.",
  ],
  highlights: [
    {
      title: "Manual-First Chiropractic",
      description:
        "Every adjustment is done by hand, by Dr. Chakrian, every time. No assistants, no drop tables, no cookie-cutter protocols.",
    },
    {
      title: "Functional Medicine Lens",
      description:
        "When your pain has a lifestyle component — and it usually does — we address that too. Nutrition, supplementation, sleep, and movement guidance built into your care.",
    },
    {
      title: "Honest, Patient-First Care",
      description:
        "You'll always know what we found, what we recommend, and why. No pressure, no upsells, no mystery.",
    },
  ],
} as const;
