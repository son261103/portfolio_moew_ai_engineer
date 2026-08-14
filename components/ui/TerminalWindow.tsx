"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface TerminalWindowProps {
  title?: string;
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export function TerminalWindow({
  title = "bash ~ son.dev",
  code,
  language = "bash",
  className = "",
  showLineNumbers = false,
}: TerminalWindowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div
      className={`rounded-xl border border-slate-800/80 dark:border-[#24302E] bg-[#0E1514] dark:bg-[#0C1110] overflow-hidden shadow-xl ${className}`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141F1D] dark:bg-[#111817] border-b border-slate-800/80 dark:border-[#24302E] select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          <div className="flex items-center gap-1.5 ml-2 text-xs font-mono-tech text-slate-400 dark:text-[#6F7E7A]">
            <Terminal size={12} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
            <span>{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {language && (
            <span className="text-[10px] font-mono-tech uppercase text-slate-400 dark:text-[#6F7E7A] bg-[#1A2624] dark:bg-[#17201F] px-2 py-0.5 rounded border border-slate-700/40 dark:border-[#24302E]">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white dark:text-[#A9B8B4] dark:hover:text-[#9BCEC1] transition-colors p-1 rounded hover:bg-[#1A2624] dark:hover:bg-[#17201F] cursor-pointer"
            title="Copy snippet"
          >
            {copied ? <Check size={13} className="text-[#9BCEC1]" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Code / Terminal Content */}
      <div className="p-4 font-mono-tech text-xs md:text-sm text-slate-100 dark:text-[#F1F7F5] overflow-x-auto leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-start">
            {showLineNumbers && (
              <span className="w-6 shrink-0 select-none text-slate-500 dark:text-[#6F7E7A] text-right mr-4 text-xs">
                {idx + 1}
              </span>
            )}
            <span className="whitespace-pre">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
