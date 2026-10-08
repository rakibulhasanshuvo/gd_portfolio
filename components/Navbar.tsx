"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, FileText, Clock, MapPin } from "lucide-react";
import { sound } from "@/lib/audio";

export default function Navbar() {
  const [time, setTime] = useState<string>("");
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) sound.pop();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#111114]/90 backdrop-blur-md border-b-2 border-black px-4 sm:px-8 lg:px-12 xl:px-16 py-3.5 transition-all text-white">
      <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Designer Monogram & Brand Signature */}
        <Link 
          href="/" 
          onClick={() => sound.click(1000)}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-[#f5b800] rounded-xl p-1.5 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#ffffff] group-hover:scale-105 group-hover:bg-[#ffc700] transition-all">
            <Image
              src="/assets/logos/created-by-shuvo-symbol.svg"
              alt="Created by Shuvo"
              width={22}
              height={22}
              className="brightness-0"
            />
          </div>
          <div>
            <div className="font-syne font-black tracking-tight text-sm text-white flex items-center gap-1.5 uppercase">
              <span>CREATED BY SHUVO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              Visual & UI Designer // Vol 01
            </p>
          </div>
        </Link>

        {/* Center: Live Timezone & Availability Badge (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2 bg-[#18181c] px-3.5 py-1 rounded-full border border-zinc-700 shadow-xs">
            <MapPin className="w-3 h-3 text-[#f5b800]" />
            <span>Dhaka, BD (GMT+6)</span>
            <span className="text-zinc-600">/</span>
            <Clock className="w-3 h-3 text-emerald-400" />
            <span className="tabular-nums font-semibold text-white">{time || "12:00:00 PM"}</span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/40 px-3.5 py-1 rounded-full text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-xs">Available for Hire & Projects</span>
          </div>
        </div>

        {/* Right: Controls & CV Link */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            className="p-2 text-zinc-300 hover:text-white bg-[#18181c] hover:bg-[#27272a] border border-zinc-700 rounded-full shadow-xs transition-all cursor-pointer"
            aria-label="Toggle sound"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#f5b800]" />
            )}
          </button>

          {/* Direct Link to CV */}
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click(1200)}
            className="flex items-center gap-1.5 text-xs font-mono font-bold bg-[#f5b800] hover:bg-[#ffc700] text-black px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_#ffffff] hover:shadow-[3px_3px_0px_#ffffff] hover:-translate-y-0.5 transition-all cursor-pointer uppercase"
          >
            <FileText className="w-3.5 h-3.5 text-black" />
            <span>RESUME</span>
          </a>
        </div>

      </div>
    </header>
  );
}
