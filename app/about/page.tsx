import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/data";
import { getImages } from "@/lib/getImages";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: `About Us | ${BRAND_NAME}`,
  description:
    "Meet Simon and Anna — the couple behind Grand Apartman. Learn about our story, our 9.9 Booking.com rating, and what makes our apartments in Podhajska special.",
  openGraph: {
    title: `About Us | ${BRAND_NAME}`,
    description:
      "Meet Simon and Anna — the couple behind Grand Apartman. Learn about our story, our 9.9 Booking.com rating, and what makes our apartments in Podhajska special.",
  },
};

export default function AboutPage() {
  const images = getImages("images/about");
  return <AboutPageClient aboutImage={images[0] ?? null} />;
}
