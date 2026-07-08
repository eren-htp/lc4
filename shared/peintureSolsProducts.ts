export interface PeintureSolProduct {
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
  couleurs: string[] | null;
  prix: number | null;
  rendement?: string;
  finition?: string | null;
  documentation?: {
    fiche_technique?: string;
    rapport_alimentaire?: string;
  };
  produits_associes?: string[];
}

export const PEINTURE_SOLS_PRODUCTS: PeintureSolProduct[] = [
  {
    id: "nepsol",
    nom: "NEPSOL",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/nepsol/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/GKMJZuxisuzQNaig.jpg",
    description_courte: "Solution polyvalente pour la préparation des sols : dégraissage, décapage, passivation",
    description_longue: "Produit multi-action pour la préparation des sols. Nettoie, dégraisse et neutralise la laitance de ciment. Dilution 20-30% dans l'eau. Peut être appliqué à la brosse dure, au spray ou au rouleau.",
    caracteristiques: [
      "Dégraissage des supports sales",
      "Neutralisation de la laitance de ciment",
      "Nettoyage des surfaces aluminium",
      "Rendement : 6-10 m²/L selon état du support",
      "Produit acide — port d'EPI obligatoire"
    ],
    domaines_application: [
      "Sols intérieurs et extérieurs",
      "Béton et dérivés",
      "Surfaces aluminium",
      "Préparation avant peinture de sol"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "5 L", "20 L"],
    rendement: "6-10 m²/L",
    finition: null,
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "https://www.cimentol.com/wp-content/uploads/FT-NEPSOL.pdf"
    }
  },
  {
    id: "watprim",
    nom: "WATPRIM",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/watprim/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/MtNjDcqdqDFbeGSH.jpg",
    description_courte: "Primaire d'adhérence époxy bi-composant incolore — tous supports, sans solvant",
    description_longue: "Primaire d'adhérence époxy bi-composant sans solvant, inodore. Excellente performance d'accroche sur fonds bloqués et surfaces humides (non saturées). Consolide les supports crayeux et poudreux. Pot life : 45 minutes après mélange.",
    caracteristiques: [
      "Époxy bi-composant sans solvant",
      "Inodore",
      "Excellente adhérence sur fonds bloqués",
      "Adhérence sur supports humides (non saturés)",
      "Consolide les supports crayeux et poudreux",
      "Certifié contact alimentaire (PV Alimentaire)",
      "Notation environnementale A+"
    ],
    domaines_application: [
      "Béton et dérivés",
      "Pierres et briques",
      "Amiante-ciment",
      "Acier et métaux ferreux",
      "Carrelage",
      "Intérieur (extérieur si recouvert de peinture)"
    ],
    usage: ["Intérieur"],
    conditionnements: ["1 L", "5 L", "10 L"],
    rendement: "6-8 m²/L",
    finition: "Incolore",
    couleurs: ["Incolore"],
    prix: null,
    documentation: {
      fiche_technique: "https://www.cimentol.com/wp-content/uploads/2026/03/FT-205-WATPRIM-NF.pdf"
    }
  },
  {
    id: "watsol",
    nom: "WATSOL",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/watsol/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/QPivbUDJATdDJnTu.jpg",
    description_courte: "Peinture époxy bi-composant diluable à l'eau — très haute dureté et résistance à l'abrasion",
    description_longue: "Peinture filmogène époxy bi-composant diluable à l'eau pour sols et murs soumis à de fortes contraintes mécaniques et chimiques. Très grande dureté, excellente résistance à l'abrasion. Sans odeur, non inflammable. Certifiée contact alimentaire.",
    caracteristiques: [
      "Époxy bi-composant diluable à l'eau",
      "Très grande dureté",
      "Excellente résistance à l'abrasion",
      "Sans odeur, non inflammable",
      "Certifié contact alimentaire (PV Alimentaire)",
      "Notation environnementale A+",
      "Rendement : 5-6 m²/kg"
    ],
    domaines_application: [
      "Immeubles collectifs (bureaux, hôpitaux, restaurants)",
      "Espaces industriels (parkings, entrepôts, agro-alimentaire)",
      "Résidentiel (cuisines, salles de bain, garages)",
      "Piscines"
    ],
    usage: ["Intérieur"],
    conditionnements: ["1 kg", "5 kg", "20 kg"],
    rendement: "5-6 m²/kg",
    finition: null,
    couleurs: [
      "Blanc", "Bleu azur (RAL 5012)", "Gris ciment (RAL 7040)",
      "Gris clair (RAL 7035)", "Gris foncé (RAL 7042)", "Jaune or (RAL 1023)",
      "Noir", "Rouge signalisation (RAL 3001)"
    ],
    prix: null,
    documentation: {
      fiche_technique: "https://www.cimentol.com/wp-content/uploads/2026/01/FT-241-WATSOL.pdf",
      rapport_alimentaire: "https://www.cimentol.com/wp-content/uploads/2022/07/Rapport-ESSAI-PV-ALIM-WATSOL-2022.pdf"
    }
  },
  {
    id: "ekosol",
    nom: "EKOSOL",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/ekosol/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/bOcxZbCKRxjZcmuy.jpg",
    description_courte: "Peinture polyuréthane bi-composant en phase aqueuse — intérieur/extérieur, faibles COV",
    description_longue: "Peinture filmogène polyuréthane bi-composant en phase aqueuse pour la protection et la décoration des sols et murs. Séchage rapide (recouvrable en 5-6h). Certifiée LEED, contact alimentaire, et norme jouets. Faibles COV.",
    caracteristiques: [
      "Polyuréthane bi-composant phase aqueuse",
      "Séchage rapide : recouvrable en 5-6h",
      "Faibles COV",
      "Certifié LEED",
      "Certifié contact alimentaire (PV Alimentaire)",
      "Conforme norme jouets",
      "Notation environnementale A+ / Excell+ Blue",
      "Rendement : 9-11 m²/L"
    ],
    domaines_application: [
      "Immeubles collectifs, bureaux, hôpitaux, laboratoires, restaurants",
      "Industrie : parkings, entrepôts, dépôts, agro-alimentaire, chambres froides",
      "Résidentiel : lofts, cuisines, salles de bain, garages, caves, escaliers",
      "Extérieur : terrasses, parkings, cheminements"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    rendement: "9-11 m²/L",
    finition: "Mat / Satin / Brillant",
    couleurs: ["Demi-blanc", "Blanc", "Neutre", "Noir"],
    prix: null,
    documentation: {
      fiche_technique: "FT-245-EKOSOL"
    }
  },
  {
    id: "thanosol",
    nom: "THANOSOL",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/thanosol/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/jFVtWGMxNgCNXJEO.jpg",
    description_courte: "Peinture polyuréthane mono-composant en phase aqueuse — rénovation sols et murs, prête à l'emploi",
    description_longue: "Peinture polyuréthane mono-composant prête à l'emploi en phase aqueuse pour la rénovation et la décoration des sols et murs. Séchage rapide (recouvrable après 90 min). Sans odeur, certifiée contact alimentaire. Usage domestique.",
    caracteristiques: [
      "Mono-composant prête à l'emploi",
      "Polyuréthane phase aqueuse",
      "Séchage rapide : recouvrable en 90 min",
      "Sans odeur",
      "Certifié contact alimentaire (PV Alimentaire IANESCO)",
      "Notation environnementale A+",
      "Rendement : 8-10 m²/L"
    ],
    domaines_application: [
      "Petits entrepôts et locaux de stockage",
      "Commerces, couloirs, balcons",
      "Laboratoires, cuisines, hôpitaux, chambres froides",
      "Béton, chapes ciment, PVC, carrelage, parquet, métaux ferreux"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "15 L"],
    rendement: "8-10 m²/L",
    finition: "Satiné",
    couleurs: [
      "Blanc", "Bleu azur", "Gris ciment", "Gris clair",
      "Gris foncé", "Jaune or", "Noir", "Rouge vif"
    ],
    prix: null,
    documentation: {
      fiche_technique: "FT-231-THANOSOL"
    }
  },
  {
    id: "nexol",
    nom: "NEXOL",
    marque: "Cimentol",
    url_produit: "https://www.cimentol.com/produit/nexol/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/eiNqGVbnepmDcONP.png",
    description_courte: "Peinture polyuréthane mono-composant solvantée — haute résistance, anti-poussière, 18 coloris",
    description_longue: "Peinture mono-composant polyuréthane alkyde-uréthane pour la rénovation et la décoration des sols et murs. Haute résistance aux rayures et à l'abrasion. Séchage rapide, anti-poussière. Conforme directive COV 2010. 18 coloris disponibles.",
    caracteristiques: [
      "Mono-composant polyuréthane alkyde-uréthane",
      "Haute résistance aux rayures et à l'abrasion",
      "Séchage rapide",
      "Anti-poussière",
      "Conforme directive COV 2010",
      "Notation environnementale A+",
      "18 coloris disponibles",
      "Rendement : 8-10 m²/L"
    ],
    domaines_application: [
      "Parkings, entrepôts, dépôts",
      "Béton, chape ciment, carrelage, parquet bois",
      "Métaux ferreux traités antirouille",
      "Peintures existantes saines"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "15 L"],
    rendement: "8-10 m²/L",
    finition: "Satiné",
    couleurs: [
      "Base neutre", "Blanc cassé", "Beige", "Blanc", "Bleu azur",
      "Bleu marine", "Bleu piscine", "Crème", "Greige (plusieurs teintes)",
      "Ivoire", "Jaune or", "Noir", "Rouge signalisation", "Terracotta",
      "Vert clair", "Vert mousse"
    ],
    prix: null,
    produits_associes: ["WATPRIM", "NEPSOL", "WATWAX"],
    documentation: {
      fiche_technique: "FT-221-NEXOL"
    }
  }
];
