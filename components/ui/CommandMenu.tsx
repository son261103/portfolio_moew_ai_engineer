"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileCode,
  Layers,
  Sparkles,
  Briefcase,
  Mail,
  X,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function CommandMenu() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { name: t.nav.about, href: "#about", icon: Sparkles, section: "Navigation" },
    { name: t.nav.projects, href: "#projects", icon: Layers, section: "Navigation" },
    { name: t.nav.aiLab, href: "#ai-lab", icon: FileCode, section: "Navigation" },
    { name: t.nav.techStack, href: "#skills", icon: Command, section: "Navigation" },
    { name: t.nav.experience, href: "#experience", icon: Briefcase, section: "Navigation" },
    { name: t.nav.contact, href: "#contact", icon: Mail, section: "Navigation" },
  ];

  const projectItems = PROJECTS.map((p) => {
    const translated = t.projects.items.find((item) => item.slug === p.slug);
    return {
      name: translated?.title || p.title,
      href: `/projects/${p.slug}`,
      icon: Layers,
      section: "Projects",
      badge: p.category,
    };
  });

  const filteredNav = navItems.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectItems.filter(
    (i) =>
      i.name.toLowerCase().includes(query.toLowerCase()) ||
      i.badge?.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.assign(href);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F6F4] text-[#334A44] border border-[#D5E2DE] hover:text-[#0B1614] hover:border-[#267A66]/40 dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E] dark:hover:text-[#F1F7F5] dark:hover:border-[#9BCEC1]/40 text-xs transition-all cursor-pointer shadow-sm dark:shadow-none"
        title="Quick Search (Cmd+K)"
      >
        <Search size={12} className="text-[#267A66] dark:text-[#9BCEC1]" />
        <span>{t.nav.search}</span>
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono-tech bg-white text-[#627A74] border border-[#D5E2DE] dark:bg-[#17201F] dark:text-[#6F7E7A] dark:border-[#24302E] rounded">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 dark:bg-[#070A0A]/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#D5E2DE] dark:border-[#24302E] bg-[#F1F6F4] dark:bg-[#111817]">
                <Search size={18} className="text-[#267A66] dark:text-[#9BCEC1]" />
                <input
                  type="text"
                  placeholder="Type a command or search systems..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-[#0B1614] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] text-sm focus:outline-none font-mono-tech"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#627A74] hover:text-[#0B1614] dark:text-[#6F7E7A] dark:hover:text-[#F1F7F5] p-1 rounded hover:bg-[#E5EFEA] dark:hover:bg-[#17201F]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* List items */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-4">
                {/* Navigation Group */}
                {filteredNav.length > 0 && (
                  <div>
                    <div className="px-3 py-1 text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A] tracking-wider font-semibold">
                      Navigation
                    </div>
                    <div className="space-y-1 mt-1">
                      {filteredNav.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.name}
                            onClick={() => handleNavigate(item.href)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#17201F] transition-colors text-left group"
                          >
                            <div className="flex items-center gap-3">
                              <Icon
                                size={16}
                                className="text-[#627A74] group-hover:text-[#267A66] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1] transition-colors"
                              />
                              <span>{item.name}</span>
                            </div>
                            <span className="text-xs text-[#627A74] group-hover:text-[#267A66] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1]">
                              Jump →
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Projects Group */}
                {filteredProjects.length > 0 && (
                  <div>
                    <div className="px-3 py-1 text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A] tracking-wider font-semibold">
                      Architecture & Systems
                    </div>
                    <div className="space-y-1 mt-1">
                      {filteredProjects.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigate(item.href)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#17201F] transition-colors text-left group"
                        >
                          <div className="flex items-center gap-3">
                            <Layers
                              size={16}
                              className="text-[#627A74] group-hover:text-[#267A66] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1] transition-colors"
                            />
                            <span>{item.name}</span>
                          </div>
                          <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-[#F1F6F4] text-[#267A66] border border-[#267A66]/20 dark:bg-[#111817] dark:text-[#9BCEC1] dark:border-[#24302E] font-semibold">
                            {item.badge}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions Group */}
                <div>
                  <div className="px-3 py-1 text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A] tracking-wider font-semibold">
                    Quick Actions
                  </div>
                  <div className="space-y-1 mt-1">
                    <button
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#17201F] transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <Mail
                          size={16}
                          className="text-[#627A74] group-hover:text-[#267A66] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1] transition-colors"
                        />
                        <span>Copy Email ({SITE_CONFIG.email})</span>
                      </div>
                      <span className="text-xs text-[#267A66] dark:text-[#9BCEC1] font-semibold">
                        {copied ? (
                          <span className="flex items-center gap-1">
                            <Check size={12} /> Copied
                          </span>
                        ) : (
                          <Copy size={13} />
                        )}
                      </span>
                    </button>

                    <a
                      href={SITE_CONFIG.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#17201F] transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <GithubIcon
                          size={16}
                          className="text-[#627A74] group-hover:text-[#267A66] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1] transition-colors"
                        />
                        <span>View GitHub Profile</span>
                      </div>
                      <ExternalLink size={13} className="text-[#627A74] dark:text-[#6F7E7A]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#F1F6F4] dark:bg-[#111817] border-t border-[#D5E2DE] dark:border-[#24302E] text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                <span>Navigation & System Inspector</span>
                <div className="flex items-center gap-2">
                  <span>ESC to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
