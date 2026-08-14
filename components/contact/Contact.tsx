"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Copy,
  Check,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const curlSnippet = `curl -X POST https://son.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Partner", "email": "hire@ai-lab.org", "message": "Let us build intelligent systems together."}'`;

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#9BCEC1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="07 // Communication Channel"
          title="Initiate Collaboration"
          subtitle="Interested in architecting high-impact AI systems, scaling distributed infrastructure, or exploring technical advisory?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Info & Quick Terminal Snippet (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Card */}
            <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F4F2] text-[#2D7A68] dark:bg-[#111817] dark:text-[#9BCEC1] border border-[#D1DDD9] dark:border-[#24302E] text-xs font-mono-tech font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#2D7A68] dark:bg-[#9BCEC1] animate-pulse" />
                <span>{SITE_CONFIG.status.message}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0D1715] dark:text-[#F1F7F5]">
                Let&apos;s build production AI systems together.
              </h3>

              <p className="text-xs text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed">
                Whether you need assistance building high-accuracy RAG architectures, orchestrating autonomous multi-agent swarms, or optimizing GPU inference kernels, I am available to consult or lead engineering efforts.
              </p>

              {/* Direct email click */}
              <div className="pt-1">
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#F0F4F2] text-[#0D1715] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D1DDD9] dark:border-[#24302E] hover:border-[#2D7A68]/40 dark:hover:border-[#9BCEC1]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-xs font-mono-tech">
                    <Mail size={14} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
                    <span className="truncate">{SITE_CONFIG.email}</span>
                  </div>
                  <span className="text-xs font-mono-tech text-[#1E5649] dark:text-[#6FAFA0] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] shrink-0 ml-2 font-semibold">
                    {copied ? (
                      <span className="flex items-center gap-1">
                        <Check size={12} /> Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy size={12} /> Copy
                      </span>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Terminal API Snippet */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
                API / Terminal Interface
              </div>
              <TerminalWindow
                title="contact_api.sh"
                code={curlSnippet}
                language="bash"
              />
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
