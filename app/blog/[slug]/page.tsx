import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icons";
import { BLOG_POSTS, WHATSAPP_CTA_HREF } from "@/lib/constants";
import { articleSchema, jsonLd } from "@/lib/schema";

// Pre-render every blog post at build time
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleSchema(post))}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow={post.category}
          title={post.title}
          crumbs={[{ name: "Insights", href: "/blog" }]}
        />

        <article className="bg-cream py-16 sm:py-20">
          <div className="container-mw max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-coffee/60">
              <span>{formatDate(post.date)}</span>
              <span className="gold-diamond scale-75" />
              <span>{post.readingTime}</span>
            </div>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-coffee/90">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Post CTA */}
            <div className="mt-12 rounded-2xl border border-bronze/20 bg-espresso p-7 text-center shadow-gold">
              <p className="font-serif text-xl font-bold text-cream">
                Need help from a Chartered Accountant?
              </p>
              <p className="mt-2 text-sm text-cream/70">
                MW &amp; Co. supports individuals and businesses across Multan,
                Lahore &amp; Karachi.
              </p>
              <a
                href={WHATSAPP_CTA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-5"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Book a Free Consultation
              </a>
            </div>

            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-semibold text-bronze transition-colors hover:text-gold"
              >
                <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                Back to all insights
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
