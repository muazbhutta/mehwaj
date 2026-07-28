// ============================================================================
// Gold line-icon set — lightweight inline SVGs (no icon library).
// Stroke-based, 24x24, inherit `currentColor` so colour is controlled by class.
// Reference an icon by key: <Icon name="scale" className="h-7 w-7" />
// ============================================================================

import type { SVGProps } from "react";

type IconPaths = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<string, IconPaths> = {
  // --- Services ---
  "clipboard-check": (p) => (
    <svg {...base} {...p}>
      <path d="M9 3.5h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z" />
      <path d="M8 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  ),
  "shield-search": (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <circle cx="11" cy="11" r="2.4" />
      <path d="m13 13 2 2" />
    </svg>
  ),
  scale: (p) => (
    <svg {...base} {...p}>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M5 7h14" />
      <path d="M8 7 5 13a3 3 0 0 0 6 0L8 7Z" />
      <path d="M16 7l-3 6a3 3 0 0 0 6 0l-3-6Z" />
      <circle cx="12" cy="4.5" r="1.2" />
    </svg>
  ),
  "file-invoice": (p) => (
    <svg {...base} {...p}>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M8 11h5" />
      <path d="M8 14.5h8" />
      <path d="M8 18h4" />
    </svg>
  ),
  calculator: (p) => (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h3.5" />
    </svg>
  ),
  "chart-growth": (p) => (
    <svg {...base} {...p}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-3" />
      <path d="M12 16v-6" />
      <path d="M16 16v-4" />
      <path d="m8 9 4-4 3 3 4-4" />
      <path d="M19 4h-2.5M19 4v2.5" />
    </svg>
  ),
  globe: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5S14.4 18.2 12 20.5C9.6 18.2 8.4 15.2 8.4 12S9.6 5.8 12 3.5Z" />
    </svg>
  ),
  handshake: (p) => (
    <svg {...base} {...p}>
      <path d="m11 17 2 2a1.5 1.5 0 0 0 2.1-2.1" />
      <path d="m13.1 16.9 2.4 2.3a1.5 1.5 0 0 0 2.1-2.1L15 14.5" />
      <path d="M3 8l3-3 5 1 3-1 4 1 3 2" />
      <path d="M3 8v6l4 4 2-2" />
      <path d="M11 6 8 9a1.6 1.6 0 0 0 0 2.3 1.6 1.6 0 0 0 2.3 0L12 9.6l2 1.9c.8.8 2 .8 2.8 0" />
      <path d="M21 8v6l-3 3" />
    </svg>
  ),

  // --- Values ---
  medal: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="14" r="5" />
      <path d="m8.5 9.5-2.5-6M15.5 9.5l2.5-6" />
      <path d="m12 12 .9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2L9.1 14l2-.3.9-1.7Z" />
    </svg>
  ),
  "shield-check": (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  lightbulb: (p) => (
    <svg {...base} {...p}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  star: (p) => (
    <svg {...base} {...p}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  ),

  // --- UI / Contact ---
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 5 8-5" />
    </svg>
  ),
  "map-pin": (p) => (
    <svg {...base} {...p}>
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  "arrow-right": (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  "chevron-down": (p) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  ),
  quote: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9 6c-3 0-5 2.5-5 6 0 3 1.8 5 4.3 5 1.9 0 3.2-1.3 3.2-3.1 0-1.7-1.2-2.9-2.8-2.9-.3 0-.7.1-.8.1.2-1.4 1.5-2.6 3-2.9L9 6Zm9 0c-3 0-5 2.5-5 6 0 3 1.8 5 4.3 5 1.9 0 3.2-1.3 3.2-3.1 0-1.7-1.2-2.9-2.8-2.9-.3 0-.7.1-.8.1.2-1.4 1.5-2.6 3-2.9L18 6Z" />
    </svg>
  ),
  building: (p) => (
    <svg {...base} {...p}>
      <path d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15" />
      <path d="M12 21V10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M7 8h2M7 11h2M7 14h2M15 12h2M15 15h2" />
    </svg>
  ),
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export function Icon({ name, className, ...rest }: IconProps) {
  const Render = ICONS[name];
  if (!Render) return null;
  return <Render className={className} aria-hidden="true" {...rest} />;
}

export default Icon;
