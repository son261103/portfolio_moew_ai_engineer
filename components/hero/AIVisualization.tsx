"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Layers,
  Network,
  Cpu,
  Sparkles,
  CheckCircle2,
  Database,
} from "lucide-react";

interface PipelineStep {
  id: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  metric: string;
  activeSnippet: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "docling",
    label: "Docling Ingestion",
    sub: "PDF / DOCX / OCR Layout",
    icon: FileText,
    tag: "Docling",
    metric: "Multi-Format Parser",
    activeSnippet: "docling.parse(doc_path, extract_tables=True)",
  },
  {
    id: "chunking",
    label: "Semantic Chunking",
    sub: "Structure-Aware Slicing",
    icon: Database,
    tag: "Semantic",
    metric: "Table-Aware Boundary",
    activeSnippet: "semantic_chunker.split(doc.structure)",
  },
  {
    id: "extraction",
    label: "Entity & Edge Extraction",
    sub: "LLM Node Linking",
    icon: Network,
    tag: "Graph Extraction",
    metric: "Entity + Relation",
    activeSnippet: "extract_entities_and_relations(chunk, schema)",
  },
  {
    id: "graph-merge",
    label: "Graph-Merge Layer",
    sub: "Multi-Hop Traversal",
    icon: Layers,
    tag: "GraphRAG",
    metric: "Multi-Hop Reasoning",
    activeSnippet: "graph_merge.connect_nodes(entity_graph)",
  },
  {
    id: "multi-provider",
    label: "Multi-Provider Inference",
    sub: "FastAPI + Central Registry",
    icon: Cpu,
    tag: "FastAPI",
    metric: "OpenRouter / fal.ai",
    activeSnippet: "provider_registry.dispatch(model, fallback=True)",
  },
  {
    id: "response",
    label: "Validated Response",
    sub: "Grounding & Output Media",
    icon: Sparkles,
    tag: "Output",
    metric: "High Factual Grounding",
    activeSnippet: "validate_grounded_response(graph_ctx)",
  },
];

export function AIVisualization() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycling active step simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 12, y: y * 12 });
  };

  const activeStep = PIPELINE_STEPS[activeStepIndex];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-2xl border border-[#D5E2DE] dark:border-[#24302E] bg-white dark:bg-[#0C1110]/90 backdrop-blur-xl p-5 sm:p-7 overflow-hidden shadow-sm dark:shadow-2xl transition-colors duration-300"
      style={{
        transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header bar of the visualizer */}
      <div className="relative flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#D5E2DE] dark:border-[#24302E]/80">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
            <span className="font-mono-tech text-xs font-bold text-[#0B1614] dark:text-[#F1F7F5] uppercase tracking-wider">
              Custom GraphRAG & Multi-Provider Architecture
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono-tech px-2 py-0.5 rounded bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-[#627A74] dark:text-[#6F7E7A]">
            Docling + Graph-Merge
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono-tech">
          <span className="text-[#627A74] dark:text-[#6F7E7A]">Backend:</span>
          <span className="text-[#267A66] dark:text-[#9BCEC1] font-bold">FastAPI Async</span>
          <span className="text-[#D5E2DE] dark:text-[#24302E]">|</span>
          <span className="text-[#627A74] dark:text-[#6F7E7A]">Multi-Hop:</span>
          <span className="text-[#0B1614] dark:text-[#F1F7F5] font-semibold">Graph-Merge</span>
        </div>
      </div>

      {/* Interactive Pipeline Stages Flow */}
      <div className="relative py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative group p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                  isActive
                    ? "bg-[#E0EFEA] dark:bg-[#17201F] border-[#267A66] dark:border-[#9BCEC1] shadow-xs dark:shadow-[0_0_20px_rgba(155,206,193,0.18)] scale-[1.02]"
                    : isCompleted
                    ? "bg-[#F1F6F4] dark:bg-[#111817] border-[#D5E2DE] dark:border-[#24302E] opacity-90 hover:border-[#267A66]/40 dark:hover:border-[#9BCEC1]/40"
                    : "bg-[#FAFCFB] dark:bg-[#0C1110] border-[#E2ECE9] dark:border-[#24302E]/60 opacity-60 hover:opacity-100 hover:border-[#D5E2DE] dark:hover:border-[#24302E]"
                }`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono-tech font-bold ${
                      isActive
                        ? "text-[#267A66] dark:text-[#9BCEC1]"
                        : isCompleted
                        ? "text-[#1C5B4C] dark:text-[#6FAFA0]"
                        : "text-[#627A74] dark:text-[#6F7E7A]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[9px] font-mono-tech px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-[#267A66]/15 dark:bg-[#9BCEC1]/20 text-[#267A66] dark:text-[#9BCEC1] border border-[#267A66]/30 dark:border-[#9BCEC1]/30 font-semibold"
                        : "bg-[#E5EFEA] dark:bg-[#17201F] text-[#627A74] dark:text-[#6F7E7A]"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>

                {/* Icon & title */}
                <div className="my-1">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                      isActive
                        ? "bg-[#267A66] dark:bg-[#9BCEC1] text-white dark:text-[#070A0A]"
                        : "bg-[#E5EFEA] dark:bg-[#17201F] text-[#334A44] dark:text-[#A9B8B4]"
                    }`}
                  >
                    <Icon size={14} />
                  </div>
                  <div className="font-semibold text-xs text-[#0B1614] dark:text-[#F1F7F5] truncate">
                    {step.label}
                  </div>
                  <div className="text-[10px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A] truncate">
                    {step.sub}
                  </div>
                </div>

                {/* Active Indicator Pulse */}
                {isActive && (
                  <motion.div
                    layoutId="activePipelineGlow"
                    className="absolute inset-0 rounded-xl border-2 border-[#267A66] dark:border-[#9BCEC1] pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-time Stage Inspector Box */}
      <div className="relative rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#267A66] dark:bg-[#9BCEC1]" />
            <span className="text-xs font-mono-tech text-[#334A44] dark:text-[#A9B8B4] uppercase tracking-wider">
              Active Stage:
            </span>
            <span className="text-xs font-mono-tech font-bold text-[#267A66] dark:text-[#9BCEC1]">
              {activeStep.label}
            </span>
            <span className="text-xs text-[#627A74] dark:text-[#6F7E7A]">—</span>
            <span className="text-xs text-[#0B1614] dark:text-[#F1F7F5]">{activeStep.sub}</span>
          </div>

          <div className="font-mono-tech text-xs text-[#1C5B4C] dark:text-[#6FAFA0] bg-[#E0EFEA] dark:bg-[#070A0A] px-3 py-1.5 rounded border border-[#D5E2DE] dark:border-[#24302E] inline-flex items-center gap-2 mt-1">
            <span className="text-[#627A74] dark:text-[#6F7E7A]">$</span>
            <span>{activeStep.activeSnippet}</span>
          </div>
        </div>

        {/* Stage Metric */}
        <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
          <div className="text-right">
            <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
              Architecture Metric
            </div>
            <div className="text-sm font-mono-tech font-bold text-[#0B1614] dark:text-[#F1F7F5]">
              {activeStep.metric}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#E5EFEA] dark:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] flex items-center justify-center text-[#267A66] dark:text-[#9BCEC1]">
            <CheckCircle2 size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
