"use client";

import { PRICING } from "@/data";
import PricingCard from "./PricingCard";
import { useInView } from "@/hooks/useInView";
import { EmojiIcon } from "@/components/Icon";
import SectionMarketingBackdrop from "@/components/SectionMarketingBackdrop";

export default function PricingTable() {
  const ref = useInView({ threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="scroll-section relative overflow-hidden py-16 md:py-24" aria-labelledby="tarifs-title">
      <SectionMarketingBackdrop />

      <div className="container-inner">

        {/* En-tête */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-on-surface md:text-4xl tracking-tight" id="tarifs-title">
            Tarifs clairs & abordables
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Prix fixes, pas de mauvaise surprise. Paiement en Ariary à la livraison.
          </p>
        </div>

        {/* Grille des tarifs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((item, i) => (
            <div key={item.id} className={`animate-fade-in-up delay-${i + 1}`}>
              <PricingCard item={item} />
            </div>
          ))}
        </div>

        {/* Mentions importantes */}
        <div className="mt-10 marketing-card p-6 max-w-2xl mx-auto text-sm text-on-surface-variant">
          <h3 className="font-semibold text-on-surface mb-3 text-base">
            <span className="inline-flex items-center gap-2">
              <EmojiIcon emoji="ℹ️" className="h-4 w-4 text-primary" />
              <span>Informations importantes</span>
            </span>
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Service <strong className="text-on-surface">logiciel uniquement</strong> — pas de réparation matérielle
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              iOS et tablettes <strong className="text-on-surface">non pris en charge</strong> pour le flashage
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <strong className="text-on-surface">Assistance après service</strong> incluse pour toutes les prestations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              Paiement en espèces (Ariary) à la livraison, aucune avance requise
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}