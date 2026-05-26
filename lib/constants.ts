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
  tagline: "Care you'll actually look forward to.",
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
      "Health history, postural analysis, orthopedic testing, and hands-on assessment. First treatment same visit.",
    icon: "newPatient",
  },
  {
    title: "Chiropractic Adjustment",
    description:
      "Manual locating and mobilizing areas of joint restriction, muscle tension, and fixation throughout the spine and extremities. Every adjustment is specific to you.",
    icon: "adjustment",
  },
  {
    title: "Soft Tissue Therapy",
    description:
      "Myofascial release and targeted muscle work to reduce tension, restore range of motion, and reinforce the adjustment.",
    icon: "tissue",
  },
  {
    title: "Wellness Consultation – Initial",
    description:
      "Full review of labs, nutrition, supplementation, sleep, and lifestyle.",
    icon: "wellnessInitial",
  },
  {
    title: "Wellness Consultation – Follow-Up",
    description:
      "Progress review and protocol refinement. For established wellness patients only.",
    icon: "wellnessFollowUp",
  },
  {
    title: "Prenatal Chiropractic",
    description:
      "Modified adjustments addressing pelvic alignment, round ligament tension, and postural adaptation throughout pregnancy.",
    icon: "prenatal",
  },
  {
    title: "Pediatric Chiropractic",
    description:
      "For patients under 18. Light-contact adjustments for spinal stress from developmental load, posture, and physical activity.",
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
    "Dr. Arthur Chakrian takes an individualized approach to care, shaped by a genuine understanding of each patient. He places strong emphasis on listening—taking the time to understand not only symptoms, but history, lifestyle, and underlying patterns that influence health. This depth of insight informs how care is delivered, allowing treatment to be both precise and personal. His philosophy centers on supporting the body as an integrated system, with an emphasis on natural function and long-term wellness.",
    "This same philosophy extends beyond the treatment room. Dr. Arthur Chakrian created SupDoc, a doctor-formulated supplement line designed to support whole-body health and maintain balance over time. Each formulation is built with a focus on quality, function, and a practical approach to wellness.",
  ],
  highlights: [
    {
      title: "Manual-First Chiropractic",
      description:
        "Every adjustment is done by hand, by Dr. Chakrian, every time. No assistants, no cookie-cutter protocols.",
    },
    {
      title: "Functional Medicine Lens",
      description:
        "When your pain has a lifestyle component — and it usually does — we address that too. Nutrition, supplementation, sleep, and movement guidance built into your care.",
    },
    {
      title: "Honest, Patient-First Care",
      description:
        "You'll always know what we found, what we recommend, and why. No pressure, no mystery.",
    },
  ],
} as const;
