"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RAGVisualizer } from "./RAGVisualizer";
import { TokenStreamer } from "./TokenStreamer";
import { VectorExplorer } from "./VectorExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Database, Cpu, Network } from "lucide-react";

type LabTab = "rag" | "streamer" | "vector";

export function AILab() {
  const [activeTab, setActiveTab] = useState<LabTab>("rag");

  return (
    <section id="ai-lab" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Background radial technical accents */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#9BCEC1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            badge="03 // Interactive AI Lab"
            title="Systems & Pipeline Playground"
            subtitle="Test real-time retrieval-augmented generation traces, continuous batching token streaming, and vector distance mathematics."
            className="mb-0 md:mb-0"
          />

          {/* Interactive Mode Tabs */}
          <Reveal preset="fadeUp" delay={0.2}>
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none">
              <button
                onClick={() => setActiveTab("rag")}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "rag"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#3B4D48] hover:text-[#0D1715] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "rag" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#2D7A68] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Database size={13} className="relative z-10" />
                <span className="relative z-10">RAG Trace</span>
              </button>

              <button
                onClick={() => setActiveTab("streamer")}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "streamer"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#3B4D48] hover:text-[#0D1715] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "streamer" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#2D7A68] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Cpu size={13} className="relative z-10" />
                <span className="relative z-10">Token Streamer</span>
              </button>

              <button
                onClick={() => setActiveTab("vector")}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono-tech flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === "vector"
                    ? "text-white dark:text-[#070A0A] font-bold"
                    : "text-[#3B4D48] hover:text-[#0D1715] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {activeTab === "vector" && (
                  <motion.div
                    layoutId="activeLabTab"
                    className="absolute inset-0 rounded-xl bg-[#2D7A68] dark:bg-[#9BCEC1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Network size={13} className="relative z-10" />
                <span className="relative z-10">Vector Space</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Tab content area */}
        <Reveal preset="fadeUp" delay={0.3}>
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
