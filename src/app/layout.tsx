import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/PageTransition";

// ============================================================
// SEO GLOBAL — titre + description par défaut
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL("https://acker-tech-ds.vercel.app"),
  title: {
    default: "Acker Tech DS — Dépannage informatique à Antsiranana",
    template: "%s | Acker Tech DS",
  },
  description:
    "Dépannage informatique, flashage Android, installation Windows/Linux/macOS et CV professionnels à Antsiranana (Diego-Suarez), Madagascar. Intervention rapide, prix abordables.",
  keywords: [
    "dépannage informatique Antsiranana",
    "flashage Android Diego-Suarez",
    "installation Windows Madagascar",
    "réparation PC Antsiranana",
    "Acker Tech DS",
  ],
  authors: [{ name: "Acker Tech DS" }],
  creator: "Acker Tech DS",
  openGraph: {
    type: "website",
    locale: "fr_MG",
    url: "https://acker-tech-ds.vercel.app",
    siteName: "Acker Tech DS",
    title: "Acker Tech DS — Dépannage informatique à Antsiranana",
    description:
      "Flashage Android, installation Windows, dépannage logiciel et CV professionnels à Antsiranana, Madagascar.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acker Tech DS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acker Tech DS — Dépannage informatique à Antsiranana",
    description:
      "Flashage Android, installation Windows, dépannage logiciel à Antsiranana, Madagascar.",
    images: ["/og-image.png"],
  },
};

// ============================================================
// LAYOUT PRINCIPAL
// ============================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@400;500;600;700&family=Geist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-background text-on-surface font-body-base antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />

          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <Footer />
          <WhatsAppFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}