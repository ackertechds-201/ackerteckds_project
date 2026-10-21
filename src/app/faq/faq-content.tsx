"use client";

import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/data";

export default function FAQPageContent() {
  return (
    <div className="pt-20">
      <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <PageHero
          eyebrow="Clarté"
          title="Questions fréquentes."
          description="Tout ce qu'il est utile de savoir avant de nous écrire."
        />

        <section className="max-w-3xl">
          <FAQAccordion />
          <div className="mt-16 border-t border-outline-variant pt-10">
            <p className="font-serif text-2xl text-on-surface mb-4">Vous n&apos;avez pas trouvé ?</p>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-pill-accent inline-flex"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
