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
      duration: "1 mois",
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
    id: "a-la-conquete-du-monde",
    title: "À la Conquête du Monde",
    description: "Application web fullstack moderne permettant aux utilisateurs de découvrir et partager des récits de voyage avec authentification, interactions sociales et mode sombre/clair.",
    fullDescription: "À la Conquête du Monde est une application web fullstack moderne qui permet aux utilisateurs de découvrir et partager des récits de voyage. L'application offre une expérience utilisateur fluide avec un design responsive et un mode sombre/clair qui s'adapte aux préférences de chaque utilisateur. J'ai développé cette application pour mettre en pratique mes compétences en React, Node.js et les technologies modernes. L'objectif était de créer une interface moderne avec Tailwind CSS, des animations et micro-interactions, ainsi qu'un système complet de gestion de contenu avec authentification JWT, CRUD complet des articles, système de likes, favoris, commentaires et partage social.",
    image: "/screenshots/homepage.png",
    technologies: [
      "React 18",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "JWT",
      "bcryptjs",
      "PostgreSQL",
      "Docker",
      "Axios"
    ],
    github: "https://github.com/jeyakishandev/a-la-conquete-du-monde",
    live: "https://conquete-frontend.onrender.com",
    features: [
      "Authentification JWT avec inscription/connexion",
      "CRUD complet des articles de voyage",
      "Système de catégories et filtres",
      "Recherche et pagination",
      "Système de likes et favoris",
      "Commentaires sur les articles",
      "Partage social (Facebook, Twitter, WhatsApp)",
      "Catalogue de destinations avec filtres par continent",
      "Compteur de vues et statistiques d'engagement",
      "Mode sombre/clair avec transitions fluides",
      "Design responsive mobile-first",
      "Animations et glass-morphism"
    ],
    stats: {
      duration: "2-3 mois",
      team: "Solo",
      linesOfCode: "~5000 lignes",
      endpoints: "18 routes API",
      components: "8+ composants React"
    }
  },
  {
    id: "time-swap-network",
    title: "Time-Swap Network",
    description: "Plateforme d'échange de crédits temps avec authentification sécurisée, marketplace de services et système de transactions atomiques",
    fullDescription: "Time-Swap Network est mon premier projet Full Stack ambitieux. Il s'agit d'une plateforme bancaire sécurisée permettant aux utilisateurs d'échanger des crédits temps entre eux, de créer et réserver des services, et de gérer leurs transactions de manière sécurisée.\n\nLe projet combine plusieurs concepts avancés : authentification JWT avec cookies HTTP-only, transactions atomiques avec Prisma pour garantir la cohérence des données, système de notifications en temps réel avec Socket.io, et une interface utilisateur moderne avec Next.js 14 et Tailwind CSS.\n\nJ'ai appris énormément sur ce projet : les transactions atomiques qui résolvent les problèmes de cohérence des données, l'authentification sécurisée avec JWT, l'architecture modulaire de NestJS, et l'importance des tests unitaires (71% de couverture sur les services critiques).",
    image: "/time-swap.png",
    video: "/api/placeholder/video",
    technologies: ["Next.js 14", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "SQLite", "JWT", "Tailwind CSS", "Socket.io", "Docker", "Jest", "bcrypt"],
    github: "https://github.com/votre-username/Time-Swap",
    githubBackend: "https://github.com/votre-username/Time-Swap",
    features: [
      "Authentification sécurisée avec JWT et cookies HTTP-only",
      "Transfert de crédits temps entre utilisateurs avec transactions atomiques",
      "Marketplace de services avec catégories et recherche",
      "Système de réservation de services avec gestion des statuts",
      "Système d'avis et de notation (1-5 étoiles)",
      "Notifications en temps réel avec Socket.io",
      "Tableau de bord complet avec statistiques et historique",
      "API REST documentée avec Swagger",
      "Tests unitaires avec 71% de couverture sur les services critiques",
      "Déploiement Docker avec docker-compose"
    ],
    stats: {
      duration: "2-3 mois",
      team: "Solo",
      linesOfCode: "~12 400 lignes",
      endpoints: "35+ routes API",
      components: "20+ composants React"
    }
  }
];

export const skills = [
  { 
    category: "Front-End", 
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3 (Flexbox, Grid)", "Tailwind CSS", "React Router", "Styled Components", "Framer Motion", "React Query", "Zustand", "Axios", "Vite", "Bootstrap"] 
  },
  { 
    category: "Back-End", 
    items: ["Node.js avec Express", "NestJS", "API REST (création, sécurisation)", "Sequelize / Prisma", "Socket.io", "Swagger", "Express Validator", "Intégration APIs tierces"] 
  },
  { 
    category: "Bases de données", 
    items: ["PostgreSQL", "SQLite", "MySQL", "Conception et modélisation", "MCD/MLD, Merise", "Optimisation requêtes"] 
  },
  { 
    category: "Sécurité & Auth", 
    items: ["JWT (JSON Web Token)", "Argon2 (hachage mots de passe)", "bcrypt/bcryptjs", "Helmet", "Rate Limiting", "Gestion des rôles", "Autorisations granulaires"] 
  },
  { 
    category: "Outils & Workflow", 
    items: ["Git / GitHub (workflow pro)", "Docker (conteneurs)", "CI/CD (Vercel, Railway, Render)", "Jest", "Vitest", "Agile / Scrum"] 
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
  avatar: "/profile-photo.jpg",
  bio: "Ancien agent de trafic aérien, j'ai choisi de me reconvertir dans le développement web pour allier logique, créativité et impact concret. Près d'un an d'expérience cumulée avec une formation intensive full-stack et des projets concrets en freelance."
};

