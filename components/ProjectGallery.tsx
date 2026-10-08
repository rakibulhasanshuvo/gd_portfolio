"use client";

import { useState, useMemo } from "react";
import { Grid, List, Search } from "lucide-react";
import { PROJECTS, CATEGORIES, Project } from "@/data/projects";
import { sound } from "@/lib/audio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"masonry" | "spec">("masonry");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    sound.click(950);
    setActiveCategory(catId);
  };

  const handleViewModeChange = (mode: "masonry" | "spec") => {
    sound.click(1100);
    setViewMode(mode);
  };

  return (
    <section id="projects-section" className="py-16 sm:py-24 px-4 lg:px-8 max-w-7xl mx-auto">
      
      {/* Gallery Section Header & Filter Controls */}
      <div className="flex flex-col gap-6 mb-12">
        
        {/* Top Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#cfdfd4] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#5a7366]">
              <span>[CATALOG: {PROJECTS.length} CURATED MASTERWORKS]</span>
              <span>✦</span>
              <span className="text-[#0052ff] font-semibold">2025 ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f1d16] uppercase tracking-tight">
              Selected Disciplines
            </h2>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-white/80 p-1 rounded-full border border-[#cfdfd4]">
            <button
              type="button"
              onClick={() => handleViewModeChange("masonry")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full cursor-pointer transition-all ${
                viewMode === "masonry"
                  ? "bg-[#0f1d16] text-white shadow-xs"
                  : "text-[#304439] hover:text-[#0f1d16]"
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-emerald-500" />
              <span>3D MASONRY</span>
            </button>
            <button
              type="button"
              onClick={() => handleViewModeChange("spec")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full cursor-pointer transition-all ${
                viewMode === "spec"
                  ? "bg-[#0f1d16] text-white shadow-xs"
                  : "text-[#304439] hover:text-[#0f1d16]"
              }`}
            >
              <List className="w-3.5 h-3.5 text-[#0052ff]" />
              <span>SPEC SHEET</span>
            </button>
          </div>
        </div>

        {/* Filter Bar: Category Tabs & Instant Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 text-xs font-mono font-semibold uppercase rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0f1d16] text-white border-[#0f1d16] shadow-xs"
                      : "bg-white text-[#304439] border-[#cfdfd4] hover:border-[#b8cfc1] hover:bg-[#e6f1ea] shadow-2xs"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-60 text-[10px]">({cat.count})</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a7366]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vector, client, tag..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-white border border-[#cfdfd4] rounded-full shadow-2xs focus:outline-hidden focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/10 text-[#0f1d16] placeholder:text-[#8ca395] transition-all"
            />
          </div>

        </div>

      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="w-full bg-white border border-dashed border-[#cfdfd4] rounded-2xl p-12 text-center my-8">
          <p className="font-mono text-sm text-[#5a7366]">
            No projects matched &quot;{searchQuery}&quot; in this category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="mt-4 px-5 py-2 bg-[#0f1d16] hover:bg-[#0052ff] text-white font-mono text-xs rounded-full font-semibold transition-all"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === "masonry" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
              viewMode="masonry"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
              viewMode="spec"
            />
          ))}
        </div>
      )}

      {/* Deep-Dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        allProjects={filteredProjects}
      />

    </section>
  );
}
