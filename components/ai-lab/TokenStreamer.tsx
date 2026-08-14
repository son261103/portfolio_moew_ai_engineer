"use client";

import React, { useState } from "react";
import { Play, Sliders } from "lucide-react";

interface ModelOption {
  id: string;
  name: string;
  provider: string;
  inputCostPer1M: number;
  outputCostPer1M: number;
  baseTokPerSec: number;
}

const MODELS: ModelOption[] = [
  {
    id: "llama-3.3-70b",
    name: "LLaMA 3.3 70B (FP8 vLLM)",
    provider: "Self-Hosted / TensorRT",
    inputCostPer1M: 0.25,
    outputCostPer1M: 0.75,
    baseTokPerSec: 135,
  },
  {
    id: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic API",
    inputCostPer1M: 3.0,
    outputCostPer1M: 15.0,
    baseTokPerSec: 85,
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek V3 (MoE)",
    provider: "DeepSeek Infra",
    inputCostPer1M: 0.14,
    outputCostPer1M: 0.28,
    baseTokPerSec: 110,
  },
  {
    id: "mistral-large",
    name: "Mistral Large 2",
    provider: "Mistral AI",
    inputCostPer1M: 2.0,
    outputCostPer1M: 6.0,
    baseTokPerSec: 92,
  },
];

const SAMPLE_PROMPT =
  "Design a sub-millisecond cache invalidation strategy for distributed vector embeddings across edge nodes.";

const TOKENIZED_OUTPUT = [
  "To", " achieve", " sub", "-mill", "isecond", " vector", " cache", " invalid", "ation",
  ",", " deploy", " a", " hybrid", " lease", "-based", " Pub", "/Sub", " topology",
  " with", " Raft", " state", " machine", " replication", ".", " Edge", " nodes",
  " maintain", " a", " local", " LR", "U", " Bloom", " filter", " for", " active",
  " key", " sets", ",", " allowing", " atomic", " tomb", "stone", " broadcasts",
  " via", " UDP", " multi", "cast", " with", " TCP", " fallback", "."
];

export function TokenStreamer() {
  const [selectedModel, setSelectedModel] = useState<ModelOption>(MODELS[0]);
  const [temperature, setTemperature] = useState(0.2);
  const [topP, setTopP] = useState(0.9);
  const [currentTokens, setCurrentTokens] = useState<string[]>(TOKENIZED_OUTPUT);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamProgress, setStreamProgress] = useState(100);

  const startStreaming = () => {
    setIsStreaming(true);
    setCurrentTokens([]);
    setStreamProgress(0);

    let idx = 0;
    const intervalTime = Math.max(15, 1000 / selectedModel.baseTokPerSec);

    const interval = setInterval(() => {
      if (idx < TOKENIZED_OUTPUT.length) {
        setCurrentTokens((prev) => [...prev, TOKENIZED_OUTPUT[idx]]);
        idx++;
        setStreamProgress(Math.floor((idx / TOKENIZED_OUTPUT.length) * 100));
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, intervalTime);
  };

  const promptTokens = 24;
  const completionTokens = currentTokens.length;
  const totalCost = (
    (promptTokens * selectedModel.inputCostPer1M +
      completionTokens * selectedModel.outputCostPer1M) /
    1000000
  ).toFixed(6);

  const getTokenColor = (index: number) => {
    const colors = [
      "bg-[#2D7A68]/15 text-[#2D7A68] border-[#2D7A68]/30 dark:bg-[#9BCEC1]/15 dark:text-[#9BCEC1] dark:border-[#9BCEC1]/30",
      "bg-[#1E5649]/15 text-[#1E5649] border-[#1E5649]/30 dark:bg-[#6FAFA0]/15 dark:text-[#6FAFA0] dark:border-[#6FAFA0]/30",
      "bg-[#4E9A87]/15 text-[#4E9A87] border-[#4E9A87]/30 dark:bg-[#C9E6DF]/15 dark:text-[#C9E6DF] dark:border-[#C9E6DF]/30",
      "bg-[#3B4D48]/15 text-[#3B4D48] border-[#3B4D48]/30 dark:bg-[#A9B8B4]/15 dark:text-[#A9B8B4] dark:border-[#A9B8B4]/30",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Parameters Panel (4 cols) */}
      <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5">
        <div className="flex items-center gap-2 text-sm font-mono-tech font-bold text-[#0D1715] dark:text-[#F1F7F5]">
          <Sliders size={16} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
          <span>Inference Hyperparameters</span>
        </div>

        {/* Model Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono-tech text-[#627772] dark:text-[#6F7E7A] uppercase tracking-wider">
            Target Model Architecture
          </label>
          <div className="space-y-1.5">
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`w-full p-2.5 rounded-xl text-left text-xs font-mono-tech transition-all cursor-pointer ${
                  selectedModel.id === model.id
                    ? "bg-[#E5EDE9] text-[#2D7A68] border border-[#2D7A68]/40 dark:bg-[#17201F] dark:text-[#9BCEC1] dark:border-[#9BCEC1]/40 font-semibold"
                    : "bg-[#F0F4F2] text-[#3B4D48] hover:text-[#0D1715] border border-[#D1DDD9] dark:bg-[#111817] dark:text-[#A9B8B4] dark:hover:text-[#F1F7F5] dark:border-[#24302E]"
                }`}
              >
                <div className="font-semibold">{model.name}</div>
                <div className="text-[10px] text-[#627772] dark:text-[#6F7E7A] mt-0.5">
                  {model.provider} • {model.baseTokPerSec} tok/s
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Temperature slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-tech">
            <span className="text-[#627772] dark:text-[#6F7E7A]">Temperature</span>
            <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">{temperature.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-[#2D7A68] dark:accent-[#9BCEC1] bg-[#E5EDE9] dark:bg-[#17201F] cursor-pointer"
          />
        </div>

        {/* Top_P slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-tech">
            <span className="text-[#627772] dark:text-[#6F7E7A]">Top P (Nucleus)</span>
            <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">{topP.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={topP}
            onChange={(e) => setTopP(parseFloat(e.target.value))}
            className="w-full accent-[#2D7A68] dark:accent-[#9BCEC1] bg-[#E5EDE9] dark:bg-[#17201F] cursor-pointer"
          />
        </div>

        {/* Action Button */}
        <button
          onClick={startStreaming}
          disabled={isStreaming}
          className="w-full py-2.5 rounded-xl bg-[#2D7A68] text-white dark:bg-[#9BCEC1] dark:text-[#070A0A] font-mono-tech font-bold text-xs hover:bg-[#1E5649] dark:hover:bg-[#C9E6DF] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm"
        >
          <Play size={14} className="fill-current" />
          <span>{isStreaming ? "Streaming Tokens..." : "Start Token Stream"}</span>
        </button>
      </div>

      {/* Stream Viewer (8 cols) */}
      <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Telemetry Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E]">
            <div>
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                Throughput
              </div>
              <div className="text-sm font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1]">
                {selectedModel.baseTokPerSec} tok/s
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                Completion
              </div>
              <div className="text-sm font-mono-tech font-bold text-[#0D1715] dark:text-[#F1F7F5]">
                {completionTokens} tokens
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                Estimated Cost
              </div>
              <div className="text-sm font-mono-tech font-bold text-[#1E5649] dark:text-[#6FAFA0]">
                ${totalCost}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                TTFT Latency
              </div>
              <div className="text-sm font-mono-tech font-bold text-[#2D7A68] dark:text-[#C9E6DF]">
                42ms
              </div>
            </div>
          </div>

          {/* Prompt Ingestion Box */}
          <div className="p-3.5 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs space-y-1">
            <span className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Input Prompt
            </span>
            <p className="text-xs text-[#3B4D48] dark:text-[#A9B8B4]">{SAMPLE_PROMPT}</p>
          </div>

          {/* Token Breakdown View */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#1E5649] dark:text-[#6FAFA0] font-semibold">Live Byte-Pair Token Segmentation</span>
              <span className="text-[#627772] dark:text-[#6F7E7A]">{streamProgress}% Streamed</span>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F8F6] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] min-h-[140px] flex flex-wrap gap-1 items-start content-start">
              {currentTokens.map((token, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-mono-tech px-1.5 py-0.5 rounded border transition-all duration-150 ${getTokenColor(
                    idx
                  )}`}
                >
                  {token}
                </span>
              ))}
              {isStreaming && (
                <span className="w-2 h-4 bg-[#2D7A68] dark:bg-[#9BCEC1] animate-pulse rounded" />
              )}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#D1DDD9] dark:border-[#24302E] flex items-center justify-between text-xs font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
          <span>Continuous Iteration-Level Batching vLLM Engine</span>
          <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">FP8 Kernel Enabled</span>
        </div>
      </div>
    </div>
  );
}
