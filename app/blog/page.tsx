import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights & Guides - Tax, Audit & Accounting in Pakistan",
  description:
    "Practical guides on tax filing, audit, IFRS, and accounting in Pakistan from MW & Co., Chartered Accountants. Learn how to stay compliant and grow with confidence.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Insights & Guides"
          subtitle="Practical, plain-English guidance on tax, audit, IFRS, and accounting for individuals and businesses in Pakistan."
          crumbs={[]}
        />

        <div className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-mw">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={(i % 3) * 0.08}
                  as="article"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-bronze/20 bg-offwhite shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
                >
                  {/* accent header */}
                  <div className="relative flex h-32 items-center justify-center bg-espresso">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
                    <span className="rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-champagne">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-coffee/60">
                      <span>{formatDate(post.date)}</span>
                      <span className="gold-diamond scale-75" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-espresso">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-coffee/80">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze transition-colors hover:text-gold"
                    >
                      Read article
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
