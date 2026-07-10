"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type CookieChoice = "accepted" | "declined" | null;

type CookieContextType = {
  choice: CookieChoice;
  accept: () => void;
  decline: () => void;
};

const CookieContext = createContext<CookieContextType>({
  choice: null,
  accept: () => {},
  decline: () => {},
});

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<CookieChoice>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ga_cookies") as CookieChoice;
      if (saved === "accepted" || saved === "declined") setChoice(saved);
    } catch {}
  }, []);

  function accept() {
    setChoice("accepted");
    try { localStorage.setItem("ga_cookies", "accepted"); } catch {}
  }
  function decline() {
    setChoice("declined");
    try { localStorage.setItem("ga_cookies", "declined"); } catch {}
  }

  return (
    <CookieContext.Provider value={{ choice, accept, decline }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  return useContext(CookieContext);
}
