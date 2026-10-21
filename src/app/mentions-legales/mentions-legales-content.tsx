"use client";

import { COMPANY } from "@/data";

export default function MentionsLegalesPageContent() {
  return (
    <div className="pt-20">
      <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-16 max-w-3xl">
          <span className="lux-eyebrow mb-4 block">Conformité</span>
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 text-on-surface">Mentions légales</h1>
          <p className="text-on-surface-variant text-body-base">Cadre légal, limitations et informations d'édition.</p>
        </header>

        <section className="max-w-4xl mx-auto space-y-6">
          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Éditeur du site</h2>
              <div className="text-on-surface-variant text-body-sm space-y-2">
                <div className="text-on-surface font-semibold">{COMPANY.name}</div>
                <div>Activité : Services informatiques logiciels</div>
                <div>Localisation : {COMPANY.city}, {COMPANY.country}</div>
                <div>Téléphone : {COMPANY.phoneDisplay} / {COMPANY.phoneDisplay2}</div>
                <div>
                  WhatsApp :{" "}
                  <a href={COMPANY.whatsapp} className="text-[#25d366] hover:underline" target="_blank" rel="noopener noreferrer">
                    {COMPANY.whatsappNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Objet du site</h2>
              <p className="text-on-surface-variant text-body-sm">
                Ce site vitrine présente les services proposés par {COMPANY.name} : dépannage logiciel, flashage Android,
                installation de systèmes d'exploitation, création de sites web professionnels (vitrine &amp; e-commerce), et
                création de documents professionnels (CV, lettres de motivation).
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Limitations de service</h2>
              <ul className="text-on-surface-variant text-body-sm space-y-2">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Service logiciel uniquement — pas de réparation matérielle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Flashage Android uniquement — iOS (iPhone) et tablettes non pris en charge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Zone d'intervention : Antsiranana / Diego-Suarez, Madagascar</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Données personnelles</h2>
              <p className="text-on-surface-variant text-body-sm">
                Ce site ne collecte aucune donnée personnelle. Le formulaire de contact redirige vers votre client email
                sans stocker d'informations sur nos serveurs.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Propriété intellectuelle</h2>
              <p className="text-on-surface-variant text-body-sm">
                L'ensemble du contenu de ce site (textes, design, code) est la propriété exclusive de {COMPANY.name}. Toute
                reproduction sans autorisation est interdite.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Hébergement</h2>
              <p className="text-on-surface-variant text-body-sm">
                Site hébergé par <span className="text-on-surface font-semibold">Vercel Inc.</span> — 340 Pine Street, Suite
                603, San Francisco, CA 94104, États-Unis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
