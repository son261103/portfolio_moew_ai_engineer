"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { STATS, StatItem } from "@/data/stats";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Infinity } from "lucide-react";

function CounterValue({ item, suffix }: { item: StatItem; suffix?: string }) {
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
      {(suffix || item.suffix) && (
        <span className="text-[#267A66] dark:text-[#9BCEC1] ml-1">{suffix || item.suffix}</span>
      )}
    </div>
  );
}

export function Stats() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
      {STATS.map((stat, idx) => {
        const itemTranslation = t.stats.items[idx] || {
          label: stat.label,
          desc: stat.description,
          suffix: stat.suffix,
        };

        return (
          <Reveal key={idx} preset="fadeUp" delay={idx * 0.1}>
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="mb-4">
                <CounterValue item={stat} suffix={itemTranslation.suffix} />
              </div>

              <div>
                <div className="font-semibold text-sm text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors">
                  {itemTranslation.label}
                </div>
                <div className="text-xs text-[#627A74] dark:text-[#6F7E7A] mt-1 line-clamp-2">
                  {itemTranslation.desc}
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
