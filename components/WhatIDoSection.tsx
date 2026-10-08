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

          {/* Distressed Headline: "What do i Do? 🔥" */}
          <div className="inline-block relative">
            <h2 className="font-marker text-4xl sm:text-6xl md:text-7xl text-[#0f1012] tracking-wide inline-flex items-center gap-3 drop-shadow-sm">
              <span>What do i Do?</span>
              <span className="text-3xl sm:text-5xl animate-bounce">🔥</span>
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

          {/* Statement Paragraph from Video */}
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="font-space text-base sm:text-xl text-zinc-800 leading-relaxed font-medium">
              <strong className="text-black font-bold">Adobe Photoshop</strong>,{" "}
              <strong className="text-black font-bold">Adobe Illustrator</strong>,{" "}
              <strong className="text-black font-bold">Figma</strong>, and Explore{" "}
              <span className="text-[#0052ff] font-bold">AI tools</span> and try to
              integrate it across visual direction, concept development, packaging
              die-lines, and high-velocity creative exploration.
            </p>
          </div>

          {/* Tool Mastery Badges Trio */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#31a8ff]" />
              <span className="font-syne font-bold text-xs uppercase text-black">
                Photoshop (Photo Manipulation)
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff9a00]" />
              <span className="font-syne font-bold text-xs uppercase text-black">
                Illustrator (Vectors & Prepress)
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border-2 border-black shadow-[3px_3px_0px_#000000]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0acf83]" />
              <span className="font-syne font-bold text-xs uppercase text-black">
                Figma (UI & Mockups)
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
