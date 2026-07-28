import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icons";
import { WHATSAPP_CTA_HREF } from "@/lib/constants";

export const metadata = {
  title: "Page Not Found (404)",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-espresso px-6 text-center">
      <Image
        src="/images/mw-logo.svg"
        alt="MW & Co. logo"
        width={1600}
        height={1414}
        unoptimized
        className="h-20 w-auto"
      />
      <p className="mt-8 font-serif text-7xl font-bold text-gold-gradient sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-cream sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-cream/70">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="btn-gold">
          <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          Back to Home
        </Link>
        <a
          href={WHATSAPP_CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Contact Us
        </a>
      </div>
    </main>
  );
}
