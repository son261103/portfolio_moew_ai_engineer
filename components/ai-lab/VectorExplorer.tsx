"use client";

import React, { useState } from "react";
import { VECTOR_NODES, VectorNode } from "@/data/ai-lab";
import { Network, Info } from "lucide-react";

export function VectorExplorer() {
  const [selectedNode, setSelectedNode] = useState<VectorNode>(VECTOR_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<VectorNode | null>(null);

  // Calculate cosine similarity between two vector embeddings
  const calculateCosineSim = (v1: number[], v2: number[]) => {
    let dot = 0;
    let mag1 = 0;
    let mag2 = 0;
    for (let i = 0; i < v1.length; i++) {
      dot += v1[i] * v2[i];
      mag1 += v1[i] * v1[i];
      mag2 += v2[i] * v2[i];
    }
    return (dot / (Math.sqrt(mag1) * Math.sqrt(mag2))).toFixed(3);
  };

  const activeNode = hoveredNode || selectedNode;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* 2D Vector Canvas (8 cols) */}
      <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none relative min-h-[380px] overflow-hidden flex flex-col justify-between">
        {/* Technical Grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        {/* Top bar info */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech border-b border-[#D1DDD9] dark:border-[#24302E] pb-3">
          <div className="flex items-center gap-2 text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
            <Network size={14} />
            <span>2D Semantic Embedding Space Projection</span>
          </div>
          <span className="text-[#627772] dark:text-[#6F7E7A]">Click any node to inspect</span>
        </div>

        {/* Node visualizer field */}
        <div className="relative w-full h-64 sm:h-72 my-4">
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {VECTOR_NODES.map((node) =>
              node.connections.map((targetId) => {
                const targetNode = VECTOR_NODES.find((n) => n.id === targetId);
                if (!targetNode) return null;
                const isHighlighted =
                  activeNode.id === node.id || activeNode.id === targetId;

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={
                      isHighlighted
                        ? "rgba(45, 122, 104, 0.7)"
                        : "rgba(209, 221, 217, 0.8)"
                    }
                    strokeWidth={isHighlighted ? 2 : 1}
                    strokeDasharray={isHighlighted ? "none" : "3 3"}
                  />
                );
              })
            )}
          </svg>

          {/* Interactive Nodes */}
          {VECTOR_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            const isHovered = hoveredNode?.id === node.id;
            const isConnected = selectedNode.connections.includes(node.id);

            return (
              <div
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => setSelectedNode(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl border transition-all duration-300 cursor-pointer select-none group z-10 ${
                  isSelected
                    ? "bg-[#2D7A68] text-white border-[#2D7A68] dark:bg-[#9BCEC1] dark:text-[#070A0A] dark:border-[#9BCEC1] scale-110 shadow-md dark:shadow-[0_0_20px_rgba(155,206,193,0.4)] font-semibold"
                    : isHovered
                    ? "bg-[#E5EDE9] text-[#0D1715] border-[#2D7A68] dark:bg-[#17201F] dark:text-[#F1F7F5] dark:border-[#9BCEC1]"
                    : isConnected
                    ? "bg-[#F0F4F2] text-[#2D7A68] border-[#2D7A68]/40 dark:bg-[#111817] dark:text-[#9BCEC1] dark:border-[#9BCEC1]/40"
                    : "bg-white text-[#3B4D48] border-[#D1DDD9] dark:bg-[#0C1110] dark:text-[#A9B8B4] dark:border-[#24302E]"
                }`}
              >
                <div className="flex items-center gap-1.5 font-mono-tech text-[11px] whitespace-nowrap">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected
                        ? "bg-white dark:bg-[#070A0A]"
                        : isConnected
                        ? "bg-[#2D7A68] dark:bg-[#9BCEC1]"
                        : "bg-[#8C9F9A] dark:bg-[#6F7E7A]"
                    }`}
                  />
                  <span>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Legend */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#D1DDD9] dark:border-[#24302E] text-[11px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
          <span>Metric: Cosine Similarity (1 - θ)</span>
          <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">Dense Vector Space [4-dim sample]</span>
        </div>
      </div>

      {/* Node Details & Similarity Matrix (4 cols) */}
      <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#D1DDD9] dark:border-[#24302E] pb-3">
            <div>
              <span className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                Selected Concept Node
              </span>
              <div className="text-base font-bold text-[#0D1715] dark:text-[#F1F7F5]">
                {activeNode.name}
              </div>
            </div>
            <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-[#F0F4F2] text-[#2D7A68] border border-[#2D7A68]/20 dark:bg-[#111817] dark:text-[#9BCEC1] dark:border-[#9BCEC1]/20 font-semibold">
              {activeNode.category}
            </span>
          </div>

          <p className="text-xs text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed">
            {activeNode.description}
          </p>

          {/* Embedding vector array */}
          <div className="space-y-1">
            <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Vector Coordinates
            </div>
            <div className="p-2.5 rounded bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] font-mono-tech text-xs text-[#1E5649] dark:text-[#6FAFA0] truncate">
              [{activeNode.dimensions.join(", ")}]
            </div>
          </div>

          {/* Cosine distances to other nodes */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Cosine Similarity to Connected Nodes
            </div>
            <div className="space-y-1.5">
              {VECTOR_NODES.filter((n) => n.id !== activeNode.id).slice(0, 3).map((target) => {
                const sim = calculateCosineSim(activeNode.dimensions, target.dimensions);
                return (
                  <div
                    key={target.id}
                    className="flex items-center justify-between p-2 rounded bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech"
                  >
                    <span className="text-[#0D1715] dark:text-[#F1F7F5] truncate max-w-[140px]">
                      {target.name}
                    </span>
                    <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
                      {sim}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#D1DDD9] dark:border-[#24302E] text-[11px] font-mono-tech text-[#627772] dark:text-[#6F7E7A] flex items-center gap-1.5">
          <Info size={13} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
          <span>Real-time vector cluster calculations</span>
        </div>
      </div>
    </div>
  );
}
