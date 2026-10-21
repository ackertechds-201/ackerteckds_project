"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ inverted = false }: { inverted?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shell = inverted
    ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
    : "border-outline-variant bg-surface-container text-on-surface hover:bg-surface-container-high";

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${shell}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${shell}`}
    >
      <span className="material-symbols-outlined text-xl" aria-hidden>
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
