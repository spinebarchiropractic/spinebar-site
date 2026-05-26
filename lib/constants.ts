const ADDRESS = "10918 Riverside Dr, Toluca Lake, CA 91602";

export const SITE = {
  name: "Spine Bar Chiropractic",
  location: "Toluca Lake",
  phone: "747-774-7144",
  phoneHref: "tel:7477747144",
  email: "info@spinebar.com",
  emailHref: "mailto:info@spinebar.com",
  address: ADDRESS,
  mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`,
  hours: "Mon\u2013Fri 9\u20135 \u00b7 Sat 9\u20131",
  bookingUrl: "https://practice.chirotouch.com/portal/spinebarchiropractic",
  tagline: "Care you'll actually look forward to.",
  description:
    "A solo chiropractic practice in Toluca Lake. Every visit is one-on-one with Dr. Chakrian \u2014 thorough assessment, honest findings, and care that addresses the underlying cause.",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const CONDITIONS = [
  {
    slug: "lower-back-pain",
    icon: "\u2193",
    title: "Lower Back Pain",
    description:
      "The most common reason people walk through the door. Whether it's acute, chronic, or somewhere in between, lower back pain responds well to chiropractic care \u2014 especially when the underlying mechanics are addressed, not just the pain.",
    tags: ["Lumbar spine", "Muscle tension", "Disc involvement"],
  },
  {
    slug: "neck-pain",
    icon: "\u2191",
    title: "Neck Pain",
    description:
      "Cervical spine restrictions, muscle guarding, and referred pain into the shoulders and arms are among the most common presentations we see. Manual adjustment and soft tissue work can make a significant difference quickly.",
    tags: ["Cervical spine", "Referred pain", "Stiffness"],
  },
  {
    slug: "sciatica",
    icon: "\u26a1",
    title: "Sciatica",
    description:
      "Radiating pain, numbness, or tingling down the leg is often traced to nerve compression in the lumbar spine or piriformis syndrome. Identifying the actual source matters \u2014 treatment is different depending on where the compression is.",
    tags: ["Lumbar nerve root", "Piriformis syndrome", "Radiculopathy"],
  },
  {
    slug: "disc-injury",
    icon: "\u25cb",
    title: "Disc Herniation & Bulging Discs",
    description:
      "Disc injuries are frequently overtreated surgically. Many patients with confirmed herniations respond well to conservative chiropractic care. We'll assess whether conservative care is appropriate and explain exactly why.",
    tags: ["L4\u2013L5", "L5\u2013S1", "C5\u2013C6", "Conservative care"],
  },
  {
    slug: "headaches",
    icon: "\u25ce",
    title: "Headaches & Migraines",
    description:
      "Cervicogenic headaches \u2014 those driven by tension and restriction in the upper cervical spine \u2014 are highly responsive to chiropractic adjustment. Many patients who have lived with chronic headaches see real, lasting improvement.",
    tags: ["Cervicogenic", "Tension headache", "Occipital"],
  },
  {
    slug: "hip-pain",
    icon: "\u25c7",
    title: "Hip Pain",
    description:
      "Hip dysfunction often presents alongside lumbar restriction. We assess the full kinetic chain \u2014 lower back, pelvis, SI joint, and hip \u2014 rather than treating any structure in isolation.",
    tags: ["SI joint", "Hip flexor", "Pelvic alignment"],
  },
  {
    slug: "shoulder-upper-back",
    icon: "\u25b3",
    title: "Shoulder & Upper Back Pain",
    description:
      "Thoracic stiffness, rotator cuff tension, and shoulder impingement frequently respond to both spinal adjustment and targeted soft tissue work. We address the shoulder girdle as part of the whole spine.",
    tags: ["Thoracic spine", "Rotator cuff", "Shoulder impingement"],
  },
  {
    slug: "tech-neck",
    icon: "\u2304",
    title: "Tech Neck & Postural Strain",
    description:
      "Hours of forward head posture at a screen creates predictable patterns of cervical compression and thoracic stiffness. This is one of the fastest-growing presentations in clinical practice \u2014 and one of the most preventable.",
    tags: ["Forward head posture", "Cervical", "Screen-related"],
  },
  {
    slug: "sports-injuries",
    icon: "\u25c9",
    title: "Sports & Athletic Injuries",
    description:
      "Spinal and extremity injuries from training, competition, or repetitive load are part of what we treat regularly. The goal is to return you to full function \u2014 not just to baseline.",
    tags: ["Joint mobilization", "Soft tissue", "Extremities"],
  },
  {
    slug: "auto-accident",
    icon: "\u2192",
    title: "Auto Accident Injuries",
    description:
      "Whiplash, cervical strain, and post-collision pain are conditions we treat on a personal injury lien basis \u2014 meaning no out-of-pocket cost to you while your case is pending. Early treatment leads to better outcomes.",
    tags: ["Whiplash", "Cervical strain", "PI lien"],
  },
  {
    slug: "prenatal",
    icon: "\u25cc",
    title: "Prenatal Chiropractic",
    description:
      "Pelvic alignment, round ligament tension, and postural adaptation throughout pregnancy all benefit from modified chiropractic care. We use gentle, pregnancy-safe techniques adapted to each trimester.",
    tags: ["Pelvic alignment", "Round ligament", "All trimesters"],
  },
  {
    slug: "pediatric",
    icon: "\u25e1",
    title: "Pediatric Spinal Care",
    description:
      "Children carry spinal stress from sports, heavy backpacks, and screen habits. We use light-contact, age-appropriate adjustments for patients under 18 \u2014 nothing forceful, nothing that doesn't match their size and presentation.",
    tags: ["Under 18", "Light contact", "Developmental"],
  },
] as const;

export const SERVICES = [
  {
    title: "New Patient Exam & Assessment",
    description:
      "Health history, postural analysis, orthopedic testing, and hands-on assessment. Treatment begins same visit.",
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
    title: "Wellness Consultation \u2013 Initial",
    description:
      "Full review of labs, nutrition, supplementation, sleep, and lifestyle.",
    icon: "wellnessInitial",
  },
  {
    title: "Wellness Consultation \u2013 Follow-Up",
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
      "We currently accept Personal Injury (PI) liens and Workers' Compensation. We also work with patients on a cash-pay basis and can provide a superbill for PPO reimbursement. We are actively credentialing with major insurance networks \u2014 contact us to ask about your specific plan.",
  },
  {
    question: "How long is a typical appointment?",
    answer:
      "Initial visits typically run 45\u201360 minutes \u2014 enough time to actually understand what's going on. Follow-up appointments are usually 20\u201330 minutes. We don't rush.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "Chiropractic care is one of the safest non-invasive treatment options available. We use evidence-based techniques and always adapt to your comfort level and medical history. If something isn't the right fit, we'll tell you that too.",
  },
  {
    question: "How often will I need to come in?",
    answer:
      "That depends entirely on your condition and goals. Some patients come weekly during an acute phase; others come monthly for maintenance. We'll always be honest about what you actually need \u2014 not what maximizes visit count.",
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
  headshotAlt: "Dr. Arthur Chakrian, DC \u2014 Spine Bar Chiropractic",
  headline: "One-on-one care, built around you.",
  previewIntro:
    "Spine Bar was built on a straightforward philosophy: thorough assessment, clear communication, and care that's specific to your presentation. Every visit is one-on-one with Dr. Chakrian \u2014 no handoffs, no rushed appointments.",
  bio: [
    "Dr. Arthur Chakrian takes an individualized approach to care, shaped by a genuine understanding of each patient. He places strong emphasis on listening\u2014taking the time to understand not only symptoms, but history, lifestyle, and underlying patterns that influence health. This depth of insight informs how care is delivered, allowing treatment to be both precise and personal. His philosophy centers on supporting the body as an integrated system, with an emphasis on natural function and long-term wellness.",
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
        "When your pain has a lifestyle component \u2014 and it usually does \u2014 we address that too. Nutrition, supplementation, sleep, and movement guidance built into your care.",
    },
    {
      title: "Honest, Patient-First Care",
      description:
        "You'll always know what we found, what we recommend, and why. No pressure, no mystery.",
    },
  ],
} as const;
