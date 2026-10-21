/**
 * Fond de section pour les blocs marketing (services, tarifs, offres web, avis).
 * Mode clair : dégradé doux, grille subtile, halos discrets.
 * Mode sombre : conserve l’esthétique bleu nuit d’origine.
 */
export default function SectionMarketingBackdrop() {
  return (
    <>
      <div className="marketing-section-bg absolute inset-0 -z-10" aria-hidden />
      <div
        className="marketing-section-grid absolute inset-0 -z-10 pointer-events-none"
        aria-hidden
      />
      <div
        className="marketing-glow-tl absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full blur-3xl"
        aria-hidden
      />
      <div
        className="marketing-glow-br absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full blur-3xl"
        aria-hidden
      />
    </>
  );
}
