"use client";

import { COMPANY } from "@/data";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export default function ContactPageContent() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Antsiranana%2C%20Madagascar";

  return (
    <div className="pt-20">
      <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <PageHero
              eyebrow="Atelier"
              title="Contactez l'atelier."
              description="Une demande, un appareil, un site. Nous répondons sous deux jours ouvrés — avec discrétion."
            />
            <div className="space-y-8 -mt-8">
              <div>
                <p className="lux-eyebrow">Antsiranana</p>
                <p className="mt-3 font-serif text-2xl">{COMPANY.city}</p>
                <a href={COMPANY.phone} className="mt-2 block hover:text-tertiary">
                  {COMPANY.phoneDisplay} · {COMPANY.phoneDisplay2}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="block hover:text-tertiary">
                  {COMPANY.email}
                </a>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-64 overflow-hidden"
              >
                <img
                  alt="Antsiranana"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
                />
                <div className="absolute inset-0 bg-primary-container/40" />
                <span className="absolute bottom-5 left-5 font-label-caps text-[10px] tracking-[0.22em] uppercase text-white">
                  Diego-Suarez, Madagascar
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
