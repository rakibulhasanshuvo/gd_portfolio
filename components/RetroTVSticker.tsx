"use client";

import { useState } from "react";
import { sound } from "@/lib/audio";

interface RetroTVStickerProps {
  className?: string;
}

export default function RetroTVSticker({ className = "" }: RetroTVStickerProps) {
  const [channel, setChannel] = useState(0);

  const channels = [
    { title: "PORTFOLIO 2026", subtitle: "VOL — 01 ARCHIVE", tag: "ON AIR", color: "#f3b72b" },
    { title: "500+ BAG RUNS", subtitle: "ZERO BLEED RECORD", tag: "COMMERCIAL", color: "#0052ff" },
    { title: "BOU CSE // AI", subtitle: "TOKYO / JICA CERT", tag: "CREDENTIALS", color: "#10b981" },
    { title: "SMPTE BARS", subtitle: "COLOR CALIBRATION", tag: "TEST PATTERN", color: "#ef4444" },
  ];

  const handleKnobClick = () => {
    sound.click(1250);
    setChannel((prev) => (prev + 1) % channels.length);
  };

  const active = channels[channel];

  return (
    <div
      onClick={handleKnobClick}
      className={`relative select-none group cursor-pointer inline-block ${className}`}
      title="Click TV knob to switch channel"
    >
      {/* =====================================================================
          AUTHENTIC DIE-CUT PHOTOCOPY RETRO TV STICKER (1.8X - 2.0X SCALE)
          Features prominent white die-cut sticker contour + CRT screen + vintage dials
          ===================================================================== */}
      <div className="relative p-2.5 sm:p-3.5 md:p-4 bg-white rounded-[32px] sm:rounded-[42px] md:rounded-[48px] shadow-[12px_18px_36px_rgba(0,0,0,0.5),0_4px_8px_rgba(0,0,0,0.35)] border-2 sm:border-3 border-black/15 transition-transform duration-200 group-hover:-translate-y-1 group-active:translate-y-0 rotate-1">
        
        {/* Main TV Cabinet (Proportionately scaled to 1.8x - 2.0x) */}
        <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[520px] 2xl:w-[560px] bg-[#1a1a1e] rounded-[24px] sm:rounded-[32px] md:rounded-[38px] p-3.5 sm:p-4 md:p-5 border-3 sm:border-4 border-black shadow-inner flex flex-col">
          
          {/* Antenna Mount & Rabbit Ears (Scaled Up) */}
          <div className="absolute -top-10 sm:-top-12 md:-top-14 left-1/2 -translate-x-1/2 w-36 sm:w-48 md:w-56 h-10 sm:h-12 md:h-14 pointer-events-none">
            <svg viewBox="0 0 140 50" className="w-full h-full drop-shadow-md">
              {/* Left Antenna */}
              <line x1="70" y1="46" x2="20" y2="8" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
              <line x1="70" y1="46" x2="20" y2="8" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="20" cy="8" r="6" fill="#ffffff" stroke="#18181b" strokeWidth="2.5" />

              {/* Right Antenna */}
              <line x1="70" y1="46" x2="120" y2="8" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
              <line x1="70" y1="46" x2="120" y2="8" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="120" cy="8" r="6" fill="#ffffff" stroke="#18181b" strokeWidth="2.5" />

              {/* Antenna Mount Base */}
              <circle cx="70" cy="46" r="6" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* Screen + Controls Panel */}
          <div className="flex gap-3 sm:gap-4 md:gap-5 items-stretch">
            
            {/* Curved CRT Screen Glass Container */}
            <div className="relative flex-1 aspect-[4/3] bg-[#0c0d10] rounded-xl sm:rounded-2xl md:rounded-3xl border-3 sm:border-4 border-[#2c2c34] shadow-inner p-3 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden">
              
              {/* Halftone Dot Stipple Mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:5px_5px] opacity-15 pointer-events-none" />

              {/* Glass Reflection Glare */}
              <div className="absolute -top-16 -left-16 w-52 sm:w-64 h-40 sm:h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />

              {/* Top HUD Display */}
              <div className="flex items-center justify-between z-10 font-mono text-[9px] sm:text-xs md:text-sm text-zinc-400">
                <span className="flex items-center gap-1.5 sm:gap-2 font-bold text-red-400">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span>CH-{channel + 1}</span>
                </span>
                <span className="text-zinc-400 font-semibold uppercase tracking-wider">{active.tag}</span>
              </div>

              {/* Center Channel Content */}
              <div className="my-auto text-center z-10 py-1 sm:py-2">
                {channel === 3 ? (
                  /* SMPTE Color Bars Calibration Pattern */
                  <div className="w-full h-16 sm:h-20 md:h-24 rounded-lg sm:rounded-xl grid grid-cols-7 gap-1 overflow-hidden border-2 border-white/20 shadow-md">
                    <div className="bg-gray-200" />
                    <div className="bg-yellow-400" />
                    <div className="bg-cyan-400" />
                    <div className="bg-emerald-500" />
                    <div className="bg-fuchsia-600" />
                    <div className="bg-red-600" />
                    <div className="bg-blue-700" />
                  </div>
                ) : (
                  <>
                    <div
                      className="font-syne font-black text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight uppercase drop-shadow-md"
                      style={{ color: active.color }}
                    >
                      {active.title}
                    </div>
                    <div className="font-mono text-[9px] sm:text-xs md:text-sm text-zinc-300 mt-1 sm:mt-1.5 uppercase tracking-widest font-semibold">
                      {active.subtitle}
                    </div>
                  </>
                )}
              </div>

              {/* Bottom HUD Display */}
              <div className="flex items-center justify-between z-10 font-mono text-[8px] sm:text-[10px] md:text-xs text-zinc-500">
                <span>VOL: 2026 // NTSC 60Hz</span>
                <span className="text-emerald-400 font-bold tracking-wide">SIGNAL: 100%</span>
              </div>

            </div>

            {/* Right Controls Panel (Proportionately scaled dials & grille) */}
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 bg-[#131316] rounded-xl sm:rounded-2xl border border-[#2e2e34] p-2 sm:p-2.5 md:p-3 flex flex-col justify-between items-center">
              
              {/* Dial 1: Tuner */}
              <div className="flex flex-col items-center gap-1 sm:gap-1.5 pt-1">
                <div
                  className="w-9 sm:w-11 md:w-13 h-9 sm:h-11 md:h-13 rounded-full bg-[#202024] border-2 sm:border-3 border-zinc-400 flex items-center justify-center relative shadow-sm group-hover:rotate-45 transition-transform duration-300"
                >
                  <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-white rounded-xs -translate-y-2 sm:-translate-y-2.5" />
                  <div className="absolute inset-0 rounded-full border border-dashed border-zinc-600/60" />
                </div>
                <span className="font-mono text-[7px] sm:text-[9px] md:text-[10px] text-zinc-300 uppercase tracking-widest font-bold">TUNER</span>
              </div>

              {/* Dial 2: Volume */}
              <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                <div className="w-7 sm:w-9 md:w-10 h-7 sm:h-9 md:h-10 rounded-full bg-[#202024] border-2 sm:border-3 border-zinc-400 flex items-center justify-center relative shadow-sm">
                  <div className="w-1.5 h-3 sm:h-4 bg-yellow-400 rounded-xs -translate-y-1.5 sm:-translate-y-2" />
                </div>
                <span className="font-mono text-[7px] sm:text-[9px] md:text-[10px] text-zinc-300 uppercase tracking-widest font-bold">VOL</span>
              </div>

              {/* Speaker Slots */}
              <div className="w-full flex flex-col gap-1 sm:gap-1.5 pb-1 px-1">
                <div className="w-full h-1 sm:h-1.5 bg-zinc-600 rounded-full" />
                <div className="w-full h-1 sm:h-1.5 bg-zinc-600 rounded-full" />
                <div className="w-full h-1 sm:h-1.5 bg-zinc-600 rounded-full" />
                <div className="w-full h-1 sm:h-1.5 bg-zinc-600 rounded-full" />
              </div>

            </div>

          </div>

          {/* 4 Tapered Peg Legs (Scaled Outward for Realistic Stand) */}
          <div className="flex justify-between px-6 sm:px-10 md:px-12 -mb-5 sm:-mb-6 md:-mb-7 pt-2 sm:pt-3">
            <div className="w-4 sm:w-5 md:w-6 h-5 sm:h-6 md:h-7 bg-[#141416] border-2 sm:border-3 border-black rounded-b-md -rotate-12 shadow-sm" />
            <div className="w-4 sm:w-5 md:w-6 h-5 sm:h-6 md:h-7 bg-[#141416] border-2 sm:border-3 border-black rounded-b-md rotate-12 shadow-sm" />
          </div>

        </div>

      </div>
    </div>
  );
}
