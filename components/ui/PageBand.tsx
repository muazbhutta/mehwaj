// ============================================================================
// PageBand: the espresso band with the dot pattern used at the top of the
// services index, the about page, the secondments page and the city pages.
// ============================================================================

export default function PageBand({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="dot-pattern bg-espresso">
      <div className="container-mw py-12 sm:py-16">
        {eyebrow && <p className="eyebrow-light">{eyebrow}</p>}
        <h1 className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
