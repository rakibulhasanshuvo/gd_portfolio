"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw, Copy, Check, ExternalLink, ChevronLeft, ChevronRight, Layers, FileCode } from "lucide-react";
import { Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import BagMockupView from "./BagMockupView";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectModalProps) {
  const [zoom, setZoom] = useState(1);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"mockup" | "vector" | "construction">("mockup");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (project) {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        if (e.key === "ArrowLeft" && currentIndex > 0) {
          onSelectProject(allProjects[currentIndex - 1]);
        }
        if (e.key === "ArrowRight" && currentIndex < allProjects.length - 1) {
          onSelectProject(allProjects[currentIndex + 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, allProjects, onClose, onSelectProject]);

  const [prevProjectId, setPrevProjectId] = useState<string | null>(null);
  if (project && project.id !== prevProjectId) {
    setPrevProjectId(project.id);
    setZoom(1);
    setActiveView("mockup");
  }

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const copyColor = (color: string) => {
    sound.click(1200);
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f1d16]/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Window */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-[#cfdfd4] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
      >
        
        {/* Modal Top Title Bar */}
        <div className="flex items-center justify-between border-b border-[#cfdfd4] bg-[#f0f6f2] px-4 sm:px-6 py-3.5 select-none">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 bg-[#0f1d16] text-emerald-400 rounded-full">
              {project.code}
            </span>
            <span className="font-mono text-xs text-[#304439] hidden sm:inline">
              CLIENT: <strong className="text-[#0f1d16]">{project.client}</strong>
            </span>
            <span className="font-mono text-xs text-[#5a7366]">
              [{project.year}]
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Prev / Next navigation */}
            <div className="flex items-center border border-[#cfdfd4] rounded-full bg-white shadow-2xs overflow-hidden">
              <button
                type="button"
                disabled={!prevProject}
                onClick={() => {
                  if (prevProject) {
                    sound.click(800);
                    onSelectProject(prevProject);
                  }
                }}
                className="p-1.5 hover:bg-[#e6f1ea] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4 text-[#0f1d16]" />
              </button>
              <button
                type="button"
                disabled={!nextProject}
                onClick={() => {
                  if (nextProject) {
                    sound.click(800);
                    onSelectProject(nextProject);
                  }
                }}
                className="p-1.5 hover:bg-[#e6f1ea] disabled:opacity-30 disabled:pointer-events-none border-l border-[#cfdfd4] cursor-pointer"
                title="Next Project (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4 text-[#0f1d16]" />
              </button>
            </div>

            <button
              onClick={() => {
                sound.click(600);
                onClose();
              }}
              className="p-1.5 bg-white hover:bg-[#e6f1ea] text-[#0f1d16] border border-[#cfdfd4] rounded-full shadow-2xs transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Main Inspection Viewport */}
          <div className="relative w-full min-h-[340px] sm:min-h-[460px] bg-[#f0f6f2] rounded-2xl border border-[#cfdfd4] p-4 flex flex-col items-center justify-center overflow-hidden">
            
            {/* View Mode Switcher Pills (Top Left) */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-full border border-[#cfdfd4] shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  sound.click(1000);
                  setActiveView("mockup");
                }}
                className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                  activeView === "mockup"
                    ? "bg-[#0f1d16] text-white shadow-2xs"
                    : "text-[#304439] hover:bg-[#e6f1ea]"
                }`}
              >
                {project.category === "packaging" ? "3D Mockup" : "In-Use Mockup"}
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.click(1000);
                  setActiveView("vector");
                }}
                className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                  activeView === "vector"
                    ? "bg-[#0f1d16] text-white shadow-2xs"
                    : "text-[#304439] hover:bg-[#e6f1ea]"
                }`}
              >
                {project.category === "packaging" ? "Vector Die-Line" : "Vector Master"}
              </button>

              {project.constructionImage && (
                <button
                  type="button"
                  onClick={() => {
                    sound.click(1000);
                    setActiveView("construction");
                  }}
                  className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                    activeView === "construction"
                      ? "bg-[#0f1d16] text-white shadow-2xs"
                      : "text-[#304439] hover:bg-[#e6f1ea]"
                  }`}
                >
                  Construction & Grid
                </button>
              )}
            </div>

            {/* Zoom Controls (Bottom Right) */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-full border border-[#cfdfd4] shadow-2xs">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.6, z - 0.2))}
                className="p-1.5 hover:bg-[#e6f1ea] rounded-full text-[#0f1d16] cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs px-1 text-[#0f1d16] font-semibold">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2.2, z + 0.2))}
                className="p-1.5 hover:bg-[#e6f1ea] rounded-full text-[#0f1d16] cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="p-1.5 hover:bg-[#e6f1ea] rounded-full text-[#0f1d16] border-l border-[#cfdfd4] cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Media Content with Zoom Transform */}
            <div 
              style={{ transform: `scale(${zoom})`, transition: "transform 0.15s ease-out" }}
              className="relative w-full max-w-3xl h-[340px] sm:h-[420px] flex items-center justify-center p-4 mt-6 sm:mt-0"
            >
              {project.category === "packaging" && activeView === "mockup" ? (
                <BagMockupView project={project} standalone />
              ) : activeView === "construction" && project.constructionImage ? (
                <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden shadow-xs bg-white">
                  <Image
                    src={project.constructionImage}
                    alt={`${project.title} Construction Grid`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
              ) : activeView === "mockup" && project.mockupImage ? (
                <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden shadow-xs bg-white">
                  <Image
                    src={project.mockupImage}
                    alt={`${project.title} Mockup`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full p-4 flex items-center justify-center">
                  <Image
                    src={project.primaryImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-contain filter drop-shadow-sm"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Description & Prepress Specs */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1d16]">
                  {project.title}
                </h2>
                <p className="text-sm font-mono text-[#0052ff] font-semibold mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[#304439] leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Prepress Technical Parameters */}
              {project.prepressDetails && (
                <div className="bg-[#f0f6f2] border border-[#cfdfd4] rounded-2xl p-5 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[#e1ede5] pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#0052ff]" />
                      <span className="font-mono text-xs font-semibold text-[#0f1d16] uppercase">
                        PREPRESS PRODUCTION PARAMETERS
                      </span>
                    </div>
                    <span className="badge-pill bg-white text-emerald-700 border-[#cfdfd4] text-[10px] py-0 px-2">
                      PASS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div>
                      <span className="text-[#5a7366]">Substrate Stock:</span>
                      <p className="font-semibold text-[#0f1d16]">{project.prepressDetails.substrate}</p>
                    </div>
                    <div>
                      <span className="text-[#5a7366]">Spot Color Separations:</span>
                      <p className="font-semibold text-[#0f1d16]">{project.prepressDetails.colors}</p>
                    </div>
                    <div>
                      <span className="text-[#5a7366]">Commercial Run Volume:</span>
                      <p className="font-semibold text-emerald-600">{project.prepressDetails.runCount}</p>
                    </div>
                    <div>
                      <span className="text-[#5a7366]">Bleed & Trapping:</span>
                      <p className="font-semibold text-[#0f1d16]">{project.prepressDetails.tolerance}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Standard Specs Matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {project.specs.map((s, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-[#cfdfd4]">
                    <span className="text-[#5a7366] text-[10px] uppercase block">{s.label}</span>
                    <span className="font-semibold text-[#0f1d16]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Color Swatches & Action Bar */}
            <div className="space-y-4">
              
              {/* Palette Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#cfdfd4] shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#0f1d16] block mb-3 uppercase">
                  COLOR FORMULATION (CLICK TO COPY)
                </span>

                <div className="space-y-2">
                  {project.palette.map((color, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => copyColor(color)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl border border-[#cfdfd4] hover:border-[#b8cfc1] bg-[#f0f6f2] hover:bg-[#e6f1ea] transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-xs font-semibold text-[#0f1d16]">
                          {color}
                        </span>
                      </div>

                      <div className="flex items-center text-xs font-mono text-[#5a7366] group-hover:text-[#0052ff]">
                        {copiedColor === color ? (
                          <span className="text-emerald-600 font-semibold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            Copied!
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-5 rounded-2xl border border-[#cfdfd4] shadow-2xs">
                <span className="font-mono text-xs font-semibold text-[#5a7366] block mb-2.5 uppercase">
                  DISCIPLINE TAGS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#e6f1ea] text-[#304439] border border-[#cfdfd4]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Open Raw Vector Asset */}
              <a
                href={project.primaryImage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.click(1100)}
                className="w-full flex items-center justify-center gap-2 p-3.5 bg-[#0052ff] hover:bg-[#0045d8] text-white font-mono font-semibold text-xs uppercase rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <FileCode className="w-4 h-4 text-emerald-300" />
                <span>OPEN RAW MASTER ASSET</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
