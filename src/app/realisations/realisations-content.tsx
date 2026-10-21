"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import { useInView } from "@/hooks/useInView";

interface Realisation {
  id: string;
  title: string;
  description: string;
  service: string;
  result: string;
  date: string;
  image: string;
  imageAlt?: string;
  url?: string;
  status?: string;
}

const realisations: Realisation[] = [
  {
    id: "web-acker-tech",
    title: "Acker Tech — Site vitrine professionnel",
    description:
      "Site vitrine moderne pour présenter les services, les offres web, les réalisations et les moyens de contact d’Acker Tech.",
    service: "Création de site web",
    result: "Site responsive mis en ligne",
    date: "Octobre 2026",
    image: "/images/realisation-acker-tech.png",
    imageAlt: "Aperçu du site Acker Tech",
    url: "https://ackertechds-official.vercel.app/",
  },
  {
    id: "web-hotel-de-la-baie",
    title: "Hôtel Baie d’Or — Démonstration hôtelière",
    description:
      "Projet de démonstration pour un hôtel : une page immersive qui présente une destination, ses expériences et un parcours de réservation clair.",
    service: "Création de site web",
    result: "Expérience responsive avec réservation",
    date: "Octobre 2026",
    image: "/images/realisation-hotel-baie-dor.png",
    imageAlt: "Aperçu du site Hôtel de la Baie",
    url: "https://hoteldelabai.vercel.app/",
  },
  {
    id: "smart-cv",
    title: "Welcome Talent — Plateforme Smart CV",
    description:
      "Plateforme d’accompagnement à l’emploi permettant de créer un CV et une lettre de motivation, de rechercher des offres et de suivre ses candidatures depuis un tableau de bord.",
    service: "Application web",
    result: "Création de CV, recherche d’emploi et suivi centralisé",
    date: "Octobre 2026",
    image: "/images/realisation-smart-cv.png",
    imageAlt: "Aperçu de la plateforme Welcome Talent Smart CV",
    status: "En cours de développement",
  },
  {
    id: "nexora-tech",
    title: "Nexora Tech — Boutique e-commerce",
    description:
      "Boutique en ligne de produits technologiques avec catalogue, recherche, favoris, panier et parcours de commande. Un espace d’administration est prévu pour gérer les produits, les stocks et les commandes.",
    service: "Site e-commerce",
    result: "Expérience d’achat complète et gestion de catalogue",
    date: "Octobre 2026",
    image: "/images/realisation-nexora-tech.png",
    imageAlt: "Aperçu de la boutique e-commerce Nexora Tech",
    status: "En cours de développement",
  },
  {
    id: "1",
    title: "Samsung Galaxy A53 — Bootloop critique",
    description:
      "Téléphone bloqué en boucle de démarrage après une mise à jour ratée. Flash complet du système Android.",
    service: "Flashage Android",
    result: "Opérationnel en 2h",
    date: "Décembre 2024",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Laptop Lenovo — Windows 11 propre",
    description: "Migration depuis Windows 7. Drivers, activation et optimisation.",
    service: "Installation Windows",
    result: "PC fluide, Windows activé",
    date: "Novembre 2024",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "PC de bureau — Écran noir",
    description: "Système Windows 10 corrompu. Réparation du démarrage sans perte de données.",
    service: "Dépannage logiciel",
    result: "Données conservées",
    date: "Octobre 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    title: "CV pour candidature BTP",
    description: "CV professionnel pour un jeune diplômé. Word + PDF.",
    service: "CV professionnel",
    result: "Entretien obtenu",
    date: "Janvier 2025",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "5",
    title: "Infinix Hot 20 — Virus",
    description: "Publicités et applications malveillantes. Flash usine propre.",
    service: "Flashage Android",
    result: "Téléphone comme neuf",
    date: "Janvier 2025",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "MacBook Air — macOS réinstallé",
    description: "Réinstallation propre après un bug système. Récupération des données avant intervention.",
    service: "Installation macOS",
    result: "Mac opérationnel",
    date: "Décembre 2024",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  },
];

const FILTERS = [
  "Tous",
  "Création de site web",
  ...Array.from(
    new Set(
      realisations
        .filter((realisation) => realisation.service !== "Création de site web")
        .map((realisation) => realisation.service)
    )
  ),
];

export default function RealisationsPageContent() {
  const headerRef = useInView({ threshold: 0.1, margin: "0px 0px -100px 0px" });
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const filteredRealisations = useMemo(
    () => (filter === "Tous" ? realisations : realisations.filter((realisation) => realisation.service === filter)),
    [filter]
  );

  return (
    <>
      <div className="pt-20">
        <main className="pt-20 pb-8 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <header ref={headerRef}>
            <PageHero
              eyebrow="Archive"
              title="Travaux sélectionnés."
              description="Quelques interventions à Antsiranana — un registre de problèmes résolus, sans théâtre."
            />
          </header>

          <section aria-label="Réalisations">
            <div className="mb-10 flex flex-wrap gap-2" aria-label="Filtrer les réalisations par service">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`lux-chip transition-colors ${
                    filter === item
                      ? "border-tertiary bg-tertiary text-on-tertiary"
                      : "border-outline-variant text-on-surface-variant hover:border-tertiary/60 hover:text-tertiary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRealisations.map((r) => (
                <article key={r.id} className="group">
                  <div className="relative h-52 overflow-hidden bg-primary-container">
                    <img
                      src={r.image}
                      alt={r.imageAlt ?? ""}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-container/25" />
                    <span className="absolute top-4 left-4 lux-chip bg-black/35 border-white/20 text-white">
                      {r.service}
                    </span>
                  </div>
                  <div className="pt-5">
                    <p className="lux-eyebrow">{r.date}</p>
                    <h3 className="mt-2 font-serif text-2xl text-on-surface leading-snug">{r.title}</h3>
                    <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{r.description}</p>
                    <p className="mt-4 text-sm text-tertiary">{r.result}</p>
                    {r.url ? (
                      <Link
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-label-caps text-[10px] uppercase tracking-[0.16em] text-on-surface hover:text-tertiary"
                      >
                        Voir le site
                        <span aria-hidden="true" className="material-symbols-outlined text-base">open_in_new</span>
                      </Link>
                    ) : r.status ? (
                      <span className="mt-5 inline-flex items-center gap-2 font-label-caps text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">construction</span>
                        {r.status}
                      </span>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
        <SectionCTA />
      </div>
    </>
  );
}
