# LC4 Peinture - Site Web

Site web professionnel pour LC4 Peinture, spécialiste en peinture et revêtements en Alsace.

## 🎨 À propos

LC4 Peinture est votre partenaire de confiance pour tous vos projets de peinture, revêtements de sols et revêtements muraux à Strasbourg et dans toute l'Alsace. Avec 4 agences stratégiquement implantées, nous sommes au plus près de nos clients.

## 🚀 Technologies utilisées

- **React 19** - Framework JavaScript moderne
- **TypeScript** - Typage statique pour plus de fiabilité
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **Wouter** - Router léger pour React
- **shadcn/ui** - Composants UI modernes et accessibles

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Prévisualiser le build de production
pnpm preview
```

## 🏗️ Structure du projet

```
lc4/
├── client/
│   ├── public/          # Fichiers statiques (sitemap.xml, robots.txt)
│   ├── src/
│   │   ├── components/  # Composants réutilisables (Header, Footer)
│   │   ├── pages/       # Pages du site
│   │   ├── App.tsx      # Configuration des routes
│   │   └── main.tsx     # Point d'entrée
│   └── index.html       # Template HTML avec métadonnées SEO
├── shared/
│   └── const.ts         # Constantes partagées
└── README.md
```

## 📄 Pages du site

### Pages principales
- **Accueil** (`/`) - Page d'accueil avec hero, présentation, services et agences
- **Qui sommes-nous** (`/qui-sommes-nous`) - Histoire, valeurs et expertise
- **Nos agences** (`/nos-agences`) - Liste des 4 agences en Alsace

### Peintures
- **Peintures** (`/peintures`) - Page principale peintures
- Sous-pages pour chaque catégorie :
  - Peintures labellisées
  - Peintures intérieures
  - Peintures laques tendues
  - Façades
  - Bois
  - Métal
  - Peintures sols
  - Toiture – Bardages

### Revêtements de sols
- **Revêtements de sols** (`/revetements-sols`) - Page principale
- Sous-pages pour chaque catégorie :
  - Accessoires
  - Parquets et bois
  - Sols PVC
  - Sols stratifiés
  - Sols textiles
  - Solutions techniques

### Revêtements muraux
- **Revêtements muraux** (`/revetements-muraux`) - Page principale
- Sous-pages pour chaque collection :
  - Collection Passion 2026
  - Collection Les 4 Patent BEST
  - Collection Habitat 2027
  - Panel Box

### Autres
- **Matériel & outillage** (`/materiel-outillage`) - Équipements professionnels

## 🎯 Optimisation SEO

Le site est optimisé pour le référencement local (Strasbourg, Alsace) :

- ✅ URLs courtes et lisibles
- ✅ Hiérarchie H1 → H2 → H3 respectée
- ✅ Sitemap XML (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Données structurées Schema.org (LocalBusiness)
- ✅ Balises META optimisées
- ✅ Open Graph et Twitter Cards
- ✅ Langue française (`lang="fr"`)
- ✅ Balises ALT pour les images

### Mots-clés ciblés
- Peinture Strasbourg
- Peinture Alsace
- Revêtements sols Strasbourg
- Revêtements muraux Alsace
- Peinture professionnelle
- Parquet Strasbourg

## 🎨 Design

### Palette de couleurs
- **Bleu foncé** : `#0D1B3E` (couleur principale)
- **Blanc** : `#FFFFFF`
- **Noir** : `#000000`

### Caractéristiques
- Design moderne et professionnel
- Responsive (mobile, tablette, desktop)
- Navigation sticky avec menus déroulants
- Section hero à 80vh
- Sections alternées avec fond clair/foncé
- Cartes avec effets hover
- Boutons CTA bien visibles

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (< 640px)
- 📱 Tablette (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🔧 Configuration Git

Le projet est configuré avec :
- **Auteur** : Eren
- **Email** : eren@netzinformatique.fr
- **Dépôt** : https://github.com/eren-htp/lc4

## 📞 Contact

**LC4 Peinture**
- Téléphone : +33 3 88 XX XX XX
- Email : contact@lc4-peinture.fr
- Site web : https://lc4-peinture.fr

### Nos agences
1. **Strasbourg** - 67000 Strasbourg
2. **Souffelweyersheim** - 67460 Souffelweyersheim
3. **Haguenau** - 67500 Haguenau
4. **Schweighouse** - 67590 Schweighouse-sur-Moder

## 📝 Licence

© 2025 LC4 Peinture. Tous droits réservés.

