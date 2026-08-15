"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function HeroActions() {
  const { t } = useI18n();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-wrap items-center gap-3.5 pt-2">
      <MagneticButton
        onClick={scrollToProjects}
        variant="primary"
        size="lg"
        className="group shadow-md"
      >
        <span>{t.hero.viewProjects}</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </MagneticButton>

      <MagneticButton
        onClick={scrollToContact}
        variant="secondary"
        size="lg"
        className="group"
      >
        <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
        <span>{t.hero.letsConnect}</span>
      </MagneticButton>

      <a
        href={SITE_CONFIG.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-mono-tech text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] border border-[#D5E2DE]/80 hover:border-[#D5E2DE] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#111817] dark:border-[#24302E]/60 dark:hover:border-[#24302E] transition-all cursor-pointer shadow-xs dark:shadow-none"
      >
        <GithubIcon size={16} className="text-[#267A66] dark:text-[#9BCEC1]" />
        <span>{t.hero.githubLink}</span>
      </a>
    </div>
  );
}
