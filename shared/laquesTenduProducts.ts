export interface LaqueTenduProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const LAQUES_TENDU_PRODUCTS: LaqueTenduProduct[] = [
  {
    id: "excellia-mat-evolution",
    name: "Excellia Mat Evolution",
    brand: "Blancolor",
    description: "Peinture-laque acrylique et polyuréthane. Finition mate de haute qualité pour une application tendue et un rendu parfait sur boiseries et murs.",
    image: "/manus-storage/excellia-mat-evolution.jpg",
    url: "https://www.blancolor.com/produit/excellia-mat-evolution/",
    characteristics: [
      "Peinture-laque acrylique et polyuréthane",
      "Finition mate",
      "Application tendue",
      "Rendu parfait",
      "Boiseries et murs"
    ],
    applications: ["Intérieur", "Boiseries", "Murs"]
  },
  {
    id: "excellia-satin-evolution",
    name: "Excellia Satin Evolution",
    brand: "Blancolor",
    description: "Peinture-laque aux résines acryliques et polyuréthanes. Finition satinée élégante offrant un aspect lisse et résistant pour les boiseries et menuiseries.",
    image: "/manus-storage/excellia-satin-evolution.jpg",
    url: "https://www.blancolor.com/produit/excellia-satin-evolution/",
    characteristics: [
      "Résines acryliques et polyuréthanes",
      "Finition satinée",
      "Aspect lisse et résistant",
      "Haute durabilité",
      "Boiseries et menuiseries"
    ],
    applications: ["Intérieur", "Boiseries", "Menuiseries"]
  },
  {
    id: "soyance-evolution",
    name: "Soyance Évolution",
    brand: "Blancolor",
    description: "Peinture laque aux résines alkydes uréthanes à séchage rapide. Finition brillante et tendue pour un rendu laqué professionnel sur supports bois et métal.",
    image: "/manus-storage/soyance-evolution.jpg",
    url: "https://www.blancolor.com/produit/soyance-evolution/",
    characteristics: [
      "Résines alkydes uréthanes",
      "Séchage rapide",
      "Finition brillante et tendue",
      "Rendu laqué professionnel",
      "Supports bois et métal"
    ],
    applications: ["Intérieur", "Bois", "Métal"]
  },
  {
    id: "amplia-h2o-satin-laque",
    name: "Amplia H₂O Satin",
    brand: "Astral Bâtiment",
    description: "Laque satinée à base d'eau Amplia H₂O. Excellente opacité et tendu pour une finition satinée haut de gamme sur boiseries et murs intérieurs.",
    image: "/manus-storage/amplia-h2o-satin-laque.jpg",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-satin?size=1L",
    characteristics: [
      "Laque à base d'eau",
      "Finition satinée",
      "Excellente opacité",
      "Très bon tendu",
      "Faible odeur"
    ],
    applications: ["Intérieur", "Boiseries", "Murs"]
  },
  {
    id: "amplia-h2o-mat-veloute-laque",
    name: "Amplia H₂O Mat Velouté",
    brand: "Astral Bâtiment",
    description: "Laque mate veloutée à base d'eau Amplia H₂O. Aspect mat profond et velouté pour une finition contemporaine et élégante sur boiseries.",
    image: "/manus-storage/amplia-h2o-mat-veloute-laque.jpg",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-mat-velout%C3%A9?size=1L",
    characteristics: [
      "Laque à base d'eau",
      "Finition mate veloutée",
      "Aspect contemporain",
      "Excellent pouvoir couvrant",
      "Faible odeur"
    ],
    applications: ["Intérieur", "Boiseries", "Murs"]
  },
  {
    id: "amplia-h2o-prim-laque",
    name: "Amplia H₂O Prim",
    brand: "Astral Bâtiment",
    description: "Primaire laque à base d'eau Amplia H₂O. Sous-couche d'accrochage haute performance pour préparer les supports avant application de la laque de finition.",
    image: "/manus-storage/amplia-h2o-prim-laque.jpg",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-prim?size=1L",
    characteristics: [
      "Primaire à base d'eau",
      "Haute adhérence",
      "Préparation des supports",
      "Compatible laques Amplia",
      "Séchage rapide"
    ],
    applications: ["Intérieur", "Sous-couche", "Boiseries"]
  },
  {
    id: "amplia-satin-hes",
    name: "Amplia Satin HES",
    brand: "Astral Bâtiment",
    description: "Laque satinée Amplia Satin HES (Haut Extrait Sec). Formule concentrée pour un pouvoir couvrant exceptionnel et une finition satinée durable et résistante.",
    image: "/manus-storage/amplia-satin-hes.jpg",
    url: "https://www.astral-batiment.com/fr/fr/produits/amplia-satin-hes?size=1L",
    characteristics: [
      "Haut Extrait Sec (HES)",
      "Finition satinée",
      "Pouvoir couvrant exceptionnel",
      "Haute résistance",
      "Formule concentrée"
    ],
    applications: ["Intérieur", "Boiseries", "Menuiseries"]
  }
];
