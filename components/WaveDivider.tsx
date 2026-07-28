// ============================================================================
// WaveDivider — smooth curved separator between cream and brown blocks,
// with a bright gold edge line (mirrors the MW & Co. brand poster).
// ============================================================================

interface WaveDividerProps {
  /** Colour of the block the wave "belongs" to (the fill). */
  fill?: string;
  /** Flip vertically so the curve bulges the other way. */
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  fill = "#2B1B10",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none relative w-full leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[60px] w-full sm:h-[90px] lg:h-[120px] ${
          flip ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A87B33" />
            <stop offset="50%" stopColor="#E5C87E" />
            <stop offset="100%" stopColor="#C79A4B" />
          </linearGradient>
        </defs>
        {/* Filled wave (the destination colour) */}
        <path
          d="M0,40 C280,120 520,0 720,40 C920,80 1160,120 1440,50 L1440,120 L0,120 Z"
          fill={fill}
        />
        {/* Bright gold edge line tracing the crest */}
        <path
          d="M0,40 C280,120 520,0 720,40 C920,80 1160,120 1440,50"
          fill="none"
          stroke="url(#wave-gold)"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
