import type { Metadata } from "next";
import CityPage from "@/components/cities/CityPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "en",
  "/chartered-accountant-lahore",
  getDictionary("en").cities.lahore.meta
);

export default function Page() {
  return <CityPage locale="en" slug="lahore" />;
}
