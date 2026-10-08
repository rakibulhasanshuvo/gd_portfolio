"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import ProjectModal from "./ProjectModal";

export default function Vol01PackagingShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [heroViewMode, setHeroViewMode] = useState<"mockup" | "vector">("mockup");

  // Flagship Hero Project
  const heroProject = PROJECTS.find((p) => p.id === "offgrid-bag") || PROJECTS[0];

  // Secondary Lookbook Projects with 3D mockups
  const stripProjects = PROJECTS.filter((p) =>
    ["stylex-wear-bag", "mivara-bag", "ome-sports-bag"].includes(p.id)
  );

  const handleOpen = (project: Project) => {
    sound.click(1050);
    setSelectedProject(project);
  };

  return (
    <section id="vol-01" className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* =========================================================
            HEADER: "VOL — 01" DISTRESSED INK BADGE + 3D TITLE
            Authentic match to Behance Frame 06 & 07
            ========================================================= */}
        <div className="text-center pb-12 sm:pb-16">
          
          {/* Comic Sparkles + Inky Distressed Vol-01 Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
            <div className="inline-block bg-[#121215] text-white px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] -rotate-1">
              <span className="font-chakra font-black tracking-widest text-lg sm:text-xl uppercase">
                VOL — 01
              </span>
            </div>
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
          </div>

          {/* 3D Brutalist Angled Title (Matching "Digital Dropout 🔥" in Video) */}
          <div className="mt-4 sm:mt-6">
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase italic drop-shadow-md">
              <span className="extrude-3d-yellow inline-block">Packaging</span>{" "}
              <span className="extrude-3d-white inline-block">Fleet</span>
              <span className="inline-block ml-3 text-3xl sm:text-5xl not-italic">🔥</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-600 mt-3 font-semibold">
              500+ COMMERCIAL SCREEN-PRINT RUNS // ZERO REGISTRATION BLEED
            </p>
          </div>

        </div>

        {/* =========================================================
            FLAGSHIP LOOKBOOK HERO: OFFGRID ADVENTURE TOTE
            Tactile, physical 3D mockup spotlight + Prepress Specs
            ========================================================= */}
        <div className="relative bg-[#16161a] rounded-3xl border-3 border-black p-6 sm:p-10 lg:p-12 text-white shadow-[10px_10px_0px_#000000] mb-16 overflow-hidden">
          
          {/* Subtle Ambient Red/Amber Glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f5b800] font-bold">
                FLAGSHIP COMMERCIAL MASTERWORK // PKG-001
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 font-mono text-xs text-emerald-400 font-bold">
                5,000+ RUNS ZERO BLEED
              </span>
              <span className="px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 font-mono text-xs text-zinc-300 font-bold">
                120 GSM ECO KRAFT
              </span>
            </div>
          </div>

          {/* Main Hero Double-Spread: Photo Spotlight + Editorial Anatomy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center relative z-10">
            
            {/* Left Column: Realistic 3D Mockup / Die-Line Board (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#0d0e11] rounded-2xl border-2 border-zinc-700 p-3 sm:p-5 shadow-2xl overflow-hidden group">
                
                {/* Duct Tape Corners (Tactile Zine Accent) */}
                <div className="absolute -top-3 -left-3 w-16 h-7 bg-[#f5b800]/80 border border-black/40 -rotate-12 z-20 pointer-events-none shadow-sm" />
                <div className="absolute -top-3 -right-3 w-16 h-7 bg-[#f5b800]/80 border border-black/40 rotate-12 z-20 pointer-events-none shadow-sm" />

                {/* Prepress Registration Marks in Corners */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-600 z-10 select-none">⊕ REG-01</div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 z-10 select-none">⊕ REG-02</div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-600 z-10 select-none">⊕ REG-03</div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-zinc-600 z-10 select-none">⊕ REG-04</div>

                {/* View Switcher Controls (Mockup vs Prepress Die-Line) */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 bg-black/85 backdrop-blur-md p-1 rounded-lg border border-zinc-700">
                  <button
                    onClick={() => {
                      sound.click(900);
                      setHeroViewMode("mockup");
                    }}
                    className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                      heroViewMode === "mockup"
                        ? "bg-[#f5b800] text-black shadow-xs"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    3D MOCKUP
                  </button>
                  <button
                    onClick={() => {
                      sound.click(900);
                      setHeroViewMode("vector");
                    }}
                    className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                      heroViewMode === "vector"
                        ? "bg-[#f5b800] text-black shadow-xs"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    DIE-LINE SVG
                  </button>
                </div>

                {/* Artwork Canvas */}
                <div 
                  onClick={() => handleOpen(heroProject)}
                  className="relative aspect-4/3 w-full bg-zinc-950 rounded-xl overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  {heroViewMode === "mockup" ? (
                    <div className="relative w-full h-full">
                      <Image
                        src="/assets/bags/offgrid_mockup_real.jpg"
                        alt="OFFGRID Adventure Packaging 3D Mockup"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-[#f0eee6] p-8 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:14px_14px] opacity-15 pointer-events-none" />
                      <Image
                        src={heroProject.primaryImage}
                        alt="OFFGRID Vector Prepress Die-Line"
                        fill
                        className="object-contain p-6"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 pointer-events-none">
                    <span className="bg-black/90 text-white px-4 py-2 rounded-lg font-syne font-bold text-xs uppercase tracking-wider border border-zinc-700 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#f5b800]" />
                      CLICK FOR DEEP PREPRESS INSPECTION
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Packaging Anatomy & Specs (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="font-mono text-xs text-[#0052ff] font-bold uppercase tracking-wider block mb-1">
                  OFFGRID GEAR & APPAREL // 2025
                </span>
                <h3 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase italic leading-tight">
                  OFFGRID Adventure Packaging
                </h3>
                <p className="font-space text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
                  {heroProject.description}
                </p>
              </div>

              {/* Prepress Technical Spec Grid */}
              <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-850">
                  <span className="text-zinc-400">PRINT METHOD</span>
                  <span className="text-white font-bold">2-Color Spot Screen Print</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-850">
                  <span className="text-zinc-400">SUBSTRATE</span>
                  <span className="text-white font-bold">120 GSM Eco Non-Woven Kraft</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-850">
                  <span className="text-zinc-400">SCREEN MESH</span>
                  <span className="text-[#f5b800] font-bold">100T High Deposit Mesh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">REGISTRATION TOLERANCE</span>
                  <span className="text-emerald-400 font-bold">±0.5mm (Zero Bleed)</span>
                </div>
              </div>

              {/* Spot Color Swatches */}
              <div>
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  SPOT COLOR SEPARATION:
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#121215] px-3 py-1.5 rounded-lg border border-zinc-800">
                    <span className="w-4 h-4 rounded-full bg-[#18181B] border border-zinc-600" />
                    <span className="font-mono text-xs text-zinc-200">PMS Black 6 C</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#121215] px-3 py-1.5 rounded-lg border border-zinc-800">
                    <span className="w-4 h-4 rounded-full bg-[#F97316]" />
                    <span className="font-mono text-xs text-zinc-200">PMS 021 C (Orange)</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleOpen(heroProject)}
                  className="w-full bg-[#f5b800] hover:bg-[#ffc519] text-black font-syne font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#0052ff] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <span>INSPECT PREPRESS DIE-LINE & COLOR SEPARATIONS</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            TACTILE LOOKBOOK GALLERY STRIP (3D MOCKUPS)
            Replaces the 6 boring white boxes with tactile streetwear plates!
            ========================================================= */}
        <div className="mb-8">
          <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-8">
            <div className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0f1012] flex items-center gap-3">
              <span>COMMERCIAL FLEET LOOKBOOK</span>
              <span className="font-mono text-xs font-normal bg-black text-white px-2.5 py-0.5 rounded">
                SERIES 2025
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
              CLICK ANY PLATE FOR PRODUCTION ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stripProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => handleOpen(project)}
                className="group relative cursor-pointer select-none bg-white rounded-2xl border-3 border-black p-4 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#0052ff] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Duct Tape Accent on Top Edge */}
                <div 
                  className={`absolute -top-3 ${
                    idx % 2 === 0 ? "left-8 -rotate-3" : "right-8 rotate-3"
                  } w-16 h-6 bg-[#f5b800]/90 border border-black/40 z-20 pointer-events-none shadow-xs`} 
                />

                <div>
                  {/* Photo Canvas Container */}
                  <div className="relative aspect-4/3 w-full bg-zinc-900 rounded-xl overflow-hidden border-2 border-black flex items-center justify-center">
                    {project.mockupImage ? (
                      <Image
                        src={project.mockupImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-[#f0eee6] p-4 flex items-center justify-center">
                        <Image
                          src={project.primaryImage}
                          alt={project.title}
                          fill
                          className="object-contain p-4"
                          unoptimized
                        />
                      </div>
                    )}

                    {/* Badge: Code */}
                    <div className="absolute top-2.5 right-2.5 bg-black text-white px-2.5 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase font-bold border border-zinc-700">
                      {project.code}
                    </div>

                    {/* Prepress Tag */}
                    <div className="absolute bottom-2.5 left-2.5 bg-black/85 backdrop-blur-xs text-[#f5b800] px-2.5 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase font-bold border border-zinc-800">
                      {project.categoryLabel}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-syne font-bold text-xs uppercase tracking-wider">
                      <Eye className="w-4 h-4 text-[#f5b800]" />
                      <span>INSPECT DIE-LINE</span>
                    </div>
                  </div>

                  {/* Editorial Typography Content */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-1">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h4 className="font-syne font-black text-xl sm:text-2xl text-[#0f1012] group-hover:text-[#0052ff] transition-colors leading-tight">
                      {project.title}
                    </h4>

                    <p className="font-space text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Footer: Color Swatches + Specs Trigger */}
                <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.palette.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs font-bold text-[#0f1012] group-hover:text-[#0052ff] transition-colors uppercase">
                    <span>SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Modal for Deep Inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
          allProjects={PROJECTS}
        />

      </div>

    </section>
  );
}
