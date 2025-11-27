// Import removed to avoid circular dependency

export type PaintProduct = {
  id: string;
  name: string;
  description: string;
  finish: "Impression" | "Mat" | "Velours" | "Satin";
  categorySlug: string;
  image: string;
};

export const INTERIOR_PAINT_PRODUCTS: PaintProduct[] = [
  // Impression
  {
    id: "impression-pro-1",
    name: "Primaire d'accrochage Pro",
    description: "Impression universelle pour supports difficiles. Assure une adhérence parfaite.",
    finish: "Impression",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00259.JPG",
  },
  {
    id: "impression-eco-2",
    name: "Sous-couche Éco-Responsable",
    description: "Formule écologique, faible en COV. Idéale pour les chantiers verts.",
    finish: "Impression",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00258.JPG",
  },
  
  // Mat
  {
    id: "mat-premium-3",
    name: "Mat Absolu Premium",
    description: "Finition mate profonde, idéale pour masquer les imperfections des plafonds et murs.",
    finish: "Mat",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00257.JPG",
  },
  {
    id: "mat-lavable-4",
    name: "Mat Lavable Haute Résistance",
    description: "L'aspect mat sans compromis sur la résistance au nettoyage. Parfait pour les pièces à vivre.",
    finish: "Mat",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00256.JPG",
  },

  // Velours
  {
    id: "velours-soyeux-5",
    name: "Velours Soyeux",
    description: "Aspect velouté et chaleureux. Très bonne résistance aux chocs et aux taches.",
    finish: "Velours",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00255.JPG",
  },
  {
    id: "velours-couleur-6",
    name: "Velours Intense Couleur",
    description: "Rendu des couleurs exceptionnel avec une finition velours élégante.",
    finish: "Velours",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00254.JPG",
  },

  // Satin
  {
    id: "satin-ultra-7",
    name: "Satin Ultra Résistant",
    description: "Finition satinée durable, facile d'entretien. Recommandée pour les pièces humides.",
    finish: "Satin",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00253.JPG",
  },
  {
    id: "satin-design-8",
    name: "Satin Design & Déco",
    description: "Un satin moderne avec un léger brillant. Idéal pour les boiseries et les murs sollicités.",
    finish: "Satin",
    categorySlug: "peintures-interieures",
    image: "/lc4/client/public/images/products/DSC00252.JPG",
  },
];
