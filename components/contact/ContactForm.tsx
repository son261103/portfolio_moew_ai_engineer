"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    systemType: t.contact.form.options[0] || "Junior AI Engineer / Backend Developer Role",
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
        colors: ["#267A66", "#9BCEC1", "#6FAFA0", "#C9E6DF", "#FFFFFF"],
      });
      setFormData({
        name: "",
        email: "",
        systemType: t.contact.form.options[0] || "Junior AI Engineer / Backend Developer Role",
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
      className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5"
    >
      <div className="flex items-center justify-between border-b border-[#D5E2DE] dark:border-[#24302E] pb-3 mb-2">
        <span className="text-xs font-mono-tech uppercase tracking-wider text-[#267A66] dark:text-[#9BCEC1] font-bold">
          {t.contact.form.title}
        </span>
        <span className="text-[10px] font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
          {t.contact.form.ssl}
        </span>
      </div>

      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono-tech flex items-start gap-2.5">
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">{t.contact.form.successTitle}</div>
            <div className="text-emerald-600/90 dark:text-emerald-300/80 mt-0.5">
              {t.contact.form.successDesc}
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono-tech flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">{t.contact.form.errorTitle}</div>
            <div className="text-rose-500/90 dark:text-rose-300/80 mt-0.5">{errorMessage}</div>
          </div>
        </div>
      )}

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
            {t.contact.form.nameLabel}
          </label>
          <input
            type="text"
            required
            placeholder={t.contact.form.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech text-[#0B1614] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#267A66]/60 dark:focus:border-[#9BCEC1]/60 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
            {t.contact.form.emailLabel}
          </label>
          <input
            type="email"
            required
            placeholder={t.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech text-[#0B1614] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#267A66]/60 dark:focus:border-[#9BCEC1]/60 transition-colors"
          />
        </div>
      </div>

      {/* Topic / System Type */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
          {t.contact.form.scopeLabel}
        </label>
        <select
          value={formData.systemType}
          onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech text-[#0B1614] dark:text-[#F1F7F5] focus:outline-none focus:border-[#267A66]/60 dark:focus:border-[#9BCEC1]/60 transition-colors cursor-pointer"
        >
          {t.contact.form.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A]">
          {t.contact.form.messageLabel}
        </label>
        <textarea
          required
          rows={4}
          placeholder={t.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] text-xs font-mono-tech text-[#0B1614] dark:text-[#F1F7F5] placeholder-[#8C9F9A] dark:placeholder-[#6F7E7A] focus:outline-none focus:border-[#267A66]/60 dark:focus:border-[#9BCEC1]/60 transition-colors resize-none leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-xl bg-[#267A66] text-white dark:bg-[#9BCEC1] dark:text-[#070A0A] font-mono-tech font-bold text-xs uppercase tracking-wider hover:bg-[#1C5B4C] dark:hover:bg-[#C9E6DF] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-md dark:shadow-[0_0_20px_rgba(155,206,193,0.25)]"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>{t.contact.form.submittingButton}</span>
          </>
        ) : (
          <>
            <Send size={14} />
            <span>{t.contact.form.submitButton}</span>
          </>
        )}
      </button>
    </form>
  );
}
