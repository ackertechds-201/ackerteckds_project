import type { Metadata } from "next";
import MentionsLegalesPageContent from "./mentions-legales-content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Acker Tech DS — Antsiranana, Madagascar.",
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesPageContent />;
}