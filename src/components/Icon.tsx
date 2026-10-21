import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

function BaseIcon({ children, className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconPhone(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92Z" />
    </BaseIcon>
  );
}

export function IconMail(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </BaseIcon>
  );
}

export function IconMapPin(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </BaseIcon>
  );
}

export function IconRocket(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 16.5c-1.5 1.5-2 5.5-2 5.5s4-.5 5.5-2" />
      <path d="M9 13l-3 3" />
      <path d="M15 9l-3 3" />
      <path d="M12 12l6-6" />
      <path d="M14 4c2.5 0 6 1 6 1s-1 3.5-1 6c0 3-2 5-2 5s-2 1-5 2c-2.5.8-6 1-6 1s.2-3.5 1-6c1-3 2-5 2-5s2-2 5-2Z" />
    </BaseIcon>
  );
}

export function IconMonitor(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </BaseIcon>
  );
}

export function IconShoppingCart(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.63 16H19a2 2 0 0 0 2-1.6L23 6H6" />
    </BaseIcon>
  );
}

export function IconGlobe(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </BaseIcon>
  );
}

export function IconCheck(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </BaseIcon>
  );
}

export function IconX(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </BaseIcon>
  );
}

export function IconAlertTriangle(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </BaseIcon>
  );
}

export function IconUser(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </BaseIcon>
  );
}

export function IconMessageSquare(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </BaseIcon>
  );
}

export function IconWrench(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.66 5.66L2 19l3 3 7.04-7.04a4 4 0 0 0 5.66-5.66l-3 3-3-3 3-3Z" />
    </BaseIcon>
  );
}

export function IconSmartphone(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </BaseIcon>
  );
}

export function IconLaptop(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </BaseIcon>
  );
}

export function IconFileText(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </BaseIcon>
  );
}

export function IconHandshake(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M11 17l2 2a2 2 0 0 0 2.83 0l1.17-1.17a2 2 0 0 0 0-2.83l-2-2" />
      <path d="M7 13l2 2" />
      <path d="M3 7l3.5 3.5a2.12 2.12 0 0 0 3 0L12 8" />
      <path d="M14 10l2.5-2.5a2.12 2.12 0 0 1 3 0L21 9" />
      <path d="M5 5l1.5 1.5" />
      <path d="M19 5l-1.5 1.5" />
    </BaseIcon>
  );
}

export function IconBan(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </BaseIcon>
  );
}

export function IconInfo(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </BaseIcon>
  );
}

export function IconStar(props: SvgProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </BaseIcon>
  );
}

export function EmojiIcon({ emoji, className }: { emoji: string; className?: string }) {
  const base = "w-6 h-6";

  switch (emoji) {
    case "📞":
      return <IconPhone className={className ?? base} />;
    case "✉️":
      return <IconMail className={className ?? base} />;
    case "📍":
      return <IconMapPin className={className ?? base} />;
    case "🚀":
      return <IconRocket className={className ?? base} />;
    case "🖥️":
      return <IconMonitor className={className ?? base} />;
    case "🛒":
      return <IconShoppingCart className={className ?? base} />;
    case "🌐":
      return <IconGlobe className={className ?? base} />;
    case "✔️":
    case "✅":
      return <IconCheck className={className ?? base} />;
    case "❌":
      return <IconX className={className ?? base} />;
    case "⚠️":
      return <IconAlertTriangle className={className ?? base} />;
    case "👤":
      return <IconUser className={className ?? base} />;
    case "💬":
      return <IconMessageSquare className={className ?? base} />;
    case "🔧":
      return <IconWrench className={className ?? base} />;
    case "📱":
      return <IconSmartphone className={className ?? base} />;
    case "💻":
      return <IconLaptop className={className ?? base} />;
    case "📄":
      return <IconFileText className={className ?? base} />;
    case "🤝":
      return <IconHandshake className={className ?? base} />;
    case "📵":
      return <IconBan className={className ?? base} />;
    case "ℹ️":
      return <IconInfo className={className ?? base} />;
    case "⭐":
      return <IconStar className={className ?? base} />;
    default:
      return (
        <span className={className} aria-hidden="true">
          {emoji}
        </span>
      );
  }
}
