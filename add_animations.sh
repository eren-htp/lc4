#!/bin/bash

# Script pour ajouter les animations aux pages

pages=(
  "client/src/pages/Peintures.tsx"
  "client/src/pages/PeintureCategory.tsx"
  "client/src/pages/RevêtementsSols.tsx"
  "client/src/pages/FloorCategory.tsx"
  "client/src/pages/RevêtementsMuraux.tsx"
  "client/src/pages/WallCategory.tsx"
  "client/src/pages/MatérielOutillage.tsx"
  "client/src/pages/NosAgences.tsx"
  "client/src/pages/PaintFinishPage.tsx"
  "client/src/pages/NotFound.tsx"
)

for page in "${pages[@]}"; do
  if [ -f "$page" ]; then
    echo "Processing $page..."
    # Ajouter l'import ScrollReveal si absent
    if ! grep -q "ScrollReveal" "$page"; then
      sed -i '1a import ScrollReveal from "@/components/ScrollReveal";' "$page"
    fi
    # Ajouter les classes d'animation aux sections
    sed -i 's/<section className="/<section className="bg-gradient-animated /g' "$page"
    sed -i 's/<section className="bg-gradient-animated bg-gradient-animated/<section className="bg-gradient-animated/g' "$page"
  fi
done

echo "Animations ajoutées à toutes les pages!"
