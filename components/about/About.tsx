"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "./Stats";
import { Reveal } from "@/components/ui/Reveal";
import {
  BrainCircuit,
  Workflow,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
} from "lucide-react";

const FOCUS_AREAS = [
  {
    title: "AI Engineering & LLM Apps",
    desc: "Production RAG architectures, contextual reranking, vector indexing (Qdrant/pgvector), and self-reflective query loops.",
    icon: BrainCircuit,
  },
  {
    title: "Autonomous Agentic Workflows",
    desc: "Hierarchical supervisor DAGs, sandboxed tool execution, AST-guided code modifications, and state recovery rollbacks.",
    icon: Workflow,
  },
  {
    title: "Inference & Quantization",
    desc: "Model serving with vLLM continuous batching, TensorRT C++ acceleration, INT8/FP8 quantization, and KV-cache optimizations.",
    icon: Cpu,
  },
  {
    title: "Resilient Backend Infrastructure",
    desc: "High-throughput asynchronous APIs (FastAPI, Node.js, Go), gRPC streaming, Redis semantic caching, and PostgreSQL schemas.",
    icon: Server,
  },
  {
    title: "Hallucination Guardrails",
    desc: "Constrained JSON decoding with FSM grammars, NLI factual consistency checks, and bounding-box visual grounding.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Stack System Architecture",
    desc: "Modern reactive user interfaces with Next.js 15, TypeScript, WebSockets telemetry, and distributed cloud deployments.",
    icon: Layers,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="01 // System Philosophy"
          title="Engineering Intelligent Systems"
          subtitle="Moving beyond prompt engineering into deterministic, production-grade AI infrastructure and scalable software architectures."
        />

        {/* Large Editorial Statement */}
        <Reveal preset="fadeUp" delay={0.15}>
          <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] relative overflow-hidden shadow-sm dark:shadow-2xl">
            <div className="space-y-4 max-w-3xl">
              <div className="text-xs font-mono-tech text-[#267A66] dark:text-[#9BCEC1] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1]" />
                <span>The Core Engineering Tenet</span>
              </div>

              <blockquote className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0B1614] dark:text-[#F1F7F5] leading-tight">
                &ldquo;I don&apos;t just build software.{" "}
                <span className="text-[#267A66] dark:text-[#9BCEC1]">
                  I build systems that learn, automate and scale.
                </span>
                &rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#334A44] dark:text-[#A9B8B4] leading-relaxed pt-1">
                Modern AI engineering is fundamentally systems engineering. It requires bridging cutting-edge neural models with battle-tested backend resilience, strict schema verification, low latency inference runtimes, and observable metrics.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-8">
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} preset="fadeUp" delay={0.08 * (idx + 1)}>
                <div className="p-5 rounded-2xl bg-white dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#F1F6F4] dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] group-hover:border-[#267A66]/50 dark:group-hover:border-[#9BCEC1]/40 flex items-center justify-center mb-3 transition-colors">
                      <Icon size={18} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors mb-1.5">
                      {area.title}
                    </h3>
                    <p className="text-xs text-[#334A44] dark:text-[#A9B8B4] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#D5E2DE] dark:border-[#24302E]/60 flex items-center justify-between text-[11px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
                    <span>{`0${idx + 1} // ARCH`}</span>
                    <span className="group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] font-semibold transition-colors">
                      Active Focus →
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Animated Statistics */}
        <div className="pt-6">
          <Stats />
        </div>
      </div>
    </section>
  );
}
