// ============================================================================
// Icons: the small inline SVG set the site uses. Stroke icons inherit the
// current text colour, so they work on both the cream and espresso sections.
// ============================================================================

export type IconName =
  | "arrow-right"
  | "check"
  | "plus"
  | "minus"
  | "whatsapp"
  | "mail"
  | "phone"
  | "map-pin"
  | "menu"
  | "close"
  | "download"
  | "linkedin"
  // The sector and figure icons the firm profile uses.
  | "hierarchy"
  | "shield"
  | "coins"
  | "crane"
  | "factory"
  | "bed"
  | "signal"
  | "wrench"
  | "anchor"
  | "bank"
  | "building"
  | "document"
  | "scale"
  | "search-check";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = {
    className,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };

  /** Shared geometry for the line icons, so they sit as one family. */
  const line = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "hierarchy":
      return (
        <svg {...common} {...line}>
          <rect x="9" y="2.75" width="6" height="5" rx="1" />
          <rect x="2.5" y="16.25" width="6" height="5" rx="1" />
          <rect x="15.5" y="16.25" width="6" height="5" rx="1" />
          <path d="M12 7.75v4.5M5.5 16.25v-4h13v4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} {...line}>
          <path d="M12 2.75l7.5 2.9v5.6c0 4.4-3.1 7.8-7.5 9.5-4.4-1.7-7.5-5.1-7.5-9.5v-5.6z" />
          <path d="M9 11.8l2.2 2.2 4.1-4.3" />
        </svg>
      );
    case "coins":
      return (
        <svg {...common} {...line}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3.1" />
          <path d="M4.5 6v5.5c0 1.7 3.4 3.1 7.5 3.1s7.5-1.4 7.5-3.1V6" />
          <path d="M4.5 11.5V17c0 1.7 3.4 3.1 7.5 3.1s7.5-1.4 7.5-3.1v-5.5" />
        </svg>
      );
    case "crane":
      return (
        <svg {...common} {...line}>
          <path d="M3.5 21h7.5M7 21V4.5" />
          <path d="M4 9.5l3-5 3 5" />
          <path d="M7 4.5h13.5" />
          <path d="M20.5 4.5v4.5" />
          <rect x="18.75" y="9" width="3.5" height="3" rx="0.7" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common} {...line}>
          <path d="M3 21V11l5.5 3.5V11L14 14.5V8h6.5v13" />
          <path d="M2.5 21h19" />
          <path d="M17 4.5h3.5V8" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common} {...line}>
          <path d="M3 20.5V10" />
          <path d="M3 15.5h18v5" />
          <path d="M21 15.5v-3a2.5 2.5 0 00-2.5-2.5H11v5.5" />
          <circle cx="7" cy="12.25" r="1.8" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="12" r="2" />
          <path d="M8.6 15.4a4.8 4.8 0 010-6.8M15.4 8.6a4.8 4.8 0 010 6.8" />
          <path d="M5.6 18.4a9 9 0 010-12.8M18.4 5.6a9 9 0 010 12.8" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common} {...line}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94z" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="5" r="2.75" />
          <path d="M12 7.75V21" />
          <path d="M8.25 11.5h7.5" />
          <path d="M4.5 13.5h-2.5a10 10 0 0020 0h-2.5" />
        </svg>
      );
    case "bank":
      return (
        <svg {...common} {...line}>
          <path d="M3 10.25L12 4l9 6.25" />
          <path d="M5.5 10.25V18M9.75 10.25V18M14.25 10.25V18M18.5 10.25V18" />
          <path d="M3 21h18" />
        </svg>
      );
    case "building":
      return (
        <svg {...common} {...line}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M9 7.5h1.5M13.5 7.5H15M9 11.5h1.5M13.5 11.5H15" />
          <path d="M10 21v-3.5h4V21" />
        </svg>
      );
    case "document":
      return (
        <svg {...common} {...line}>
          <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M8.5 13h7M8.5 16.5h4.5" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common} {...line}>
          <path d="M12 3v18M7 21h10" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          <path d="M5 8l-3 8c.87.65 1.92 1 3 1s2.13-.35 3-1z" />
          <path d="M19 8l-3 8c.87.65 1.92 1 3 1s2.13-.35 3-1z" />
        </svg>
      );
    case "search-check":
      return (
        <svg {...common} {...line}>
          <circle cx="10.75" cy="10.75" r="7" />
          <path d="M7.75 10.75l2.2 2.2 4-4.2" />
          <path d="M15.9 15.9L21 21" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.944c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.94 11.94 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.945a11.86 11.86 0 00-3.45-8.406" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0" />
        </svg>
      );
    case "check":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
      );
    case "plus":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M5 12h14" />
        </svg>
      );
    case "mail":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "menu":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "download":
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
        </svg>
      );
    case "arrow-right":
    default:
      return (
        <svg
          {...common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h13M13 6l6 6-6 6" />
        </svg>
      );
  }
}

/** Arrow that points the right way in both reading directions. */
export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return <Icon name="arrow-right" className={`${className} rtl:rotate-180`} />;
}
