"use client";

import { useLang } from "@/lib/LanguageContext";
import { useCookies } from "@/lib/CookieContext";
import { LOCATION_HIGHLIGHTS } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function LocationSection() {
  const { t, locale } = useLang();
  const { choice } = useCookies();

  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? "";
  const highlights = locale === "sk" ? LOCATION_HIGHLIGHTS.sk : LOCATION_HIGHLIGHTS.en;

  return (
    <section id="location" className="bg-cream py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-display-lg text-espresso font-light mb-6">
            {t.location.heading}
          </h2>
          <p className="font-sans text-base text-espresso-soft max-w-2xl mx-auto leading-relaxed">
            {t.location.body}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Highlights */}
          <FadeIn>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
              {t.location.highlights}
            </h3>
            <ul className="flex flex-col gap-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="2.5" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="font-sans text-sm text-espresso-soft leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={100}>
            <div className="rounded-lg overflow-hidden border border-champagne" style={{ aspectRatio: "4/3" }}>
              {mapsUrl && choice === "accepted" ? (
                <iframe
                  src={mapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grand Apartman location map"
                />
              ) : (
                <div className="w-full h-full bg-champagne/50 flex flex-col items-center justify-center gap-3 text-cappuccino">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="font-sans text-sm">
                    {!mapsUrl ? t.location.mapComingSoon : t.cookie.message.split(".")[0] + "."}
                  </span>
                  {!mapsUrl ? null : (
                    <span className="text-xs text-center px-6 text-cappuccino/70">
                      {t.cookie.accept} cookies to load the map.
                    </span>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
