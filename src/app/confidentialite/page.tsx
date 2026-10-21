import type { Metadata } from "next";
import ConfidentialitePageContent from "./confidentialite-content";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité du site Acker Tech DS — Antsiranana, Madagascar.",
};

export default function ConfidentialitePage() {
  return <ConfidentialitePageContent />;
}
