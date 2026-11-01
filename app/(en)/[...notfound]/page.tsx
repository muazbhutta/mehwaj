import { notFound } from "next/navigation";

// Any unmatched English URL falls through to the 404 page in this layout,
// so the visitor keeps the header, the footer and the language switch.
export default function CatchAll() {
  notFound();
}
