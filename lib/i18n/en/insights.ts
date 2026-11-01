import type { Dictionary } from "../types";

export const insightsIndex: Dictionary["insightsIndex"] = {
  meta: {
    title: "Insights | M.W. & Co., Chartered Accountants",
    description:
      "Short, practical updates on reporting standards, tax and compliance for businesses in Pakistan and the Gulf, written by Chartered Accountants.",
  },
  eyebrow: "Insights",
  title: "Practical updates for finance teams",
  intro:
    "Short, practical updates on reporting standards, tax and compliance for businesses in Pakistan and the Gulf.",
  backToInsights: "Back to insights",
  disclaimer:
    "This article is general information, not advice. Contact us to discuss your situation.",
};

export const posts: Dictionary["posts"] = {
  // TODO: Syed Muhammad Wajahat to review before publishing
  "ifrs-18-replaces-ias-1-pakistan": {
    title:
      "IFRS 18 replaces IAS 1: what Pakistani companies must restate, and when",
    tag: "IFRS alert",
    date: "October 2026",
    isoDate: "2026-10-08",
    readingTime: "4 min read",
    summary: "Comparatives for June and December year-ends are running now.",
    body: [
      "IFRS 18, Presentation and Disclosure in Financial Statements, replaces IAS 1. The IASB issued it in April 2024 and it applies to annual reporting periods beginning on or after 1 January 2027, with earlier application permitted. In Pakistan a standard takes effect for a class of company once it is notified by the Securities and Exchange Commission of Pakistan, so the first affected year end here depends on that notification. Companies reporting under IFRS as issued by the IASB, including subsidiaries that report into foreign parents, should plan around the 2027 date.",
      "**What stays the same.** IFRS 18 is a presentation standard. It does not change how you measure assets, liabilities, income or expenses. Recognition and measurement stay with the standards you already apply, and much of IAS 1 is carried forward into IFRS 18 with little or no change. The statement of financial position, the statement of changes in equity and the requirements for a complete set of financial statements remain familiar.",
      "**Three changes that matter.** First, the statement of profit or loss gains a defined structure. Income and expenses are classified into operating, investing and financing categories, and two subtotals become mandatory: operating profit, and profit before financing and income taxes. Operating profit is presented by convention today, and companies define it differently, which makes comparison between them hard. Under IFRS 18 the subtotal is defined for everyone.",
      "Second, management-defined performance measures move inside the financial statements. A subtotal of income and expenses that a company uses in public communications to convey management's view of performance must be disclosed in a single note, reconciled to the most directly comparable subtotal required by IFRS, with an explanation of how it is calculated and why management considers it useful. Measures that used to appear only in the directors' report or an investor deck may now need that note.",
      "Third, IFRS 18 sets out principles for aggregation and disaggregation. Items are grouped when they share characteristics and separated when they do not, labels have to be meaningful, and a line simply described as other needs more explanation than it usually gets today. In practice this is the change that most often forces a rebuild of how the trial balance maps to the face of the statements.",
      "**What has to be restated.** IFRS 18 is applied retrospectively. The comparative period in your first IFRS 18 financial statements has to be presented on the new basis, and the standard requires a reconciliation showing, for each line item in the restated comparative statement of profit or loss, the amounts previously reported under IAS 1. For a company with a 31 December 2027 year end, the comparative year is 2026, which is running now. For a 30 June year end, the comparative year also begins in 2026.",
      "That is the practical point for finance teams. The entries you are posting this year are the comparatives you will have to re-present. Capturing enough analysis now, in the ledger rather than in a spreadsheet afterwards, costs far less than reconstructing it once the year has closed and the people who made the entries have moved on.",
      "**What to do in the next few months.** Map your current income statement lines to the three new categories and note where the mapping is ambiguous, particularly for the share of profit of associates, foreign exchange differences, and groups whose main business activity is investing or financing. List every performance measure the company publishes and decide which ones meet the definition. Break out the balances sitting in other income and other expenses. Then speak to your auditor early, because the restated comparatives and the reconciliation are audited.",
      "Related amendments to IAS 7 change the starting point of the indirect cash flow statement to operating profit and remove some classification choices for interest and dividends, so the cash flow statement is affected as well.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "IFRS 18 Replaces IAS 1: What Pakistani Companies Restate",
      description:
        "IFRS 18 applies to periods beginning on or after 1 January 2027 and is applied retrospectively, so the comparative year running now has to be restated.",
    },
  },

  // TODO: Syed Muhammad Wajahat to review before publishing
  "outsourcing-month-end-close-gulf": {
    title:
      "Outsourcing month-end close: what Gulf finance teams should agree in writing",
    tag: "Gulf",
    date: "October 2026",
    isoDate: "2026-10-15",
    readingTime: "4 min read",
    summary: "Scope, access, turnaround and review points.",
    body: [
      "Outsourcing the month-end close is common across the Gulf, and the engagements that work are rarely the ones with the lowest fee. They are the ones where both sides wrote down what close means before the first month started. Below are the points worth settling in the engagement letter or the service schedule.",
      "**Scope, line by line.** Close means different things in different companies. Write out which tasks belong to the provider and which stay in house: posting purchases and sales, bank and cash reconciliations, payroll journals, accruals and prepayments, fixed asset additions and depreciation, intercompany balances, revenue cut-off, inventory movements, and the management pack itself. Anything not on the list is assumed to stay with you, which avoids the most common argument in month three.",
      "**The calendar.** Agree a close calendar with dates, not durations. A typical arrangement sets a date by which you provide bank statements and source documents, a date by which the provider delivers a draft trial balance, a window for your review, and a date for the final pack. Durations expressed as working days drift; dates do not. Decide in advance what happens when documents arrive late, because that is when a timetable actually gets tested.",
      "**Access and systems.** Decide whose accounting system is used, who holds the administrator rights, and which users the provider needs. Keep ownership of your own ledger: a provider working inside your system leaves the data with you if the relationship ends. Agree how documents move, ideally through one shared folder or a document portal rather than email threads, and agree that the provider stores nothing outside it.",
      "**Review and sign-off.** Name the person on your side who reviews and approves the pack, and name the reviewer on the provider's side. A close that is reviewed only by the person who prepared it is not reviewed. Ask for the review to be evidenced, and ask that a qualified accountant signs off before the pack reaches you. Agree what is in the pack: trial balance, profit and loss with comparatives, balance sheet, cash position, aged receivables and payables, and a short commentary on significant movements.",
      "**Reconciliation standard.** Agree which accounts are reconciled every month and what evidence supports them. Bank, intercompany, VAT control, payroll liabilities and major receivable and payable control accounts are the usual list. Agree a threshold for unreconciled differences and the rule for escalating anything above it.",
      "**Year end and audit.** State that the file is to be kept audit ready, with supporting schedules for each material balance, and agree who prepares the audit schedules and who answers the auditor's questions. Many disputes at year end come from an assumption that audit support was included when the fee was quoted for monthly bookkeeping only.",
      "**Confidentiality, data and people.** Put a confidentiality agreement in place that covers the provider's staff, not just the firm. Agree where data is processed and stored and confirm it meets the requirements that apply to you. Ask for continuity: a named lead, a named backup, and notice before the team changes.",
      "**Fees and exit.** Fix the monthly fee against the agreed scope and set out how out-of-scope work is priced, so one busy month does not turn into an invoice you did not expect. Agree a notice period and an exit plan: the provider returns the ledger, the working files and the reconciliations in a usable format.",
      "None of this is complicated, but it is much easier to agree before the engagement starts than during a year-end audit. A short schedule covering these points usually pays for itself in the first quarter.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "Outsourcing Month-End Close: What to Agree in Writing",
      description:
        "Scope, close calendar, system access, review and sign-off, reconciliation standards and exit terms to settle before a Gulf outsourcing engagement starts.",
    },
  },

  // TODO: Syed Muhammad Wajahat to review before publishing
  "private-limited-company-compliance-calendar-pakistan": {
    title: "Private limited company compliance calendar for Pakistan",
    tag: "Compliance",
    date: "October 2026",
    isoDate: "2026-10-22",
    readingTime: "4 min read",
    summary: "Every SECP and FBR deadline for a typical private company.",
    body: [
      "A private limited company in Pakistan answers to two regulators for most of its routine filings: the Securities and Exchange Commission of Pakistan for corporate matters, and the Federal Board of Revenue, together with the relevant provincial revenue authority, for tax. The obligations below are the ones a typical trading or services company meets every year. Exact dates change, and several depend on your financial year end, so confirm each one against the current rules before you rely on it.",
      "**Through the year, every month.** If the company is registered for sales tax, a monthly sales tax return is filed with FBR or with the provincial authority that covers services in your province: the Punjab Revenue Authority, the Sindh Revenue Board, the Khyber Pakhtunkhwa Revenue Authority or the Balochistan Revenue Authority. Companies acting as withholding agents deduct tax at source on payments, deposit it, and file the periodic withholding statements that apply to them. Payroll deductions follow the same monthly rhythm.",
      "**At the year end.** Keep proper books of account and prepare annual financial statements. Unless the company falls within an exemption, those statements are audited by a practising Chartered Accountant. The audited accounts are approved by the directors and then laid before the members.",
      "**After the year end, with SECP.** Hold the annual general meeting within the period the Companies Act 2017 allows, lay the audited financial statements before it, and file the annual return reflecting the company's position as at the date of the meeting. Separately, any change during the year in directors, officers, registered office, share capital or shareholding has its own event-based filing, each with its own short deadline measured from the date of the change rather than from the year end. These event filings are where most penalties arise, because they are easy to forget.",
      "**After the year end, with FBR.** File the annual income tax return with the supporting accounts through the IRIS portal. Companies also pay advance tax in instalments during the year, computed on the prescribed basis, and reconcile it against the final liability in the return. Filing on time is what keeps the company on the Active Taxpayer List, which matters because non-filers face higher withholding rates on banking, property and vehicle transactions.",
      "**Registrations to keep current.** The national tax number, sales tax registration where applicable, provincial service tax registrations, and any sector licences should be reviewed once a year. Addresses and authorised representatives on each portal need to match the company's actual position, because notices are served electronically and a notice sent to an old address still counts as served.",
      "**A practical way to run it.** Build one calendar that holds all of it: monthly sales tax and withholding, quarterly advance tax, the audit timetable, the AGM, the annual return and the income tax return, plus a standing reminder to check the event-based SECP filings each quarter. Assign each item to a named person, with a second name as backup. Keep the acknowledgement for every filing in one folder, organised by year, because the acknowledgement is what you produce when a query arrives two years later.",
      "**Where companies usually slip.** The three most common gaps we see are event-based SECP filings made late, withholding statements that do not reconcile to the ledger, and an AGM held after the allowed period. All three are avoidable with a calendar and a reconciliation routine, and all three are cheaper to prevent than to regularise afterwards.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "Private Limited Company Compliance Calendar for Pakistan",
      description:
        "The SECP and FBR filings a typical private limited company in Pakistan makes each month and each year, and where companies usually slip.",
    },
  },

  // TODO: Syed Muhammad Wajahat to review before publishing
  "zakat-vat-returns-saudi-arabia-calendar": {
    title: "Zakat and VAT returns in Saudi Arabia: a filing calendar overview",
    tag: "KSA tax",
    date: "October 2026",
    isoDate: "2026-10-29",
    readingTime: "4 min read",
    summary: "Key dates and the documents behind each return.",
    body: [
      "Companies in the Kingdom deal with one authority for most of their filings: the Zakat, Tax and Customs Authority, ZATCA. The returns a typical company files are zakat or corporate income tax annually, value added tax monthly or quarterly, and withholding tax on payments to non-residents. The outline below describes the cycle and the records behind each return. Filing frequencies and dates are set by ZATCA and are reviewed from time to time, so confirm the current position before relying on any date.",
      "**Zakat or income tax, once a year.** A Saudi or GCC owned company is generally subject to zakat; a company with non-GCC ownership is generally subject to income tax, and a mixed company apportions between the two. The return is filed after the financial year end, within the period ZATCA prescribes, together with audited financial statements. ZATCA issues an assessment, and a certificate is released once the position is settled. Many customers, government bodies and banks ask for that certificate before they will pay or renew a contract, which is the practical reason to file early rather than at the deadline.",
      "**The zakat base.** The computation is not simply profit. It starts from capital and reserves and adjusts for long-term financing, provisions and the deductible value of long-term assets, with the result compared against adjusted net profit. The inputs come from the audited balance sheet, the fixed asset register, loan agreements and the movement in provisions. Keeping those schedules through the year, rather than rebuilding them in the week before filing, is the single biggest saving on a zakat engagement.",
      "**VAT, monthly or quarterly.** A registered business whose annual taxable supplies exceed the threshold ZATCA publishes files monthly; businesses below it file quarterly. Each return reports output tax on sales, input tax on purchases and imports, adjustments, and the net payable or refundable. Payment is due with the return, and a return filed on time but paid late still attracts a penalty.",
      "**The documents behind a VAT return.** You need a sales listing that ties to revenue in the ledger, a purchase listing with valid tax invoices, import documents showing the tax paid at customs, credit and debit notes, and a schedule of any exempt or zero-rated supplies with the evidence supporting the treatment. Electronic invoicing requirements apply to invoices issued in the Kingdom, so the invoices themselves have to meet the prescribed format and integration rules.",
      "**The reconciliation that prevents queries.** Each quarter, reconcile output tax in the returns to revenue in the ledger, and input tax in the returns to the purchase and import accounts. Explain the differences: zero-rated exports, exempt supplies, non-deductible input tax, and timing. A clean reconciliation, kept with the return, answers most of the questions ZATCA asks later and takes far less time than reconstructing the position during a review.",
      "**Withholding tax.** Payments to non-residents for services, royalties, interest, dividends and similar amounts carry withholding at prescribed rates that depend on the type of payment and any applicable treaty. The tax is deducted, paid over and reported on the prescribed cycle, and the supporting evidence for a treaty rate should be on file before the payment is made rather than after.",
      "**Running the year.** Build a single calendar with the VAT periods, the withholding cycle, the audit timetable and the annual zakat or income tax return, and keep one folder per period holding the return, the payment confirmation and the reconciliation. Where a filing needs a licensed signatory in the Kingdom, agree who signs well before the deadline.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "Zakat and VAT Returns in Saudi Arabia: Filing Calendar",
      description:
        "The annual zakat or income tax return, monthly or quarterly VAT returns and withholding tax cycle in the Kingdom, and the records behind each one.",
    },
  },

  "how-to-file-income-tax-return-pakistan-2026": {
    title: "How to file your income tax return in Pakistan",
    tag: "Tax",
    date: "June 2026",
    isoDate: "2026-06-15",
    readingTime: "6 min read",
    summary:
      "From NTN registration to submitting through IRIS and staying on the Active Taxpayer List.",
    body: [
      "Filing your income tax return in Pakistan is an annual obligation for most earners. Staying compliant also keeps you on the Active Taxpayer List, which lowers the withholding tax you pay on banking, property and vehicle transactions.",
      "**Step 1. Register for an NTN.** Before you can file you need a National Tax Number. Registration is done online through the FBR IRIS portal using your CNIC, and it usually takes a short time to complete.",
      "**Step 2. Gather your documents.** Collect your salary certificate or business income records, bank statements, details of assets and liabilities, and any tax already deducted at source during the year.",
      "**Step 3. Declare income and wealth.** In IRIS you complete the income tax return and the wealth statement, reconciling the change in your net assets with your declared income for the tax year.",
      "**Step 4. File before the deadline.** Submitting on time is what places you on the Active Taxpayer List. Late filers can still appear on the list, but usually pay a surcharge first.",
      "If any of this feels daunting, M.W. & Co. files returns for salaried individuals, business owners and companies every year. Send us last year's return and we will quote a fixed fee.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "How to File Your Income Tax Return in Pakistan",
      description:
        "A step by step guide to filing your income tax return with FBR, from NTN registration to submitting through IRIS and staying on the Active Taxpayer List.",
    },
  },

  "external-vs-internal-audit-difference": {
    title: "External and internal audit: what is the difference?",
    tag: "Assurance",
    date: "May 2026",
    isoDate: "2026-05-02",
    readingTime: "5 min read",
    summary:
      "Both protect your business, but they answer to different audiences.",
    body: [
      "The word audit means different things depending on who the work is for. The two most common are external audit and internal audit, and understanding the difference helps you buy the right assurance.",
      "An external audit is an independent examination of your financial statements. Its purpose is to give an opinion, to outside stakeholders such as shareholders, banks and regulators, on whether those statements present a true and fair view. It is often a statutory requirement.",
      "An internal audit is carried out for management. It is an ongoing, risk-based review of your internal controls, processes and governance, designed to reduce risk, deter fraud and improve how the business runs.",
      "In short: an external audit looks backward and outward to give assurance to others; an internal audit looks forward and inward to help you run a tighter operation. Many growing companies benefit from both.",
      "M.W. & Co. provides independent external audits and risk-based internal audits, but not to the same client where that would affect our independence. Get in touch to discuss which is right for your organisation.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "External and Internal Audit: What Is the Difference?",
      description:
        "An external audit gives an opinion to shareholders, lenders and regulators. An internal audit reviews risks and controls for management.",
    },
  },

  "what-is-ifrs-and-why-your-business-needs-it": {
    title: "What IFRS is, and why your business needs it",
    tag: "Advisory",
    date: "March 2026",
    isoDate: "2026-03-20",
    readingTime: "5 min read",
    summary:
      "International Financial Reporting Standards make your accounts credible and comparable worldwide.",
    body: [
      "International Financial Reporting Standards, IFRS, form the globally recognised framework for preparing and presenting financial statements. The standards set out how transactions and events are recognised, measured and disclosed.",
      "Why does it matter? Because IFRS makes your financial statements comparable across companies and borders, and credible to investors, lenders and regulators. If you plan to raise capital, attract foreign investment or work with international partners, accounts prepared under IFRS are usually expected.",
      "Adopting IFRS for the first time, or applying it to complex areas such as revenue, leases or financial instruments, is technically demanding. Getting it wrong distorts your reported results and is expensive to correct at audit.",
      "M.W. & Co. provides practical IFRS advisory, from first-time adoption to complex accounting treatments and the move from IAS 1 to IFRS 18, translating the standards into clear steps for your finance team.",
      "This article is general information, not advice. Contact us to discuss your situation.",
    ],
    meta: {
      title: "What IFRS Is, and Why Your Business Needs It",
      description:
        "IFRS makes financial statements comparable and credible to investors, lenders and regulators. What the framework covers and when adoption matters.",
    },
  },
};
