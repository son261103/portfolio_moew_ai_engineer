"use client";

import React from "react";
import { EXPERIENCES } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ExperienceTimeline() {
  const { t } = useI18n();

  return (
    <section id="experience" className="relative py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.experience.badge}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          align="center"
        />

        <div className="relative pl-6 sm:pl-8 border-l border-[#D5E2DE] dark:border-[#24302E] space-y-8 ml-2 sm:ml-4 w-full">
          {EXPERIENCES.map((exp, idx) => {
            const translatedExp =
              t.experience.items.find((item) => item.id === exp.id) || {
                role: exp.role,
                company: exp.company,
                period: exp.period,
                location: exp.location,
                summary: exp.summary,
                achievements: exp.achievements,
                impactLabel: exp.impactMetric.label,
                impactValue: exp.impactMetric.value,
              };

            return (
              <Reveal key={exp.id} preset="fadeUp" delay={idx * 0.12}>
                <div className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F8FAF9] dark:bg-[#070A0A] border-2 border-[#267A66] dark:border-[#9BCEC1] group-hover:scale-125 group-hover:bg-[#267A66] dark:group-hover:bg-[#9BCEC1] transition-all duration-300 shadow-[0_0_10px_rgba(38,122,102,0.3)] dark:shadow-[0_0_10px_rgba(155,206,193,0.5)]" />

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 space-y-5">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D5E2DE] dark:border-[#24302E] pb-3.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-xl font-bold text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors">
                            {translatedExp.role}
                          </h3>
                          <span className="text-[#627A74] dark:text-[#6F7E7A]">@</span>
                          <span className="text-base sm:text-lg font-semibold text-[#1C5B4C] dark:text-[#6FAFA0]">
                            {translatedExp.company}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-[#627A74] dark:text-[#6F7E7A] mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {translatedExp.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {translatedExp.period}
                          </span>
                        </div>
                      </div>

                      {/* Impact Metric Badge */}
                      <div className="self-start sm:self-center px-3.5 py-2 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] flex items-center gap-2.5 shadow-xs">
                        <TrendingUp size={15} className="text-[#267A66] dark:text-[#9BCEC1]" />
                        <div className="text-right">
                          <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
                            {translatedExp.impactLabel}
                          </div>
                          <div className="text-xs sm:text-sm font-mono-tech font-bold text-[#267A66] dark:text-[#9BCEC1]">
                            {translatedExp.impactValue}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] leading-relaxed">
                      {translatedExp.summary}
                    </p>

                    {/* Key Bullet Achievements */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono-tech uppercase tracking-wider text-[#1C5B4C] dark:text-[#6FAFA0] font-semibold">
                        {t.experience.deliverablesTitle}
                      </div>
                      <div className="space-y-2">
                        {translatedExp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1614] dark:text-[#F1F7F5] leading-relaxed">
                            <CheckCircle2 size={14} className="text-[#267A66] dark:text-[#9BCEC1] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies footer */}
                    <div className="pt-3.5 border-t border-[#D5E2DE] dark:border-[#24302E]/60 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-xs font-mono-tech px-2.5 py-0.5 rounded bg-[#F1F6F4] text-[#334A44] dark:bg-[#111817] dark:text-[#A9B8B4] border border-[#D5E2DE] dark:border-[#24302E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
