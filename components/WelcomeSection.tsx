"use client";

import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";
import { REVIEW_SNAPSHOT } from "@/lib/data";

export default function WelcomeSection() {
  const { t } = useLang();

  const stats = [
    t.welcome.stat1,
    t.welcome.stat2,
    { value: REVIEW_SNAPSHOT.overallScore.toString(), label: t.welcome.stat3.label },
  ];

  return (
    <section className="bg-cream py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h2 className="font-serif text-display-md text-espresso font-light mb-6">
            {t.welcome.heading}
          </h2>
          <p className="font-sans text-base sm:text-lg text-espresso-soft leading-relaxed max-w-2xl mx-auto">
            {t.welcome.body}
          </p>
        </FadeIn>

        <FadeIn delay={150} className="mt-14 grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-espresso">
                {s.value}
              </span>
              <span className="font-sans text-xs sm:text-sm text-cappuccino tracking-wide text-center">
                {s.label}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
