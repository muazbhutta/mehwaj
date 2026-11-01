import type { Dictionary } from "../types";

export const contact: Dictionary["contact"] = {
  meta: {
    title: "Contact M.W. & Co., Chartered Accountants",
    description:
      "Contact M.W. & Co. in Multan, Pakistan, or our client contact in Riyadh. Send a short description of what you need and we'll reply within one working day.",
  },
  eyebrow: "Contact",
  title: "Contact us",
  intro:
    "Send a short description of what you need. We'll reply within one working day.",
  saudiEyebrow: "Saudi Arabia · Client contact, Riyadh",
  pakistanEyebrow: "Pakistan · Head office, Multan",
  mapTitle: "Map of Royal Orchard, Multan, where M.W. & Co. has its office",
  taxManagerLabel: "Tax Manager",
  whatsappLabel: "WhatsApp",
  officeLabel: "Office",
  steps: [
    { title: "Share your need", text: "Email, WhatsApp or the form." },
    { title: "Discovery call", text: "A short call to understand the scope." },
    { title: "Proposal", text: "Scope, team, timeline and fee in writing." },
  ],
  enquiryPrefix: "Enquiry about:",
};

export const cities: Dictionary["cities"] = {
  multan: {
    name: "Multan",
    h1: "Chartered Accountant services for Multan businesses",
    intro: [
      "M.W. & Co. is based in Multan. Our office in Royal Orchard serves businesses across Multan and South Punjab in person.",
      "For Multan businesses we handle federal tax with FBR and provincial sales tax on services with the Punjab Revenue Authority, alongside statutory audit, SECP compliance and bookkeeping.",
    ],
    chips: [
      { label: "Statutory audit", slug: "external-audit" },
      { label: "Income tax", slug: "income-tax" },
      { label: "Sales tax (PRA)", slug: "sales-tax" },
      { label: "SECP compliance", slug: "secp-compliance" },
      { label: "Bookkeeping", slug: "bookkeeping" },
      { label: "Internal audit", slug: "internal-audit" },
    ],
    cardEyebrow: "Our head office",
    cardLines: [
      "House 3, Street 3, Block G, Royal Orchard, Multan",
      "In person, with remote service where it suits you",
    ],
    meta: {
      title: "Chartered Accountant in Multan | M.W. & Co.",
      description:
        "Audit, income and sales tax, SECP compliance and bookkeeping for Multan businesses, from our head office in Royal Orchard, Multan.",
    },
  },

  lahore: {
    name: "Lahore",
    h1: "Chartered Accountant services for Lahore businesses",
    intro: [
      "M.W. & Co. serves Lahore clients from our Multan office, working remotely through secure document exchange and visiting on site when an engagement needs it.",
      "For Lahore businesses we handle federal tax with FBR and provincial sales tax on services with the Punjab Revenue Authority, alongside statutory audit, SECP compliance and bookkeeping.",
    ],
    chips: [
      { label: "Statutory audit", slug: "external-audit" },
      { label: "Income tax", slug: "income-tax" },
      { label: "Sales tax (PRA)", slug: "sales-tax" },
      { label: "SECP compliance", slug: "secp-compliance" },
      { label: "Bookkeeping", slug: "bookkeeping" },
      { label: "IFRS advisory", slug: "ifrs-advisory" },
    ],
    cardEyebrow: "Serving Lahore from Multan",
    cardLines: [
      "Head office: Royal Orchard, Multan",
      "Remote and on-site service",
    ],
    meta: {
      title: "Chartered Accountant in Lahore | M.W. & Co.",
      description:
        "Statutory audit, income tax, Punjab sales tax, SECP compliance and bookkeeping for Lahore businesses, served remotely and on site from Multan.",
    },
  },

  karachi: {
    name: "Karachi",
    h1: "Chartered Accountant services for Karachi businesses",
    intro: [
      "M.W. & Co. serves Karachi clients from our Multan office, working remotely through secure document exchange and visiting on site when an engagement needs it.",
      "For Karachi businesses we handle federal tax with FBR and provincial sales tax on services with the Sindh Revenue Board, alongside statutory audit, SECP compliance and bookkeeping.",
    ],
    chips: [
      { label: "Statutory audit", slug: "external-audit" },
      { label: "Income tax", slug: "income-tax" },
      { label: "Sales tax (SRB)", slug: "sales-tax" },
      { label: "SECP compliance", slug: "secp-compliance" },
      { label: "Bookkeeping", slug: "bookkeeping" },
      { label: "Business valuation", slug: "business-valuation" },
    ],
    cardEyebrow: "Serving Karachi from Multan",
    cardLines: [
      "Head office: Royal Orchard, Multan",
      "Remote and on-site service",
    ],
    meta: {
      title: "Chartered Accountant in Karachi | M.W. & Co.",
      description:
        "Statutory audit, income tax, Sindh sales tax, SECP compliance and bookkeeping for Karachi businesses, served remotely and on site from Multan.",
    },
  },

  islamabad: {
    name: "Islamabad",
    h1: "Chartered Accountant services for Islamabad businesses",
    intro: [
      "M.W. & Co. serves Islamabad clients from our Multan office, working remotely through secure document exchange and visiting on site when an engagement needs it.",
      "For Islamabad businesses we handle federal tax with FBR, including sales tax on services in the Islamabad Capital Territory, alongside statutory audit, SECP compliance and bookkeeping.",
    ],
    chips: [
      { label: "Statutory audit", slug: "external-audit" },
      { label: "Income tax", slug: "income-tax" },
      { label: "Sales tax (ICT)", slug: "sales-tax" },
      { label: "SECP compliance", slug: "secp-compliance" },
      { label: "Bookkeeping", slug: "bookkeeping" },
      { label: "IFRS advisory", slug: "ifrs-advisory" },
    ],
    cardEyebrow: "Serving Islamabad from Multan",
    cardLines: [
      "Head office: Royal Orchard, Multan",
      "Remote and on-site service",
    ],
    meta: {
      title: "Chartered Accountant in Islamabad | M.W. & Co.",
      description:
        "Statutory audit, income tax, ICT sales tax on services, SECP compliance and bookkeeping for Islamabad businesses, served remotely and on site.",
    },
  },
};
