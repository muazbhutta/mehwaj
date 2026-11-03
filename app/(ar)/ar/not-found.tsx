import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { getDictionary } from "@/lib/i18n";

export const metadata = {
  title: "الصفحة غير موجودة | M.W. & Co.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const dict = getDictionary("ar");

  return (
    <section className="dot-pattern bg-espresso">
      <div className="container-mw flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-serif text-7xl font-bold text-cream">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-cream sm:text-4xl">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 max-w-md font-sans text-cream/70">
          {dict.notFound.text}
        </p>
        <Link href="/ar" className="btn-gold mt-8">
          {dict.notFound.backHome}
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
