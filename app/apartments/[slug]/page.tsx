import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { APARTMENTS } from "@/lib/data";
import { getImages } from "@/lib/getImages";
import ApartmentPageClient from "./ApartmentPageClient";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return APARTMENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const apt = APARTMENTS.find((a) => a.slug === params.slug);
  if (!apt) return {};
  return {
    title: apt.nameSuffix,
    description: apt.shortDesc,
    alternates: { canonical: `/apartments/${apt.slug}` },
  };
}

export default function ApartmentPage({ params }: Props) {
  const apt = APARTMENTS.find((a) => a.slug === params.slug);
  if (!apt) notFound();

  const images = getImages(`images/apartments/${apt.imageFolder}`);
  return <ApartmentPageClient apt={apt} images={images} />;
}
