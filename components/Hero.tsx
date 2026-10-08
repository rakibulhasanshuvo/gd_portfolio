"use client";

import { ArrowDown, Layers, FileText, ExternalLink, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";
import { DESIGNER_INFO, PROJECTS } from "@/data/projects";
import PortfolioHeadline from "./PortfolioHeadline";
import RetroTVSticker from "./RetroTVSticker";
import CreatorAvatarCard from "./CreatorAvatarCard";
import TornPaperDivider from "./TornPaperDivider";

export default function Hero() {
  const scrollTo = (id: string) => {
    sound.click(750);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden select-none">

      {/* =====================================================================
          PART 1: SMOKY CHALKBOARD TOP SECTION (AUTHENTIC BEHANCE STAGE)
          ===================================================================== */}
      <div className="relative bg-[#121215] text-white pt-6 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">

        {/* Soft Vignette Smoke Clouds on Left & Right Borders */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_right,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:18px_18px] opacity-25 pointer-events-none" />

        <div className="max-w-[1560px] mx-auto relative z-10">

          {/* Top Bar Navigation / Info (Direct Match to Behance Frame 01) */}
          <div className="flex items-start justify-between gap-4 pb-6 mb-2 border-b border-zinc-800/60">

            {/* Left Header Tag */}
            <div className="font-space text-xs sm:text-sm text-zinc-300 tracking-wider leading-snug">
              <span className="text-zinc-400 block text-[11px] sm:text-xs uppercase font-mono">Design</span>
              <strong className="text-white font-bold text-sm sm:text-base tracking-wide">Portfolio</strong>
            </div>

            {/* Right Header Tag */}
            <div className="font-space text-xs sm:text-sm text-zinc-400 tracking-wider leading-snug text-right">
              <span className="text-zinc-500 block text-[11px] sm:text-xs uppercase font-mono">Creative Presentation</span>
              <strong className="text-white font-semibold">
                by {DESIGNER_INFO.name}
              </strong>
            </div>

          </div>

          {/* Main Hero Header Stage: Centered Authentic 1:1 Behance Zine Title */}
          <div className="py-4 sm:py-8 md:py-10 flex flex-col items-center justify-center">
            <PortfolioHeadline className="w-full flex justify-center" />
          </div>

        </div>

      </div>

      {/* =====================================================================
          PART 2: SEAMLESS TORN PAPER DIVIDER TRANSITION (ZERO OPTICAL GAP)
          ===================================================================== */}
      <div className="relative z-10">
        <TornPaperDivider variant="dark-to-light" />
      </div>

      {/* =====================================================================
          PART 3: CREAM NEWSPRINT PAPER BOTTOM SECTION (WITH AVATAR & RETRO TV)
          ===================================================================== */}
      <div className="relative z-30 bg-[#f6f5f0] text-[#0f1012] pt-8 sm:pt-12 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 border-b-2 border-black">

        {/* Halftone Paper Stipple Background */}
        <div className="absolute inset-0 halftone-paper opacity-50 pointer-events-none" />

        <div className="max-w-[1560px] mx-auto relative z-30">

          {/* Avatar Card + Retro TV Stage */}
          <div className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-8 items-center">

            {/* Left: Avatar + Info */}
            <div className="flex-1 w-full min-w-0">
              <CreatorAvatarCard
                name="Shuvo"
                role="Senior Graphic & UI Designer"
              />
            </div>

            {/* Right: Retro TV Sticker — 1.8x to 2x scale, straddles torn edge in the FRONT layer (z-50) */}
            <div className="shrink-0 relative z-50 mt-8 lg:mt-0 lg:-mt-36 xl:-mt-44 2xl:-mt-48">
              <RetroTVSticker />
            </div>

          </div>

          {/* Action Buttons Cluster & Live Telemetry Ribbon */}
          <div className="mt-10 pt-7 border-t-2 border-black/15 flex flex-wrap items-center justify-between gap-4">

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => scrollTo("projects-section")}
                className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#0f1012] hover:bg-[#0052ff] text-white font-syne font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full border-2 border-black shadow-[4px_4px_0px_#f5b800] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>EXPLORE {PROJECTS.length} MASTERWORKS</span>
                <ArrowDown className="w-4 h-4 text-[#f5b800] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("prepress-visualizer")}
                className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-amber-50 text-[#0f1012] font-syne font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#0052ff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#0052ff]" />
                <span>TEST PREPRESS SEPARATOR</span>
              </button>

              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.click(1100)}
                className="flex items-center gap-2 px-5 py-3.5 bg-[#f6f5f0] hover:bg-white text-[#0f1012] font-mono font-semibold text-xs uppercase rounded-full border-2 border-black shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#e63946]" />
                <span>EXECUTIVE CV</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            {/* Quick Live Telemetry Pill */}
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-700 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5 text-[#f5b800]" />
              <span className="font-bold">500+ BAGS // ZERO BLEED RECORD</span>
            </div>

          </div>

          {/* Metric Stats Streetwear Specimen Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-7">
            {DESIGNER_INFO.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#f5b800] hover:-translate-y-1 transition-all duration-200 relative overflow-hidden group"
              >
                {/* Subtle Card Background Grain */}
                <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:10px_10px] opacity-5 pointer-events-none" />

                {/* Specimen Header */}
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between mb-2">
                  <span>SPECIMEN // 0{i + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#f5b800] group-hover:scale-125 transition-transform" />
                </div>

                {/* Big Number */}
                <div className="font-syne font-black text-3xl sm:text-4xl text-[#0f1012] my-1.5 tracking-tight">
                  {stat.value}
                </div>

                {/* Label & Detail */}
                <div className="font-syne font-bold text-xs text-zinc-900 leading-snug">
                  {stat.label}
                </div>
                <div className="font-mono text-[11px] text-zinc-500 mt-1.5 leading-tight">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
