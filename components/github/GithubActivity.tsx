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

export function GithubActivity() {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-[#E5EDE9] border-[#D1DDD9] dark:bg-[#111817] dark:border-[#24302E]/60";
      case 1:
        return "bg-[#2D7A68]/25 border-[#2D7A68]/35 dark:bg-[#9BCEC1]/20 dark:border-[#9BCEC1]/30";
      case 2:
        return "bg-[#2D7A68]/50 border-[#2D7A68]/60 dark:bg-[#9BCEC1]/45 dark:border-[#9BCEC1]/50";
      case 3:
        return "bg-[#2D7A68] border-[#2D7A68] dark:bg-[#6FAFA0] dark:border-[#6FAFA0]";
      case 4:
        return "bg-[#1E5649] border-[#1E5649] shadow-sm dark:bg-[#9BCEC1] dark:border-[#9BCEC1] dark:shadow-[0_0_8px_rgba(155,206,193,0.5)]";
      default:
        return "bg-[#E5EDE9] border-[#D1DDD9] dark:bg-[#111817] dark:border-[#24302E]";
    }
  };

  return (
    <section className="relative py-14 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="06 // Open Source & Activity"
          title="Production Velocity & GitHub Metrics"
          subtitle="Continuous integration, active open source research contributions, and day-to-day engineering velocity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Contribution Heatmap Card (8 cols) */}
          <div className="lg:col-span-8 p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5 flex flex-col justify-between">
            {/* Top Stat Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D1DDD9] dark:border-[#24302E] pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] flex items-center justify-center">
                  <GithubIcon size={18} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#0D1715] dark:text-[#F1F7F5]">
                    github.com/{GITHUB_DATA.username}
                  </div>
                  <div className="text-xs font-mono-tech text-[#1E5649] dark:text-[#6FAFA0] font-semibold">
                    {GITHUB_DATA.totalContributions} Contributions (Past 6 Months)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono-tech">
                <div className="flex items-center gap-1.5 text-[#0D1715] dark:text-[#F1F7F5] font-semibold">
                  <Flame size={14} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
                  <span>{GITHUB_DATA.currentStreak} Day Streak</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#3B4D48] dark:text-[#A9B8B4]">
                  <Star size={14} className="text-[#1E5649] dark:text-[#6FAFA0]" />
                  <span>{GITHUB_DATA.totalStars} Stars</span>
                </div>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-2 overflow-x-auto pb-1">
              <div className="flex gap-1.5 min-w-[540px] justify-between">
                {GITHUB_DATA.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3 h-3 rounded-sm border transition-all duration-200 cursor-pointer ${getHeatmapColor(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Heatmap legend and tooltip */}
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#627772] dark:text-[#6F7E7A] pt-1">
                <div>
                  {hoveredDay ? (
                    <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
                      {hoveredDay.count} contributions on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>Hover over any cell for commit telemetry</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#E5EDE9] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#2D7A68]/25 dark:bg-[#9BCEC1]/20" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#2D7A68]/50 dark:bg-[#9BCEC1]/50" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#2D7A68] dark:bg-[#9BCEC1]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Language distribution bar */}
            <div className="space-y-1.5 pt-2 border-t border-[#D1DDD9] dark:border-[#24302E]">
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                Primary Language Breakdown
              </div>
              <div className="h-2 w-full rounded-full bg-[#E5EDE9] dark:bg-[#111817] overflow-hidden flex">
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
              <div className="flex flex-wrap gap-3 text-xs font-mono-tech pt-1">
                {GITHUB_DATA.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-[#3B4D48] dark:text-[#A9B8B4]">{lang.name}</span>
                    <span className="text-[#627772] dark:text-[#6F7E7A]">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Commits / PR Activity List (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D1DDD9] dark:border-[#24302E] pb-3 mb-3">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
                  Recent Activity Stream
                </span>
                <span className="text-[10px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
                  Verified Git Log
                </span>
              </div>

              <div className="space-y-2.5">
                {GITHUB_DATA.recentActivity.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="text-[#1E5649] dark:text-[#6FAFA0] font-semibold truncate max-w-[170px]">
                        {act.repo.split("/")[1]}
                      </span>
                      <span className="text-[#627772] dark:text-[#6F7E7A]">{act.timeAgo}</span>
                    </div>
                    <p className="text-[#0D1715] dark:text-[#F1F7F5] font-mono-tech text-[11px] leading-relaxed line-clamp-2">
                      {act.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/roser-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#F0F4F2] text-[#0D1715] hover:text-[#2D7A68] border border-[#D1DDD9] hover:border-[#2D7A68]/40 dark:bg-[#111817] dark:border-[#24302E] dark:hover:border-[#9BCEC1]/40 dark:text-[#F1F7F5] dark:hover:text-[#9BCEC1] text-xs font-mono-tech transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <GithubIcon size={14} />
              <span>Explore All Repositories</span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
