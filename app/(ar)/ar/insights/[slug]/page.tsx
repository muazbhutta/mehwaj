import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/insights/ArticlePage";
import { POST_SLUGS } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getDictionary("ar").posts[params.slug];
  if (!post) return {};
  return pageMetadata("ar", `/insights/${params.slug}`, post.meta);
}

export default function Page({ params }: { params: { slug: string } }) {
  if (!POST_SLUGS.includes(params.slug as (typeof POST_SLUGS)[number])) {
    notFound();
  }
  return <ArticlePage locale="ar" slug={params.slug} />;
}
