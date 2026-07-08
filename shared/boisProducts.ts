export interface BoisProduct {
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
  systeme_application?: string;
  disponibilite?: string;
  sous_categorie: string; // "lasure" | "solvante" | "acrylique"
}

export const BOIS_PRODUCTS: BoisProduct[] = [
  // === LASURE ===
  {
    id: "saturateur-bardage-opaque",
    nom: "Saturateur Bardage Opaque",
    marque: "Blanchon",
    url_produit: "https://www.blanchon.com/professionnels/saturateur-bardage-opaque.html",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/rnYtudHLaPgEcvpZ.png",
    description_courte: "Imprégnation opaque mate très haute durabilité pour bois extérieurs verticaux",
    description_longue: "Imprégnation opaque mate pénétrante non filmogène pour bardages, portails, volets, claustras et palissades. Application 2 couches frais sur frais, séchage 20 min entre couches. Idéale pour bois peu imprégnables (mélèze, douglas, red cedar). Non écaillable, entretien sans ponçage.",
    caracteristiques: [
      "Non filmogène, pénétrante",
      "Aspect mat poudré",
      "2 couches frais sur frais",
      "Non écaillable",
      "Entretien facile sans ponçage",
      "Masque les imperfections",
      "Séchage rapide",
      "Rendement : 10 m²/L/couche"
    ],
    domaines_application: [
      "Bardages",
      "Portails et volets",
      "Claustras et palissades",
      "Abris de jardin",
      "Bois peu imprégnables : mélèze, douglas, red cedar"
    ],
    usage: ["Extérieur"],
    conditionnements: ["1 L", "5 L", "10 L"],
    rendement: "10 m²/L/couche",
    finition: "Mat poudré",
    couleurs: ["Red Cedar", "Chêne Moyen", "Gris Naturel", "Pin Brut", "Noir Charbon", "Chêne Clair", "Anthracite"],
    prix: null,
    sous_categorie: "lasure",
  },
  {
    id: "vernis-exp",
    nom: "Vernis EXP",
    marque: "Blanchon",
    url_produit: "https://www.blanchon.com/professionnels/vernis-exp.html",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/RSHJSCRJSWxFYcam.png",
    description_courte: "Vernis polyuréthane phase aqueuse — haute protection boiseries et menuiseries, incolore ou teinté",
    description_longue: "Vernis haute protection pour boiseries et menuiseries intérieures et extérieures. Résines polyuréthanes en phase aqueuse. Haute résistance aux UV et aux intempéries. Film souple résistant aux variations dimensionnelles du bois. Finition incolore ou teintée, séchage rapide.",
    caracteristiques: [
      "Résines polyuréthanes phase aqueuse",
      "Haute résistance aux UV et intempéries",
      "Film souple",
      "Excellente applicabilité",
      "Séchage rapide",
      "Aspect tendu",
      "Ecolabel FR/044/011",
      "Notation environnementale A+",
      "Rendement : 12 m²/L/couche"
    ],
    domaines_application: [
      "Boiseries et menuiseries extérieures",
      "Boiseries et menuiseries intérieures"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "2,5 L", "5 L"],
    rendement: "12 m²/L/couche",
    finition: "Mat / Satiné / Brillant",
    couleurs: ["Incolore Satiné", "Incolore Brillant", "Incolore Mat", "Chêne Clair", "Chêne Moyen", "Chêne Doré", "Chêne Foncé", "Invisible Bois Brut"],
    prix: null,
    sous_categorie: "lasure",
  },

  // === PEINTURE / LAQUE BOISERIE — Solvanté ===
  {
    id: "soyance-evolution",
    nom: "SOYANCE ÉVOLUTION",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/soyance-evolution/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/APcYSlzfCNAlojlg.png",
    description_courte: "Peinture pour menuiseries et structures métalliques — aspect tendu, grande dureté",
    description_longue: "Peinture pour menuiseries, structures et éléments métalliques en intérieur et extérieur. Aspect tendu, grande dureté, excellente adhérence. Recouvrable en 8h.",
    caracteristiques: [
      "Recouvrable en 8h",
      "Aspect tendu",
      "Grande dureté",
      "Excellente adhérence",
      "Fabrication française"
    ],
    domaines_application: [
      "Menuiseries intérieures et extérieures",
      "Portes, volets, garde-corps, grilles",
      "Acier brut, galvanisé, aluminium, zinc",
      "Plastiques rigides (PVC) apprêtés",
      "Bois et dérivés"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    finition: "Soie",
    couleurs: null,
    prix: null,
    sous_categorie: "solvante",
  },
  {
    id: "amplia-satin-hes",
    nom: "Amplia Satin HES",
    marque: "Astral Bâtiment",
    url_produit: "https://www.astral-batiment.com/fr/fr/produits/amplia-satin-hes",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/tLsJpqqcsaMvcpYL.png",
    description_courte: "Peinture-laque alkydes solvantée haut extrait sec — brillance et tenue exceptionnelles",
    description_longue: "Peinture-laque alkydes en phase solvant à haut extrait sec pour travaux courants intérieur et extérieur. Haute couvrance et brillance, excellent lissé. Lavable et facile d'entretien. Temps ouvert prolongé.",
    caracteristiques: [
      "Alkydes phase solvant",
      "Haut Extrait Sec (HES)",
      "Haute couvrance et brillance",
      "Excellent lissé",
      "Lavable",
      "Temps ouvert prolongé",
      "Rendement : 16 m²/L"
    ],
    domaines_application: [
      "Menuiseries intérieures et extérieures",
      "Boiseries"
    ],
    systeme_application: "1 couche SUPERBASE + 2 couches Amplia Satin HES",
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "2,5 L", "15 L"],
    rendement: "16 m²/L",
    finition: "Satiné",
    couleurs: null,
    prix: null,
    disponibilite: "Uniquement en magasin",
    sous_categorie: "solvante",
  },
  {
    id: "respiro-bois-satin",
    nom: "RESPIR'BOIS SATIN",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/respiro-bois-satin/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/jAyramOjmDmxOFkb.png",
    description_courte: "Peinture bois mono-produit impression + finition — souplesse, protection UV et intempéries",
    description_longue: "Peinture bois mono-produit faisant office d'impression et de finition. Souplesse du feuil, protection contre les intempéries et les UV, excellente couvrance. Application intérieur et extérieur sur tous ouvrages et structures en bois.",
    caracteristiques: [
      "Mono-produit : impression + finition",
      "Souplesse du feuil",
      "Protection UV et intempéries",
      "Excellente couvrance",
      "Fabrication française"
    ],
    domaines_application: [
      "Ouvrages et structures en bois extérieurs",
      "Bardages, menuiseries, portes, fenêtres, volets, clôtures",
      "Bois massifs et dérivés du bois",
      "Anciennes peintures compatibles en bon état"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    finition: "Satiné",
    couleurs: null,
    prix: null,
    sous_categorie: "solvante",
  },

  // === PEINTURE / LAQUE BOISERIE — Acrylique ===
  {
    id: "amplia-h2o-satin",
    nom: "Amplia H₂O Satin",
    marque: "Astral Bâtiment",
    url_produit: "https://www.astral-batiment.com/fr/fr/produits/amplia-h%E2%82%82o-satin",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/IuWQDZtXqdFvYaPZ.png",
    description_courte: "Peinture-laque acrylique garnissante phase aqueuse — faible odeur, bonne lavabilité",
    description_longue: "Peinture-laque garnissante à base de copolymères acryliques en dispersion aqueuse. Bon équilibre couvrance et tension de surface, masque les petites irrégularités. Faible odeur, facile d'entretien, bonne résistance au lessivage.",
    caracteristiques: [
      "Acrylique phase aqueuse",
      "Garnissante",
      "Masque les irrégularités de surface",
      "Faible odeur",
      "Bonne lavabilité",
      "Recouvrable en 24h",
      "Rendement : 12 m²/L"
    ],
    domaines_application: [
      "Menuiseries intérieures et extérieures",
      "Boiseries"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "2,5 L", "10 L"],
    rendement: "12 m²/L",
    finition: "Satiné",
    couleurs: null,
    prix: null,
    disponibilite: "Uniquement en magasin",
    sous_categorie: "acrylique",
  },
  {
    id: "respiro-bois",
    nom: "RESPIR'O BOIS",
    marque: "Blancolor",
    url_produit: "https://www.blancolor.com/produit/respiro-bois/",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/xtzjZPbRGUcsBLgA.png",
    description_courte: "Peinture bois microporeuse — excellent garnissant, durabilité remarquable, grande souplesse",
    description_longue: "Peinture de protection microporeuse pour tous ouvrages et structures en bois intérieurs et extérieurs. Excellent garnissant, durabilité remarquable, haute microporosité et grande souplesse. Phase aqueuse.",
    caracteristiques: [
      "Haute microporosité",
      "Excellent garnissant",
      "Durabilité remarquable",
      "Grande souplesse",
      "Phase aqueuse",
      "Fabrication française"
    ],
    domaines_application: [
      "Bardages, frisettes, huisseries",
      "Portes, fenêtres, volets, clôtures",
      "Bois massifs et dérivés du bois",
      "Structures bois intérieures et extérieures"
    ],
    usage: ["Intérieur", "Extérieur"],
    conditionnements: ["1 L", "3 L", "10 L"],
    finition: null,
    couleurs: null,
    prix: null,
    sous_categorie: "acrylique",
  },

  // === LASURE — Sikkens ===
  {
    id: "cetol-novatech",
    nom: "Cetol Novatech",
    marque: "Sikkens",
    url_produit: "https://www.sikkens.fr/fr/produits/cetol-novatech?size=1L",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/vvphbHPFkpYzSwBZ.png",
    description_courte: "Lasure d'imprégnation multicouche haute durabilité — très garnissant, fort pouvoir pénétrant",
    description_longue: "Lasure d'imprégnation multicouche à base de résines alkyde à haut extrait sec. Impression ou finition haute durabilité pour système 2 couches. Très garnissant avec un fort pouvoir pénétrant, elle offre plus d'épaisseur de film déposé grâce à sa formule à haut extrait sec.",
    caracteristiques: [
      "Imprégnation et finition en un seul produit",
      "Très garnissant, fort pouvoir pénétrant",
      "Haut extrait sec — plus d'épaisseur de film déposé",
      "Haute durabilité pour système 2 couches",
      "Phase solvant",
      "Séchage environ 8 heures",
      "Recouvrable environ 24 heures",
      "Rendement : 15 m²/L"
    ],
    domaines_application: [
      "Bois extérieurs",
      "Menuiseries extérieures",
      "Bardages",
      "Volets et portails",
      "Portes et fenêtres"
    ],
    usage: ["Extérieur"],
    conditionnements: ["1 L", "2,5 L", "5 L", "15 L"],
    rendement: "15 m²/L",
    finition: "Satiné Brillant",
    couleurs: ["Collection bois AkzoNobel", "L'Essentielle 120 teintes"],
    prix: null,
    sous_categorie: "lasure",
  },
  {
    id: "cetol-filter-7",
    nom: "Cetol Filter 7",
    marque: "Sikkens",
    url_produit: "https://www.sikkens.fr/fr/produits/cetol-filter-7?size=1L",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/WqakSgOMTQIKGfIi.png",
    description_courte: "Lasure de finition d'excellente durabilité — résistante aux intempéries et aux UV",
    description_longue: "Lasure de finition à base de résines alkydes. Excellente durabilité, résistance aux UV et aux intempéries. Très bonne tension du film avec un bon pouvoir garnissant pour un résultat esthétique durable.",
    caracteristiques: [
      "Excellente durabilité",
      "Résistance aux UV et aux intempéries",
      "Très bonne tension du film",
      "Bon pouvoir garnissant",
      "Résultat esthétique durable",
      "Phase solvant",
      "Séchage environ 8 heures",
      "Recouvrable environ 18 heures",
      "Rendement : 15-17 m²/L"
    ],
    domaines_application: [
      "Bois extérieurs",
      "Menuiseries extérieures",
      "Bardages",
      "Volets et portails",
      "Portes et fenêtres"
    ],
    usage: ["Extérieur"],
    conditionnements: ["1 L", "2,5 L", "5 L", "10 L", "15 L"],
    rendement: "15-17 m²/L",
    finition: "Satin",
    couleurs: ["Collection bois AkzoNobel", "Nuancier Sikkens"],
    prix: null,
    sous_categorie: "lasure",
  },
];
