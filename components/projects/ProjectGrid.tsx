"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "LLM / RAG",
  "Autonomous Agents",
  "AI Systems",
  "Backend / Infra",
] as const;

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            badge="02 // Production Engineering"
            title="Featured Systems & Architectures"
            subtitle="Selected production AI pipelines, low-latency backends, and agent frameworks built with mathematical rigor and systems scale."
            className="mb-0 md:mb-0"
          />

          {/* Filter Tabs */}
          <Reveal preset="fadeUp" delay={0.2}>
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-all cursor-pointer ${
                      isActive
                        ? "text-white dark:text-[#070A0A] font-bold"
                        : "text-[#3B4D48] hover:text-[#0D1715] hover:bg-[#F0F4F2] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#111817]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectFilter"
                        className="absolute inset-0 rounded-xl bg-[#2D7A68] dark:bg-[#9BCEC1]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Project Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} featured={project.featured} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
