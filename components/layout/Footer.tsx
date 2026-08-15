"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const [time, setTime] = useState<string>("");

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.aiLab, href: "#ai-lab" },
    { name: t.nav.techStack, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#D5E2DE] dark:border-[#24302E] overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#267A66]/30 dark:via-[#9BCEC1]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#D5E2DE] dark:border-[#24302E]">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#F1F6F4] text-[#267A66] dark:bg-[#17201F] dark:text-[#9BCEC1] border border-[#D5E2DE] dark:border-[#24302E] flex items-center justify-center">
                <Cpu size={16} />
              </div>
              <span className="font-mono-tech font-bold text-sm tracking-wider text-[#0B1614] dark:text-[#F1F7F5]">
                SON.DEV
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            {/* System Status telemetry badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F6F4] text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E] text-xs font-mono-tech">
              <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
              <span>{t.footer.allSystems}</span>
              <span className="text-[#627A74] dark:text-[#6F7E7A]">•</span>
              <span className="text-[#267A66] dark:text-[#9BCEC1] font-semibold" suppressHydrationWarning>{time || "UTC Live"}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#627A74] dark:text-[#6F7E7A] font-semibold">
              {t.footer.navigation}
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#334A44] hover:text-[#267A66] dark:text-[#A9B8B4] dark:hover:text-[#9BCEC1] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Network & Connectivity */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#627A74] dark:text-[#6F7E7A] font-semibold">
              {t.footer.connect}
            </div>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] transition-colors group"
              >
                <GithubIcon size={15} className="text-[#627A74] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1]" />
                <span>github.com/{SITE_CONFIG.githubUsername}</span>
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] transition-colors group"
              >
                <LinkedinIcon size={15} className="text-[#627A74] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1]" />
                <span>linkedin.com/in/{SITE_CONFIG.githubUsername}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] transition-colors group"
              >
                <Mail size={15} className="text-[#627A74] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F6F4] text-[#334A44] border border-[#D5E2DE] hover:text-[#267A66] hover:border-[#267A66]/40 dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E] dark:hover:text-[#9BCEC1] transition-all cursor-pointer shadow-sm dark:shadow-none"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
