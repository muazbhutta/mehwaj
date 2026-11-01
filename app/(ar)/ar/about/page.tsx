import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "ar",
  "/about",
  getDictionary("ar").about.meta
);

export default function Page() {
  return <AboutPage locale="ar" />;
}
