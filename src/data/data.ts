// Fichier de données centralisé pour le portfolio
// Toutes les informations de l'étudiant sont définies ici
// Modifier ce fichier pour mettre à jour le contenu du portfolio

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string; // Adapté au profil, e.g. "Étudiant en Informatique"
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  avatar: string; // URL de l'avatar
}

export interface Stat {
  label: string;
  value: string;
  icon: string; // Lucide icon name
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface SoftSkill {
  name: string;
  description: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionLink: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyLink: string;
  description: string;
  isCurrent?: boolean;
}

export interface Publication {
  year: string;
  title: string;
  journal: string;
  authors: string[]; // Liste des auteurs, avec nom de l'étudiant en premier si applicable
  doi?: string;
  link?: string;
  isFirstAuthor: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  issuerLink: string;
  date: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  technicalSkills: SkillCategory[];
  softSkills: SoftSkill[];
  education: EducationItem[];
  experience?: ExperienceItem[]; // Optionnel
  publications?: Publication[]; // Optionnel
  certifications?: Certification[]; // Optionnel
  projects: Project[];
  socialLinks: SocialLink[];
  navItems: NavItem[]; // Généré dynamiquement
}

// Données de l'étudiant Ahmed Abbou
export const portfolioData: PortfolioData = {
  personal: {
    firstName: "Ahmed",
    lastName: "Abbou",
    title: "Étudiant en Informatique",
    subtitle: "Passionné par le développement web et les technologies modernes",
    email: "a.abbou@esisa.ac.ma",
    location: "Maroc",
    avatar: "https://avatars.githubusercontent.com/u/240514719?v=4"
  },
  stats: [
    { label: "Projets Réalisés", value: "5+", icon: "Code" },
    { label: "Technologies Maîtrisées", value: "10+", icon: "Zap" },
    { label: "Années d'Études", value: "3", icon: "GraduationCap" }
  ],
  technicalSkills: [
    {
      name: "Langages de Programmation",
      icon: "Code2",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"]
    },
    {
      name: "Frameworks & Librairies",
      icon: "Layers",
      skills: ["React", "Astro", "Node.js", "Express", "Tailwind CSS"]
    },
    {
      name: "Outils & Technologies",
      icon: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Docker", "MongoDB"]
    }
  ],
  softSkills: [
    {
      name: "Communication",
      description: "Capacité à expliquer des concepts techniques de manière claire"
    },
    {
      name: "Travail d'Équipe",
      description: "Expérience en projets collaboratifs et pair programming"
    },
    {
      name: "Résolution de Problèmes",
      description: "Approche analytique pour résoudre des défis complexes"
    }
  ],
  education: [
    {
      period: "2021 - Présent",
      degree: "Licence en Informatique",
      field: "Développement Logiciel",
      institution: "ESISA",
      institutionLink: "https://www.esisa.ac.ma",
      description: "Formation complète en programmation, algorithmes, bases de données et développement web."
    }
  ],
  // experience: [], // Aucun, donc section omise
  // publications: [], // Aucun, donc section omise
  // certifications: [], // Aucun, donc section omise
  projects: [
    {
      title: "Portfolio Personnel",
      description: "Site web portfolio moderne construit avec Astro et Tailwind CSS, déployé sur Vercel.",
      tags: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://github.com/aabbou-dotcom/portfolio"
    },
    {
      title: "Application de Gestion de Tâches",
      description: "Application web pour gérer les tâches quotidiennes avec authentification et base de données.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Jeu 2D en Python",
      description: "Jeu simple développé avec Pygame pour apprendre les bases de la programmation orientée objet.",
      tags: ["Python", "Pygame"],
      link: "#"
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/aabbou-dotcom", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/abbou-ahmed/", icon: "Linkedin" },
    { platform: "Email", url: "mailto:a.abbou@esisa.ac.ma", icon: "Mail" }
  ],
  navItems: [] // Sera généré dynamiquement
};

// Fonction pour générer les éléments de navigation en fonction des sections actives
export function generateNavItems(data: PortfolioData): NavItem[] {
  const items: NavItem[] = [
    { label: "Accueil", href: "#hero", icon: "Home" },
    { label: "À Propos", href: "#about", icon: "User" },
    { label: "Compétences", href: "#skills", icon: "Code" },
    { label: "Éducation", href: "#education", icon: "GraduationCap" },
    { label: "Projets", href: "#projects", icon: "FolderOpen" },
    { label: "Contact", href: "#contact", icon: "Mail" }
  ];

  // Ajouter les sections optionnelles si elles existent
  if (data.experience && data.experience.length > 0) {
    items.splice(4, 0, { label: "Expérience", href: "#experience", icon: "Briefcase" });
  }
  if (data.publications && data.publications.length > 0) {
    items.splice(5, 0, { label: "Publications", href: "#publications", icon: "BookOpen" });
  }
  if (data.certifications && data.certifications.length > 0) {
    items.splice(6, 0, { label: "Certifications", href: "#certifications", icon: "Award" });
  }

  return items;
}

// Générer les navItems
portfolioData.navItems = generateNavItems(portfolioData);