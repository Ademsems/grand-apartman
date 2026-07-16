"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { BRAND_NAME, REVIEW_SNAPSHOT } from "@/lib/data";
import SafeImage from "@/components/SafeImage";
import FadeIn from "@/components/FadeIn";

type Props = { aboutImage: string | null };

export default function AboutPageClient({ aboutImage }: Props) {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="pt-40 pb-24 bg-paper min-h-screen">

      {/* ── Hero: heading + intro + image ──────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16">
          <div className="filigree-divider mb-8">
            <span className="font-serif text-gold text-xl">✦</span>
          </div>
          <h1 className="font-serif text-display-lg text-espresso font-light mb-6">
            {a.heroHeading}
          </h1>
          <p className="font-sans text-base text-espresso-soft max-w-2xl mx-auto leading-relaxed">
            {a.heroIntro}
          </p>
        </FadeIn>

        {/* About image — large, full-width constrained */}
        {aboutImage && (
          <FadeIn delay={100}>
            <div className="relative rounded-xl overflow-hidden mb-24" style={{ maxHeight: "520px" }}>
              <SafeImage
                src={aboutImage}
                alt={`${BRAND_NAME} — Simon & Anna`}
                aspectRatio="16/7"
                objectFit="cover"
                className="w-full"
              />
              {/* subtle gold overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso/30 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        )}
      </div>

      {/* ── Our Story ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Section label */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-40">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-gold">
                  {a.storyHeading}
                </span>
              </div>
            </div>

            {/* Story text + rating highlight */}
            <div className="lg:col-span-9 flex flex-col gap-8">
              <p className="font-sans text-base text-espresso-soft leading-relaxed">
                {a.storyBody}
              </p>

              {/* 9.9 rating highlight */}
              <div className="flex items-center gap-5 bg-champagne/40 border border-gold/30 rounded-xl px-6 py-5 w-fit">
                <span className="font-serif text-5xl text-gold font-light leading-none">
                  {REVIEW_SNAPSHOT.overallScore}
                </span>
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-cappuccino mb-0.5">
                    {a.ratingLabel}
                  </p>
                  <p className="font-sans text-xs text-espresso-soft">
                    {REVIEW_SNAPSHOT.reviewsCount} reviews · {REVIEW_SNAPSHOT.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Gold divider ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="border-t border-champagne" />
      </div>

      {/* ── Meet Simon & Anna ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-40">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-gold">
                  {a.meetHeading}
                </span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <p className="font-sans text-base text-espresso-soft leading-relaxed">
                {a.meetBody}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Gold divider ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="border-t border-champagne" />
      </div>

      {/* ── Our Experience ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-40">
                <span className="font-sans text-xs font-semibold tracking-widest uppercase text-gold">
                  {a.experienceHeading}
                </span>
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <p className="font-sans text-base text-espresso-soft leading-relaxed">
                {a.experienceBody1}
              </p>
              <p className="font-sans text-base text-espresso-soft leading-relaxed">
                {a.experienceBody2}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Closing ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="bg-cream border border-champagne rounded-xl px-8 py-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div className="filigree-divider">
              <span className="font-serif text-gold text-xl">✦</span>
            </div>
            <h2 className="font-serif text-2xl text-espresso font-light">
              {a.closingHeading}
            </h2>
            <p className="font-sans text-base text-espresso-soft leading-relaxed">
              {a.closingBody}
            </p>
            <Link
              href="/apartments"
              className="text-xs font-sans font-semibold tracking-wider bg-espresso text-paper px-8 py-3 rounded hover:bg-cappuccino-deep transition-colors"
            >
              {a.ctaLabel}
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
