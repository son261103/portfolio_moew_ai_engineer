"use client";

import React from "react";
import { EXPERIENCES } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="05 // Career Track"
          title="Engineering Experience & Impact"
          subtitle="A track record of architecting distributed systems, production LLM pipelines, and accelerating engineering teams."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-[#D1DDD9] dark:border-[#24302E] space-y-8 ml-2 sm:ml-4">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} preset="fadeUp" delay={idx * 0.12}>
              <div className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F8FAF9] dark:bg-[#070A0A] border-2 border-[#2D7A68] dark:border-[#9BCEC1] group-hover:scale-125 group-hover:bg-[#2D7A68] dark:group-hover:bg-[#9BCEC1] transition-all duration-300 shadow-[0_0_10px_rgba(45,122,104,0.3)] dark:shadow-[0_0_10px_rgba(155,206,193,0.5)]" />

                {/* Experience Card */}
                <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] hover:border-[#2D7A68]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 space-y-5">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D1DDD9] dark:border-[#24302E] pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#0D1715] dark:text-[#F1F7F5] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-[#627772] dark:text-[#6F7E7A]">@</span>
                        <span className="text-sm sm:text-base font-semibold text-[#1E5649] dark:text-[#6FAFA0]">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-[#627772] dark:text-[#6F7E7A] mt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Impact Metric Badge */}
                    <div className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] flex items-center gap-2">
                      <TrendingUp size={14} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
                      <div className="text-right">
                        <div className="text-[9px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                          {exp.impactMetric.label}
                        </div>
                        <div className="text-xs font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1]">
                          {exp.impactMetric.value}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Bullet Achievements */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono-tech uppercase tracking-wider text-[#1E5649] dark:text-[#6FAFA0] font-semibold">
                      Key Deliverables & Systems Built
                    </div>
                    <div className="space-y-1.5">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-[#0D1715] dark:text-[#F1F7F5] leading-relaxed">
                          <CheckCircle2 size={13} className="text-[#2D7A68] dark:text-[#9BCEC1] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies footer */}
                  <div className="pt-3 border-t border-[#D1DDD9] dark:border-[#24302E]/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#F0F4F2] text-[#3B4D48] dark:bg-[#111817] dark:text-[#A9B8B4] border border-[#D1DDD9] dark:border-[#24302E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
