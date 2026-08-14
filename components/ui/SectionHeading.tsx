import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-6 md:mb-8 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      <Reveal preset="fadeUp" delay={0.1}>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F6F4] border border-[#267A66]/30 text-[#267A66] dark:bg-[#111817] dark:border-[#9BCEC1]/20 dark:text-[#9BCEC1] text-xs font-mono-tech uppercase tracking-widest mb-3 font-semibold ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
          {badge}
        </div>
      </Reveal>

      <Reveal preset="fadeUp" delay={0.2}>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0B1614] dark:text-[#F1F7F5] leading-tight">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal preset="fadeUp" delay={0.3}>
          <p className="mt-2.5 text-[#334A44] dark:text-[#A9B8B4] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
