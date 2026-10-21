import Link from "next/link";

import { COMPANY, NAV_LINKS } from "@/data";
import { BrandLogo } from "@/components/brand-logo";

export default function Footer() {
  return (
    <footer className="lux-dark">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-20">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80">
            <BrandLogo size={48} className="flex-shrink-0" src={COMPANY.logo} />
            <span className="font-serif tracking-[0.28em] uppercase text-sm">Acker Tech</span>
          </Link>
          <p className="text-sm text-white/55 max-w-xs leading-relaxed">
            Atelier logiciel à Antsiranana. Précision, discrétion, durée.
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="font-label-caps text-[10px] tracking-[0.24em] uppercase text-white/40">Solutions</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li><Link className="hover:text-white" href="/services">Flashage Android</Link></li>
            <li><Link className="hover:text-white" href="/services">Installation OS</Link></li>
            <li><Link className="hover:text-white" href="/tarifs">Sites web</Link></li>
            <li><Link className="hover:text-white" href="/services">CV &amp; lettre</Link></li>
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="font-label-caps text-[10px] tracking-[0.24em] uppercase text-white/40">Maison</h4>
          <ul className="space-y-3 text-sm text-white/65">
            {NAV_LINKS.filter((l) => ["/realisations", "/tarifs", "/faq", "/contact"].includes(l.href)).map((l) => (
              <li key={l.href}>
                <Link className="hover:text-white" href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="font-label-caps text-[10px] tracking-[0.24em] uppercase text-white/40">Contact</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li>{COMPANY.email}</li>
            <li>{COMPANY.phoneDisplay}</li>
            <li>{COMPANY.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link className="hover:text-white" href="/mentions-legales">Mentions légales</Link>
            <Link className="hover:text-white" href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
