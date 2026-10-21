import type { Metadata } from "next";
import ServicesPageContent from "./services-content";

export const metadata: Metadata = {
  title: "Création de sites web et services numériques",
  description:
    "Création de sites vitrines et e-commerce professionnels à Antsiranana, ainsi que flashage Android, installation système, dépannage logiciel et CV.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
