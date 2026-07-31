import type { Metadata } from "next";
import CityLanding from "@/components/CityLanding";
import { CITIES } from "@/lib/constants";

const city = CITIES.find((c) => c.slug === "multan")!;

export const metadata: Metadata = {
  title: "Chartered Accountant in Multan | Audit & Tax - MW & Co.",
  description:
    "Looking for a chartered accountant in Multan? MW & Co. offers audit, tax return filing, accounting & advisory services in Multan. Book a free consultation today.",
  alternates: { canonical: "/chartered-accountant-multan" },
  openGraph: {
    title: "Chartered Accountant in Multan | Audit & Tax - MW & Co.",
    description:
      "Audit, tax, accounting & advisory services in Multan from MW & Co., Chartered Accountants.",
    url: "/chartered-accountant-multan",
  },
};

export default function MultanPage() {
  return <CityLanding city={city} />;
}
