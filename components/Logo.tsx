"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/data";

type Props = {
  variant?: "light" | "dark"; // light = logo on dark bg, dark = logo on light bg
  className?: string;
  height?: number;
};

export default function Logo({ variant = "dark", className = "", height = 48 }: Props) {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={`${BRAND_NAME} — Home`}>
      {!logoError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo.png"
          alt={BRAND_NAME}
          height={height}
          style={{ height: `${height}px`, width: "auto" }}
          onError={() => setLogoError(true)}
          className="object-contain"
        />
      ) : (
        <span
          className={`font-serif tracking-[0.2em] font-light text-lg ${
            variant === "light" ? "text-gold" : "text-espresso"
          }`}
          style={{ letterSpacing: "0.2em" }}
        >
          {BRAND_NAME.toUpperCase()}
        </span>
      )}
    </Link>
  );
}
