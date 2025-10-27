import { useState, useEffect, useRef, useCallback, useMemo } from "react";

interface Command {
  id: string;
  command: string;
  description: string;
  action: () => void;
  category: 'navigation' | 'info' | 'visual' | 'utility';
  hasVisualContent?: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  video?: string;
  technologies: string[];
  github: string;
  live?: string;
  features?: string[];
  stats?: {
    duration?: string;
    team?: string;
    linesOfCode?: string;
    endpoints?: string;
    components?: string;
  };
}

export function useTerminal() {
  // Tous les états du fichier original
  const [darkMode, setDarkMode] = useState(true);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputHistory, setOutputHistory] = useState<Array<{ type: 'command' | 'output' | 'error' | 'tutorial' | 'visual', content: string, data?: any }>>([]);
  const [currentSection, setCurrentSection] = useState("home");
  const [showTutorial, setShowTutorial] = useState(true);
  const [showVisualMode, setShowVisualMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showProjectDetailModal, setShowProjectDetailModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showWelcomeGuide, setShowWelcomeGuide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [modalLoading, setModalLoading] = useState<string | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Fonction pour fermer toutes les modales
  const closeAllModals = () => {
    setShowAboutModal(false);
    setShowSkillsModal(false);
    setShowProjectsModal(false);
    setShowGalleryModal(false);
    setShowContactModal(false);
    setShowExperienceModal(false);
    setShowProjectDetailModal(false);
    setShowWelcomeGuide(false);
    setShowForm(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaboration: '',
    budget: '',
    timeline: ''
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // Données des projets - EXACT du fichier original
  const projects: Project[] = [
    {
      id: "gamerchallenges",
      title: "GamerChallenges",
      description: "Plateforme communautaire de défis gaming où les joueurs créent et participent à des challenges basés sur YouTube avec système de classement",
      fullDescription: "GamerChallenges est une plateforme web communautaire permettant aux joueurs de créer, participer et suivre des défis vidéo ludiques. Les utilisateurs peuvent soumettre leurs créations vidéo, participer aux challenges et grimper dans le classement. Projet développé en équipe de 4, architecture monorepo (React + Express + PostgreSQL). Authentification JWT, upload de fichiers, système de points, leaderboard.",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/video",
      technologies: ["React 19", "TypeScript", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Argon2", "Zustand", "Swagger", "Monorepo"],
      github: "https://github.com/jeyakishandev/gamerchallenges-front",
      live: "https://gamer-front-kishankarunanithys-projects.vercel.app",
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
      id: "devboard",
      title: "DevBoard",
      description: "Board collaboratif style Kanban pour équipes de développement",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Docker", "Vitest"],
      github: "https://github.com/jeyakishandev",
      live: "https://devboard.demo.com"
    },
    {
      id: "luxtime",
      title: "LuxTime",
      description: "Site e-commerce dédié à la vente de montres de luxe avec panier et paiement",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/jeyakishandev/luxtime",
      live: "https://luxtime.demo.com"
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

  // Fonction addOutput - EXACT du fichier original
  const addOutput = (type: 'command' | 'output' | 'error' | 'tutorial' | 'visual', content: string, data?: any) => {
    setOutputHistory(prev => [...prev, { type, content, data }]);
  };

  // Toutes les commandes - EXACT du fichier original
  const commands: Command[] = [
    {
      id: "help",
      command: "help",
      description: "Affiche toutes les commandes disponibles",
      category: 'utility',
      action: () => {
        const helpOutput = `
╔══════════════════════════════════════════════════════════════╗
║                    COMMANDES DISPONIBLES                     ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║ NAVIGATION:                                                  ║
║ ├── about         - A propos de Kishan                      ║
║ ├── skills        - Mes competences techniques              ║
║ ├── projects      - Mes projets (avec images/videos)        ║
║ ├── experience    - Mon parcours                            ║
║ ├── contact       - Me contacter                            ║
║ └── form          - Formulaire de contact                   ║
║                                                              ║
║ INFORMATIONS:                                                ║
║ ├── whoami        - Qui suis-je ?                           ║
║ ├── pwd           - Section actuelle                        ║
║ └── ls            - Liste les sections                      ║
║                                                              ║
║ VISUEL:                                                      ║
║ ├── visual        - Mode visuel (pour voir les images)      ║
║ ├── gallery       - Galerie de mes projets                  ║
║ └── demo          - Demo interactive                        ║
║                                                              ║
║ UTILITAIRES:                                                 ║
║ ├── tutorial      - Tutoriel pour debutants                 ║
║ ├── theme         - Changer le theme (dark/light)           ║
║ ├── clear         - Effacer le terminal                     ║
║ ├── send          - Envoyer le formulaire de contact        ║
║ └── shortcuts     - Raccourcis clavier                      ║
║                                                              ║
║ ASTUCE: Tapez Tab pour l'autocompletion                     ║
║ UTILISEZ 'visual' pour le mode avec images !                ║
╚══════════════════════════════════════════════════════════════╝
        `;
        addOutput("output", helpOutput);
      }
    },
    {
      id: "about",
      command: "about",
      description: "A propos de Kishan",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setModalLoading("about");
        setCurrentSection("about");
        setShowAboutModal(true);
        const aboutOutput = `
A PROPOS - MODAL OUVERT

Modal de presentation charge...
        `;
        addOutput("output", aboutOutput);
        setTimeout(() => setModalLoading(null), 600);
      }
    },
    {
      id: "skills",
      command: "skills",
      description: "Mes competences techniques",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setModalLoading("skills");
        setCurrentSection("skills");
        setShowSkillsModal(true);
        const skillsOutput = `
SKILLS - MODAL OUVERT

Modal competences charge...
        `;
        addOutput("output", skillsOutput);
        setTimeout(() => setModalLoading(null), 600);
      }
    },
    {
      id: "projects",
      command: "projects",
      description: "Mes projets (avec images/videos)",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("projects");
        setShowProjectsModal(true);
        const projectsOutput = `
PROJECTS - MODAL OUVERT

Modal projets charge...
        `;
        addOutput("output", projectsOutput);
      }
    },
    {
      id: "experience",
      command: "experience",
      description: "Mon parcours et experiences",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("experience");
        setShowExperienceModal(true);
        const experienceOutput = `
EXPERIENCE - MODAL OUVERT

Modal d'experience charge...
        `;
        addOutput("output", experienceOutput);
      }
    },
    {
      id: "contact",
      command: "contact",
      description: "Informations de contact",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("contact");
        setShowContactModal(true);
        const contactOutput = `
CONTACT - MODAL OUVERT

Modal contact charge...
        `;
        addOutput("output", contactOutput);
      }
    },
    {
      id: "form",
      command: "form",
      description: "Formulaire de contact interactif",
      category: 'utility',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("form");
        setShowForm(true);
        const formOutput = `
FORM - MODAL OUVERT

Formulaire de contact charge...
        `;
        addOutput("output", formOutput);
      }
    },
    {
      id: "cv",
      command: "cv",
      description: "Télécharger mon CV",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        setModalLoading("cv");
        const cvOutput = `
📄 MON CURRICULUM VITAE

Mon CV n'est pas encore disponible, mais sera bientôt ajouté !

En attendant, tu peux découvrir :
• Mon parcours avec la commande 'experience'
• Mes compétences avec 'skills'  
• Mes projets avec 'projects'
• Me contacter avec 'form'

Le CV sera disponible prochainement ! 🚀
        `;
        addOutput("output", cvOutput);
        setCurrentSection("cv");
        setTimeout(() => setModalLoading(null), 600);
      }
    },
    {
      id: "gallery",
      command: "gallery",
      description: "Galerie de mes projets",
      category: 'visual',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("gallery");
        setShowGalleryModal(true);
        const galleryOutput = `
GALLERY - MODAL OUVERT

Galerie charge...
        `;
        addOutput("output", galleryOutput);
      }
    },
    {
      id: "clear",
      command: "clear",
      description: "Effacer le terminal",
      category: 'utility',
      action: () => {
        setOutputHistory([]);
        setCommandHistory([]);
      }
    },
    {
      id: "theme",
      command: "theme",
      description: "Changer le theme (dark/light)",
      category: 'utility',
      action: () => {
        setDarkMode(!darkMode);
        const themeOutput = `
THEME CHANGE

Theme ${darkMode ? 'clair' : 'sombre'} active
        `;
        addOutput("output", themeOutput);
      }
    },
    {
      id: "tutorial",
      command: "tutorial",
      description: "Tutoriel pour debutants",
      category: 'utility',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setShowWelcomeGuide(true);
        const tutorialOutput = `
TUTORIAL - MODAL OUVERT

Guide d'utilisation charge...
        `;
        addOutput("output", tutorialOutput);
      }
    },
    {
      id: "send",
      command: "send",
      description: "Envoyer le formulaire de contact",
      category: 'utility',
      action: () => {
        // Validation renforcée
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/;
        
        if (!formData.name || !formData.email || !formData.message) {
          const errorOutput = `
ERREUR - FORMULAIRE INCOMPLET

Veuillez remplir tous les champs obligatoires.
Utilisez 'form' pour ouvrir le formulaire.
          `;
          addOutput("error", errorOutput);
          return;
        }

        if (!nameRegex.test(formData.name)) {
          const errorOutput = `
ERREUR - NOM INVALIDE

Le nom doit contenir entre 2 et 50 caractères (lettres uniquement).
          `;
          addOutput("error", errorOutput);
          return;
        }

        if (!emailRegex.test(formData.email)) {
          const errorOutput = `
ERREUR - EMAIL INVALIDE

Veuillez entrer une adresse email valide.
Exemple: exemple@domaine.com
          `;
          addOutput("error", errorOutput);
          return;
        }

        if (formData.message.length < 10 || formData.message.length > 1000) {
          const errorOutput = `
ERREUR - MESSAGE INVALIDE

Le message doit contenir entre 10 et 1000 caractères.
          `;
          addOutput("error", errorOutput);
          return;
        }

        setFormSubmitting(true);
        const sendOutput = `
ENVOI EN COURS...

Nom: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

Simulation d'envoi...
        `;
        addOutput("output", sendOutput);

        setTimeout(() => {
          const successOutput = `
✅ MESSAGE ENVOYE AVEC SUCCES !

Votre message a ete envoye. Je vous repondrai dans les plus brefs delais.

Merci pour votre interet !
          `;
          addOutput("output", successOutput);
          setFormSubmitting(false);
          setFormData({ name: '', email: '', subject: '', message: '', collaboration: '', budget: '', timeline: '' });
        }, 2000);
      }
    }
  ];

  // Optimisation avec useMemo
  const quickCommands = useMemo(() => 
    ['about', 'skills', 'projects', 'experience', 'cv', 'contact', 'form', 'gallery'], 
    []
  );

  // Fonction executeCommand - Optimisée avec useCallback
  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setCommandHistory(prev => [...prev, trimmedCmd]);
    addOutput("command", `kishan@portfolio:~$ ${trimmedCmd}`);
    
    setIsLoading(true);
    addOutput("output", "⏳ Chargement...");

    const foundCommand = commands.find(c => c.command === trimmedCmd);
    if (foundCommand) {
      setTimeout(() => {
        foundCommand.action();
        setIsLoading(false);
      }, 800);
    } else {
      setIsLoading(false);
      addOutput("error", `❌ Commande non trouvee: ${trimmedCmd}
💡 Tapez 'help' pour voir les commandes disponibles
🎯 Ou essayez 'tutorial' pour un guide debutant`);
    }

    setCurrentCommand("");
  }, [commands, addOutput]);

  // Fonction handleKeyPress - Optimisée avec useCallback
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        setCurrentCommand(commandHistory[commandHistory.length - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCurrentCommand("");
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setOutputHistory([]);
      setCommandHistory([]);
    }
  }, [currentCommand, commandHistory, executeCommand]);

  // Effets - EXACT du fichier original
  useEffect(() => {
    const welcomeOutput = `
╔══════════════════════════════════════════════════════════════╗
║                    KISHAN'S TERMINAL                        ║
║                                                              ║
║  Bienvenue dans mon portfolio interactif !                  ║
║                                                              ║
║  > Tapez 'help' pour voir toutes les commandes              ║
║  > Tapez 'tutorial' pour un guide debutant                  ║
║  > Tapez 'visual' pour le mode avec images                  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

kishan@portfolio:~$
    `;
    addOutput("output", welcomeOutput);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentCommand]);

  // Retour de tous les états et fonctions
  return {
    // États de base
    darkMode,
    setDarkMode,
    currentCommand,
    setCurrentCommand,
    commandHistory,
    outputHistory,
    currentSection,
    showTutorial,
    setShowTutorial,
    showVisualMode,
    setShowVisualMode,
    isTyping,
    currentProject,
    showForm,
    setShowForm,
    
    // États des modales
    showAboutModal,
    setShowAboutModal,
    showSkillsModal,
    setShowSkillsModal,
    showProjectsModal,
    setShowProjectsModal,
    showGalleryModal,
    setShowGalleryModal,
    showContactModal,
    setShowContactModal,
    showExperienceModal,
    setShowExperienceModal,
    showProjectDetailModal,
    setShowProjectDetailModal,
    selectedProject,
    setSelectedProject,
    showWelcomeGuide,
    setShowWelcomeGuide,
    
    // États de loading
    isLoading,
    setIsLoading,
    loadingButton,
    setLoadingButton,
    modalLoading,
    setModalLoading,
    formSubmitting,
    setFormSubmitting,
    
    // États du formulaire
    formData,
    setFormData,
    
    // Références
    inputRef,
    
    // Données
    commands,
    quickCommands,
    projects,
    
    // Fonctions
    closeAllModals,
    addOutput,
    executeCommand,
    handleKeyPress,
  };
}
