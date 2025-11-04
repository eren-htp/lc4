export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

export const APP_TITLE = "LC4 PEINTURE & DECORATION";
export const APP_LOGO = "/logo.svg";

export const COMPANY_INFO = {
  name: "LC4 PEINTURE & DECORATION",
  slogan: "LC4 Peinture & Décoration à Mundolsheim",
  description: "LC4 Peinture & Décoration : L'achat, la vente, la distribution de tous produits et accessoires permettant tous travaux intérieurs ou extérieures, sur tout support, et toute matières et de tout produits du second œuvre. Nous sommes notés 5 étoiles sur 5 avec 73 avis Google.",
  phone: "03 88 04 71 96",
  email: "contact@lc4-peinture.fr",
  address: "3 Rue Alexandre Volta, 67450 Mundolsheim",
  googleReviews: {
    rating: 5,
    count: 73,
  },
};

export const OPENING_HOURS = {
  lundi: "07:00–17:00",
  mardi: "07:00–17:00",
  mercredi: "07:00–17:00",
  jeudi: "07:00–17:00",
  vendredi: "07:00–17:00",
  samedi: "07:30–12:00",
  dimanche: "Fermé",
};

export const COLORS = {
  primary: "#0D1B3E",
  white: "#FFFFFF",
  black: "#000000",
};

export const AGENCIES = [
  {
    id: 1,
    name: "Mundolsheim",
    address: "3 Rue Alexandre Volta, 67450 Mundolsheim",
    phone: "03 88 04 71 96",
    email: "contact@lc4-peinture.fr",
  },
  {
    id: 2,
    name: "Strasbourg",
    address: "67000 Strasbourg",
    phone: "03 88 04 71 96", // Utilisation du nouveau numéro
    email: "contact@lc4-peinture.fr", // Utilisation du nouvel email
  },
  {
    id: 3,
    name: "Souffelweyersheim",
    address: "67460 Souffelweyersheim",
    phone: "03 88 04 71 96",
    email: "contact@lc4-peinture.fr",
  },
  {
    id: 4,
    name: "Haguenau",
    address: "67500 Haguenau",
    phone: "03 88 04 71 96",
    email: "contact@lc4-peinture.fr",
  },
  {
    id: 5,
    name: "Schweighouse",
    address: "67590 Schweighouse-sur-Moder",
    phone: "03 88 04 71 96",
    email: "contact@lc4-peinture.fr",
  },
];

export const PAINT_CATEGORIES = [
  {
    id: "labellisees",
    name: "Peintures labellisées",
    slug: "peintures-labellisees",
    description: "Peintures certifiées et labellisées pour des projets respectueux de l'environnement.",
  },
  {
    id: "interieures",
    name: "Peintures intérieures",
    slug: "peintures-interieures",
    description: "Large gamme de peintures pour tous vos projets d'intérieur.",
  },
  {
    id: "laques",
    name: "Peintures laques tendues",
    slug: "peintures-laques-tendues",
    description: "Finitions haut de gamme pour des surfaces parfaitement lisses.",
  },
  {
    id: "facades",
    name: "Façades",
    slug: "facades",
    description: "Solutions professionnelles pour la protection et la décoration de vos façades.",
  },
  {
    id: "bois",
    name: "Bois",
    slug: "bois",
    description: "Peintures et lasures spécialement conçues pour le bois.",
  },
  {
    id: "metal",
    name: "Métal",
    slug: "metal",
    description: "Peintures techniques pour tous types de métaux.",
  },
  {
    id: "sols",
    name: "Peintures sols",
    slug: "peintures-sols",
    description: "Revêtements résistants pour sols industriels et domestiques.",
  },
  {
    id: "toiture",
    name: "Toiture – Bardages",
    slug: "toiture-bardages",
    description: "Protection durable pour toitures et bardages.",
  },
];

export const FLOOR_CATEGORIES = [
  {
    id: "accessoires",
    name: "Accessoires",
    slug: "accessoires",
    description: "Tous les accessoires nécessaires pour la pose de vos revêtements de sols.",
  },
  {
    id: "parquets",
    name: "Parquets et bois",
    slug: "parquets-et-bois",
    description: "Parquets massifs, contrecollés et solutions bois.",
  },
  {
    id: "pvc",
    name: "Sols PVC",
    slug: "sols-pvc",
    description: "Revêtements PVC résistants et faciles d'entretien.",
  },
  {
    id: "stratifies",
    name: "Sols stratifiés",
    slug: "sols-stratifies",
    description: "Sols stratifiés haute qualité pour tous les usages.",
  },
  {
    id: "textiles",
    name: "Sols textiles",
    slug: "sols-textiles",
    description: "Moquettes et revêtements textiles confortables.",
  },
  {
    id: "techniques",
    name: "Solutions techniques",
    slug: "solutions-techniques",
    description: "Solutions professionnelles pour projets spécifiques.",
  },
];

export const WALL_CATEGORIES = [
  {
    id: "passion2026",
    name: "Collection Passion 2026",
    slug: "collection-passion-2026",
    description: "Découvrez les tendances 2026 en matière de revêtements muraux.",
  },
  {
    id: "patent",
    name: "Collection Les 4 Patent BEST",
    slug: "collection-les-4-patent-best",
    description: "Collection exclusive de revêtements muraux haut de gamme.",
  },
  {
    id: "habitat2027",
    name: "Collection Habitat 2027",
    slug: "collection-habitat-2027",
    description: "Les nouvelles tendances habitat pour 2027.",
  },
  {
    id: "panelbox",
    name: "Panel Box",
    slug: "panel-box",
    description: "Solutions innovantes de panneaux muraux décoratifs.",
  },
];
