// ============================================================================
// SiteShell: header, page content, footer and the floating WhatsApp button.
// Both root layouts render this around their children.
// ============================================================================

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main id="main">{children}</main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton dict={dict} />
    </>
  );
}
