export interface PeintureInterieurProduct {
  id: string;
  name: string;
  brand: string;
  type: string;
  description: string;
  usage: string[];
  image: string;
  url: string;
  advantages: string[];
  technicalInfo: { label: string; value: string }[];
  conditionnements: string[];
  subcategory: string;
}

export const PEINTURE_INTERIEUR_PRODUCTS: PeintureInterieurProduct[] = [
  {
    id: "excellia-mat-evolution",
    name: "EXCELLIA MAT ÉVOLUTION",
    brand: "Blancolor",
    type: "Peinture-laque acrylique et polyuréthane",
    description: "Peinture-laque acrylique et polyuréthane pour boiseries et menuiseries intérieures. Aspect tendu, grande dureté après séchage, excellent rendement et lessivable (Classe 1).",
    usage: ["Intérieur"],
    image: "/manus-storage/excellia-mat-evolution_b8daa31a.png",
    url: "https://www.blancolor.com/produit/excellia-mat-evolution/",
    advantages: [
      "Aspect tendu",
      "Grande dureté après séchage",
      "Excellent rendement",
      "Lessivable (Classe 1)"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Mat" },
      { label: "Destination", value: "Boiseries, menuiseries" },
      { label: "Composition", value: "Acrylique + Polyuréthane" }
    ],
    conditionnements: ["1L", "3L", "10L"],
    subcategory: "Blancolor"
  },
  {
    id: "excellia-satin-evolution",
    name: "EXCELLIA SATIN ÉVOLUTION",
    brand: "Blancolor",
    type: "Peinture-laque aux résines acryliques et polyuréthanes",
    description: "Peinture-laque aux résines acryliques et polyuréthanes pour murs, plafonds et boiseries en intérieur et extérieur. Polyvalence des supports, bonne résistance mécanique et lessivable (Classe 1).",
    usage: ["Intérieur", "Extérieur"],
    image: "/manus-storage/excellia-satin-evolution_1db8ca48.jpg",
    url: "https://www.blancolor.com/produit/excellia-satin-evolution/",
    advantages: [
      "Polyvalence des supports",
      "Bonne résistance mécanique",
      "Grande dureté après séchage",
      "Lessivable (Classe 1)"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Satin" },
      { label: "Destination", value: "Murs, plafonds, boiseries" },
      { label: "Composition", value: "Acrylique + Polyuréthane" }
    ],
    conditionnements: ["1L", "3L", "10L"],
    subcategory: "Blancolor"
  },
  {
    id: "soyance-evolution",
    name: "SOYANCE ÉVOLUTION",
    brand: "Blancolor",
    type: "Peinture laque aux résines alkydes uréthanes à séchage rapide",
    description: "Peinture laque aux résines alkydes uréthanes à séchage rapide pour menuiseries, structures et éléments de serrureries métalliques, boiseries. Recouvrable en 8h, aspect tendu, grande dureté et excellente adhérence.",
    usage: ["Intérieur", "Extérieur"],
    image: "/manus-storage/soyance-evolution_03ff6895.png",
    url: "https://www.blancolor.com/produit/soyance-evolution/",
    advantages: [
      "Recouvrable en 8h",
      "Aspect tendu",
      "Grande dureté",
      "Excellente adhérence"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Satin" },
      { label: "Destination", value: "Menuiseries, serrureries, boiseries" },
      { label: "Composition", value: "Alkyde uréthane (solvant)" }
    ],
    conditionnements: ["1L", "3L", "10L"],
    subcategory: "Blancolor"
  },
  {
    id: "amplia-h2o-satin",
    name: "AMPLIA H₂O SATIN",
    brand: "Astral Bâtiment",
    type: "Peinture laque garnissante à base de copolymères acryliques en dispersion aqueuse",
    description: "Peinture laque garnissante à base de copolymères acryliques en dispersion aqueuse. Bon compromis entre le garnissant et la tension, masque les irrégularités du support, faible odeur et facile d'application.",
    usage: ["Intérieur"],
    image: "/manus-storage/amplia-h2o-satin_44125195.png",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-satin?size=1L",
    advantages: [
      "Bon compromis entre le garnissant et la tension",
      "Masque les irrégularités du support",
      "Faible odeur",
      "Entretien facile (bonne lessivabilité)",
      "Facile d'application",
      "Recouvrable dans la journée"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Satin" },
      { label: "Rendement", value: "12 m²/L" },
      { label: "Composition", value: "Aqueux" }
    ],
    conditionnements: ["1L", "2,5L", "10L"],
    subcategory: "Astral"
  },
  {
    id: "amplia-h2o-mat-veloute",
    name: "AMPLIA H₂O MAT VELOUTÉ",
    brand: "Astral Bâtiment",
    type: "Peinture laque garnissante à base de copolymères acryliques en dispersion aqueuse",
    description: "Peinture laque garnissante à base de copolymères acryliques en dispersion aqueuse. Bon compromis entre le garnissant et la tension, masque les irrégularités du support, faible odeur et recouvrable dans la journée.",
    usage: ["Intérieur"],
    image: "/manus-storage/amplia-h2o-mat-veloute_7d018c80.png",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-mat-velout%C3%A9?size=1L",
    advantages: [
      "Bon compromis entre le garnissant et la tension",
      "Masque les irrégularités du support",
      "Faible odeur",
      "Entretien facile",
      "Facile d'application",
      "Recouvrable dans la journée"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Velours" },
      { label: "Rendement", value: "14 m²/L" },
      { label: "Temps de séchage", value: "2 heures" },
      { label: "Recouvrable", value: "6 heures" },
      { label: "Composition", value: "Aqueux" }
    ],
    conditionnements: ["1L", "2,5L"],
    subcategory: "Astral"
  },
  {
    id: "amplia-h2o-prim",
    name: "AMPLIA H₂O PRIM",
    brand: "Astral Bâtiment",
    type: "Couche primaire garnissante à base de résine acrylique en phase aqueuse",
    description: "Couche primaire garnissante à base de résine acrylique en phase aqueuse. Primaire pour les finitions Amplia H₂O Mat Velouté et Amplia H₂O Satin. Bon garnissant, bel arrondi et enrobage des arêtes.",
    usage: ["Intérieur", "Extérieur"],
    image: "/manus-storage/amplia-h2o-prim_7da3ef51.png",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-prim?size=1L",
    advantages: [
      "Primaire pour les finitions Amplia H₂O Mat Velouté et Amplia H₂O Satin",
      "Bon garnissant, bel arrondi et enrobage des arêtes",
      "Facile d'application, à faible odeur et rapidement recouvrable",
      "Évite les taches de rouille pendant la phase de séchage",
      "Évite les remontées de tanins des boiseries dénudées"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Mat" },
      { label: "Rendement", value: "12 m²/L" },
      { label: "Composition", value: "Aqueux" }
    ],
    conditionnements: ["1L", "2,5L", "10L"],
    subcategory: "Astral"
  },
  {
    id: "amplia-satin-hes",
    name: "AMPLIA SATIN HES",
    brand: "Astral Bâtiment",
    type: "Peinture-laque alkyde en phase solvant, à Haut Extrait Sec",
    description: "Peinture-laque alkyde en phase solvant, à Haut Extrait Sec, pour travaux courants. Très garnissant et d'une grande blancheur, excellente tension et bel arrondi, lessivable et facile d'entretien.",
    usage: ["Intérieur", "Extérieur"],
    image: "/manus-storage/amplia-satin-hes_25b916c5.png",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-satin-hes?size=1L",
    advantages: [
      "Très garnissant et d'une grande blancheur",
      "Excellente tension et bel arrondi",
      "Produit lessivable et facile d'entretien",
      "Temps ouvert plus long"
    ],
    technicalInfo: [
      { label: "Aspect", value: "Satin" },
      { label: "Rendement", value: "16 m²/L" },
      { label: "Composition", value: "Solvant" }
    ],
    conditionnements: ["1L", "2,5L", "15L"],
    subcategory: "Astral"
  }
];
