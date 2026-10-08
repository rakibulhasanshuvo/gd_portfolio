"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { sound } from "@/lib/audio";

interface LayerState {
  dieLine: boolean;
  spotColor: boolean;
  keyBlack: boolean;
  substrate: boolean;
}

export default function PrepressVisualizer() {
  const [selectedBag, setSelectedBag] = useState<"offgrid" | "stylex" | "mivara">("offgrid");
  const [layers, setLayers] = useState<LayerState>({
    dieLine: true,
    spotColor: true,
    keyBlack: true,
    substrate: true,
  });

  const bagData = {
    offgrid: {
      name: "OFFGRID Eco Non-Woven Tote",
      code: "PKG-001",
      image: "/assets/bags/OFFGRID.svg",
      substrateColor: "#d8c7a7",
      substrateName: "Natural 120 GSM Eco Kraft",
      spotColorName: "PMS 021 C (Hazard Orange)",
      spotColorHex: "#F97316",
      keyColorName: "PMS Black 6 C",
      keyColorHex: "#18181B",
      tolerance: "±0.3mm Trapping",
      runs: "5,000+ Units Produced",
      mesh: "100T Screen Mesh",
    },
    stylex: {
      name: "Stylex Wear Streetwear Bag",
      code: "PKG-002",
      image: "/assets/bags/stylex_wear.svg",
      substrateColor: "#14151a",
      substrateName: "D2W Matte Black Polymer",
      spotColorName: "PMS 199 C (Crimson Red)",
      spotColorHex: "#E11D48",
      keyColorName: "High-Opacity Base White",
      keyColorHex: "#FFFFFF",
      tolerance: "Zero Bleed Overlap",
      runs: "10,000+ Units Produced",
      mesh: "120T Screen Mesh",
    },
    mivara: {
      name: "Mivara Luxury Retail Bag",
      code: "PKG-003",
      image: "/assets/bags/mivara.svg",
      substrateColor: "#1e222d",
      substrateName: "180 GSM Matte Art Board",
      spotColorName: "Pantone 871 C (Rich Gold)",
      spotColorHex: "#D97706",
      keyColorName: "Pantone Black C",
      keyColorHex: "#0F172A",
      tolerance: "±0.2mm Precision Hairline",
      runs: "3,000 Units Luxury Run",
      mesh: "140T Ultra-Fine Mesh",
    },
  };

  const current = bagData[selectedBag];

  const toggleLayer = (layerName: keyof LayerState) => {
    sound.click(900);
    setLayers((prev) => ({
      ...prev,
      [layerName]: !prev[layerName],
    }));
  };

  return (
    <section id="prepress-visualizer" className="section-deferred py-20 sm:py-28 border-b-2 border-black bg-[#f6f5f0] px-4 sm:px-8 lg:px-12 xl:px-16 relative select-none">
      
      {/* Halftone paper texture */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      <div className="max-w-[1560px] mx-auto relative z-10">
        
        {/* =====================================================================
            DARKROOM WORKSHOP CHASSIS
            Transforms the clinical hospital look into an authentic industrial lab
            ===================================================================== */}
        <div className="bg-[#0e0f13] border-3 border-black rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[12px_12px_0px_#000000] text-white relative overflow-hidden">
          
          {/* Ambient Safe-Light Exposure Glows */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* =====================================================================
              HEADER: BRUTALIST INDUSTRIAL STATUS BAR & HEADLINE
              ===================================================================== */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-xs">
                <span className="px-3 py-1 rounded bg-[#f5b800] text-black font-black uppercase tracking-wider border border-black shadow-[2px_2px_0px_#000000] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-black stroke-black" />
                  <span>PREPRESS EXPOSURE LAB</span>
                </span>
                <span className="text-zinc-400 font-semibold tracking-wider uppercase">
                  [CALIBRATED DIE-LINES & SPOT FILM SEPARATIONS]
                </span>
              </div>

              <h2 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase italic leading-none">
                The Prepress Lab <span className="text-[#f5b800] not-italic">⚡</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-space font-medium leading-relaxed">
                Commercial screen printing demands zero-bleed tolerances. Inspect how multi-layer spot ink plates, film positives, and vector die-lines combine into flawless retail packaging.
              </p>
            </div>

            {/* Bag Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-[#18181d] p-1.5 rounded-xl border border-zinc-700 self-start lg:self-auto shadow-md">
              {(["offgrid", "stylex", "mivara"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    sound.click(1000);
                    setSelectedBag(key);
                  }}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all cursor-pointer ${
                    selectedBag === key
                      ? "bg-[#f5b800] text-black shadow-xs font-black"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {bagData[key].code} {"//"} {key}
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================================
              MAIN WORKBENCH: ALUMINUM SCREEN FRAME + FILM CONTROLLER
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
            
            {/* Left: The Aluminum Silk-Screen Frame Canvas (8 Cols) */}
            <div className="lg:col-span-8 bg-[#18191f] rounded-2xl border-3 border-zinc-700 p-4 sm:p-6 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              
              {/* Corner Aluminum Frame Corner Brackets & Screws */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-800 shadow-inner" />
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-800 shadow-inner" />
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-800 shadow-inner" />
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-zinc-600 border border-zinc-800 shadow-inner" />

              {/* Top Frame Status Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-3 mb-4 select-none px-2">
                <div className="flex items-center gap-3">
                  <span className="text-[#f5b800] font-black text-sm">⊕ REG-01</span>
                  <span className="font-bold text-white uppercase tracking-wider">{current.name}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span>TOLERANCE: <strong className="text-white">{current.tolerance}</strong></span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> CALIBRATED
                  </span>
                </div>
                <span className="text-[#f5b800] font-black text-sm">⊕ REG-02</span>
              </div>

              {/* The Active Exposure Light-Table Substrate Screen */}
              <div
                style={{
                  backgroundColor: layers.substrate ? current.substrateColor : "#090a0d",
                  transition: "background-color 0.3s ease",
                }}
                className="relative flex-1 w-full rounded-xl border-2 border-zinc-800 p-6 sm:p-10 flex items-center justify-center min-h-[360px] sm:min-h-[420px] overflow-hidden shadow-inner"
              >
                {/* Backlit Film Grid when substrate is OFF */}
                {!layers.substrate && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                )}

                {/* Substrate Texture Overlay when substrate is ON */}
                {layers.substrate && (
                  <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 pointer-events-none" />
                )}

                {/* Technical Die-Line Overlay Guides */}
                {layers.dieLine && (
                  <div className="absolute inset-4 border-2 border-dashed border-rose-500/80 pointer-events-none rounded-xl flex flex-col justify-between p-3 z-20">
                    <div className="flex justify-between text-[10px] font-mono text-rose-400 font-bold bg-black/70 px-2 py-0.5 rounded self-start">
                      <span>CUT: DIE-LINE MARGIN (0.5PT)</span>
                    </div>
                    <div className="flex justify-between items-end text-[10px] font-mono">
                      <span className="text-sky-400 font-bold bg-black/70 px-2 py-0.5 rounded">
                        BLEED: +3.00MM SAFETY
                      </span>
                      <span className="text-[#f5b800] font-bold bg-black/70 px-2 py-0.5 rounded">
                        MESH: {current.mesh}
                      </span>
                    </div>
                  </div>
                )}

                {/* Vector Artwork with Layer Visibility Filter */}
                <div
                  style={{
                    opacity: layers.spotColor || layers.keyBlack ? 1 : 0.05,
                    filter: !layers.spotColor
                      ? "grayscale(100%) brightness(0.6)"
                      : !layers.keyBlack
                      ? "sepia(100%) saturate(300%)"
                      : "none",
                    transition: "opacity 0.25s, filter 0.25s",
                  }}
                  className="relative w-full h-[260px] sm:h-[320px] max-w-lg flex items-center justify-center z-10"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 80vw, 700px"
                    className="object-contain filter drop-shadow-md"
                    unoptimized
                  />
                </div>

                {/* Film Mode Indicator Pill */}
                {!layers.substrate && (
                  <div className="absolute top-4 left-4 bg-[#f5b800] text-black font-mono font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-30">
                    FILM POSITIVE MODE (SUBSTRATE BYPASS)
                  </div>
                )}
              </div>

              {/* Bottom Frame Status Readout */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 border-t border-zinc-800 pt-3 mt-4 px-2">
                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 font-bold">ACTIVE PLATES:</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs"
                      style={{ backgroundColor: current.spotColorHex }}
                    />
                    <span className="text-white font-semibold">{current.spotColorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-zinc-600 shadow-xs"
                      style={{ backgroundColor: current.keyColorHex }}
                    />
                    <span className="text-white font-semibold">{current.keyColorName}</span>
                  </div>
                </div>

                <div className="text-emerald-400 font-bold mt-2 sm:mt-0">
                  {current.runs}
                </div>
              </div>

            </div>

            {/* Right: Tactile Industrial Plate Controller (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="bg-[#18191f] border-2 border-zinc-700 rounded-2xl p-6 shadow-xl">
                
                {/* Controller Title */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#f5b800]" />
                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      PLATE SEPARATION CONTROLLER
                    </h3>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* 4 Interactive Film Switches */}
                <div className="space-y-3">
                  
                  {/* 1. Substrate Switch */}
                  <div
                    onClick={() => toggleLayer("substrate")}
                    className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      layers.substrate
                        ? "bg-[#20222b] border-[#f5b800]/50 text-white shadow-xs"
                        : "bg-[#111215] border-zinc-800 text-zinc-500 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-md border border-black/40 shadow-xs shrink-0"
                        style={{ backgroundColor: current.substrateColor }}
                      />
                      <div>
                        <div className="font-mono text-xs font-bold">Substrate Stock</div>
                        <div className="font-mono text-[11px] text-zinc-400">{current.substrateName}</div>
                      </div>
                    </div>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      layers.substrate ? "bg-[#f5b800] text-black" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {layers.substrate ? "ACTIVE" : "BYPASS"}
                    </span>
                  </div>

                  {/* 2. Spot Color Switch */}
                  <div
                    onClick={() => toggleLayer("spotColor")}
                    className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      layers.spotColor
                        ? "bg-[#20222b] border-[#f5b800]/50 text-white shadow-xs"
                        : "bg-[#111215] border-zinc-800 text-zinc-500 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-md border border-black/40 shadow-xs shrink-0"
                        style={{ backgroundColor: current.spotColorHex }}
                      />
                      <div>
                        <div className="font-mono text-xs font-bold">Spot Color Pass</div>
                        <div className="font-mono text-[11px] text-zinc-400">{current.spotColorName}</div>
                      </div>
                    </div>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      layers.spotColor ? "bg-emerald-400 text-black font-black" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {layers.spotColor ? "PASS 1" : "OFF"}
                    </span>
                  </div>

                  {/* 3. Key Black Switch */}
                  <div
                    onClick={() => toggleLayer("keyBlack")}
                    className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      layers.keyBlack
                        ? "bg-[#20222b] border-[#f5b800]/50 text-white shadow-xs"
                        : "bg-[#111215] border-zinc-800 text-zinc-500 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-md border border-zinc-600 shadow-xs shrink-0"
                        style={{ backgroundColor: current.keyColorHex }}
                      />
                      <div>
                        <div className="font-mono text-xs font-bold">Key Color Plate</div>
                        <div className="font-mono text-[11px] text-zinc-400">{current.keyColorName}</div>
                      </div>
                    </div>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      layers.keyBlack ? "bg-emerald-400 text-black font-black" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {layers.keyBlack ? "PASS 2" : "OFF"}
                    </span>
                  </div>

                  {/* 4. Die-Line Switch */}
                  <div
                    onClick={() => toggleLayer("dieLine")}
                    className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      layers.dieLine
                        ? "bg-[#20222b] border-[#f5b800]/50 text-white shadow-xs"
                        : "bg-[#111215] border-zinc-800 text-zinc-500 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-md border-2 border-dashed border-rose-500 bg-black/30 shrink-0" />
                      <div>
                        <div className="font-mono text-xs font-bold">Die-Line Cut Guides</div>
                        <div className="font-mono text-[11px] text-zinc-400">Crease & Bleed Tolerances</div>
                      </div>
                    </div>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      layers.dieLine ? "bg-rose-500 text-white font-bold" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {layers.dieLine ? "VISIBLE" : "HIDDEN"}
                    </span>
                  </div>

                </div>

              </div>

              {/* Technical Verification Card */}
              <div className="bg-[#121318] border-2 border-zinc-800 rounded-2xl p-5 font-mono text-xs text-zinc-300 space-y-2.5">
                <div className="flex items-center gap-2 text-[#f5b800] font-bold pb-2 border-b border-zinc-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>COMMERCIAL PRODUCTION GUARANTEE</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Over 500 commercial bag runs engineered with zero registration bleed defects. Every path is vector-trapped, node-optimized, and stroke-calibrated for high-velocity press runs.
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] text-zinc-500 border-t border-zinc-850">
                  <span>SQUEEGEE: 75 SHORE A</span>
                  <span>INK DEPOSIT: 22μm</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
