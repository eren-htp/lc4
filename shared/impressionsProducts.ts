export interface ImpressionProduct {
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
  finition?: string;
  systeme_application?: string;
  disponibilite?: string;
  composition?: string;
  securite?: string;
  documentation?: {
    fiche_technique?: string;
    fiche_securite?: string;
    brochure?: string;
  };
}

export const IMPRESSIONS_PRODUCTS: ImpressionProduct[] = [
  {
    id: "corsiprim-evolution",
    nom: "CORSIPRIM ÉVOLUTION",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/corsiprim/",
    image: "/manus-storage/corsiprim-evolution_29da4bb2.png",
    description_courte: "Impression multi-supports consolidante pour intérieur et extérieur",
    description_longue: "Apprêt multi-supports destiné aux applications intérieures et extérieures. Consolide les fonds, opacifiant et garnissant. Séchage rapide en 2 à 3 heures.",
    caracteristiques: [
      "Consolidant de fonds",
      "Multi-supports",
      "Opacifiante et garnissante",
      "Séchage rapide : 2 à 3 heures"
    ],
    domaines_application: [
      "Murs intérieurs et extérieurs",
      "Plafonds",
      "Menuiseries",
      "Béton brut",
      "Briques et pierres",
      "Enduits plâtre",
      "Supports bois",
      "Anciennes peintures en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-CORSIPRIM EVOLUTION",
      fiche_securite: "FDS-CORSIPRIM EVOLUTION"
    }
  },
  {
    id: "extra-grip",
    nom: "EXTRAGRIP",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/extra-grip/",
    image: "/manus-storage/extragrip_c73b2355.png",
    description_courte: "Apprêt universel adhérence tous supports — métal, bois, plastique, carrelage",
    description_longue: "Apprêt universel pour intérieur et extérieur sur métallerie, menuiserie et supports variés. Contient un inhibiteur de corrosion. Excellente adhérence sur tous supports, y compris les surfaces peu poreuses.",
    caracteristiques: [
      "Adhérence tous supports",
      "Inhibiteur de corrosion",
      "Propriétés isolantes",
      "Compatible finitions polyuréthane et époxy"
    ],
    domaines_application: [
      "Structures métalliques (menuiserie, ferronnerie, charpente)",
      "Couvertures et bardages métalliques",
      "Métaux non ferreux (galvanisé, zinc, aluminium, cuivre)",
      "Métaux prélaqués",
      "Plastiques rigides (PVC)",
      "Panneaux bois à faible porosité (particule, OSB, HDF)",
      "Carrelage, faïence, marbre",
      "Anciennes peintures et vernis en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-EXTRAGRIP",
      fiche_securite: "FDS-EXTRAGRIP"
    }
  },
  {
    id: "extraprimer-evolution-2",
    nom: "EXTRAPRIMER ÉVOLUTION",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/extraprimer-evolution-2/",
    image: "/manus-storage/extraprimer-evolution_c833473d.png",
    description_courte: "Apprêt universel eau intérieur/extérieur — isole les taches, idéal bois tanniques",
    description_longue: "Apprêt universel en phase aqueuse pour intérieur et extérieur. Isole les taches persistantes, excellente adhérence, compatible toutes finitions. Particulièrement adapté aux bois tanniques. Fabriqué en France par Blancolor (Groupe Allios).",
    caracteristiques: [
      "Isole les taches persistantes",
      "Excellente adhérence",
      "Compatible toutes finitions",
      "Idéal bois tanniques",
      "Fabrication française"
    ],
    domaines_application: [
      "Murs et plafonds intérieurs/extérieurs",
      "Bois et boiseries",
      "Métaux non ferreux",
      "Maçonneries",
      "Béton brut et béton cellulaire",
      "Briques et pierres",
      "Revêtements bitumineux / EPDM",
      "Panneaux fibreux",
      "Faïence et verre",
      "Enduits plâtre",
      "Anciennes peintures en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-EXTRAPRIMER EVOLUTION",
      fiche_securite: "FDS-EXTRAPRIMER EVOLUTION"
    }
  },
  {
    id: "blancoprim",
    nom: "BLANCOPRIM",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/blancoprim/",
    image: "/manus-storage/blancoprim_50c5c7a5.png",
    description_courte: "Apprêt universel eau — homogénéise la porosité, anti-rouille flash",
    description_longue: "Apprêt universel en phase aqueuse pour intérieur et extérieur. Homogénéise la porosité et régule l'absorption des supports. Forte adhérence sur supports bloquants. Propriétés anti-rouille flash. Fabriqué en France par Blancolor (Groupe Allios).",
    caracteristiques: [
      "Haute adhérence sur supports bloquants",
      "Polyvalence supports",
      "Anti-rouille flash",
      "Régule l'absorption des supports poreux",
      "Fabrication française"
    ],
    domaines_application: [
      "Murs et plafonds intérieurs/extérieurs",
      "Bardages métalliques bruts ou pré-enduits",
      "Structures bois",
      "Métaux non ferreux",
      "Plastiques rigides",
      "Carrelage et céramique",
      "Béton, maçonnerie, panneaux fibreux",
      "Plaques de plâtre",
      "Anciennes peintures en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-BLANCOPRIM",
      fiche_securite: "FDS-BLANCOPRIM"
    }
  },
  {
    id: "corsimur",
    nom: "CORSIMUR ÉVOLUTION",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/corsimur/",
    image: "/manus-storage/corsimur-evolution_c2b288c8.png",
    description_courte: "Impression intérieure rénovation des fonds tachés — isolation des taches, opacité excellente",
    description_longue: "Peinture d'impression intérieure spécialement conçue pour la rénovation des fonds tachés (fumée, suie, humidité, nicotine). Application mouillée sur mouillée possible. Excellente opacité. Compatible plafonds et murs intérieurs.",
    caracteristiques: [
      "Rénovation des fonds tachés",
      "Isolation des taches (fumée, suie, humidité, nicotine)",
      "Application mouillée sur mouillée",
      "Excellente opacité",
      "Fabrication française"
    ],
    domaines_application: [
      "Plafonds intérieurs",
      "Murs intérieurs",
      "Enduits plâtre",
      "Plaques de plâtre",
      "Supports bois",
      "Panneaux ciment",
      "Anciennes peintures bien adhérentes",
      "Badigeons et surfaces à la chaux"
    ],
    usage: ["Intérieur"],
    conditionnements: ["3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "FT-CORSIMUR",
      fiche_securite: "FDS-CORSIMUR",
      brochure: "Brochure CORSIMUR (PDF)"
    }
  },
  {
    id: "corsimur-hydro",
    nom: "CORSIMUR HYDRO",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/corsimur-hydro/",
    image: "/manus-storage/corsimur-hydro_010f1fd2.png",
    description_courte: "Impression intérieure tapissable — préparation réduite, anti-taches, mouillé sur mouillé",
    description_longue: "Apprêt intérieur en phase aqueuse. Réduit la préparation des fonds, application mouillée sur mouillée, tapissable. Propriétés anti-taches. Compatible murs et plafonds intérieurs sur de nombreux supports.",
    caracteristiques: [
      "Préparation des fonds réduite",
      "Application mouillée sur mouillée",
      "Tapissable",
      "Propriétés anti-taches",
      "Fabrication française"
    ],
    domaines_application: [
      "Murs et plafonds intérieurs",
      "Briques et pierres",
      "Enduits plâtre et plaques de plâtre",
      "Toile de verre",
      "Papiers peints non tissés",
      "Anciennes peintures en bon état"
    ],
    usage: ["Intérieur"],
    conditionnements: ["3 L", "10 L"],
    couleurs: null,
    prix: null,
    documentation: {
      fiche_technique: "https://www.blancolor.com/wp-content/uploads/2026/03/FT-CORSIMUR-HYDRO-0326.pdf",
      fiche_securite: "https://www.quickfds.com/cmt_bin/wfds-view?NFou=OS66_PI.FR&CPro=ba1631402"
    }
  },
  {
    id: "superbase-h2o",
    nom: "Superbase H\u2082O",
    marque: "Astral B\u00e2timent",
    url_produit: "https://www.astral-batiment.com/fr/fr/produits/superbase-h%E2%82%82o",
    image: "https://msp.images.akzonobel.com/prd/dh/efrast/packshots/c5/67/ba/97/packshot_medium.png",
    description_courte: "Impression en phase aqueuse — grand pouvoir isolant, opacifiant et garnissant",
    description_longue: "Impression en phase aqueuse à fort pouvoir isolant, opacifiant et garnissant. Excellente adhérence, temps ouvert prolongé, facilité d'application. Finition mate. Empêche la remontée de rouille sur les têtes de vis. Utilisable comme primaire + finition (fonction 2-en-1).",
    caracteristiques: [
      "Grand pouvoir isolant, opacifiant et garnissant",
      "Excellente adhérence",
      "Temps ouvert prolongé",
      "Finition mate",
      "Empêche la remontée de rouille sur têtes de vis",
      "Faible odeur"
    ],
    domaines_application: [
      "Murs intérieurs",
      "Plafonds",
      "Menuiseries",
      "Supports placo et plaques de plâtre"
    ],
    usage: ["Intérieur"],
    conditionnements: ["1 L", "5 L", "15 L"],
    rendement: "10 m\u00b2/L",
    finition: "Mat",
    couleurs: null,
    prix: null,
    disponibilite: "Uniquement en magasin — non disponible en ligne",
    composition: "Phase aqueuse",
    securite: "Contient des biocides (1,2-benzisothiazol-3(2H)-one, octhilinone, CMIT/MIT, 2-méthyl-2H-isothiazole-3-one). Peut provoquer des réactions allergiques."
  },
  {
    id: "polylac-prim",
    nom: "Polylac Prim",
    marque: "Astral B\u00e2timent",
    url_produit: "https://www.astral-batiment.com/fr/fr/produits/polylac-prim",
    image: "https://msp.images.akzonobel.com/prd/dh/efrast/packshots/18/69/31/bb/packshot_medium.png",
    description_courte: "Peinture d'impression haute opacité acrylique intérieur/extérieur",
    description_longue: "Peinture d'impression et sous-couche à haute opacité en phase aqueuse à base de résines acryliques. Excellente adhérence, estompe les petites irrégularités de surface. Hautement opacifiante et garnissante.",
    caracteristiques: [
      "Haute opacité",
      "Excellente adhérence",
      "Minimise les irrégularités de surface",
      "Base résines acryliques",
      "Phase aqueuse"
    ],
    domaines_application: [
      "Surfaces intérieures et extérieures"
    ],
    systeme_application: "1 couche Polylac Prim + 2 couches Polylac Mat ou Satin",
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "2,5 L"],
    rendement: "10 m\u00b2/L",
    finition: "Mat",
    couleurs: null,
    prix: null,
    disponibilite: "Uniquement en magasin — non disponible en ligne",
    composition: "Phase aqueuse, résines acryliques"
  },
  {
    id: "amplia-h-o-prim",
    nom: "Amplia H\u2082O Prim",
    marque: "Astral B\u00e2timent",
    url_produit: "https://www.astral-batiment.com/fr/fr/produits/amplia-h-o-prim",
    image: "https://msp.images.akzonobel.com/prd/dh/efrast/packshots/d3/e9/73/dc/ampliah2oprim160.png",
    description_courte: "Couche primaire garnissante acrylique intérieur/extérieur — anti-rouille, anti-tannins",
    description_longue: "Couche primaire garnissante à base de résine acrylique en phase aqueuse pour intérieur et extérieur. Bonne couvrance et prise de bord. Application facile, faible odeur, recouvrement rapide. Prévient les remontées de rouille et de tannins du bois nu.",
    caracteristiques: [
      "Garnissante",
      "Bonne couvrance et prise de bord",
      "Application facile et faible odeur",
      "Recouvrement rapide",
      "Prévient remontées de rouille",
      "Prévient remontées de tannins bois nu",
      "Phase aqueuse"
    ],
    domaines_application: [
      "Murs intérieurs et extérieurs",
      "Menuiseries",
      "Supports bois nus",
      "Surfaces métalliques"
    ],
    systeme_application: "Primaire pour Amplia H\u2082O Mat Velouté et Amplia H\u2082O Satin",
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "2,5 L", "10 L"],
    rendement: "12 m\u00b2/L",
    finition: "Mat",
    couleurs: ["Blanc"],
    prix: null,
    disponibilite: "Uniquement en magasin — non disponible en ligne",
    composition: "Phase aqueuse, résine acrylique"
  }
];
