"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nProvider";

const CATEGORIES = [
  "All",
  "LLM / RAG",
  "Autonomous Agents",
  "AI Systems",
  "Backend / Infra",
] as const;

export function ProjectGrid() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading with bilateral symmetry */}
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          align="center"
          className="mb-6"
        />

        {/* Centered Filter Tabs Bar */}
        <Reveal preset="fadeUp" delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const displayLabel = cat === "All" ? t.projects.filterAll : cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-mono-tech whitespace-nowrap transition-all cursor-pointer select-none ${
                      isActive
                        ? "text-white dark:text-[#070A0A] font-bold"
                        : "text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#111817]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectFilter"
                        className="absolute inset-0 rounded-xl bg-[#267A66] dark:bg-[#9BCEC1]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{displayLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Project Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                className="h-full"
              >
                <ProjectCard project={project} featured={false} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
