"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "4/3", "16/9", "1/1"
  objectFit?: "cover" | "contain";
};

export default function SafeImage({
  src,
  alt,
  className = "",
  aspectRatio = "4/3",
  objectFit = "cover",
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        className={`img-placeholder w-full ${className}`}
        style={{ aspectRatio }}
        aria-label={alt}
        role="img"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
          opacity={0.5}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ aspectRatio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
        className="w-full h-full"
        style={{ objectFit }}
      />
    </div>
  );
}
