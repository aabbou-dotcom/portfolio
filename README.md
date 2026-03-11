# Portfolio - Ahmed Abbou 🚀

Un portfolio professionnel moderne et complet construit avec **Astro**, déployé sur **Vercel**, avec un design glassmorphic époustouflant, chatbot IA intégré et export CV en PDF.

## 🌟 Caractéristiques

### 🎨 Design Moderne
- **Theme sombre/clair** avec toggle en temps réel
- **Glassmorphism** : design élégant avec backdrop blur et semi-transparence
- **Animations fluides** : scroll reveal, hover effects, transitions CSS3
- **Responsive design** : Parfaitement optimisé mobile, tablet, desktop
- **Dégradés animés** : Icons animées avec effet hue-rotate et glow

### 🧠 Chatbot IA Côté Client
- Chatbot conversationnel sans dépendance API externe
- Base de connaissances dynamique construite à partir des données du portfolio
- Matching d'intentions par regex (salutations, compétences, projets, éducation, etc.)
- Quick actions pour accélérer la navigation
- Intégration fluide avec le design global

### 📄 Export CV Professionnel
- Modal d'export avec deux formats : **PDF** et **Word**
- CVs optimisés pour les systèmes ATS (Applicant Tracking Systems)
- Génération asynchrone avec jsPDF
- Design professionnel cohérent avec le portfolio

### 📱 Navigation Intelligente
- Header sticky avec navigation dynamique
- Menu hamburger animé sur mobile
- Active link highlighting via IntersectionObserver
- Smooth scroll vers les sections

### 🔧 Architecture Technique
- **Fichier de données centralisé** : `src/data/portfolio.ts`
- **Sections conditionnelles** : Les sections s'affichent uniquement si des données existent
- **Composants réutilisables** : Structure Astro stricte (components, layouts, pages)
- **CSS personnalisé** : Variables CSS pour thème, polices, animations
- **Animations performantes** : RequestAnimationFrame, IntersectionObserver

### 📊 Sections du Portfolio
1. **Hero** - Présentation animée, stats, appel à l'action
2. **À Propos** - Cartes numérotées avec description
3. **Compétences** - Grille interactive avec catégories tech et soft skills
4. **Éducation** - Timeline verticale animée
5. **Expérience** - Cartes professionnelles (conditionnel)
6. **Projets** - Grille avec numérotation et liens
7. **Certifications** - Groupées par plateforme (conditionnel)
8. **Publications** - Séparées par rôle d'auteur (conditionnel)
9. **Contact** - Formulaire fonctionnel + infos + réseaux sociaux

### 🔗 Intégrations Externes
- **Vercel Analytics** : Suivi automatique des visiteurs
- **formsubmit.co** : Formulaire de contact sans backend
- **GitHub** : Source de vérité pour le code
- **CDN** : Polices Google Fonts, icônes Lucide SVG inline

## 📦 Structure du Projet

```
.
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.astro    # Navigation + thème
│   │   ├── Hero.astro      # Section d'accueil
│   │   ├── About.astro     # À propos
│   │   ├── Skills.astro    # Compétences
│   │   ├── Education.astro # Éducation
│   │   ├── Experience.astro # Expérience (optionnel)
│   │   ├── Projects.astro  # Projets
│   │   ├── Certifications.astro # Certifications (optionnel)
│   │   ├── Publications.astro   # Publications (optionnel)
│   │   ├── Contact.astro   # Contact
│   │   ├── Footer.astro    # Footer
│   │   ├── BackToTop.astro # Bouton retour haut
│   │   ├── AiAssistant.astro  # Chatbot IA
│   │   └── ResumeExport.astro # Export CV
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout principal
│   ├── pages/
│   │   └── index.astro     # Page d'accueil
│   ├── data/
│   │   └── portfolio.ts    # Données centralisées
│   ├── styles/
│   │   └── global.css      # Styles globaux + animations
│   └── env.d.ts            # Types TypeScript
├── public/                  # Assets statiques
├── dist/                    # Build output
├── package.json            # Dépendances
├── astro.config.mjs        # Config Astro
└── README.md               # Ce fichier

```

## 🚀 Commandes Utiles

### Développement
```bash
npm run dev         # Démarrer le serveur local (http://localhost:3000)
npm run build       # Compiler pour production
npm run preview     # Prévisualiser le build
```

### Déploiement
```bash
vercel --prod --yes # Déployer en production
vercel --yes        # Déployer en preview
```

## 📝 Modification du Contenu

**TOUT le contenu du portfolio est centralisé dans un SEUL fichier :**

```typescript
src/data/portfolio.ts
```

Pour mettre à jour votre portfolio, modifiez simplement ce fichier TypeScript :

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Votre Prénom',
    lastName: 'Votre Nom',
    title: 'Votre Titre',
    email: 'votre@email.com',
    // ... autres propriétés
  },
  skills: { /* ... */ },
  education: [ /* ... */ ],
  experience: [ /* ... */ ],  // Optionnel
  projects: [ /* ... */ ],
  // ... etc
};
```

**Sections Optionnelles :** Si une section est vide (tableau `[]`), elle n'apparaîtra PAS sur le site et ne sera PAS listée dans la navigation.

## 🎯 Thème Sombre/Clair

Le thème est contrôlé par l'attribut `data-theme` sur la balise `<html>` :
- `data-theme="dark"` (défaut)
- `data-theme="light"`

Le thème est sauvegardé dans `localStorage` et restauré au chargement.

## 🔐 Sécurité

- **Honeypot anti-spam** dans le formulaire de contact
- **Validation côté client** des inputs
- **CORS amical** : Pas de données sensibles exposées
- **Static generation** : Pas de serveur à comprometre

## 📊 Vercel Analytics

L'Analytics Vercel est intégré et suivi automatiquement via `@vercel/analytics/web`.

Pour activer le dashboard :
1. Allez sur [Vercel Dashboard](https://vercel.com/)
2. Sélectionnez votre projet
3. Onglet **Analytics** → **Enable Analytics**

## 🌐 URL Personnalisée

L'URL de déploiement : **https://portfolio-ahmed-abbou.vercel.app**

Pour modifier le nom du domaine personnalisé :
```bash
vercel alias set portfolio-ahmed-abbou.vercel.app
```

## 🛠️ Stack Technique

- **Framework** : Astro 4.x
- **Styling** : CSS custom properties (variables CSS)
- **Icons** : Lucide SVG (inline)
- **Export** : jsPDF pour PDF
- **Form** : formsubmit.co (AJAX)
- **Analytics** : Vercel Analytics
- **Deployment** : Vercel
- **Version Control** : GitHub

## 📱 Optimisations Mobile

- Viewport responsive configuration
- Touch-friendly buttons (48px minimum)
- Optimized images et lazy loading
- Reduced animations sur `prefers-reduced-motion`
- Mobile-first CSS design

## 🔍 SEO

- Meta descriptions
- Semantic HTML
- Structured data (JSON-LD compatible)
- Open Graph meta tags
- Sitemap compatible

## 🎓 Améliorations Futures

- [ ] Multilingual support (EN/FR/AR)
- [ ] Blog section avec MDX
- [ ] Dark mode gallery
- [ ] Advanced animations avec Framer Motion
- [ ] PWA support (offline)
- [ ] RSS feed

## 📄 Licence

Ce projet est disponible sous licence MIT. Libre d'utilisation et de modification.

## 👨‍💻 Auteur

**Ahmed Abbou**
- 📧 Email : [a.abbou@esisa.as.ma](mailto:a.abbou@esisa.as.ma)
- 🔗 LinkedIn : [ahmed-abbou](https://linkedin.com/in/ahmed-abbou)
- 🐙 GitHub : [@aabbou-dotcom](https://github.com/aabbou-dotcom)

---

**Construit avec ❤️ avec Astro et déployé sur Vercel**
