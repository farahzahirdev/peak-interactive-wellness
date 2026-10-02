/** Bump when replacing files in public/images so caches refresh */
const IMG_V = "20261002i";

const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;

export const LOGO_URL = img("/images/logo.png");
export const LOGO_ON_LIGHT_URL = img("/images/logo-on-light.png");
export const LOGO_MARK_URL = img("/images/logo-mark.png");

export const HERO_FEATURES = [
  {
    id: "tms",
    title: "TMS & Spravato®",
    description:
      "Advanced treatments for treatment-resistant depression, anxiety, and more.",
  },
  {
    id: "team",
    title: "Compassionate Team",
    description: "Licensed, experienced psychiatric nurse practitioners.",
  },
  {
    id: "insurance",
    title: "Most Insurance Plans",
    description: "We’ll help you navigate your coverage.",
  },
  {
    id: "locations",
    title: "Two Colorado Locations",
    description: "Greenwood Village & Denver, plus telehealth.",
  },
  {
    id: "reviews",
    title: "350+ 5-Star Reviews",
    description: "Real people. Real results.",
  },
] as const;

export const IMAGES = {
  hero: img("/images/hero.jpg"),
  tms: img("/images/tms.jpg"),
  spravato: img("/images/spravato.jpg"),
  team: img("/images/team.jpg"),
  mindfulness: img("/images/mindfulness.jpg"),
  yoga: img("/images/yoga.jpg"),
  clinic: img("/images/clinic.jpg"),
  calm: img("/images/calm.jpg"),
  nature: img("/images/nature.jpg"),
  space: img("/images/space.jpg"),
  meetOurTeam: img("/images/meet-our-team.jpg"),
} as const;

export const PROVIDERS_SECTION_ID = "providers";

export const FORM_SECTION_ID = "qualify";
export const FORM_ID = "IGlxoc5MoetL0NxbiPI5";
export const FORM_IFRAME_ID = "inline-IGlxoc5MoetL0NxbiPI5";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2249";

export const SERVICES_SECTION_ID = "services";
export const CONDITIONS_SECTION_ID = "conditions";

export const PHONE_NUMBER = "(719) 569-3802";
export const PHONE_HREF = "tel:+17195693802";
export const WEBSITE_URL = "https://peakinteractivewellness.com/";
export const TEAM_URL = "https://peakinteractivewellness.com/our-team";
export const TMS_URL = "https://peakinteractivewellness.com/tms";
export const SPRAVATO_URL = "https://peakinteractivewellness.com/spravato-tm";

export const INSURANCE_LOGOS = [
  {
    src: img("/images/insurance/cigna.svg"),
    alt: "Cigna",
    width: 140,
    height: 48,
  },
  {
    src: img("/images/insurance/blue-cross.svg"),
    alt: "Anthem BlueCross",
    width: 150,
    height: 48,
  },
  {
    src: img("/images/insurance/oscar.svg"),
    alt: "Oscar",
    width: 120,
    height: 36,
  },
  {
    src: img("/images/insurance/united.svg"),
    alt: "United Healthcare",
    width: 160,
    height: 44,
  },
  {
    src: img("/images/insurance/aetna.svg"),
    alt: "Aetna",
    width: 120,
    height: 36,
  },
  {
    src: img("/images/insurance/oxford.svg"),
    alt: "Oxford Health Plans",
    width: 150,
    height: 90,
  },
  {
    src: img("/images/insurance/health-first-colorado.svg"),
    alt: "Health First Colorado",
    width: 140,
    height: 90,
  },
] as const;

export const LOCATIONS = [
  {
    name: "Greenwood Village",
    address: "6530 S. Yosemite St., Suite 330, Greenwood Village, CO 80111",
  },
  {
    name: "Denver",
    address: "3455 Ringsby Court, Suite 140, Denver, CO 80216",
  },
] as const;

export const SERVICES = [
  {
    id: "tms",
    title: "TMS Therapy",
    description:
      "FDA-cleared magnetic stimulation that targets mood-regulating brain circuits—without medication side effects circulating through your whole body.",
    href: "#tms",
  },
  {
    id: "spravato",
    title: "Spravato® (Esketamine)",
    description:
      "A supervised nasal-spray treatment for depression that hasn’t responded to traditional antidepressants, delivered in a calm clinical setting.",
    href: "#spravato",
  },
] as const;

export const CONDITIONS = [
  {
    title: "Treatment-resistant depression",
    description:
      "When two or more antidepressants haven’t brought lasting relief, interventional options like TMS and Spravato® may help.",
  },
  {
    title: "Major depressive disorder",
    description:
      "Evidence-based care for depression that goes beyond a one-size-fits-all prescription.",
  },
  {
    title: "Anxiety & generalized anxiety",
    description:
      "Support for persistent worry, restlessness, and the weight of living on high alert.",
  },
  {
    title: "PTSD & trauma",
    description:
      "Compassionate treatment that respects your story and helps rebuild a sense of safety.",
  },
] as const;

export const WHY_ITEMS = [
  "You’re more than a diagnosis—care plans reflect your whole story",
  "Licensed nurse practitioner team with deep clinical expertise",
  "Innovative options for treatment-resistant depression (TMS & Spravato®)",
  "Most commercial insurance plans accepted",
  "In-person at two Colorado locations or virtual telehealth",
  "Over 350 five-star Google reviews from people who felt heard",
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "See if you qualify",
    description:
      "Share a few details about your symptoms and treatment history through our secure form.",
  },
  {
    step: "02",
    title: "Talk with our team",
    description:
      "We’ll review eligibility, insurance coverage, and whether TMS, Spravato®, or another path fits.",
  },
  {
    step: "03",
    title: "Personalized plan",
    description:
      "Your provider builds a compassionate, evidence-based plan around your goals—not just a label.",
  },
  {
    step: "04",
    title: "Care that continues",
    description:
      "In-office or telehealth follow-ups keep your progress on track as needs change.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Clean, comfortable and professional environment. Dr. Cronin is very passionate and caring. So glad I found her practice!",
  },
  {
    quote:
      "Quite possibly the most competent, professional and knowledgeable mental health practitioner I have spoken to in my life.",
  },
  {
    quote:
      "She truly cares about what you are going through, listens intently, and develops a personalized plan to help you feel better & at your best.",
  },
  {
    quote:
      "Working with Joyce Liu has… restored so much faith in medicine for me.",
  },
  {
    quote:
      "Michael is amazing. He listens to you, tries to get your whole story and shows that he sincerely cares.",
  },
  {
    quote:
      "I followed Kate from her previous practice! She is honestly the best mental health provider I have ever had! 1000/10 recommend.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who may qualify for TMS or Spravato®?",
    answer:
      "Both treatments are typically considered for adults with treatment-resistant depression—often after trying two or more antidepressants without lasting relief. A clinical evaluation confirms candidacy, safety considerations, and whether insurance may cover care.",
  },
  {
    question: "Does insurance cover these treatments?",
    answer:
      "Many commercial insurance plans cover standard TMS and Spravato® for qualifying patients. Our team helps verify benefits and prior authorization so you know your options before you begin.",
  },
  {
    question: "What’s the difference between TMS and Spravato®?",
    answer:
      "TMS uses focused magnetic pulses to stimulate underactive mood circuits and requires no sedation—you can typically drive yourself. Spravato® is an esketamine nasal spray given under supervision in-office; you’ll need a driver home afterward. Your provider will help choose what fits you best.",
  },
  {
    question: "Do you offer telehealth?",
    answer:
      "Yes. Peak Interactive Wellness offers in-person care at Greenwood Village and Denver locations, plus virtual visits when appropriate—so care can meet you where you are.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the “Find out if you Qualify” form on this page, or call (719) 569-3802. We’ll walk you through eligibility screening and next steps—no pressure, just a clear path forward.",
  },
] as const;
