import { getImages } from "@/lib/getImages";
import { APARTMENTS } from "@/lib/data";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ApartmentsSection from "@/components/ApartmentsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const heroImages = getImages("images/hero");
  const heroImage = heroImages[0] ?? null;

  const apartmentImages: Record<string, string[]> = {};
  for (const apt of APARTMENTS) {
    apartmentImages[apt.slug] = getImages(`images/apartments/${apt.imageFolder}`);
  }

  return (
    <>
      <HeroSection heroImage={heroImage} />
      <WelcomeSection />
      <ApartmentsSection apartmentImages={apartmentImages} />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
