import { Service } from "@/data";
import { EmojiIcon, IconAlertTriangle } from "@/components/Icon";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-4 p-0" aria-label={service.title}>

      {/* Icône + Titre */}
      <div className="flex items-start gap-3">
        <EmojiIcon emoji={service.icon} className="w-10 h-10 text-primary flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-on-surface tracking-tight">{service.title}</h3>
          {service.note && (
            <span className="mt-1 inline-flex items-center gap-1 rounded-full border border-tertiary/25 bg-tertiary-container px-2 py-0.5 text-xs font-medium text-on-tertiary-container dark:border-tertiary-fixed/30 dark:bg-tertiary-fixed/10 dark:text-tertiary-fixed">
              <IconAlertTriangle className="h-3.5 w-3.5" />
              {service.note}
            </span>
          )}
        </div>
      </div>

      {/* Description courte */}
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {variant === "default" ? service.fullDesc : service.shortDesc}
      </p>

      {/* Liste des points clés */}
      {variant === "default" && (
        <ul className="space-y-1.5 mt-auto">
          {service.highlights.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-on-surface/90">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}