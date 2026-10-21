"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COMPANY, WEB_PACKAGES } from "@/data";

const FAQS = [
  {
    q: "Quels sont les délais moyens de réalisation ?",
    a: "CV ou lettre : 24h à 48h. Site vitrine : 1 à 3 semaines. Site dynamique ou boutique : selon devis, souvent 3 à 6 semaines.",
  },
  {
    q: "Le nom de domaine et l'hébergement sont-ils inclus ?",
    a: "Non, ils sont optionnels. Nous vous accompagnons pour le choix et la mise en ligne.",
  },
  {
    q: "Proposez-vous une maintenance après livraison ?",
    a: `Oui, selon vos besoins. Le dépannage logiciel est sur devis. Lieu : Antsiranana. Contact : ${COMPANY.phoneDisplay} / ${COMPANY.whatsappNumber}.`,
  },
];

export default function TarifsPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20">
      <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <PageHero
          eyebrow="Investissement"
          title="Création de site web, sans bruit."
          description="Quatre formules lisibles pour votre présence en ligne, plus les interventions logicielles de l'atelier."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {WEB_PACKAGES.map((pack) => (
            <article
              key={pack.id}
              className={`flex flex-col border p-8 min-h-[440px] ${
                pack.popular ? "border-tertiary/45 bg-surface-container-low" : "border-outline-variant"
              }`}
            >
              <p className="lux-eyebrow">{pack.badge}</p>
              <h3 className="mt-4 font-serif text-2xl text-on-surface">{pack.title}</h3>
              <p className="mt-2 text-sm text-on-surface-variant">{pack.subtitle}</p>
              <p className="mt-8 font-serif text-4xl text-on-surface">{pack.priceAmount} <span className="text-2xl">Ar</span></p>
              <p className="mt-1 text-xs text-on-surface-variant">{pack.priceNote}</p>
              <ul className="mt-8 space-y-3 flex-1">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-on-surface-variant">
                    <span className="mt-2 h-px w-4 bg-tertiary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 text-center lux-pill ${
                  pack.popular ? "bg-primary text-on-primary" : "border border-outline-variant text-on-surface"
                }`}
              >
                {pack.isFrom ? "Demander un devis" : "Démarrer"}
              </Link>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { title: "CV & lettre", text: "CV 2 000 à 3 000 Ar · Lettre 1 000 à 2 000 Ar.", price: "dès 2 000 Ar" },
            { title: "Flashage Android", text: "Hors iOS et tablettes. Optimisation système.", price: "10 000 Ar" },
            { title: "Installation OS", text: "Windows / Linux / macOS. Activation Windows incluse.", price: "10 000 Ar" },
          ].map((item) => (
            <article key={item.title} className="border border-outline-variant p-8">
              <h4 className="font-serif text-2xl text-on-surface">{item.title}</h4>
              <p className="mt-3 text-sm text-on-surface-variant">{item.text}</p>
              <p className="mt-6 lux-eyebrow text-tertiary">{item.price}</p>
            </article>
          ))}
        </div>

        <section className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Questions fréquentes</h2>
          <div className="divide-y divide-outline-variant border-y border-outline-variant">
            {FAQS.map((item, i) => (
              <div key={item.q}>
                <button
                  className="w-full py-6 flex justify-between items-center text-left gap-6"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif text-xl">{item.q}</span>
                  <span className={`material-symbols-outlined transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === i ? (
                  <p className="pb-6 text-on-surface-variant text-sm leading-relaxed">{item.a}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
