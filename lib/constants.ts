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
  instagram: "https://www.instagram.com/spinebarchiropractic/",
  instagramHandle: "@spinebarchiropractic",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "About", href: "/about" },
  { label: "New Patient", href: "/new-patient" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const CONDITIONS = [
  {
    slug: "lower-back-pain",
    icon: "\u2193",
    title: "Lower Back Pain",
    description:
      "The most common reason people walk through the door. Whether it\u2019s acute, chronic, or somewhere in between, lower back pain responds well to chiropractic care \u2014 especially when the underlying mechanics are addressed, not just the pain.",
    tags: ["Lumbar spine", "Muscle tension", "Disc involvement"],
    fullDescription: [
      "Lower back pain is the leading cause of disability worldwide \u2014 and also one of the most treatable conditions in chiropractic care. The lumbar spine bears the load of nearly every movement you make, and when joint restriction, disc pressure, or muscle imbalance accumulates, the result is pain that ranges from a dull ache to sharp, movement-limiting dysfunction.",
      "At Spine Bar, we don\u2019t treat lower back pain as a single diagnosis. We assess where the restriction is, what\u2019s contributing to it \u2014 posture, movement patterns, prior injury, disc status \u2014 and address all of it. Manual adjustment to the lumbar and sacral segments, combined with targeted soft tissue work, typically produces meaningful relief within the first few visits.",
      "Whether your pain is acute (just started), subacute (a few weeks in), or chronic (months to years), the approach is individualized. We\u2019ll tell you what we find, what we recommend, and what realistic recovery looks like for your specific presentation.",
    ],
    causes: [
      "Lumbar joint restriction or fixation",
      "Disc herniation or bulging",
      "Muscle guarding and spasm",
      "Sacroiliac joint dysfunction",
      "Poor posture or prolonged sitting",
      "Repetitive strain or lifting mechanics",
    ],
    whatToExpect:
      "Your first visit includes a full postural and orthopedic assessment, motion palpation of the lumbar spine, and orthopedic testing to rule out red flags. Most patients receive their first adjustment the same day. Relief often begins within 1\u20133 visits; a full care plan is discussed after assessment.",
  },
  {
    slug: "neck-pain",
    icon: "\u2191",
    title: "Neck Pain",
    description:
      "Cervical spine restrictions, muscle guarding, and referred pain into the shoulders and arms are among the most common presentations we see. Manual adjustment and soft tissue work can make a significant difference quickly.",
    tags: ["Cervical spine", "Referred pain", "Stiffness"],
    fullDescription: [
      "The cervical spine is one of the most mechanically complex regions of the body \u2014 seven vertebrae supporting the full weight of the head, with a range of motion that exceeds every other spinal segment. That mobility comes with vulnerability. Restrictions, muscular guarding, and joint dysfunction in the neck often develop gradually before they announce themselves as pain.",
      "Neck pain at Spine Bar is evaluated in full context: cervical range of motion, orthopedic provocation tests, upper extremity neurological screening, and postural analysis. The goal is to identify whether the pain is local joint dysfunction, referred from the thoracic spine, or associated with nerve root involvement \u2014 because the treatment is different for each.",
      "Manual cervical adjustment and targeted soft tissue work to the paraspinal musculature, traps, and scalenes typically resolves acute neck pain quickly. Chronic or recurring neck pain requires a broader look at posture, workstation setup, and movement habits \u2014 which we address as part of your care plan.",
    ],
    causes: [
      "Cervical joint restriction or fixation",
      "Muscle tension and guarding",
      "Forward head posture",
      "Sleeping position or pillow support",
      "Whiplash or acute strain",
      "Referred pain from upper thoracic segments",
    ],
    whatToExpect:
      "Cervical assessment includes range of motion, palpation, and neurological screening for referred pain or radiculopathy. Treatment typically begins same visit. Most acute neck pain cases resolve within a handful of visits; chronic cases are managed with a structured care plan.",
  },
  {
    slug: "sciatica",
    icon: "\u26a1",
    title: "Sciatica",
    description:
      "Radiating pain, numbness, or tingling down the leg is often traced to nerve compression in the lumbar spine or piriformis syndrome. Identifying the actual source matters \u2014 treatment is different depending on where the compression is.",
    tags: ["Lumbar nerve root", "Piriformis syndrome", "Radiculopathy"],
    fullDescription: [
      "Sciatica is not a diagnosis \u2014 it\u2019s a symptom. The burning, shooting, or tingling sensation that travels from the lower back through the buttock and down the leg is the sciatic nerve signaling compression or irritation somewhere along its path. Where that compression is happening determines everything about how it should be treated.",
      "The two most common sources are lumbar disc herniation (compression of the L4, L5, or S1 nerve root at the spine) and piriformis syndrome (the sciatic nerve irritated by the piriformis muscle deep in the gluteal region). These require different treatment approaches. Treating one when you have the other doesn\u2019t work.",
      "At Spine Bar, sciatic presentations are assessed carefully: orthopedic provocation tests (straight leg raise, Slump, FAIR test), lumbar and sacral motion palpation, and neurological screening for motor or sensory deficit. Once the source is identified, treatment is targeted \u2014 lumbar decompressive adjustment, soft tissue work to the piriformis and hip external rotators, or a combination of both.",
    ],
    causes: [
      "L4\u2013L5 or L5\u2013S1 disc herniation",
      "Lumbar facet joint compression",
      "Piriformis muscle tightness or spasm",
      "Sacroiliac joint dysfunction",
      "Spinal stenosis",
      "Prolonged sitting or hip flexor tightness",
    ],
    whatToExpect:
      "Diagnosis is clinical \u2014 we use orthopedic and neurological testing to identify the source. If imaging is needed, we\u2019ll tell you. Treatment begins same visit once the source is confirmed. Sciatic cases typically require a multi-visit plan; improvement is usually measurable within 2\u20134 visits.",
  },
  {
    slug: "disc-injury",
    icon: "\u25cb",
    title: "Disc Herniation & Bulging Discs",
    description:
      "Disc injuries are frequently overtreated surgically. Many patients with confirmed herniations respond well to conservative chiropractic care. We\u2019ll assess whether conservative care is appropriate and explain exactly why.",
    tags: ["L4\u2013L5", "L5\u2013S1", "C5\u2013C6", "Conservative care"],
    fullDescription: [
      "A disc herniation is not an automatic indication for surgery. The research is clear: the majority of lumbar and cervical disc herniations respond well to conservative care \u2014 including chiropractic \u2014 and many herniations resorb over time without intervention. The challenge is knowing when conservative care is appropriate and when it isn\u2019t.",
      "At Spine Bar, disc cases are taken seriously. We perform thorough orthopedic and neurological testing to establish severity, identify whether motor or sensory function is compromised, and determine whether chiropractic adjustment is indicated or contraindicated for your specific presentation. If your case requires imaging or specialist referral, we\u2019ll say so directly.",
      "When conservative care is appropriate, we use gentle, specific adjustment techniques that decompress the affected segment without aggravating the disc. Soft tissue work to the surrounding musculature reduces protective spasm and allows the spine to move more freely. Most disc patients see meaningful improvement within 4\u20136 weeks of consistent care.",
    ],
    causes: [
      "Repetitive flexion and compression (prolonged sitting, lifting)",
      "Acute trauma or forced flexion",
      "Age-related disc dehydration",
      "Weak core and posterior chain support",
      "Prior disc injury or surgery",
    ],
    whatToExpect:
      "We assess disc cases conservatively and honestly. If you have imaging (MRI, X-ray), bring it. We\u2019ll review it, perform our own orthopedic evaluation, and give you a clear picture of whether chiropractic care is the right next step. No pressure either way.",
  },
  {
    slug: "headaches",
    icon: "\u25ce",
    title: "Headaches & Migraines",
    description:
      "Cervicogenic headaches \u2014 those driven by tension and restriction in the upper cervical spine \u2014 are highly responsive to chiropractic adjustment. Many patients who have lived with chronic headaches see real, lasting improvement.",
    tags: ["Cervicogenic", "Tension headache", "Occipital"],
    fullDescription: [
      "Not all headaches start in the head. Cervicogenic headaches \u2014 headaches originating from restriction, joint dysfunction, or muscle tension in the upper cervical spine \u2014 are among the most under-identified and over-medicated conditions in clinical practice. They often present as pain at the base of the skull, behind the eyes, or as a unilateral ache that moves from the neck up.",
      "Tension-type headaches driven by suboccipital muscle tightness, upper trap guarding, and C1\u2013C3 restriction respond remarkably well to manual chiropractic care. Many patients who have been managing chronic headaches with NSAIDs for years see significant reduction in both frequency and intensity within a few weeks of care.",
      "We distinguish between cervicogenic, tension-type, migraine, and cluster headaches during assessment \u2014 because the treatment is different for each. If your headaches have a strong cervical component, chiropractic care is likely one of the most effective options available to you.",
    ],
    causes: [
      "Upper cervical joint restriction (C1\u2013C3)",
      "Suboccipital muscle tension",
      "Forward head posture and tech neck",
      "Jaw tension and TMJ dysfunction",
      "Stress and sleep disruption",
      "Dehydration and dietary triggers",
    ],
    whatToExpect:
      "Headache assessment includes cervical range of motion, palpation of the upper cervical and suboccipital region, and a detailed history of headache pattern, frequency, and triggers. Treatment begins same visit for cervicogenic presentations. Many patients notice a reduction in frequency within the first 2\u20133 visits.",
  },
  {
    slug: "hip-pain",
    icon: "\u25c7",
    title: "Hip Pain",
    description:
      "Hip dysfunction often presents alongside lumbar restriction. We assess the full kinetic chain \u2014 lower back, pelvis, SI joint, and hip \u2014 rather than treating any structure in isolation.",
    tags: ["SI joint", "Hip flexor", "Pelvic alignment"],
    fullDescription: [
      "Hip pain is rarely just a hip problem. The hip joint sits at the intersection of the lumbar spine, the pelvis, and the lower extremity \u2014 and dysfunction in any of those regions can generate or perpetuate hip symptoms. Treating the hip in isolation, without addressing the lumbar mechanics and pelvic alignment that load it, produces incomplete results.",
      "At Spine Bar, hip pain is assessed as part of the full kinetic chain. We evaluate lumbar mobility, sacroiliac joint mechanics, hip flexor length, and hip joint ROM before deciding where to direct treatment. Many hip pain patients have SI joint dysfunction or L3\u2013L5 restriction that\u2019s loading the hip abnormally \u2014 and correcting that upstream is where lasting relief comes from.",
      "Soft tissue work to the hip flexors, glutes, and lateral hip musculature, combined with lumbopelvic adjustment, addresses both the local pain and the mechanical driver behind it.",
    ],
    causes: [
      "Sacroiliac joint dysfunction",
      "Hip flexor tightness or strain",
      "Lumbar restriction loading the hip",
      "Gluteal weakness and pelvic drop",
      "Bursitis or tendinopathy",
      "Labral irritation from altered mechanics",
    ],
    whatToExpect:
      "Hip evaluation includes lumbar, pelvic, and hip joint assessment together. We\u2019ll identify whether the pain source is the hip itself or driven by spinal and pelvic mechanics above it. Treatment begins same visit and typically addresses multiple regions.",
  },
  {
    slug: "shoulder-upper-back",
    icon: "\u25b3",
    title: "Shoulder & Upper Back Pain",
    description:
      "Thoracic stiffness, rotator cuff tension, and shoulder impingement frequently respond to both spinal adjustment and targeted soft tissue work. We address the shoulder girdle as part of the whole spine.",
    tags: ["Thoracic spine", "Rotator cuff", "Shoulder impingement"],
    fullDescription: [
      "The thoracic spine is one of the most commonly overlooked pain generators in clinical practice. Chronic stiffness between the shoulder blades, restricted thoracic rotation, and rib fixations can drive shoulder dysfunction, upper back ache, and even contribute to neck pain and headaches. Mobilizing the thoracic spine is one of the most effective interventions in chiropractic care \u2014 and one of the most immediately satisfying for patients.",
      "Shoulder impingement, rotator cuff strain, and shoulder girdle tension are directly influenced by thoracic posture. A rounded upper back changes the mechanics of the glenohumeral joint and compresses the subacromial space. Correcting the thoracic kyphosis and restoring scapular mechanics through adjustment and soft tissue work addresses the root cause rather than chasing the local shoulder pain.",
      "We treat the shoulder girdle as part of the spine \u2014 because it is. Every visit includes assessment of cervical, thoracic, and shoulder mechanics together.",
    ],
    causes: [
      "Thoracic joint restriction and kyphosis",
      "Poor scapular mechanics",
      "Rotator cuff overload from altered posture",
      "Rib fixation",
      "Repetitive overhead or forward-reaching work",
      "Desk posture and screen habits",
    ],
    whatToExpect:
      "Upper back and shoulder assessment covers the full cervicothoracic region, rib mobility, and glenohumeral function. Treatment same visit. Thoracic adjustment is typically well-tolerated and produces quick relief from the characteristic \u201cknot between the shoulder blades\u201d pattern.",
  },
  {
    slug: "tech-neck",
    icon: "\u2304",
    title: "Tech Neck & Postural Strain",
    description:
      "Hours of forward head posture at a screen creates predictable patterns of cervical compression and thoracic stiffness. This is one of the fastest-growing presentations in clinical practice \u2014 and one of the most preventable.",
    tags: ["Forward head posture", "Cervical", "Screen-related"],
    fullDescription: [
      "For every inch your head moves forward of its neutral position, the effective load on your cervical spine increases by roughly 10 pounds. At a typical forward head posture of 2\u20133 inches, that\u2019s an additional 20\u201330 pounds of compressive force on the cervical discs and facet joints \u2014 sustained for hours at a time, every day. The result is predictable: cervical compression, suboccipital tightness, thoracic stiffness, and eventually pain.",
      "Tech neck isn\u2019t a lifestyle complaint. It\u2019s a mechanical problem with a mechanical solution. Manual adjustment to the cervical and upper thoracic spine restores joint mobility, and soft tissue work to the suboccipitals, scalenes, and pectorals releases the muscular pattern that holds the head forward. Postural correction and workstation guidance are part of every tech neck care plan.",
      "This is one of the most preventable conditions we treat \u2014 and one of the most common. If you spend significant time at a screen and notice neck tension, headaches, or upper back stiffness, don\u2019t wait for it to become a chronic problem.",
    ],
    causes: [
      "Prolonged screen use with forward head posture",
      "Poor workstation ergonomics",
      "Phone use (looking down)",
      "Weak deep cervical flexors",
      "Tight pectorals and anterior chain",
      "Insufficient movement breaks",
    ],
    whatToExpect:
      "We assess posture, cervical curve, and thoracic mobility. Treatment begins same visit. We also provide specific guidance on workstation setup and movement habits \u2014 because adjusting the spine without addressing the posture that caused it is an incomplete solution.",
  },
  {
    slug: "sports-injuries",
    icon: "\u25c9",
    title: "Sports & Athletic Injuries",
    description:
      "Spinal and extremity injuries from training, competition, or repetitive load are part of what we treat regularly. The goal is to return you to full function \u2014 not just to baseline.",
    tags: ["Joint mobilization", "Soft tissue", "Extremities"],
    fullDescription: [
      "Athletes put different demands on their musculoskeletal systems \u2014 and they need care that understands that. The goal for a training athlete is not simply pain reduction. It\u2019s restoring full range of motion, correcting the compensation patterns that developed around the injury, and getting back to load-bearing activity without restriction.",
      "At Spine Bar, sports injuries are assessed functionally. We evaluate not just the site of pain but how the injury is affecting movement mechanics upstream and downstream. A hip flexor strain changes how you load your lumbar spine. A shoulder impingement changes how you use your thoracic rotation. Addressing the compensation is as important as addressing the injury itself.",
      "We treat spinal and extremity injuries including ankle sprains, knee dysfunction, shoulder impingement, wrist and elbow strain, and rib injuries alongside the spinal component. Manual adjustment, soft tissue therapy, and movement-based rehabilitation guidance are the tools.",
    ],
    causes: [
      "Acute trauma (fall, collision, impact)",
      "Repetitive load and overuse",
      "Training volume spikes",
      "Movement compensation around prior injury",
      "Inadequate recovery or mobility work",
    ],
    whatToExpect:
      "Athletic injury assessment is functional and thorough. We want to understand your training demands, your timeline, and what \u201cfull recovery\u201d means to you. Treatment begins same visit. We work with your schedule and your goals \u2014 not a generic protocol.",
  },
  {
    slug: "auto-accident",
    icon: "\u2192",
    title: "Auto Accident Injuries",
    description:
      "Whiplash, cervical strain, and post-collision pain are conditions we treat on a personal injury lien basis \u2014 meaning no out-of-pocket cost to you while your case is pending. Early treatment leads to better outcomes.",
    tags: ["Whiplash", "Cervical strain", "PI lien"],
    fullDescription: [
      "Auto accident injuries are deceptive. The adrenaline of a collision masks pain in the immediate aftermath, and many patients don\u2019t feel the full extent of their injuries until 24\u201372 hours later. Waiting to seek treatment is one of the most common and costly mistakes after a car accident \u2014 both for your recovery and for any legal case you may be pursuing.",
      "Whiplash \u2014 the rapid acceleration-deceleration of the cervical spine during a rear-end or side-impact collision \u2014 causes a predictable pattern of injury: cervical muscle strain, ligament sprain, joint fixation, and in some cases disc involvement. The cervical spine is particularly vulnerable to this mechanism. Early chiropractic care has strong evidence for improving outcomes in whiplash-associated disorder.",
      "At Spine Bar, we treat auto accident patients on a personal injury lien basis. That means you pay nothing out of pocket while your case is active \u2014 our fees are paid from your settlement or judgment. We document thoroughly, communicate with your attorney\u2019s office directly, and focus on getting you better as quickly as possible.",
    ],
    causes: [
      "Rear-end, side-impact, or front-end collision",
      "Whiplash mechanism (rapid cervical flexion-extension)",
      "Seatbelt restraint forces",
      "Airbag deployment impact",
      "Slip-and-fall adjacent to vehicle",
    ],
    whatToExpect:
      "Call us as soon as possible after your accident. We\u2019ll get you in quickly, document your injuries thoroughly, and begin care same visit. If you have an attorney, we\u2019ll coordinate directly. If you don\u2019t have one yet, we can provide a referral. No out-of-pocket cost on PI lien cases.",
  },
  {
    slug: "prenatal",
    icon: "\u25cc",
    title: "Prenatal Chiropractic",
    description:
      "Pelvic alignment, round ligament tension, and postural adaptation throughout pregnancy all benefit from modified chiropractic care. We use gentle, pregnancy-safe techniques adapted to each trimester.",
    tags: ["Pelvic alignment", "Round ligament", "All trimesters"],
    fullDescription: [
      "Pregnancy places significant mechanical demands on the spine and pelvis. As the uterus expands and the center of gravity shifts forward, the lumbar spine hyperextends, the pelvis anteriorly tilts, and the sacroiliac joints are placed under increasing stress. This is a normal adaptation \u2014 but it creates real musculoskeletal pain for a large percentage of pregnant patients.",
      "Prenatal chiropractic care focuses on maintaining pelvic alignment, reducing SI joint and pubic symphysis dysfunction, and relieving the lower back and round ligament tension that commonly develops throughout the second and third trimesters. All techniques are modified for pregnancy \u2014 we use positioning that accommodates the growing abdomen and avoid any technique involving prone pressure on the belly.",
      "There is also a growing body of evidence linking optimal pelvic alignment during pregnancy with better fetal positioning and delivery outcomes. Patients under regular chiropractic care throughout pregnancy report lower rates of back labor and a more comfortable third trimester overall.",
    ],
    causes: [
      "Shifting center of gravity and lumbar hyperlordosis",
      "Sacroiliac joint laxity from relaxin hormone",
      "Round ligament tension",
      "Pubic symphysis dysfunction",
      "Upper back strain from breast tissue changes",
      "Postural adaptation to fetal growth",
    ],
    whatToExpect:
      "Prenatal care is gentle, safe, and adapted to your trimester. All positioning is pregnancy-appropriate. We welcome patients at any stage of pregnancy and will communicate with your OB or midwife if needed. Treatment begins same visit.",
  },
  {
    slug: "pediatric",
    icon: "\u25e1",
    title: "Pediatric Spinal Care",
    description:
      "Children carry spinal stress from sports, heavy backpacks, and screen habits. We use light-contact, age-appropriate adjustments for patients under 18 \u2014 nothing forceful, nothing that doesn\u2019t match their size and presentation.",
    tags: ["Under 18", "Light contact", "Developmental"],
    fullDescription: [
      "Children\u2019s spines are not small adult spines \u2014 they\u2019re developing structures that respond to load, posture, and physical stress differently. The increase in screen time, heavy backpack use, and competitive youth sports has produced a generation of young patients presenting with cervical and thoracic dysfunction, postural strain, and repetitive use injuries far earlier than previous generations.",
      "Pediatric chiropractic care at Spine Bar uses light-contact, age-appropriate techniques. There is no forceful manipulation used on pediatric patients. The pressure used for an adjustment on a child is a fraction of what is used for an adult \u2014 more comparable to the pressure you\u2019d use to test the ripeness of a tomato than what most people imagine when they think of a chiropractic adjustment.",
      "Assessment includes posture, spinal mobility, and a conversation about the child\u2019s activity level, sleep position, and school setup. Parents are present for every pediatric visit. We explain everything we do and why before we do it.",
    ],
    causes: [
      "Heavy backpack use and unilateral loading",
      "Prolonged screen posture",
      "Sports impact and repetitive strain",
      "Growth-related postural changes",
      "Sleeping position habits",
      "Scoliosis screening and early intervention",
    ],
    whatToExpect:
      "Pediatric visits are calm, transparent, and never rushed. A parent or guardian is present throughout. Techniques are always matched to the child\u2019s age, size, and tolerance. Assessment and first treatment occur same visit for straightforward presentations.",
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
      "Your first visit is a real conversation, not a quick scan. We\u2019ll go through your health history, talk about your goals, do a thorough physical assessment, and explain exactly what we find. Most patients get their first adjustment the same day. No pressure, no surprises.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We currently accept Personal Injury (PI) liens and Workers\u2019 Compensation. We also work with patients on a cash-pay basis and can provide a superbill for PPO reimbursement. We are actively credentialing with major insurance networks \u2014 contact us to ask about your specific plan.",
  },
  {
    question: "How long is a typical appointment?",
    answer:
      "Initial visits typically run 45\u201360 minutes \u2014 enough time to actually understand what\u2019s going on. Follow-up appointments are usually 20\u201330 minutes. We don\u2019t rush.",
  },
  {
    question: "Is chiropractic care safe?",
    answer:
      "Chiropractic care is one of the safest non-invasive treatment options available. We use evidence-based techniques and always adapt to your comfort level and medical history. If something isn\u2019t the right fit, we\u2019ll tell you that too.",
  },
  {
    question: "How often will I need to come in?",
    answer:
      "That depends entirely on your condition and goals. Some patients come weekly during an acute phase; others come monthly for maintenance. We\u2019ll always be honest about what you actually need \u2014 not what maximizes visit count.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral needed. Book directly through our online portal, call us, or just show up when we have availability. We welcome new patients.",
  },
  {
    question: "What is a chiropractic adjustment?",
    answer:
      "A chiropractic adjustment is a precise, controlled force applied to a restricted spinal joint to restore its normal range of motion. The \u201cpop\u201d you sometimes hear is a gas release inside the joint capsule \u2014 it\u2019s incidental, not the goal. The goal is restoring mobility and reducing the nerve interference and muscle guarding that builds up around a restricted segment.",
  },
  {
    question: "Will it hurt?",
    answer:
      "Most patients feel relief, not pain, during an adjustment. Some experience mild soreness for 24\u201348 hours after their first few visits \u2014 similar to how muscles feel after a workout. We always adapt technique to your comfort level and health history. Nothing is forced.",
  },
  {
    question: "Can chiropractic care help with my specific condition?",
    answer:
      "The best way to find out is a proper assessment. We treat a wide range of spinal and musculoskeletal conditions \u2014 lower back pain, neck pain, sciatica, headaches, disc injuries, shoulder pain, and more. If your condition is outside the scope of chiropractic care, we\u2019ll tell you directly and refer you appropriately.",
  },
  {
    question: "Do you treat auto accident injuries?",
    answer:
      "Yes. We treat auto accident injuries on a personal injury lien basis \u2014 meaning no out-of-pocket cost to you while your case is pending. We document thoroughly, communicate with your attorney\u2019s office directly, and focus on getting you better as quickly as possible. Call us as soon as possible after your accident \u2014 early treatment leads to better outcomes.",
  },
  {
    question: "What should I wear to my appointment?",
    answer:
      "Wear relaxed, comfortable clothing you can move in \u2014 athletic wear, shorts, or anything loose-fitting. We need access to your spine for assessment and treatment. Tight jeans or restrictive clothing makes this harder.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online 24/7 through our booking portal \u2014 it takes about two minutes. You can also call us at 747-774-7144 during office hours, or send a message through our contact form. No referral required.",
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
    "Spine Bar was built on a straightforward philosophy: thorough assessment, clear communication, and care that\u2019s specific to your presentation. Every visit is one-on-one with Dr. Chakrian \u2014 no handoffs, no rushed appointments.",
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
        "You\u2019ll always know what we found, what we recommend, and why. No pressure, no mystery.",
    },
  ],
} as const;

export const BLOG_POSTS = [
  {
    slug: "why-your-lower-back-pain-keeps-coming-back",
    title: "Why Your Lower Back Pain Keeps Coming Back",
    date: "2026-05-15",
    author: "Dr. Arthur Chakrian, DC",
    category: "Lower Back",
    excerpt:
      "If your back pain goes away for a few weeks and then returns, it\u2019s not bad luck. It\u2019s a sign that the underlying mechanical problem was never actually resolved \u2014 only quieted.",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        content:
          "Most people treat lower back pain the same way they treat a headache: take something for it, rest, wait for it to pass. And it does pass \u2014 usually. The problem is it comes back. Sometimes within days. Sometimes a few months later after a long drive or an awkward lift. And each time, it tends to come back a little worse.",
      },
      {
        type: "paragraph",
        content:
          "This pattern has a clinical explanation. When a joint in the lumbar spine becomes restricted \u2014 fixated, not moving the way it should \u2014 the surrounding muscles compensate. They tighten to protect the joint. That tightness reduces load on the restricted segment, which is why the pain eventually subsides. But the joint restriction is still there. The compensation pattern is still there. The moment you do something that exceeds what the compensation can handle, the pain returns.",
      },
      {
        type: "heading",
        content: "The problem with treating the symptom",
      },
      {
        type: "paragraph",
        content:
          "Anti-inflammatories and muscle relaxants address the inflammatory and muscular component of back pain. They\u2019re useful tools. But they don\u2019t move the restricted joint. They don\u2019t restore the mobility that the lumbar segment lost. So the underlying mechanical problem \u2014 the restricted facet joint, the fixated lumbar segment, the dysfunctional sacroiliac joint \u2014 remains untouched. The pain goes away because the inflammation quiets down and the muscle guarding subsides. Not because the problem was corrected.",
      },
      {
        type: "paragraph",
        content:
          "This is the core of what chiropractic care addresses. Manual adjustment is directed specifically at the restricted segment \u2014 restoring motion to the joint, reducing the reflex muscle guarding around it, and allowing the lumbar spine to function as a mobile, load-distributing structure rather than a series of segments locked into compensation patterns.",
      },
      {
        type: "heading",
        content: "What \u201cresolved\u201d actually means",
      },
      {
        type: "paragraph",
        content:
          "Resolved means the joint moves. The muscle tone around the segment is normal. You can load the spine through a full range of motion without recruiting compensation. Pain going away is a byproduct of that. It is not the goal itself \u2014 it is confirmation that the goal was achieved.",
      },
      {
        type: "paragraph",
        content:
          "If your lower back pain keeps returning, the question to ask is not \u201cwhat can I take for it\u201d but \u201cwhat is still restricted that keeps causing this.\u201d That\u2019s the question a chiropractic assessment is designed to answer.",
      },
    ],
  },
  {
    slug: "what-actually-happens-during-a-chiropractic-adjustment",
    title: "What Actually Happens During a Chiropractic Adjustment",
    date: "2026-05-22",
    author: "Dr. Arthur Chakrian, DC",
    category: "Education",
    excerpt:
      "The sound is memorable. But the pop isn\u2019t the point \u2014 and understanding what\u2019s actually happening during an adjustment changes how patients experience their care.",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        content:
          "The most common question new patients ask before their first adjustment is some version of: \u201cIs it going to hurt?\u201d The second most common is: \u201cWhat\u2019s that sound?\u201d Both questions come from the same place \u2014 uncertainty about what\u2019s actually happening when a chiropractor adjusts a joint.",
      },
      {
        type: "heading",
        content: "The sound is a gas release, not a bone",
      },
      {
        type: "paragraph",
        content:
          "The audible pop that often accompanies a chiropractic adjustment is called cavitation. Synovial joints \u2014 the facet joints of the spine, the sacroiliac joint, the shoulder, the knee \u2014 are enclosed capsules filled with synovial fluid and dissolved gases (mostly carbon dioxide and nitrogen). When the joint is moved rapidly through its end range, the pressure inside the joint capsule drops suddenly. The dissolved gases briefly form a gas bubble and collapse \u2014 that\u2019s the sound.",
      },
      {
        type: "paragraph",
        content:
          "The sound is incidental. An adjustment that doesn\u2019t produce a sound is not an ineffective adjustment. The goal is not to produce the sound \u2014 it\u2019s to restore normal motion to a restricted joint. The cavitation is simply a frequent byproduct of moving a joint through its paraphysiologic range.",
      },
      {
        type: "heading",
        content: "What the adjustment is actually doing",
      },
      {
        type: "paragraph",
        content:
          "A chiropractic adjustment is a high-velocity, low-amplitude (HVLA) thrust applied to a specific spinal segment. High velocity means it happens quickly \u2014 faster than the surrounding muscles can reflexively contract to resist it. Low amplitude means the joint moves a small distance \u2014 just enough to pass through its restricted end range and restore normal motion.",
      },
      {
        type: "paragraph",
        content:
          "The mechanical effect is joint mobilization: restoring the normal arthrokinematic motion of the facet joint. But there is also a significant neurological effect. The rapid joint movement stimulates mechanoreceptors in the joint capsule and surrounding tissues, which inhibits nociceptive (pain) signaling through the gate control mechanism. This is one of the reasons patients often feel immediate relief after an adjustment \u2014 the neurological response is faster than the structural one.",
      },
      {
        type: "heading",
        content: "Does it hurt?",
      },
      {
        type: "paragraph",
        content:
          "In most cases, no. A properly delivered adjustment to a restricted segment typically produces a sensation of release \u2014 sometimes a brief moment of pressure, then relief. Patients who are acutely inflamed or highly guarded may feel more discomfort, which is why we always assess before adjusting and adapt technique to the presentation. There is no \u201cone size fits all\u201d adjustment. The force, speed, direction, and positioning are specific to you, your segment, and what your body is doing that day.",
      },
    ],
  },
  {
    slug: "tech-neck-is-not-just-a-posture-problem",
    title: "Tech Neck Is Not Just a Posture Problem",
    date: "2026-05-29",
    author: "Dr. Arthur Chakrian, DC",
    category: "Neck & Posture",
    excerpt:
      "Forward head posture is mechanical. The tension headaches, the upper trap tightness, the cervical compression \u2014 these are predictable physics. Here\u2019s what\u2019s actually happening to your spine.",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        content:
          "The average adult head weighs between 10 and 12 pounds in a neutral position. When the head moves forward \u2014 as it does during screen use, phone scrolling, or prolonged desk work \u2014 the effective load on the cervical spine increases dramatically with each inch of forward displacement. At two inches forward, the load is approximately 20 extra pounds. At three inches, closer to 30. The cervical discs, facet joints, and posterior musculature are managing that load continuously, for hours at a time.",
      },
      {
        type: "paragraph",
        content:
          "This is not a metaphor or an exaggeration. It is physics. The cervical spine is a lever, and the head is the load at the end of it. Moving the load forward of the fulcrum multiplies the mechanical demand on everything posterior to the vertebral bodies \u2014 the facet joints, the posterior longitudinal ligaments, and the paraspinal musculature.",
      },
      {
        type: "heading",
        content: "What\u2019s actually happening in the tissues",
      },
      {
        type: "paragraph",
        content:
          "Sustained forward head posture produces a predictable cascade. The suboccipital muscles \u2014 the small muscles at the base of the skull \u2014 become chronically shortened and hyperactive, compressing the C1\u2013C2 joint complex and the greater occipital nerve that runs through them. This is the origin of the characteristic tech neck headache: a dull, deep ache at the base of the skull that migrates up toward the crown or behind the eyes.",
      },
      {
        type: "paragraph",
        content:
          "Simultaneously, the deep cervical flexors \u2014 the muscles responsible for holding the head in neutral \u2014 become inhibited and weakened from being held in a lengthened position. The upper trapezius and levator scapulae compensate, taking over a stabilization role they were not designed for. That\u2019s the knot you feel in your upper trap. It\u2019s not a knot from tension or stress. It\u2019s a muscle that\u2019s been doing a job it shouldn\u2019t have to do.",
      },
      {
        type: "heading",
        content: "Why posture cues alone don\u2019t fix it",
      },
      {
        type: "paragraph",
        content:
          "\u201cSit up straight\u201d is not a treatment. When the facet joints of the cervical and upper thoracic spine have been loaded into restriction \u2014 when the joints have lost their normal arthrokinematic motion \u2014 no amount of postural awareness will move them. The joint has to be mobilized manually. The suboccipital muscles have to be released from their shortened state through soft tissue work. The deep cervical flexors have to be retrained to do their job again.",
      },
      {
        type: "paragraph",
        content:
          "Postural correction and ergonomic modification matter. They are part of the solution. But they come after the mechanical problem is addressed \u2014 not instead of it. If you\u2019re dealing with chronic upper neck tension, recurring headaches, or persistent tightness between the shoulder blades, the structure needs to be assessed and treated. Posture cues without joint mobilization is like telling someone to walk normally on a sprained ankle.",
      },
    ],
  },
  {
    slug: "sciatica-vs-piriformis-syndrome-how-to-tell-the-difference",
    title: "Sciatica vs. Piriformis Syndrome: How to Tell the Difference",
    date: "2026-06-05",
    author: "Dr. Arthur Chakrian, DC",
    category: "Nerve & Radiculopathy",
    excerpt:
      "Both produce pain down the leg. But the source \u2014 and the treatment \u2014 are completely different. Treating one when you have the other doesn\u2019t work.",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        content:
          "The term \u201csciatica\u201d gets used loosely \u2014 often to describe any pain that travels from the lower back or buttock down the leg. But sciatica is a symptom, not a diagnosis. It tells you the sciatic nerve is being irritated somewhere along its path. It tells you nothing about where.",
      },
      {
        type: "paragraph",
        content:
          "The two most common sources are lumbar disc herniation \u2014 where the nerve root is compressed at the spine \u2014 and piriformis syndrome, where the sciatic nerve is compressed or irritated by the piriformis muscle deep in the gluteal region. These two conditions produce similar symptoms. They require different treatment. And confusing them is one of the most common reasons patients don\u2019t get better.",
      },
      {
        type: "heading",
        content: "Where the pain comes from matters",
      },
      {
        type: "paragraph",
        content:
          "In lumbar disc herniation, the compression happens at the nerve root \u2014 typically L4\u2013L5 or L5\u2013S1. The pain usually starts in the lower back, radiates through the buttock, and travels down the back of the leg, sometimes into the calf or foot. It\u2019s often worsened by sitting, forward bending, or anything that increases intradiscal pressure. Coughing or sneezing can reproduce it sharply.",
      },
      {
        type: "paragraph",
        content:
          "In piriformis syndrome, there is no disc involvement. The sciatic nerve exits the pelvis near or through the piriformis muscle. When that muscle is tight, hypertrophied, or in spasm, it compresses the nerve from the outside. The pain is typically deeper in the buttock, may radiate down the leg, but usually doesn\u2019t involve the lower back the same way. It\u2019s often worse after prolonged sitting, hip external rotation, or direct pressure on the piriformis.",
      },
      {
        type: "heading",
        content: "How we tell them apart",
      },
      {
        type: "paragraph",
        content:
          "Clinical testing differentiates them. The straight leg raise test (SLR) is positive in lumbar nerve root compression \u2014 elevating the leg reproduces the radiating pain by tensioning the nerve root. The FAIR test (hip flexion, adduction, and internal rotation) is specific for piriformis syndrome \u2014 it stretches the piriformis across the sciatic nerve and reproduces the buttock and leg pain if that\u2019s the source.",
      },
      {
        type: "paragraph",
        content:
          "Palpation of the piriformis \u2014 deep in the gluteal region \u2014 will often reproduce symptoms directly in piriformis syndrome. The lower back exam is typically unremarkable. In lumbar disc cases, motion palpation of the lumbar spine and segmental provocation will reproduce or worsen symptoms.",
      },
      {
        type: "heading",
        content: "Why it matters for treatment",
      },
      {
        type: "paragraph",
        content:
          "Lumbar disc cases are treated with decompressive lumbar adjustment, McKenzie-style positioning, and management of the disc pressure mechanics. Piriformis cases are treated with direct soft tissue work to the piriformis and hip external rotators, combined with sacroiliac and lumbopelvic adjustment to address the mechanical loading that\u2019s driving the piriformis tension.",
      },
      {
        type: "paragraph",
        content:
          "If you\u2019ve been told you have sciatica and you\u2019re not getting better, it\u2019s worth asking whether the source has actually been confirmed \u2014 or assumed. A thorough clinical assessment takes about 15 minutes and gives you a clear answer.",
      },
    ],
  },
  {
    slug: "what-chiropractic-care-actually-is-and-isnt",
    title: "What Chiropractic Care Actually Is \u2014 And Isn\u2019t",
    date: "2026-06-12",
    author: "Dr. Arthur Chakrian, DC",
    category: "Education",
    excerpt:
      "Most people have a vague idea of what chiropractors do. Some of it\u2019s accurate. A lot of it isn\u2019t. Here\u2019s a straight answer.",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        content:
          "Chiropractic care has a perception problem. To some people it\u2019s miracle medicine that treats everything from back pain to allergies. To others it\u2019s pseudoscience performed by people who crack bones. Neither of those is accurate, and both get in the way of patients making good decisions about their health.",
      },
      {
        type: "paragraph",
        content:
          "Here\u2019s what chiropractic care actually is: a clinical discipline focused on the diagnosis and treatment of musculoskeletal disorders \u2014 primarily those involving the spine \u2014 through manual therapy. The core intervention is spinal manipulation (adjustment): a specific, controlled force applied to a restricted joint to restore its normal range of motion.",
      },
      {
        type: "heading",
        content: "What the evidence actually supports",
      },
      {
        type: "paragraph",
        content:
          "The research base for chiropractic care is strongest for spinal pain \u2014 specifically acute and chronic low back pain, neck pain, and cervicogenic headaches. Multiple systematic reviews and clinical guidelines, including those from the American College of Physicians, recommend spinal manipulation as a first-line treatment for acute low back pain before pharmacological intervention.",
      },
      {
        type: "paragraph",
        content:
          "The evidence is also solid for whiplash-associated disorder, thoracic spine pain, sacroiliac joint dysfunction, and several extremity conditions. For non-musculoskeletal conditions \u2014 internal organ disorders, immune function, pediatric colic \u2014 the evidence is weak to nonexistent. A chiropractor who claims to treat asthma or infertility through spinal adjustment is not practicing evidence-based care.",
      },
      {
        type: "heading",
        content: "What an adjustment actually does",
      },
      {
        type: "paragraph",
        content:
          "A chiropractic adjustment restores normal arthrokinematic motion to a restricted spinal segment. It does this through a high-velocity, low-amplitude thrust that moves the joint through its paraphysiologic range. The mechanical effect is joint mobilization. The neurological effect is inhibition of pain signaling through mechanoreceptor stimulation. Neither of these requires any belief in vitalism, subluxation theory, or chiropractic philosophy.",
      },
      {
        type: "paragraph",
        content:
          "At Spine Bar, care is grounded in clinical orthopedics and manual therapy \u2014 not philosophy. We assess, we find what\u2019s restricted or dysfunctional, we treat it, and we track whether it\u2019s working. If it\u2019s not working, we say so.",
      },
      {
        type: "heading",
        content: "What it isn\u2019t",
      },
      {
        type: "paragraph",
        content:
          "Chiropractic care is not a substitute for medical care when medical care is indicated. It\u2019s not appropriate for fractures, serious infection, malignancy, or conditions requiring surgical intervention. Part of clinical competence is knowing when to refer \u2014 and doing it without hesitation.",
      },
      {
        type: "paragraph",
        content:
          "It\u2019s also not a lifetime commitment. Many patients benefit from a defined course of care, resolve their presenting problem, and are discharged. Some choose to come in periodically for maintenance. Neither outcome requires perpetual treatment.",
      },
    ],
  },
  {
    slug: "how-to-know-if-your-back-pain-needs-imaging",
    title: "How to Know If Your Back Pain Needs Imaging",
    date: "2026-06-19",
    author: "Dr. Arthur Chakrian, DC",
    category: "Lower Back",
    excerpt:
      "Most back pain does not need an X-ray or MRI. But some does. Here\u2019s how clinicians decide \u2014 and what imaging actually tells you.",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        content:
          "One of the most common questions patients ask when they come in with back pain is whether they need an X-ray or MRI. The honest answer is: most of the time, no. Imaging for acute low back pain is frequently ordered, frequently unhelpful, and sometimes actively misleading.",
      },
      {
        type: "paragraph",
        content:
          "Studies consistently show that structural findings on spinal imaging \u2014 disc bulges, degenerative changes, mild foraminal narrowing \u2014 are present in large percentages of people with no pain at all. A 2015 systematic review found that disc degeneration is present in 37% of asymptomatic 20-year-olds and over 90% of 60-year-olds. These are not pathological findings. They are normal age-related changes. Imaging them doesn\u2019t change that.",
      },
      {
        type: "heading",
        content: "When imaging is not indicated",
      },
      {
        type: "paragraph",
        content:
          "For most acute and subacute low back pain without red flags, imaging is not clinically indicated in the first four to six weeks. This is the consensus position of virtually every major clinical guideline \u2014 including those from the American College of Physicians, the AMA, and the Choosing Wisely initiative. Early imaging in uncomplicated back pain increases cost, increases radiation exposure, and frequently leads to unnecessary intervention on incidental findings.",
      },
      {
        type: "heading",
        content: "When imaging is indicated",
      },
      {
        type: "paragraph",
        content:
          "Red flags change the calculus. These include: significant trauma (fall from height, motor vehicle accident), suspicion of fracture, history of osteoporosis, unexplained weight loss, fever or signs of infection, history of cancer, bowel or bladder dysfunction, progressive neurological deficit, or pain that is constant, severe, and unrelenting regardless of position.",
      },
      {
        type: "paragraph",
        content:
          "Radiculopathy \u2014 nerve root pain with associated neurological signs \u2014 is also an indication for imaging if conservative care is not producing improvement, or if surgical consultation is being considered. The decision is based on the clinical picture, not the pain level alone.",
      },
      {
        type: "heading",
        content: "What imaging tells you \u2014 and doesn\u2019t",
      },
      {
        type: "paragraph",
        content:
          "Imaging shows structure. It does not show function. A normal MRI does not mean nothing is wrong \u2014 joint restriction, muscle dysfunction, and movement pattern problems don\u2019t show up on imaging. An abnormal MRI doesn\u2019t mean surgery is necessary, or even that the finding is responsible for the pain.",
      },
      {
        type: "paragraph",
        content:
          "When we see patients with existing imaging, we review it as one input among many \u2014 alongside the clinical exam, history, and functional assessment. If you don\u2019t have imaging and don\u2019t meet criteria for it, we\u2019ll tell you that directly. If you do meet criteria, we\u2019ll refer you for it before proceeding.",
      },
    ],
  },
  {
    slug: "the-difference-between-a-chiropractor-and-a-physical-therapist",
    title: "The Difference Between a Chiropractor and a Physical Therapist",
    date: "2026-06-26",
    author: "Dr. Arthur Chakrian, DC",
    category: "Education",
    excerpt:
      "Patients often ask which they should see. The honest answer depends on what\u2019s actually wrong \u2014 and both have a role.",
    readTime: "4 min read",
    body: [
      {
        type: "paragraph",
        content:
          "This is one of the most common questions patients ask \u2014 either before their first visit or after being told by a physician to \u201csee a PT or a chiro.\u201d The two professions overlap significantly, have distinct areas of strength, and are often complementary rather than competing. Understanding the difference helps you make a better decision.",
      },
      {
        type: "heading",
        content: "Where they overlap",
      },
      {
        type: "paragraph",
        content:
          "Both chiropractors and physical therapists treat musculoskeletal conditions \u2014 pain, dysfunction, and movement problems involving the spine and extremities. Both use manual therapy techniques, including joint mobilization and soft tissue work. Both assess movement and function. Both are doctoral-level clinicians. For many common presentations \u2014 low back pain, neck pain, shoulder dysfunction \u2014 either can be an appropriate first stop.",
      },
      {
        type: "heading",
        content: "Where they differ",
      },
      {
        type: "paragraph",
        content:
          "The primary distinction is in emphasis and approach. Chiropractic training is heavily focused on spinal biomechanics, joint manipulation, and the relationship between spinal function and the nervous system. The chiropractic adjustment \u2014 high-velocity manipulation \u2014 is a central tool. Chiropractors also tend to place higher emphasis on full-spine assessment and treating the whole kinetic chain rather than isolating a single structure.",
      },
      {
        type: "paragraph",
        content:
          "Physical therapy training emphasizes rehabilitative exercise, functional movement retraining, and progressive loading. PTs excel at post-surgical rehabilitation, complex movement dysfunction, and cases where the primary intervention is exercise-based. Many PTs also perform joint manipulation \u2014 but it\u2019s one tool among many rather than a central focus.",
      },
      {
        type: "heading",
        content: "Which to choose",
      },
      {
        type: "paragraph",
        content:
          "If your pain is primarily mechanical \u2014 joint restriction, spinal dysfunction, referred pain from a fixated segment \u2014 chiropractic care is likely the more direct path. If your presentation is primarily weakness, post-surgical, or requires significant movement retraining, physical therapy is the stronger fit. Many patients benefit from both, sequentially or concurrently.",
      },
      {
        type: "paragraph",
        content:
          "At Spine Bar, we don\u2019t operate in silos. If your presentation calls for referral to PT \u2014 or to any other provider \u2014 we\u2019ll make that recommendation directly. The goal is that you get better, not that you stay in our office.",
      },
    ],
  },
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
export type Condition = (typeof CONDITIONS)[number];

export const REVIEWS: {
  name: string;
  rating: number;
  date: string;
  body: string;
  condition?: string;
}[] = [
  // Paste reviews here as they come in — format:
  // { name: "First Name L.", rating: 5, date: "2026-06-01", body: "...", condition: "Lower Back Pain" },
];
