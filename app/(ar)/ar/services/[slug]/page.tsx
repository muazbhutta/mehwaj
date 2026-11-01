import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { SERVICE_SLUGS } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getDictionary("ar").services[params.slug];
  if (!service) return {};
  return pageMetadata("ar", `/services/${params.slug}`, service.meta);
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!SERVICE_SLUGS.includes(params.slug)) notFound();
  return <ServicePage locale="ar" slug={params.slug} />;
}
