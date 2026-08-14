"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", "")).filter(
        Boolean
      );

      // Check if at the very bottom of page -> activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      // Check if at the top of page -> activate about
      if (window.scrollY < 300) {
        setActiveSection("about");
        return;
      }

      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Run on initial mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      setActiveSection(targetId);
      setMobileMenuOpen(false);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-3 transition-all duration-300">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl flex items-center justify-between px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#111817]/85 backdrop-blur-xl border border-[#D5E2DE] dark:border-[#24302E]/80 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F1F6F4] dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] group-hover:border-[#267A66]/50 dark:group-hover:border-[#9BCEC1]/50 flex items-center justify-center transition-colors">
            <Cpu
              size={16}
              className="text-[#267A66] dark:text-[#9BCEC1] group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono-tech font-bold text-xs sm:text-sm tracking-wider text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors">
              SON.DEV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Active Indicator */}
        <div className="hidden md:flex items-center gap-1 bg-[#F1F6F4]/90 dark:bg-[#0C1110]/70 p-1 rounded-full border border-[#D5E2DE] dark:border-[#24302E]/70 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1 rounded-full text-xs font-medium tracking-wide transition-all select-none ${
                  isActive
                    ? "text-[#267A66] dark:text-[#F1F7F5] font-bold"
                    : "text-[#334A44] hover:text-[#0B1614] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#9BCEC1]/40 shadow-xs dark:shadow-none"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Actions: Search, ThemeToggle, CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          <CommandMenu />
          <MagneticButton
            href="#contact"
            variant="primary"
            size="sm"
            className="group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </MagneticButton>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <CommandMenu />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-[#F1F6F4] text-[#334A44] border border-[#D5E2DE] dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E] hover:text-[#0B1614] dark:hover:text-[#F1F7F5] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-16 z-40 p-4 rounded-2xl bg-white/95 dark:bg-[#0C1110]/95 backdrop-blur-2xl border border-[#D5E2DE] dark:border-[#24302E] shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#E5EFEA] text-[#267A66] border border-[#267A66]/30 dark:bg-[#17201F] dark:text-[#9BCEC1] dark:border-[#9BCEC1]/20 font-bold"
                        : "text-[#334A44] hover:text-[#0B1614] hover:bg-[#F1F6F4] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#111817]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#267A66] dark:bg-[#9BCEC1]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-[#D5E2DE] dark:border-[#24302E] flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#267A66] text-white dark:bg-[#9BCEC1] dark:text-[#070A0A] font-semibold text-xs hover:bg-[#1C5B4C] dark:hover:bg-[#C9E6DF] transition-colors"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
