"use client";

import React, { useState } from "react";
import { LAB_QUERIES } from "@/data/ai-lab";
import {
  Database,
  Layers,
  Sparkles,
  Play,
  FileCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function RAGVisualizer() {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(5);
  const [isSimulating, setIsSimulating] = useState(false);
  const [streamedText, setStreamedText] = useState("");

  const currentQuery = LAB_QUERIES[selectedQueryIndex];
  const displayedResponse = isSimulating ? streamedText : currentQuery.generatedResponse;

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setStreamedText("");

    setTimeout(() => setActiveStep(2), 600);
    setTimeout(() => setActiveStep(3), 1200);
    setTimeout(() => setActiveStep(4), 1800);
    setTimeout(() => {
      setActiveStep(5);
      const text = currentQuery.generatedResponse;
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setStreamedText(text.slice(0, i));
          i += 3;
        } else {
          clearInterval(interval);
          setIsSimulating(false);
        }
      }, 15);
    }, 2400);
  };

  return (
    <div className="space-y-5">
      {/* Query Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D7A68] dark:bg-[#9BCEC1]" />
          <span className="text-xs font-mono-tech text-[#3B4D48] dark:text-[#A9B8B4]">
            Select Technical Query:
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {LAB_QUERIES.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => {
                setSelectedQueryIndex(idx);
                setActiveStep(5);
                setIsSimulating(false);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-mono-tech transition-all cursor-pointer ${
                selectedQueryIndex === idx
                  ? "bg-[#E5EDE9] dark:bg-[#17201F] text-[#2D7A68] dark:text-[#9BCEC1] border border-[#2D7A68]/40 dark:border-[#9BCEC1]/40 font-semibold"
                  : "bg-[#F0F4F2] dark:bg-[#111817] text-[#627772] dark:text-[#6F7E7A] hover:text-[#0D1715] dark:hover:text-[#F1F7F5] border border-[#D1DDD9] dark:border-[#24302E]"
              }`}
            >
              Trace 0{idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="px-4 py-1.5 rounded-full bg-[#2D7A68] text-white dark:bg-[#9BCEC1] dark:text-[#070A0A] text-xs font-mono-tech font-bold hover:bg-[#1E5649] dark:hover:bg-[#C9E6DF] transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-sm"
        >
          <Play size={12} className="fill-current" />
          <span>{isSimulating ? "Executing Trace..." : "Re-Run Trace"}</span>
        </button>
      </div>

      {/* Query Display Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono-tech">
          <span className="text-[#1E5649] dark:text-[#6FAFA0] font-semibold uppercase tracking-wider">
            User Query Ingestion
          </span>
          <span className="text-[#627772] dark:text-[#6F7E7A]">
            Intent: {currentQuery.intent}
          </span>
        </div>
        <p className="text-sm sm:text-base font-medium text-[#0D1715] dark:text-[#F1F7F5]">
          &ldquo;{currentQuery.query}&rdquo;
        </p>
      </div>

      {/* Real-time Pipeline Execution Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Embeddings & Vector Search (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Stage 1: Dense & Sparse Vectors */}
          <div
            className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep >= 2
                ? "bg-white dark:bg-[#0C1110] border-[#2D7A68]/40 dark:border-[#9BCEC1]/40 shadow-sm dark:shadow-none"
                : "bg-white/60 dark:bg-[#0C1110]/50 border-[#D1DDD9] dark:border-[#24302E] opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1]">
                <Database size={14} />
                <span>1. Dual Embedding Vector Generation</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
                text-embedding-3-large
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono-tech">
              <div className="p-2 rounded bg-[#F0F4F2] dark:bg-[#111817] text-[#1E5649] dark:text-[#6FAFA0] truncate">
                <span className="text-[#627772] dark:text-[#6F7E7A]">Dense [1536-dim]: </span>
                [{currentQuery.denseEmbeddingSample.join(", ")}, ...]
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="text-[#627772] dark:text-[#6F7E7A] text-[11px] mr-1">Sparse BM25:</span>
                {currentQuery.sparseTokens.map((tok) => (
                  <span
                    key={tok}
                    className="px-1.5 py-0.5 rounded bg-[#E5EDE9] dark:bg-[#17201F] text-[#3B4D48] dark:text-[#A9B8B4] text-[10px] border border-[#D1DDD9] dark:border-[#24302E]"
                  >
                    {tok}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stage 2: Retrieved Candidates & Reranking */}
          <div
            className={`p-4 rounded-xl border transition-all duration-300 ${
              activeStep >= 3
                ? "bg-white dark:bg-[#0C1110] border-[#2D7A68]/40 dark:border-[#9BCEC1]/40 shadow-sm dark:shadow-none"
                : "bg-white/60 dark:bg-[#0C1110]/50 border-[#D1DDD9] dark:border-[#24302E] opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1]">
                <Layers size={14} />
                <span>2. Reciprocal Rank Fusion & Reranking</span>
              </div>
              <span className="text-[10px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
                Qdrant HNSW + Cohere Rerank v3
              </span>
            </div>

            <div className="space-y-2">
              {currentQuery.retrievedDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3 rounded-lg bg-[#F8FAF9] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0D1715] dark:text-[#F1F7F5] truncate max-w-[220px]">
                      {doc.title}
                    </span>
                    <div className="flex items-center gap-2 font-mono-tech text-[10px]">
                      <span className="text-[#627772] dark:text-[#6F7E7A]">Sim: {doc.similarity}</span>
                      <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
                        Rerank: {doc.rerankScore}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#3B4D48] dark:text-[#A9B8B4] line-clamp-2 leading-relaxed">
                    {doc.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Generation & Grounding (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`p-4 sm:p-5 rounded-xl border h-full flex flex-col justify-between transition-all duration-300 ${
              activeStep >= 4
                ? "bg-white dark:bg-[#0C1110] border-[#2D7A68]/40 dark:border-[#9BCEC1]/40 shadow-sm dark:shadow-none"
                : "bg-white/60 dark:bg-[#0C1110]/50 border-[#D1DDD9] dark:border-[#24302E] opacity-60"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1]">
                  <Sparkles size={14} />
                  <span>3. LLM Response Stream & Grounding</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-[#1E5649] dark:text-[#6FAFA0]">
                  <Clock size={11} />
                  <span>{currentQuery.latencyMs}ms</span>
                </div>
              </div>

              {/* Streaming Output Text */}
              <div className="p-3.5 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] min-h-[140px] text-xs sm:text-sm text-[#0D1715] dark:text-[#F1F7F5] leading-relaxed relative">
                {displayedResponse}
                {isSimulating && (
                  <span className="inline-block w-1.5 h-4 ml-1 bg-[#2D7A68] dark:bg-[#9BCEC1] animate-pulse align-middle" />
                )}
              </div>

              {/* Verified Citations */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                  Grounding Sources & Citations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentQuery.citations.map((cite) => (
                    <span
                      key={cite}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#E5EDE9] dark:bg-[#17201F] text-[10px] font-mono-tech text-[#2D7A68] dark:text-[#9BCEC1] border border-[#2D7A68]/20 dark:border-[#9BCEC1]/20 font-semibold"
                    >
                      <FileCheck size={11} />
                      <span>{cite}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Validation Guard Badge */}
            <div className="pt-3 mt-3 border-t border-[#D1DDD9] dark:border-[#24302E] flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 size={13} />
                <span>NLI Factual Verification Passed</span>
              </div>
              <span className="text-[#627772] dark:text-[#6F7E7A]">
                Confidence: {(currentQuery.confidence * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
