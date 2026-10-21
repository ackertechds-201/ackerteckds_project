import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeServicesBento from "@/components/HomeServicesBento";
import SectionWebOffers from "@/components/SectionWebOffers";
import HomeStudio from "@/components/HomeStudio";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "Dépannage informatique à Antsiranana — Acker Tech DS",
  description:
    "Flashage Android, installation Windows/Linux/macOS, dépannage logiciel et CV professionnels à Antsiranana (Diego-Suarez), Madagascar. Intervention rapide.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeServicesBento />
      <SectionWebOffers />
      <HomeStudio />
      <SectionCTA />
    </>
  );
}
