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
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
            <span>2026 BOOKINGS OPEN</span>
          </span>
          <span className="font-mono text-xs text-zinc-400">
            COMMERCIAL PACKAGING // BRAND SYSTEMS // PREPRESS CONSULTING
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

        {/* Asymmetric Studio Transmission Deck (Breaks 3-card slop pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 items-stretch">
          
          {/* Primary Channel Console (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#151518] rounded-2xl border border-neutral-800 flex flex-col justify-between relative overflow-hidden shadow-sm group">
            {/* Background subtle grid accent */}
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-black text-white pointer-events-none select-none">
              01
            </div>

            <div>
              {/* Header Telemetry */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-neutral-800/80 font-mono text-xs">
                <span className="text-[#f5b800] font-bold tracking-wider">
                  STUDIO DISPATCH // DIRECT WIRE
                </span>
                <span className="text-neutral-500 uppercase">
                  Primary Comm Channel
                </span>
              </div>

              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-2">
                Direct Project Inquiries & Prepress Advisory
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mb-6">
                Available for commercial packaging die-lines, high-density screen-print color separation, corporate identity systems, and high-impact digital campaigns.
              </p>

              {/* Direct Email Console Plate */}
              <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f5b800]/10 border border-[#f5b800]/25 flex items-center justify-center text-[#f5b800] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Inquiries Email
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white selection:bg-[#f5b800] selection:text-black">
                      {DESIGNER_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => copyContact("email", DESIGNER_INFO.email)}
                    className="px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-neutral-700/60"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 opacity-60" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                    onClick={() => sound.click(1200)}
                    className="px-3.5 py-2 rounded-lg bg-[#f5b800] hover:bg-[#e0a800] text-black font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Telemetry Bar */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px] text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Replies within 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span>Dhaka, BD (UTC+6)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800]" />
                <span>Prepress Turnaround: 48h</span>
              </div>
            </div>
          </div>

          {/* Stacked Specialized Channels (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* WhatsApp / Direct Voice Plate */}
            <div className="p-5 sm:p-6 bg-[#151518] rounded-2xl border border-neutral-800 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-neutral-800/80 font-mono text-xs">
                  <span className="text-emerald-400 font-bold tracking-wider">
                    INSTANT WIRE // WHATSAPP
                  </span>
                  <span className="text-neutral-500 uppercase text-[10px]">
                    Direct Voice & Chat
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                        Direct Phone / WhatsApp
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white">
                        {DESIGNER_INFO.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyContact("phone", DESIGNER_INFO.phone)}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer border border-neutral-700/60"
                      title="Copy Phone Number"
                    >
                      {copiedType === "phone" ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 opacity-70" />
                      )}
                    </button>
                    <a
                      href="https://wa.me/8801404591770"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click(1200)}
                      className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-mono text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <p className="font-mono text-[11px] text-neutral-500 mt-4 pt-3 border-t border-neutral-800/60">
                Direct mobile line for urgent production schedules & live press-check communications.
              </p>
            </div>

            {/* Official Credentials Dossier (CV Link) */}
            <a
              href={DESIGNER_INFO.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.click(1200)}
              className="p-6 bg-gradient-to-br from-[#0052ff] to-[#0038b3] text-white rounded-2xl border border-blue-500/40 hover:border-blue-400 transition-all flex flex-col justify-between group shadow-lg cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-blue-400/30 font-mono text-xs">
                  <span className="text-blue-100 font-bold tracking-wider">
                    VERIFIED CREDENTIALS // CV
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-blue-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h4 className="font-syne font-bold text-xl sm:text-2xl text-white mb-2">
                  Curriculum Vitae & Technical Credentials
                </h4>
                
                <div className="flex flex-wrap gap-2 my-3 font-mono text-[10px]">
                  <span className="px-2 py-1 rounded bg-black/25 border border-white/10 text-blue-100">
                    BOU CSE Degree Program
                  </span>
                  <span className="px-2 py-1 rounded bg-black/25 border border-white/10 text-blue-100">
                    Tokyo U & JICA AI Intensive
                  </span>
                  <span className="px-2 py-1 rounded bg-black/25 border border-white/10 text-blue-100">
                    500+ Press Runs Verified
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-400/20 flex items-center justify-between text-xs font-mono text-blue-100 group-hover:text-white transition-colors">
                <span>View Full Executive Document</span>
                <span className="font-bold underline decoration-blue-300 underline-offset-4">Open PDF / HTML →</span>
              </div>
            </a>

          </div>

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
