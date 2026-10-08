"use client";

import { useState } from "react";
import { sound } from "@/lib/audio";

export default function RetroTV({ className = "" }: { className?: string }) {
  const [channel, setChannel] = useState(0);

  const channels = [
    { title: "PORTFOLIO 2026", subtitle: "ON AIR // VOL 01", color: "#f5b800" },
    { title: "500+ BAG RUNS", subtitle: "ZERO REGISTRATION BLEED", color: "#0052ff" },
    { title: "TEST PATTERN", subtitle: "COLOR BAR CALIBRATION", color: "#e63946" },
  ];

  const handleKnobClick = () => {
    sound.click(1200);
    setChannel((prev) => (prev + 1) % channels.length);
  };

  const active = channels[channel];

  return (
    <div
      className={`relative select-none group cursor-pointer inline-block ${className}`}
      onClick={handleKnobClick}
      title="Click TV knob to switch channels"
    >
      {/* V-Shape Rabbit Ear Antennas */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-14 pointer-events-none z-0">
        <svg viewBox="0 0 120 60" className="w-full h-full drop-shadow-md">
          {/* Left antenna */}
          <line
            x1="60"
            y1="56"
            x2="15"
            y2="6"
            stroke="#9ca3af"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="15" cy="6" r="3.5" fill="#f3f4f6" />
          {/* Right antenna */}
          <line
            x1="60"
            y1="56"
            x2="105"
            y2="6"
            stroke="#9ca3af"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="105" cy="6" r="3.5" fill="#f3f4f6" />
          {/* Antenna base mount */}
          <circle cx="60" cy="56" r="5" fill="#374151" stroke="#111827" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Television Cabinet */}
      <div className="relative z-10 w-64 sm:w-72 bg-[#202024] rounded-2xl p-3 border-4 border-[#0a0a0c] shadow-[8px_8px_0px_#000000] transition-transform duration-200 group-hover:-translate-y-1">
        {/* Top Handle */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#111113] rounded-t-md border-2 border-b-0 border-[#000]" />

        {/* Screen + Controls Container */}
        <div className="flex gap-2.5 items-stretch">
          
          {/* CRT Screen */}
          <div className="relative flex-1 aspect-4/3 bg-[#0c0d10] rounded-xl border-3 border-[#17181c] shadow-inner crt-screen p-3 flex flex-col justify-between overflow-hidden">
            
            {/* Screen Glass Reflection Glare */}
            <div className="absolute -top-10 -left-10 w-40 h-28 bg-white/5 rounded-full blur-xl pointer-events-none" />

            {/* Top Screen Channel HUD */}
            <div className="flex items-center justify-between z-10 font-mono text-[9px] text-zinc-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>REC CH-{channel + 1}</span>
              </span>
              <span className="text-zinc-500">NTSC 60Hz</span>
            </div>

            {/* Screen Center Visual Graphic */}
            <div className="my-auto text-center z-10 py-1">
              {channel === 2 ? (
                /* SMPTE Color Bars Pattern */
                <div className="w-full h-12 rounded grid grid-cols-7 gap-0.5 overflow-hidden shadow-xs">
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
                    className="font-syne font-black text-base sm:text-lg tracking-tight uppercase"
                    style={{ color: active.color }}
                  >
                    {active.title}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-zinc-300 mt-1 uppercase tracking-wider">
                    {active.subtitle}
                  </div>
                </>
              )}
            </div>

            {/* Bottom Screen Scanline Indicator */}
            <div className="flex items-center justify-between z-10 font-mono text-[8px] text-zinc-500">
              <span>VOL: 2026</span>
              <span className="text-emerald-400">SIGNAL: 100%</span>
            </div>
          </div>

          {/* Right Controls Panel */}
          <div className="w-14 bg-[#18181c] rounded-lg border border-[#27272a] p-1.5 flex flex-col justify-between items-center">
            
            {/* Dials & Knobs */}
            <div className="flex flex-col items-center gap-2 pt-1">
              {/* Dial 1 (Tuner) */}
              <div className="w-8 h-8 rounded-full bg-[#111113] border-2 border-[#3f3f46] shadow-sm flex items-center justify-center relative group-hover:rotate-45 transition-transform duration-300">
                <div className="w-1.5 h-3 bg-zinc-400 rounded-xs -translate-y-1.5" />
                <div className="absolute inset-0 rounded-full border border-dashed border-zinc-600/50" />
              </div>
              <span className="font-mono text-[7px] text-zinc-400 uppercase">TUNER</span>

              {/* Dial 2 (Volume) */}
              <div className="w-6 h-6 rounded-full bg-[#111113] border-2 border-[#3f3f46] shadow-sm flex items-center justify-center relative">
                <div className="w-1 h-2 bg-yellow-500 rounded-xs -translate-y-1" />
              </div>
              <span className="font-mono text-[7px] text-zinc-400 uppercase">VOL</span>
            </div>

            {/* Speaker Grille Slots */}
            <div className="w-full flex flex-col gap-1 pb-1 px-1">
              <div className="w-full h-0.5 bg-zinc-700 rounded-full" />
              <div className="w-full h-0.5 bg-zinc-700 rounded-full" />
              <div className="w-full h-0.5 bg-zinc-700 rounded-full" />
              <div className="w-full h-0.5 bg-zinc-700 rounded-full" />
            </div>

          </div>

        </div>

        {/* TV Bottom Stand Feet */}
        <div className="flex justify-between px-6 -mb-5 pt-2">
          <div className="w-4 h-3 bg-[#0a0a0c] rounded-b-md" />
          <div className="w-4 h-3 bg-[#0a0a0c] rounded-b-md" />
        </div>

      </div>
    </div>
  );
}
