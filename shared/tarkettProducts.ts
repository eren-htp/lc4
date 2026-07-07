export interface TarkettCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  characteristics: string[];
  specs: { label: string; value: string }[];
  decors: string[];
  applications: string[];
}

export const TARKETT_COLLECTIONS: TarkettCollection[] = [
  {
    id: "legende-162",
    name: "Légende 162",
    description: "La nouvelle gamme de décors vous offre un choix de parquet de qualité pour un intérieur chaleureux. Les designs intemporels répondent à un large éventail de besoins avec ces lames plus larges pour davantage de caractère.",
    image: "/manus-storage/legende-162_657c101b.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001353-legende-162/chene-nature-plank-1-strip",
    characteristics: [
      "Fabriqué en Europe",
      "Parquet monolames",
      "2 micro-chanfreins",
      "Finition Vernis mat et Huilé",
      "La chaleur d'une lame large pour un vrai compromis entre élégance et modernité",
      "Idéale pour les pièces de vie"
    ],
    specs: [
      { label: "Label", value: "ÉMISSIONS A" },
      { label: "Traitement", value: "Proteco Natura" },
      { label: "Bois véritable", value: "Oui" },
      { label: "Épaisseur", value: "14 mm" },
      { label: "Couche d'usure", value: "3,50 mm" },
      { label: "Format lames", value: "162 × 2200 mm" },
      { label: "Système", value: "2-lock" },
      { label: "Installation", value: "À cliquer" }
    ],
    decors: [
      "Chêne Italian Brown Plank",
      "Chêne Nature Plank",
      "Chêne Praline Plank",
      "Chêne Rustic Plank",
      "Chêne Soft Beige Plank",
      "Chêne White Canvas Plank"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "segno",
    name: "Segno",
    description: "Créez votre propre parquet avec une approche plus moderne. Segno vous donne la possibilité de créer votre propre agencement de sol avec une technologie modulaire ouvrant la voie à un nombre illimité de possibilités créatives. Choisissez parmi les 5 couleurs disponibles en finition huilée, et mixez les planches droites et gauches pour créer votre propre motif en bâton rompu.",
    image: "/manus-storage/segno_664dcd8f.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001674-segno",
    characteristics: [
      "Fabriqué en Europe",
      "4 mini-chanfreins",
      "Petites planches droites et gauches",
      "Possibilités créatives infinies",
      "Installation en pose collée",
      "Traitement de surface huilé",
      "Certification PEFC/05-35-125"
    ],
    specs: [
      { label: "Surface par boîte", value: "2,304 m²" },
      { label: "Surface par palette", value: "69,12 m²" },
      { label: "Poids net", value: "7,16 kg" },
      { label: "Choix", value: "Vivant" },
      { label: "Essence", value: "Chêne (Quercus Robur & Petraea)" }
    ],
    decors: [
      "Chêne Herringbone",
      "Chêne Blonde Herringbone",
      "Chêne Lime Stone Herringbone",
      "Chêne Old Brown Herringbone",
      "Chêne Old Grey Herringbone"
    ],
    applications: ["Magasins & boutiques", "Hôtellerie", "Habitat collectif", "Bureaux"]
  },
  {
    id: "distinction-190",
    name: "Distinction 190",
    description: "La gamme Distinction 190 célèbre la création de la nature, la force intrinsèque du bois et sa capacité à résister à l'épreuve du temps. Une palette de teintes de caractère, allant du foncé au clair, constitue la base d'une gamme qui permet à tout intérieur de sortir de l'ordinaire. Distinction 190 propose un brossage encore plus profond sur certaines teintes et finitions huilées pour une plus grande authenticité.",
    image: "/manus-storage/distinction-190_b9b2b749.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C002930-distinction-190",
    characteristics: [
      "Fabriqué en Europe",
      "Parquet monolames",
      "2 ou 4 mini-chanfreins",
      "Finition vernis mat et huilée",
      "Lames de bois avec ou sans nœuds",
      "La chaleur d'une lame plus large",
      "Idéale pour les pièces de vie"
    ],
    specs: [
      { label: "Label", value: "ÉMISSIONS A" },
      { label: "Traitement", value: "Proteco Hardwax Oil / Natura / ExtraMatt" },
      { label: "Bois véritable", value: "Oui" },
      { label: "Épaisseur", value: "14 mm / 13 mm" },
      { label: "Couche d'usure", value: "3,50 mm / 2,50 mm" }
    ],
    decors: [
      "Chêne Essence Plank XT",
      "Chêne Lime Stone",
      "Chêne Misty Grey Plank XT",
      "Chêne Nutmeg Plank XT",
      "Chêne Old Grey",
      "Chêne Rustic Plank XT",
      "Chêne Scallop"
    ],
    applications: ["Habitat", "Pièces de vie"]
  },
  {
    id: "origine-194",
    name: "Origine 194 – 3 Frises",
    description: "La nouvelle collection Origine 194, simple, efficace, accessible, vous propose une gamme de produits en 3 frises, alliant beauté de décors et taille de lames idéale pour les pièces petites à moyennes. La palette de couleurs offre des nuances allant du naturel à des couleurs plus dynamiques.",
    image: "/manus-storage/origine-194_5d84bb90.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001351-origine-194-3-frises",
    characteristics: [
      "Fabriqué en Europe",
      "Parquets contrecollés 3 frises",
      "Finition vernis mat",
      "Un parquet idéal pour vos pièces de jour comme de nuit"
    ],
    specs: [
      { label: "Label", value: "ÉMISSIONS A" },
      { label: "Traitement", value: "Proteco Natura" },
      { label: "Bois véritable", value: "Oui" },
      { label: "Épaisseur", value: "13 mm" },
      { label: "Couche d'usure", value: "2,50 mm" }
    ],
    decors: [
      "Chêne Almond Tres",
      "Chêne Cotton White Tres",
      "Chêne Cream White Tres",
      "Chêne Misty Grey Tres",
      "Chêne Nature Tres"
    ],
    applications: ["Bureaux", "Habitat"]
  },
  {
    id: "tradition-134",
    name: "Tradition 134",
    description: "Avec ses décors monolames et ses dimensions moyennes, la collection Tradition allie charme et raffinement. Cette gamme est idéale pour créer une décoration élégante et chaleureuse. Les motifs authentiques de la nature mettent en valeur et préservent le caractère unique de chaque planche, pour un revêtement de sol qui ne se démodera jamais.",
    image: "/manus-storage/tradition-134_49352843.jpg",
    url: "https://professionnels.tarkett.fr/fr_FR/collection-C001352-tradition-134",
    characteristics: [
      "Fabriqué en Europe",
      "Parquet monolames",
      "2 mini-chanfreins",
      "Finition vernis mat",
      "Des lames courtes pour plus de modularité",
      "Un parquet idéal pour toutes les pièces de votre intérieur"
    ],
    specs: [
      { label: "Label", value: "ÉMISSIONS A" },
      { label: "Traitement", value: "Proteco Natura" },
      { label: "Bois véritable", value: "Oui" },
      { label: "Épaisseur", value: "13 mm" },
      { label: "Couche d'usure", value: "2,50 mm" }
    ],
    decors: [
      "Chêne Authentic Midiplank",
      "Chêne Cream White Midiplank",
      "Chêne Evening Grey Midiplank",
      "Chêne Nature Midiplank",
      "Chêne Snow Flake Midiplank"
    ],
    applications: ["Habitat collectif"]
  }
];
