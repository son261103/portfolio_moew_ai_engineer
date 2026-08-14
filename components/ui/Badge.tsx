import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "muted" | "outline" | "success";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "muted",
  size = "sm",
  className = "",
}: BadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case "accent":
        return "bg-[#2D7A68]/10 text-[#2D7A68] border-[#2D7A68]/25 dark:bg-[#9BCEC1]/10 dark:text-[#9BCEC1] dark:border-[#9BCEC1]/30 font-semibold";
      case "muted":
        return "bg-[#F0F4F2] text-[#3B4D48] border-[#D1DDD9] dark:bg-[#111817] dark:text-[#A9B8B4] dark:border-[#24302E]";
      case "outline":
        return "bg-transparent text-[#0D1715] border-[#D1DDD9] dark:bg-transparent dark:text-[#F1F7F5] dark:border-[#24302E]";
      case "success":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25";
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "text-[11px] px-2.5 py-0.5";
      case "md":
        return "text-xs px-3 py-1";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono-tech rounded-md border tracking-tight transition-colors ${getStyles()} ${getSize()} ${className}`}
    >
      {children}
    </span>
  );
}
