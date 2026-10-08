"use client";

import { sound } from "@/lib/audio";

interface FloatingToolBadgeProps {
  tool: "ps" | "ai" | "figma";
  rotate?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function FloatingToolBadge({
  tool,
  rotate = -6,
  className = "",
  size = "md",
}: FloatingToolBadgeProps) {
  const configs = {
    ps: {
      bg: "bg-[#001e36]",
      border: "border-[#31a8ff]",
      text: "#31a8ff",
      label: "Ps",
      fullName: "Adobe Photoshop",
      accent: "from-[#001e36] to-[#000a12]",
    },
    ai: {
      bg: "bg-[#330000]",
      border: "border-[#ff9a00]",
      text: "#ff9a00",
      label: "Ai",
      fullName: "Adobe Illustrator",
      accent: "from-[#330000] to-[#140000]",
    },
    figma: {
      bg: "bg-[#1e1e1e]",
      border: "border-[#0acf83]",
      text: "#0acf83",
      label: "Fg",
      fullName: "Figma Prototyping",
      accent: "from-[#242424] to-[#121212]",
    },
  };

  const current = configs[tool];

  const sizeClasses = {
    sm: "w-11 h-11 text-base",
    md: "w-14 h-14 text-xl sm:w-16 sm:h-16 sm:text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  return (
    <div
      onClick={() => sound.pop()}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      className={`inline-block select-none cursor-pointer group transition-all duration-200 hover:rotate-0 hover:scale-110 active:scale-95 ${className}`}
      title={current.fullName}
    >
      <div
        className={`${sizeClasses[size]} ${current.bg} rounded-2xl border-2 ${current.border} shadow-[6px_6px_0px_#000000] flex items-center justify-center font-bold tracking-tight relative overflow-hidden`}
      >
        {/* Subtle 3D Glass Bevel Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40 pointer-events-none" />
        
        {/* Tool Name Initials */}
        <span
          className="relative z-10 font-syne font-black"
          style={{ color: current.text }}
        >
          {current.label}
        </span>

        {/* Small Corner Tech Dot */}
        <div
          className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: current.text }}
        />
      </div>
    </div>
  );
}
