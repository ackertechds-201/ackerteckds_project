"use client";

import { COMPANY } from "@/data";
import ContactForm from "@/components/ContactForm";
import { useInView } from "@/hooks/useInView";

export default function SectionCTA() {
  const ref = useInView({ threshold: 0.08, margin: "0px 0px -80px 0px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-background"
      aria-labelledby="cta-title"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="lux-eyebrow">Commencer</p>
          <h2 id="cta-title" className="mt-5 font-serif text-4xl md:text-display-lg text-on-surface leading-[1.08]">
            Tout grand outil commence par une question
          </h2>
          <p className="mt-6 text-on-surface-variant leading-relaxed">
            Décrivez votre besoin — flashage, système, site ou document. Nous revenons vers vous sous deux jours ouvrés.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="font-label-caps text-[10px] tracking-[0.22em] uppercase text-tertiary">Atelier</p>
              <p className="mt-2 font-serif text-2xl text-on-surface">Antsiranana</p>
              <p className="mt-1 text-sm text-on-surface-variant">{COMPANY.address}</p>
              <a href={COMPANY.phone} className="mt-3 block text-on-surface hover:text-primary">
                {COMPANY.phoneDisplay}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="block text-on-surface hover:text-primary">
                {COMPANY.email}
              </a>
            </div>
            <div className="border-t border-outline-variant pt-6">
              <p className="font-label-caps text-[10px] tracking-[0.22em] uppercase text-tertiary">Disponibilité</p>
              <p className="mt-3 text-sm text-on-surface-variant">
                Nouveaux dossiers acceptés. Les urgences logicielles sont traitées en priorité via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
