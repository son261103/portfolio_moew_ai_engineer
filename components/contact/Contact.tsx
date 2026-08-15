"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { SITE_CONFIG } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
} from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const curlSnippet = `curl -X POST https://sonpham.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Recruiter", "email": "hr@company.ai", "message": "Let us discuss Junior AI Engineer / Backend Developer opportunities."}'`;

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9BCEC1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Quick Terminal Snippet (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F6F4] text-[#267A66] dark:bg-[#111817] dark:text-[#9BCEC1] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#267A66] dark:bg-[#9BCEC1] animate-pulse" />
                <span>{SITE_CONFIG.status.message}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1614] dark:text-[#F1F7F5]">
                {t.contact.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] leading-relaxed">
                {t.contact.description}
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-2.5 pt-2">
                {/* Email copy */}
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#F1F6F4] text-[#0B1614] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/40 dark:hover:border-[#9BCEC1]/40 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-tech">
                    <Mail size={16} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    <span className="truncate">{SITE_CONFIG.email}</span>
                  </div>
                  <span className="text-xs font-mono-tech text-[#1C5B4C] dark:text-[#6FAFA0] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] shrink-0 ml-2 font-semibold">
                    {copied ? (
                      <span className="flex items-center gap-1">
                        <Check size={12} /> {t.contact.copied}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy size={12} /> {t.contact.copy}
                      </span>
                    )}
                  </span>
                </button>

                {/* Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#F1F6F4] text-[#0B1614] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/40 dark:hover:border-[#9BCEC1]/40 transition-colors"
                  >
                    <Phone size={14} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>

                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F1F6F4] text-[#334A44] dark:bg-[#111817] dark:text-[#A9B8B4] border border-[#D5E2DE] dark:border-[#24302E]">
                    <MapPin size={14} className="text-[#267A66] dark:text-[#9BCEC1]" />
                    <span className="truncate">{SITE_CONFIG.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal API Snippet */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
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
