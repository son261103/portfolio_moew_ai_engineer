"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    systemType: "AI Architecture & RAG",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message");
      }

      setStatus("success");
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#2D7A68", "#9BCEC1", "#6FAFA0", "#C9E6DF", "#FFFFFF"],
      });
      setFormData({
        name: "",
        email: "",
        systemType: "AI Architecture & RAG",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected transmission error occurred.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5"
    >
      <div className="flex items-center justify-between border-b border-[#D1DDD9] dark:border-[#24302E] pb-3 mb-2">
        <span className="text-xs font-mono-tech uppercase tracking-wider text-[#2D7A68] dark:text-[#9BCEC1] font-bold">
          Direct Transmission Channel
        </span>
        <span className="text-[10px] font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
          SSL Encrypted
        </span>
      </div>

      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono-tech flex items-start gap-2.5">
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Transmission Dispatched Successfully</div>
            <div className="text-emerald-600/90 dark:text-emerald-300/80 mt-0.5">
              Thank you for reaching out. I will review your requirements and respond within 24 hours.
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono-tech flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Dispatch Failed</div>
            <div className="text-rose-500/90 dark:text-rose-300/80 mt-0.5">{errorMessage}</div>
          </div>
        </div>
      )}

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="Dr. Alex Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech text-[#0D1715] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#2D7A68]/60 dark:focus:border-[#9BCEC1]/60 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="alex@organization.ai"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech text-[#0D1715] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#2D7A68]/60 dark:focus:border-[#9BCEC1]/60 transition-colors"
          />
        </div>
      </div>

      {/* Topic / System Type */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
          Discussion Area / Project Scope
        </label>
        <select
          value={formData.systemType}
          onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech text-[#0D1715] dark:text-[#F1F7F5] focus:outline-none focus:border-[#2D7A68]/60 dark:focus:border-[#9BCEC1]/60 transition-colors cursor-pointer"
        >
          <option value="AI Architecture & RAG">Production RAG & Vector Retrieval</option>
          <option value="Autonomous Agent Workflows">Autonomous Agents & DAG Systems</option>
          <option value="LLM Inference Optimization">LLM Inference & Quantization</option>
          <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
          <option value="Technical Advisory / Other">Technical Advisory & Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
          Project Details / Architecture Requirements *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe your system challenges, throughput requirements, or team mission..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech text-[#0D1715] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#2D7A68]/60 dark:focus:border-[#9BCEC1]/60 transition-colors resize-none leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-xl bg-[#2D7A68] text-white dark:bg-[#9BCEC1] dark:text-[#070A0A] font-mono-tech font-bold text-xs uppercase tracking-wider hover:bg-[#1E5649] dark:hover:bg-[#C9E6DF] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md dark:shadow-[0_0_20px_rgba(155,206,193,0.25)]"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>Transmitting Payload...</span>
          </>
        ) : (
          <>
            <Send size={14} />
            <span>Transmit Message</span>
          </>
        )}
      </button>
    </form>
  );
}
