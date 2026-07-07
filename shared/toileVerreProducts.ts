export interface ToileVerreProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const TOILE_VERRE_PRODUCTS: ToileVerreProduct[] = [
  {
    id: "novelio-adfors-saint-gobain",
    name: "Novelio adFORS",
    brand: "Saint-Gobain",
    description: "Toiles de verre Novelio par adFORS Saint-Gobain. Gamme complète de toiles de verre décoratives et de rénovation pour habiller et renforcer vos murs et plafonds.",
    url: "https://eu.adfors.com/fr/toiles-de-verre-novelio",
    characteristics: [
      "Toiles de verre décoratives",
      "Rénovation et renforcement",
      "Large choix de motifs",
      "Résistance mécanique",
      "Marque Saint-Gobain"
    ],
    applications: ["Intérieur", "Murs", "Plafonds", "Rénovation"]
  }
];
