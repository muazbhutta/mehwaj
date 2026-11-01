import type { Metadata } from "next";
import InsightsIndexPage from "@/components/insights/InsightsIndexPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "en",
  "/insights",
  getDictionary("en").insightsIndex.meta
);

export default function Page() {
  return <InsightsIndexPage locale="en" />;
}
