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
  tagline: "Care that feels considered, not rushed.",
  description:
    "A modern chiropractic and wellness office built around movement, recovery, honest guidance, and the body's natural ability to repair and adapt.",
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
      "Your first visit includes a full health history review, comprehensive assessment, postural analysis, and your first adjustment. We take the time to understand what's actually going on.",
    icon: "newPatient",
  },
  {
    title: "Chiropractic Adjustment",
    description:
      "Precise, manual diversified adjustments tailored to your spine and extremities. Every adjustment is considered, not rushed.",
    icon: "adjustment",
  },
  {
    title: "Soft Tissue Therapy",
    description:
      "Targeted myofascial release and muscle work to complement your adjustment, reduce chronic tension, and support lasting relief between visits.",
    icon: "tissue",
  },
  {
    title: "Wellness Consultation – Initial",
    description:
      "A dedicated first session with Dr. Chakrian covering nutrition, supplementation, movement, sleep, bloodwork review, and recovery. We build a full picture of your health before making any recommendations.",
    icon: "wellnessInitial",
  },
  {
    title: "Wellness Consultation – Follow-Up",
    description:
      "A focused check-in to review your progress, refine protocols, and adjust recommendations as your health evolves. For established wellness patients only.",
    icon: "wellnessFollowUp",
  },
  {
    title: "Prenatal Chiropractic",
    description:
      "Gentle chiropractic care throughout pregnancy, focused on pelvic alignment, comfort, and supporting the body through each trimester.",
    icon: "prenatal",
  },
  {
    title: "Pediatric Chiropractic",
    description:
      "Safe, gentle chiropractic care for children with age-appropriate techniques.",
    icon: "pediatric",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What should I expect at my first visit?",
    answer:
      "Your first visit includes a thorough consultation, health history review, and a physical assessment. We'll discuss your goals, explain our findings, and outline a personalized care plan — no pressure, no surprises.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We currently accept Personal Injury (PI) liens and Workers' Compensation. We also work with patients on a cash-pay basis and can provide a superbill for reimbursement through your PPO. We are actively credentialing with major insurance networks — contact us to ask about your specific plan.",
  },
  {
    question: "How long is a typical appointment?",
    answer:
      "Initial visits typically run 45–60 minutes. Follow-up appointments are usually 20–30 minutes — enough time for quality care without feeling rushed.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "Chiropractic care is one of the safest non-invasive treatment options available. We use evidence-based techniques and always adapt treatment to your comfort level and medical history.",
  },
  {
    question: "How often will I need to come in?",
    answer:
      "That depends entirely on your condition and goals. Some patients see us weekly during acute phases; others come monthly for maintenance. We'll always be honest about what you actually need.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral is needed. You can book directly through our online portal or call our office. We welcome new patients and walk-ins when availability allows.",
  },
] as const;

// Testimonials hidden until real patient reviews are collected.
// export const TESTIMONIALS = [
//   {
//     quote:
//       "Finally, a chiropractor who listens. Dr. takes the time to explain everything and never makes you feel like you're on an assembly line.",
//     author: "Sarah M.",
//     detail: "Toluca Lake patient",
//   },
//   {
//     quote:
//       "I've been to many chiropractors over the years. Spine Bar is different — thoughtful, modern, and genuinely focused on getting you better.",
//     author: "James R.",
//     detail: "Studio City patient",
//   },
//   {
//     quote:
//       "The office feels calm and premium, but the care is what really stands out. I leave every visit feeling heard and physically better.",
//     author: "Elena K.",
//     detail: "Burbank patient",
//   },
// ] as const;
export const TESTIMONIALS = [] as const;

export const DOCTOR = {
  name: "Dr. Arthur Chakrian, DC",
  practice: "Spine Bar Chiropractic, Toluca Lake",
  headshotSrc: "/images/dr-arthur-chakrian.jpg",
  headshotAlt: "Dr. Arthur Chakrian, DC — Spine Bar Chiropractic",
  headline: "One-on-one care, built around you.",
  previewIntro:
    "California-licensed chiropractor and founder of Spine Bar Chiropractic. Diversified, manual-first adjustments — every visit is with Dr. Chakrian.",
  bio: [
    "Dr. Arthur Chakrian is a California-licensed chiropractor and the founder of Spine Bar Chiropractic in Toluca Lake. He practices a diversified, manual-first approach. Every visit is one-on-one with him.",
    "Beyond adjustments, Dr. Chakrian brings a functional medicine perspective to patient care — integrating clinical nutrition, supplementation, movement, and recovery into every treatment plan when appropriate. If you want honest answers about your health, not just a quick adjustment and a checkout, this is the practice for you.",
  ],
  highlights: [
    {
      title: "Manual-First Chiropractic",
      description:
        "Diversified, hands-on adjustments tailored to your body — delivered one-on-one by Dr. Chakrian at every visit.",
    },
    {
      title: "Functional Medicine Lens",
      description:
        "Clinical nutrition, supplementation, movement, and recovery integrated into your plan when it supports your goals.",
    },
    {
      title: "Honest, Patient-First Care",
      description:
        "Clear answers and thoughtful recommendations — not a rushed adjustment and a quick checkout.",
    },
  ],
} as const;
