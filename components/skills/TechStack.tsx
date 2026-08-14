"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="04 // Technical Arsenal"
          title="Production Stack & Tooling"
          subtitle="Battle-tested tools, deep neural frameworks, distributed systems, and low-latency databases utilized across production environments."
        />

        {/* Filters & Search Header */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech transition-all cursor-pointer ${
                    isActive
                      ? "text-white dark:text-[#070A0A] font-bold"
                      : "text-[#3B4D48] hover:text-[#0D1715] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCat"
                      className="absolute inset-0 rounded-xl bg-[#2D7A68] dark:bg-[#9BCEC1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Field */}
          <div className="relative">
            <Search
              size={13}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#627772] dark:text-[#6F7E7A]"
            />
            <input
              type="text"
              placeholder="Search library, tool, framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech text-[#0D1715] dark:text-[#F1F7F5] placeholder-[#627772] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#2D7A68]/50 dark:focus:border-[#9BCEC1]/50 w-full md:w-64 shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
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
                  className="p-5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] hover:border-[#2D7A68]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] group-hover:border-[#2D7A68]/50 dark:group-hover:border-[#9BCEC1]/40 flex items-center justify-center transition-colors">
                          <Icon size={16} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[#0D1715] dark:text-[#F1F7F5] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#F0F4F2] text-[#1E5649] dark:bg-[#111817] dark:text-[#6FAFA0] border border-[#D1DDD9] dark:border-[#24302E] font-semibold">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed mb-3">
                      {skill.description}
                    </p>
                  </div>

                  {/* Key Libraries / Frameworks */}
                  <div className="pt-2.5 border-t border-[#D1DDD9] dark:border-[#24302E]/60 space-y-1.5">
                    <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                      Libraries & Frameworks
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.keyLibraries.map((lib) => (
                        <span
                          key={lib}
                          className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#F0F4F2] text-[#0D1715] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D1DDD9] dark:border-[#24302E]"
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
