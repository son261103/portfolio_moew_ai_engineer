"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { HeroActions } from "./HeroActions";
import { AIVisualization } from "./AIVisualization";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting and fine technical grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-8 sm:space-y-10">
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
              {t.hero.availableBadge}
            </span>
            <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
            <span className="text-[#267A66] dark:text-[#9BCEC1] font-semibold">
              {t.hero.roleBadge}
            </span>
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

        {/* Two-Column Hero Row: Left = Content, Right = Portrait Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono-tech text-xs tracking-[0.25em] text-[#267A66] dark:text-[#9BCEC1] uppercase font-bold flex items-center gap-2"
            >
              <span className="w-5 h-px bg-[#267A66]/60 dark:bg-[#9BCEC1]/60" />
              <span>Junior AI Engineer / Backend Developer</span>
            </motion.div>

            {/* Clean 2-line Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[68px] font-black tracking-tight text-[#0B1614] dark:text-[#F1F7F5] leading-[1.08] uppercase">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block text-[#267A66] dark:text-[#9BCEC1]">
                {t.hero.titleLine2Highlight}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#334A44] dark:text-[#A9B8B4] font-normal leading-relaxed max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono-tech text-[#1C5B4C] dark:text-[#6FAFA0]"
            >
              <span className="px-3 py-1 rounded-lg bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-xs dark:shadow-none font-medium">
                {t.hero.tags.genai}
              </span>
              <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-xs dark:shadow-none font-medium">
                {t.hero.tags.graphrag}
              </span>
              <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-xs dark:shadow-none font-medium">
                {t.hero.tags.agents}
              </span>
              <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#6FAFA0] dark:border-[#24302E] shadow-xs dark:shadow-none font-medium">
                {t.hero.tags.backend}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-2"
            >
              <HeroActions />
            </motion.div>
          </div>

          {/* Right Column: Refined Portrait Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] p-4 shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] group">
              {/* Tech corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#267A66] dark:border-[#9BCEC1] rounded-tl-sm opacity-60" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#267A66] dark:border-[#9BCEC1] rounded-tr-sm opacity-60" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#267A66] dark:border-[#9BCEC1] rounded-bl-sm opacity-60" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#267A66] dark:border-[#9BCEC1] rounded-br-sm opacity-60" />

              {/* Portrait Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F1F6F4] dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E]">
                <Image
                  src="/avatar.jpg"
                  alt="Pham Le Son - Junior AI Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 260px, 290px"
                  className="object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient vignette overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Status pill on photo */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono-tech">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#9BCEC1] animate-pulse" />
                    <span className="font-semibold">{SITE_CONFIG.name}</span>
                  </div>
                  <span className="text-[#9BCEC1] text-[10px]">AI Engineer</span>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#334A44] dark:text-[#A9B8B4]">
                    <MapPin size={12} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    <span>Hà Nội, Vietnam</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#267A66] dark:text-[#9BCEC1] font-mono-tech text-[11px] font-bold">
                    <CheckCircle2 size={12} />
                    <span>EAUT 2025</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D5E2DE] dark:border-[#24302E] flex items-center justify-between text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                  <span>Focus: GraphRAG · Agents</span>
                  <Sparkles size={12} className="text-[#267A66] dark:text-[#9BCEC1]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abstract AI System Pipeline Visualization */}
        <div className="pt-4">
          <AIVisualization />
        </div>
      </div>
    </section>
  );
}
