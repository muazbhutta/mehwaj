// ============================================================================
// RichText: renders a dictionary paragraph, turning **marked** spans into bold
// text. Nothing else is interpreted, so the dictionaries stay plain strings.
// ============================================================================

export default function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-espresso">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
