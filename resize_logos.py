import os
from PIL import Image

# Définir le chemin du répertoire des logos
INPUT_DIR = "LC4/client/public/images/partners"
OUTPUT_DIR = "LC4/client/public/images/partners_resized"
TARGET_HEIGHT = 250  # Nouvelle hauteur cible en pixels

# Créer le répertoire de sortie s'il n'existe pas
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Liste des fichiers à traiter
logo_files = [f for f in os.listdir(INPUT_DIR) if os.path.isfile(os.path.join(INPUT_DIR, f))]

print(f"Début du traitement de {len(logo_files)} logos...")

resized_logos_list = []

for filename in logo_files:
    input_path = os.path.join(INPUT_DIR, filename)
    
    # Déterminer le nom du fichier de sortie (toujours en .png)
    name, ext = os.path.splitext(filename)
    output_filename = f"{name}.png"
    output_path = os.path.join(OUTPUT_DIR, output_filename)
    
    try:
        # Ouvrir l'image
        img = Image.open(input_path)
        
        # Ignorer les SVG pour l'instant, car Pillow ne les gère pas nativement
        if ext.lower() == '.svg':
            print(f"Avertissement: Ignoré {filename} (SVG). Nécessite un outil externe pour la conversion.")
            continue

        # Calculer le nouveau ratio pour la hauteur cible
        height_percent = (TARGET_HEIGHT / float(img.size[1]))
        new_width = int((float(img.size[0]) * float(height_percent)))
        
        # Redimensionner l'image
        img = img.resize((new_width, TARGET_HEIGHT), Image.Resampling.LANCZOS)
        
        # Convertir en PNG et enregistrer
        if img.mode in ('RGBA', 'P'):
            img.save(output_path, 'PNG')
        else:
            # S'assurer que l'image a un fond transparent si elle n'en a pas déjà
            img = img.convert("RGBA")
            img.save(output_path, 'PNG')
            
        print(f"Traité {filename} -> {output_filename} ({new_width}x{TARGET_HEIGHT})")
        resized_logos_list.append(f"/images/partners_resized/{output_filename}")
        
    except Exception as e:
        print(f"Erreur lors du traitement de {filename}: {e}")

# Écrire la liste des chemins des nouveaux logos dans un fichier pour une utilisation ultérieure
with open("LC4/new_partner_logos.txt", "w") as f:
    for logo_path in resized_logos_list:
        f.write(f"'{logo_path}',\n")

print("\nTraitement terminé.")
print(f"Liste des chemins des nouveaux logos enregistrée dans LC4/new_partner_logos.txt")
