export interface MetalProduct {
  id: string;
  nom: string;
  marque: string;
  url_produit: string;
  image: string;
  description_courte: string;
  description_longue: string;
  caracteristiques: string[];
  domaines_application: string[];
  usage: string[];
  conditionnements: string[];
  rendement?: string | null;
  finition?: string;
  couleurs?: string[] | null;
  prix?: number | null;
  documentation?: {
    fiche_technique?: string;
    plaquette?: string;
  };
}

export const METAL_PRODUCTS: MetalProduct[] = [
  {
    id: "soyance-evolution",
    nom: "SOYANCE ÉVOLUTION",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/soyance-evolution/",
    image: "/manus-storage/soyance-evolution_ba068288.png",
    description_courte: "Peinture pour menuiseries et structures métalliques — aspect tendu, grande dureté",
    description_longue: "Peinture pour menuiseries, structures et éléments métalliques en intérieur et extérieur. Aspect tendu, grande dureté, excellente adhérence. Recouvrable en 8h. Fabrication française par Blancolor (Groupe Allios).",
    caracteristiques: [
      "Recouvrable en 8h",
      "Aspect tendu",
      "Grande dureté",
      "Excellente adhérence",
      "Fabrication française"
    ],
    domaines_application: [
      "Menuiseries intérieures et extérieures",
      "Portes de service et portes d'ascenseur",
      "Volets, garde-corps, grilles, mains-courantes",
      "Acier brut, galvanisé, aluminium, zinc",
      "Plastiques rigides (PVC) préalablement apprêtés",
      "Bois et dérivés",
      "Anciennes peintures en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    rendement: null,
    finition: "Soie",
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "https://www.blancolor.com/wp-content/uploads/2026/03/FT-SOYANCE-EVOLUTION-0326.pdf",
      plaquette: "https://www.blancolor.com/wp-content/uploads/2024/07/PLAQUETTE-SOYANCE-en-page-2024.pdf"
    }
  },
  {
    id: "protecthan",
    nom: "PROTECTHAN",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/protecthan/",
    image: "/manus-storage/protecthan_fe1b5120.png",
    description_courte: "Peinture polyuréthane anticorrosion 2-en-1 — primaire + finition, haute résistance UV et brouillard salin",
    description_longue: "Peinture polyuréthane universelle anticorrosion haute performance. Formule 2-en-1 : fait office de primaire et de finition en une seule application. Traite les surfaces rouillées. Haute résistance aux UV, intempéries et au brouillard salin. Certifiée contact alimentaire. Séchage à basse température.",
    caracteristiques: [
      "2-en-1 : primaire + finition",
      "Anticorrosion haute performance",
      "Traite les surfaces rouillées",
      "Haute résistance UV, intempéries et brouillard salin",
      "Certifié contact alimentaire (PV Alimentaire)",
      "Séchage à basse température",
      "Notation environnementale A+",
      "Rendement : 8-10 m²/L"
    ],
    domaines_application: [
      "Métal",
      "Bois",
      "Maçonnerie"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    rendement: "8-10 m²/L",
    finition: "Mat / Satin / Brillant",
    couleurs: ["Demi-blanc", "Base neutre", "Blanc"],
    prix: null,
    documentation: {
      fiche_technique: "FT-455-PROTECTHAN"
    }
  },
  {
    id: "metalac-soie",
    nom: "METALAC SOIE",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/metalac-soie/",
    image: "/manus-storage/metalac-soie_9f9e0fa0.png",
    description_courte: "Peinture antirouille multi-couche intérieur/extérieur — primaire, intermédiaire et finition en un",
    description_longue: "Peinture alkydes multi-usage pour menuiseries et structures métalliques en intérieur et extérieur. Fonction 3-en-1 : primaire, couche intermédiaire et finition. Antirouille, excellente adhérence et excellente résistance mécanique.",
    caracteristiques: [
      "3-en-1 : primaire, intermédiaire et finition",
      "Antirouille",
      "Excellente adhérence",
      "Excellente résistance mécanique",
      "Base alkydes",
      "Épaisseur film sec minimum : 120 µm",
      "Fabrication française"
    ],
    domaines_application: [
      "Encadrements de portes et portes de service",
      "Portes d'ascenseur, volets, garde-corps",
      "Grilles, mains-courantes, châssis",
      "Tuyauteries et radiateurs",
      "Menuiseries intérieures bois (avec restrictions)"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    rendement: null,
    finition: "Soie",
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-METALAC-SOIE"
    }
  }
];
