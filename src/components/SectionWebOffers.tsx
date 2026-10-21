"use client";

import Link from "next/link";
import { COMPANY, WEB_PACKAGES } from "@/data";
import { useInView } from "@/hooks/useInView";

export default function SectionWebOffers() {
  const ref = useInView({ threshold: 0.08, margin: "0px 0px -80px 0px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background" aria-label="Création de site web">
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="lux-eyebrow">Présence en ligne</p>
            <h2 className="mt-4 font-serif text-4xl md:text-display-lg text-on-surface max-w-lg leading-[1.08]">
              Quatre architectures,
              <br />
              une exigence
            </h2>
          </div>
          <p className="max-w-sm text-on-surface-variant text-body-sm md:text-right">
            Des sites pensés comme des espaces : clairs, durables, et conçus pour convertir sans bruit superflu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {WEB_PACKAGES.map((pack) => (
            <article
              key={pack.id}
              className={`flex flex-col border p-8 min-h-[420px] ${
                pack.popular
                  ? "border-tertiary/40 bg-surface-container-low"
                  : "border-outline-variant bg-surface"
              }`}
            >
              <p className="font-label-caps text-[10px] tracking-[0.22em] uppercase text-tertiary">
                {pack.badge}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-on-surface leading-snug">{pack.title}</h3>
              <p className="mt-2 text-sm text-on-surface-variant">{pack.subtitle}</p>
              <p className="mt-8 font-serif text-3xl text-on-surface">{pack.price}</p>
              <p className="mt-1 text-xs text-on-surface-variant">{pack.priceNote}</p>
              <ul className="mt-8 space-y-3 flex-1">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-on-surface-variant">
                    <span className="mt-1 h-px w-4 bg-tertiary/70 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 text-center lux-pill ${
                  pack.popular
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant text-on-surface hover:border-primary"
                }`}
              >
                {pack.isFrom ? "Demander un devis" : "Commencer"}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-outline-variant p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="lux-eyebrow">Option atelier</p>
            <h3 className="mt-3 font-serif text-2xl text-on-surface">Hébergement + nom de domaine</h3>
            <p className="mt-2 text-on-surface-variant">
              <span className="text-on-surface">60 000 Ar</span> vitrine ·{" "}
              <span className="text-on-surface">70 000 Ar</span> e-commerce
            </p>
            <p className="mt-3 text-sm text-on-surface-variant">
              {COMPANY.city} · {COMPANY.phoneDisplay} · {COMPANY.email}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="lux-pill-accent">
              Demander un devis
            </a>
            <a href={COMPANY.phone} className="lux-pill-ghost !text-on-surface !border-outline-variant hover:!bg-surface-container">
              Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
