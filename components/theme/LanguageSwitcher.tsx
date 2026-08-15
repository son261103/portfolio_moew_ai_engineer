"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Locale } from "@/lib/i18n/types";

const LANGUAGES: { code: Locale; label: string; flag: string; nativeName: string }[] = [
  { code: "vi", label: "VI", flag: "🇻🇳", nativeName: "Tiếng Việt" },
  { code: "en", label: "EN", flag: "🇺🇸", nativeName: "English" },
  { code: "zh", label: "ZH", flag: "🇨🇳", nativeName: "中文 (Chinese)" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F1F6F4] dark:bg-[#111817] text-[#0B1614] dark:text-[#F1F7F5] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/50 text-xs font-mono-tech transition-colors cursor-pointer"
        aria-label="Select language"
      >
        <span className="text-xs">{currentLang.flag}</span>
        <span className="font-bold">{currentLang.label}</span>
        <ChevronDown
          size={12}
          className={`text-[#627A74] dark:text-[#6F7E7A] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-1.5 w-40 rounded-xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-xl p-1 z-50 overflow-hidden"
          >
            <div className="text-[10px] font-mono-tech uppercase tracking-wider text-[#627A74] dark:text-[#6F7E7A] px-2.5 py-1">
              Select Language
            </div>
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#E0EFEA] text-[#267A66] dark:bg-[#17201F] dark:text-[#9BCEC1] font-bold"
                      : "text-[#334A44] dark:text-[#A9B8B4] hover:bg-[#F1F6F4] dark:hover:bg-[#111817] hover:text-[#0B1614] dark:hover:text-[#F1F7F5]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </div>
                  {isSelected && <Check size={12} className="text-[#267A66] dark:text-[#9BCEC1]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
