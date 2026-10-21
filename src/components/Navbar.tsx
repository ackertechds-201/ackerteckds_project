"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { COMPANY, NAV_LINKS } from "@/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  const menuLinks = useMemo(
    () => NAV_LINKS.filter((link) => link.href !== "/contact"),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const desktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `relative z-10 shrink-0 font-label-caps uppercase text-[10px] xl:text-[11px] tracking-[0.14em] xl:tracking-[0.2em] whitespace-nowrap py-2 transition-colors ${
      transparent
        ? isActive
          ? "text-white"
          : "text-white/70 hover:text-white"
        : isActive
          ? "text-on-surface"
          : "text-on-surface-variant hover:text-on-surface"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-b border-white/10"
          : "bg-surface/90 backdrop-blur-xl border-b border-outline-variant shadow-sm shadow-black/[0.04]"
      }`}
    >
      <div className="flex items-center justify-between gap-3 h-16 sm:h-20 px-margin-mobile lg:px-8 xl:px-margin-desktop max-w-max-width mx-auto">
        <Link
          href="/"
          className={`flex items-center gap-2 sm:gap-3 min-w-0 shrink-0 transition-opacity hover:opacity-80 ${
            transparent ? "text-white" : "text-on-surface"
          }`}
        >
          <BrandLogo size={36} className="flex-shrink-0" src={COMPANY.logo} />
          <span className="font-serif tracking-[0.18em] sm:tracking-[0.28em] uppercase text-[12px] sm:text-[13px] truncate max-w-[7.5rem] sm:max-w-none">
            Acker Tech
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-7 min-w-0 px-2">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="relative z-20 flex items-center justify-end gap-1.5 sm:gap-2 shrink-0">
          <ThemeToggle inverted={transparent} />
          <Link
            href="/contact"
            className="hidden sm:inline-flex lux-pill bg-tertiary-fixed text-on-tertiary-fixed hover:opacity-90 px-4 xl:px-5 py-2 text-[10px]"
          >
            Contact
          </Link>
          <button
            type="button"
            className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ${
              transparent ? "text-white" : "text-on-surface"
            }`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="lg:hidden absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] flex-col overflow-y-auto overscroll-contain bg-primary-container text-white"
        >
          <div className="flex flex-col px-margin-mobile py-6 sm:py-8 max-w-max-width mx-auto w-full">
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center min-h-12 py-3 font-serif text-2xl sm:text-3xl border-b border-white/10 ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex lux-pill bg-tertiary-fixed text-on-tertiary-fixed mt-6 w-fit px-6 py-3"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
