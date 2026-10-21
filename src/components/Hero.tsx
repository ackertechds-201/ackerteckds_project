"use client";

import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80";

const STATS = [
  { value: "5", label: "Métiers" },
  { value: "24h", label: "Réponse" },
  { value: "100%", label: "Logiciel" },
  { value: "1", label: "Ville" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      aria-label="Accueil — artisanat digital"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/55 to-primary-container/25" />
      <div className="absolute inset-0 bg-primary-container/20" />

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto pb-10 md:pb-12 pt-32">
        <p className="font-label-caps uppercase tracking-[0.32em] text-[11px] text-tertiary-fixed mb-6">
          Dépannage & digital · Antsiranana
        </p>
        <h1 className="font-serif text-[3.2rem] sm:text-5xl md:text-display-xl text-white max-w-4xl">
          Là où la technique
          <br />
          devient art.
        </h1>
        <p className="mt-6 max-w-xl text-white/75 text-body-base leading-relaxed">
          Interventions logicielles et sites web conçus avec la même exigence — précision, matière, durée.
          Un atelier discret, au service des professionnels et des particuliers à Diego-Suarez.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="lux-pill bg-tertiary-fixed text-on-tertiary-fixed hover:opacity-90">
            Découvrir les services
          </Link>
          <Link
            href="/realisations"
            className="lux-pill border border-white/30 text-white hover:bg-white/10"
          >
            Voir le portfolio
          </Link>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/15 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl md:text-4xl text-white">{stat.value}</div>
              <div className="mt-1 font-label-caps uppercase tracking-[0.22em] text-[10px] text-white/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex absolute right-margin-desktop bottom-12 items-center gap-3 text-white/55">
          <span className="font-label-caps tracking-[0.28em] text-[10px]">Scroll</span>
          <span className="lux-scroll-dot block h-8 w-px bg-white/50" />
        </div>
      </div>
    </section>
  );
}
