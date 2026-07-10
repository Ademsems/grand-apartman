import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/data";
import LegalPageClient from "../privacy/LegalPageClient";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND_NAME}`,
};

export default function TermsPage() {
  return <LegalPageClient type="terms" />;
}
