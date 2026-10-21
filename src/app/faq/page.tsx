import type { Metadata } from "next";
import FAQPageContent from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes",
  description:
    "Réponses aux questions fréquentes sur les services d'Acker Tech DS : flashage Android, installation Windows, dépannage logiciel à Antsiranana.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}