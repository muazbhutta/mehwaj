// ============================================================================
// The shape every language dictionary must satisfy.
// lib/i18n/en and lib/i18n/ar both export a `Dictionary`, so a string that
// exists in one language is guaranteed to exist in the other.
// ============================================================================

import type {
  CitySlug,
  JurisdictionCode,
  LegalSlug,
  RoleKey,
  ServiceGroupKey,
} from "../site";

export type Locale = "en" | "ar";

export interface MetaCopy {
  title: string;
  description: string;
}

export interface NavItem {
  /** Path without the locale prefix, for example "/services". */
  href: string;
  label: string;
}

export interface LinkCopy {
  label: string;
  href: string;
}

/** A numbered step in a "how it works" band. */
export interface StepCopy {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCopy {
  title: string;
  /** One sentence under the H1, also used (truncated) on the services index. */
  intro: string;
  whoFor: string;
  steps: string[];
  weNeed: string;
  youGet: string[];
  ctaHeading: string;
  ctaText: string;
  meta: MetaCopy;
}

export interface PostCopy {
  title: string;
  tag: string;
  /** Human readable date, for example "October 2026". */
  date: string;
  /** Machine readable date for JSON-LD and the sitemap. */
  isoDate: string;
  readingTime: string;
  summary: string;
  body: string[];
  meta: MetaCopy;
}

export interface PersonCopy {
  name: string;
  /** Arabic pages print the Latin spelling in a smaller line under the name. */
  latinName?: string;
  role: string;
  /** Shorter role label used on the home page leadership cards. */
  homeRole?: string;
  subLine: string;
  bio: string[];
  tags: string[];
}

export interface CityCopy {
  name: string;
  h1: string;
  intro: string[];
  /** Service chips: a label plus the slug of the service page it links to. */
  chips: { label: string; slug: string }[];
  cardEyebrow: string;
  cardLines: string[];
  meta: MetaCopy;
}

export interface LegalCopy {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  updated: string;
  meta: MetaCopy;
}

export interface FormCopy {
  fullName: string;
  company: string;
  firmCompany: string;
  country: string;
  email: string;
  phone: string;
  service: string;
  iNeed: string;
  message: string;
  notes: string;
  roleNeeded: string;
  numberOfPeople: string;
  workMode: string;
  startDate: string;
  duration: string;
  privacyConsent: string;
  choosePlaceholder: string;
  requiredNote: string;
}

export interface Dictionary {
  locale: Locale;
  dir: "ltr" | "rtl";

  common: {
    firmName: string;
    firmFullName: string;
    charteredAccountants: string;
    tagline: string;
    bookConsultation: string;
    whatsappConsultMessage: string;
    requestProfessional: string;
    ourServices: string;
    secondmentsCta: string;
    viewSecondments: string;
    consultCta: string;
    /** Breadcrumb and title pattern, with a {city} placeholder. */
    cityCrumb: string;
    learnMore: string;
    read: string;
    readFullProfile: string;
    sendRequest: string;
    sendByEmail: string;
    sendViaWhatsApp: string;
    orSendOnWhatsApp: string;
    replyLine: string;
    home: string;
    menu: string;
    close: string;
    skipToContent: string;
    chatOnWhatsApp: string;
    languageSwitchLabel: string;
    otherLanguage: string;
    serviceGroups: Record<ServiceGroupKey, string>;
    /** Label for the final "Other" entry in a country list. */
    countryOther: string;
    countrySearch: string;
    countryCommon: string;
    countryAll: string;
    countryNoMatch: string;
    /** ISO codes pinned to the top of a country list, in reading order. */
    priorityCountryCodes: string[];
    workModes: { onSite: string; remote: string; hybrid: string };
    serviceOptions: string[];
    iNeedOptions: string[];
    form: FormCopy;
    emailSubject: string;
    secondmentEmailSubject: string;
  };

  nav: NavItem[];

  footer: {
    blurb: string;
    firmHeading: string;
    firmLinks: LinkCopy[];
    servicesHeading: string;
    serviceLinks: LinkCopy[];
    secondmentsHeading: string;
    secondmentLinks: LinkCopy[];
    contactHeading: string;
    whatsappLabel: string;
    officeLabel: string;
    ksaLabel: string;
    /** Contains a {year} placeholder replaced at render time. */
    copyright: string;
    legalLinks: LinkCopy[];
    linkedin: string;
  };

  home: {
    meta: MetaCopy;
    hero: {
      eyebrow: string;
      h1: string;
      paragraph: string;
      primaryCta: string;
      secondaryCta: string;
      footnote: string;
      /** Shown inside the brand panel when no office photo is present. */
      panelCaption: string;
      imageAlt: string;
      /** Alt text for the photo used until a real office photo is supplied. */
      imageAltFallback: string;
      /** Arabic hero shows chips instead of a footnote line. */
      chipsLabel?: string;
      chips?: string[];
      phoneCta?: string;
    };
    trustBar: string[];
    audience: {
      pakistan: { eyebrow: string; title: string; text: string; link: string };
      gulf: { eyebrow: string; title: string; text: string; link: string };
    };
    services: { eyebrow: string; title: string; intro: string };
    secondmentBand: {
      eyebrow: string;
      title: string;
      text: string;
      rolesLine: string;
    };
    howWeWork: {
      eyebrow: string;
      title: string;
      intro: string;
      steps: StepCopy[];
      checks: string[];
    };
    leadership: { eyebrow: string; title: string };
    insights: { eyebrow: string; title: string };
    faq: { eyebrow: string; title: string; intro: string; items: FaqItem[] };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      pakistanLabel: string;
      saudiLabel: string;
      emailLabel: string;
      citiesEyebrow: string;
      citiesNote: string;
    };
  };

  servicesIndex: {
    meta: MetaCopy;
    title: string;
    intro: string;
    financeSecondment: { title: string; intro: string };
    closing: { title: string; text: string; cta: string };
    whoFor: string;
    howItWorks: string;
    weNeed: string;
    whatYouGet: string;
  };

  services: Record<string, ServiceCopy>;

  secondments: {
    meta: MetaCopy;
    hero: {
      eyebrow: string;
      h1: string;
      paragraph: string;
      primaryCta: string;
      downloadCta: string;
      cardEyebrow: string;
      cardNote: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      intro: string;
      items: Record<JurisdictionCode, { name: string; text: string }>;
      availability: string;
    };
    roles: {
      eyebrow: string;
      title: string;
      columns: { role: string; work: string; experience: string };
      items: Record<RoleKey, { role: string; work: string; experience: string }>;
    };
    ways: {
      eyebrow: string;
      title: string;
      items: { title: string; text: string }[];
    };
    how: {
      eyebrow: string;
      title: string;
      steps: StepCopy[];
      checks: string[];
    };
    remote: {
      eyebrow: string;
      title: string;
      items: { title: string; text: string; href?: string }[];
    };
    request: {
      eyebrow: string;
      title: string;
      intro: string;
    };
  };

  about: {
    meta: MetaCopy;
    eyebrow: string;
    h1: string;
    intro: string;
    values: string[];
    peopleEyebrow: string;
    peopleTitle: string;
    people: Record<string, PersonCopy>;
    note: string;
  };

  insightsIndex: {
    meta: MetaCopy;
    eyebrow: string;
    title: string;
    intro: string;
    backToInsights: string;
    disclaimer: string;
  };

  posts: Record<string, PostCopy>;

  contact: {
    meta: MetaCopy;
    eyebrow: string;
    title: string;
    intro: string;
    saudiEyebrow: string;
    pakistanEyebrow: string;
    mapTitle: string;
    taxManagerLabel: string;
    whatsappLabel: string;
    officeLabel: string;
    steps: StepCopy[];
    enquiryPrefix: string;
  };

  cities: Record<CitySlug, CityCopy>;

  legal: Record<LegalSlug, LegalCopy>;

  notFound: {
    title: string;
    text: string;
    backHome: string;
  };
}
