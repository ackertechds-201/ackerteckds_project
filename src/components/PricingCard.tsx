import { COMPANY, PricingItem } from "@/data";
import { EmojiIcon } from "@/components/Icon";

interface PricingCardProps {
  item: PricingItem;
}

export default function PricingCard({ item }: PricingCardProps) {
  return (
    <article
      className={`card p-6 flex flex-col gap-3 relative ${
        item.popular ? "border-primary ring-2 ring-primary/25" : ""
      }`}
      aria-label={`Tarif : ${item.service}`}
    >
      {/* Badge "Populaire" */}
      {item.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary-container text-on-primary-container text-xs font-semibold px-3 py-1 rounded-full shadow">
            <span className="inline-flex items-center gap-1.5">
              <EmojiIcon emoji="⭐" className="h-3.5 w-3.5 text-on-primary-container" />
              <span>Populaire</span>
            </span>
          </span>
        </div>
      )}

      {/* Nom du service */}
      <h3 className="font-bold text-on-surface text-base leading-snug">
        {item.service}
      </h3>

      {/* Prix */}
      <div className={`text-2xl font-extrabold ${item.isQuote ? "text-primary" : "text-on-surface"}`}>
        {item.price}
      </div>

      {/* Note */}
      {item.note && (
        <p className="text-sm text-on-surface-variant">{item.note}</p>
      )}

      {/* Bouton */}
      {item.isQuote ? (
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-auto justify-center text-sm"
          aria-label="Demander un devis sur WhatsApp"
        >
          Demander un devis
        </a>
      ) : (
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-auto justify-center text-sm"
          aria-label={`Commander ${item.service} sur WhatsApp`}
        >
          Commander
        </a>
      )}
    </article>
  );
}