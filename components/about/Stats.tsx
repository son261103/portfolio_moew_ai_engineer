"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { STATS, StatItem } from "@/data/stats";
import { Reveal } from "@/components/ui/Reveal";
import { Infinity } from "lucide-react";

function CounterValue({ item }: { item: StatItem }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !item.isInfinity) {
      motionValue.set(item.value);
    }
  }, [isInView, motionValue, item.value, item.isInfinity]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && !item.isInfinity) {
        ref.current.textContent = Math.floor(latest).toString().padStart(2, "0");
      }
    });
  }, [springValue, item.isInfinity]);

  if (item.isInfinity) {
    return (
      <div className="flex items-center text-[#267A66] dark:text-[#9BCEC1]">
        <Infinity size={40} className="stroke-[2.5]" />
      </div>
    );
  }

  return (
    <div className="flex items-baseline font-mono-tech font-bold text-4xl sm:text-5xl text-[#0B1614] dark:text-[#F1F7F5]">
      {item.prefix && <span className="text-[#267A66] dark:text-[#9BCEC1] mr-1">{item.prefix}</span>}
      <span ref={ref}>00</span>
      {item.suffix && <span className="text-[#267A66] dark:text-[#9BCEC1] ml-1">{item.suffix}</span>}
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
      {STATS.map((stat, idx) => (
        <Reveal key={stat.label} preset="fadeUp" delay={idx * 0.1}>
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col justify-between h-full group">
            <div className="mb-4">
              <CounterValue item={stat} />
            </div>

            <div>
              <div className="font-semibold text-sm text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors">
                {stat.label}
              </div>
              <div className="text-xs text-[#627A74] dark:text-[#6F7E7A] mt-1 line-clamp-2">
                {stat.description}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
