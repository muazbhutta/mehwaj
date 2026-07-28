import type { Metadata } from "next";
import CityLanding from "@/components/CityLanding";
import { CITIES } from "@/lib/constants";

const city = CITIES.find((c) => c.slug === "lahore")!;

export const metadata: Metadata = {
  title: "Chartered Accountant in Lahore | Audit & Tax — MW & Co.",
  description:
    "Chartered accountant in Lahore for external & internal audit, FBR tax filing, IFRS advisory, and bookkeeping. MW & Co. serves startups, SMEs & corporates. Get in touch.",
  alternates: { canonical: "/chartered-accountant-lahore" },
  openGraph: {
    title: "Chartered Accountant in Lahore | Audit & Tax — MW & Co.",
    description:
      "Audit, tax, accounting & advisory services in Lahore from MW & Co., Chartered Accountants.",
    url: "/chartered-accountant-lahore",
  },
};

export default function LahorePage() {
  return <CityLanding city={city} />;
}
