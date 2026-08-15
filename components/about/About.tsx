"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "./Stats";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  BrainCircuit,
  Bot,
  Network,
  Server,
  Code2,
  ScanEye,
  GraduationCap,
} from "lucide-react";

const FOCUS_ICONS = [BrainCircuit, Bot, Network, Server, Code2, ScanEye];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.about.subtitle}
          align="center"
        />

        {/* Large Editorial Statement */}
        <Reveal preset="fadeUp" delay={0.15}>
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] relative overflow-hidden shadow-sm dark:shadow-2xl">
            <div className="space-y-4 max-w-5xl">
              <div className="text-xs font-mono-tech text-[#267A66] dark:text-[#9BCEC1] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1]" />
                <span>{t.about.tenetBadge}</span>
              </div>

              <blockquote className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0B1614] dark:text-[#F1F7F5] leading-tight">
                &ldquo;{t.about.quote1}
                <span className="text-[#267A66] dark:text-[#9BCEC1]">
                  {t.about.quoteHighlight}
                </span>
                {t.about.quote2}&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#334A44] dark:text-[#A9B8B4] leading-relaxed pt-1">
                {t.about.paragraph}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Education & Credentials */}
        <div className="pt-6">
          <Reveal preset="fadeUp" delay={0.2}>
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] flex items-center justify-center text-[#267A66] dark:text-[#9BCEC1] shrink-0 shadow-xs">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1614] dark:text-[#F1F7F5]">
                    {t.about.educationTitle}
                  </h4>
                  <p className="text-xs text-[#334A44] dark:text-[#A9B8B4]">
                    {t.about.educationDegree}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono-tech text-[#627A74] dark:text-[#6F7E7A] bg-white dark:bg-[#0C1110] px-3.5 py-1.5 rounded-xl border border-[#D5E2DE] dark:border-[#24302E]">
                {t.about.devmasterCourse}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-8">
          {t.about.focusAreas.map((area, idx) => {
            const Icon = FOCUS_ICONS[idx] || BrainCircuit;
            return (
              <Reveal key={area.title} preset="fadeUp" delay={0.08 * (idx + 1)}>
                <div className="p-6 rounded-2xl bg-white dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#F1F6F4] dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] group-hover:border-[#267A66]/50 dark:group-hover:border-[#9BCEC1]/40 flex items-center justify-center mb-3 transition-colors">
                      <Icon size={18} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#D5E2DE] dark:border-[#24302E]/60 flex items-center justify-between text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                    <span>{`0${idx + 1} // TECH`}</span>
                    <span className="group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] font-semibold transition-colors">
                      Core Skill →
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Animated Statistics */}
        <div className="pt-6">
          <Stats />
        </div>
      </div>
    </section>
  );
}
