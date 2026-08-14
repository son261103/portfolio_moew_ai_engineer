"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWord?: string | string[];
  highlightClass?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
  text,
  className = "",
  highlightWord,
  highlightClass = "text-[#9BCEC1]",
  delay = 0,
  as: Component = "h1",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const words = text.split(" ");
  const highlights = Array.isArray(highlightWord)
    ? highlightWord
    : highlightWord
    ? [highlightWord]
    : [];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div ref={ref} className="inline-block overflow-hidden">
      <Component className={className}>
        <motion.span
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-flex flex-wrap"
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
            const isHighlight = highlights.some(
              (h) => h.toLowerCase() === cleanWord.toLowerCase()
            );

            return (
              <motion.span
                variants={child}
                key={index}
                className={`mr-[0.3em] inline-block ${
                  isHighlight ? highlightClass : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>
      </Component>
    </div>
  );
}
