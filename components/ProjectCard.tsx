"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import BagMockupView from "./BagMockupView";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  viewMode?: "masonry" | "spec";
}

export default function ProjectCard({
  project,
  onOpenModal,
  viewMode = "masonry",
}: ProjectCardProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [logoBg, setLogoBg] = useState<"light" | "dark" | "cobalt">("light");
  
  // 3D tilt coordinates
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || viewMode === "spec") return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const copyColor = (color: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.click(1200);
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const getLogoBgClass = () => {
    switch (logoBg) {
      case "dark":
        return "bg-neutral-900 text-white";
      case "cobalt":
        return "bg-[#0052ff] text-white";
      case "light":
      default:
        return "bg-white text-[#0f1d16]";
    }
  };

  // Spec Sheet View Mode
  if (viewMode === "spec") {
    return (
      <div 
        onClick={() => {
          sound.click(900);
          onOpenModal(project);
        }}
        className="w-full bg-white border border-[#cfdfd4] rounded-2xl p-4 shadow-2xs hover:border-[#b8cfc1] hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[#0f1d16] text-emerald-400 rounded-full">
            {project.code}
          </span>
          <div className="w-16 h-12 relative rounded-xl border border-[#cfdfd4] bg-[#f0f6f2] overflow-hidden flex items-center justify-center p-1">
            <Image
              src={project.primaryImage}
              alt={project.title}
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0f1d16] group-hover:text-[#0052ff] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#5a7366] font-mono">
              Client: {project.client} • {project.categoryLabel}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Swatches */}
          <div className="flex items-center gap-1.5">
            {project.palette.map((color, idx) => (
              <span
                key={idx}
                className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#304439]">
            {project.specs.slice(0, 2).map((s, idx) => (
              <span key={idx} className="bg-[#e6f1ea] px-2.5 py-1 rounded-full border border-[#cfdfd4]">
                {s.label}: <strong>{s.value}</strong>
              </span>
            ))}
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-1.5 bg-[#0f1d16] text-white rounded-full group-hover:bg-[#0052ff] transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>INSPECT</span>
          </button>
        </div>
      </div>
    );
  }

  // Masonry Card View Mode (Standard 3D Interactive Bento Card)
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card-container w-full"
    >
      <div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        onClick={() => {
          sound.click(800);
          onOpenModal(project);
        }}
        className="project-card-inner relative bg-white border border-[#cfdfd4] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-[#b8cfc1] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
      >
        
        {/* Card Header Spec Bar */}
        <div className="flex items-center justify-between border-b border-[#e1ede5] pb-3 mb-4 select-none">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold px-2 py-0.5 bg-[#0f1d16] text-emerald-400 rounded-full">
              {project.code}
            </span>
            <span className="font-mono text-xs font-medium text-[#5a7366]">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#5a7366]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Media Preview Area */}
        <div className="mb-4">
          {project.category === "packaging" ? (
            /* Dedicated Bag Mockup & Vector Blueprint View */
            <BagMockupView project={project} onOpenModal={onOpenModal} />
          ) : project.category === "logos" ? (
            /* Interactive Logo Sandbox View */
            <div className={`relative w-full aspect-[4/3] rounded-2xl border border-[#cfdfd4] ${getLogoBgClass()} p-6 flex flex-col justify-between transition-colors duration-200 overflow-hidden`}>
              
              {/* Background Theme Switcher for Logos */}
              <div 
                className="flex items-center gap-1.5 z-20 self-end bg-black/5 backdrop-blur-xs p-1 rounded-full border border-black/10"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-[10px] font-mono font-semibold px-1.5 uppercase opacity-60">
                  BG:
                </span>
                {(["light", "dark", "cobalt"] as const).map((bg) => (
                  <button
                    key={bg}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.click(1000);
                      setLogoBg(bg);
                    }}
                    className={`w-3.5 h-3.5 rounded-full border transition-transform cursor-pointer ${
                      logoBg === bg ? "scale-125 border-[#0f1d16] ring-1 ring-white" : "border-black/20"
                    } ${
                      bg === "light"
                        ? "bg-white"
                        : bg === "dark"
                        ? "bg-neutral-900"
                        : "bg-[#0052ff]"
                    }`}
                    title={`Test on ${bg} background`}
                  />
                ))}
              </div>

              {/* Logo Vector Image */}
              <div className="relative w-full h-[65%] flex items-center justify-center">
                <Image
                  src={project.primaryImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className={`object-contain transition-all ${
                    logoBg === "dark" || logoBg === "cobalt" ? "filter brightness-125" : ""
                  }`}
                />
              </div>

              {/* Bottom spec caption */}
              <div className="flex items-center justify-between text-[10px] font-mono opacity-60 border-t border-black/5 pt-1.5">
                <span>MATHEMATICAL GRID SYSTEM</span>
                <span className="uppercase text-[9px] font-bold">100% VECTOR</span>
              </div>
            </div>
          ) : (
            /* Print & Poster Media View */
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#cfdfd4] bg-[#f0f6f2] overflow-hidden flex items-center justify-center p-3 group-hover:scale-[1.01] transition-transform">
              <div className="relative w-full h-full rounded-xl shadow-sm overflow-hidden">
                <Image
                  src={project.primaryImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#cfdfd4] bg-white/95 backdrop-blur-xs text-[#0f1d16] shadow-2xs">
                PRINT 300 DPI // CMYK
              </div>
            </div>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-[#0f1d16] group-hover:text-[#0052ff] transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-[#5a7366] font-normal mt-1.5 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Color Palette Swatches (Interactive 1-Click Copy) */}
        <div className="mt-4 pt-3 border-t border-[#e1ede5] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-medium text-[#5a7366]">PALETTE:</span>
            {project.palette.map((color, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => copyColor(color, e)}
                title={`Click to copy ${color}`}
                className="w-5 h-5 rounded-full border border-black/10 shadow-2xs hover:scale-125 transition-transform relative cursor-pointer group/swatch"
                style={{ backgroundColor: color }}
              >
                {copiedColor === color && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0f1d16] text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-40">
                    Copied!
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-[#0052ff] group-hover:translate-x-0.5 transition-transform">
            <span>SPECS</span>
            <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono font-medium px-2.5 py-0.5 bg-[#e6f1ea] text-[#304439] rounded-full border border-[#cfdfd4]"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
