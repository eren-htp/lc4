export interface TextileProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const TEXTILE_PRODUCTS: TextileProduct[] = [
  {
    id: "arcade-desso",
    name: "Arcade DESSO",
    brand: "Tarkett",
    description: "Dalle de moquette DESSO Arcade par Tarkett. Conçue pour les espaces à fort trafic avec une base EcoBase 100% recyclable contenant jusqu'à 91% de contenu recyclé et biosourcé.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/tSJJRguULKhJDEQE.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001030-arcade?backing=EcoBase%20-%20100%25%20recyclable%2C%20contient%20jusqu%27%C3%A0%2091%25%20de%20contenu%20recycl%C3%A9%20et%20biosourc%C3%A9",
    characteristics: [
      "Dalle de moquette",
      "Base EcoBase 100% recyclable",
      "Jusqu'à 91% contenu recyclé et biosourcé",
      "Fort trafic",
      "Absorption acoustique"
    ],
    applications: ["Bureaux", "Commercial", "Tertiaire"]
  },
  {
    id: "desert-desso",
    name: "Desert DESSO",
    brand: "Tarkett",
    description: "Dalle de moquette DESSO Desert par Tarkett. Design durable avec absorption acoustique supérieure, idéale pour les espaces de travail modernes et les environnements commerciaux.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/emdAWojvfVRlhanW.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001036-desert",
    characteristics: [
      "Dalle de moquette",
      "Design durable",
      "Absorption acoustique supérieure",
      "Espaces de travail modernes",
      "Éco-responsable"
    ],
    applications: ["Bureaux", "Commercial", "Hôtellerie"]
  },
  {
    id: "essence-desso",
    name: "Essence DESSO",
    brand: "Tarkett",
    description: "Dalle de moquette DESSO Essence par Tarkett. Collection polyvalente permettant le mix and match pour créer des designs uniques. Idéale pour personnaliser les espaces professionnels.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/FLxHwsSFlVVsrUCi.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001039-essence",
    characteristics: [
      "Dalle de moquette",
      "Mix and match possible",
      "Designs personnalisables",
      "Large palette de couleurs",
      "Confort et durabilité"
    ],
    applications: ["Bureaux", "Commercial", "Éducation"]
  }
];
