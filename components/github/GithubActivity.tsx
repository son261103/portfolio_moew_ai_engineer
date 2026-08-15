"use client";

import React, { useState } from "react";
import { GITHUB_DATA } from "@/data/github";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Flame,
  Star,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function GithubActivity() {
  const { t } = useI18n();
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[#E5EFEA] border-[#D5E2DE] dark:bg-[#111817] dark:border-[#24302E]/60";
      case 1:
        return "bg-[#267A66]/25 border-[#267A66]/35 dark:bg-[#9BCEC1]/20 dark:border-[#9BCEC1]/30";
      case 2:
        return "bg-[#267A66]/50 border-[#267A66]/60 dark:bg-[#9BCEC1]/45 dark:border-[#9BCEC1]/50";
      case 3:
        return "bg-[#267A66] border-[#267A66] dark:bg-[#6FAFA0] dark:border-[#6FAFA0]";
      case 4:
        return "bg-[#1C5B4C] border-[#1C5B4C] shadow-sm dark:bg-[#9BCEC1] dark:border-[#9BCEC1] dark:shadow-[0_0_8px_rgba(155,206,193,0.5)]";
      default:
        return "bg-[#E5EFEA] border-[#D5E2DE] dark:bg-[#111817] dark:border-[#24302E]";
    }
  };

  return (
    <section className="relative py-14 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.github.badge}
          title={t.github.title}
          subtitle={t.github.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contribution Heatmap Card (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-6 flex flex-col justify-between">
            {/* Top Stat Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D5E2DE] dark:border-[#24302E] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] flex items-center justify-center">
                  <GithubIcon size={20} className="text-[#267A66] dark:text-[#9BCEC1]" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-[#0B1614] dark:text-[#F1F7F5]">
                    github.com/{GITHUB_DATA.username}
                  </div>
                  <div className="text-xs font-mono-tech text-[#1C5B4C] dark:text-[#6FAFA0] font-semibold">
                    {GITHUB_DATA.totalContributions} {t.github.contributionsLabel}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono-tech">
                <div className="flex items-center gap-1.5 text-[#0B1614] dark:text-[#F1F7F5] font-semibold">
                  <Flame size={15} className="text-[#267A66] dark:text-[#9BCEC1]" />
                  <span>{GITHUB_DATA.currentStreak} {t.github.streakLabel}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#334A44] dark:text-[#A9B8B4]">
                  <Star size={15} className="text-[#1C5B4C] dark:text-[#6FAFA0]" />
                  <span>{GITHUB_DATA.totalStars} {t.github.starsLabel}</span>
                </div>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-2.5 overflow-x-auto pb-1">
              <div className="flex gap-2 min-w-[560px] justify-between">
                {GITHUB_DATA.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-2">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3.5 h-3.5 rounded-sm border transition-all duration-200 cursor-pointer ${getHeatmapColor(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Heatmap legend and tooltip */}
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A] pt-1">
                <div>
                  {hoveredDay ? (
                    <span className="text-[#267A66] dark:text-[#9BCEC1] font-bold">
                      {hoveredDay.count} contributions on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>Hover over any cell for commit telemetry</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#E5EFEA] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#267A66]/25 dark:bg-[#9BCEC1]/20" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#267A66]/50 dark:bg-[#9BCEC1]/50" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#267A66] dark:bg-[#9BCEC1]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Language distribution bar */}
            <div className="space-y-2 pt-2 border-t border-[#D5E2DE] dark:border-[#24302E]">
              <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
                {t.github.languageBreakdown}
              </div>
              <div className="h-2 w-full rounded-full bg-[#E5EFEA] dark:bg-[#111817] overflow-hidden flex">
                {GITHUB_DATA.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono-tech pt-1">
                {GITHUB_DATA.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-[#334A44] dark:text-[#A9B8B4]">{lang.name}</span>
                    <span className="text-[#627A74] dark:text-[#6F7E7A]">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Commits / PR Activity List (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D5E2DE] dark:border-[#24302E] pb-3 mb-3">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#267A66] dark:text-[#9BCEC1] font-bold">
                  {t.github.recentTitle}
                </span>
                <span className="text-[10px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                  {t.github.verifiedLog}
                </span>
              </div>

              <div className="space-y-3">
                {GITHUB_DATA.recentActivity.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="text-[#1C5B4C] dark:text-[#6FAFA0] font-semibold truncate max-w-[170px]">
                        {act.repo.split("/")[1]}
                      </span>
                      <span className="text-[#627A74] dark:text-[#6F7E7A]">{act.timeAgo}</span>
                    </div>
                    <p className="text-[#0B1614] dark:text-[#F1F7F5] font-mono-tech text-[11px] leading-relaxed line-clamp-2">
                      {act.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_DATA.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#F1F6F4] text-[#0B1614] hover:text-[#267A66] border border-[#D5E2DE] hover:border-[#267A66]/40 dark:bg-[#111817] dark:border-[#24302E] dark:hover:border-[#9BCEC1]/40 dark:text-[#F1F7F5] dark:hover:text-[#9BCEC1] text-xs font-mono-tech transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs dark:shadow-none"
            >
              <GithubIcon size={15} />
              <span>{t.github.exploreRepo}</span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
