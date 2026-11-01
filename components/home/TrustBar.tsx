// ============================================================================
// TrustBar: thin espresso strip under the hero, items split by gold diamonds.
// "ICAP" is picked out in gold wherever it appears.
// ============================================================================

import type { Dictionary } from "@/lib/i18n/types";

function Highlighted({ text }: { text: string }) {
  const parts = text.split("ICAP");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span className="font-semibold text-gold">ICAP</span>}
          {part}
        </span>
      ))}
    </>
  );
}

export default function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="bg-espresso">
      <div className="container-mw flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-center sm:justify-between">
        {dict.home.trustBar.map((item, i) => (
          <div key={item} className="flex items-center gap-6">
            {i > 0 && <span className="gold-diamond" aria-hidden />}
            <p className="font-sans text-sm text-cream/85">
              <Highlighted text={item} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
