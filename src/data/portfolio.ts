/**
 * Portfolio Data
 * Unique source of truth for all portfolio content
 * Automatically generates navigation and sections based on available data
 */

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    subtitle: string;
    email: string;
    phone?: string;
    location: string;
    avatar?: string;
    bio: string;
  };
  stats?: {
    label: string;
    value: string | number;
  }[];
  skills: {
    technical: {
      category: string;
      icon: string;
      items: string[];
    }[];
    soft?: {
      name: string;
      description: string;
    }[];
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    institutionUrl?: string;
    startYear: number;
    endYear?: number;
    description?: string;
  }[];
  experience?: {
    role: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    description: string;
    skills?: string[];
  }[];
  publications?: {
    title: string;
    journal: string;
    year: number;
    authors: string[];
    doi?: string;
    url?: string;
    isFirstAuthor: boolean;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    skills?: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
    image?: string;
    featured?: boolean;
  }[];
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Ahmed',
    lastName: 'Abbou',
    title: 'Étudiant en Informatique',
    subtitle: 'Développeur Full Stack & Passionné par les Nouvelles Technologies',
    email: 'a.abbou@esisa.as.ma',
    phone: '+212 6XX XXX XXX',
    location: 'Casablanca, Maroc',
    bio: 'Étudiant en informatique passionné par le développement web et les technologies modernes. Je m\'engage à créer des solutions logicielles innovantes et performantes. Constamment à la recherche de nouvelles compétences et d\'opportunités pour contribuer à des projets impactants.'
  },
  stats: [
    { label: 'Projets Réalisés', value: 15 },
    { label: 'Technologies', value: 20 },
    { label: 'Années d\'Études', value: 3 },
    { label: 'Formations', value: 8 }
  ],
  skills: {
    technical: [
      {
        category: 'Frontend',
        icon: 'Layers',
        items: ['React', 'Vue.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Next.js']
      },
      {
        category: 'Backend',
        icon: 'Server',
        items: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST API']
      },
      {
        category: 'DevOps & Tools',
        icon: 'Cog',
        items: ['Git', 'Docker', 'Vercel', 'Linux', 'VS Code', 'GitHub Actions']
      },
      {
        category: 'Langages',
        icon: 'Code2',
        items: ['JavaScript', 'Python', 'C++', 'SQL', 'HTML/CSS', 'TypeScript']
      }
    ],
    soft: [
      {
        name: 'Communication',
        description: 'Excellente capacité à communiquer des idées complexes de manière claire et concise.'
      },
      {
        name: 'Travail d\'Équipe',
        description: 'Collaboratif et capable de travailler efficacement dans des environnements d\'équipe.'
      },
      {
        name: 'Résolution de Problèmes',
        description: 'Approche analytique pour identifier et résoudre les défis techniques.'
      },
      {
        name: 'Leadership',
        description: 'Capable de diriger des projets et motiver les équipes vers les objectifs.'
      }
    ]
  },
  education: [
    {
      degree: 'Licence en Informatique',
      field: 'Informatique & Technologies de l\'Information',
      institution: 'ESISA (École Supérieure d\'Informatique et de Services Avancés)',
      institutionUrl: 'https://esisa.as.ma',
      startYear: 2023,
      endYear: 2026,
      description: 'Formation complète en informatique couvrant les bases de la programmation, les structures de données, les algorithmes, le développement web, et les technologies cloud modernes.'
    }
  ],
  experience: [
    {
      role: 'Développeur Web Freelance',
      company: 'Projets Personnels',
      startDate: 'Janvier 2024',
      endDate: 'Présent',
      isCurrent: true,
      description: 'Création de sites web et d\'applications modernes pour des clients variés. Responsable de l\'architecture technique, du développement frontend et backend, et du déploiement.',
      skills: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Vercel']
    },
    {
      role: 'Stagiaire Développeur Web',
      company: 'Startup Technologique Locale',
      startDate: 'Juillet 2024',
      endDate: 'Septembre 2024',
      description: 'Développement d\'une application web réactive avec React. Intégration d\'APIs externes et optimisation des performances. Travail en équipe agile avec Git et GitHub.',
      skills: ['React', 'API REST', 'JavaScript', 'Git']
    }
  ],
  projects: [
    {
      title: 'Portfolio Personnel avec Astro',
      description: 'Site portfolio moderne et responsive construit avec Astro, Tailwind CSS et déployé sur Vercel. Inclut un chatbot IA côté client, export CV PDF/Word, et thème sombre/clair.',
      technologies: ['Astro', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      featured: true,
      url: 'https://portfolio-ahmed-abbou.vercel.app',
      github: 'https://github.com/aabbou-dotcom/portfolio'
    },
    {
      title: 'Application E-Commerce',
      description: 'Plateforme de commerce électronique complète avec panier, paiement Stripe, système de commandes et tableau de bord administrateur.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      featured: true,
      github: 'https://github.com/aabbou-dotcom/ecommerce-app'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Interface de gestion de données avec graphiques interactifs, filters avancés et export en CSV/PDF utilisant Chart.js et Next.js.',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
      github: 'https://github.com/aabbou-dotcom/analytics-dashboard'
    },
    {
      title: 'Chat Application',
      description: 'Application de messagerie en temps réel utilisant Socket.io pour les communications bidirectionnelles. Support des salons, des utilisateurs et persistance des messages.',
      technologies: ['Socket.io', 'Express.js', 'React', 'MongoDB'],
      github: 'https://github.com/aabbou-dotcom/chat-app'
    },
    {
      title: 'Task Management API',
      description: 'API REST complète pour la gestion de tâches avec authentification JWT, validation des données et tests unitaires.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      github: 'https://github.com/aabbou-dotcom/task-api'
    },
    {
      title: 'Convertisseur de Devises',
      description: 'Application web pour convertir les devises en temps réel avec données live des APIs de change. Interface intuitive et graphiques de tendances.',
      technologies: ['React', 'API REST', 'Chart.js', 'Axios'],
      url: 'https://currency-converter-abbou.vercel.app',
      github: 'https://github.com/aabbou-dotcom/currency-converter'
    }
  ],
  certifications: [
    {
      name: 'The Complete JavaScript Course 2024',
      issuer: 'Udemy',
      date: '2024',
      skills: ['JavaScript', 'DOM', 'Async/Await']
    },
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2024',
      skills: ['React', 'Hooks', 'State Management']
    },
    {
      name: 'Modern Web Development with Astro',
      issuer: 'Udemy',
      date: '2024',
      skills: ['Astro', 'SSG', 'Performance']
    },
    {
      name: 'Node.js and Express Complete Course',
      issuer: 'Udemy',
      date: '2023',
      skills: ['Node.js', 'Express', 'REST APIs']
    },
    {
      name: 'Database Design and SQL',
      issuer: 'Coursera',
      date: '2023',
      skills: ['SQL', 'Database Design', 'PostgreSQL']
    },
    {
      name: 'Git and GitHub Essentials',
      issuer: 'Udemy',
      date: '2023',
      skills: ['Git', 'GitHub', 'Version Control']
    },
    {
      name: 'TypeScript Masterclass',
      issuer: 'Udemy',
      date: '2024',
      skills: ['TypeScript', 'OOP', 'Generics']
    },
    {
      name: 'AWS Cloud Essentials',
      issuer: 'AWS',
      date: '2024',
      skills: ['AWS', 'Cloud Computing', 'S3']
    }
  ],
  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/aabbou-dotcom',
      icon: 'Github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/abbou-ahmed',
      icon: 'Linkedin'
    },
    {
      platform: 'Email',
      url: 'mailto:a.abbou@esisa.as.ma',
      icon: 'Mail'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/abbou_dev',
      icon: 'Twitter'
    }
  ]
};

/**
 * Utility function to get active nav items based on available data
 */
export function getActiveNavItems() {
  const items = [
    { label: 'À Propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Éducation', id: 'education' }
  ];

  if (portfolioData.experience && portfolioData.experience.length > 0) {
    items.push({ label: 'Expérience', id: 'experience' });
  }

  if (portfolioData.projects && portfolioData.projects.length > 0) {
    items.push({ label: 'Projets', id: 'projects' });
  }

  if (portfolioData.certifications && portfolioData.certifications.length > 0) {
    items.push({ label: 'Certifications', id: 'certifications' });
  }

  if (portfolioData.publications && portfolioData.publications.length > 0) {
    items.push({ label: 'Publications', id: 'publications' });
  }

  items.push({ label: 'Contact', id: 'contact' });

  return items;
}
