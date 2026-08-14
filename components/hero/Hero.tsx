"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { HeroActions } from "./HeroActions";
import { AIVisualization } from "./AIVisualization";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting and fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-radial-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 space-y-8 sm:space-y-10">
        {/* Top Status & Role Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E] text-xs font-mono-tech shadow-sm dark:shadow-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
            <span className="text-[#0B1614] dark:text-[#F1F7F5] font-semibold">
              Available for opportunities
            </span>
            <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
            <span className="text-[#267A66] dark:text-[#9BCEC1] font-semibold">Full-Time / Advisory</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono-tech text-[#627A74] dark:text-[#6F7E7A]"
          >
            <Terminal size={13} className="text-[#267A66] dark:text-[#9BCEC1]" />
            <span>AI Systems & Architecture</span>
          </motion.div>
        </div>

        {/* Main Editorial Hero Typography */}
        <div className="space-y-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono-tech text-xs tracking-[0.25em] text-[#267A66] dark:text-[#9BCEC1] uppercase font-bold flex items-center gap-2"
          >
            <span className="w-5 h-px bg-[#267A66]/60 dark:bg-[#9BCEC1]/60" />
            <span>AI Engineer / Software Architect</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight text-[#0B1614] dark:text-[#F1F7F5] leading-[0.98] uppercase">
            <span>I BUILD </span>
            <span className="text-[#267A66] dark:text-[#9BCEC1]">INTELLIGENT </span>
            <br className="hidden sm:inline" />
            <span>SYSTEMS.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#334A44] dark:text-[#A9B8B4] font-normal leading-relaxed max-w-2xl"
          >
            I build production-grade AI systems and resilient software that turn complex research into scalable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono-tech text-[#1C5B4C] dark:text-[#6FAFA0]"
          >
            <span className="px-2.5 py-1 rounded bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-sm dark:shadow-none font-medium">
              Generative AI
            </span>
            <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
            <span className="px-2.5 py-1 rounded bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-sm dark:shadow-none font-medium">
              Hybrid RAG
            </span>
            <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
            <span className="px-2.5 py-1 rounded bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-sm dark:shadow-none font-medium">
              Autonomous Agents
            </span>
            <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
            <span className="px-2.5 py-1 rounded bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-sm dark:shadow-none font-medium">
              High-Throughput Backend
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HeroActions />
          </motion.div>
        </div>

        {/* Abstract AI System Pipeline Visualization */}
        <div className="pt-2">
          <AIVisualization />
        </div>
      </div>
    </section>
  );
}
