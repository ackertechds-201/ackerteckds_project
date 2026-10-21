"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const VALUES = [
  {
    title: "Honnêteté technique",
    text: "Nous n'habillons pas un problème. Diagnostic clair, périmètre logiciel assumé, résultat mesurable.",
  },
  {
    title: "Le silence comme luxe",
    text: "Interfaces et systèmes qui respirent. Moins d'effets, plus de tenue — chaque geste doit encore être juste dans deux ans.",
  },
  {
    title: "Le temps long",
    text: "Flashage, OS, site : nous travaillons pour que l'outil tienne, pas pour qu'il impressionne une semaine.",
  },
];

const STEPS = [
  { n: "01", title: "Écoute", text: "Votre usage, votre urgence, vos contraintes — sans jargon inutile." },
  { n: "02", title: "Cadre", text: "Un périmètre unique : logiciel, documents, ou architecture web." },
  { n: "03", title: "Exécution", text: "Intervention précise, sur place ou à distance selon le cas." },
  { n: "04", title: "Remise", text: "Outil rendu, consignes claires, suivi après service." },
];

export default function HomeStudio() {
  const ref = useInView({ threshold: 0.08, margin: "0px 0px -80px 0px" });

  return (
    <section ref={ref} className="lux-dark py-24 md:py-32" aria-label="L'atelier">
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <p className="lux-eyebrow text-tertiary-fixed">L&apos;atelier</p>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl md:text-display-lg text-white leading-[1.08]">
              Une pratique fondée sur la conviction
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-white/65 leading-relaxed">
              Acker Tech DS est un atelier indépendant à Antsiranana. Nous n&apos;intervenons que sur le logiciel —
              flashage Android, systèmes, dépannage, documents et création de sites. Peu de dossiers, beaucoup d&apos;attention.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-12">
          {VALUES.map((value) => (
            <article key={value.title}>
              <h3 className="font-serif text-2xl text-white">{value.title}</h3>
              <p className="mt-4 text-sm text-white/55 leading-relaxed">{value.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-20 lux-eyebrow text-tertiary-fixed">Comment nous travaillons</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <article key={step.n} className="border-t border-white/15 pt-6">
              <p className="font-serif text-3xl text-tertiary-fixed">{step.n}</p>
              <h4 className="mt-4 font-serif text-xl text-white">{step.title}</h4>
              <p className="mt-3 text-sm text-white/55">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10 pt-10">
          <p className="max-w-xl text-white/70">
            Nous prenons un nombre limité de nouveaux projets. Si vous avez un besoin, nous répondons sous 24 heures.
          </p>
          <Link href="/contact" className="lux-pill bg-tertiary-fixed text-on-tertiary-fixed w-fit">
            Entamer la conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
