"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroActions() {
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
        <span>View Systems & Projects</span>
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
        <span className="w-2 h-2 rounded-full bg-[#2D7A68] dark:bg-[#9BCEC1] animate-pulse" />
        <span>Let&apos;s Connect</span>
      </MagneticButton>

      <a
        href={SITE_CONFIG.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-mono-tech text-[#3B4D48] hover:text-[#0D1715] hover:bg-[#F0F4F2] border border-[#D1DDD9]/60 hover:border-[#D1DDD9] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#111817] dark:border-transparent dark:hover:border-[#24302E] transition-all cursor-pointer"
      >
        <GithubIcon size={16} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
        <span>GitHub / roser-ai</span>
      </a>
    </div>
  );
}
