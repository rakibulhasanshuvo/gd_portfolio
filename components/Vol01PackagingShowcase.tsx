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
  const stylexProject = stripProjects.find((p) => p.id === "stylex-wear-bag") || stripProjects[0];
  const mivaraProject = stripProjects.find((p) => p.id === "mivara-bag");
  const omeProject = stripProjects.find((p) => p.id === "ome-sports-bag");

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
                VOLUME 01: PACKAGING FLEET
              </span>
            </div>
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
          </div>

          {/* 3D Brutalist Angled Title */}
          <div className="mt-4 sm:mt-6">
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase italic drop-shadow-md">
              <span className="extrude-3d-yellow inline-block">Packaging</span>{" "}
              <span className="extrude-3d-white inline-block">Fleet</span>
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
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#f5b800] font-bold">
                FEATURED PACKAGING // PKG-001
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 font-mono text-xs text-emerald-400 font-bold">
                5,000+ RUNS ZERO DEFECT
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

          {/* Asymmetric Curated Lookbook (Breaks generic 3-card symmetry) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Lead Feature Dossier: Stylex Wear (7 Cols) */}
            {stylexProject && (
              <div
                onClick={() => handleOpen(stylexProject)}
                className="lg:col-span-7 group relative cursor-pointer select-none bg-white rounded-3xl border-3 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#0052ff] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Duct Tape Accent on Top Edge */}
                <div className="absolute -top-3 left-10 w-24 h-7 bg-[#f5b800]/90 border border-black/40 -rotate-2 z-20 pointer-events-none shadow-xs" />

                <div>
                  {/* Photo Canvas Container */}
                  <div className="relative aspect-16/10 w-full bg-zinc-950 rounded-2xl overflow-hidden border-2 border-black flex items-center justify-center">
                    {stylexProject.mockupImage ? (
                      <Image
                        src={stylexProject.mockupImage}
                        alt={stylexProject.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-[#f0eee6] p-6 flex items-center justify-center">
                        <Image
                          src={stylexProject.primaryImage}
                          alt={stylexProject.title}
                          fill
                          className="object-contain p-4"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded font-mono text-[11px] tracking-wider uppercase font-bold border border-zinc-700">
                      {stylexProject.code}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-xs text-[#f5b800] px-3 py-1 rounded font-mono text-[11px] tracking-wider uppercase font-bold border border-zinc-800">
                      FEATURED RETAIL SUITE
                    </div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-syne font-bold text-xs uppercase tracking-wider">
                      <Eye className="w-4 h-4 text-[#f5b800]" />
                      <span>INSPECT FULL ARCHITECTURE</span>
                    </div>
                  </div>

                  {/* Typography & Production Context */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-1">
                      <span>{stylexProject.client}</span>
                      <span>{stylexProject.year} · MULTI-LAYER SPOT INKS</span>
                    </div>

                    <h4 className="font-syne font-black text-2xl sm:text-3xl text-[#0f1012] group-hover:text-[#0052ff] transition-colors leading-tight">
                      {stylexProject.title}
                    </h4>

                    <p className="font-space text-sm text-zinc-700 mt-2 leading-relaxed">
                      {stylexProject.subtitle}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-black/10 font-mono text-xs">
                      <div className="bg-[#f6f5f0] p-2.5 rounded-lg border border-black/15">
                        <span className="text-zinc-500 text-[10px] block uppercase font-bold">INK PASSES</span>
                        <span className="font-bold text-[#0f1012]">3 Spot Inks + Base White</span>
                      </div>
                      <div className="bg-[#f6f5f0] p-2.5 rounded-lg border border-black/15">
                        <span className="text-zinc-500 text-[10px] block uppercase font-bold">SUBSTRATE</span>
                        <span className="font-bold text-[#0f1012]">D2W Degradable Polymer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Swatches */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase text-zinc-500 font-bold mr-1">SPOT PALETTE:</span>
                    {stylexProject.palette.map((color, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/40 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#0052ff] uppercase">
                    <span>OPEN DIE-LINE</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            )}

            {/* Companion Dossiers: Mivara & OME Stacked (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {mivaraProject && (
                <div
                  onClick={() => handleOpen(mivaraProject)}
                  className="group relative cursor-pointer select-none bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#0052ff] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative aspect-4/3 sm:aspect-square w-full sm:w-36 bg-zinc-950 rounded-xl overflow-hidden border-2 border-black shrink-0">
                      {mivaraProject.mockupImage ? (
                        <Image
                          src={mivaraProject.mockupImage}
                          alt={mivaraProject.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="200px"
                        />
                      ) : (
                        <div className="relative w-full h-full bg-[#f0eee6] p-2">
                          <Image
                            src={mivaraProject.primaryImage}
                            alt={mivaraProject.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded font-mono text-[9px] font-bold">
                        {mivaraProject.code}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] text-zinc-500 uppercase">
                        {mivaraProject.client}
                      </div>
                      <h4 className="font-syne font-black text-lg sm:text-xl text-black group-hover:text-[#0052ff] transition-colors leading-tight mt-1">
                        {mivaraProject.title}
                      </h4>
                      <p className="font-space text-xs text-zinc-600 mt-1.5 leading-relaxed line-clamp-2">
                        {mivaraProject.subtitle}
                      </p>

                      <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-600 font-medium">Die-cut handle · 200 GSM</span>
                        <span className="text-[#0052ff] font-bold flex items-center gap-0.5">
                          SPECS <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {omeProject && (
                <div
                  onClick={() => handleOpen(omeProject)}
                  className="group relative cursor-pointer select-none bg-white rounded-3xl border-3 border-black p-5 sm:p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#0052ff] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative aspect-4/3 sm:aspect-square w-full sm:w-36 bg-zinc-950 rounded-xl overflow-hidden border-2 border-black shrink-0">
                      {omeProject.mockupImage ? (
                        <Image
                          src={omeProject.mockupImage}
                          alt={omeProject.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="200px"
                        />
                      ) : (
                        <div className="relative w-full h-full bg-[#f0eee6] p-2">
                          <Image
                            src={omeProject.primaryImage}
                            alt={omeProject.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded font-mono text-[9px] font-bold">
                        {omeProject.code}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] text-zinc-500 uppercase">
                        {omeProject.client}
                      </div>
                      <h4 className="font-syne font-black text-lg sm:text-xl text-black group-hover:text-[#0052ff] transition-colors leading-tight mt-1">
                        {omeProject.title}
                      </h4>
                      <p className="font-space text-xs text-zinc-600 mt-1.5 leading-relaxed line-clamp-2">
                        {omeProject.subtitle}
                      </p>

                      <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-600 font-medium">Reinforced gusset poly</span>
                        <span className="text-[#0052ff] font-bold flex items-center gap-0.5">
                          SPECS <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
