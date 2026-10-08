"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Layers, Maximize2 } from "lucide-react";
import { sound } from "@/lib/audio";
import { Project } from "@/data/projects";

interface BagMockupViewProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
  standalone?: boolean;
}

export default function BagMockupView({
  project,
  onOpenModal,
  standalone = false,
}: BagMockupViewProps) {
  // Mode: "mockup" (realistic retail bag) vs "blueprint" (technical vector die-line)
  const [mode, setMode] = useState<"mockup" | "blueprint">("mockup");

  const toggleMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.click(mode === "mockup" ? 1100 : 700);
    setMode(mode === "mockup" ? "blueprint" : "mockup");
  };

  // Determine bag visual style based on mockupType
  const getBagStyles = () => {
    switch (project.mockupType) {
      case "kraft_tote":
        return {
          bagBg: "bg-[#e8decb] border-[#c4b59d]",
          shadow: "shadow-[0_15px_30px_rgba(75,54,33,0.12)]",
          handle: "border-[#8a7250] bg-[#3a2818]/10",
          gusset: "border-r border-[#c4b59d]/60",
          tagColor: "bg-[#7c2d12] text-white",
          label: "KRAFT ECO TOTE",
        };
      case "urban_plastic_tote":
        return {
          bagBg: "bg-[#181a24] border-[#2d3142]",
          shadow: "shadow-[0_20px_40px_rgba(0,0,0,0.25)]",
          handle: "border-[#4a5068] bg-black/40",
          gusset: "border-r border-white/10",
          tagColor: "bg-[#e11d48] text-white",
          label: "STREETWEAR MATTE POLY",
        };
      case "luxury_matte_bag":
        return {
          bagBg: "bg-[#1a1c23] border-[#363a49]",
          shadow: "shadow-[0_20px_45px_rgba(0,0,0,0.2)]",
          handle: "border-[#d97706] bg-[#000000]/60",
          gusset: "border-r border-[#d97706]/30",
          tagColor: "bg-[#d97706] text-black font-bold",
          label: "HAUTE LUXURY ART-CARD",
        };
      case "athletic_poly_bag":
        return {
          bagBg: "bg-[#0b132b] border-[#1c2d5a]",
          shadow: "shadow-[0_18px_35px_rgba(11,19,43,0.25)]",
          handle: "border-[#0052ff] bg-black/50",
          gusset: "border-r border-[#0052ff]/40",
          tagColor: "bg-[#0052ff] text-white",
          label: "ATHLETIC SPORT POLYMER",
        };
      case "white_handle_bag":
      default:
        return {
          bagBg: "bg-[#ffffff] border-[#cfdfd4]",
          shadow: "shadow-[0_15px_30px_rgba(0,0,0,0.06)]",
          handle: "border-[#9ca3af] bg-[#e6f1ea]",
          gusset: "border-r border-[#cfdfd4]",
          tagColor: "bg-[#0369a1] text-white",
          label: "CLEAN TECH CARRIER",
        };
    }
  };

  const style = getBagStyles();

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#cfdfd4] bg-[#f0f6f2] flex items-center justify-center p-4 sm:p-6 group select-none transition-all">
      
      {/* Mode Toggle Pill */}
      <button
        type="button"
        onClick={toggleMode}
        className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-semibold rounded-full border border-[#cfdfd4] bg-white/95 backdrop-blur-xs text-[#0f1d16] shadow-2xs hover:border-[#b8cfc1] hover:shadow-xs active:scale-95 transition-all cursor-pointer"
      >
        {mode === "mockup" ? (
          <>
            <Layers className="w-3 h-3 text-[#0052ff]" />
            <span>MOCKUP</span>
            <span className="text-[10px] text-[#5a7366] font-normal">→ VECTOR</span>
          </>
        ) : (
          <>
            <Eye className="w-3 h-3 text-emerald-600" />
            <span>BLUEPRINT</span>
            <span className="text-[10px] text-[#5a7366] font-normal">→ MOCKUP</span>
          </>
        )}
      </button>

      {/* Substrate Tag on Top Right */}
      <div className="absolute top-3 right-3 z-30 font-mono text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-[#cfdfd4] bg-white/95 backdrop-blur-xs text-[#5a7366] shadow-2xs">
        {mode === "mockup" ? style.label : "DIE-CUT 0.1PT"}
      </div>

      {/* VIEW A: REALISTIC BAG MOCKUP */}
      {mode === "mockup" ? (
        <div className="relative w-[78%] h-[88%] flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-[1.02]">
          
          {/* Die-Cut Handle Cutout */}
          <div className="relative z-20 mb-[-14px]">
            <div className={`w-20 h-7 rounded-full border-2 ${style.handle} shadow-inner flex items-center justify-center`}>
              <div className="w-16 h-3.5 rounded-full bg-[#f0f6f2] border border-black/10" />
            </div>
          </div>

          {/* Bag Body */}
          <div
            className={`relative w-full h-full rounded-md border ${style.bagBg} ${style.shadow} overflow-hidden flex flex-col justify-center items-center p-4`}
          >
            {/* Side Gusset Fold Creases */}
            <div className={`absolute top-0 right-3 bottom-0 w-3 ${style.gusset} pointer-events-none opacity-40`} />
            <div className="absolute top-0 left-3 bottom-0 w-3 border-l border-white/20 pointer-events-none opacity-30" />
            <div className="absolute bottom-3 left-0 right-0 h-3 border-b border-black/15 pointer-events-none" />

            {/* Bag Vector Artwork Centered */}
            <div className="relative w-full h-[75%] flex items-center justify-center p-2">
              <Image
                src={project.primaryImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-contain filter drop-shadow-sm"
              />
            </div>
          </div>

          {/* Ambient Bag Ground Shadow */}
          <div className="w-[85%] h-3 bg-[#0f1d16]/10 rounded-full blur-md mt-1" />
        </div>
      ) : (
        /* VIEW B: TECHNICAL PREPRESS VECTOR BLUEPRINT */
        <div className="relative w-full h-full bg-white border border-dashed border-[#0052ff]/50 rounded-xl p-4 flex flex-col justify-between transition-all duration-300">
          
          {/* Prepress Registration Marks (All 4 Corners) */}
          <span className="reg-mark absolute top-2 left-2 text-[#0052ff]" />
          <span className="reg-mark absolute top-2 right-2 text-[#0052ff]" />
          <span className="reg-mark absolute bottom-2 left-2 text-[#0052ff]" />
          <span className="reg-mark absolute bottom-2 right-2 text-[#0052ff]" />

          {/* Die-Line Calibration Header */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#5a7366] border-b border-[#e1ede5] pb-1 px-4">
            <span className="text-rose-600 font-semibold">--- DIE-CUT (MAGENTA 0.5PT)</span>
            <span className="text-sky-600 font-semibold">··· CREASE (CYAN 0.5PT)</span>
            <span>BLEED: +3.00 MM</span>
          </div>

          {/* Raw Vector Display */}
          <div className="relative flex-1 my-2 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={project.primaryImage}
                alt={`${project.title} raw vector die-line`}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-contain p-1"
              />
            </div>
          </div>

          {/* Color Separation Swatch Test Strip at Bottom */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#0f1d16] border-t border-[#e1ede5] pt-1.5 px-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[9px] text-[#5a7366]">PLATES:</span>
              {project.palette.map((color, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span
                    className="w-3 h-3 rounded-xs border border-neutral-300 shadow-2xs"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[9px] font-mono">{color}</span>
                </div>
              ))}
            </div>

            <span className="text-emerald-600 font-semibold text-[9px] hidden sm:inline">
              ✓ ZERO OVERLAP ERRORS
            </span>
          </div>
        </div>
      )}

      {/* Inspect Deep-Dive Button */}
      {onOpenModal && !standalone && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            sound.click(1200);
            onOpenModal(project);
          }}
          className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 text-[11px] font-mono font-semibold bg-[#0f1d16]/90 hover:bg-[#0052ff] text-white px-3 py-1.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer opacity-90 group-hover:opacity-100"
        >
          <Maximize2 className="w-3 h-3 text-emerald-400" />
          <span>INSPECT</span>
        </button>
      )}

    </div>
  );
}
