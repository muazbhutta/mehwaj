import type { Dictionary } from "../types";

export const servicesIndex: Dictionary["servicesIndex"] = {
  meta: {
    title: "Our Services | M.W. & Co., Chartered Accountants",
    description:
      "Assurance, tax and zakat, advisory, and accounting and outsourcing for businesses in Pakistan and across the GCC, reviewed by a Chartered Accountant.",
  },
  title: "Our Services",
  intro:
    "Assurance, tax and zakat, advisory, and accounting and outsourcing for businesses in Pakistan and the Gulf. Every engagement is planned and reviewed by a Chartered Accountant.",
  financeSecondment: {
    title: "Finance secondment",
    intro:
      "Audit and finance professionals for Gulf firms, on site or remote. See the Secondments page.",
  },
  closing: {
    title: "Tell us what you need",
    text: "Tell us what you are looking for and we will come back with a proposed scope.",
    cta: "Contact us",
  },
  whoFor: "Who it's for",
  howItWorks: "How it works",
  weNeed: "What we need from you",
  whatYouGet: "What you get",
};

export const services: Dictionary["services"] = {
  "external-audit": {
    title: "Statutory audit",
    intro:
      "An independent audit of your annual financial statements under International Standards on Auditing and the Companies Act 2017.",
    whoFor:
      "Private and public companies, subsidiaries of foreign groups, NPOs, and entities that need audited accounts for SECP, banks, investors or donors.",
    steps: [
      "Independence check",
      "Engagement letter",
      "Planning",
      "Fieldwork",
      "Review",
      "Report",
    ],
    weNeed:
      "Trial balance, general ledger, bank statements, fixed asset register, key contracts, prior-year audited accounts.",
    weNeedNote:
      "A detailed document list is agreed with your team at the planning stage, tailored to your business and the scope of the engagement.",
    youGet: [
      "Audit opinion on your financial statements",
      "Management letter with control and reporting recommendations",
      "Agreed timetable from planning to sign-off",
      "Engagement led by a Chartered Accountant",
    ],
    ctaHeading: "Request an audit proposal",
    ctaText:
      "To prepare your proposal, send your last audited financial statements and current trial balance, or management accounts if this is your first audit.",
    meta: {
      title: "Statutory Audit in Pakistan | M.W. & Co.",
      description:
        "Independent audit of your annual financial statements under International Standards on Auditing and the Companies Act 2017, led by a Chartered Accountant.",
    },
  },

  "review-engagements": {
    title: "Review engagements",
    intro:
      "Limited assurance on financial statements or interim information under ISRE 2400 and ISRE 2410. Less extensive, and less costly, than a full audit.",
    whoFor:
      "Companies not required to have an audit, groups needing a review of half-year figures, and businesses whose lenders or parent company ask for reviewed accounts.",
    steps: [
      "Independence check",
      "Engagement letter",
      "Enquiry",
      "Analytical review",
      "Report",
    ],
    weNeed:
      "We agree the information required with your team at the planning stage, tailored to the period under review and the intended users of the report. Typically this includes draft financial statements, the trial balance, prior-period comparatives and management's explanations for significant movements.",
    youGet: [
      "Review report with a limited-assurance conclusion",
      "Analytical review of significant movements",
      "Points for management on reporting quality",
      "Agreed timetable",
    ],
    ctaHeading: "Request a review proposal",
    ctaText:
      "Share your latest financial statements or interim accounts, the period to be reviewed and the intended users of the report. We will prepare a proposal tailored to your requirements.",
    meta: {
      title: "Review Engagements | M.W. & Co.",
      description:
        "Limited assurance on financial statements or interim information under ISRE 2400 and ISRE 2410, for companies that do not need a full audit.",
    },
  },

  "agreed-upon-procedures": {
    title: "Agreed-upon procedures & certifications",
    intro:
      "Specific procedures agreed with you and the report user, with factual findings reported under ISRS 4400 (Revised).",
    whoFor:
      "Banks, ministries, donors, franchisors and parent companies that need verified figures, for example turnover, project costs, receivables or the use of funds.",
    steps: [
      "Agree procedures",
      "Engagement letter",
      "Perform procedures",
      "Report findings",
    ],
    weNeed:
      "The requirements or reporting template set by the bank, donor, regulator or other party relying on the report. The procedures are then agreed in writing with management in the engagement letter, and once they are agreed we request the specific records needed to perform them.",
    youGet: [
      "Report of factual findings",
      "Procedures agreed in writing before work starts",
      "Certifications of turnover, costs or balances",
      "Fast turnaround for one-off requests",
    ],
    ctaHeading: "Request an AUP proposal",
    ctaText:
      "Share the requirements or reporting template issued by your bank, donor or regulator. We will propose the procedures, scope and fee for agreement with your management.",
    meta: {
      title: "Agreed-Upon Procedures & Certifications | M.W. & Co.",
      description:
        "Procedures agreed with you and the report user, with factual findings reported under ISRS 4400 (Revised), plus turnover and balance certifications.",
    },
  },

  "income-tax": {
    title: "Income tax",
    intro:
      "Corporate and individual income tax returns prepared from your books, reviewed by a Chartered Accountant and filed on time with FBR.",
    whoFor:
      "Companies, AOPs, salaried individuals, business owners and overseas Pakistanis with income in Pakistan.",
    steps: ["Collect records", "Compute", "CA review", "File on IRIS", "Confirm"],
    weNeed:
      "Bank statements, salary or business income records, withholding certificates, asset and liability details, prior-year return.",
    youGet: [
      "Annual income tax return and wealth statement",
      "Advance tax computations",
      "Withholding agent compliance",
      "A tax calendar with every due date",
    ],
    ctaHeading: "Get your return filed",
    ctaText:
      "Send last year's return and we'll quote a fixed fee.",
    meta: {
      title: "Income Tax Return Filing in Pakistan | M.W. & Co.",
      description:
        "Corporate and individual income tax returns prepared from your books, reviewed by a Chartered Accountant and filed on time with FBR.",
    },
  },

  "sales-tax": {
    title: "Sales tax & withholding",
    intro:
      "Monthly sales tax and withholding compliance with FBR and the provincial authorities: PRA, SRB, KPRA and BRA.",
    whoFor:
      "Registered manufacturers, distributors, retailers and service providers, and companies acting as withholding agents.",
    steps: ["Monthly data", "Reconcile", "CA review", "File", "Report to you"],
    weNeed:
      "Sales and purchase registers, invoices, import documents and payment details for withholding.",
    youGet: [
      "Monthly sales tax returns",
      "Input and output tax reconciliations",
      "Withholding statements",
      "Registration and de-registration support",
    ],
    ctaHeading: "Set up monthly compliance",
    ctaText:
      "Tell us your registrations and monthly volume.",
    meta: {
      title: "Sales Tax & Withholding Compliance | M.W. & Co.",
      description:
        "Monthly sales tax and withholding compliance with FBR and the provincial authorities in Pakistan: PRA, SRB, KPRA and BRA.",
    },
  },

  "tax-notices": {
    title: "Notices, audits & appeals",
    intro:
      "Replies to tax notices, representation during tax audits, and appeals before the appellate forums in Pakistan.",
    whoFor:
      "Companies and individuals who have received a notice, an audit selection or an assessment order from FBR or a provincial authority.",
    steps: [
      "Review notice",
      "Gather evidence",
      "Draft reply",
      "Hearing",
      "Appeal if needed",
    ],
    weNeed:
      "The notice or order, the related return, and the records it refers to.",
    youGet: [
      "Assessment of the notice and your exposure",
      "Drafted reply with supporting documents",
      "Representation at hearings",
      "Appeal filed where justified",
    ],
    ctaHeading: "Send us your notice",
    ctaText:
      "We'll review it and reply with next steps and a fee.",
    meta: {
      title: "Tax Notices, Audits & Appeals | M.W. & Co.",
      description:
        "Replies to tax notices, representation during tax audits, and appeals before the appellate forums in Pakistan, handled by Chartered Accountants.",
    },
  },

  "zakat-vat-saudi": {
    title: "Zakat & VAT (Saudi Arabia)",
    intro:
      "Zakat base computations, VAT returns and reconciliations for companies in the Kingdom, prepared remotely and delivered with a SOCPA-licensed firm where a licensed signatory is required.",
    whoFor:
      "Saudi companies and branches of foreign groups that need support with ZATCA zakat, income tax, withholding tax and VAT.",
    steps: [
      "Collect data",
      "Compute",
      "Professional review",
      "Submit",
      "Follow up",
    ],
    weNeed:
      "Trial balance, VAT sales and purchase listings, prior returns and financial statements.",
    youGet: [
      "Zakat base computation",
      "Monthly or quarterly VAT returns",
      "VAT and ledger reconciliations",
      "Support with ZATCA queries",
    ],
    ctaHeading: "Request zakat & VAT support",
    ctaText:
      "Tell us your filing frequency and year-end.",
    meta: {
      title: "Zakat & VAT in Saudi Arabia | M.W. & Co.",
      description:
        "Zakat base computations, VAT returns and reconciliations for companies in the Kingdom, delivered with a SOCPA-licensed firm where required.",
    },
  },

  "internal-audit": {
    title: "Internal audit & controls",
    intro:
      "Risk-based internal audits and control reviews that show management where processes are weak and how to fix them.",
    whoFor:
      "Companies with no internal audit function, boards and audit committees wanting independent assurance, and businesses preparing for growth or investment.",
    steps: ["Risk assessment", "Audit plan", "Fieldwork", "Report", "Follow-up"],
    weNeed:
      "Organisation chart, policies, process owners' time and access to transaction data.",
    youGet: [
      "Risk assessment and annual audit plan",
      "Internal audit reports ranked by priority",
      "Process and control documentation",
      "Follow-up on agreed actions",
    ],
    ctaHeading: "Request an internal audit proposal",
    ctaText:
      "Tell us your key processes and concerns.",
    meta: {
      title: "Internal Audit & Controls | M.W. & Co.",
      description:
        "Risk-based internal audits and control reviews that show management where processes are weak and how to fix them.",
    },
  },

  "ifrs-advisory": {
    title: "IFRS advisory & IFRS 18",
    intro:
      "Practical help applying IFRS, including the move from IAS 1 to IFRS 18, effective for periods beginning on or after 1 January 2027.",
    whoFor:
      "Listed and unlisted companies reporting under IFRS, finance teams facing a new standard, and companies converting to IFRS.",
    steps: [
      "Diagnose",
      "Impact assessment",
      "Mapping",
      "Restatement",
      "Handover",
    ],
    weNeed:
      "Latest financial statements, chart of accounts and management reporting packs.",
    youGet: [
      "IFRS 18 impact assessment and P&L mapping",
      "Restated comparatives",
      "Technical accounting memos",
      "Disclosure checklists",
    ],
    ctaHeading: "Book an IFRS 18 review",
    ctaText:
      "Send your latest annual report for an initial view.",
    meta: {
      title: "IFRS Advisory & IFRS 18 Support | M.W. & Co.",
      description:
        "Practical help applying IFRS, including the move from IAS 1 to IFRS 18, effective for periods beginning on or after 1 January 2027.",
    },
  },

  "financial-modelling": {
    title: "Financial modelling & FP&A",
    intro:
      "Budgets, forecasts, feasibility studies and financial models built by people who have run FP&A inside large companies.",
    whoFor:
      "Founders raising finance, companies planning a new project, and finance teams that need a budgeting or forecasting process.",
    steps: [
      "Understand the question",
      "Gather data",
      "Build model",
      "Test",
      "Present",
    ],
    weNeed:
      "Historical financials, key assumptions, and the decision the model must support.",
    youGet: [
      "Three-statement financial model",
      "Budget and rolling forecast",
      "Feasibility study for lenders or investors",
      "Profitability and pricing analysis",
    ],
    ctaHeading: "Discuss your model",
    ctaText:
      "Tell us what decision the numbers need to support.",
    meta: {
      title: "Financial Modelling & FP&A | M.W. & Co.",
      description:
        "Budgets, forecasts, feasibility studies and financial models built by people who have run FP&A inside large companies.",
    },
  },

  "business-valuation": {
    title: "Business valuation",
    intro:
      "Valuations of businesses and shares for transactions, restructuring, shareholder matters and financial reporting.",
    whoFor:
      "Shareholders buying or selling, companies issuing shares, and businesses that need a value for reporting or a dispute.",
    steps: ["Agree purpose", "Collect data", "Analyse", "Value", "Report"],
    weNeed:
      "Financial statements, forecasts, details of the shares or business, and the purpose of the valuation.",
    youGet: [
      "Valuation report",
      "Method chosen to suit the purpose",
      "Clear explanation of key assumptions",
      "Sensitivity analysis",
    ],
    ctaHeading: "Request a valuation proposal",
    ctaText:
      "Tell us the purpose and the valuation date.",
    meta: {
      title: "Business Valuation in Pakistan | M.W. & Co.",
      description:
        "Valuations of businesses and shares for transactions, restructuring, shareholder matters and financial reporting.",
    },
  },

  "secp-compliance": {
    title: "SECP corporate compliance",
    intro:
      "Company incorporation and ongoing SECP filings, so your statutory obligations stay current.",
    whoFor:
      "New businesses incorporating in Pakistan, foreign companies opening a subsidiary, and private companies that need annual filings done.",
    steps: [
      "Collect details",
      "Prepare forms",
      "File on eServices",
      "Confirm",
    ],
    weNeed:
      "Directors' and shareholders' details, CNIC or passport copies, and the proposed company name.",
    youGet: [
      "Company incorporation",
      "Annual return and statutory forms",
      "Changes in directors, shares or address",
      "A corporate compliance calendar",
    ],
    ctaHeading: "Register or update your company",
    ctaText:
      "Tell us what you need filed.",
    meta: {
      title: "SECP Corporate Compliance | M.W. & Co.",
      description:
        "Company incorporation and ongoing SECP filings in Pakistan, so your statutory obligations stay current all year.",
    },
  },

  bookkeeping: {
    title: "Bookkeeping & management accounts",
    intro:
      "Monthly bookkeeping, reconciliations and management accounts so you always know where the business stands.",
    whoFor:
      "SMEs without a full finance team, Gulf companies wanting a remote team, and owners who want reliable monthly numbers.",
    steps: [
      "Onboard",
      "Monthly documents",
      "Record & reconcile",
      "CA review",
      "Monthly pack",
    ],
    weNeed:
      "Access to your accounting software (or we set one up), bank statements and source documents each month.",
    youGet: [
      "Monthly bookkeeping in your system",
      "Bank and ledger reconciliations",
      "Monthly management pack",
      "Year-end file ready for audit",
    ],
    ctaHeading: "Get a monthly quote",
    ctaText:
      "Tell us your monthly transaction volume.",
    meta: {
      title: "Bookkeeping & Management Accounts | M.W. & Co.",
      description:
        "Monthly bookkeeping, reconciliations and management accounts so you always know where the business stands.",
    },
  },

  "financial-statements": {
    title: "Financial statements & CFO support",
    intro:
      "IFRS-compliant annual financial statements and part-time CFO support for companies without a senior finance lead.",
    whoFor:
      "Companies preparing for audit, groups with subsidiaries to report, and growing businesses that need senior finance input a few days a month.",
    steps: [
      "Year-end data",
      "Draft statements",
      "CA review",
      "Audit support",
      "Final",
    ],
    weNeed:
      "Year-end trial balance, ledgers, fixed asset register and prior-year statements.",
    youGet: [
      "Annual financial statements with notes",
      "Audit-ready schedules",
      "Board and lender reporting",
      "Part-time CFO days each month",
    ],
    ctaHeading: "Request a proposal",
    ctaText:
      "Send your year-end date and latest trial balance.",
    meta: {
      title: "Financial Statements & CFO Support | M.W. & Co.",
      description:
        "IFRS-compliant annual financial statements and part-time CFO support for companies without a senior finance lead.",
    },
  },
};
