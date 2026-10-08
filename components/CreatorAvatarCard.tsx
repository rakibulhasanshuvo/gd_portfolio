"use client";

import { sound } from "@/lib/audio";

interface CreatorAvatarCardProps {
  name?: string;
  role?: string;
  className?: string;
}

export default function CreatorAvatarCard({
  name = "Shuvo",
  role = "Senior Graphic & UI Designer",
  className = "",
}: CreatorAvatarCardProps) {
  return (
    <div className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-10 ${className}`}>
      
      {/* =====================================================================
          PART 1: VECTOR POP-ART DESIGNER AVATAR CARD (MATCHES BEHANCE REFERENCE)
          ===================================================================== */}
      <div
        onClick={() => sound.pop()}
        className="relative group cursor-pointer select-none shrink-0"
        title={`Muhammad Rakibul Hasan ${name} — ${role}`}
      >
        {/* Soft Ambient Card Glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-b from-[#f59e0b] via-[#ea580c] to-[#c2410c] rounded-[38px] blur-lg opacity-40 group-hover:opacity-70 transition duration-300" />

        {/* Amber/Orange Rounded Card */}
        <div className="relative w-52 sm:w-60 md:w-64 h-72 sm:h-80 bg-gradient-to-b from-[#f59e0b] via-[#f97316] to-[#ea580c] rounded-[36px] p-3 border-3 sm:border-4 border-black shadow-[10px_14px_28px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col justify-end transition-transform duration-200 group-hover:-translate-y-1">
          
          {/* Subtle Halftone Stipple Overlay on Card Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:10px_10px] opacity-15 pointer-events-none" />

          {/* Golden Concentric Halo Rings behind Head (Direct match to Behance Frame 04) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border-2 border-amber-200/40 pointer-events-none" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-2 border-amber-200/30 pointer-events-none" />
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border border-amber-200/20 pointer-events-none" />

          {/* Vector Illustrated Pop-Art Portrait */}
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <svg
              viewBox="0 0 220 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-md"
            >
              <defs>
                {/* Natural Warm Pop-Art Skin Gradient */}
                <linearGradient id="skinToneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="40%" stopColor="#fbbf24" />
                  <stop offset="85%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>

                {/* Terracotta Jaw & Neck Shadow Gradient */}
                <linearGradient id="terracottaShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                {/* Hair Gradient */}
                <linearGradient id="pompadourGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#27272a" />
                  <stop offset="40%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>

                {/* Aviator Lens Gradient with Specular Glare */}
                <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>
              </defs>

              {/* Shoulders & Streetwear Crewneck T-Shirt */}
              <path
                d="M 15 270 C 22 210, 60 190, 110 190 C 160 190, 198 210, 205 270 Z"
                fill="#18181b"
                stroke="#000000"
                strokeWidth="4"
              />
              {/* Crewneck Collar Contour */}
              <path
                d="M 82 205 C 95 224, 125 224, 138 205"
                stroke="#fbbf24"
                strokeWidth="3.5"
                fill="none"
              />

              {/* Neck & Muscular Contours */}
              <path
                d="M 88 155 L 88 206 C 96 215, 124 215, 132 206 L 132 155 Z"
                fill="url(#terracottaShadow)"
                stroke="#000000"
                strokeWidth="3.5"
              />
              {/* Neck Center Shading Ridge */}
              <path
                d="M 100 165 C 104 185, 116 185, 120 165"
                stroke="#92400e"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Head / Jaw Contour (Angular, Confident Pop-Art Sculpt) */}
              <path
                d="
                  M 68 95
                  C 65 135, 76 172, 110 176
                  C 144 172, 155 135, 152 95
                  C 152 65, 68 65, 68 95 Z
                "
                fill="url(#skinToneGrad)"
                stroke="#000000"
                strokeWidth="4"
              />

              {/* Cheekbone & Jaw Shading Accents */}
              <path
                d="M 72 110 C 76 138, 90 162, 110 166"
                stroke="#d97706"
                strokeWidth="3.5"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M 148 110 C 144 138, 130 162, 110 166"
                stroke="#d97706"
                strokeWidth="3.5"
                fill="none"
                opacity="0.8"
              />

              {/* Ears */}
              <path
                d="M 64 105 C 54 110, 54 130, 68 132 Z"
                fill="#d97706"
                stroke="#000000"
                strokeWidth="3"
              />
              <path
                d="M 156 105 C 166 110, 166 130, 152 132 Z"
                fill="#d97706"
                stroke="#000000"
                strokeWidth="3"
              />

              {/* Voluminous Layered Pompadour Hair (Detailed Flowing Locks) */}
              <path
                d="
                  M 58 88
                  C 48 64, 62 25, 102 20
                  C 142 15, 166 36, 164 70
                  C 168 82, 160 100, 154 104
                  C 148 94, 142 88, 130 88
                  C 114 88, 108 94, 98 90
                  C 82 86, 72 94, 58 88 Z
                "
                fill="url(#pompadourGrad)"
                stroke="#000000"
                strokeWidth="4"
              />
              {/* Individual Flowing Hair Texture Strands */}
              <path d="M 78 46 C 88 28, 104 32, 108 48" stroke="#52525b" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M 112 36 C 128 24, 146 36, 150 56" stroke="#52525b" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M 88 32 C 102 18, 126 22, 132 38" stroke="#71717a" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M 64 68 C 66 52, 78 48, 86 60" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 144 62 C 154 52, 160 66, 158 80" stroke="#3f3f46" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Trimmed Beard & Mustache Pop-Art Contour */}
              <path
                d="
                  M 78 132
                  C 78 158, 92 176, 110 176
                  C 128 176, 142 158, 142 132
                  C 138 144, 126 150, 110 150
                  C 94 150, 82 144, 78 132 Z
                "
                fill="#18181b"
                stroke="#000000"
                strokeWidth="3"
              />
              {/* Mustache */}
              <path
                d="M 94 140 Q 110 146 126 140 Q 110 134 94 140 Z"
                fill="#18181b"
                stroke="#000000"
                strokeWidth="2"
              />

              {/* Sleek Dark Aviator Sunglasses (With Specular Light Glares) */}
              <g id="aviator-sunglasses">
                {/* Brow Bar & Double Bridge */}
                <line x1="102" y1="98" x2="118" y2="98" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                <line x1="103" y1="94" x2="117" y2="94" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="104" y1="94" x2="116" y2="94" stroke="#fbbf24" strokeWidth="1" strokeLinecap="round" />

                {/* Left Aviator Lens */}
                <path
                  d="M 76 96 L 103 96 C 105 116, 100 128, 89 128 C 78 128, 74 116, 76 96 Z"
                  fill="url(#lensGrad)"
                  stroke="#000000"
                  strokeWidth="3.5"
                />
                {/* Left Lens Specular Light Streaks */}
                <line x1="82" y1="102" x2="93" y2="102" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <line x1="80" y1="108" x2="87" y2="108" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" opacity="0.5" />

                {/* Right Aviator Lens */}
                <path
                  d="M 117 96 L 144 96 C 146 116, 142 128, 131 128 C 120 128, 115 116, 117 96 Z"
                  fill="url(#lensGrad)"
                  stroke="#000000"
                  strokeWidth="3.5"
                />
                {/* Right Lens Specular Light Streaks */}
                <line x1="123" y1="102" x2="134" y2="102" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <line x1="121" y1="108" x2="128" y2="108" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" opacity="0.5" />
              </g>

              {/* Nose Bridge Contour & Highlights */}
              <path d="M 110 116 L 108 128 L 114 130" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 108 116 L 107 125" stroke="#fde047" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

              {/* Confident Smile Line */}
              <path d="M 101 146 Q 110 152 119 146" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Bottom Card Label */}
          <div className="relative z-20 bg-black/90 text-white py-1 px-3 rounded-lg text-center font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase border border-amber-400/40 shadow-sm">
            <span>VOL // 2026 ARCHIVE</span>
          </div>

        </div>
      </div>

      {/* =====================================================================
          PART 2: EDITORIAL GREETING, COLLAGE BADGES, & EXPERIENCE STATEMENT
          ===================================================================== */}
      <div className="flex-1 flex flex-col justify-center text-left min-w-0">
        
        {/* =====================================================================
            "Hi! I'm Shuvo" — TALL CONDENSED CHAMFERED ZINE HEADLINE
            Matches PortfolioHeadline geometry and inner woodcut sketch hatching
            ===================================================================== */}
        <div className="relative">
          <svg
            viewBox="0 0 520 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[460px] h-auto drop-shadow-[2px_4px_0px_rgba(0,0,0,0.85)] overflow-visible"
          >
            <defs>
              {/* Inner Hatch Pattern matching PortfolioHeadline */}
              <pattern
                id="shuvoSketchHatch"
                width="7"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(12)"
              >
                <line x1="2" y1="0" x2="2" y2="10" stroke="#ffffff" strokeWidth="0.9" opacity="0.45" />
              </pattern>
            </defs>

            {/* Line 1: "Hi!" */}
            <g id="heading-hi">
              {/* H */}
              <g id="letter-H">
                <path
                  d="M 10 10 L 28 10 L 28 32 L 52 32 L 52 10 L 70 10 L 70 60 L 52 60 L 52 44 L 28 44 L 28 60 L 10 60 Z"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M 10 10 L 28 10 L 28 32 L 52 32 L 52 10 L 70 10 L 70 60 L 52 60 L 52 44 L 28 44 L 28 60 L 10 60 Z"
                  fill="url(#shuvoSketchHatch)"
                />
                <line x1="19" y1="16" x2="19" y2="54" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
                <line x1="61" y1="16" x2="61" y2="54" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
              </g>

              {/* i */}
              <g id="letter-i-hi" transform="translate(78, 0)">
                {/* Chamfered Tittle Dot */}
                <path d="M 4 10 L 20 10 L 24 14 L 24 22 L 20 26 L 4 26 Z" fill="#121215" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" />
                <path d="M 4 10 L 20 10 L 24 14 L 24 22 L 20 26 L 4 26 Z" fill="url(#shuvoSketchHatch)" />
                {/* Stem */}
                <path d="M 4 32 L 22 32 L 22 60 L 4 60 Z" fill="#121215" stroke="#000000" strokeWidth="2.5" strokeLinejoin="bevel" />
                <path d="M 4 32 L 22 32 L 22 60 L 4 60 Z" fill="url(#shuvoSketchHatch)" />
                <line x1="13" y1="36" x2="13" y2="56" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
              </g>

              {/* ! */}
              <g id="exclamation" transform="translate(112, 0)">
                <polygon points="4,10 24,10 18,44 10,44" fill="#121215" stroke="#000000" strokeWidth="2.5" strokeLinejoin="bevel" />
                <polygon points="4,10 24,10 18,44 10,44" fill="url(#shuvoSketchHatch)" />
                <rect x="7" y="50" width="14" height="10" fill="#121215" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" />
                <rect x="7" y="50" width="14" height="10" fill="url(#shuvoSketchHatch)" />
              </g>
            </g>

            {/* Line 2: "I'm Shuvo" */}
            <g id="heading-im-shuvo" transform="translate(0, 68)">
              {/* Letter I */}
              <g id="letter-I">
                <path d="M 10 8 L 26 8 L 26 62 L 10 62 Z" fill="#121215" stroke="#000000" strokeWidth="2.5" strokeLinejoin="bevel" />
                <path d="M 10 8 L 26 8 L 26 62 L 10 62 Z" fill="url(#shuvoSketchHatch)" />
                <line x1="18" y1="14" x2="18" y2="56" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
              </g>

              {/* Apostrophe ' */}
              <polygon points="32,8 40,8 36,22 29,22" fill="#121215" stroke="#000000" strokeWidth="1.5" />

              {/* Letter m */}
              <g id="letter-m" transform="translate(44, 0)">
                <path
                  d="M 6 22 L 20 22 L 20 28 L 32 22 L 44 28 L 44 22 L 58 22 L 58 62 L 44 62 L 44 36 L 36 42 L 36 62 L 22 62 L 22 36 L 14 42 L 14 62 L 0 62 L 0 22 Z"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M 6 22 L 20 22 L 20 28 L 32 22 L 44 28 L 44 22 L 58 22 L 58 62 L 44 62 L 44 36 L 36 42 L 36 62 L 22 62 L 22 36 L 14 42 L 14 62 L 0 62 L 0 22 Z"
                  fill="url(#shuvoSketchHatch)"
                />
              </g>

              {/* Letter S (Capital, Street Chisel) */}
              <g id="letter-S" transform="translate(118, 0)">
                <path
                  d="
                    M 8 22
                    L 42 22
                    L 50 30
                    L 50 38
                    L 24 38
                    L 24 42
                    L 46 44
                    L 50 50
                    L 50 62
                    L 14 62
                    L 6 54
                    L 6 46
                    L 32 46
                    L 32 42
                    L 10 40
                    L 6 34
                    Z
                  "
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M 8 22 L 42 22 L 50 30 L 50 38 L 24 38 L 24 42 L 46 44 L 50 50 L 50 62 L 14 62 L 6 54 L 6 46 L 32 46 L 32 42 L 10 40 L 6 34 Z"
                  fill="url(#shuvoSketchHatch)"
                />
              </g>

              {/* Letter h */}
              <g id="letter-h" transform="translate(176, 0)">
                <path
                  d="M 6 8 L 22 8 L 22 30 L 40 30 L 46 36 L 46 62 L 30 62 L 30 42 L 22 42 L 22 62 L 6 62 Z"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M 6 8 L 22 8 L 22 30 L 40 30 L 46 36 L 46 62 L 30 62 L 30 42 L 22 42 L 22 62 L 6 62 Z"
                  fill="url(#shuvoSketchHatch)"
                />
                <line x1="14" y1="14" x2="14" y2="56" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
              </g>

              {/* Letter u */}
              <g id="letter-u" transform="translate(230, 0)">
                <path
                  d="M 6 22 L 22 22 L 22 46 L 30 46 L 30 22 L 46 22 L 46 62 L 14 62 L 6 54 Z"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M 6 22 L 22 22 L 22 46 L 30 46 L 30 22 L 46 22 L 46 62 L 14 62 L 6 54 Z"
                  fill="url(#shuvoSketchHatch)"
                />
              </g>

              {/* Letter v */}
              <g id="letter-v" transform="translate(284, 0)">
                <polygon
                  points="2,22 18,22 26,52 34,22 50,22 36,62 16,62"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <polygon points="2,22 18,22 26,52 34,22 50,22 36,62 16,62" fill="url(#shuvoSketchHatch)" />
              </g>

              {/* Letter o */}
              <g id="letter-o" transform="translate(342, 0)">
                <path
                  d="M 6 22 L 38 22 L 46 30 L 46 54 L 38 62 L 6 62 L -2 54 L -2 30 Z"
                  fill="#121215"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinejoin="bevel"
                />
                <rect x="12" y="32" width="20" height="20" fill="#f6f5f0" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" />
                <path
                  d="M 6 22 L 38 22 L 46 30 L 46 54 L 38 62 L 6 62 L -2 54 L -2 30 Z M 12 32 L 32 32 L 32 52 L 12 52 Z"
                  fill="url(#shuvoSketchHatch)"
                  fillRule="evenodd"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* =====================================================================
            EDITORIAL GLASSMORPHIC BADGES (MATCHES BEHANCE FRAME 04)
            ===================================================================== */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-4">
          {/* Dark Glass Plate 1 */}
          <div className="px-4 py-2 bg-[#121215] text-white font-syne font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-zinc-700 shadow-[3px_3px_0px_#000000] flex items-center gap-2">
            <span>{role}</span>
          </div>

          {/* Frosted Translucent Plate 2 */}
          <div className="px-3.5 py-2 bg-black/5 hover:bg-black/10 backdrop-blur-md text-[#18181b] font-syne font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-black/15 shadow-[2px_2px_0px_#000000] flex items-center gap-2">
            <span>Visual Storyteller</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Yellow Streetwear Accent Badge */}
          <div className="px-3 py-1.5 bg-[#f5b800] text-black font-mono font-bold text-[11px] uppercase rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000]">
            Screen-Print & Brand
          </div>
        </div>

        {/* =====================================================================
            EXPERIENCE STAT CALLOUT + AUTHENTIC PHOTOCOPY LAPTOP STICKER
            Direct 1:1 match to Behance Frame 04: "WITH 500+ RUNS of experience..."
            ===================================================================== */}
        <div className="mt-7 pt-5 border-t-2 border-black/15 flex flex-col sm:flex-row sm:items-center gap-6">
          
          {/* Authentic Halftone Photocopy Laptop Collage Sticker */}
          <div
            className="shrink-0 group cursor-pointer"
            onClick={() => sound.click(800)}
            title="Design Workflow — Figma, Illustrator & Prepress"
          >
            <div className="relative p-2 bg-white rounded-2xl border-2 sm:border-3 border-black shadow-[5px_7px_16px_rgba(0,0,0,0.35)] -rotate-3 transition-transform duration-200 group-hover:rotate-0 group-hover:scale-105">
              <svg
                viewBox="0 0 130 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-28 sm:w-32 h-auto"
              >
                {/* Halftone Laptop Screen in Perspective */}
                <path
                  d="M 12 12 L 102 6 L 108 44 L 20 50 Z"
                  fill="#18181b"
                  stroke="#000000"
                  strokeWidth="2"
                />
                {/* Screen Display Content with Vector Grid */}
                <path
                  d="M 16 16 L 98 11 L 104 42 L 23 47 Z"
                  fill="#27272a"
                />
                <line x1="26" y1="22" x2="88" y2="18" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="28" x2="72" y2="25" stroke="#f5b800" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="30" y1="34" x2="94" y2="30" stroke="#a1a1aa" strokeWidth="1" strokeLinecap="round" />

                {/* Laptop Keyboard Base in Perspective */}
                <path
                  d="M 6 52 L 108 45 L 124 74 L 16 80 Z"
                  fill="#e4e4e7"
                  stroke="#000000"
                  strokeWidth="2"
                />
                {/* Keyboard Grid Keys */}
                <path
                  d="M 16 54 L 102 48 L 112 66 L 24 71 Z"
                  fill="#3f3f46"
                />
                {/* Trackpad */}
                <polygon points="56,71 78,70 82,77 58,78" fill="#d4d4d8" stroke="#000000" strokeWidth="1" />

                {/* Halftone Stippled Human Hands Typing on Keyboard */}
                {/* Left Hand & Wrist */}
                <path
                  d="M 4 82 C 10 70, 22 66, 36 68 C 42 70, 48 64, 46 62 C 40 60, 32 62, 24 64 Z"
                  fill="#18181b"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
                {/* Right Hand & Fingers */}
                <path
                  d="M 86 62 C 92 60, 102 62, 108 66 C 118 68, 126 78, 126 84 Z"
                  fill="#18181b"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
                {/* Paper Sticker Cutout Edge Accents */}
                <circle cx="20" cy="20" r="1.5" fill="#38bdf8" />
                <circle cx="26" cy="20" r="1.5" fill="#e11d48" />
              </svg>
            </div>
          </div>

          {/* Typographic Experience Block: "WITH 500+ RUNS..." */}
          <div className="flex-1 flex flex-col justify-center">
            {/* "W I T H" Spaced Label */}
            <div className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-[0.4em] mb-1">
              W I T H
            </div>

            {/* Main Headline Block: 500+ RUNS + Description */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-russo italic text-3xl sm:text-4xl lg:text-5xl text-[#0f1012] tracking-tight extrude-title-white inline-block">
                500+ RUNS
              </span>
              <span className="font-space font-bold text-sm sm:text-base md:text-lg text-zinc-800 leading-snug">
                of high-volume commercial production in Design industry.
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
