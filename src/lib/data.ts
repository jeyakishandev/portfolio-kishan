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
    id: "luxetime",
    title: "LuxTime - E-commerce Fullstack de Montres de Luxe",
    description: "Application e-commerce fullstack premium pour la vente de montres de luxe, développée avec React, Node.js et PostgreSQL. Inclut authentification JWT, panier, commandes, certificats d'authenticité, garanties étendues, système de retours, emails transactionnels, SEO optimisé, Error Boundary, Skeleton Loaders, documentation API Swagger et CI/CD GitHub Actions.",
    fullDescription: "Luxetime est une application e-commerce fullstack que j'ai développée pour démontrer mes compétences en développement web moderne. L'objectif était de créer une plateforme fonctionnelle et premium avec les fonctionnalités essentielles d'un site de vente en ligne, incluant des spécificités du secteur du luxe.\n\n**Architecture & Technologies :**\nL'application utilise une architecture client-serveur avec séparation frontend/backend. Le frontend est une SPA React avec routing, animations Framer Motion, Styled Components, et design responsive mobile-first. Le backend est une API RESTful Express.js connectée à PostgreSQL via Prisma ORM. La sécurité est assurée par JWT, bcrypt, Helmet, CORS, et Rate Limiting.\n\n**Fonctionnalités principales :**\n- Authentification sécurisée (JWT, reset password, rôles utilisateurs)\n- Catalogue complet avec filtres avancés, tri dynamique et recherche\n- Panier d'achat avec calcul en temps réel\n- Système de commandes avec suivi de statut\n- Wishlist persistante\n- Système d'avis et notes avec moyenne calculée\n- Profil utilisateur complet\n- Produits récemment consultés\n\n**Fonctionnalités luxe spécifiques :**\n- Certificats d'authenticité numériques avec QR codes et historique de propriété\n- Gestion des garanties (constructeur + extension 3/5 ans)\n- Suivi de livraison avancé avec numéros de suivi\n- Système de retours et remboursements complet\n\n**Améliorations & Bonnes pratiques :**\n- Emails transactionnels (Nodemailer) : bienvenue, confirmation commande, livraison, reset password\n- SEO optimisé avec React Helmet Async, meta tags dynamiques, Open Graph, Schema.org JSON-LD\n- Error Boundary pour une gestion robuste des erreurs\n- Skeleton Loaders pour améliorer la perception de performance\n- Documentation API interactive avec Swagger/OpenAPI\n- CI/CD automatisé avec GitHub Actions (tests, linting, build)\n- Tests unitaires (Jest backend, Vitest frontend)\n- Configuration Docker pour déploiement conteneurisé\n\nLe projet est déployé en production sur Vercel (frontend) et Render (backend). Le code est structuré, documenté et suit les bonnes pratiques de développement moderne.",
    image: "https://raw.githubusercontent.com/jeyakishandev/luxetime/main/docs/screenshots/home.png",
    technologies: [
      "React 18",
      "React Router v6",
      "Styled Components",
      "Framer Motion",
      "React Query",
      "React Helmet Async",
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
      "Nodemailer",
      "Swagger/OpenAPI",
      "Docker",
      "Docker Compose",
      "Jest",
      "Vitest",
      "GitHub Actions",
      "Vercel",
      "Render"
    ],
    github: "https://github.com/jeyakishandev/luxetime",
    live: "https://luxetime-three.vercel.app",
    liveBackend: "https://luxetime.onrender.com",
    features: [
      "Authentification complète (inscription, connexion, reset password, JWT)",
      "Catalogue de produits avec filtres avancés (catégorie, prix, marque, note)",
      "Tri dynamique et recherche en temps réel",
      "Détails produits avec galerie d'images et spécifications techniques",
      "Panier d'achat (ajout, modification, suppression, calcul en temps réel)",
      "Système de commandes complet (création, suivi de statut, historique)",
      "Wishlist (liste de souhaits) persistante",
      "Système d'avis et notes avec moyenne calculée",
      "Produits récemment consultés (localStorage)",
      "Profil utilisateur complet (informations, adresses, historique)",
      "Certificats d'authenticité numériques avec QR codes",
      "Gestion des garanties (constructeur + extension 3/5 ans)",
      "Suivi de livraison avancé avec numéros de suivi",
      "Système de retours et remboursements",
      "Emails transactionnels (bienvenue, commande, livraison, reset password)",
      "Panel administrateur (gestion produits, commandes, utilisateurs)",
      "SEO optimisé (meta tags dynamiques, Open Graph, Schema.org)",
      "Error Boundary pour gestion robuste des erreurs",
      "Skeleton Loaders pour meilleure UX",
      "Documentation API interactive (Swagger/OpenAPI)",
      "CI/CD automatisé (GitHub Actions)",
      "Design responsive mobile-first",
      "Animations fluides avec Framer Motion"
    ],
    stats: {
      duration: "3-4 semaines",
      team: "Solo (développement fullstack)",
      linesOfCode: "~15 000+ lignes (Frontend: ~9 000, Backend: ~6 000, Tests: ~500)",
      endpoints: "25+ endpoints API REST",
      components: "40+ composants React",
      databaseModels: "15+ modèles Prisma",
      features: "50+ fonctionnalités"
    }
  },
  {
    id: "a-la-conquete-du-monde",
    title: "À la Conquête du Monde",
    description: "Application web fullstack moderne permettant aux utilisateurs de découvrir et partager des récits de voyage avec authentification, interactions sociales, carte interactive et PWA.",
    fullDescription: "À la Conquête du Monde est une application web fullstack moderne qui permet aux utilisateurs de découvrir et partager des récits de voyage. L'application offre une expérience utilisateur fluide avec un design responsive et un mode sombre/clair qui s'adapte aux préférences de chaque utilisateur. J'ai développé cette application pour mettre en pratique mes compétences en React, Node.js et les technologies modernes. L'objectif était de créer une interface moderne avec Tailwind CSS, des animations et micro-interactions, ainsi qu'un système complet de gestion de contenu avec authentification JWT, CRUD complet des articles, système de likes, favoris, commentaires et partage social. L'application inclut également une carte interactive des destinations avec Leaflet, une PWA installable avec mode offline, et des optimisations de performance (lazy loading, code splitting) pour un score Lighthouse optimal.",
    image: "/screenshots/homepage.png",
    technologies: [
      "React 18",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Leaflet",
      "React Leaflet",
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
      "Carte interactive des destinations (Leaflet/OpenStreetMap)",
      "PWA installable avec mode offline",
      "Compteur de vues et statistiques d'engagement",
      "Mode sombre/clair avec transitions fluides",
      "Design responsive mobile-first",
      "Optimisations de performance (lazy loading, code splitting)",
      "SEO optimisé (meta tags, Open Graph, Twitter Cards)",
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
  cv: "/CV-Jeya-Kishan-Karunanithy.pdf",
  bio: "Ancien agent de trafic aérien, j'ai choisi de me reconvertir dans le développement web pour allier logique, créativité et impact concret. Près d'un an d'expérience cumulée avec une formation intensive full-stack et des projets concrets en freelance."
};

