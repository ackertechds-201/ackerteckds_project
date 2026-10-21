"use client";

import Link from "next/link";
import { SERVICES } from "@/data";
import ServiceCard from "./ServiceCard";
import { useInView } from "@/hooks/useInView";
import SectionMarketingBackdrop from "@/components/SectionMarketingBackdrop";

export default function SectionServices() {
  const ref = useInView({ threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="scroll-section relative overflow-hidden py-16 md:py-24" aria-labelledby="services-title">
      <SectionMarketingBackdrop />

      <div className="container-inner">
        {/* En-tête de section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-on-surface md:text-4xl tracking-tight" id="services-title">
            Nos services
          </h2>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Interventions logicielles rapides et efficaces à Antsiranana.
            <strong className="text-on-surface font-semibold"> Service logiciel uniquement</strong> — pas de réparation matérielle.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`animate-fade-in-up delay-${i + 1}`}
            >
              <div className="marketing-card h-full p-6">
                <ServiceCard service={service} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers la page services complète */}
        <div className="text-center mt-10 animate-fade-in-up delay-3">
          <Link
            href="/services"
            className="marketing-cta-ghost inline-flex items-center gap-2 px-7 py-4 font-semibold"
          >
            Voir tous les services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}