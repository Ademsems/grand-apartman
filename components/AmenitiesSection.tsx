"use client";

import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";
import { PROPERTY_AMENITIES } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  wifi: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1.42 9A16 16 0 0 1 22.58 9" /><path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M10.83 16.11a6 6 0 0 1 2.34 0" /><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  car: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="10" width="22" height="8" rx="2"/><path d="M5 10l2-5h10l2 5"/>
      <circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>
    </svg>
  ),
  waves: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
      <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
      <path d="M2 7c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/>
    </svg>
  ),
  snowflake: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2l3 3M12 2l-3 3M12 22l3-3M12 22l-3-3M2 12l3 3M2 12l3-3M22 12l-3 3M22 12l-3-3"/>
    </svg>
  ),
  utensils: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6h3.5M21 15v7"/>
    </svg>
  ),
  key: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="15" r="5"/><path d="M21 2l-9.4 9.4M21 2h-5M21 2v5"/>
    </svg>
  ),
  "no-smoking": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="2" y1="2" x2="22" y2="22"/><path d="M12 12H3v2h7M16 12h2v2h-1M21 12v2"/>
      <path d="M18 8c0-2 1.5-2 1.5-4"/>
    </svg>
  ),
  baby: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="5" r="3"/><path d="M7 22V11l5 2 5-2v11"/><path d="M7 14h10"/>
    </svg>
  ),
  tree: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 14l-5-10-5 10h10z"/><path d="M15 18l-3-6-3 6h6z"/><line x1="12" y1="22" x2="12" y2="18"/>
    </svg>
  ),
  "volume-x": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  ),
};

export default function AmenitiesSection() {
  const { t, locale } = useLang();
  const amenities = locale === "sk" ? PROPERTY_AMENITIES.sk : PROPERTY_AMENITIES.en;

  return (
    <section id="amenities" className="bg-espresso py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <div className="filigree-divider mb-8" style={{ color: "#C6A769" }}>
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-display-lg text-paper font-light mb-4">
            {t.amenities.heading}
          </h2>
          <p className="font-sans text-base text-paper/60 max-w-xl mx-auto">
            {t.amenities.subheading}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {amenities.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-paper/10 hover:border-gold/30 transition-colors">
                <span className="text-gold">{ICONS[item.icon] ?? null}</span>
                <span className="font-sans text-xs text-paper/70 leading-snug">{item.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
