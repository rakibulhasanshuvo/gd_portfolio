"use client";

import { GraduationCap, Award, FileText, ExternalLink } from "lucide-react";
import { DESIGNER_INFO } from "@/data/projects";
import { sound } from "@/lib/audio";

export default function ProfileSection() {
  return (
    <section id="about-section" className="py-16 sm:py-24 border-b border-[#cfdfd4] bg-[#f0f6f2] px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b border-[#cfdfd4] pb-6 mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#5a7366]">
            <span>[THE DESIGNER]</span>
            <span>✦</span>
            <span className="text-[#0052ff] font-semibold">BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d16] uppercase tracking-tight">
            Hybrid Logic: Code & Vector
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Education (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bento-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-pill bg-[#0f1d16] text-emerald-400 border-[#0f1d16]">
                  EXECUTIVE PROFILE
                </span>
                <span className="font-mono text-xs text-[#5a7366]">DHAKA, BANGLADESH</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1d16] leading-tight">
                {DESIGNER_INFO.name}
              </h3>
              <p className="text-sm font-mono text-[#0052ff] font-semibold mt-1">
                {DESIGNER_INFO.role}
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#304439] leading-relaxed">
                {DESIGNER_INFO.bio}
              </p>

              <div className="mt-6 pt-5 border-t border-[#e1ede5] flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-[#f0f6f2] px-3 py-1 rounded-full border border-[#cfdfd4] text-[#304439]">
                  Languages: <strong>English (Proficient)</strong>, <strong>Bengali (Native)</strong>, <strong>Hindi</strong>
                </span>
                <span className="bg-[#f0f6f2] px-3 py-1 rounded-full border border-[#cfdfd4] text-[#304439]">
                  Environment: <strong>Linux (Parrot OS)</strong> & <strong>Windows</strong>
                </span>
              </div>
            </div>

            {/* Academic Credentials */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold text-[#0f1d16] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0052ff]" />
                <span>Specialized Education & Training</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DESIGNER_INFO.education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-[#cfdfd4] rounded-2xl p-5 flex flex-col justify-between hover:border-[#b8cfc1] hover:shadow-xs transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold uppercase inline-block mb-3 border border-emerald-200">
                        {edu.tag}
                      </span>
                      <h5 className="font-bold text-sm text-[#0f1d16]">
                        {edu.degree}
                      </h5>
                      <p className="text-xs text-[#304439] mt-1 font-normal">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-[#5a7366] mt-4 pt-3 border-t border-[#e1ede5]">
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills & Interactive CV Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tool Mastery Box */}
            <div className="bento-card p-6 sm:p-7">
              <div className="flex items-center gap-2 border-b border-[#e1ede5] pb-3 mb-5">
                <Award className="w-4 h-4 text-[#0052ff]" />
                <h4 className="font-mono text-xs font-semibold text-[#0f1d16] uppercase tracking-wider">
                  CREATIVE & PRODUCTION MASTERY
                </h4>
              </div>

              <div className="space-y-3">
                {DESIGNER_INFO.skills.map((skill, i) => (
                  <div key={i} className="bg-[#f0f6f2] p-3.5 rounded-xl border border-[#cfdfd4] hover:border-[#b8cfc1] transition-all">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-[#0f1d16]">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white text-emerald-700 border border-[#cfdfd4]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5a7366] mt-1 font-mono">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive CV Feature Bento Card */}
            <div className="bg-[#0f1d16] text-white rounded-2xl p-6 sm:p-7 border border-[#1e3428] shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                  <FileText className="w-4 h-4" />
                  <span>STANDALONE DOCUMENT</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold leading-tight">
                  Executive Curriculum Vitae
                </h4>
                <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed">
                  Access the complete A4 formatted resume detailing 8 months of high-velocity print production, 500+ commercial bag deliveries, education at BOU & University of Tokyo, and full contact details.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400">
                  cv.html (Fully responsive)
                </span>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.click(1200)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#0052ff] hover:bg-[#0045d8] text-white font-mono text-xs font-semibold uppercase rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>OPEN CV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
