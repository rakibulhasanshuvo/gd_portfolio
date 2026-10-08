"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Eye, 
  Printer
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import DuctTapeBanner from "./DuctTapeBanner";
import ProjectModal from "./ProjectModal";

type PrintFilter = "all" | "posters" | "hospitality" | "retail";

export default function Vol03PrintShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<PrintFilter>("all");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // All print projects
  const printProjects = PROJECTS.filter((p) => p.category === "print");

  // Filtered print list
  const filteredProjects = printProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "posters") {
      return ["echo-chamber-poster", "club-poster"].includes(p.id);
    }
    if (filter === "hospitality") {
      return ["buffet-flyer", "atelier-bakery-menu", "black-gold-menu"].includes(p.id);
    }
    if (filter === "retail") {
      return ["adeline-architecture", "summer-sale-poster", "corporate-flyer"].includes(p.id);
    }
    return true;
  });

  const handleOpenModal = (project: Project) => {
    sound.click(1100);
    setSelectedProject(project);
  };

  const handleCopyColor = (color: string) => {
    sound.click(1250);
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1600);
  };

  return (
    <section id="vol-03" className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      {/* Widescreen Studio Left Margin Rulers (CMYK density targets) */}
      <div className="hidden 2xl:flex flex-col items-center justify-between absolute left-4 top-24 bottom-24 w-8 font-mono text-[9px] text-zinc-400 select-none pointer-events-none border-r border-dashed border-black/15 pr-2">
        <span className="rotate-90 origin-center tracking-widest uppercase">REGISTRATION: 0.1PT</span>
        <div className="flex flex-col gap-1.5 items-center">
          <span className="w-2.5 h-2.5 rounded-full border border-black/30 flex items-center justify-center text-[7px]">⌖</span>
          <span className="w-2 h-2 bg-[#00ffff] rounded-full border border-black/20" title="Cyan" />
          <span className="w-2 h-2 bg-[#ff00ff] rounded-full border border-black/20" title="Magenta" />
          <span className="w-2 h-2 bg-[#ffff00] rounded-full border border-black/20" title="Yellow" />
          <span className="w-2 h-2 bg-[#000000] rounded-full border border-black/20" title="Key/Black" />
        </div>
        <span className="rotate-90 origin-center tracking-widest uppercase">VOL // 03</span>
      </div>

      {/* Widescreen Studio Right Margin Rulers */}
      <div className="hidden 2xl:flex flex-col items-center justify-between absolute right-4 top-24 bottom-24 w-8 font-mono text-[9px] text-zinc-400 select-none pointer-events-none border-l border-dashed border-black/15 pl-2">
        <span className="-rotate-90 origin-center tracking-widest uppercase">DPI: 300 // CMYK</span>
        <div className="flex flex-col gap-1 items-center">
          <span className="w-2.5 h-2.5 rounded-full border border-black/30 flex items-center justify-center text-[7px]">⊕</span>
          <span className="w-1.5 h-1.5 bg-[#e11d48] rounded-full" />
        </div>
        <span className="-rotate-90 origin-center tracking-widest uppercase">PRINT RUN PROOF</span>
      </div>

      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* =========================================================
            HEADER: "VOL — 03" INKY BADGE + TITLE
            ========================================================= */}
        <div className="text-center pb-12 sm:pb-16">
          
          {/* Comic Sparkles + Inky Distressed Vol-03 Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
            <div className="inline-block bg-[#e11d48] text-white px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] -rotate-1">
              <span className="font-chakra font-black tracking-widest text-lg sm:text-xl uppercase">
                VOL — 03
              </span>
            </div>
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
          </div>

          {/* Marker Display Headline */}
          <h2 className="font-marker text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0f1012] tracking-wide mt-4 drop-shadow-sm">
            Posters & Luxury Print
          </h2>

          {/* Subtitle with Highlighting */}
          <p className="font-mono text-xs sm:text-sm md:text-base text-zinc-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Large-format screen prints, underground music festivals, commercial F&B promotional flyers, and tactile editorial menu cards calibrated for zero-bleed press runs.
          </p>

          {/* Duct Tape Technical Spec Banner */}
          <div className="mt-8 flex justify-center">
            <DuctTapeBanner label="A1/A2 LARGE FORMAT • CMYK EUROSCALE • SPOT PANTONE • 3MM BLEED CALIBRATION" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setFilter("all");
              }}
              className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer border-2 border-black ${
                filter === "all"
                  ? "bg-[#0f1012] text-white shadow-[3px_3px_0px_#000000]"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 shadow-[2px_2px_0px_#000000]"
              }`}
            >
              ALL PRINT WORKS ({printProjects.length})
            </button>

            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setFilter("posters");
              }}
              className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer border-2 border-black ${
                filter === "posters"
                  ? "bg-[#0f1012] text-white shadow-[3px_3px_0px_#000000]"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 shadow-[2px_2px_0px_#000000]"
              }`}
            >
              EVENT & MUSIC POSTERS (2)
            </button>

            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setFilter("hospitality");
              }}
              className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer border-2 border-black ${
                filter === "hospitality"
                  ? "bg-[#0f1012] text-white shadow-[3px_3px_0px_#000000]"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 shadow-[2px_2px_0px_#000000]"
              }`}
            >
              HOSPITALITY & MENUS (3)
            </button>

            <button
              type="button"
              onClick={() => {
                sound.click(900);
                setFilter("retail");
              }}
              className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer border-2 border-black ${
                filter === "retail"
                  ? "bg-[#0f1012] text-white shadow-[3px_3px_0px_#000000]"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 shadow-[2px_2px_0px_#000000]"
              }`}
            >
              EXHIBITION & B2B (3)
            </button>
          </div>

        </div>

        {/* =========================================================
            POSTERS & FLYERS 4-COLUMN RESPONSIVE GRID
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group bg-white rounded-2xl border-2 border-black shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1.5 transition-all duration-200 cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Card Header Bar */}
              <div className="bg-[#f0eee6] border-b-2 border-black px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black bg-black text-[#f5b800] px-2 py-0.5 rounded-sm">
                    {project.code}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-600 truncate max-w-[150px]">
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
                  <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase">
                    300 DPI
                  </span>
                </div>
              </div>

              {/* Poster Display Area (Vertical 3:4 Aspect Ratio) */}
              <div className="relative aspect-[3/4.2] w-full bg-[#18181b] overflow-hidden flex items-center justify-center p-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-black/20 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={project.primaryImage}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  {/* Subtle Paper Grain Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="bg-white text-black px-4 py-2 rounded-full border-2 border-black font-mono text-xs font-bold shadow-[3px_3px_0px_#000000] flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#e11d48]" />
                    <span>INSPECT PREPRESS</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/90 bg-black/60 px-2.5 py-1 rounded-md">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta & Specifications */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t-2 border-black">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
                    {project.categoryLabel}
                  </div>
                  <h3 className="font-chakra font-black text-lg text-black mt-1 line-clamp-1 group-hover:text-[#e11d48] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-600 mt-1 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Palette Swatches & Quick Specs Strip */}
                <div className="mt-4 pt-3 border-t border-dashed border-zinc-200 flex items-center justify-between">
                  {/* Palette dots */}
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {project.palette.slice(0, 4).map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleCopyColor(c)}
                        title={`Copy ${c}`}
                        className="w-4 h-4 rounded-full border border-black/30 shadow-2xs hover:scale-125 transition-transform cursor-pointer relative"
                        style={{ backgroundColor: c }}
                      >
                        {copiedColor === c && (
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-mono px-1 py-0.5 rounded shadow-sm">
                            Copied
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Print Spec Pill */}
                  <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-black/20">
                    <Printer className="w-3 h-3 text-[#e11d48]" />
                    <span>{project.specs[0]?.value?.split(" ")[0] || "PRINT"}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM STUDIO CALLOUT: CMYK WORKFLOW STATS
            ========================================================= */}
        <div className="mt-16 bg-[#18181b] text-white rounded-2xl border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e11d48] border-2 border-white flex items-center justify-center shrink-0">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-chakra font-black text-xl text-white tracking-wide">
                  PRODUCTION-ENGINEERED PRINT COLLATERAL
                </h4>
                <p className="font-mono text-xs text-zinc-400 mt-1 max-w-2xl">
                  Every poster and commercial flyer is prepared with vector text outlined, 3mm bleed margins, spot color separations, and CMYK Euroscale color management ready for high-volume automated offset and screen presses.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right font-mono">
                <div className="text-2xl font-black text-[#f5b800]">300+ DPI</div>
                <div className="text-[10px] text-zinc-400 uppercase">Prepress Certified</div>
              </div>
              <div className="h-8 w-px bg-zinc-700" />
              <div className="text-right font-mono">
                <div className="text-2xl font-black text-emerald-400">0.0% BLEED</div>
                <div className="text-[10px] text-zinc-400 uppercase">Zero Error Margins</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Prepress Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          allProjects={printProjects}
        />
      )}

    </section>
  );
}
