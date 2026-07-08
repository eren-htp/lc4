export interface WallpaperBrand {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  website: string;
  highlights: string[];
}

export const WALLPAPER_BRANDS: WallpaperBrand[] = [
  {
    id: "as-creation",
    name: "As Création",
    type: "Intissé / papier peint",
    description: "Fabricant allemand de papiers peints et intissés de haute qualité. As Création propose des collections variées allant du classique au contemporain, avec des designs innovants et des matériaux durables.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/CksVChWivMLBVEDi.jpg",
    website: "https://www.as-creation.com/fr/",
    highlights: [
      "Fabricant allemand reconnu",
      "Large gamme de papiers peints et intissés",
      "Collections design et contemporaines",
      "Qualité premium"
    ]
  },
  {
    id: "erfurt",
    name: "Erfurt",
    type: "Intissé / papier peint",
    description: "Spécialiste des papiers et intissés structurés à peindre. Erfurt offre des solutions professionnelles pour la rénovation et la décoration murale, avec des produits techniques de haute performance.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/ukKolRceWYAyvvhw.jpg",
    website: "https://www.erfurt.com/fr/professionnels/produits/papiers-et-intisses-structures-a-peindre/",
    highlights: [
      "Spécialiste intissés à peindre",
      "Solutions professionnelles",
      "Produits techniques haute performance",
      "Idéal pour la rénovation"
    ]
  },
  {
    id: "lutece",
    name: "Lutèce",
    type: "Intissé / papier peint",
    description: "Éditeur français de papiers peints proposant des collections tendance et accessibles. Lutèce allie créativité et savoir-faire pour offrir des revêtements muraux adaptés à tous les intérieurs.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/aSvdYFpUgeEPDeuD.jpg",
    website: "https://www.lutece-papierpeint.com/",
    highlights: [
      "Éditeur français",
      "Collections tendance",
      "Rapport qualité-prix",
      "Créativité et savoir-faire"
    ]
  },
  {
    id: "marburg",
    name: "Marburg",
    type: "Intissé / papier peint",
    description: "Fabricant allemand de papiers peints haut de gamme depuis 1845. Marburg est reconnu pour ses innovations techniques et ses designs avant-gardistes, distribué en France par SEDIM.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/aHoqgaAufmxUDsID.jpg",
    website: "https://sedim-marburg.com/",
    highlights: [
      "Fabricant depuis 1845",
      "Innovations techniques",
      "Designs avant-gardistes",
      "Distribution SEDIM en France"
    ]
  },
  {
    id: "montecolino",
    name: "Montecolino",
    type: "Intissé / papier peint",
    description: "Éditeur belge de papiers peints proposant des collections variées et créatives. Montecolino offre un large choix de styles pour personnaliser tous les espaces de vie.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/sgjvhHMnHuVGRCpk.jpg",
    website: "https://www.montecolino.fr/collections-papiers-peints/",
    highlights: [
      "Éditeur belge",
      "Collections variées et créatives",
      "Large choix de styles",
      "Personnalisation des espaces"
    ]
  },
  {
    id: "rasch",
    name: "Rasch",
    type: "Intissé / papier peint",
    description: "Fabricant allemand de papiers peints depuis 1861. Rasch propose des collections modernes et classiques, avec une expertise reconnue dans la fabrication de revêtements muraux de qualité.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663063275076/quYSfSUckRJwXHLQ.jpg",
    website: "https://rasch.de/fr/Papier-peint/",
    highlights: [
      "Fabricant depuis 1861",
      "Collections modernes et classiques",
      "Expertise reconnue",
      "Qualité allemande"
    ]
  }
];
