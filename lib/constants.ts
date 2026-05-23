export const SITE = {
  name: "Spine Bar Chiropractic",
  location: "Toluca Lake",
  phone: "747-774-7144",
  phoneHref: "tel:7477747144",
  email: "info@spinebarchiropractic.com",
  emailHref: "mailto:info@spinebarchiropractic.com",
  address: "10150 Riverside Dr, Toluca Lake, CA 91602",
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
    title: "Chiropractic Adjustments",
    description:
      "Precise, thoughtful adjustments tailored to your body — not a one-size-fits-all routine. We focus on restoring alignment and supporting natural movement.",
    icon: "spine",
  },
  {
    title: "Movement & Mobility",
    description:
      "Functional assessments and guided mobility work to help you move better, recover faster, and stay active without unnecessary restrictions.",
    icon: "movement",
  },
  {
    title: "Wellness Guidance",
    description:
      "Honest recommendations on posture, recovery, and daily habits — practical guidance you can actually use, without the overwhelm.",
    icon: "wellness",
  },
  {
    title: "Soft Tissue Therapy",
    description:
      "Targeted muscle and fascia work to complement adjustments, reduce tension, and support lasting relief between visits.",
    icon: "tissue",
  },
  {
    title: "Sports & Active Recovery",
    description:
      "Care designed for athletes and active lifestyles — from weekend warriors to professionals who demand more from their bodies.",
    icon: "sports",
  },
  {
    title: "Preventive Care",
    description:
      "Proactive treatment plans that keep small issues from becoming chronic problems — because the best care is care you don't have to chase.",
    icon: "preventive",
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
      "We work with most major insurance providers and can verify your benefits before your appointment. We also offer transparent self-pay options for patients who prefer direct care.",
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

export const TESTIMONIALS = [
  {
    quote:
      "Finally, a chiropractor who listens. Dr. takes the time to explain everything and never makes you feel like you're on an assembly line.",
    author: "Sarah M.",
    detail: "Toluca Lake patient",
  },
  {
    quote:
      "I've been to many chiropractors over the years. Spine Bar is different — thoughtful, modern, and genuinely focused on getting you better.",
    author: "James R.",
    detail: "Studio City patient",
  },
  {
    quote:
      "The office feels calm and premium, but the care is what really stands out. I leave every visit feeling heard and physically better.",
    author: "Elena K.",
    detail: "Burbank patient",
  },
] as const;

export const ABOUT_CONTENT = {
  headline: "A calmer kind of chiropractic care.",
  intro:
    "Spine Bar Chiropractic was built on a simple belief: healthcare should feel human. In a world of rushed appointments and impersonal treatment, we chose a different path — one rooted in honest guidance, thoughtful care, and respect for how the body actually works.",
  mission:
    "Our mission is to help people in Toluca Lake and the surrounding communities move better, recover fully, and understand their bodies — without the anxiety that often comes with traditional healthcare.",
  values: [
    {
      title: "Honest Guidance",
      description:
        "We tell you what you need to hear, not what keeps you coming back unnecessarily. Transparency is the foundation of trust.",
    },
    {
      title: "Thoughtful Treatment",
      description:
        "Every adjustment, every recommendation is considered — tailored to your body, your goals, and where you are in your recovery.",
    },
    {
      title: "Modern Approach",
      description:
        "We combine time-tested chiropractic principles with contemporary movement science and wellness practices.",
    },
    {
      title: "Patient-First Care",
      description:
        "You're not a number on a schedule. We take the time to listen, assess, and create care plans that actually make sense for your life.",
    },
  ],
} as const;
