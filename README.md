# Portfolio Ahmed Abbou

Portfolio personnel moderne et professionnel construit avec Astro et Tailwind CSS, déployé sur Vercel.

## 🚀 Technologies utilisées

- **Framework**: [Astro](https://astro.build/) - Génération de sites statiques ultra-rapide
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- **Déploiement**: [Vercel](https://vercel.com/) - Plateforme de déploiement
- **Icônes**: [Lucide](https://lucide.dev/) - Bibliothèque d'icônes SVG
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - Suivi des visiteurs

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.astro     # Navigation principale
│   ├── Hero.astro       # Section d'accueil
│   ├── About.astro      # Section À propos
│   ├── Skills.astro     # Section Compétences
│   ├── Education.astro  # Section Éducation
│   ├── Projects.astro   # Section Projets
│   ├── Contact.astro    # Section Contact
│   ├── Footer.astro     # Pied de page
│   ├── BackToTop.astro  # Bouton retour en haut
│   ├── AiAssistant.astro # Assistant IA
│   ├── ResumeExport.astro # Export CV
│   └── icons.ts         # Utilitaire d'icônes
├── layouts/
│   └── BaseLayout.astro # Layout principal
├── data/
│   └── data.ts          # Données centralisées
└── pages/
    └── index.astro      # Page d'accueil
```

## 🛠️ Installation et développement

### Prérequis

- Node.js (version 18+)
- Git
- GitHub CLI (gh)
- Vercel CLI

### Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/aabbou-dotcom/portfolio.git
cd portfolio
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:4321](http://localhost:4321) dans votre navigateur.

## 📝 Modification du contenu

Toutes les informations du portfolio sont centralisées dans le fichier `src/data/data.ts`. Pour modifier le contenu :

1. Ouvrir `src/data/data.ts`
2. Modifier les données selon vos besoins
3. Les sections s'adaptent automatiquement (si une section n'a pas de données, elle n'apparaît pas)

### Champs modifiables :

- **Informations personnelles** : nom, titre, email, localisation, avatar
- **Statistiques** : projets, technologies, etc.
- **Compétences techniques** : catégories et technologies
- **Compétences soft** : noms et descriptions
- **Éducation** : diplômes, institutions, périodes
- **Expérience** : postes, entreprises, descriptions (optionnel)
- **Publications** : articles, auteurs, DOI (optionnel)
- **Projets** : titres, descriptions, technologies, liens
- **Liens sociaux** : GitHub, LinkedIn, etc.

## 🚀 Déploiement

### Déploiement sur Vercel

1. Builder le projet :
```bash
npm run build
```

2. Déployer :
```bash
vercel --yes --prod
```

### URL personnalisée

Le portfolio est configuré pour utiliser une URL personnalisée : `https://portfolio-ahmed-abbou.vercel.app`

## 🎨 Fonctionnalités

- **Thème sombre/clair** : Basculement automatique avec sauvegarde localStorage
- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **Animations** : Scroll-reveal, hover effects, glassmorphism
- **Navigation intelligente** : Menu mobile, surlignage actif, scroll smooth
- **Assistant IA** : Chatbot intégré avec base de connaissances
- **Export CV** : Génération PDF et Word compatibles ATS
- **Accessibilité** : Skip links, focus visible, navigation clavier
- **Performance** : Code splitting, lazy loading, optimisations Astro

## 📊 Analytics

L'analytics Vercel est activé pour suivre les visiteurs, pages vues et référents. Accessible via le dashboard Vercel.

## 📄 Licence

Ce projet est sous licence MIT.

---

Construit avec ❤️ par Ahmed Abbou
