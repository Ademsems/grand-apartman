"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dict, type Locale, type Dict } from "./i18n";

type LangContextType = {
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
};

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: dict["en"],
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ga_locale") as Locale | null;
      if (saved === "en" || saved === "sk") {
        setLocaleState(saved);
      }
    } catch {}
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try {
      localStorage.setItem("ga_locale", l);
    } catch {}
    // Update <html lang>
    document.documentElement.lang = l;
  }

  return (
    <LangContext.Provider value={{ locale, t: dict[locale], setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
