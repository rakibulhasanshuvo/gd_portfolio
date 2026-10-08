"use client";

import { useState, useRef, MouseEvent } from "react";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({
      x: y * -12, // tilt up/down
      y: x * 15,  // tilt left/right
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto select-none cursor-crosshair group"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="w-full relative transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-sm filter transition-all duration-300"
        >
          <defs>
            {/* Shard Gradients */}
            <linearGradient id="cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#0052ff" />
            </linearGradient>

            <linearGradient id="emerald-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#00f5ff" />
            </linearGradient>

            <linearGradient id="magenta-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#0052ff" />
            </linearGradient>

            <linearGradient id="deep-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052ff" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="green-lime" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052ff" />
              <stop offset="70%" stopColor="#003bb5" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="shard-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0052ff" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* ========================================================
              LAYER 1: PACKAGING DIE-LINE CAD WIREFRAME (LEFT & BG)
              ======================================================== */}
          <g id="packaging-dieline" opacity="0.85" className="transition-opacity duration-300">
            {/* Blueprint Grid Lines */}
            <g stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="2 3">
              <line x1="60" y1="40" x2="340" y2="40" />
              <line x1="60" y1="80" x2="340" y2="80" />
              <line x1="60" y1="120" x2="340" y2="120" />
              <line x1="60" y1="160" x2="340" y2="160" />
              <line x1="60" y1="200" x2="340" y2="200" />
              <line x1="60" y1="240" x2="340" y2="240" />
              <line x1="60" y1="280" x2="340" y2="280" />
              <line x1="60" y1="320" x2="340" y2="320" />

              <line x1="100" y1="30" x2="100" y2="340" />
              <line x1="140" y1="30" x2="140" y2="340" />
              <line x1="180" y1="30" x2="180" y2="340" />
              <line x1="220" y1="30" x2="220" y2="340" />
              <line x1="260" y1="30" x2="260" y2="340" />
              <line x1="300" y1="30" x2="300" y2="340" />
            </g>

            {/* Packaging Carton Outer Cut Lines (Solid 1.25pt) */}
            <path
              d="
                M 120 70
                L 140 40 L 220 40 L 240 70
                L 310 70 L 310 260
                L 240 260 L 220 300 L 140 300 L 120 260
                L 70 260 L 70 70 Z
              "
              fill="none"
              stroke="#64748b"
              strokeWidth="1.25"
            />

            {/* Tuck Flap Internal Score / Crease Lines (Dashed) */}
            <path
              d="
                M 120 70 L 240 70
                M 120 260 L 240 260
                M 120 70 L 120 260
                M 240 70 L 240 260
                M 70 110 L 120 110
                M 70 220 L 120 220
                M 240 110 L 310 110
                M 240 220 L 310 220
              "
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="4 3"
            />

            {/* Glue Flap angled edges */}
            <path
              d="M 70 70 L 55 85 L 55 245 L 70 260"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.25"
            />

            {/* Dimension Tick Marks and Technical Annotations */}
            <g stroke="#94a3b8" strokeWidth="0.8" opacity="0.75">
              <line x1="45" y1="70" x2="45" y2="260" />
              <line x1="40" y1="70" x2="50" y2="70" />
              <line x1="40" y1="260" x2="50" y2="260" />

              <line x1="120" y1="315" x2="240" y2="315" />
              <line x1="120" y1="310" x2="120" y2="320" />
              <line x1="240" y1="310" x2="240" y2="320" />
            </g>

            {/* Technical Labels */}
            <text x="32" y="168" fill="#94a3b8" fontSize="8" fontFamily="monospace" transform="rotate(-90 32 168)" letterSpacing="1">
              DIE-CUT: 190.0mm
            </text>
            <text x="146" y="330" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="1">
              CREASE: 120mm
            </text>

            {/* Registration Crosshairs */}
            <g transform="translate(48, 48)">
              <circle cx="0" cy="0" r="7" stroke="#0052ff" strokeWidth="0.75" fill="none" opacity="0.6" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#0052ff" strokeWidth="0.75" opacity="0.6" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#0052ff" strokeWidth="0.75" opacity="0.6" />
            </g>

            {/* Radiating Perspective Die Lines into Shards */}
            <path
              d="
                M 120 70 C 180 70, 260 90, 310 110
                M 120 160 C 200 150, 280 140, 340 120
                M 120 260 C 200 240, 290 200, 350 170
                M 240 70 C 270 90, 310 120, 330 150
                M 220 300 C 260 280, 310 240, 340 210
              "
              fill="none"
              stroke="#94a3b8"
              strokeWidth="0.75"
              strokeDasharray="3 3"
              opacity="0.6"
            />
          </g>

          {/* ========================================================
              LAYER 2: GEOMETRIC CRYSTAL SHARD EXPLOSION (CENTER/RIGHT)
              ======================================================== */}
          <g id="disruptive-shards" filter="url(#shard-glow)">
            
            {/* Facet Group 1: Deep Cyan / Emerald Top Shards */}
            <polygon points="310,70 340,30 370,60" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="340,30 380,45 370,60" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="370,60 380,45 400,80 385,90" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="310,70 370,60 355,100" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="355,100 370,60 385,90" fill="url(#green-lime)" stroke="#ffffff" strokeWidth="0.75" />

            {/* Facet Group 2: Upper Central Cluster (Cyan / Cobalt / Magenta Accents) */}
            <polygon points="320,105 355,100 345,135" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="355,100 385,90 395,120 370,130" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="385,90 400,80 415,105 395,120" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="395,120 415,105 430,130 405,145" fill="url(#green-lime)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="370,130 395,120 405,145 380,160" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />

            {/* Facet Group 3: Core Dynamic Cluster (Vibrant Violet / Magenta / Cobalt) */}
            <polygon points="315,135 345,135 335,170" fill="url(#magenta-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="345,135 370,130 380,160 350,175" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="380,160 405,145 420,170 395,185" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="405,145 430,130 445,160 420,170" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            
            {/* Vivid Magenta Spike Flakes */}
            <polygon points="310,160 335,170 325,195 300,180" fill="url(#magenta-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="300,180 325,195 315,225" fill="#db2777" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="290,195 315,225 305,245" fill="#a21caf" stroke="#ffffff" strokeWidth="0.75" />

            {/* Facet Group 4: Middle Transition & Geometric Lattice */}
            <polygon points="335,170 350,175 360,205 330,210" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="350,175 380,160 395,185 375,210" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="375,210 395,185 415,200 390,225" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="395,185 420,170 435,195 415,200" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="415,200 435,195 450,220 425,230" fill="url(#green-lime)" stroke="#ffffff" strokeWidth="0.75" />

            {/* Facet Group 5: Lower Cascading Shards */}
            <polygon points="325,195 330,210 345,245 320,240" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="330,210 360,205 365,240 345,245" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="360,205 375,210 390,225 370,250" fill="url(#emerald-cyan)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="370,250 390,225 410,240 385,270" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="390,225 425,230 430,255 410,240" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />

            {/* Floating detached facet accents */}
            <polygon points="305,245 315,225 330,265" fill="#3b82f6" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="320,240 345,245 335,280" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="335,280 345,245 360,275" fill="url(#magenta-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="335,280 360,275 350,310 330,300" fill="url(#cyan-blue)" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="330,300 350,310 340,335" fill="url(#deep-blue)" stroke="#ffffff" strokeWidth="0.75" />

            {/* Shard Highlight Lines */}
            <line x1="340" y1="30" x2="430" y2="130" stroke="#ffffff" strokeWidth="1.25" opacity="0.65" />
            <line x1="310" y1="70" x2="450" y2="220" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <line x1="335" y1="170" x2="425" y2="260" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          </g>

          {/* ========================================================
              LAYER 3: DYNAMIC ACCENT ARROW & DESIGNER MOUSE CURSOR
              ======================================================== */}
          <g id="dynamic-arrow-and-cursor">
            {/* Bold Diagonal Thrust Line */}
            <path
              d="M 370 170 L 420 245 L 435 270"
              stroke="url(#arrow-grad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            
            {/* Secondary Cyan Glow Line */}
            <path
              d="M 390 195 L 430 260"
              stroke="#00f5ff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Arrowhead Geometry */}
            <polygon
              points="435,270 415,262 430,245"
              fill="#0052ff"
              stroke="#ffffff"
              strokeWidth="1.25"
            />

            {/* Real Interactive Vector Cursor */}
            <g
              transform="translate(432, 275)"
              className="transition-transform duration-150 ease-out"
              style={{
                transform: isHovered ? "translate(434px, 277px) scale(1.08)" : "translate(432px, 275px)",
              }}
            >
              {/* Cursor Drop Shadow */}
              <path
                d="M 0 0 L 16 16 L 9.5 17.5 L 14.5 28 L 10.5 30 L 5.5 19.5 L 0 25 Z"
                fill="#000000"
                fillOpacity="0.25"
                transform="translate(2, 3)"
              />
              {/* Dark Cursor Body */}
              <path
                d="M 0 0 L 16 16 L 9.5 17.5 L 14.5 28 L 10.5 30 L 5.5 19.5 L 0 25 Z"
                fill="#0f1d16"
                stroke="#ffffff"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Bottom Right Floating Coordinates Pill */}
          <g transform="translate(370, 360)" className="opacity-90">
            <rect x="0" y="0" width="130" height="24" rx="12" fill="#ffffff" stroke="#cfdfd4" strokeWidth="1" />
            <circle cx="12" cy="12" r="3" fill="#0052ff" />
            <text x="24" y="16" fill="#304439" fontSize="9" fontFamily="monospace" letterSpacing="0.5">
              X: 420.5 // Y: 297.0
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
