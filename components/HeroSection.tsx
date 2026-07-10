"use client";

import { useLang } from "@/lib/LanguageContext";
import Logo from "./Logo";
import { MAIN_BOOKING_URL } from "@/lib/data";

type Props = {
  heroImage: string | null;
};

export default function HeroSection({ heroImage }: Props) {
  const { t } = useLang();

  const lines = t.hero.headline.split("\n");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      {heroImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/55" />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #2A231C 0%, #4A4038 40%, #3A3028 70%, #2A231C 100%)" }}
        >
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #C6A769 0%, transparent 50%), radial-gradient(circle at 80% 20%, #A67C52 0%, transparent 50%)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <Logo variant="light" height={64} />

        <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-gold font-medium">
          {t.hero.eyebrow}
        </p>

        <h1 className="font-serif text-display-xl text-paper font-light leading-[1.08]">
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        <p className="font-sans text-base sm:text-lg text-paper/70 max-w-xl leading-relaxed font-light">
          {t.hero.subline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#apartments"
            className="font-sans text-sm font-semibold tracking-wider bg-gold text-espresso px-8 py-3.5 rounded hover:bg-gold-deep transition-colors"
          >
            {t.hero.cta1}
          </a>
          <a
            href={MAIN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold tracking-wider border border-paper/50 text-paper px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40 flex flex-col items-center gap-2">
        <span className="text-xs font-sans tracking-widest uppercase">scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
          <line x1="8" y1="0" x2="8" y2="24" />
          <polyline points="2 18 8 24 14 18" />
        </svg>
      </div>
    </section>
  );
}
