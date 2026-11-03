# Indexing plan

Every page on mehwaj.pk, with the market each one is written for and the
order to submit them in.

- **Sitemap:** https://www.mehwaj.pk/sitemap.xml
- **Total URLs:** 68 (34 English, 34 Arabic)
- **Robots:** https://www.mehwaj.pk/robots.txt
- **For assistants:** https://www.mehwaj.pk/llms.txt

Every English page has an Arabic twin at the same path under `/ar`, and the two
point at each other through hreflang. Submit both. Google treats them as one
page in two languages, not as duplicates.

---

## How to submit

1. **Google Search Console** → add the property as a **Domain** (`mehwaj.pk`),
   verify with the DNS TXT record.
2. **Sitemaps** → submit `sitemap.xml`. That alone registers all 68 URLs.
3. **URL Inspection** → paste a URL, press **Request indexing**. Do this by
   hand only for the pages in Priority 1 and 2 below. Google rate limits manual
   requests to roughly 10 a day, so spread them over a week.
4. **Bing Webmaster Tools** → import from Search Console and submit the same
   sitemap. Bing is what ChatGPT search reads, so do not skip it.

Submitting the sitemap is what gets all 68 indexed. The manual requests only
move the important ones up the queue.

---

## Priority 1: submit by hand first (10 URLs)

The pages that earn enquiries.

| URL | Market |
| --- | --- |
| https://www.mehwaj.pk/ | All |
| https://www.mehwaj.pk/ar | GCC, Arabic |
| https://www.mehwaj.pk/secondments | GCC, all six states |
| https://www.mehwaj.pk/ar/secondments | GCC, Arabic |
| https://www.mehwaj.pk/services | All |
| https://www.mehwaj.pk/ar/services | GCC, Arabic |
| https://www.mehwaj.pk/contact | All |
| https://www.mehwaj.pk/ar/contact | GCC, Arabic |
| https://www.mehwaj.pk/about | All |
| https://www.mehwaj.pk/ar/about | GCC, Arabic |

## Priority 2: the local and GCC pages (14 URLs)

| URL | Market |
| --- | --- |
| https://www.mehwaj.pk/chartered-accountant-multan | Pakistan, Multan |
| https://www.mehwaj.pk/chartered-accountant-lahore | Pakistan, Lahore |
| https://www.mehwaj.pk/chartered-accountant-karachi | Pakistan, Karachi |
| https://www.mehwaj.pk/chartered-accountant-islamabad | Pakistan, Islamabad |
| https://www.mehwaj.pk/ar/chartered-accountant-multan | Pakistan, Arabic |
| https://www.mehwaj.pk/ar/chartered-accountant-lahore | Pakistan, Arabic |
| https://www.mehwaj.pk/ar/chartered-accountant-karachi | Pakistan, Arabic |
| https://www.mehwaj.pk/ar/chartered-accountant-islamabad | Pakistan, Arabic |
| https://www.mehwaj.pk/services/zakat-vat-saudi | Saudi Arabia |
| https://www.mehwaj.pk/ar/services/zakat-vat-saudi | Saudi Arabia, Arabic |
| https://www.mehwaj.pk/services/external-audit | Pakistan, GCC |
| https://www.mehwaj.pk/ar/services/external-audit | GCC, Arabic |
| https://www.mehwaj.pk/services/ifrs-advisory | Pakistan, GCC |
| https://www.mehwaj.pk/ar/services/ifrs-advisory | GCC, Arabic |

## Priority 3: the rest

Leave these to the sitemap. They will be picked up within a few weeks.

---

## Every URL, by group

### Core pages (6 English, 6 Arabic)

```
https://www.mehwaj.pk/
https://www.mehwaj.pk/services
https://www.mehwaj.pk/secondments
https://www.mehwaj.pk/about
https://www.mehwaj.pk/insights
https://www.mehwaj.pk/contact

https://www.mehwaj.pk/ar
https://www.mehwaj.pk/ar/services
https://www.mehwaj.pk/ar/secondments
https://www.mehwaj.pk/ar/about
https://www.mehwaj.pk/ar/insights
https://www.mehwaj.pk/ar/contact
```

### Service pages (14 English, 14 Arabic)

Which market each one is written for:

| Service | Market |
| --- | --- |
| `external-audit` | Pakistan and the GCC |
| `review-engagements` | Pakistan and the GCC |
| `agreed-upon-procedures` | Pakistan and the GCC |
| `income-tax` | Pakistan |
| `sales-tax` | Pakistan |
| `tax-notices` | Pakistan |
| `zakat-vat-saudi` | Saudi Arabia |
| `internal-audit` | Pakistan and the GCC |
| `ifrs-advisory` | Pakistan and the GCC |
| `financial-modelling` | Pakistan and the GCC |
| `business-valuation` | Pakistan |
| `secp-compliance` | Pakistan |
| `bookkeeping` | Pakistan and the GCC |
| `financial-statements` | Pakistan and the GCC |

```
https://www.mehwaj.pk/services/external-audit
https://www.mehwaj.pk/services/review-engagements
https://www.mehwaj.pk/services/agreed-upon-procedures
https://www.mehwaj.pk/services/income-tax
https://www.mehwaj.pk/services/sales-tax
https://www.mehwaj.pk/services/tax-notices
https://www.mehwaj.pk/services/zakat-vat-saudi
https://www.mehwaj.pk/services/internal-audit
https://www.mehwaj.pk/services/ifrs-advisory
https://www.mehwaj.pk/services/financial-modelling
https://www.mehwaj.pk/services/business-valuation
https://www.mehwaj.pk/services/secp-compliance
https://www.mehwaj.pk/services/bookkeeping
https://www.mehwaj.pk/services/financial-statements

https://www.mehwaj.pk/ar/services/external-audit
https://www.mehwaj.pk/ar/services/review-engagements
https://www.mehwaj.pk/ar/services/agreed-upon-procedures
https://www.mehwaj.pk/ar/services/income-tax
https://www.mehwaj.pk/ar/services/sales-tax
https://www.mehwaj.pk/ar/services/tax-notices
https://www.mehwaj.pk/ar/services/zakat-vat-saudi
https://www.mehwaj.pk/ar/services/internal-audit
https://www.mehwaj.pk/ar/services/ifrs-advisory
https://www.mehwaj.pk/ar/services/financial-modelling
https://www.mehwaj.pk/ar/services/business-valuation
https://www.mehwaj.pk/ar/services/secp-compliance
https://www.mehwaj.pk/ar/services/bookkeeping
https://www.mehwaj.pk/ar/services/financial-statements
```

### City pages, Pakistan (4 English, 4 Arabic)

```
https://www.mehwaj.pk/chartered-accountant-multan
https://www.mehwaj.pk/chartered-accountant-lahore
https://www.mehwaj.pk/chartered-accountant-karachi
https://www.mehwaj.pk/chartered-accountant-islamabad

https://www.mehwaj.pk/ar/chartered-accountant-multan
https://www.mehwaj.pk/ar/chartered-accountant-lahore
https://www.mehwaj.pk/ar/chartered-accountant-karachi
https://www.mehwaj.pk/ar/chartered-accountant-islamabad
```

### Articles (7 English, 7 Arabic)

```
https://www.mehwaj.pk/insights/ifrs-18-replaces-ias-1-pakistan
https://www.mehwaj.pk/insights/outsourcing-month-end-close-gulf
https://www.mehwaj.pk/insights/private-limited-company-compliance-calendar-pakistan
https://www.mehwaj.pk/insights/zakat-vat-returns-saudi-arabia-calendar
https://www.mehwaj.pk/insights/how-to-file-income-tax-return-pakistan-2026
https://www.mehwaj.pk/insights/external-vs-internal-audit-difference
https://www.mehwaj.pk/insights/what-is-ifrs-and-why-your-business-needs-it

https://www.mehwaj.pk/ar/insights/ifrs-18-replaces-ias-1-pakistan
https://www.mehwaj.pk/ar/insights/outsourcing-month-end-close-gulf
https://www.mehwaj.pk/ar/insights/private-limited-company-compliance-calendar-pakistan
https://www.mehwaj.pk/ar/insights/zakat-vat-returns-saudi-arabia-calendar
https://www.mehwaj.pk/ar/insights/how-to-file-income-tax-return-pakistan-2026
https://www.mehwaj.pk/ar/insights/external-vs-internal-audit-difference
https://www.mehwaj.pk/ar/insights/what-is-ifrs-and-why-your-business-needs-it
```

### Legal (3 English, 3 Arabic)

```
https://www.mehwaj.pk/privacy
https://www.mehwaj.pk/terms
https://www.mehwaj.pk/disclaimer

https://www.mehwaj.pk/ar/privacy
https://www.mehwaj.pk/ar/terms
https://www.mehwaj.pk/ar/disclaimer
```

---

## Coverage by market

| Market | Pages written for it |
| --- | --- |
| **Pakistan** | 4 city pages, 6 Pakistan tax and compliance services, 3 Pakistan articles, plus the core pages. 13 English pages before the shared ones. |
| **Saudi Arabia** | The zakat and VAT service, the secondments page, the Saudi filing article, and the whole Arabic site. |
| **UAE, Qatar, Kuwait, Bahrain, Oman** | The secondments page, the clients served section, the outsourcing article, and the whole Arabic site. The five states are named in the metadata of the home, services and secondments pages. |
| **Arabic speakers, any country** | All 34 `/ar` pages. |
| **International** | The services index, the service pages, about, contact. |

There is no separate landing page per GCC state. One secondments page names
all six. If you want to rank for "audit secondment Dubai" or "outsourced
accounting Qatar" specifically, a page per country is the next real step, the
same way the four Pakistani cities each have one.

---

## After submitting

- Check **Pages** in Search Console after a week. "Crawled, currently not
  indexed" on thin pages is normal at first.
- The legal pages may never index. That is fine and expected.
- The thing that moves indexing fastest is not resubmitting. It is other sites
  linking to yours: a Google Business Profile, a LinkedIn company page, the
  ICAP member directory, local business directories.
