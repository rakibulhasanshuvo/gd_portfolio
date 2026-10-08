"use client";

import { useState } from "react";
import Image from "next/image";
import { Clapperboard, X, ZoomIn, ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface ThumbnailItem {
  id: string;
  title: string;
  subtitle: string;
  views: string;
  category: string;
  badge: string;
  palette: string[];
  specs: string;
  description: string;
  image: string;
}

export default function ThumbnailGallery() {
  const [activeModal, setActiveModal] = useState<ThumbnailItem | null>(null);
  const [columns, setColumns] = useState<2 | 3>(2); // 2-col cinematic (like Behance) or 3-col grid

  const thumbnails: ThumbnailItem[] = [
    {
      id: "thumb-1",
      title: "Late Night Stream",
      subtitle: "Cinematic dual-tone lighting with custom character cutouts & neon city backdrop",
      views: "1.2M Views",
      category: "Cinematic & Entertainment",
      badge: "Neon Cyberpunk",
      palette: ["#ff007f", "#00f5ff", "#f5b800", "#090a0f"],
      specs: "Adobe Photoshop • 1920x1080 300DPI • Custom Dual-Tone Curves & Rim Lighting",
      description:
        "Engineered for viral click-through rates (14.2% CTR) with hyper-saturated neon back-lighting, deep vignetting, and dramatic character cutouts calibrated for high mobile feed contrast.",
      image: "/assets/thumbnails/late_night_stream.jpg",
    },
    {
      id: "thumb-2",
      title: "From Zero To Pro",
      subtitle: "Designer workspace with glowing 3D Photoshop badge & dynamic camera angle",
      views: "850K Views",
      category: "Creative Education",
      badge: "Photoshop 3D",
      palette: ["#f5b800", "#10b981", "#31a8ff", "#18181b"],
      specs: "Adobe Photoshop + Illustrator • 3D Tool Badge & Halftone Texture Screen",
      description:
        "High-energy educational thumbnail blending photographic realism with floating 3D tool badges and bold, readable typography at 80px scale on mobile feeds.",
      image: "/assets/thumbnails/from_zero_designer.jpg",
    },
    {
      id: "thumb-3",
      title: "Once Upon a Time in Dhaka",
      subtitle: "Nostalgic 1970s documentary aesthetic with vintage postage stamp border & retro film grain",
      views: "620K Views",
      category: "Docu-Series",
      badge: "Postal Stamp",
      palette: ["#10b981", "#f5b800", "#dc2626", "#022c22"],
      specs: "Adobe Photoshop • Noise Grain & Bleed Filter • Custom Bengalee Retro Typography",
      description:
        "Nostalgic editorial aesthetic featuring weathered film dust, retro stamp overlays, and high-impact portrait color grading evoking 1970s Dhaka heritage.",
      image: "/assets/thumbnails/dhaka_story.jpg",
    },
    {
      id: "thumb-4",
      title: "#07 Harsh Reality",
      subtitle: "Intense emotional curiosity trigger with vivid caution tape banners & red rim lighting",
      views: "940K Views",
      category: "Storytelling",
      badge: "Hazard Caution",
      palette: ["#ef4444", "#f5b800", "#18181b", "#ffffff"],
      specs: "Adobe Photoshop • Rim Light Brush • Frequency Separation Retouch",
      description:
        "Designed to trigger instant emotional curiosity with extreme rim lighting, contrasting yellow tape banners, and high-contrast facial expressions.",
      image: "/assets/thumbnails/harsh_reality_vlog.jpg",
    },
    {
      id: "thumb-5",
      title: "Most Shocking Stories",
      subtitle: "Tabloid newspaper collage layout with distressed paper cutouts & crimson mystery typography",
      views: "1.4M Views",
      category: "Editorial Mystery",
      badge: "Newspaper Collage",
      palette: ["#f43f5e", "#fef08a", "#09090b", "#ffffff"],
      specs: "Adobe Photoshop + Figma • Ripped Paper Mask & Distressed Serif Typography",
      description:
        "Tabloid newspaper headline layout with distressed paper textures, bold vintage serif headlines, and high-drama character lighting.",
      image: "/assets/thumbnails/shocking_stories.jpg",
    },
  ];

  const handleOpen = (item: ThumbnailItem) => {
    sound.click(1100);
    setActiveModal(item);
  };

  const handleClose = () => {
    sound.pop();
    setActiveModal(null);
  };

  return (
    <section id="vol-04" className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      {/* Widescreen Left Margin Studio Rulers & Calibration Targets (Visible on 2XL screens) */}
      <div className="hidden 2xl:flex flex-col items-center justify-between absolute left-4 top-24 bottom-24 w-8 font-mono text-[9px] text-zinc-400 select-none pointer-events-none border-r border-dashed border-black/15 pr-2">
        <span className="rotate-90 origin-center tracking-widest uppercase">REGISTRATION: 0.1PT</span>
        <div className="flex flex-col gap-1 items-center">
          <span className="w-2.5 h-2.5 rounded-full border border-black/30 flex items-center justify-center text-[7px]">⌖</span>
          <span className="w-1.5 h-1.5 bg-[#f5b800] rounded-full" />
          <span className="w-1.5 h-1.5 bg-[#0052ff] rounded-full" />
          <span className="w-1.5 h-1.5 bg-[#e63946] rounded-full" />
        </div>
        <span className="rotate-90 origin-center tracking-widest uppercase">VOL // 04</span>
      </div>

      {/* Widescreen Right Margin Studio Rulers & Calibration Targets */}
      <div className="hidden 2xl:flex flex-col items-center justify-between absolute right-4 top-24 bottom-24 w-8 font-mono text-[9px] text-zinc-400 select-none pointer-events-none border-l border-dashed border-black/15 pl-2">
        <span className="-rotate-90 origin-center tracking-widest uppercase">16:9 // SOCIAL</span>
        <div className="flex flex-col gap-1 items-center">
          <span className="w-2.5 h-2.5 rounded-full border border-black/30 flex items-center justify-center text-[7px]">⊕</span>
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
        </div>
        <span className="-rotate-90 origin-center tracking-widest uppercase">VIRAL CTR 14%</span>
      </div>

      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* =========================================================
            HEADER: CLAPPERBOARD & FILM REEL + STYLED TITLE
            ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b-2 border-black/15 pb-8">
          
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Movie Clapperboard Sticker */}
            <div
              onClick={() => sound.pop()}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#16161a] rounded-2xl border-2 border-black p-2 shadow-[3px_3px_0px_#000000] -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              <Clapperboard className="w-6 h-6 sm:w-7 sm:h-7 text-[#f5b800]" />
            </div>

            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                <span>VOL — 04 ARCHIVE</span>
                <span>✦</span>
                <span className="text-[#0052ff] font-bold">MEDIA & SOCIAL</span>
              </div>
              <h2 className="font-marker text-3xl sm:text-5xl md:text-6xl text-[#0f1012] tracking-wide leading-tight">
                Thumbnail Design
              </h2>
            </div>
          </div>

          {/* View Mode Toggle: 2-Col Cinematic vs 3-Col Grid */}
          <div className="flex items-center gap-2 bg-white px-2 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000000]">
            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setColumns(2);
              }}
              className={`px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                columns === 2
                  ? "bg-[#0f1012] text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              CINEMATIC (2-COL)
            </button>
            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setColumns(3);
              }}
              className={`px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                columns === 3
                  ? "bg-[#0f1012] text-white shadow-xs"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              COMPACT (3-COL)
            </button>
          </div>

        </div>

        {/* =========================================================
            CLEAN, UNOBSTRUCTED BEHANCE SHOWCASE GRID
            ========================================================= */}
        <div
          className={`grid gap-8 sm:gap-10 ${
            columns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {thumbnails.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              className="group cursor-pointer select-none"
            >
              {/* 16:9 Artwork Container: 100% CLEAN & UNOBSTRUCTED */}
              <div className="relative aspect-16/9 w-full bg-[#111114] rounded-2xl border-3 border-black shadow-[6px_6px_0px_#000000] group-hover:shadow-[9px_9px_0px_#f5b800] group-hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                
                {/* The Pure Image Artwork (No Clashing HTML Text Plastered Over It!) */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  unoptimized
                />

                {/* Subtle Hover Reveal Glass Pill */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="px-5 py-2.5 rounded-full bg-black/85 text-white border-2 border-white/60 shadow-lg font-syne font-bold text-xs uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4 text-[#f5b800]" />
                    <span>INSPECT FULL ARTWORK</span>
                  </div>
                </div>

                {/* Subtle Category Stamp on Bottom Right of Image */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md font-mono text-[10px] font-bold border border-white/20 opacity-90 group-hover:opacity-0 transition-opacity uppercase tracking-wider">
                  {item.views}
                </div>

              </div>

              {/* Clean Typographic Caption Underneath (No fighting with the image) */}
              <div className="mt-3.5 px-1 flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-syne font-black text-lg sm:text-xl text-[#0f1012] group-hover:text-[#0052ff] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-space text-xs text-zinc-600 mt-0.5 line-clamp-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>

                <div className="shrink-0 font-mono text-[11px] font-bold text-zinc-500 group-hover:text-black flex items-center gap-1 uppercase">
                  <span>SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* =========================================================
            FULL-SCREEN HIGH-RES LIGHTBOX MODAL
            ========================================================= */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-4xl bg-[#f6f5f0] rounded-3xl border-3 border-black shadow-[14px_14px_0px_#000000] p-6 sm:p-8 overflow-hidden select-text"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-5 right-5 w-10 h-10 bg-black text-white hover:bg-[#e63946] rounded-full border-2 border-black flex items-center justify-center transition-colors cursor-pointer z-20 shadow-[2px_2px_0px_#ffffff]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Clean Image Viewport */}
              <div className="relative aspect-16/9 w-full bg-black rounded-2xl border-3 border-black overflow-hidden shadow-inner">
                <Image
                  src={activeModal.image}
                  alt={activeModal.title}
                  fill
                  className="object-contain object-center"
                  unoptimized
                />
              </div>

              {/* Details & Production Strategy */}
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black/10 pb-4">
                  <div>
                    <span className="font-mono text-xs uppercase font-bold text-[#f5b800] bg-black px-2.5 py-1 rounded border border-black inline-block mb-1">
                      {activeModal.category}
                    </span>
                    <h3 className="font-syne font-black text-2xl sm:text-3xl text-black uppercase">
                      {activeModal.title}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-bold bg-[#0052ff] text-white px-3.5 py-1.5 rounded-full border border-black shadow-xs">
                    {activeModal.views}
                  </span>
                </div>

                <p className="font-space text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
                  {activeModal.description}
                </p>

                {/* Software & Technical Specs */}
                <div className="p-3.5 bg-white rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-wrap items-center justify-between gap-2">
                  <div className="font-mono text-xs text-zinc-700">
                    <strong className="text-black">SPECS:</strong> {activeModal.specs}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-zinc-500 uppercase">PALETTE:</span>
                    {activeModal.palette.map((hex, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/50"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
}
