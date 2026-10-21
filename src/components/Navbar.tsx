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
      <div className="flex h-14 items-center justify-between gap-2 px-3 min-[375px]:px-margin-mobile sm:h-20 lg:px-8 xl:px-margin-desktop max-w-max-width mx-auto">
        <Link
          href="/"
          className={`flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3 transition-opacity hover:opacity-80 ${
            transparent ? "text-white" : "text-on-surface"
          }`}
        >
          <BrandLogo size={32} className="flex-shrink-0 sm:!h-9 sm:!w-9" src={COMPANY.logo} />
          <span className="hidden min-w-0 max-w-[7rem] truncate font-serif text-[11px] uppercase tracking-[0.14em] min-[360px]:block sm:max-w-none sm:text-[13px] sm:tracking-[0.28em]">
            Acker Tech
          </span>
        </Link>

        <div className="hidden xl:flex flex-1 items-center justify-center gap-4 min-w-0 px-4">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="relative z-20 flex shrink-0 items-center justify-end gap-1 sm:gap-2">
          <ThemeToggle inverted={transparent} />
          <Link
            href="/contact"
            className="hidden md:inline-flex lux-pill bg-tertiary-fixed text-on-tertiary-fixed hover:opacity-90 px-4 xl:px-5 py-2 text-[10px]"
          >
            Contact
          </Link>
          <button
            type="button"
            className={`xl:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
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
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="xl:hidden absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-3.5rem)] flex-col overflow-y-auto overscroll-contain bg-primary-container text-white sm:h-[calc(100dvh-5rem)]"
        >
          <div className="flex w-full max-w-max-width flex-col px-5 py-5 min-[375px]:px-margin-mobile sm:py-8 mx-auto">
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-12 items-center py-3 font-serif text-2xl border-b border-white/10 transition-colors sm:text-3xl ${
                    isActive ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full lux-pill bg-tertiary-fixed px-6 py-3 text-on-tertiary-fixed sm:w-fit"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
