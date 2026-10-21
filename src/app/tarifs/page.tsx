import type { Metadata } from "next";
import TarifsPageContent from "./tarifs-content";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs sites web : vitrine Essentiel 350 000 Ar, Professionnel 650 000 Ar, dynamique à partir de 1 200 000 Ar, e-commerce à partir de 1 800 000 Ar. Flashage, installation OS et CV à Antsiranana.",
};

export default function TarifsPage() {
  return <TarifsPageContent />;
}