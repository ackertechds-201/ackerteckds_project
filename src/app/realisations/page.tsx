import type { Metadata } from "next";
import RealisationsPageContent from "./realisations-content";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Exemples de dépannages et interventions réalisés par Acker Tech DS à Antsiranana — flashage Android, installation Windows, dépannage logiciel.",
};

export default function RealisationsPage() {
  return <RealisationsPageContent />;
}