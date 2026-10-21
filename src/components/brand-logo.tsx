import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
  /** Chemin public, ex. `public/image/logo.webp` → `/image/logo.webp`. */
  src?: string;
};

/** Logo : par défaut `public/image/logo.webp`. */
export function BrandLogo({ size = 44, className = "", src = "/image/logo.webp" }: BrandLogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full border border-outline-variant bg-surface-bright shadow-sm ring-1 ring-black/5 dark:border-white/15 dark:bg-transparent dark:ring-white/10 ${className}`}
      style={{ width: size, height: size, aspectRatio: '1/1' }}
    >
      <Image
        src={src}
        alt="Acker Tech DS — logo"
        width={size}
        height={size}
        sizes={`${size}px`}
        priority
        className="h-full w-full object-cover object-center rounded-full"
        decoding="async"
      />
    </span>
  );
}
