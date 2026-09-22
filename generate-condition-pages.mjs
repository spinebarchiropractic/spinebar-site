import { mkdirSync, writeFileSync } from 'node:fs';

const booking = 'https://patient.chirotouch.com/spinebarchiropractic/guest/booking/appointment-type';
const publishedDate = '2026-08-25';
const modifiedDate = '2026-09-22';
const reviewedLabel = 'September 22, 2026';
const conditions = [
  {
    slug: 'lower-back-pain', title: 'Lower Back Pain', seoTitle: 'Lower Back Pain Care | Toluca Lake Chiropractor', region: 'Lumbar spine & pelvis',
    description: 'Learn how Spine Bar evaluates lower back pain, movement restrictions, muscle tension, and possible disc or nerve involvement in Toluca Lake.',
    intro: 'Lower back pain can appear suddenly, build over time, or return in a familiar pattern. A useful evaluation looks at how the lumbar spine, pelvis, hips, and surrounding muscles share movement and load.',
    patterns: ['Pain or stiffness after sitting, lifting, or changing positions', 'Reduced bending, rotation, or tolerance for daily activity', 'Recurring flare-ups that improve but never fully resolve'],
    care: ['A detailed history of when symptoms began and what changes them', 'Movement, orthopedic, and hands-on assessment tailored to your presentation', 'A clear explanation of findings and conservative options when appropriate'],
    related: ['sciatica', 'disc-herniation', 'hip-pain', 'auto-accident-injuries']
  },
  {
    slug: 'neck-pain', title: 'Neck Pain', seoTitle: 'Neck Pain Treatment | Toluca Lake Chiropractor', region: 'Cervical spine',
    description: 'Explore personalized evaluation and conservative chiropractic care for neck pain, stiffness, and referred discomfort at Spine Bar in Toluca Lake.',
    intro: 'Neck discomfort may be influenced by sustained positions, stress, an old injury, restricted joints, or surrounding muscle tension. The goal of an assessment is to understand the pattern rather than treating every neck the same way.',
    patterns: ['Stiffness when turning or looking up and down', 'Tension that spreads toward the shoulders or upper back', 'Symptoms associated with desk work, driving, or sleep position'],
    care: ['Review of symptom behavior, activity demands, and relevant history', 'Assessment of neck, upper-back, shoulder, and nerve function', 'Care adapted to your comfort with findings explained before treatment'],
    related: ['tech-neck', 'headaches-migraines', 'shoulder-upper-back-pain', 'auto-accident-injuries']
  },
  {
    slug: 'sciatica', title: 'Sciatica', region: 'Lower back & nerve pathways',
    description: 'Understand common sciatica patterns and how Spine Bar assesses radiating leg pain, tingling, or numbness in Toluca Lake.',
    intro: 'Sciatica describes symptoms that travel along a nerve pathway, but it does not identify the source by itself. Irritation may involve the lower back, pelvis, or surrounding soft tissue, so locating the most likely driver matters.',
    patterns: ['Pain that travels from the lower back or buttock into the leg', 'Tingling, numbness, or sensitivity along part of the leg', 'Symptoms that change with sitting, bending, walking, or position'],
    care: ['Neurologic and orthopedic screening appropriate to your symptoms', 'Assessment of lumbar, pelvic, hip, and soft-tissue mechanics', 'Honest guidance about whether conservative care is appropriate'],
    related: ['lower-back-pain', 'disc-herniation', 'hip-pain']
  },
  {
    slug: 'disc-herniation', title: 'Disc Herniation & Bulging Discs', region: 'Spinal discs',
    description: 'Learn how suspected or diagnosed disc problems are evaluated conservatively at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'A disc finding on imaging does not tell the whole story. Symptoms, strength, sensation, movement tolerance, and neurologic signs all help determine whether conservative care may be appropriate.',
    patterns: ['Back or neck pain that changes with position or load', 'Radiating symptoms, tingling, or numbness in an arm or leg', 'A prior MRI or diagnosis that needs clinical context'],
    care: ['Review of symptoms, imaging when available, and neurologic status', 'Gentle examination to understand irritability and movement tolerance', 'Referral for additional evaluation when findings fall outside conservative care'],
    related: ['lower-back-pain', 'sciatica', 'neck-pain']
  },
  {
    slug: 'headaches-migraines', title: 'Headaches & Migraines', region: 'Head & upper cervical spine',
    description: 'Explore how neck tension and upper-cervical mechanics may contribute to some headache patterns at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Headaches have many possible causes. Some patterns are influenced by the neck, upper back, jaw, stress, or sustained posture, while others require medical evaluation. A careful history helps determine the safest next step.',
    patterns: ['Head pain that begins near the neck or base of the skull', 'Headaches associated with neck stiffness or sustained posture', 'Recurring tension patterns that affect concentration or activity'],
    care: ['Screening for history or symptoms that require medical referral', 'Assessment of neck motion, upper-back mechanics, and muscle tension', 'Conservative care only when the presentation is appropriate'],
    related: ['neck-pain', 'tech-neck', 'shoulder-upper-back-pain']
  },
  {
    slug: 'hip-pain', title: 'Hip Pain', region: 'Hips, pelvis & SI joints',
    description: 'Learn how Spine Bar evaluates hip pain, pelvic mechanics, and related lower-back movement in Toluca Lake.',
    intro: 'Hip discomfort can come from the joint, surrounding muscles, the pelvis, or the lower back. Looking at the full movement chain helps clarify what may be contributing and which conservative options make sense.',
    patterns: ['Pain near the side, front, or back of the hip', 'Discomfort with walking, stairs, sitting, or training', 'Hip symptoms that occur alongside lower-back stiffness'],
    care: ['Comparison of hip, pelvic, and lumbar movement', 'Relevant orthopedic testing and hands-on assessment', 'A plan based on the suspected source and your activity goals'],
    related: ['lower-back-pain', 'sciatica', 'sports-injuries']
  },
  {
    slug: 'shoulder-upper-back-pain', title: 'Shoulder & Upper Back Pain', region: 'Thoracic spine & shoulder girdle',
    description: 'Explore individualized care for shoulder tension, upper-back stiffness, and movement restrictions at Spine Bar in Toluca Lake.',
    intro: 'Shoulder movement depends on the shoulder joint, shoulder blade, ribs, upper back, and surrounding muscles working together. Assessment of the whole region helps avoid chasing only the sore spot.',
    patterns: ['Upper-back tightness during desk work or driving', 'Shoulder discomfort with reaching, lifting, or training', 'Tension that travels between the neck and shoulder blades'],
    care: ['Assessment of shoulder motion, thoracic mobility, and muscle function', 'Screening for problems that may require orthopedic evaluation', 'Manual care and movement guidance matched to the findings'],
    related: ['neck-pain', 'tech-neck', 'sports-injuries']
  },
  {
    slug: 'tech-neck', title: 'Tech Neck & Postural Strain', region: 'Neck & upper back',
    description: 'Learn how prolonged screen positions can affect the neck and upper back, and how Spine Bar evaluates tech-neck patterns in Toluca Lake.',
    intro: 'Screens are not inherently harmful. Problems more often develop when the body stays in one position longer than it comfortably tolerates. The neck, rib cage, shoulder blades, and upper back all contribute.',
    patterns: ['Stiffness that increases through the workday', 'Neck or upper-back fatigue during prolonged screen use', 'Headaches or shoulder tension associated with desk posture'],
    care: ['Review of work setup, movement habits, and symptom timing', 'Assessment of neck, upper-back, rib, and shoulder mechanics', 'Practical movement strategies alongside appropriate hands-on care'],
    related: ['neck-pain', 'headaches-migraines', 'shoulder-upper-back-pain']
  },
  {
    slug: 'sports-injuries', title: 'Sports & Athletic Injuries', region: 'Spine, joints & soft tissue',
    description: 'Get a movement-focused chiropractic evaluation for sports injuries and training-related restrictions at Spine Bar in Toluca Lake.',
    intro: 'Sports symptoms may follow a single incident or accumulate through repetitive load. A useful plan considers the injured area, the movement demands of your sport, and what must improve before returning confidently.',
    patterns: ['Pain or restriction after training, competition, or repetitive load', 'Reduced confidence with a specific movement or exercise', 'A recurring issue that returns as activity increases'],
    care: ['History of the mechanism, training demands, and performance goals', 'Movement and orthopedic assessment of the involved region', 'Clear guidance about appropriate care, progression, or referral'],
    related: ['hip-pain', 'shoulder-upper-back-pain', 'lower-back-pain']
  },
  {
    slug: 'auto-accident-injuries', title: 'Auto Accident Injuries', region: 'Neck, back & soft tissue',
    description: 'Learn what to expect from a chiropractic evaluation after an auto accident at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Symptoms after a collision may develop immediately or become more noticeable later. A documented evaluation can help clarify how the neck, back, joints, and soft tissues are functioning after the event.',
    patterns: ['Neck stiffness, headaches, or upper-back discomfort after a collision', 'Lower-back pain or reduced movement following impact', 'Symptoms that affect sleep, work, driving, or daily activity'],
    care: ['Detailed accident and symptom history with appropriate documentation', 'Orthopedic, neurologic, and movement screening based on presentation', 'Referral for imaging or medical evaluation when clinically indicated'],
    related: ['neck-pain', 'headaches-migraines', 'lower-back-pain']
  },
  {
    slug: 'prenatal', title: 'Prenatal Chiropractic Care', region: 'Pregnancy-adapted care',
    description: 'Discover gentle, pregnancy-adapted chiropractic care for back, hip, and pelvic discomfort at Spine Bar in Toluca Lake.',
    intro: 'Pregnancy changes posture, load, and movement through the spine and pelvis. Care should be adapted to the trimester, comfort, medical history, and the specific musculoskeletal concerns present.',
    patterns: ['Lower-back, pelvic, or SI-joint discomfort during pregnancy', 'Hip or upper-back tension as posture and load change', 'Movement restrictions that affect sleep or daily comfort'],
    care: ['Pregnancy-appropriate positioning and examination', 'Gentle techniques adapted to trimester and comfort', 'Coordination with an obstetric clinician or midwife when appropriate'],
    related: ['hip-pain', 'lower-back-pain', 'shoulder-upper-back-pain']
  }
];

const bySlug = Object.fromEntries(conditions.map(item => [item.slug, item]));
const services = [
  {
    slug: 'new-patient-assessment', title: 'New Patient Chiropractic Assessment', label: 'Your first visit',
    description: 'Book a thorough new patient chiropractic assessment with Dr. Arthur Chakrian, DC at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'A useful first visit should create clarity. Dr. Chakrian takes time to understand your history, examine the way you move, explain relevant findings, and discuss whether chiropractic care is an appropriate next step.',
    includes: ['A focused conversation about your symptoms, health history, activity, and goals', 'Postural, movement, orthopedic, and neurologic screening when relevant', 'A plain-language review of findings before any treatment is recommended'],
    suited: ['You are seeking an evaluation for a new or recurring musculoskeletal concern', 'You want to understand the likely pattern before beginning care', 'You value one-on-one time and a conservative, individualized recommendation'],
    related: ['lower-back-pain', 'neck-pain', 'sports-injuries']
  },
  {
    slug: 'chiropractic-adjustments', title: 'Chiropractic Adjustments', seoTitle: 'Spinal & Chiropractic Adjustments | Toluca Lake', label: 'Manual-first care',
    description: 'Explore personalized spinal and chiropractic adjustments with Dr. Arthur Chakrian, DC at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Chiropractic adjustments are hands-on techniques used to address selected joint and movement restrictions. At Spine Bar, technique and intensity are adapted to your examination findings, comfort, health history, and response to care.',
    includes: ['A clinical assessment to determine whether an adjustment is appropriate', 'Clear explanation of the area being treated and the technique being considered', 'Reassessment of comfort and movement so care can be adjusted over time'],
    suited: ['You have joint stiffness or movement restrictions affecting daily activity', 'You prefer hands-on, manual-first conservative care', 'You want treatment decisions tied to an examination rather than a preset routine'],
    related: ['lower-back-pain', 'neck-pain', 'hip-pain']
  },
  {
    slug: 'soft-tissue-therapy', title: 'Soft Tissue Therapy', label: 'Muscles & movement',
    description: 'Learn about individualized soft tissue therapy for muscular tension and movement restrictions at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Muscles, tendons, fascia, and surrounding tissues can influence comfort and movement. Soft tissue therapy may be used alongside joint care when examination findings suggest that tension, sensitivity, or load tolerance is part of the pattern.',
    includes: ['Hands-on assessment of the involved area and related movement', 'Targeted manual techniques selected for comfort and clinical relevance', 'Practical movement guidance when it supports the goals of care'],
    suited: ['Muscular tightness accompanies a neck, back, shoulder, or hip concern', 'Training or repetitive activity has affected mobility or recovery', 'A combined joint and soft-tissue approach fits the examination findings'],
    related: ['shoulder-upper-back-pain', 'sports-injuries', 'tech-neck']
  },
  {
    slug: 'prenatal-chiropractic-care', title: 'Prenatal Chiropractic Care', seoTitle: 'Prenatal Chiropractic Services | Toluca Lake', label: 'Pregnancy-adapted care',
    description: 'Discover gentle, pregnancy-adapted chiropractic care with Dr. Arthur Chakrian, DC at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Pregnancy changes posture, load, and movement through the spine and pelvis. Prenatal visits are adapted to trimester, comfort, medical history, and the specific musculoskeletal concern that brings you in.',
    includes: ['Pregnancy-appropriate positioning and examination', 'Gentle techniques adapted to your comfort and presentation', 'Coordination with your obstetric clinician or midwife when appropriate'],
    suited: ['Lower-back, pelvic, hip, or upper-back discomfort during pregnancy', 'Movement restrictions are affecting sleep or daily comfort', 'You want conservative care adapted to the needs of pregnancy'],
    related: ['prenatal', 'hip-pain', 'lower-back-pain']
  },
  {
    slug: 'wellness-chiropractic-care', title: 'Wellness Chiropractic Care', label: 'Ongoing movement support',
    description: 'Explore individualized wellness chiropractic care focused on movement, habits, and long-term function at Spine Bar Chiropractic in Toluca Lake.',
    intro: 'Some patients choose periodic care after an acute concern has improved. Wellness visits should still be purposeful: goals, frequency, and treatment are reviewed rather than assumed, and recommendations change as your needs change.',
    includes: ['Review of current function, activity, and any new concerns', 'Focused reassessment before hands-on care', 'Simple guidance for movement, recovery, and habits when relevant'],
    suited: ['You want periodic movement-focused check-ins', 'Your work, training, or daily routine creates recurring stiffness', 'You prefer an individualized schedule rather than an automatic long-term plan'],
    related: ['sports-injuries', 'tech-neck', 'shoulder-upper-back-pain']
  }
];
const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const styles = `
:root{--forest:#17382d;--deep:#0d261f;--cream:#f3efe5;--clay:#b76849;--sage:#a6b5a0;--ink:#17231f;--line:rgba(23,56,45,.18)}
.profile-photo{display:block;width:100%;max-width:560px;aspect-ratio:4/3;object-fit:cover;object-position:center 28%;margin:0 0 44px;background:#e8e0cf}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,sans-serif}a{color:inherit}.shell{width:min(1120px,calc(100% - 40px));margin:auto}.nav{padding:18px 0;border-bottom:1px solid rgba(255,255,255,.17);background:var(--deep);color:#fff}.nav .shell{display:flex;justify-content:space-between;align-items:center;gap:25px}.brand{display:inline-flex;align-items:center;gap:12px;font:32px Georgia,serif;text-decoration:none}.brand img{width:58px;height:58px;border-radius:50%;object-fit:cover;background:#fff}.footer .brand img{width:66px;height:66px}.navlinks{display:flex;gap:22px;align-items:center;font-size:13px}.navlinks a{text-decoration:none}.button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;background:var(--clay);color:#fff;text-decoration:none;font-weight:700;font-size:13px}.hero{padding:88px 0 76px;background:var(--forest);color:#fff}.crumbs{margin-bottom:34px;color:rgba(255,255,255,.55);font-size:12px}.crumbs a{color:inherit}.eyebrow{color:var(--sage);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.16em}.hero h1{max-width:850px;margin:18px 0 25px;font:normal clamp(52px,8vw,90px)/.93 Georgia,serif;letter-spacing:-.045em}.hero p{max-width:760px;color:rgba(255,255,255,.7);font-size:18px;line-height:1.7}.grid{display:grid;grid-template-columns:1.1fr .9fr;gap:75px;padding:85px 0}.content h2,.related h2{font:normal clamp(36px,5vw,56px)/1 Georgia,serif;letter-spacing:-.03em}.content h3{margin-top:42px;font:normal 30px Georgia,serif}.content p,.content li{color:#5b6661;line-height:1.75}.content li{margin:12px 0}.aside{align-self:start;padding:34px;background:#e8e0cf;position:sticky;top:25px}.aside strong{display:block;margin-bottom:12px;font:normal 30px Georgia,serif}.aside p{color:#5b6661;line-height:1.65}.note{margin-top:44px;padding:22px;border-left:3px solid var(--clay);background:#ece5d8;color:#5b6661;font-size:13px;line-height:1.7}.related{padding:70px 0;background:#e8e0cf}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.card{min-height:150px;padding:24px;border:1px solid var(--line);background:var(--cream);text-decoration:none}.card span{color:var(--clay);font-size:10px;text-transform:uppercase;letter-spacing:.13em}.card strong{display:block;margin-top:34px;font:normal 25px Georgia,serif}.footer{padding:58px 0;background:var(--deep);color:#fff}.footer .shell{display:grid;grid-template-columns:1fr 1fr;gap:35px}.footer p,.footer address{margin:0;color:rgba(255,255,255,.64);font-style:normal;line-height:1.7}.footer a{color:#fff}@media(max-width:760px){.brand{font-size:24px}.brand img{width:50px;height:50px}.navlinks>a:not(.button){display:none}.grid{grid-template-columns:1fr;gap:38px;padding:60px 0}.aside{position:static}.cards{grid-template-columns:1fr}.footer .shell{grid-template-columns:1fr}.hero{padding:65px 0}.hero h1{font-size:54px}}
`;

const businessSchema = {
  '@type': 'MedicalBusiness', '@id': 'https://www.spinebar.com/#business', name: 'Spine Bar Chiropractic',
  alternateName: 'Spine Bar', url: 'https://www.spinebar.com/', telephone: '+1-747-774-7144', email: 'info@spinebar.com',
  description: 'A one-on-one chiropractic practice serving Toluca Lake and nearby communities, led by Dr. Arthur Chakrian, DC.',
  image: 'https://www.spinebar.com/assets/spine-bar-hero-sign.webp', logo: 'https://www.spinebar.com/assets/spine-bar-logo.png', priceRange: '$$',
  address: { '@type': 'PostalAddress', streetAddress: '10918 Riverside Dr', addressLocality: 'North Hollywood', addressRegion: 'CA', postalCode: '91602', addressCountry: 'US' },
  areaServed: ['Toluca Lake', 'North Hollywood', 'Studio City', 'Burbank', 'Valley Village'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' }
  ],
  sameAs: ['https://www.instagram.com/spinebarchiropractic/', 'https://www.zocdoc.com/doctor/arthur-chakrian-dc-805563', 'https://npiregistry.cms.hhs.gov/provider-view/1871430843'],
  founder: { '@id': 'https://www.spinebar.com/#arthur-chakrian' }
};

const doctorSchema = {
  '@type': 'Person', '@id': 'https://www.spinebar.com/#arthur-chakrian', name: 'Dr. Arthur Chakrian', honorificSuffix: 'DC',
  jobTitle: 'Doctor of Chiropractic', image: 'https://www.spinebar.com/assets/dr-arthur-chakrian.webp',
  identifier: { '@type': 'PropertyValue', propertyID: 'NPI', value: '1609631449' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Life Chiropractic College West' },
  hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California chiropractic license', recognizedBy: { '@type': 'Organization', name: 'California Board of Chiropractic Examiners' }, identifier: 'DC 36804' },
  worksFor: { '@id': 'https://www.spinebar.com/#business' }, sameAs: ['https://www.zocdoc.com/doctor/arthur-chakrian-dc-805563', 'https://npiregistry.cms.hhs.gov/provider-view/1609631449']
};

function head(title, description, canonical, schema) {
  return `<!doctype html><html lang="en-US"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="author" content="Dr. Arthur Chakrian, DC"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="en-US" href="${canonical}"><link rel="alternate" hreflang="x-default" href="${canonical}"><link rel="icon" type="image/webp" href="/assets/spine-bar-logo.webp"><link rel="apple-touch-icon" href="/assets/spine-bar-logo.png"><meta name="theme-color" content="#17382d"><meta name="geo.region" content="US-CA"><meta name="geo.placename" content="Toluca Lake"><meta property="og:type" content="article"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="Spine Bar Chiropractic"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://www.spinebar.com/assets/spine-bar-og.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Spine Bar Chiropractic in Toluca Lake"><meta property="article:author" content="https://www.spinebar.com/about"><meta property="article:modified_time" content="${modifiedDate}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="https://www.spinebar.com/assets/spine-bar-og.jpg"><script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [businessSchema, doctorSchema, schema] })}</script><script>window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments)};</script><script defer src="/_vercel/speed-insights/script.js"></script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="/assets/content-pages.css"></head>`;
}

function nav() {
  return `<header class="nav"><div class="shell"><a class="brand" href="/" aria-label="Spine Bar home"><img src="/assets/spine-bar-logo.webp" alt="">Spine Bar</a><nav class="navlinks" aria-label="Primary"><a href="/services">Services</a><a href="/conditions">Conditions</a><a href="/about">Dr. Chakrian</a><a href="tel:+17477747144">747-774-7144</a><a class="button" href="${booking}">Book appointment</a></nav></div></header>`;
}

function footer() {
  return `<footer class="footer"><div class="shell"><div><a class="brand" href="/" aria-label="Spine Bar home"><img src="/assets/spine-bar-logo.webp" alt="" loading="lazy">Spine Bar Chiropractic</a><p>One-on-one chiropractic care with Dr. Arthur Chakrian, DC in the Toluca Lake neighborhood.</p><p><a href="/privacy">Privacy notice</a></p></div><address>10918 Riverside Dr<br>North Hollywood, CA 91602<br><a href="tel:+17477747144">747-774-7144</a><br>Mon–Fri 9am–5pm · Sat 9am–1pm</address></div></footer>`;
}

function detailPage(item) {
  const canonical = `https://www.spinebar.com/conditions/${item.slug}`;
  const schema = {
    '@type': 'MedicalWebPage', '@id': `${canonical}#webpage`, url: canonical, name: `${item.title} | Spine Bar Chiropractic`,
    description: item.description, datePublished: publishedDate, dateModified: modifiedDate, lastReviewed: modifiedDate,
    author: { '@id': 'https://www.spinebar.com/#arthur-chakrian' }, reviewedBy: { '@id': 'https://www.spinebar.com/#arthur-chakrian' },
    about: { '@id': 'https://www.spinebar.com/#business' },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spinebar.com/' },
      { '@type': 'ListItem', position: 2, name: 'Conditions', item: 'https://www.spinebar.com/conditions' },
      { '@type': 'ListItem', position: 3, name: item.title, item: canonical }
    ] }
  };
  const related = item.related.map(slug => `<a class="card" href="/conditions/${slug}"><span>Related guide</span><strong>${esc(bySlug[slug].title)}</strong></a>`).join('');
  return `${head(item.seoTitle || `${item.title} | Toluca Lake Chiropractor`, item.description, canonical, schema)}<body>${nav()}<main><section class="hero"><div class="shell"><div class="crumbs"><a href="/">Home</a> / <a href="/conditions">Conditions</a> / ${esc(item.title)}</div><div class="eyebrow">${esc(item.region)} · Toluca Lake</div><h1>${esc(item.title)}</h1><p>${esc(item.intro)}</p></div></section><div class="shell grid"><article class="content"><p class="reviewed-by">Clinically reviewed by <a href="/about">Dr. Arthur Chakrian, DC</a> · Last reviewed ${reviewedLabel}</p><h2>Understanding the pattern</h2><p>Symptoms can have more than one possible source. An in-person assessment helps connect what you feel with your history, movement, and relevant examination findings.</p><h3>Common reasons people seek an evaluation</h3><ul>${item.patterns.map(value => `<li>${esc(value)}</li>`).join('')}</ul><h3>What your first visit may include</h3><ul>${item.care.map(value => `<li>${esc(value)}</li>`).join('')}</ul><div class="note"><strong>Medical note:</strong> This page is educational and is not a diagnosis. Seek urgent medical care for severe or rapidly worsening symptoms, new weakness, loss of bowel or bladder control, saddle numbness, major trauma, chest pain, or other emergency concerns.</div></article><aside class="aside"><strong>Start with a conversation.</strong><p>Your first visit is one-on-one with Dr. Chakrian and includes time to understand what brought you in.</p><a class="button" href="${booking}">Book your visit</a><p><a href="tel:+17477747144">Call 747-774-7144</a></p></aside></div><section class="related"><div class="shell"><h2>Related condition guides</h2><div class="cards">${related}</div></div></section></main>${footer()}</body></html>`;
}

function indexPage() {
  const canonical = 'https://www.spinebar.com/conditions';
  const description = 'Explore common chiropractic conditions evaluated at Spine Bar Chiropractic in Toluca Lake, including back pain, neck pain, sciatica, headaches, and sports injuries.';
  const schema = { '@type': 'CollectionPage', '@id': `${canonical}#webpage`, url: canonical, name: 'Conditions We Evaluate | Spine Bar Chiropractic', description, about: { '@id': 'https://www.spinebar.com/#business' }, author: { '@id': 'https://www.spinebar.com/#arthur-chakrian' }, dateModified: modifiedDate, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spinebar.com/' }, { '@type': 'ListItem', position: 2, name: 'Conditions', item: canonical }] } };
  const cards = conditions.map(item => `<a class="card" href="/conditions/${item.slug}"><span>${esc(item.region)}</span><strong>${esc(item.title)}</strong></a>`).join('');
  return `${head('Conditions We Evaluate | Toluca Lake Chiropractor', description, canonical, schema)}<body>${nav()}<main><section class="hero"><div class="shell"><div class="crumbs"><a href="/">Home</a> / Conditions</div><div class="eyebrow">Condition guides · Toluca Lake</div><h1>Understand what may be affecting how you move.</h1><p>Explore common musculoskeletal concerns evaluated by Dr. Arthur Chakrian, DC. Every guide is educational; the right starting point is a personal assessment.</p></div></section><section class="related"><div class="shell"><div class="cards">${cards}</div></div></section><div class="shell grid"><article class="content"><p class="reviewed-by">Clinically reviewed by <a href="/about">Dr. Arthur Chakrian, DC</a> · Last reviewed ${reviewedLabel}</p><h2>One body, one thoughtful plan.</h2><p>Spine Bar takes time to understand your history, symptoms, and movement before recommending care. If your presentation falls outside the scope of chiropractic care, Dr. Chakrian will explain that and help point you toward an appropriate next step.</p></article><aside class="aside"><strong>Not sure where to begin?</strong><p>Book a first visit or call with a question. There is no pressure to commit to a treatment plan.</p><a class="button" href="${booking}">Book your visit</a></aside></div></main>${footer()}</body></html>`;
}

function servicePage(item) {
  const canonical = `https://www.spinebar.com/services/${item.slug}`;
  const schema = {
    '@type': 'Service', '@id': `${canonical}#service`, url: canonical, name: item.title, description: item.description,
    serviceType: item.title, provider: { '@id': 'https://www.spinebar.com/#business' },
    areaServed: { '@type': 'City', name: 'Toluca Lake' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical, dateModified: modifiedDate, author: { '@id': 'https://www.spinebar.com/#arthur-chakrian' } },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spinebar.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.spinebar.com/services' },
      { '@type': 'ListItem', position: 3, name: item.title, item: canonical }
    ] }
  };
  const related = item.related.map(slug => `<a class="card" href="/conditions/${slug}"><span>Related condition guide</span><strong>${esc(bySlug[slug].title)}</strong></a>`).join('');
  return `${head(item.seoTitle || `${item.title} | Toluca Lake Chiropractor`, item.description, canonical, schema)}<body>${nav()}<main><section class="hero"><div class="shell"><div class="crumbs"><a href="/">Home</a> / <a href="/services">Services</a> / ${esc(item.title)}</div><div class="eyebrow">${esc(item.label)} · Toluca Lake</div><h1>${esc(item.title)}</h1><p>${esc(item.intro)}</p></div></section><div class="shell grid"><article class="content"><p class="reviewed-by">Service information provided by <a href="/about">Dr. Arthur Chakrian, DC</a> · Updated ${reviewedLabel}</p><h2>Care built around your assessment</h2><p>No technique is appropriate for every person or every presentation. Dr. Chakrian begins with your history and relevant examination findings, explains the options, and adapts care to your comfort and goals.</p><h3>What this service may include</h3><ul>${item.includes.map(value => `<li>${esc(value)}</li>`).join('')}</ul><h3>When it may be a useful fit</h3><ul>${item.suited.map(value => `<li>${esc(value)}</li>`).join('')}</ul><div class="note"><strong>Clinical note:</strong> Services are recommended only after an appropriate assessment. Results vary, and chiropractic care does not replace emergency or medically necessary evaluation.</div></article><aside class="aside"><strong>Start with a focused first visit.</strong><p>Meet one-on-one with Dr. Chakrian to discuss your concern and whether this service fits your presentation.</p><a class="button" href="${booking}">Book your visit</a><p><a href="tel:+17477747144">Call 747-774-7144</a></p></aside></div><section class="related"><div class="shell"><h2>Related condition guides</h2><div class="cards">${related}</div></div></section></main>${footer()}</body></html>`;
}

function aboutPage() {
  const canonical = 'https://www.spinebar.com/about';
  const description = 'Meet Dr. Arthur Chakrian, DC, the chiropractor at Spine Bar Chiropractic, serving Toluca Lake from 10918 Riverside Dr in North Hollywood.';
  const schema = {
    '@type': 'ProfilePage', '@id': `${canonical}#webpage`, url: canonical,
    name: 'Dr. Arthur Chakrian, DC | Spine Bar Chiropractic', description, dateModified: modifiedDate,
    mainEntity: { '@id': 'https://www.spinebar.com/#arthur-chakrian' },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spinebar.com/' },
      { '@type': 'ListItem', position: 2, name: 'Dr. Arthur Chakrian', item: canonical }
    ] }
  };
  return `${head('Dr. Arthur Chakrian, DC | Toluca Lake Chiropractor', description, canonical, schema)}<body>${nav()}<main><section class="hero"><div class="shell"><div class="crumbs"><a href="/">Home</a> / Dr. Arthur Chakrian</div><div class="eyebrow">Meet your chiropractor · Toluca Lake</div><h1>Dr. Arthur Chakrian, DC</h1><p>One-on-one chiropractic care grounded in thoughtful assessment, clear explanations, and treatment tailored to the person—not a preset plan.</p></div></section><div class="shell grid"><article class="content"><img class="profile-photo" src="/assets/dr-arthur-chakrian.webp" alt="Dr. Arthur Chakrian, DC, chiropractor at Spine Bar Chiropractic" width="2048" height="2048"><h2>A personal approach to chiropractic care</h2><p>Dr. Chakrian takes time to understand your symptoms, health history, daily demands, and goals before recommending care. Each visit is with the same doctor, so the plan can respond to how you are moving and feeling over time.</p><h3>Education and credentials</h3><ul><li>Doctor of Chiropractic</li><li>Graduate of Life Chiropractic College West</li><li>California chiropractic license DC 36804</li></ul><h3>What patients can expect</h3><p>Care is manual-first and may include chiropractic adjustments, soft-tissue work, movement guidance, or referral when another type of evaluation is more appropriate. Findings and options are explained in plain language so you can make an informed decision.</p></article><aside class="aside"><strong>Meet Dr. Chakrian.</strong><p>Spine Bar is located at 10918 Riverside Dr in North Hollywood, in the Toluca Lake neighborhood.</p><a class="button" href="${booking}">Book your visit</a><p><a href="tel:+17477747144">Call 747-774-7144</a></p></aside></div></main>${footer()}</body></html>`;
}

function servicesIndexPage() {
  const canonical = 'https://www.spinebar.com/services';
  const description = 'Explore personalized chiropractic services at Spine Bar in Toluca Lake, including assessments, adjustments, soft tissue therapy, prenatal care, and wellness care.';
  const schema = { '@type': 'CollectionPage', '@id': `${canonical}#webpage`, url: canonical, name: 'Chiropractic Services | Spine Bar Chiropractic', description, about: { '@id': 'https://www.spinebar.com/#business' }, author: { '@id': 'https://www.spinebar.com/#arthur-chakrian' }, dateModified: modifiedDate, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spinebar.com/' }, { '@type': 'ListItem', position: 2, name: 'Services', item: canonical }] } };
  const cards = services.map(item => `<a class="card" href="/services/${item.slug}"><span>${esc(item.label)}</span><strong>${esc(item.title)}</strong></a>`).join('');
  return `${head('Chiropractic Services | Toluca Lake Chiropractor', description, canonical, schema)}<body>${nav()}<main><section class="hero"><div class="shell"><div class="crumbs"><a href="/">Home</a> / Services</div><div class="eyebrow">Personalized services · Toluca Lake</div><h1>Care that begins with listening.</h1><p>Explore the services available at Spine Bar Chiropractic. Every recommendation is shaped by your history, examination findings, comfort, and goals.</p></div></section><section class="related"><div class="shell"><div class="cards">${cards}</div></div></section><div class="shell grid"><article class="content"><p class="reviewed-by">Service information provided by <a href="/about">Dr. Arthur Chakrian, DC</a> · Updated ${reviewedLabel}</p><h2>One doctor, one thoughtful plan.</h2><p>Dr. Arthur Chakrian provides one-on-one care and explains the reasoning behind each recommendation. If your presentation is not appropriate for chiropractic care, he will discuss referral or other next steps.</p></article><aside class="aside"><strong>Not sure which service fits?</strong><p>You do not need to choose a technique before your appointment. Begin with a new patient assessment.</p><a class="button" href="${booking}">Book your visit</a></aside></div></main>${footer()}</body></html>`;
}

mkdirSync('conditions', { recursive: true });
mkdirSync('services', { recursive: true });
writeFileSync('conditions.html', indexPage());
for (const item of conditions) writeFileSync(`conditions/${item.slug}.html`, detailPage(item));
writeFileSync('services.html', servicesIndexPage());
for (const item of services) writeFileSync(`services/${item.slug}.html`, servicePage(item));
writeFileSync('about.html', aboutPage());
console.log(`Generated ${conditions.length + services.length + 3} SEO pages.`);
