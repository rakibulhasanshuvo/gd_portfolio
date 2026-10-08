"use client";

import React from "react";

/**
 * Authentic 1:1 Behance Zine Title Component:
 * Recreates the exact tall condensed, chamfered woodblock lettering from the reference video:
 * - "Port" in chalk white with inner sketch hatch lines
 * - "folio" in warm mustard yellow with inner sketch hatch lines
 * - Dynamic stepped baseline (folio drops slightly)
 * - Deep stylized lowercase 'f' descender
 * - "YEAR 2026" tracked cleanly beneath "Port"
 */
export default function PortfolioHeadline({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 940 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[940px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] overflow-visible"
      >
        <defs>
          {/* Sketch Hatch Pattern for White Letters */}
          <pattern
            id="sketchHatchWhite"
            width="8"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <line x1="2" y1="0" x2="2" y2="12" stroke="#18181c" strokeWidth="0.9" opacity="0.45" />
            <line x1="6" y1="2" x2="6" y2="10" stroke="#18181c" strokeWidth="0.6" opacity="0.3" />
          </pattern>

          {/* Sketch Hatch Pattern for Mustard Yellow Letters */}
          <pattern
            id="sketchHatchYellow"
            width="8"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <line x1="2" y1="0" x2="2" y2="12" stroke="#78350f" strokeWidth="1" opacity="0.45" />
            <line x1="6" y1="2" x2="6" y2="10" stroke="#78350f" strokeWidth="0.7" opacity="0.3" />
          </pattern>

          {/* Crisp Shadow Filter */}
          <filter id="shadowZine" x="-5%" y="-5%" width="115%" height="115%">
            <feDropShadow dx="3" dy="5" stdDeviation="0" floodColor="#000000" floodOpacity="0.85" />
          </filter>
        </defs>

        {/* =====================================================================
            GLYPH GROUP: "Port" (CHALK WHITE + INNER HATCH)
            ===================================================================== */}
        <g id="word-port" filter="url(#shadowZine)">
          
          {/* --- LETTER 'P' (Uppercase, Chamfered Top-Right & Inner Counter) --- */}
          <g id="letter-P">
            {/* Outer Silhouette */}
            <path
              d="
                M 20 20
                L 90 20
                L 112 42
                L 112 96
                L 92 116
                L 52 116
                L 52 165
                L 20 165
                Z
              "
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            {/* Inner Counter Hole */}
            <path
              d="
                M 52 48
                L 78 48
                L 86 56
                L 86 80
                L 78 88
                L 52 88
                Z
              "
              fill="#121215"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinejoin="bevel"
            />
            {/* Inner Sketch Hatching */}
            <path
              d="
                M 20 20 L 90 20 L 112 42 L 112 96 L 92 116 L 52 116 L 52 165 L 20 165 Z
                M 52 48 L 78 48 L 86 56 L 86 80 L 78 88 L 52 88 Z
              "
              fill="url(#sketchHatchWhite)"
              fillRule="evenodd"
            />
            {/* Hand-drawn accent sketch lines */}
            <line x1="32" y1="35" x2="32" y2="155" stroke="#18181c" strokeWidth="1.5" opacity="0.6" />
            <line x1="98" y1="52" x2="98" y2="92" stroke="#18181c" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* --- LETTER 'o' (Lowercase, Chamfered Opposite Corners) --- */}
          <g id="letter-o-1" transform="translate(125, 0)">
            {/* Outer Silhouette */}
            <path
              d="
                M 8 62
                L 56 62
                L 70 76
                L 70 151
                L 56 165
                L 8 165
                L -4 151
                L -4 76
                Z
              "
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            {/* Inner Counter Hole */}
            <path
              d="
                M 18 86
                L 44 86
                L 48 90
                L 48 137
                L 44 141
                L 18 141
                L 14 137
                L 14 90
                Z
              "
              fill="#121215"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinejoin="bevel"
            />
            {/* Inner Sketch Hatching */}
            <path
              d="
                M 8 62 L 56 62 L 70 76 L 70 151 L 56 165 L 8 165 L -4 151 L -4 76 Z
                M 18 86 L 44 86 L 48 90 L 48 137 L 44 141 L 18 141 L 14 137 L 14 90 Z
              "
              fill="url(#sketchHatchWhite)"
              fillRule="evenodd"
            />
            {/* Sketch Accents */}
            <line x1="5" y1="78" x2="5" y2="148" stroke="#18181c" strokeWidth="1.5" opacity="0.5" />
            <line x1="58" y1="78" x2="58" y2="148" stroke="#18181c" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* --- LETTER 'r' (Lowercase, Tall Stem + Right Chamfered Hook) --- */}
          <g id="letter-r" transform="translate(210, 0)">
            <path
              d="
                M 6 62
                L 54 62
                L 64 72
                L 64 94
                L 40 94
                L 36 86
                L 36 165
                L 6 165
                Z
              "
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="M 6 62 L 54 62 L 64 72 L 64 94 L 40 94 L 36 86 L 36 165 L 6 165 Z"
              fill="url(#sketchHatchWhite)"
            />
            {/* Sketch Accent */}
            <line x1="18" y1="75" x2="18" y2="155" stroke="#18181c" strokeWidth="1.5" opacity="0.6" />
            <line x1="45" y1="72" x2="56" y2="83" stroke="#18181c" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* --- LETTER 't' (Lowercase, Crossbar + Angled Foot Cut) --- */}
          <g id="letter-t" transform="translate(285, 0)">
            <path
              d="
                M 12 36
                L 38 36
                L 38 62
                L 60 62
                L 60 86
                L 38 86
                L 38 145
                L 58 145
                L 58 165
                L 24 165
                L 12 153
                Z
              "
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="M 12 36 L 38 36 L 38 62 L 60 62 L 60 86 L 38 86 L 38 145 L 58 145 L 58 165 L 24 165 L 12 153 Z"
              fill="url(#sketchHatchWhite)"
            />
            <line x1="24" y1="50" x2="24" y2="145" stroke="#18181c" strokeWidth="1.5" opacity="0.6" />
          </g>

        </g>

        {/* =====================================================================
            GLYPH GROUP: "folio" (MUSTARD YELLOW + EXTENDED 'f' + STEPPED BASELINE)
            ===================================================================== */}
        <g id="word-folio" transform="translate(365, 12)" filter="url(#shadowZine)">
          
          {/* --- LETTER 'f' (Tall Ascender + Drop Descender Past Baseline) --- */}
          <g id="letter-f">
            <path
              d="
                M 16 22
                L 52 22
                L 66 36
                L 66 52
                L 44 52
                L 40 44
                L 40 54
                L 62 54
                L 62 76
                L 40 76
                L 40 178
                L 12 178
                L 12 76
                L 0 76
                L 0 54
                L 12 54
                L 12 34
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="M 16 22 L 52 22 L 66 36 L 66 52 L 44 52 L 40 44 L 40 54 L 62 54 L 62 76 L 40 76 L 40 178 L 12 178 L 12 76 L 0 76 L 0 54 L 12 54 L 12 34 Z"
              fill="url(#sketchHatchYellow)"
            />
            {/* Hand-drawn Accent */}
            <line x1="24" y1="35" x2="24" y2="165" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
          </g>

          {/* --- LETTER 'o' (Mustard Yellow) --- */}
          <g id="letter-o-2" transform="translate(76, 0)">
            <path
              d="
                M 8 54
                L 56 54
                L 70 68
                L 70 143
                L 56 157
                L 8 157
                L -4 143
                L -4 68
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="
                M 18 78
                L 44 78
                L 48 82
                L 48 129
                L 44 133
                L 18 133
                L 14 129
                L 14 82
                Z
              "
              fill="#121215"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinejoin="bevel"
            />
            <path
              d="
                M 8 54 L 56 54 L 70 68 L 70 143 L 56 157 L 8 157 L -4 143 L -4 68 Z
                M 18 78 L 44 78 L 48 82 L 48 129 L 44 133 L 18 133 L 14 129 L 14 82 Z
              "
              fill="url(#sketchHatchYellow)"
              fillRule="evenodd"
            />
            <line x1="5" y1="70" x2="5" y2="140" stroke="#78350f" strokeWidth="1.5" opacity="0.5" />
            <line x1="58" y1="70" x2="58" y2="140" stroke="#78350f" strokeWidth="1.5" opacity="0.5" />
          </g>

          {/* --- LETTER 'l' (Tall Vertical Pillar) --- */}
          <g id="letter-l" transform="translate(162, 0)">
            <path
              d="
                M 6 22
                L 34 22
                L 34 157
                L 6 157
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="M 6 22 L 34 22 L 34 157 L 6 157 Z"
              fill="url(#sketchHatchYellow)"
            />
            <line x1="18" y1="35" x2="18" y2="145" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
          </g>

          {/* --- LETTER 'i' (Stem + Chamfered Tittle Dot) --- */}
          <g id="letter-i" transform="translate(210, 0)">
            {/* Chamfered Tittle Dot */}
            <path
              d="
                M 6 22
                L 28 22
                L 34 28
                L 34 42
                L 28 48
                L 6 48
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinejoin="bevel"
            />
            {/* Lower Stem */}
            <path
              d="
                M 6 62
                L 34 62
                L 34 157
                L 6 157
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="M 6 62 L 34 62 L 34 157 L 6 157 Z"
              fill="url(#sketchHatchYellow)"
            />
            <line x1="18" y1="75" x2="18" y2="145" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
          </g>

          {/* --- LETTER 'o' (Final Loop) --- */}
          <g id="letter-o-3" transform="translate(258, 0)">
            <path
              d="
                M 8 54
                L 56 54
                L 70 68
                L 70 143
                L 56 157
                L 8 157
                L -4 143
                L -4 68
                Z
              "
              fill="#f3b72b"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="bevel"
            />
            <path
              d="
                M 18 78
                L 44 78
                L 48 82
                L 48 129
                L 44 133
                L 18 133
                L 14 129
                L 14 82
                Z
              "
              fill="#121215"
              stroke="#000000"
              strokeWidth="3.5"
              strokeLinejoin="bevel"
            />
            <path
              d="
                M 8 54 L 56 54 L 70 68 L 70 143 L 56 157 L 8 157 L -4 143 L -4 68 Z
                M 18 78 L 44 78 L 48 82 L 48 129 L 44 133 L 18 133 L 14 129 L 14 82 Z
              "
              fill="url(#sketchHatchYellow)"
              fillRule="evenodd"
            />
            <line x1="5" y1="70" x2="5" y2="140" stroke="#78350f" strokeWidth="1.5" opacity="0.5" />
            <line x1="58" y1="70" x2="58" y2="140" stroke="#78350f" strokeWidth="1.5" opacity="0.5" />
          </g>

        </g>

        {/* =====================================================================
            SUB-LABEL: "Y E A R   2 0 2 6" (NESTLED DIRECTLY UNDER "Port")
            ===================================================================== */}
        <text
          x="75"
          y="204"
          fill="#ffffff"
          fontSize="17"
          fontWeight="700"
          fontFamily="var(--font-mono), monospace"
          letterSpacing="0.45em"
          opacity="0.95"
          filter="url(#shadowZine)"
        >
          YEAR 2026
        </text>

      </svg>
    </div>
  );
}
