"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { Locale, TranslationDictionary } from "./types";
import { en } from "./locales/en";
import { vi } from "./locales/vi";
import { zh } from "./locales/zh";

const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  vi,
  en,
  zh,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Listeners for external store
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("portfolio-locale") as Locale;
    if (saved === "vi" || saved === "en" || saved === "zh") {
      return saved;
    }
  }
  return "vi";
}

function getServerSnapshot(): Locale {
  return "vi";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((newLocale: Locale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-locale", newLocale);
      document.documentElement.lang = newLocale;
    }
    listeners.forEach((listener) => listener());
  }, []);

  const t = TRANSLATIONS[locale] || TRANSLATIONS.vi;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
