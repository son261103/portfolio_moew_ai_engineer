"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#2D7A68] text-white hover:bg-[#1E5649] dark:bg-[#9BCEC1] dark:text-[#070A0A] dark:hover:bg-[#C9E6DF] font-semibold shadow-md dark:hover:shadow-[0_0_20px_rgba(155,206,193,0.35)] transition-all duration-300";
      case "secondary":
        return "bg-white text-[#0D1715] border border-[#D1DDD9] hover:bg-[#F0F5F3] dark:bg-[#111817] dark:text-[#F1F7F5] dark:border-[#24302E] dark:hover:border-[#9BCEC1]/40 dark:hover:bg-[#17201F] shadow-sm transition-all duration-300";
      case "outline":
        return "bg-transparent text-[#2D7A68] border border-[#2D7A68]/40 hover:border-[#2D7A68] hover:bg-[#2D7A68]/10 dark:text-[#9BCEC1] dark:border-[#9BCEC1]/40 dark:hover:border-[#9BCEC1] dark:hover:bg-[#9BCEC1]/10 transition-all duration-300";
      case "ghost":
        return "bg-transparent text-[#3B4D48] hover:text-[#0D1715] hover:bg-[#F0F5F3] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:hover:bg-[#17201F]/60 transition-all duration-300";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3.5 py-1.5 text-xs";
      case "md":
        return "px-5 py-2.5 text-sm";
      case "lg":
        return "px-6 py-3 text-sm sm:text-base";
    }
  };

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none active:scale-95 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
