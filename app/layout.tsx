import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SITE, SITE_URL } from "@/lib/constants";
import { organizationSchema, jsonLd } from "@/lib/schema";

// ---------------------------------------------------------------------------
// Fonts (self-hosted via next/font - no render-blocking external requests)
// ---------------------------------------------------------------------------
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-greatvibes",
  weight: ["400"],
});

// ---------------------------------------------------------------------------
// Site-wide metadata (Next.js Metadata API)
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "MW & Co. | Chartered Accountants - Audit, Tax & Advisory in Pakistan",
    template: "%s | MW & Co., Chartered Accountants",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "chartered accountants Pakistan",
    "audit services",
    "tax return filing",
    "IFRS advisory",
    "bookkeeping Multan Lahore Karachi",
    "chartered accountant Multan",
    "chartered accountant Lahore",
    "chartered accountant Karachi",
    "CA firm Pakistan",
    "tax consultant",
    "FBR tax filing",
    "business valuation Pakistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE.name,
    title:
      "MW & Co. | Chartered Accountants - Audit, Tax & Advisory in Pakistan",
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 900,
        height: 1600,
        alt: "MW & Co., Chartered Accountants - Commitment to Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MW & Co. | Chartered Accountants - Audit, Tax & Advisory in Pakistan",
    description: SITE.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: "#2B1B10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="bg-cream font-sans text-charcoal antialiased">
        {/* Site-wide Organization + LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        {children}
      </body>
    </html>
  );
}
