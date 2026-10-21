// ============================================================
// DONNÉES CENTRALISÉES — Acker Tech DS
// Modifie ici pour mettre à jour tout le site
// ============================================================

export const COMPANY = {
  name: "Acker Tech DS",
  /** Fichier dans `public/` — ex. `public/image/logo.png` → `/image/logo.png` */
  logo: "/image/logo.png",
  /** Sous-titre affiché dans le header (identité courte) */
  brandSubtitle: "Digital Solutions",
  tagline: "Dépannage informatique & services logiciels à Antsiranana",
  city: "Antsiranana (Diego-Suarez)",
  country: "Madagascar",
  email: "ackertechds@gmail.com",
  whatsapp: "https://wa.me/261340691848",
  whatsappNumber: "034 06 918 48",
  phone: "tel:+261372638837",
  phoneDisplay: "037 26 388 37",
  phoneDisplay2: "034 06 918 48",
  address: "Antsiranana, Madagascar",
  zones: ["Antsiranana", "Diego-Suarez"],
} as const;

// ============================================================
// SERVICES
// ============================================================

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  note?: string;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    id: "flashage-android",
    icon: "📱",
    title: "Flashage Android",
    shortDesc: "Réinstallation système, correction bootloop, optimisation.",
    fullDesc:
      "Flashage complet de votre smartphone Android : réinstallation du système, correction des bootloops, suppression des virus persistants, optimisation des performances.",
    note: "Hors iOS & tablettes",
    highlights: [
      "Correction bootloop",
      "Réinstallation système",
      "Suppression virus",
      "Optimisation mémoire",
    ],
  },
  {
    id: "installation-os",
    icon: "💻",
    title: "Installation Windows / Linux / macOS",
    shortDesc: "Installation propre, drivers, activation Windows 10/11 incluse.",
    fullDesc:
      "Installation propre de Windows 10, Windows 11, Linux ou macOS. Inclut la partition du disque, les pilotes, l'activation Windows 10/11 et la configuration de base.",
    highlights: [
      "Windows 10 & 11",
      "Linux (Ubuntu, Mint...)",
      "Drivers inclus",
      "Activation Windows incluse",
    ],
  },
  {
    id: "depannage-logiciel",
    icon: "🔧",
    title: "Dépannage logiciel",
    shortDesc: "Écran noir, système endommagé, PC lent, erreurs et blocages.",
    fullDesc:
      "Diagnostic et résolution de tous vos problèmes logiciels : écran noir, système corrompu, PC lent, erreurs BSOD, blocages. Service logiciel uniquement — pas de réparation matérielle.",
    note: "Service logiciel uniquement",
    highlights: [
      "Écran noir / BSOD",
      "PC lent ou figé",
      "Système corrompu",
      "Erreurs au démarrage",
    ],
  },
  {
    id: "cv-lettre",
    icon: "📄",
    title: "CV & Lettre de motivation",
    shortDesc: "Mise en page moderne, adaptée à ton profil.",
    fullDesc:
      "Création de CV professionnel et lettre de motivation sur mesure. Design moderne adapté à votre secteur et profil. Rendu en Word et PDF.",
    highlights: [
      "Design moderne",
      "Adapté à votre profil",
      "Format Word + PDF",
      "Livraison rapide",
    ],
  },
  {
    id: "creation-site-web",
    icon: "🌐",
    title: "Création de site web professionnel",
    shortDesc: "Site vitrine ou e‑commerce moderne, rapide et sécurisé.",
    fullDesc:
      "Création de sites web professionnels : site vitrine pour présenter votre activité ou site e‑commerce pour vendre en ligne. Design moderne, responsive (téléphone & ordinateur), performance et sécurité.",
    highlights: [
      "Design moderne",
      "Responsive",
      "Optimisé SEO",
      "Sécurisé",
    ],
  },
];

// ============================================================
// TARIFS
// ============================================================

export interface PricingItem {
  id: string;
  service: string;
  price: string;
  note?: string;
  isQuote?: boolean;
  popular?: boolean;
}

export interface WebPackage {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  priceAmount: string;
  priceNote: string;
  popular?: boolean;
  isFrom?: boolean;
}

export const WEB_PACKAGES: WebPackage[] = [
  {
    id: "vitrine-essentiel",
    badge: "ESSENTIEL",
    title: "Site vitrine Essentiel",
    subtitle: "1 à 3 pages · présence en ligne simple",
    description:
      "Présentation de l'activité, services, coordonnées, WhatsApp, responsive design, SEO technique de base.",
    features: [
      "1 à 3 pages",
      "Présentation de l'activité et des services",
      "Coordonnées et WhatsApp",
      "Responsive design",
      "SEO technique de base",
    ],
    price: "350 000 Ar",
    priceAmount: "350 000",
    priceNote: "Prix de lancement",
  },
  {
    id: "vitrine-pro",
    badge: "PROFESSIONNEL",
    title: "Site vitrine Professionnel",
    subtitle: "Environ 5 pages · design personnalisé",
    description:
      "Accueil, services, présentation, galerie ou réalisations, contact, formulaire, optimisation mobile et référencement de base.",
    features: [
      "Accueil, services, présentation",
      "Galerie ou réalisations",
      "Contact et formulaire",
      "Optimisation mobile",
      "Référencement de base",
    ],
    price: "650 000 Ar",
    priceAmount: "650 000",
    priceNote: "Tarif standard conseillé",
    popular: true,
  },
  {
    id: "site-dynamique",
    badge: "DYNAMIQUE",
    title: "Site dynamique",
    subtitle: "Contenus gérés par le client",
    description:
      "Interface d'administration, stockage des données et fonctionnalités dynamiques définies dans le devis.",
    features: [
      "Interface d'administration",
      "Stockage des données",
      "Fonctionnalités dynamiques",
      "Périmètre défini dans le devis",
    ],
    price: "1 200 000 Ar",
    priceAmount: "1 200 000",
    priceNote: "À partir de",
    isFrom: true,
  },
  {
    id: "ecommerce",
    badge: "E-COMMERCE",
    title: "Boutique e-commerce",
    subtitle: "Catalogue et gestion des commandes",
    description:
      "Produits, panier, commandes, administration et intégration du paiement si nécessaire.",
    features: [
      "Catalogue produits",
      "Panier et commandes",
      "Interface d'administration",
      "Intégration du paiement si nécessaire",
    ],
    price: "1 800 000 Ar",
    priceAmount: "1 800 000",
    priceNote: "À partir de",
    isFrom: true,
  },
];

export const PRICING: PricingItem[] = [
  {
    id: "cv",
    service: "CV professionnel",
    price: "2 000 – 3 000 Ar",
    note: "Format Word + PDF inclus",
  },
  {
    id: "lettre",
    service: "Lettre de motivation",
    price: "1 000 – 2 000 Ar",
    note: "Personnalisée selon le poste",
  },
  {
    id: "vitrine-essentiel",
    service: "Site vitrine Essentiel",
    price: "350 000 Ar",
    note: "1 à 3 pages · prix de lancement",
  },
  {
    id: "vitrine-pro",
    service: "Site vitrine Professionnel",
    price: "650 000 Ar",
    note: "Environ 5 pages · tarif standard conseillé",
    popular: true,
  },
  {
    id: "site-dynamique",
    service: "Site dynamique",
    price: "À partir de 1 200 000 Ar",
    note: "Contenus gérés par le client — devis selon fonctionnalités",
  },
  {
    id: "ecommerce",
    service: "Boutique e-commerce",
    price: "À partir de 1 800 000 Ar",
    note: "Catalogue, commandes et administration",
  },
  {
    id: "hebergement",
    service: "Hébergement + nom de domaine (optionnel)",
    price: "60 000 Ar (vitrine) / 70 000 Ar (e‑commerce)",
    note: "Configuration + mise en ligne",
  },
  {
    id: "flashage",
    service: "Flashage téléphone Android",
    price: "10 000 Ar",
    note: "Hors iOS & tablettes",
    popular: true,
  },
  {
    id: "installation",
    service: "Installation Windows / Linux / macOS",
    price: "10 000 Ar",
    note: "Activation Windows 10/11 incluse",
    popular: true,
  },
  {
    id: "depannage",
    service: "Dépannage logiciel",
    price: "Sur devis",
    note: "Diagnostic gratuit",
    isQuote: true,
  },
];

// ============================================================
// TÉMOIGNAGES
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Farida R.",
    location: "Antsiranana",
    rating: 5,
    text: "Mon téléphone était en bootloop depuis 3 jours. Acker Tech l'a réparé en moins de 2 heures. Très pro, prix honnête. Je recommande vivement !",
    service: "Flashage Android",
    date: "Décembre 2024",
  },
  {
    id: "2",
    name: "Jean-Baptiste M.",
    location: "Diego-Suarez",
    rating: 5,
    text: "Installation de Windows 11 nickel, tous les drivers bien installés, PC qui tourne parfaitement. Suivi même après la prestation. Merci !",
    service: "Installation Windows 11",
    date: "Novembre 2024",
  },
  {
    id: "3",
    name: "Nadia H.",
    location: "Antsiranana",
    rating: 5,
    text: "CV et lettre de motivation réalisés rapidement avec un rendu vraiment professionnel. Ça m'a aidé à décrocher mon entretien. Super service !",
    service: "CV + Lettre de motivation",
    date: "Janvier 2025",
  },
];

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "Vous réparez aussi le matériel (écran cassé, batterie...) ?",
    answer:
      "Non, Acker Tech DS propose uniquement des services logiciels. Nous n'intervenons pas sur le matériel (remplacement d'écran, batterie, clavier, etc.).",
  },
  {
    id: "2",
    question: "Vous prenez en charge les iPhones et tablettes ?",
    answer:
      "Non. Le service de flashage est exclusivement pour les smartphones Android. Les iPhones (iOS) et les tablettes ne sont pas pris en charge.",
  },
  {
    id: "3",
    question: "Comment se passe le paiement ?",
    answer:
      "Le paiement se fait à la livraison du service, en espèces (Ariary). Aucun paiement n'est demandé à l'avance.",
  },
  {
    id: "4",
    question: "Y a-t-il un suivi après la prestation ?",
    answer:
      "Oui, nous assurons une assistance après service. Si vous rencontrez un problème lié à notre intervention, contactez-nous via WhatsApp.",
  },
  {
    id: "5",
    question: "Combien de temps dure un flashage Android ?",
    answer:
      "En général entre 1 et 3 heures selon le modèle et l'état du système.",
  },
  {
    id: "6",
    question: "Mes données sont-elles conservées lors d'un flashage ?",
    answer:
      "Un flashage implique une remise à zéro du système. Nous vous recommandons de sauvegarder vos données avant l'intervention si possible.",
  },
  {
    id: "7",
    question: "L'installation Windows inclut-elle l'activation ?",
    answer:
      "Oui, l'activation de Windows 10 et Windows 11 est incluse dans le prix de 10 000 Ar.",
  },
  {
    id: "8",
    question: "Puis-je déposer mon matériel ou venez-vous à domicile ?",
    answer:
      "Contactez-nous via WhatsApp ou par téléphone pour convenir des modalités selon votre situation à Antsiranana.",
  },
  {
    id: "9",
    question: "Créez-vous aussi des sites web ?",
    answer:
      "Oui ! Nous créons des sites web professionnels : site vitrine pour présenter votre activité ou site e-commerce pour vendre en ligne. Design moderne, responsive, optimisé SEO et sécurisé.",
  },
  {
    id: "10",
    question: "Quel est le délai de création d'un site web ?",
    answer:
      "Cela dépend de la complexité. Contactez-nous via WhatsApp avec vos détails et nous vous donnerons un devis et timeline personnalisés.",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];