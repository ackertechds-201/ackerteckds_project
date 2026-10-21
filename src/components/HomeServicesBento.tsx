"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const FILTERS = ["Tous", "Android", "Système", "Web", "Documents"] as const;

const COLLECTION = [
  {
    id: "flashage",
    filter: "Android",
    badge: "Signature",
    place: "Antsiranana",
    title: "Flashage Android",
    meta: "Bootloop · ROM · optimisation",
    price: "10 000 Ar",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "os",
    filter: "Système",
    badge: "Essentiel",
    place: "Atelier & déplacement",
    title: "Installation OS",
    meta: "Windows · Linux · macOS",
    price: "10 000 Ar",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "depannage",
    filter: "Système",
    badge: "Sur devis",
    place: "Diagnostic offert",
    title: "Dépannage logiciel",
    meta: "Écran noir · BSOD · lenteur",
    price: "Devis",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "web",
    filter: "Web",
    badge: "Recommandé",
    place: "Vitrine professionnelle",
    title: "Site vitrine",
    meta: "3 à 5 pages · SEO · mobile",
    price: "dès 350 000 Ar",
    href: "/tarifs",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ecom",
    filter: "Web",
    badge: "Commerce",
    place: "Catalogue & commandes",
    title: "Boutique e-commerce",
    meta: "Panier · admin · paiement",
    price: "dès 1 800 000 Ar",
    href: "/tarifs",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cv",
    filter: "Documents",
    badge: "Express",
    place: "Word + PDF",
    title: "CV & lettre",
    meta: "Mise en page sur mesure",
    price: "dès 2 000 Ar",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function HomeServicesBento() {
  const ref = useInView({ threshold: 0.08, margin: "0px 0px -80px 0px" });
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");

  const items = useMemo(
    () => (filter === "Tous" ? COLLECTION : COLLECTION.filter((item) => item.filter === filter)),
    [filter]
  );

  return (
    <section ref={ref} className="lux-dark py-24 md:py-32" aria-label="Services">
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="lux-eyebrow text-tertiary-fixed">Collection sélectionnée</p>
            <h2 className="mt-4 font-serif text-4xl md:text-display-lg text-white max-w-md leading-[1.08]">
              Des gestes
              <br />
              qui durent
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-body-sm md:text-right">
            Chaque intervention est choisie pour sa clarté technique, sa qualité d&apos;exécution et l&apos;autorité discrète qu&apos;elle rend à votre outil.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`lux-chip border-white/15 text-white/70 ${
                filter === item ? "bg-tertiary-fixed text-on-tertiary-fixed border-tertiary-fixed" : "hover:border-white/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={item.href} className="group block">
              <article className="overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    quality={70}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-container/25" />
                  <span className="absolute top-4 left-4 lux-chip bg-black/35 border-white/20 text-white backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>
                <div className="pt-5">
                  <p className="font-label-caps text-[10px] tracking-[0.2em] text-white/45 uppercase">
                    {item.place}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{item.meta}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-xl text-white">{item.price}</span>
                    <span className="font-label-caps text-[10px] tracking-[0.2em] text-tertiary-fixed uppercase">
                      Détails
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="lux-pill border border-white/25 text-white hover:bg-white/10"
          >
            Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  );
}
