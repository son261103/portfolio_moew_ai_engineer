"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isDark
          ? "bg-[#111817] border-[#24302E] text-[#9BCEC1] hover:border-[#9BCEC1]/50 hover:bg-[#17201F]"
          : "bg-[#FFFFFF] border-[#D1DDD9] text-[#2D7A68] hover:border-[#2D7A68]/50 hover:bg-[#F0F5F3] shadow-sm"
      } ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </motion.div>
    </button>
  );
}
