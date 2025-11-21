import { Project } from "@/types/Project";

// Données des projets - EXACT de l'ancien code
export const projects: Project[] = [
  {
    id: "gamerchallenges",
    title: "GamerChallenges",
    description: "Plateforme communautaire de défis gaming où les joueurs créent et participent à des challenges basés sur YouTube avec système de classement",
    fullDescription: "GamerChallenges est une plateforme web communautaire permettant aux joueurs de créer, participer et suivre des défis vidéo ludiques. Les utilisateurs peuvent soumettre leurs créations vidéo, participer aux challenges et grimper dans le classement. Projet développé en équipe de 4 avec architecture séparée (Frontend React + Backend Express + PostgreSQL). Authentification JWT, upload de fichiers, système de points, leaderboard. Déploiement Frontend sur Vercel et Backend sur Railway.",
    image: "/gamerchallenges-screenshot.png",
    video: "/api/placeholder/video",
    technologies: ["React 19", "TypeScript", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Argon2", "Zustand", "Swagger", "Vercel", "Railway"],
    github: "https://github.com/kishankarunanithy/Gamer-front",
    githubBackend: "https://github.com/kishankarunanithy/Gamer-back",
    live: "https://gamer-front-kishankarunanithys-projects.vercel.app",
    liveBackend: "https://gamer-back-two.vercel.app",
    features: [
      "Authentification JWT sécurisée avec Argon2",
      "CRUD complet des challenges avec catégories",
      "Système de participations vidéo YouTube",
      "Leaderboard et classement des joueurs",
      "Upload d'avatars et gestion de profil",
      "Carrousels interactifs (nouveautés & populaires)",
      "Pagination et filtrage par catégorie/difficulté",
      "Documentation Swagger complète"
    ],
    stats: {
      duration: "2-3 semaines",
      team: "4 développeurs",
      linesOfCode: "~4000 lignes",
      endpoints: "23 routes API",
      components: "15+ composants"
    }
  },
  {
    id: "luxtime",
    title: "LuxTime - E-commerce Fullstack de Montres de Luxe",
    description: "Luxetime est une application e-commerce fullstack pour la vente de montres de luxe, développée avec React, Node.js et PostgreSQL, incluant authentification JWT, panier d'achat, gestion de commandes et interface responsive.",
    fullDescription: "Luxetime est une application e-commerce fullstack que j'ai développée pour démontrer mes compétences en développement web moderne. L'objectif était de créer une plateforme fonctionnelle avec les fonctionnalités essentielles d'un site de vente en ligne : authentification sécurisée, catalogue de produits avec filtres, panier d'achat, système de commandes et gestion de profil utilisateur.\n\nL'application utilise une architecture client-serveur avec séparation frontend/backend. Le frontend est une SPA React avec routing, animations et design responsive. Le backend est une API RESTful Express.js connectée à PostgreSQL via Prisma ORM. La sécurité est assurée par JWT, bcrypt, et des middlewares de protection (Helmet, CORS, Rate Limiting).\n\nLe projet inclut des tests unitaires (Jest + Vitest), une configuration Docker, et est déployé en production sur Vercel (frontend) et Render (backend). Le code est structuré, documenté et suit les bonnes pratiques.",
    image: "https://raw.githubusercontent.com/jeyakishandev/luxetime/main/docs/screenshots/home.png",
    technologies: [
      "React 18",
      "React Router v6",
      "Styled Components",
      "Framer Motion",
      "React Query",
      "Axios",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "bcryptjs",
      "Helmet",
      "Express Validator",
      "Rate Limiting",
      "Docker",
      "Docker Compose",
      "Jest",
      "Vitest",
      "Vercel",
      "Render"
    ],
    github: "https://github.com/jeyakishandev/luxetime",
    live: "https://luxetime-three.vercel.app",
    liveBackend: "https://luxetime.onrender.com",
    features: [
      "Authentification complète (inscription, connexion, JWT)",
      "Catalogue de produits avec filtres (catégorie, prix, recherche)",
      "Détails produits avec galerie d'images et spécifications",
      "Panier d'achat (ajout, modification, suppression, calcul en temps réel)",
      "Système de commandes (création, suivi, historique)",
      "Profil utilisateur (gestion des informations et adresses)",
      "Design responsive (mobile, tablette, desktop)",
      "Animations fluides avec Framer Motion"
    ],
    stats: {
      duration: "2-3 semaines",
      team: "Solo (développement fullstack)",
      linesOfCode: "~15 000 lignes (Frontend: ~8 000, Backend: ~5 000, Tests: ~500)",
      endpoints: "20+ endpoints API",
      components: "30+ composants React"
    }
  },
  {
    id: "devboard",
    title: "DevBoard",
    description: "Board collaboratif style Kanban pour équipes de développement",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Docker", "Vitest"],
    github: "https://github.com/jeyakishandev",
    live: "https://devboard.demo.com"
  },
  {
    id: "conquete-monde",
    title: "À la conquête du monde",
    description: "Blog de voyage et de partage d'expériences avec galerie photos",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/jeyakishandev/conquete-monde",
    live: "https://conquete-monde.demo.com"
  }
];

export const skills = [
  { 
    category: "Front-End", 
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3 (Flexbox, Grid)", "Tailwind CSS", "Bootstrap"] 
  },
  { 
    category: "Back-End", 
    items: ["Node.js avec Express", "API REST (création, sécurisation)", "Sequelize / Prisma", "Intégration APIs tierces"] 
  },
  { 
    category: "Bases de données", 
    items: ["PostgreSQL", "MySQL", "Conception et modélisation", "MCD/MLD, Merise", "Optimisation requêtes"] 
  },
  { 
    category: "Sécurité & Auth", 
    items: ["JWT (JSON Web Token)", "Argon2 (hachage mots de passe)", "Gestion des rôles", "Autorisations granulaires"] 
  },
  { 
    category: "Outils & Workflow", 
    items: ["Git / GitHub (workflow pro)", "Docker (conteneurs)", "CI/CD (Vercel, Railway)", "Agile / Scrum"] 
  },
  { 
    category: "Innovation & IA", 
    items: ["Intégration APIs IA", "Automatisation de tâches", "Optimisation UX/UI"] 
  }
];

export const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "Makara Media",
    period: "2025",
    status: "En cours",
    description: "Développement d'une plateforme SaaS complète de gestion multi-réseaux sociaux permettant aux entreprises de publier simultanément sur LinkedIn, Facebook, Instagram avec planification avancée et suivi temps réel.",
    technologies: ["Node.js 22", "TypeScript", "React 18", "Fastify", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "AWS S3", "Zustand", "Tailwind CSS", "Radix UI", "Docker", "Vitest"],
    details: {
      technologies: "Stack technique moderne : Backend Node.js 22 + TypeScript avec Fastify, Prisma ORM, Redis (BullMQ + Pub/Sub), AWS S3. Frontend React 18 + TypeScript, Zustand, Tailwind CSS + Radix UI, Framer Motion. Architecture containerisée avec Docker.",
      features: [
        "Système d'authentification sécurisé (JWT, OAuth Google, Argon2id)",
        "Architecture multi-tenant avec organisations et permissions granulaires",
        "Intégrations LinkedIn, Facebook/Instagram (Meta Business API)",
        "Publication immédiate/planifiée avec support multi-médias (images, vidéos 200MB)",
        "Queue Redis (BullMQ) pour traitement asynchrone avec retry automatique",
        "Gestion médias AWS S3 avec traitement Sharp (redimensionnement, WebP)",
        "Intégration Pixabay pour recherche d'images professionnelles",
        "Internationalisation 5 langues (FR, EN, IT, DE, ES)",
        "Dashboard analytics avec calendrier et métriques temps réel",
        "WebSocket avec authentification JWT pour notifications push"
      ],
      quality: [
        "Tests automatisés 90%+ couverture (Vitest + Supertest)",
        "TypeScript strict mode - Aucun 'any' autorisé",
        "Validation Zod sur toutes entrées/sorties API",
        "Linting Biome avec formatage automatique",
        "Git hooks Husky + lint-staged",
        "Sécurité robuste (CSRF, XSS, tokens JWT, validation MIME)",
        "Performance optimisée (requêtes Prisma, pagination, lazy loading)",
        "Architecture scalable avec microservices"
      ],
      development: [
        "~40 services métier avec logique complexe",
        "97 tests unitaires et d'intégration",
        "217 composants React organisés avec architecture modulaire",
        "26 hooks personnalisés et 18 stores Zustand",
        "15+ modèles Prisma avec relations complexes",
        "25+ endpoints REST documentés avec Swagger"
      ],
      collaboration: [
        "Méthodologie Agile avec sprints hebdomadaires",
        "Code reviews systématiques sur GitHub",
        "Documentation technique complète (README + JSDoc)",
        "Architecture modulaire pour travail en équipe",
        "CI/CD ready avec tests automatiques"
      ]
    }
  },
  {
    title: "Stage Développeur Web",
    company: "Makara Media",
    period: "2025",
    description: "Refonte du dashboard interne avec React + TypeScript et intégration de composants dynamiques.",
    technologies: ["React", "TypeScript", "Symfony", "PHP", "API REST"],
    details: {
      development: [
        "Composants : statistiques sociales",
        "Publications à venir",
        "Carrousel d'actualités"
      ],
      collaboration: [
        "Front/back avec Symfony (PHP)",
        "API REST",
        "Choix UI/UX via Figma"
      ]
    }
  },
  {
    title: "Développeur Web & Web Mobile",
    company: "O'clock",
    period: "2024–2025",
    description: "Spécialisation JavaScript Full-Stack (React.js, Node.js, TypeScript, PostgreSQL).",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Agile/Scrum"],
    details: {
      project: "GamerChallenges, une plateforme collaborative de défis gaming avec authentification sécurisée, gestion de challenges et déploiement Vercel/Railway.",
      methodology: "Travail en méthode Agile/Scrum avec sprints et gestion d'équipe."
    }
  },
  {
    title: "Équipier Polyvalent",
    company: "Monoprix",
    period: "Antérieur",
    description: "Gestion de stock, mise en rayon, relation client.",
    technologies: [],
    details: {
      skills: "Compétences organisationnelles et travail en équipe."
    }
  },
  {
    title: "Agent de Trafic Aérien",
    company: "Aviation",
    period: "Antérieur",
    description: "Gestion opérationnelle et logistique dans le secteur aérien.",
    technologies: [],
    details: {
      skills: "Logique, organisation, gestion du stress, travail en équipe."
    }
  }
];

export const personalInfo = {
  name: "Jeya Kishan Karunanithy",
  title: "Développeur Full-Stack",
  age: 30,
  location: "Île-de-France",
  status: "Disponible",
  email: "k.jeyakishan@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeya-kishan-karunanithy",
  github: "https://github.com/jeyakishandev",
  bio: "Ancien agent de trafic aérien, j'ai choisi de me reconvertir dans le développement web pour allier logique, créativité et impact concret. Près d'un an d'expérience cumulée avec une formation intensive full-stack et des projets concrets en freelance."
};

