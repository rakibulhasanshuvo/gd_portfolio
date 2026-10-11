"use client";

import { useState } from "react";
import { sound } from "@/lib/audio";
import FloatingToolBadge from "./FloatingToolBadge";

export default function WhatIDoSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const skills = [
    { name: "Visual Creative ads", tag: "Marketing" },
    { name: "Branding Concept Design", tag: "Identity" },
    { name: "Art Direction", tag: "Creative" },
    { name: "Screen-Print Packaging", tag: "Industrial" },
    { name: "Manipulation Design", tag: "Imaging" },
    { name: "Thumbnail Design", tag: "Social" },
    { name: "Poster Design", tag: "Print" },
    { name: "Vector Color Separation", tag: "Prepress" },
    { name: "Figma UI Prototyping", tag: "Digital" },
  ];

  const handleTagClick = (name: string) => {
    sound.click(900);
    setSelectedTag(selectedTag === name ? null : name);
  };

  return (
    <section className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Paper Stipple Background */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* =========================================================
            SECTION 1: "WHAT DO I DO? 🔥"
            ========================================================= */}
        <div className="relative text-center pb-16">
          
          {/* Floating Adobe Photoshop 3D Badge (Top Left as in Video) */}
          <div className="absolute left-0 sm:left-6 -top-4 sm:-top-8 z-20">
            <FloatingToolBadge tool="ps" rotate={-10} size="md" />
          </div>

          {/* Headline: "What I Do" */}
          <div className="inline-block relative">
            <h2 className="font-marker text-4xl sm:text-6xl md:text-7xl text-[#0f1012] tracking-wide inline-flex items-center gap-3 drop-shadow-sm">
              <span>What I Do</span>
            </h2>
            <div className="h-1.5 w-3/4 mx-auto bg-[#f5b800] rounded-full mt-2" />
          </div>

          {/* Interactive Floating Skill Pills Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const isSelected = selectedTag === skill.name;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTagClick(skill.name)}
                  className={`px-5 sm:px-7 py-3 rounded-full font-syne font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#0052ff] text-white shadow-[4px_4px_0px_#000000] -translate-y-1"
                      : "bg-white text-[#0f1012] shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-0.5 hover:bg-[#fffdf0]"
                  }`}
                >
                  <span>{skill.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Decorative Divider Line */}
        <div className="w-full border-t-2 border-dashed border-black/15 my-6 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#f6f5f0] px-4 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
            CREATIVE TOOLCHAIN
          </div>
        </div>

        {/* =========================================================
            SECTION 2: "TOOLS I'M FLUENT IN."
            ========================================================= */}
        <div className="relative text-center pt-10">
          
          {/* Floating Adobe Illustrator 3D Badge (Right side as in Video) */}
          <div className="absolute right-0 sm:right-6 top-8 sm:top-2 z-20">
            <FloatingToolBadge tool="ai" rotate={8} size="md" />
          </div>

          {/* Headline: "Tools I'm fluent in." */}
          <h3 className="font-marker text-3xl sm:text-5xl md:text-6xl text-[#0f1012] tracking-wide drop-shadow-xs">
            Tools I&apos;m fluent in.
          </h3>

          {/* Statement Paragraph */}
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="font-space text-base sm:text-xl text-zinc-800 leading-relaxed font-medium">
              <strong className="text-black font-bold">Adobe Photoshop</strong>,{" "}
              <strong className="text-black font-bold">Adobe Illustrator</strong>, and{" "}
              <strong className="text-black font-bold">Figma</strong> across brand identity, screen-print packaging die-lines, and production-ready vector graphics.
            </p>
          </div>

          {/* Integrated Production Toolchain Architecture */}
          <div className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-black shadow-[5px_5px_0px_#000000] p-6 sm:p-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-zinc-200">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                PRODUCTION PIPELINE & TOOL SPECIALIZATION
              </span>
              <span className="font-mono text-[11px] text-zinc-400">
                CALIBRATED FOR COMMERCIAL REPRODUCIBILITY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Illustrator */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#ff9a00] text-black font-mono font-bold text-xs rounded">
                    Ai
                  </span>
                  <h4 className="font-syne font-bold text-base text-black">
                    Vector Engineering
                  </h4>
                </div>
                <p className="font-space text-xs text-zinc-600 leading-relaxed">
                  Screen-print die-lines, spot color channels, trapping margins, and precision bezier curves for high-volume automated presses.
                </p>
              </div>

              {/* Photoshop */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#31a8ff] text-white font-mono font-bold text-xs rounded">
                    Ps
                  </span>
                  <h4 className="font-syne font-bold text-base text-black">
                    Imaging & Texture
                  </h4>
                </div>
                <p className="font-space text-xs text-zinc-600 leading-relaxed">
                  Photo manipulation, texture synthesis, substrate lighting simulation, and high-impact thumbnail composition.
                </p>
              </div>

              {/* Figma */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#0acf83] text-black font-mono font-bold text-xs rounded">
                    Fg
                  </span>
                  <h4 className="font-syne font-bold text-base text-black">
                    Systems & Prototyping
                  </h4>
                </div>
                <p className="font-space text-xs text-zinc-600 leading-relaxed">
                  Design token architectures, interactive component states, typography scale calibration, and client presentation systems.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
