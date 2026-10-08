"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Eye, 
  Check, 
  Copy, 
  Grid3X3, 
  Maximize2,
  ShieldCheck
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import DuctTapeBanner from "./DuctTapeBanner";
import ProjectModal from "./ProjectModal";

export default function Vol02LogoShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Filter all logo projects
  const logoProjects = PROJECTS.filter((p) => p.category === "logos");

  // Active brand selection inside the showcase
  const [activeBrandId, setActiveBrandId] = useState<string>("created-by-shuvo-logo");

  // View mode inside the active brand hero: "mockup" | "construction" | "scaletest"
  const [viewMode, setViewMode] = useState<"mockup" | "construction" | "scaletest">("mockup");

  // Copied color state for swatches
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Active project
  const currentProject = logoProjects.find((p) => p.id === activeBrandId) || logoProjects[0];

  // Secondary lookbook cards (the other 3 logos)
  const secondaryProjects = logoProjects.filter((p) => p.id !== activeBrandId);

  const handleBrandSelect = (id: string) => {
    sound.click(1050);
    setActiveBrandId(id);
    setViewMode("mockup");
  };

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
    <section id="vol-02" className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* =========================================================
            HEADER: "VOL — 02" INKY BADGE + 3D TITLE
            ========================================================= */}
        <div className="text-center pb-12 sm:pb-16">
          
          {/* Comic Sparkles + Inky Distressed Vol-02 Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
            <div className="inline-block bg-[#0052ff] text-white px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.85)] rotate-1">
              <span className="font-chakra font-black tracking-widest text-lg sm:text-xl uppercase">
                VOL — 02
              </span>
            </div>
            <span className="font-mono text-xl sm:text-2xl text-black font-black select-none">\ | /</span>
          </div>

          {/* 3D Brutalist Angled Title */}
          <div className="mt-4 sm:mt-6">
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase italic drop-shadow-md">
              <span className="extrude-3d-yellow inline-block">Brand</span>{" "}
              <span className="extrude-3d-white inline-block">Identities</span>
              <span className="inline-block ml-3 text-3xl sm:text-5xl not-italic">⚡</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-600 mt-3 font-semibold">
              SWISS PRECISION MONOGRAMS // MODULAR GRIDS // SCALE TESTED 16PX TO SIGNAGE
            </p>
          </div>

        </div>

        {/* =========================================================
            FLAGSHIP HERO STAGE: DYNAMIC IDENTITY MATRIX
            ========================================================= */}
        <div className="relative bg-[#16161a] rounded-3xl border-3 border-black p-6 sm:p-10 lg:p-12 text-white shadow-[10px_10px_0px_#000000] mb-16 overflow-hidden">
          
          {/* Subtle Ambient Blue / Violet Glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#0052ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Brand Switcher Bar (Tabs) */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex flex-wrap items-center gap-2">
              {logoProjects.map((proj) => {
                const isActive = proj.id === activeBrandId;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => handleBrandSelect(proj.id)}
                    className={`px-4 py-2 rounded-xl font-syne font-black text-xs uppercase tracking-wider border-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0052ff] text-white border-black shadow-[3px_3px_0px_#ffffff] -translate-y-0.5"
                        : "bg-[#232328] text-zinc-300 border-zinc-700 hover:bg-[#2d2d34] hover:text-white"
                    }`}
                  >
                    <span>{proj.title.split("—")[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {currentProject.code}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 font-mono text-xs text-[#f5b800] font-bold">
                {currentProject.categoryLabel}
              </span>
            </div>
          </div>

          {/* Main Hero Double-Spread: In-Use Visualizer + Identity Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center relative z-10">
            
            {/* Left Column: Visual Stage (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#0d0d10] rounded-2xl border-2 border-zinc-700 overflow-hidden shadow-2xl group">
                
                {/* Viewport Top Bar: Mode Toggle Buttons */}
                <div className="flex items-center justify-between bg-[#1f1f24] px-4 py-2.5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-xs text-zinc-400 font-medium ml-2 uppercase">
                      STUDIO LOOKBOOK // {viewMode.toUpperCase()}
                    </span>
                  </div>

                  {/* 3 View Mode Tabs */}
                  <div className="flex items-center gap-1 bg-[#121215] p-1 rounded-lg border border-zinc-700/80">
                    <button
                      type="button"
                      onClick={() => {
                        sound.click(950);
                        setViewMode("mockup");
                      }}
                      className={`px-3 py-1 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
                        viewMode === "mockup"
                          ? "bg-[#0052ff] text-white shadow-xs"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      In-Use Mockup
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.click(950);
                        setViewMode("construction");
                      }}
                      className={`px-3 py-1 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
                        viewMode === "construction"
                          ? "bg-[#0052ff] text-white shadow-xs"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Construction & Grid
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.click(950);
                        setViewMode("scaletest");
                      }}
                      className={`px-3 py-1 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
                        viewMode === "scaletest"
                          ? "bg-[#0052ff] text-white shadow-xs"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Scale & Contrast
                    </button>
                  </div>
                </div>

                {/* Stage Canvas */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center p-4 bg-radial from-[#1e1e24] to-[#0d0d10]">
                  
                  {viewMode === "mockup" && (
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-zinc-800 bg-[#16161a]">
                      <Image
                        src={currentProject.mockupImage || currentProject.primaryImage}
                        alt={`${currentProject.title} Mockups`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}

                  {viewMode === "construction" && (
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-zinc-800 bg-[#ffffff]">
                      <Image
                        src={currentProject.constructionImage || currentProject.primaryImage}
                        alt={`${currentProject.title} Construction Grid`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  )}

                  {viewMode === "scaletest" && (
                    <div className="relative w-full h-full rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between bg-[#121215] border border-zinc-800 text-white">
                      
                      {/* Scale Ladder Row */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-6">
                          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold">
                            OPTICAL SCALE LADDER (16PX - 64PX)
                          </span>
                          <span className="font-mono text-xs text-emerald-400 font-bold">
                            PIXEL-PERFECT RENDER
                          </span>
                        </div>

                        <div className="flex items-end justify-around gap-4 py-4 px-2 bg-[#1a1a20] rounded-xl border border-zinc-800">
                          {/* 16px Favicon */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center bg-black/40 rounded-md border border-zinc-700">
                              <Image
                                src={currentProject.primaryImage}
                                alt="16px"
                                width={16}
                                height={16}
                                className="filter brightness-0 invert"
                              />
                            </div>
                            <span className="font-mono text-[11px] text-zinc-400">16 px</span>
                          </div>

                          {/* 24px UI Cut */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center bg-black/40 rounded-md border border-zinc-700">
                              <Image
                                src={currentProject.primaryImage}
                                alt="24px"
                                width={24}
                                height={24}
                                className="filter brightness-0 invert"
                              />
                            </div>
                            <span className="font-mono text-[11px] text-zinc-400">24 px</span>
                          </div>

                          {/* 32px App Header */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 flex items-center justify-center bg-black/40 rounded-md border border-zinc-700">
                              <Image
                                src={currentProject.primaryImage}
                                alt="32px"
                                width={32}
                                height={32}
                                className="filter brightness-0 invert"
                              />
                            </div>
                            <span className="font-mono text-[11px] text-zinc-400">32 px</span>
                          </div>

                          {/* 64px Mobile Icon */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-20 h-20 flex items-center justify-center bg-black/40 rounded-lg border border-zinc-700">
                              <Image
                                src={currentProject.primaryImage}
                                alt="64px"
                                width={64}
                                height={64}
                                className="filter brightness-0 invert"
                              />
                            </div>
                            <span className="font-mono text-[11px] text-zinc-400 font-bold text-white">64 px</span>
                          </div>
                        </div>
                      </div>

                      {/* Positive vs. Negative Contrast Tiles */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {/* Light Ground Positive */}
                        <div className="bg-[#f6f5f0] p-4 rounded-xl border border-black flex flex-col items-center justify-center text-black">
                          <span className="font-mono text-[10px] text-zinc-600 uppercase mb-2 font-bold">
                            Light Ground (Positive)
                          </span>
                          <div className="relative w-full h-16 flex items-center justify-center">
                            <Image
                              src={currentProject.primaryImage}
                              alt="Positive Lockup"
                              fill
                              className="object-contain filter brightness-0"
                            />
                          </div>
                        </div>

                        {/* Dark Ground Reversed */}
                        <div className="bg-[#090a0f] p-4 rounded-xl border border-zinc-700 flex flex-col items-center justify-center text-white">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase mb-2 font-bold">
                            Dark Ground (Reversed)
                          </span>
                          <div className="relative w-full h-16 flex items-center justify-center">
                            <Image
                              src={currentProject.primaryImage}
                              alt="Negative Lockup"
                              fill
                              className="object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Corner Expand Button */}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(currentProject)}
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-black p-2.5 rounded-full shadow-lg border border-black transition-all cursor-pointer group-hover:scale-105"
                    title="Inspect Full Project Modal"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                </div>

                {/* Bottom Footer Caption */}
                <div className="flex items-center justify-between bg-[#19191e] px-4 py-2 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                  <span>VECTOR DIE-LINE &bull; EPS/SVG/PNG OUTLINED</span>
                  <span className="text-[#0052ff] font-bold">SWISS MONOGRAM IDENTITY</span>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Anatomy & Brand Specs (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Badge + Title + Subtitle */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27272a] border border-zinc-700 text-xs font-mono text-[#0052ff] font-bold mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CLIENT: {currentProject.client}</span>
                </div>
                
                <h3 className="font-syne font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                  {currentProject.title}
                </h3>
                
                <p className="font-mono text-xs sm:text-sm text-[#f5b800] mt-1 font-semibold">
                  {currentProject.subtitle}
                </p>
              </div>

              {/* Description Paragraph */}
              <p className="font-space text-sm text-zinc-300 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="bg-[#1c1c22] border border-zinc-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="font-mono text-xs font-bold text-zinc-400 uppercase flex items-center gap-2">
                    <Grid3X3 className="w-3.5 h-3.5 text-[#0052ff]" />
                    <span>TECHNICAL ARCHITECTURE</span>
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 font-bold">VERIFIED SPEC</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  {currentProject.specs.map((spec, i) => (
                    <div key={i} className="bg-[#24242b] p-2.5 rounded-lg border border-zinc-800/80">
                      <span className="text-zinc-400 block text-[10px] uppercase font-semibold">
                        {spec.label}
                      </span>
                      <span className="text-white font-bold block mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Color Palette Swatches */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    COLOR HARMONY MATRIX
                  </span>
                  {copiedColor && (
                    <span className="font-mono text-xs text-emerald-400 flex items-center gap-1 font-bold animate-in fade-in">
                      <Check className="w-3 h-3" /> Copied {copiedColor}!
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {currentProject.palette.map((color, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleCopyColor(color)}
                      title={`Click to copy HEX ${color}`}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#232328] hover:bg-[#2d2d34] border border-zinc-700 transition-all cursor-pointer shadow-xs"
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/30 shadow-inner group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-mono text-xs font-bold text-zinc-200">
                        {color}
                      </span>
                      <Copy className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trigger Modal Full Inspection Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenModal(currentProject)}
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#0052ff] hover:bg-[#0045d8] text-white px-6 py-3.5 rounded-xl font-syne font-black text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#ffffff] hover:shadow-[5px_5px_0px_#ffffff] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>INSPECT FULL SYSTEM // {currentProject.code}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            SECONDARY LOOKBOOK STRIP: REMAINING 3 IDENTITIES
            ========================================================= */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b-2 border-black mb-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-black bg-[#121215] text-white px-2 py-0.5 rounded">
                {"// COMPANION MARKS"}
              </span>
              <h3 className="font-syne font-black text-xl sm:text-2xl uppercase tracking-tight">
                Specialized Identity Systems
              </h3>
            </div>
            <span className="font-mono text-xs text-zinc-600 hidden sm:inline uppercase">
              Click any suite to switch or inspect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleBrandSelect(proj.id)}
                className="group relative bg-white rounded-2xl border-3 border-black p-5 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-[#0052ff] text-white rounded-full">
                    {proj.code}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500 font-bold uppercase">
                    {proj.categoryLabel}
                  </span>
                </div>

                {/* Mockup Preview Area */}
                <div className="relative aspect-[16/10] my-4 rounded-xl overflow-hidden bg-[#16161a] border border-zinc-300 p-2 flex items-center justify-center">
                  <Image
                    src={proj.mockupImage || proj.primaryImage}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title and Meta */}
                <div>
                  <h4 className="font-syne font-black text-lg text-black uppercase tracking-tight group-hover:text-[#0052ff] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="font-mono text-xs text-zinc-600 mt-1 line-clamp-2">
                    {proj.subtitle}
                  </p>

                  {/* Palette dots + Button */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-200">
                    <div className="flex items-center gap-1.5">
                      {proj.palette.map((c, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/30"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>

                    <span className="font-mono text-xs font-bold text-[#0052ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>LOAD SUITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Duct Tape Deco Divider at bottom */}
      <div className="mt-16 sm:mt-20 flex justify-center">
        <DuctTapeBanner label="SWISS MONOGRAMS // PRECISION VECTOR PATHS // 16PX OPTICAL CUTS" rotate={1} />
      </div>

      {/* Global Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          allProjects={PROJECTS}
        />
      )}

    </section>
  );
}
