"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6FAFA0] via-[#9BCEC1] to-[#C9E6DF] origin-left z-50 shadow-[0_0_8px_rgba(155,206,193,0.6)]"
      style={{ scaleX }}
    />
  );
}
