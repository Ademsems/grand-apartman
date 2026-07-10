"use client";

import { useCookies } from "@/lib/CookieContext";
import { useLang } from "@/lib/LanguageContext";

export default function CookieBanner() {
  const { choice, accept, decline } = useCookies();
  const { t } = useLang();

  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4"
    >
      <div className="max-w-2xl mx-auto bg-espresso text-paper rounded-lg shadow-2xl border border-gold/20 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm font-sans leading-relaxed text-paper/80 flex-1 min-w-0">
          {t.cookie.message}
        </p>
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none text-xs font-sans font-medium px-4 py-2 rounded border border-paper/20 text-paper/60 hover:border-paper/40 hover:text-paper/80 transition-colors"
          >
            {t.cookie.decline}
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none text-xs font-sans font-semibold px-4 py-2 rounded bg-gold text-espresso hover:bg-gold-deep transition-colors"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
