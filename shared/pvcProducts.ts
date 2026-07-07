export interface PvcProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const PVC_PRODUCTS: PvcProduct[] = [
  {
    id: "elegance-rigid-55",
    name: "Elegance Rigid 55",
    brand: "Tarkett",
    description: "Revêtement de sol PVC rigide clipsable haute performance. La collection Elegance Rigid 55 offre des designs réalistes et une résistance exceptionnelle pour les espaces résidentiels et commerciaux.",
    image: "/manus-storage/elegance-rigid-55_28b2d70b.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C002563-elegance-rigid-55",
    characteristics: [
      "Sol rigide clipsable",
      "Haute résistance au trafic",
      "Designs réalistes",
      "Adapté usage commercial et résidentiel",
      "Facile d'entretien"
    ],
    applications: ["Habitat", "Commercial"]
  },
  {
    id: "neo-click-30",
    name: "Néo Click 30",
    brand: "Tarkett",
    description: "Sol PVC clipsable de la gamme Néo Click, épaisseur 30. Solution idéale pour les pièces à trafic modéré avec un excellent rapport qualité-prix.",
    image: "/manus-storage/neo-click-30_c6da2bce.jpg",
    url: "https://www.les-parquets-de-louest.fr/wp-content/uploads/2024/07/Fiche-produit-neo-click-30-dalle.pdf",
    characteristics: [
      "Sol PVC clipsable",
      "Format dalle",
      "Trafic modéré",
      "Bon rapport qualité-prix",
      "Installation facile"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "neo-click-55",
    name: "Néo Click 55",
    brand: "Tarkett",
    description: "Sol PVC clipsable de la gamme Néo Click, épaisseur 55. Conçu pour les espaces à trafic intense avec une résistance supérieure et des finitions haut de gamme.",
    image: "/manus-storage/neo-click-55_7b8c7dd8.jpg",
    url: "https://www.les-parquets-de-louest.fr/wp-content/uploads/2024/07/Fiche-produit-neo-click-55-lame-1.pdf",
    characteristics: [
      "Sol PVC clipsable",
      "Format lame",
      "Trafic intense",
      "Résistance supérieure",
      "Finitions haut de gamme"
    ],
    applications: ["Habitat", "Commercial"]
  },
  {
    id: "evasion",
    name: "Évasion",
    brand: "Alsafloor",
    description: "Collection de sols vinyles Évasion par Alsafloor. Des décors variés et tendance pour personnaliser vos intérieurs avec un revêtement PVC de qualité.",
    image: "/manus-storage/evasion_6048084b.png",
    url: "https://www.alsaflooring.com/vinyles/?type=&formData=&page=1",
    characteristics: [
      "Sol vinyle",
      "Décors variés et tendance",
      "Fabrication Alsafloor",
      "Qualité professionnelle",
      "Entretien facile"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "id-click-ultimate-30",
    name: "iD Click Ultimate 30",
    brand: "Tarkett",
    description: "Sol vinyle modulaire clipsable iD Click Ultimate 30. Designs naturels et performances ultimes pour un usage résidentiel confortable.",
    image: "/manus-storage/id-click-ultimate-30_d0171ea9.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C002067-id-click-ultimate-30",
    characteristics: [
      "Sol vinyle modulaire clipsable",
      "Designs naturels",
      "Usage résidentiel",
      "Confort acoustique",
      "Résistant à l'humidité"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "id-click-ultimate-55",
    name: "iD Click Ultimate 55",
    brand: "Tarkett",
    description: "Sol vinyle modulaire clipsable iD Click Ultimate 55. Performance renforcée pour les espaces à trafic modéré à intense, avec des designs authentiques.",
    image: "/manus-storage/id-click-ultimate-55_79f18297.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001616-id-click-ultimate-55",
    characteristics: [
      "Sol vinyle modulaire clipsable",
      "Trafic modéré à intense",
      "Designs authentiques",
      "Haute durabilité",
      "Compatible pièces humides"
    ],
    applications: ["Habitat", "Commercial"]
  },
  {
    id: "id-click-ultimate-70",
    name: "iD Click Ultimate 70",
    brand: "Tarkett",
    description: "Sol vinyle modulaire clipsable iD Click Ultimate 70. La référence pour les espaces à très fort trafic avec une résistance maximale et des finitions premium.",
    image: "/manus-storage/id-click-ultimate-70_0abab4bd.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001340-id-click-ultimate-70",
    characteristics: [
      "Sol vinyle modulaire clipsable",
      "Très fort trafic",
      "Résistance maximale",
      "Finitions premium",
      "Idéal espaces commerciaux"
    ],
    applications: ["Commercial", "Tertiaire"]
  },
  {
    id: "tx-habitat",
    name: "TX Habitat",
    brand: "Tarkett",
    description: "Revêtement de sol PVC en lés TX Habitat par Tarkett. Solution économique et performante pour les logements collectifs et individuels.",
    image: "/manus-storage/tx-habitat_c3b77205.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001889-tx-habitat",
    characteristics: [
      "Sol PVC en lés",
      "Solution économique",
      "Logements collectifs et individuels",
      "Pose collée",
      "Entretien simple"
    ],
    applications: ["Habitat", "Logement collectif"]
  },
  {
    id: "excellence",
    name: "Excellence",
    brand: "Tarkett",
    description: "Revêtement de sol PVC hétérogène Excellence par Tarkett. Gamme professionnelle pour les établissements recevant du public avec des performances acoustiques et une grande durabilité.",
    image: "/manus-storage/excellence_beb9b4d4.jpg",
    url: "https://media.tarkett.com/docs/BR_FR_Excellence_Prescription_2018.pdf",
    characteristics: [
      "Sol PVC hétérogène",
      "Usage professionnel",
      "Performances acoustiques",
      "Grande durabilité",
      "Établissements recevant du public"
    ],
    applications: ["Commercial", "ERP", "Santé"]
  }
];
