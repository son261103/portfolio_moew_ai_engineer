"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  BrainCircuit,
  Network,
  Bot,
  Cpu,
  ScanEye,
  Server,
  Layers,
  Code2,
  Zap,
  Globe,
  FileCode,
  Palette,
  DatabaseZap,
  Database,
  HardDrive,
  Share2,
  Box,
  Cloud,
  GitBranch,
  Activity,
  Terminal,
  Search,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BrainCircuit,
  Network,
  Bot,
  Cpu,
  ScanEye,
  Server,
  Layers,
  Code2,
  Zap,
  Globe,
  FileCode,
  Palette,
  DatabaseZap,
  Database,
  HardDrive,
  Share2,
  Box,
  Cloud,
  GitBranch,
  Activity,
  Terminal,
};

export function TechStack() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.keyLibraries.some((lib) =>
        lib.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Heading */}
        <SectionHeading
          badge={t.techStack.badge}
          title={t.techStack.title}
          subtitle={t.techStack.subtitle}
          align="center"
          className="mb-8"
        />

        {/* Unified Single Row: Filter Tabs on Left + Search Input on Right (Same Line) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const displayLabel = t.techStack.categories[cat] || cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech whitespace-nowrap transition-all cursor-pointer select-none ${
                    isActive
                      ? "text-white dark:text-[#070A0A] font-bold"
                      : "text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCat"
                      className="absolute inset-0 rounded-xl bg-[#267A66] dark:bg-[#9BCEC1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{displayLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Field on Same Row */}
          <div className="relative shrink-0 w-full sm:w-72">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627A74] dark:text-[#6F7E7A]"
            />
            <input
              type="text"
              placeholder={t.techStack.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech text-[#0B1614] dark:text-[#F1F7F5] placeholder-[#627A74] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#267A66]/60 dark:focus:border-[#9BCEC1]/60 shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.iconName] || Terminal;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] group-hover:border-[#267A66]/50 dark:group-hover:border-[#9BCEC1]/40 flex items-center justify-center transition-colors">
                          <Icon size={18} className="text-[#267A66] dark:text-[#9BCEC1]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                            {t.techStack.categories[skill.category] || skill.category}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-[#F1F6F4] text-[#1C5B4C] dark:bg-[#111817] dark:text-[#6FAFA0] border border-[#D5E2DE] dark:border-[#24302E] font-semibold">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Key Libraries / Frameworks */}
                  <div className="pt-3 border-t border-[#D5E2DE] dark:border-[#24302E]/60 space-y-2">
                    <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
                      {t.techStack.librariesTitle}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.keyLibraries.map((lib) => (
                        <span
                          key={lib}
                          className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-md bg-[#F1F6F4] text-[#0B1614] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D5E2DE] dark:border-[#24302E]"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
