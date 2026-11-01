// ============================================================================
// Avatar: a gold ringed circle holding either a photo or the person's
// initials. To swap initials for a photo later, set `image` on the person in
// lib/site.ts and drop the file into public/images.
// ============================================================================

import Image from "next/image";

export default function Avatar({
  image,
  initials,
  name,
  size = "md",
}: {
  image?: string;
  initials: string;
  name: string;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-28 w-28 sm:h-32 sm:w-32" : "h-16 w-16";
  const type = size === "lg" ? "text-3xl sm:text-4xl" : "text-lg";

  if (image) {
    return (
      <span
        className={`${box} relative shrink-0 overflow-hidden rounded-full ring-2 ring-gold`}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="128px"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={`${box} ${type} flex shrink-0 items-center justify-center rounded-full bg-ivory font-serif font-bold text-espresso ring-2 ring-gold`}
    >
      {initials}
    </span>
  );
}
