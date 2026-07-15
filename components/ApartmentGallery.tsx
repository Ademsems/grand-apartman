"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type Props = {
  images: string[];
  name: string;
};

function Img({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-champagne/30 ${className ?? ""}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity={0.4}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={() => setErr(true)} className={className} style={style} loading="lazy" />
  );
}

export default function ApartmentGallery({ images, name }: Props) {
  const prefersReduced = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const mainBtnRef = useRef<HTMLButtonElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;

  function openLightbox(idx: number) {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  // Focus return when lightbox closes
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !lightboxOpen) {
      mainBtnRef.current?.focus();
    }
    wasOpen.current = lightboxOpen;
  }, [lightboxOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  // Keyboard navigation + focus trap
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") { e.preventDefault(); setLightboxIdx((i) => (i - 1 + total) % total); }
      if (e.key === "ArrowRight") { e.preventDefault(); setLightboxIdx((i) => (i + 1) % total); }
      if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
      if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, total]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) {
      if (diff > 0) setLightboxIdx((i) => (i + 1) % total);
      else setLightboxIdx((i) => (i - 1 + total) % total);
    }
    touchStartX.current = null;
  }

  const dur = prefersReduced ? 0 : 0.2;

  if (total === 0) {
    return (
      <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <Img src="" alt={name} className="w-full h-full" />
      </div>
    );
  }

  return (
    <>
      {/* ── INLINE GALLERY ── */}
      <div className="space-y-3">
        {/* Main image */}
        <div className="rounded-xl overflow-hidden relative group cursor-zoom-in" style={{ aspectRatio: "3/2" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: dur }}
              className="absolute inset-0"
            >
              <Img
                src={images[activeIdx]}
                alt={`${name} — photo ${activeIdx + 1} of ${total}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ display: "block" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Clickable overlay to open lightbox */}
          <button
            ref={mainBtnRef}
            className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
            onClick={() => openLightbox(activeIdx)}
            aria-label={`Open fullscreen gallery — ${name}, photo ${activeIdx + 1} of ${total}`}
          >
            {/* Zoom hint */}
            <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="bg-black/50 rounded-full p-2 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </span>
          </button>
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#c9a96e transparent" }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  i === activeIdx
                    ? "border-gold shadow-md opacity-100"
                    : "border-transparent opacity-60 hover:opacity-90 hover:border-champagne"
                }`}
                style={{ width: 64, height: 48 }}
                aria-label={`View photo ${i + 1}`}
                aria-current={i === activeIdx ? "true" : undefined}
              >
                <Img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── FULLSCREEN LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur }}
            className="fixed inset-0 z-[9999]"
            style={{ backgroundColor: "rgba(0,0,0,0.94)" }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo gallery — ${name}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Inner content — stopPropagation so backdrop-click only fires on dark areas */}
            <div
              ref={lightboxRef}
              className="flex flex-col h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
                <span className="font-sans text-sm text-white/60 tabular-nums select-none">
                  {lightboxIdx + 1} / {total}
                </span>
                <button
                  onClick={closeLightbox}
                  className="text-white/60 hover:text-white transition-colors p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Close gallery"
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Image area */}
              <div className="flex-1 flex items-center justify-center relative min-h-0">
                {/* Prev arrow */}
                <button
                  onClick={() => setLightboxIdx((i) => (i - 1 + total) % total)}
                  className="absolute left-2 sm:left-4 z-10 text-white/40 hover:text-gold transition-colors p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Previous photo"
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* Image */}
                <div className="flex items-center justify-center px-14 sm:px-20 w-full h-full">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={lightboxIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: prefersReduced ? 0 : 0.15 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Img
                        src={images[lightboxIdx]}
                        alt={`${name} — photo ${lightboxIdx + 1} of ${total}`}
                        className="rounded object-contain"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "calc(100vh - 160px)",
                          display: "block",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next arrow */}
                <button
                  onClick={() => setLightboxIdx((i) => (i + 1) % total)}
                  className="absolute right-2 sm:right-4 z-10 text-white/40 hover:text-gold transition-colors p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Next photo"
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Bottom thumbnail strip */}
              <div className="flex-shrink-0 py-4 px-4">
                <div
                  className="flex gap-2 overflow-x-auto pb-1 justify-start"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#c9a96e transparent" }}
                >
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxIdx(i)}
                      className={`flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        i === lightboxIdx
                          ? "border-gold opacity-100"
                          : "border-transparent opacity-40 hover:opacity-70"
                      }`}
                      style={{ width: 52, height: 38 }}
                      aria-label={`Jump to photo ${i + 1}`}
                      aria-current={i === lightboxIdx ? "true" : undefined}
                    >
                      <Img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
