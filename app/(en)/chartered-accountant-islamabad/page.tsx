import type { Metadata } from "next";
import CityPage from "@/components/cities/CityPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "en",
  "/chartered-accountant-islamabad",
  getDictionary("en").cities.islamabad.meta
);

export default function Page() {
  return <CityPage locale="en" slug="islamabad" />;
}
