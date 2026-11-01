import { notFound } from "next/navigation";

// Any unmatched Arabic URL falls through to the 404 page in this layout.
export default function CatchAll() {
  notFound();
}
