"use client";

import Image from "next/image";
import { sound } from "@/lib/audio";

export default function WhereIveWorkedSection() {
  const experiences = [
    {
      role: "Visual & Graphic Designer",
      company: "Commercial Print & Packaging",
      period: "February 2025 – September 2025",
      detail: "500+ Shopping Bag Production Runs // Zero Registration Bleed",
    },
    {
      role: "Design Lead & Instructor",
      company: "Ostad & Skill Platforms",
      period: "April 2023 – October 2023",
      detail: "Mentored 100+ designers across vector graphics & commercial design",
    },
    {
      role: "B.Sc. in Computer Science & Engineering",
      company: "Bangladesh Open University (BOU)",
      period: "1st Year, 2nd Sem (In Progress)",
      detail: "Engineering curriculum bridging algorithms, design tokens & UI architectures",
    },
    {
      role: "Applied AI & Data Science Intensive",
      company: "University of Tokyo & JICA",
      period: "Matsuo-Iwasawa Lab (Enrolled)",
      detail: "3-Month Global Consumer Intelligence (GCI) Program & Machine Learning",
    },
  ];

  return (
    <section className="section-deferred relative bg-[#f6f5f0] text-[#0f1012] py-20 sm:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 border-b-2 border-black overflow-hidden select-none">
      
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 halftone-paper opacity-40 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto relative z-10">
             {/* =====================================================================
            SECTION HEADER: "Where I've Worked" + 3D GRADUATION CAP COLLAGE LOCKUP
            Authentic 1:1 match to Behance Frame 04
            ===================================================================== */}
        <div className="flex justify-center mb-16 sm:mb-24">
          <div 
            onClick={() => sound.pop()}
            className="relative group cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02]"
            title="Where I've Worked"
          >
            <Image
              src="/assets/where_ive_worked_title.png"
              alt="Where I've Worked"
              width={1622}
              height={284}
              className="w-full max-w-[580px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[860px] h-auto drop-shadow-[2px_6px_14px_rgba(0,0,0,0.15)] select-none pointer-events-none"
            />
          </div>
        </div>

        {/* =====================================================================
            AIRY 2-COLUMN EDITORIAL TYPOGRAPHIC GRID (NO BOXES, NO CROWDED CARDS)
            Direct 1:1 match to Behance Frame 04
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 sm:gap-y-16 max-w-5xl mx-auto px-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => sound.click(750)}
              className="group cursor-pointer select-none transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Line 1: Role in light/regular modern sans */}
              <div className="font-display font-normal text-xl sm:text-2xl lg:text-[26px] text-zinc-600 tracking-tight leading-snug">
                {exp.role}
              </div>

              {/* Line 2: Company in bold, prominent display typography */}
              <div className="font-display font-black text-2xl sm:text-3xl lg:text-[38px] text-[#0f1012] mt-1 sm:mt-2 tracking-tight leading-tight group-hover:text-[#0052ff] transition-colors">
                {exp.company}
              </div>

              {/* Line 3: Period in clean muted tone */}
              <div className="font-display text-base sm:text-lg lg:text-xl text-zinc-500 mt-2 sm:mt-3 font-normal">
                {exp.period}
              </div>

              {/* Subtle zine accent bottom bar on hover */}
              <div className="w-12 h-1 bg-transparent group-hover:bg-[#f5b800] mt-4 rounded-full transition-colors" />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
