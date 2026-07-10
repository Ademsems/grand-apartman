import type { Metadata } from "next";
import { APARTMENTS, BRAND_NAME } from "@/lib/data";
import { getImages } from "@/lib/getImages";
import ApartmentsIndexClient from "./ApartmentsIndexClient";

export const metadata: Metadata = {
  title: `Apartments | ${BRAND_NAME}`,
  description:
    "Browse our three luxury vacation apartments in Podhajska, Slovakia. Each is fully equipped and moments from the thermal spa.",
};

export default function ApartmentsPage() {
  const images: Record<string, string[]> = {};
  for (const apt of APARTMENTS) {
    images[apt.slug] = getImages(`images/apartments/${apt.slug}`);
  }
  return <ApartmentsIndexClient images={images} />;
}
