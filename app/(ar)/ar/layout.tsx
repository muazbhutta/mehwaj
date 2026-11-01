import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { arabicFontVars } from "../../fonts";
import SiteShell from "@/components/SiteShell";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema, jsonLd } from "@/lib/schema";

const dict = getDictionary("ar");

export const metadata: Metadata = {
  ...pageMetadata("ar", "/", dict.home.meta),
  title: {
    default: dict.home.meta.title,
    template: "%s",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B1B10",
  width: "device-width",
  initialScale: 1,
};

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={arabicFontVars}>
      <body className="bg-cream font-sans text-charcoal antialiased">
        {/* Turns the scroll reveal on. Without JavaScript the class is
            never added and every section stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js-reveal")',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
