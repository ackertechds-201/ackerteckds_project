"use client";

import Link from "next/link";

import { COMPANY } from "@/data";

export default function ConfidentialitePageContent() {
  return (
    <div className="pt-20">
      <main className="pt-20 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-16 max-w-3xl">
          <span className="lux-eyebrow mb-4 block">Protection</span>
          <h1 className="font-serif text-display-lg-mobile md:text-display-lg mb-6 text-on-surface">Confidentialité</h1>
          <p className="text-on-surface-variant text-body-base">
            Cette page décrit comment {COMPANY.name} traite les informations lors de vos prises de contact.
          </p>
        </header>

        <section className="max-w-4xl mx-auto space-y-6">
          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Collecte de données</h2>
              <p className="text-on-surface-variant text-body-sm">
                Nous ne collectons pas de données personnelles via un système de compte. Lorsque vous nous contactez via le formulaire,
                votre navigateur ouvre votre client email afin d'envoyer votre message.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Messages &amp; communications</h2>
              <p className="text-on-surface-variant text-body-sm">
                Les informations que vous choisissez de nous transmettre (nom, email, message) sont utilisées uniquement pour répondre
                à votre demande et assurer le suivi de votre projet. Elles ne sont pas vendues ni partagées à des tiers à des fins marketing.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Cookies</h2>
              <p className="text-on-surface-variant text-body-sm">
                Ce site n'utilise pas de cookies publicitaires. Des cookies techniques peuvent être utilisés par l'hébergeur pour la
                sécurité, la performance et le bon fonctionnement.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Liens externes</h2>
              <p className="text-on-surface-variant text-body-sm">
                Certaines actions ouvrent des services externes (WhatsApp, Google Maps). Leur traitement des données dépend de leurs
                politiques respectives.
              </p>
            </div>
          </div>

          <div className="metallic-border bg-surface-container-low rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Nous contacter</h2>
              <div className="text-on-surface-variant text-body-sm space-y-2">
                <div>
                  Email :{" "}
                  <a className="text-primary hover:underline" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </div>
                <div>
                  WhatsApp :{" "}
                  <a className="text-[#25d366] hover:underline" href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                    {COMPANY.whatsappNumber}
                  </a>
                </div>
                <div className="pt-2">
                  <Link className="text-primary hover:underline" href="/mentions-legales">
                    Voir aussi les mentions légales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
