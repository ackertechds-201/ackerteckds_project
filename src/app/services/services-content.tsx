"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data";
import { useInView } from "@/hooks/useInView";

const IMAGES: Record<string, string> = {
  "flashage-android":
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
  "installation-os":
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80",
  "depannage-logiciel":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  "cv-lettre":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  "creation-site-web":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
};

export default function ServicesPageContent() {
  const headerRef = useInView({ threshold: 0.1, margin: "0px 0px -100px 0px" });
  const webService = SERVICES.find((service) => service.id === "creation-site-web");
  const otherServices = SERVICES.filter((service) => service.id !== "creation-site-web");

  return (
    <div className="pt-20">
      <main className="pt-20 pb-24">
        <section ref={headerRef} className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <PageHero
            eyebrow="Création de site web"
            title="Votre activité mérite une présence qui inspire confiance."
            description="Site vitrine ou boutique en ligne : nous concevons une expérience rapide, élégante et pensée pour vos clients, sur téléphone comme sur ordinateur."
          />

          {webService ? (
            <article className="relative overflow-hidden bg-primary-container text-white md:grid md:grid-cols-2" aria-labelledby="web-service-title">
              <div className="relative min-h-72 md:min-h-full">
                <img
                  src={IMAGES[webService.id]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-container/35" />
              </div>
              <div className="relative p-8 sm:p-10 md:p-12">
                <p className="lux-eyebrow mb-4 text-tertiary-fixed">Offre mise en avant</p>
                <h2 id="web-service-title" className="font-serif text-4xl md:text-5xl">{webService.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{webService.fullDesc}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {webService.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                      <span className="h-px w-5 shrink-0 bg-tertiary-fixed" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/tarifs" className="lux-pill mt-9 inline-flex bg-tertiary-fixed text-on-tertiary-fixed hover:opacity-90">
                  Découvrir les offres web
                </Link>
              </div>
            </article>
          ) : null}

          <div className="mt-20">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="lux-eyebrow">Autres expertises</p>
                <h2 className="mt-2 font-serif text-3xl text-on-surface">Services numériques au quotidien</h2>
              </div>
              <Link href="/contact" className="text-sm text-tertiary hover:text-tertiary/75">Besoin d&apos;un autre service ?</Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {otherServices.map((service) => (
                <article key={service.id} className="group">
                  <div className="relative h-64 overflow-hidden bg-primary-container">
                    <img
                      src={IMAGES[service.id]}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-container/30" />
                  </div>
                  <div className="pt-6">
                    {service.note ? (
                      <p className="lux-eyebrow mb-3">{service.note}</p>
                    ) : (
                      <p className="lux-eyebrow mb-3">Service logiciel</p>
                    )}
                    <h2 className="font-serif text-3xl text-on-surface">{service.title}</h2>
                    <p className="mt-3 text-on-surface-variant leading-relaxed">{service.fullDesc}</p>
                    <ul className="mt-6 space-y-2">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-on-surface-variant">
                          <span className="mt-2 h-px w-4 bg-tertiary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-24 lux-dark p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white">Parlons de votre futur site.</h2>
              <p className="mt-3 text-white/60 max-w-md">Recevez un devis clair pour votre site vitrine ou votre boutique en ligne.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/tarifs" className="lux-pill border border-white/25 text-white">
                Offres web
              </Link>
              <Link href="/contact" className="lux-pill bg-tertiary-fixed text-on-tertiary-fixed">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
