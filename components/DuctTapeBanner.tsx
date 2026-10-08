"use client";

interface DuctTapeBannerProps {
  label: string;
  rotate?: number;
  className?: string;
}

export default function DuctTapeBanner({
  label,
  rotate = -2,
  className = "",
}: DuctTapeBannerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative inline-flex items-center justify-center my-6 select-none ${className}`}
    >
      {/* Hand-Drawn Sparkle / Burst Doodles on the Left */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-85">
        <svg viewBox="0 0 40 40" fill="none" stroke="#0f1012" strokeWidth="2.5" strokeLinecap="round">
          <line x1="20" y1="4" x2="20" y2="14" />
          <line x1="20" y1="26" x2="20" y2="36" />
          <line x1="4" y1="20" x2="14" y2="20" />
          <line x1="26" y1="20" x2="36" y2="20" />
          <line x1="9" y1="9" x2="16" y2="16" />
          <line x1="24" y1="24" x2="31" y2="31" />
        </svg>
      </div>

      {/* Main Distressed Duct Tape Body */}
      <div className="relative bg-[#16161a] text-white px-8 sm:px-12 py-2 sm:py-3 border-y-2 border-black/40 shadow-[4px_5px_12px_rgba(0,0,0,0.35)] overflow-hidden">
        
        {/* Tape Rough Surface Noise / Fiber Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.06)_50%,transparent_75%)] bg-[length:12px_12px] pointer-events-none" />

        {/* Serrated Left Torn End */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-neutral-900 clip-torn-left pointer-events-none" />

        {/* Serrated Right Torn End */}
        <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-neutral-900 clip-torn-right pointer-events-none" />

        {/* Chalk/Brush Typography */}
        <span className="relative z-10 font-marker text-lg sm:text-2xl tracking-widest text-[#f4f4f5] uppercase drop-shadow-sm">
          {label}
        </span>
      </div>

      {/* Hand-Drawn Sparkle Doodles on the Right */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-85">
        <svg viewBox="0 0 40 40" fill="none" stroke="#0f1012" strokeWidth="2.5" strokeLinecap="round">
          <line x1="20" y1="6" x2="20" y2="12" />
          <line x1="20" y1="28" x2="20" y2="34" />
          <line x1="6" y1="20" x2="12" y2="20" />
          <line x1="28" y1="20" x2="34" y2="20" />
          <circle cx="20" cy="20" r="2" fill="#0f1012" />
        </svg>
      </div>
    </div>
  );
}
