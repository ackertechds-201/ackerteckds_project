import Link from "next/link";

export default function NotFound() {
  return (
    <section className="lux-dark min-h-screen flex items-center justify-center pt-20">
      <div className="px-margin-mobile max-w-xl text-center py-24">
        <p className="font-serif text-7xl text-white/20">404</p>
        <h1 className="mt-4 font-serif text-4xl text-white">Page introuvable</h1>
        <p className="mt-4 text-white/60">
          La page que vous cherchez n&apos;existe pas, ou elle a été déplacée.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="lux-pill bg-tertiary-fixed text-on-tertiary-fixed">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="lux-pill border border-white/25 text-white">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
