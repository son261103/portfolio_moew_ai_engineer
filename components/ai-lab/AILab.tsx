"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RAGVisualizer } from "./RAGVisualizer";
import { TokenStreamer } from "./TokenStreamer";
import { VectorExplorer } from "./VectorExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Database, Cpu, Network } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

type LabTab = "rag" | "streamer" | "vector";

export function AILab() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<LabTab>("rag");

  return (
    <section id="ai-lab" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Background radial technical accents */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#9BCEC1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading with bilateral symmetry */}
        <SectionHeading
          badge={t.aiLab.badge}
          title={t.aiLab.title}
          subtitle={t.aiLab.subtitle}
          align="center"
          className="mb-6"
        />

        {/* Centered Mode Tabs Bar */}
        <Reveal preset="fadeUp" delay={0.15}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none">
              <button
                onClick={() => setActiveTab("rag")}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono-tech whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer select-none ${
                  activeTab === "rag"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "rag" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#267A66] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Database size={13} className="relative z-10" />
                <span className="relative z-10">{t.aiLab.tabRag}</span>
              </button>

              <button
                onClick={() => setActiveTab("streamer")}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono-tech whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer select-none ${
                  activeTab === "streamer"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "streamer" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#267A66] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Cpu size={13} className="relative z-10" />
                <span className="relative z-10">{t.aiLab.tabStreamer}</span>
              </button>

              <button
                onClick={() => setActiveTab("vector")}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono-tech whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer select-none ${
                  activeTab === "vector"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "vector" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#267A66] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Network size={13} className="relative z-10" />
                <span className="relative z-10">{t.aiLab.tabVector}</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tab content area */}
        <Reveal preset="fadeUp" delay={0.25}>
          <div className="transition-all duration-300">
            {activeTab === "rag" && <RAGVisualizer />}
            {activeTab === "streamer" && <TokenStreamer />}
            {activeTab === "vector" && <VectorExplorer />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
