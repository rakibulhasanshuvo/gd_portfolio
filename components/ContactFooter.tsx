"use client";

import { useState } from "react";
import { Mail, Phone, ExternalLink, Copy, Check, ArrowUpRight } from "lucide-react";
import { DESIGNER_INFO } from "@/data/projects";
import { sound } from "@/lib/audio";

import TornPaperDivider from "./TornPaperDivider";

export default function ContactFooter() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const copyContact = (type: "email" | "phone", text: string) => {
    sound.click(1200);
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1800);
  };

  return (
    <footer id="contact-section" className="section-deferred relative bg-[#111114] text-white pt-0 pb-16 overflow-hidden select-none">
      
      {/* Torn Paper Transition into Dark Footer */}
      <TornPaperDivider variant="light-to-dark" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#f5b800]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 pt-12">
        
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-[#18181c] text-[#f5b800] border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_#f5b800] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] animate-pulse" />
            <span>2026 BOOKINGS OPEN</span>
          </span>
          <span className="font-mono text-xs text-zinc-400">
            COMMERCIAL PACKAGING // BRAND SYSTEMS // HIGH-IMPACT THUMBNAILS
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight uppercase leading-[0.95] italic">
          Let&apos;s Build <br />
          <span className="extrude-3d-yellow inline-block">
            Extraordinary
          </span>{" "}
          <span className="extrude-3d-white inline-block">Visuals</span>
        </h2>

        {/* Quick Contact Interactive Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          
          {/* Email Card */}
          <button
            type="button"
            onClick={() => copyContact("email", DESIGNER_INFO.email)}
            className="flex items-center justify-between p-5 bg-neutral-900/60 hover:bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all text-left cursor-pointer group shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {DESIGNER_INFO.email}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-400">
              {copiedType === "email" ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Copied
                </span>
              ) : (
                <Copy className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </button>

          {/* Phone Card */}
          <button
            type="button"
            onClick={() => copyContact("phone", DESIGNER_INFO.phone)}
            className="flex items-center justify-between p-5 bg-neutral-900/60 hover:bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all text-left cursor-pointer group shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0052ff]/10 border border-[#0052ff]/20 flex items-center justify-center text-[#0052ff]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  WhatsApp / Phone
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {DESIGNER_INFO.phone}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-400">
              {copiedType === "phone" ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Copied
                </span>
              ) : (
                <Copy className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </button>

          {/* CV Direct Access */}
          <a
            href={DESIGNER_INFO.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click(1200)}
            className="flex items-center justify-between p-5 bg-[#0052ff] hover:bg-[#0045d8] text-white rounded-2xl border border-[#0052ff] transition-all text-left cursor-pointer group shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75">
                Executive Document
              </span>
              <span className="font-mono text-sm font-bold">
                View Full CV / Resume
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Social Pill Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-neutral-900 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-500">DIRECT PLATFORMS:</span>
            <a
              href={DESIGNER_INFO.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0052ff] transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Portfolio</span>
              <ExternalLink className="w-3 h-3 text-[#0052ff]" />
            </a>
            <a
              href={DESIGNER_INFO.links.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0052ff] transition-colors flex items-center gap-1"
            >
              <span>Behance</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
            <a
              href={DESIGNER_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0052ff] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
            <a
              href={DESIGNER_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>

          <div className="text-neutral-500 text-[11px]">
            © 2026 {DESIGNER_INFO.name}. All vector assets registered.
          </div>
        </div>

      </div>
    </footer>
  );
}
