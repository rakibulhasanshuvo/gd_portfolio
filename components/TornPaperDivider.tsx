"use client";

interface TornPaperDividerProps {
  variant?: "dark-to-light" | "light-to-dark";
  className?: string;
  flipX?: boolean;
}

export default function TornPaperDivider({
  variant = "dark-to-light",
  className = "",
  flipX = false,
}: TornPaperDividerProps) {
  const isDarkToLight = variant === "dark-to-light";
  const topColor = isDarkToLight ? "#111114" : "#f6f5f0";
  const bottomColor = isDarkToLight ? "#f6f5f0" : "#111114";

  // Seamless organic torn paper edge path traversing across the 1440px canvas
  // The line fluctuates naturally between Y=14 and Y=28
  const tearLine =
    "M0,22 " +
    "C40,16 80,26 120,20 " +
    "C160,14 200,27 240,21 " +
    "C280,15 320,26 360,19 " +
    "C400,13 440,25 480,20 " +
    "C520,15 560,27 600,22 " +
    "C640,17 680,28 720,21 " +
    "C760,14 800,26 840,19 " +
    "C880,13 920,25 960,20 " +
    "C1000,16 1040,27 1080,22 " +
    "C1120,17 1160,28 1200,20 " +
    "C1240,14 1280,26 1320,21 " +
    "C1360,16 1400,25 1440,20";

  // Bottom region: from (0,48) across to (1440,48) up to (1440,20) and back along tear line
  const bottomRegion = `${tearLine} L1440,48 L0,48 Z`;

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none z-10 ${className}`}
      style={{
        transform: flipX ? "scaleX(-1)" : undefined,
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 md:h-14 block"
      >
        {/* Full solid underlay with top section color */}
        <rect width="1440" height="48" fill={topColor} />

        {/* Paper Tear Cast Shadow */}
        <path
          d={tearLine}
          stroke="rgba(0,0,0,0.35)"
          strokeWidth="4"
          fill="none"
          transform="translate(0, 1.5)"
        />

        {/* Bottom Paper Region cleanly drawn over top underlay */}
        <path d={bottomRegion} fill={bottomColor} />

        {/* Jagged Paper Fiber Highlight Along Rip Edge */}
        <path
          d={tearLine}
          stroke={isDarkToLight ? "#ffffff" : "#222226"}
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
