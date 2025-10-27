# Configuration des variables d'environnement

## Variables requises

Les variables suivantes doivent être configurées pour le déploiement :

### 1. Configuration de l'application

#### Via l'interface Manus (Recommandé)
- `VITE_APP_TITLE` : Titre du site (défaut: "LC4 Peinture")
- `VITE_APP_LOGO` : URL du logo (défaut: "/logo.png")

**Configuration** : Allez dans Settings → General dans l'interface de gestion du projet

#### Via fichier .env (Pour déploiement manuel)
Créez un fichier `.env` à la racine du projet :

```env
# Application
VITE_APP_TITLE=LC4 Peinture
VITE_APP_LOGO=/logo.png

# Analytics (optionnel - commenté par défaut dans index.html)
# VITE_ANALYTICS_ENDPOINT=https://votre-umami.com
# VITE_ANALYTICS_WEBSITE_ID=votre-id
```

## Variables optionnelles

### Analytics (Umami)
Si vous souhaitez activer les analytics :

1. Décommentez la ligne dans `client/index.html` :
```html
<script defer src="%VITE_ANALYTICS_ENDPOINT%/umami" data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
```

2. Ajoutez les variables dans votre fichier `.env` :
```env
VITE_ANALYTICS_ENDPOINT=https://votre-instance-umami.com
VITE_ANALYTICS_WEBSITE_ID=votre-website-id
```

## Déploiement sur Vercel

Pour déployer sur Vercel, configurez les variables d'environnement dans :
**Project Settings → Environment Variables**

Variables minimales requises :
- `VITE_APP_TITLE` = LC4 Peinture
- `VITE_APP_LOGO` = /logo.png

## Logo

Placez votre fichier logo dans `/client/public/logo.png` ou mettez à jour la variable `VITE_APP_LOGO` avec l'URL de votre logo.

