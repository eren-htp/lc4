export interface StratifieProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const STRATIFIE_PRODUCTS: StratifieProduct[] = [
  {
    id: "alsafloor-osmoze",
    name: "Alsafloor Osmoze",
    brand: "Alsafloor",
    description: "Sol stratifié Osmoze par Alsafloor. Épaisseur 8 mm, décors chêne variés pour un rendu naturel et élégant. Solution idéale pour les pièces de vie.",
    image: "/manus-storage/osmoze_7749ca51.jpg",
    url: "https://www.alsaflooring.com/wp-content/uploads/2023/07/alsaflooring-stratifie-notice-ALSAFLOOR-osmoze-2023.pdf",
    characteristics: [
      "Stratifié 8 mm",
      "Décors chêne variés",
      "Rendu naturel",
      "Fabrication Alsafloor",
      "Pose clipsable"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "alsafloor-allure",
    name: "Alsafloor Allure",
    brand: "Alsafloor",
    description: "Sol stratifié Allure par Alsafloor. Gamme résistante à l'eau (Water Resistant) avec des décors contemporains et une pose facile grâce au système clipsable.",
    image: "/manus-storage/allure_13ce1983.jpg",
    url: "https://www.alsaflooring.com/wp-content/uploads/2026/01/604505-NOT-ADH-150X400-ALLURE-WR-100H-061025pdf.pdf",
    characteristics: [
      "Stratifié Water Resistant",
      "Décors contemporains",
      "Système clipsable",
      "Résistant à l'eau",
      "Fabrication Alsafloor"
    ],
    applications: ["Habitat", "Pièces de vie", "Pièces humides"]
  },
  {
    id: "alsafloor-allure-chic",
    name: "Alsafloor Allure Chic",
    brand: "Alsafloor",
    description: "Sol stratifié Allure Chic par Alsafloor. Version premium de la gamme Allure avec des finitions haut de gamme et une résistance à l'eau renforcée.",
    image: "/manus-storage/allure-chic_54ce47cd.jpg",
    url: "https://www.alsaflooring.com/wp-content/uploads/2026/01/604506-NOT-ADH-150X400-ALLURE-CHIC-WR-100H-061025.pdf",
    characteristics: [
      "Stratifié premium",
      "Finitions haut de gamme",
      "Water Resistant renforcé",
      "Décors élégants",
      "Fabrication Alsafloor"
    ],
    applications: ["Habitat", "Pièces de vie", "Pièces humides"]
  },
  {
    id: "alsafloor-allure-baton-rompu",
    name: "Alsafloor Allure Bâton Rompu",
    brand: "Alsafloor",
    description: "Sol stratifié Allure en pose bâton rompu par Alsafloor. Design chevron tendance avec la résistance à l'eau de la gamme Allure pour un rendu élégant et moderne.",
    image: "/manus-storage/allure-baton-rompu_977e5ea5.jpg",
    url: "https://www.alsaflooring.com/wp-content/uploads/2026/01/IMP_604305-NOT-ADH-130X325-ALLURE-BR-10MM-101025_vf.pdf",
    characteristics: [
      "Pose bâton rompu",
      "Design chevron tendance",
      "Water Resistant",
      "10 mm d'épaisseur",
      "Fabrication Alsafloor"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "chene-fontainebleau",
    name: "Chêne Fontainebleau",
    brand: "Alsawood",
    description: "Placage bois Chêne Fontainebleau par Alsawood (référence P467). Revêtement de sol en placage bois véritable pour un rendu authentique et chaleureux.",
    image: "/manus-storage/fontainebleau_7823ac06.jpg",
    url: "https://www.alsaflooring.com/placage-bois/chene-fontainebleau/?type=&formData=&page=1",
    characteristics: [
      "Placage bois véritable",
      "Chêne authentique",
      "Rendu chaleureux",
      "Référence P467",
      "Fabrication Alsawood"
    ],
    applications: ["Habitat", "Pièces de vie"]
  }
];
