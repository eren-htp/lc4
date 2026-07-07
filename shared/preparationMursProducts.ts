export interface PreparationMursProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  url: string;
  characteristics: string[];
  applications: string[];
}

export const PREPARATION_MURS_PRODUCTS: PreparationMursProduct[] = [
  {
    id: "prestonett-r-reboucheur",
    name: "Enduit de rebouchage en poudre",
    brand: "Beissier",
    description: "Prestonett R - Enduit de rebouchage en poudre par Beissier. Idéal pour reboucher les trous, fissures et saignées avant mise en peinture.",
    url: "https://www.beissier.fr/produit/prestonett-r-reboucheur/",
    characteristics: [
      "Enduit de rebouchage",
      "En poudre",
      "Rebouche trous et fissures",
      "Préparation avant peinture",
      "Marque Beissier"
    ],
    applications: ["Intérieur", "Murs", "Plafonds"]
  },
  {
    id: "prestonett-m-multi-usage",
    name: "Enduit multi-usage en poudre",
    brand: "Beissier",
    description: "Prestonett M - Enduit multi-usage en poudre par Beissier. Polyvalent pour reboucher, lisser et égaliser les surfaces avant finition.",
    url: "https://www.beissier.fr/produit/prestonett-m-multi-usage-2/",
    characteristics: [
      "Enduit multi-usage",
      "En poudre",
      "Rebouche, lisse et égalise",
      "Polyvalent",
      "Marque Beissier"
    ],
    applications: ["Intérieur", "Murs", "Plafonds"]
  },
  {
    id: "ce-78-prise-rapide-2h",
    name: "CE 78 Prise rapide 2H",
    brand: "Semin",
    description: "CE 78 Très Rapide 2H par Semin. Enduit en poudre à prise rapide (2 heures) pour le traitement des joints de plaques de plâtre.",
    url: "https://www.semin.com/produits/platrerie-isolation/enduits/enduit-en-poudre/ce-78-tr%C3%A8s-rapide-2h",
    characteristics: [
      "Enduit en poudre",
      "Prise rapide 2 heures",
      "Traitement des joints",
      "Plaques de plâtre",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Joints", "Plâtrerie"]
  },
  {
    id: "ce-78-prise-rapide-4h",
    name: "CE 78 Prise rapide 4H",
    brand: "Semin",
    description: "CE 78 Rapide 4H par Semin. Enduit en poudre à prise rapide (4 heures) pour le traitement des joints de plaques de plâtre avec un temps de travail plus long.",
    url: "https://www.semin.com/produits/platrerie-isolation/enduits/enduit-en-poudre/ce-78-rapide-4h",
    characteristics: [
      "Enduit en poudre",
      "Prise rapide 4 heures",
      "Temps de travail prolongé",
      "Traitement des joints",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Joints", "Plâtrerie"]
  },
  {
    id: "semin-2-en-1-garnissage-lissage",
    name: "2 en 1 Garnissage Lissage",
    brand: "Semin",
    description: "Semin 2 en 1 - Enduit de garnissage et lissage prêt à l'emploi. Dégrossissant polyvalent pour préparer les surfaces avant peinture.",
    url: "https://www.semin.com/produits/peinture/degrossisseur/degrossissant-pr%C3%AAt-lemploi/semin-2-en-1-gl",
    characteristics: [
      "Garnissage et lissage",
      "Prêt à l'emploi",
      "2 en 1",
      "Dégrossissant polyvalent",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Murs", "Plafonds"]
  },
  {
    id: "airless-3-en-1-glj",
    name: "Airless 3 EN 1 - Garnissage Lissage Joint",
    brand: "Semin",
    description: "Semin Airless 3 en 1 - Enduit mécanisable pour garnissage, lissage et joint. Application airless pour un rendement optimal sur grandes surfaces.",
    url: "https://www.semin.com/produits/peinture/enduit-m%C3%A9canisable/enduit-airless/airless-3-en-1-glj",
    characteristics: [
      "Enduit mécanisable",
      "3 en 1 : garnissage, lissage, joint",
      "Application airless",
      "Rendement optimal",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Grandes surfaces", "Professionnel"]
  },
  {
    id: "plakist-ce-78-perfectjoint",
    name: "Plakist CE 78 Perfect'joint",
    brand: "Semin",
    description: "Plakist CE 78 Perfect'joint par Semin. Enduit prêt à l'emploi pour le traitement des joints de plaques de plâtre avec une finition parfaite.",
    url: "https://www.semin.com/produits/platrerie-isolation/enduits/enduit-pr%C3%AAt-%C3%A0-lemploi/plakist-ce-78-perfectjoint",
    characteristics: [
      "Enduit prêt à l'emploi",
      "Traitement des joints",
      "Finition parfaite",
      "Plaques de plâtre",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Joints", "Plâtrerie"]
  },
  {
    id: "colle-toile-de-verre",
    name: "Colle spéciale Toile de verre",
    brand: "Semin",
    description: "Colle spéciale toile de verre par Semin. Colle murale haute performance pour la pose de toiles de verre et revêtements muraux à peindre.",
    url: "https://www.semin.com/produits/peinture/colles-murales-et-toiles-de-verre/colles-rev%C3%AAtements-muraux/colle-toile-de-verre",
    characteristics: [
      "Colle murale",
      "Spéciale toile de verre",
      "Haute performance",
      "Revêtements muraux à peindre",
      "Marque Semin"
    ],
    applications: ["Intérieur", "Murs", "Toile de verre"]
  },
  {
    id: "bagar-airliss-g",
    name: "Enduit de dégrossissage et de finition",
    brand: "Bagar",
    description: "Bagar Airliss G - Enduit de dégrossissage et de finition par Beissier. Application airless pour un rendu lisse et régulier sur grandes surfaces.",
    url: "https://www.beissier.fr/produit/bagar-airliss-g/",
    characteristics: [
      "Dégrossissage et finition",
      "Application airless",
      "Rendu lisse et régulier",
      "Grandes surfaces",
      "Marque Bagar / Beissier"
    ],
    applications: ["Intérieur", "Murs", "Plafonds"]
  },
  {
    id: "quelyd-perfect",
    name: "QUELYD PERFECT",
    brand: "Quelyd",
    description: "Quelyd Perfect - Colle prête à l'emploi spécialement destinée à tous types de papiers peints. Encollage facile et maintien durable pour tous supports.",
    url: "https://www.bostik.com/france/fr/catalog/product/construction/emea/quelyd-fr/perfect/",
    characteristics: [
      "Colle prête à l'emploi",
      "Tous types de papiers peints",
      "Encollage facile",
      "Maintien durable",
      "Marque Quelyd / Bostik"
    ],
    applications: ["Intérieur", "Papiers peints", "Revêtements muraux"]
  },
  {
    id: "decomur-s45-super",
    name: "Decomur S45 Super Enduit intérieur",
    brand: "Decotric",
    description: "Decomur S45 Super - Enduit intérieur par Decotric. Enduit de rebouchage et lissage haute performance pour la préparation des murs intérieurs.",
    url: "https://www.decotric.fr/products/filling-and-smoothing/decomur-super-bonding-filler/15kg/",
    characteristics: [
      "Enduit intérieur",
      "Rebouchage et lissage",
      "Haute performance",
      "Préparation des murs",
      "Marque Decotric"
    ],
    applications: ["Intérieur", "Murs", "Rénovation"]
  }
];
