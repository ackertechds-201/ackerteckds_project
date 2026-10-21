"use client";

import { TESTIMONIALS } from "@/data";
import { useInView } from "@/hooks/useInView";
import { EmojiIcon } from "@/components/Icon";
import SectionMarketingBackdrop from "@/components/SectionMarketingBackdrop";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-tertiary dark:text-tertiary-fixed" : "text-outline-variant dark:text-outline"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useInView({ threshold: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="scroll-section relative overflow-hidden py-16 md:py-24" aria-labelledby="temoignages-title">
      <SectionMarketingBackdrop />

      <div className="container-inner">

        {/* En-tête */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-on-surface md:text-4xl tracking-tight" id="temoignages-title">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Des vrais clients satisfaits à Antsiranana et Diego-Suarez.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className={`marketing-card p-6 flex flex-col gap-4 animate-fade-in-up delay-${(i % 4) + 1}`}
              aria-label={`Avis de ${t.name}`}
            >
              {/* Étoiles + Service */}
              <div className="flex items-start justify-between gap-2">
                <StarRating rating={t.rating} />
                <span className="text-xs bg-primary/15 text-primary border border-primary/25 dark:bg-primary/20 dark:text-primary-fixed dark:border-primary/20 px-2 py-0.5 rounded-full whitespace-nowrap font-medium">
                  {t.service}
                </span>
              </div>

              {/* Texte de l'avis */}
              <blockquote className="text-on-surface-variant text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Auteur */}
              <footer className="flex items-center gap-3 pt-3 border-t border-outline-variant/80 dark:border-white/10">
                {/* Avatar initiales */}
                <div
                  className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container text-sm font-bold flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-on-surface text-sm">{t.name}</div>
                  <div className="text-xs text-on-surface-variant">
                    <span className="inline-flex items-center gap-1">
                      <EmojiIcon emoji="📍" className="h-3.5 w-3.5 text-on-surface-variant" />
                      <span>
                        {t.location} · {t.date}
                      </span>
                    </span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}