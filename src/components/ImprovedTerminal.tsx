"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon, Terminal, ChevronRight, HelpCircle, Eye, MousePointer, Zap, BookOpen, Image, Play, Briefcase } from "lucide-react";

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
  image: string;
  video?: string;
  technologies: string[];
  github: string;
  live?: string;
}

export default function ImprovedTerminal() {
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

  const projects: Project[] = [
    {
      id: "gamerchallenges",
      title: "GamerChallenges",
      description: "Plateforme de défis gaming avec système de classement et authentification JWT",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/video",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      github: "https://github.com/jeyakishandev/gamerchallenges-front",
      live: "https://gamerchallenges.demo.com"
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
      id: "tutorial",
      command: "tutorial",
      description: "Tutoriel pour débutants",
      category: 'utility',
      action: () => {
        const tutorialOutput = `
TUTORIEL POUR DEBUTANTS

Bienvenue ! Ce portfolio fonctionne comme un terminal informatique.
Pas de panique, c'est plus simple que ca en a l'air !

COMMENT UTILISER:
1. Tapez une commande dans la zone de texte (ex: 'about')
2. Appuyez sur Entree pour executer
3. Utilisez les boutons rapides en bas pour naviguer
4. Activez le mode visuel avec 'visual' pour voir les images

COMMANDES ESSENTIELLES:
• about    → Decouvrir qui je suis
• projects → Voir mes projets avec images
• contact  → Me contacter
• help     → Voir toutes les commandes

MODE VISUEL:
Tapez 'visual' pour activer le mode avec images et videos !

ASTUCE: Cliquez sur les boutons en bas pour naviguer facilement
        `;
        addOutput("tutorial", tutorialOutput);
        setShowTutorial(true);
      }
    },
    {
      id: "visual",
      command: "visual",
      description: "Activer le mode visuel",
      category: 'visual',
      action: () => {
        setShowVisualMode(!showVisualMode);
        const visualOutput = `Mode visuel ${!showVisualMode ? 'activé' : 'désactivé'} ! ${!showVisualMode ? 'Vous pouvez maintenant voir les images et vidéos.' : 'Retour au mode terminal pur.'}`;
        addOutput("output", visualOutput);
      }
    },
    {
      id: "about",
      command: "about",
      description: "À propos de Kishan",
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
      id: "projects",
      command: "projects",
      description: "Mes projets avec images et vidéos",
      category: 'visual',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("projects");
        setShowProjectsModal(true);
        const projectsOutput = `
PROJETS - MODAL OUVERT

Modal des projets charge...
        `;
        addOutput("output", projectsOutput);
      }
    },
    {
      id: "gallery",
      command: "gallery",
      description: "Galerie visuelle de mes projets",
      category: 'visual',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("gallery");
        setShowGalleryModal(true);
        const galleryOutput = `
GALERIE - MODAL OUVERT

Modal de la galerie charge...
        `;
        addOutput("output", galleryOutput);
      }
    },
    {
      id: "skills",
      command: "skills",
      description: "Mes compétences avec graphiques",
      category: 'navigation',
      hasVisualContent: true,
      action: () => {
        closeAllModals();
        setCurrentSection("skills");
        setShowSkillsModal(true);
        const skillsOutput = `
COMPETENCES - MODAL OUVERT

Modal des competences charge...
        `;
        addOutput("output", skillsOutput);
      }
    },
    {
      id: "contact",
      command: "contact",
      description: "Me contacter",
      category: 'navigation',
      action: () => {
        closeAllModals();
        setCurrentSection("contact");
        setShowContactModal(true);
        const contactOutput = `
CONTACT - MODAL OUVERT

Modal de contact charge...
        `;
        addOutput("output", contactOutput);
      }
    },
    {
      id: "experience",
      command: "experience",
      description: "Mon parcours et expériences",
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
      id: "form",
      command: "form",
      description: "Formulaire de contact",
      category: 'navigation',
      action: () => {
        closeAllModals();
        setCurrentSection("form");
        setShowForm(true);
        const formOutput = `
FORMULAIRE DE CONTACT

Formulaire interactif charge... Tapez 'send' pour envoyer une fois rempli.
        `;
        addOutput("output", formOutput);
      }
    },
    {
      id: "send",
      command: "send",
      description: "Envoyer le formulaire de contact",
      category: 'utility',
      action: () => {
        if (!formData.name || !formData.email || !formData.message) {
          const errorOutput = `
ERREUR - FORMULAIRE INCOMPLET

Veuillez remplir au minimum:
├── Nom: ${formData.name || '[OBLIGATOIRE]'}
├── Email: ${formData.email || '[OBLIGATOIRE]'}
└── Message: ${formData.message || '[OBLIGATOIRE]'}

Utilisez les champs ci-dessous pour remplir le formulaire.
          `;
          addOutput("error", errorOutput);
          return;
        }

        const sendOutput = `
ENVOI DU FORMULAIRE

Formulaire envoye avec succes !

DETAILS DU MESSAGE:
├── Nom: ${formData.name}
├── Email: ${formData.email}
├── Sujet: ${formData.subject || 'Non specifie'}
├── Collaboration: ${formData.collaboration || 'Non specifie'}
├── Budget: ${formData.budget || 'Non specifie'}
└── Delai: ${formData.timeline || 'Non specifie'}

MESSAGE:
${formData.message}

Merci pour votre message. Je vous reponds dans les 24h.

Votre message a ete transmis a: k.jeyakishan@gmail.com
        `;
        addOutput("output", sendOutput);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          collaboration: '',
          budget: '',
          timeline: ''
        });
        setShowForm(false);
      }
    },
    {
      id: "shortcuts",
      command: "shortcuts",
      description: "Raccourcis clavier",
      category: 'utility',
      action: () => {
        const shortcutsOutput = `
⌨️ RACCOURCIS CLAVIER

Navigation:
├── Ctrl + ↑/↓    - Parcourir l'historique
├── Tab           - Autocomplétion
├── Ctrl + C      - Arrêter la commande
└── Ctrl + L      - Effacer le terminal

Mode visuel:
├── Ctrl + V      - Basculer mode visuel
├── Ctrl + G      - Ouvrir galerie
├── Ctrl + H      - Afficher l'aide
└── Échap         - Fermer les modales

🎯 ASTUCE: Gardez Ctrl+V appuyé pour rester en mode visuel !
        `;
        addOutput("output", shortcutsOutput);
      }
    },
    // Commandes de base
    {
      id: "ls",
      command: "ls",
      description: "Liste les sections disponibles",
      category: 'info',
      action: () => {
        const lsOutput = `
📁 SECTIONS DISPONIBLES:

about/         À propos de Kishan
skills/        Compétences techniques  
projects/      Projets réalisés
experience/    Parcours professionnel
contact/       Informations de contact
gallery/       Galerie visuelle
tutorial/      Guide d'utilisation

💡 Utilisez: [nom_section] pour naviguer
🎨 Tapez 'visual' pour le mode images !
        `;
        addOutput("output", lsOutput);
      }
    },
    {
      id: "whoami",
      command: "whoami",
      description: "Qui suis-je ?",
      category: 'info',
      action: () => {
        const whoamiOutput = `kishan@portfolio:~$ Je suis Jeya Kishan, développeur full-stack passionné par l'innovation et les technologies modernes! 🚀`;
        addOutput("output", whoamiOutput);
      }
    },
    {
      id: "pwd",
      command: "pwd",
      description: "Section actuelle",
      category: 'info',
      action: () => {
        const pwdOutput = `/portfolio/${currentSection}`;
        addOutput("output", pwdOutput);
      }
    },
    {
      id: "theme",
      command: "theme",
      description: "Changer le thème",
      category: 'utility',
      action: () => {
        setDarkMode(!darkMode);
        const themeOutput = `Thème changé vers: ${!darkMode ? 'dark' : 'light'} mode 🌓`;
        addOutput("output", themeOutput);
      }
    },
    {
      id: "clear",
      command: "clear",
      description: "Efface le terminal",
      category: 'utility',
      action: () => {
        setOutputHistory([]);
      }
    }
  ];

  const addOutput = (type: 'command' | 'output' | 'error' | 'tutorial' | 'visual', content: string, data?: any) => {
    setOutputHistory(prev => [...prev, { type, content, data }]);
  };

  // Composant Skeleton pour le loading des modales
  const ModalSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className={`h-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-3/4`}></div>
      <div className={`h-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full`}></div>
      <div className={`h-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-5/6`}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className={`h-20 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
        <div className={`h-20 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
      </div>
    </div>
  );


  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setCommandHistory(prev => [...prev, trimmedCmd]);
    addOutput("command", `kishan@portfolio:~$ ${trimmedCmd}`);
    
    // Ajouter un loading state
    setIsLoading(true);
    addOutput("output", "⏳ Chargement...");

    const foundCommand = commands.find(c => c.command === trimmedCmd);
    if (foundCommand) {
      // Simuler un délai de chargement
      setTimeout(() => {
        foundCommand.action();
        setIsLoading(false);
      }, 800);
    } else {
      setIsLoading(false);
      addOutput("error", `❌ Commande non trouvée: ${trimmedCmd}
💡 Tapez 'help' pour voir les commandes disponibles
🎯 Ou essayez 'tutorial' pour un guide débutant`);
    }

    setCurrentCommand("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleAutocomplete();
    } else if (e.ctrlKey && e.key === "v") {
      e.preventDefault();
      executeCommand("visual");
    } else if (e.ctrlKey && e.key === "g") {
      e.preventDefault();
      executeCommand("gallery");
    } else if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      executeCommand("help");
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      executeCommand("clear");
    }
  };

  const handleAutocomplete = () => {
    const matchingCommand = commands.find(c => c.command.startsWith(currentCommand));
    if (matchingCommand) {
      setCurrentCommand(matchingCommand.command);
    }
  };

  const quickCommands = ['about', 'skills', 'projects', 'contact', 'experience', 'form', 'gallery'];

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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-green-400' : 'bg-gray-100 text-gray-800'} font-mono`}>
      {/* Header Terminal */}
      <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border-b px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm">Terminal - Portfolio Kishan</span>
          {showVisualMode && (
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded"
            >
              MODE VISUEL
            </motion.span>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded transition-all duration-200 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            title="Changer le thème"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <button
            onClick={() => executeCommand("tutorial")}
            className={`p-2 rounded ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            title="Tutoriel"
          >
            <HelpCircle size={16} />
          </button>
          <button
            onClick={() => executeCommand("visual")}
            className={`p-2 rounded ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            title="Mode visuel"
          >
            <Eye size={16} />
          </button>
          <a href="https://github.com/jeyakishandev" target="_blank" className={`p-2 rounded ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}>
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/jeya-kishan-karunanithy" target="_blank" className={`p-2 rounded ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}>
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 max-w-6xl mx-auto pb-24">
        <div className="space-y-2">
          <AnimatePresence>
            {outputHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`whitespace-pre-wrap ${
                  item.type === 'command' 
                    ? `${darkMode ? 'text-green-300' : 'text-green-600'}`
                    : item.type === 'error'
                    ? `${darkMode ? 'text-red-400' : 'text-red-600'}`
                    : item.type === 'tutorial'
                    ? `${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                    : `${darkMode ? 'text-green-400' : 'text-gray-700'}`
                }`}
              >
                {item.content}
                
                {/* Affichage visuel */}
                {item.type === 'visual' && item.data && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 border rounded-lg"
                  >
                    {item.data.type === 'gallery' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.data.projects.map((project: Project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <div className="aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center">
                              <Image size={48} className="text-gray-400" />
                              <span className="ml-2 text-sm">Image: {project.title}</span>
                            </div>
                            <h3 className="font-bold">{project.title}</h3>
                            <p className="text-sm opacity-70">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.technologies.map(tech => (
                                <span key={tech} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {item.data.type === 'portrait' && (
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Image size={64} className="text-gray-400" />
                        </div>
                        <p className="text-sm">Portrait de Jeya Kishan</p>
                      </div>
                    )}
                    
                    {item.data.type === 'skills-chart' && (
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-center mb-4">Graphiques Interactifs</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white font-bold">95%</span>
                            </div>
                            <p className="text-sm">React</p>
                          </div>
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white font-bold">90%</span>
                            </div>
                            <p className="text-sm">TypeScript</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center gap-2">
            <span className={darkMode ? 'text-green-300' : 'text-green-600'}>kishan@portfolio:~$</span>
            <div className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`flex-1 bg-transparent outline-none ${darkMode ? 'text-green-400' : 'text-gray-800'}`}
                placeholder="Tapez une commande ou utilisez les boutons..."
                autoComplete="off"
                disabled={isLoading}
              />
              {isLoading ? (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-yellow-400"
                >
                  ⏳
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-5 bg-green-400"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire de Contact */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Formulaire de Contact
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nom *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                placeholder="votre@email.com"
              />
            </div>

            {/* Sujet */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Sujet
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                placeholder="Sujet de votre message"
              />
            </div>

            {/* Type de collaboration */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Type
              </label>
              <select
                value={formData.collaboration}
                onChange={(e) => setFormData({...formData, collaboration: e.target.value})}
                className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              >
                <option value="">Sélectionnez...</option>
                <option value="CDI/CDD">CDI/CDD</option>
                <option value="Freelance">Freelance</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Échange">Échange</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div className="mt-6">
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Message *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              placeholder="Décrivez votre projet ou votre demande..."
            />
          </div>

          {/* Boutons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                setFormSubmitting(true);
                executeCommand("send");
                setTimeout(() => setFormSubmitting(false), 2000);
              }}
              disabled={formSubmitting}
              className={`px-6 py-2 rounded flex items-center gap-2 font-medium ${
                formSubmitting 
                  ? `${darkMode ? 'bg-gray-600' : 'bg-gray-400'} cursor-not-allowed opacity-75`
                  : darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {formSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className={`px-6 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium`}
            >
              Annuler
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal About */}
      <AnimatePresence>
        {showAboutModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-4xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              À Propos de Kishan
            </h2>
            <button
              onClick={() => setShowAboutModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>
          
          {modalLoading === "about" ? (
            <ModalSkeleton />
          ) : (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo de profil */}
            <div className="flex justify-center">
              <img 
                src="/avatar.svg" 
                alt="Kishan" 
                className="w-48 h-48 rounded-full border-4 border-green-400"
              />
            </div>

            {/* Informations */}
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-green-400' : 'text-blue-600'}`}>
                  Jeya Kishan Karunanithy
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Développeur Full-Stack JavaScript/TypeScript
                </p>
              </div>

              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
                  Mon Parcours
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Après une reconversion réussie et l'obtention du diplôme Développeur Web & Web Mobile, 
                  j'ai développé plusieurs projets variés qui illustrent ma polyvalence.
                </p>
              </div>

              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-gray-700'}`}>
                  Spécialisation IA
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  En parallèle, je m'intéresse aux agents IA et à la création d'applications innovantes 
                  capables de résoudre des problèmes concrets.
                </p>
              </div>
            </div>
          </div>

          {/* Projets réalisés */}
          <div className="mt-8">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Projets Réalisés
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                  GamerChallenges
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Plateforme collaborative autour des défis gaming (React/TS + Express/Sequelize)
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                  DevBoard
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Application de gestion de projets pensée pour les développeurs
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                  LuxTime
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Site e-commerce dédié à la vente de montres de luxe
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                  À la conquête du monde
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Blog de voyage mêlant contenu, design et expérience utilisateur
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs */}
          <div className="mt-8">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mes Objectifs
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  🏢 Entreprise (CDI/CDD)
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Mettre mes compétences au service de projets ambitieux, progresser au contact 
                  d'équipes expérimentées et contribuer à des solutions durables.
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
                <h5 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                  💼 Freelance/Entrepreneuriat
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Accompagner mes clients dans la réalisation de sites et d'applications modernes, 
                  tout en développant mes propres projets digitaux.
                </p>
              </div>
            </div>
          </div>
            </>
          )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Skills */}
      <AnimatePresence>
        {showSkillsModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-5xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mes Compétences Techniques
            </h2>
            <button
              onClick={() => setShowSkillsModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>


          <div className="mb-6">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Voici les technologies et outils que j'utilise pour concevoir des sites et applications 
              modernes, performants et adaptés aux besoins de mes clients et partenaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Front-End */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                🖥️ Front-End
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• React.js, Next.js</li>
                <li>• TypeScript, JavaScript (ES6+)</li>
                <li>• HTML5 / CSS3 (Flexbox, Grid)</li>
                <li>• Tailwind CSS, Bootstrap</li>
              </ul>
            </div>

            {/* Back-End */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                ⚙️ Back-End
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Node.js avec Express</li>
                <li>• API REST (création, sécurisation)</li>
                <li>• Sequelize / Prisma</li>
                <li>• Intégration APIs tierces</li>
              </ul>
            </div>

            {/* Bases de données */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                🗄️ Bases de données
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• PostgreSQL, MySQL</li>
                <li>• Conception et modélisation</li>
                <li>• MCD/MLD, Merise</li>
                <li>• Optimisation requêtes</li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                🔒 Sécurité & Auth
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• JWT (JSON Web Token)</li>
                <li>• Argon2 (hachage mots de passe)</li>
                <li>• Gestion des rôles</li>
                <li>• Autorisations granulaires</li>
              </ul>
            </div>

            {/* Outils & Workflow */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                🚀 Outils & Workflow
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Git / GitHub (workflow pro)</li>
                <li>• Docker (conteneurs)</li>
                <li>• CI/CD (Vercel, Railway)</li>
                <li>• Agile / Scrum</li>
              </ul>
            </div>

            {/* Innovation */}
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                🤖 Innovation & IA
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Agents IA (prototypage)</li>
                <li>• Intégration APIs IA</li>
                <li>• Applications SaaS</li>
                <li>• Solutions sur mesure</li>
              </ul>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Projects */}
      <AnimatePresence>
        {showProjectsModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mes Projets
            </h2>
            <button
              onClick={() => setShowProjectsModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          <div className="mb-6">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Voici une sélection de projets que j'ai réalisés ou imaginés. Les projets concrets sont 
              déjà développés, tandis que les projets exploratoires représentent ma volonté d'innover.
            </p>
          </div>

          {/* Projets Concrets */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              🚀 Projets Concrets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => {
                    setSelectedProject(project);
                    setShowProjectDetailModal(true);
                  }}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                    <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                      {project.title}
                    </h4>
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-200 hover:bg-green-300'}`}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projets Exploratoires */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-gray-800'}`}>
              🔬 Projets Exploratoires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    Agents IA
                  </h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Idée de créer des assistants intelligents pour automatiser certaines tâches.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    SnackNow
                  </h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Concept d'application géolocalisée pour trouver des snacks/restaurants ouverts en temps réel.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    PlanMyTrip AI
                  </h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Idée de planificateur de voyages courts automatisé par IA.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    AdminZero
                  </h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Concept d'assistant IA pour simplifier les démarches administratives.
                </p>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Gallery */}
      <AnimatePresence>
        {showGalleryModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Galerie de Projets
            </h2>
            <button
              onClick={() => setShowGalleryModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => {
                  closeAllModals();
                  setSelectedProject(project);
                  setShowProjectDetailModal(true);
                }}
                className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🖥️</div>
                    <p className="text-sm opacity-90">{project.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-200 hover:bg-green-300'}`}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Contact */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-4xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Contact
            </h2>
            <button
              onClick={() => setShowContactModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          <div className="mb-6">
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Vous souhaitez collaborer avec moi ou en savoir plus sur mon profil ?<br/>
              Je suis disponible pour un CDI/CDD, des missions freelance, ou simplement pour échanger autour de nouvelles idées.
            </p>
          </div>

          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <div className="mb-2 flex justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457l12 9 12-9z"/>
                  <path fill="#EA4335" d="M12 16.64l6.545-4.91V2.636A1.636 1.636 0 0 0 16.909 1H7.091A1.636 1.636 0 0 0 5.455 2.636v9.094L12 16.64z"/>
                </svg>
              </div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                Gmail
              </h3>
              <a 
                href="mailto:k.jeyakishan@gmail.com"
                className={`text-xs ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} underline`}
              >
                k.jeyakishan@gmail.com
              </a>
            </div>

            <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <div className="mb-2 flex justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/jeya-kishan-karunanithy"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} underline`}
              >
                jeya-kishan-karunanithy
              </a>
            </div>

            <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <div className="mb-2 flex justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path fill={darkMode ? "#ffffff" : "#333333"} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                GitHub
              </h3>
              <a 
                href="https://github.com/jeyakishandev"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} underline`}
              >
                jeyakishandev
              </a>
            </div>
          </div>

          {/* Disponibilités */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mes Disponibilités
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                  🏢 CDI/CDD
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ouvert aux opportunités en entreprise pour des projets ambitieux
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  💼 Missions freelance
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Disponible pour des projets courts ou moyens termes
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                  🤝 Collaborations
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Toujours partant pour des projets collaboratifs innovants
                </p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  💡 Échanges d'idées
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Bienvenue pour discuter de nouvelles idées et concepts
                </p>
              </div>
            </div>
          </div>

          {/* Comment me contacter */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Comment Me Contacter
            </h3>
            <div className={`p-4 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Formulaire interactif :</strong> Utilisez le bouton "form" ci-dessous</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
                  <span><strong>Email direct :</strong> k.jeyakishan@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></span>
                  <span><strong>LinkedIn :</strong> Pour les opportunités professionnelles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></span>
                  <span><strong>GitHub :</strong> Pour voir mes projets et contributions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Message de fin */}
          <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
            <p className={`text-center ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
              <strong>Je réponds rapidement à tous les messages.</strong><br/>
              N'hésitez pas à me contacter pour discuter de votre projet !
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                closeAllModals();
                setShowForm(true);
              }}
              className={`px-6 py-2 rounded ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white font-medium`}
            >
              Ouvrir le formulaire
            </button>
            <button
              onClick={() => setShowContactModal(false)}
              className={`px-6 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium`}
            >
              Fermer
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Experience */}
      <AnimatePresence>
        {showExperienceModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-5xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mon Parcours & Expériences
            </h2>
            <button
              onClick={() => setShowExperienceModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          <div className="mb-6">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Découvrez mon parcours de reconversion et mes expériences professionnelles dans le développement web.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              🎓 Formation
            </h3>
            <div className={`p-6 rounded-lg mb-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-800' : 'bg-blue-100'}`}>
                  <div className="text-2xl">🎓</div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    Développeur Web & Web Mobile – O'clock (2024–2025)
                  </h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Spécialisation JavaScript Full-Stack (React.js, Node.js, TypeScript, PostgreSQL).
                  </p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Projet de fin de formation :</strong> GamerChallenges, une plateforme collaborative de défis gaming avec authentification sécurisée, gestion de challenges et déploiement Vercel/Railway.
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Méthodologie :</strong> Travail en méthode Agile/Scrum avec sprints et gestion d'équipe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expériences Professionnelles */}
          <div className="mb-8">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              💼 Expériences Professionnelles
            </h3>
            
            {/* Freelance Makara Media */}
            <div className={`p-6 rounded-lg mb-4 ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-800' : 'bg-green-100'}`}>
                  <div className="text-2xl">🚀</div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                    Développeur Full-Stack Freelance – Makara Media (2025)
                  </h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Prolongation après mon stage pour refonte complète d'une plateforme SaaS de gestion multi-réseaux sociaux.
                  </p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Technologies :</strong> Conception d'une architecture scalable et modulaire (Node.js/TypeScript + React 19).
                  </p>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Gestion multi-organisations avec rôles et permissions</li>
                    <li>• Intégration OAuth2 avec Facebook/Instagram/LinkedIn</li>
                    <li>• Système de planification et d'analytics avancés</li>
                    <li>• Mise en place d'un système d'abonnement Stripe</li>
                    <li>• Intégration de fonctionnalités premium avec crédits AI</li>
                    <li>• Tests 90%+ de couverture, CI/CD, sécurité avancée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stage Makara Media */}
            <div className={`p-6 rounded-lg mb-4 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-800' : 'bg-purple-100'}`}>
                  <div className="text-2xl">🎯</div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    Stage Développeur Web – Makara Media (2025)
                  </h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Refonte du dashboard interne avec React + TypeScript et intégration de composants dynamiques.
                  </p>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Composants : statistiques sociales, publications à venir, carrousel d'actualités</li>
                    <li>• Collaboration front/back avec Symfony (PHP) et API REST</li>
                    <li>• Participation aux choix UI/UX via maquettes Figma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expériences antérieures */}
            <div className={`p-6 rounded-lg mb-4 ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-800' : 'bg-orange-100'}`}>
                  <div className="text-2xl">🛒</div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                    Équipier Polyvalent – Monoprix (avant reconversion)
                  </h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Gestion de stock, mise en rayon, relation client.
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Compétences développées :</strong> Organisationnelles et travail en équipe.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg mb-4 ${darkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-800' : 'bg-cyan-100'}`}>
                  <div className="text-2xl">✈️</div>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>
                    Agent de Trafic – Aéroport (avant reconversion)
                  </h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Gestion opérationnelle et coordination des vols.
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <strong>Compétences développées :</strong> Sens de la responsabilité, rigueur et réactivité dans un environnement exigeant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compétences Clés */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              🎯 Compétences Clés Développées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  🚀 Développement Full-Stack
                </h4>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Architecture scalable Node.js/TypeScript + React 19</li>
                  <li>• Gestion multi-organisations avec rôles complexes</li>
                  <li>• Intégration OAuth2 (Facebook, Instagram, LinkedIn)</li>
                  <li>• Systèmes d'abonnement Stripe et paiements</li>
                  <li>• Tests automatisés 90%+ de couverture</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>
                  🎨 UI/UX & Collaboration
                </h4>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Composants React dynamiques et interactifs</li>
                  <li>• Design systems cohérents (Figma)</li>
                  <li>• Collaboration front/back avec Symfony/PHP</li>
                  <li>• Méthodologies Agile/Scrum et gestion d'équipe</li>
                  <li>• CI/CD et bonnes pratiques de développement</li>
                </ul>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Détail Projet */}
      <AnimatePresence>
        {showProjectDetailModal && selectedProject && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              {selectedProject.title}
            </h2>
            <button
              onClick={() => setShowProjectDetailModal(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>

          {/* Image/Vidéo du projet */}
          <div className="mb-8">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🖥️</div>
                <p className="text-lg opacity-90">{selectedProject.title}</p>
                <p className="text-sm opacity-75 mt-2">Screenshot du projet</p>
              </div>
            </div>
          </div>

          {/* Description complète */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Description du Projet
            </h3>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {selectedProject.description}
              </p>
            </div>
          </div>

          {/* Technologies utilisées */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Technologies & Outils
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fonctionnalités clés */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Fonctionnalités Clés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.id === 'gamerchallenges' && (
                <>
                  <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>🎮 Système de Défis</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Création et participation à des défis gaming avec classement</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🔐 Authentification JWT</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sécurisation des comptes utilisateurs avec tokens</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>📊 Tableau de Bord</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suivi des performances et statistiques personnelles</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>💬 Chat Communautaire</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Communication entre joueurs et partage d'expériences</p>
                  </div>
                </>
              )}
              {selectedProject.id === 'devboard' && (
                <>
                  <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>📋 Gestion Kanban</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tableaux de bord pour organiser les tâches de développement</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>👥 Collaboration</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Travail d'équipe avec assignation de tâches</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>🐳 Docker</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conteneurisation pour un déploiement facile</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>🧪 Tests</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suite de tests avec Vitest pour la qualité</p>
                  </div>
                </>
              )}
              {selectedProject.id === 'luxtime' && (
                <>
                  <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>🛒 E-commerce Complet</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Catalogue, panier et système de commande</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>💳 Paiement Stripe</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Intégration sécurisée des paiements en ligne</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>👤 Gestion Comptes</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Inscription, connexion et historique des commandes</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>📱 Design Responsive</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface adaptée mobile et desktop</p>
                  </div>
                </>
              )}
              {selectedProject.id === 'conquete-monde' && (
                <>
                  <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>📝 Blog MDX</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rédaction d'articles avec composants React</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🌍 Galerie Voyages</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Partage de photos et expériences de voyage</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>⚡ Performance</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Optimisation Next.js avec SSR et ISR</p>
                  </div>
                  <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>🎨 Design Unique</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface personnalisée avec Tailwind CSS</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Défis techniques */}
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Défis Techniques
            </h3>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProject.id === 'gamerchallenges' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Gestion d'état complexe :</strong> Orchestration des défis, utilisateurs et classements en temps réel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Sécurité JWT :</strong> Implémentation d'un système d'authentification robuste avec refresh tokens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Performance :</strong> Optimisation des requêtes PostgreSQL pour les classements dynamiques</span>
                    </li>
                  </>
                )}
                {selectedProject.id === 'devboard' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Drag & Drop :</strong> Implémentation d'une interface Kanban intuitive avec React DnD</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Conteneurisation :</strong> Configuration Docker multi-services pour l'environnement de développement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Tests automatisés :</strong> Couverture de tests complète avec Vitest et React Testing Library</span>
                    </li>
                  </>
                )}
                {selectedProject.id === 'luxtime' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Intégration Stripe :</strong> Configuration sécurisée des paiements avec gestion des webhooks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Gestion d'inventaire :</strong> Synchronisation en temps réel des stocks et disponibilités</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>UX/UI :</strong> Design responsive optimisé pour la conversion e-commerce</span>
                    </li>
                  </>
                )}
                {selectedProject.id === 'conquete-monde' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>MDX avancé :</strong> Intégration de composants React dans le contenu markdown</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>Optimisation images :</strong> Gestion des images de voyage avec Next.js Image</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                      <span><strong>SEO :</strong> Optimisation pour les moteurs de recherche avec métadonnées dynamiques</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Liens et actions */}
          <div className="flex gap-4">
            {selectedProject.github && (
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <span>💻</span>
                Voir le code GitHub
              </a>
            )}
            {selectedProject.live && (
              <a 
                href={selectedProject.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
              >
                <span>🚀</span>
                Voir la démo
              </a>
            )}
            <button
              onClick={() => setShowProjectDetailModal(false)}
              className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Fermer
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Bienvenue/Guide */}
      <AnimatePresence>
        {showWelcomeGuide && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-20 bottom-24 left-4 right-4 max-w-4xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
          >
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Bienvenue sur mon Portfolio Terminal !
            </h2>
            <button
              onClick={() => setShowWelcomeGuide(false)}
              className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Commencer
            </button>
          </div>

          <div className="mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'} mb-4`}>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                🚀 Comment utiliser ce portfolio ?
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Ce portfolio utilise une interface terminal unique ! Tu peux naviguer en tapant des commandes
                ou en utilisant les boutons rapides en bas de l'écran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`text-base font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  💻 Navigation par Commandes
                </h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>about</span>
                    <span>À propos de moi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>skills</span>
                    <span>Mes compétences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>projects</span>
                    <span>Mes projets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>contact</span>
                    <span>Me contacter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>help</span>
                    <span>Liste complète des commandes</span>
                  </li>
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`text-base font-semibold mb-3 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                  🖱️ Navigation par Boutons
                </h4>
                <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Boutons avec icône = Modal visuel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Boutons simples = Action directe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>Clique sur les projets = Détails complets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} mb-4`}>
              <h4 className={`text-base font-semibold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                ⚡ Fonctionnalités Spéciales
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>🎨 Mode Visuel</h5>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Utilise le bouton "Visuel" ou Ctrl+V pour une navigation graphique
                  </p>
                </div>
                <div>
                  <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>📸 Galerie</h5>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Commande "gallery" ou Ctrl+G pour voir tous mes projets visuellement
                  </p>
                </div>
                <div>
                  <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>📝 Formulaire</h5>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Commande "form" pour un formulaire de contact interactif
                  </p>
                </div>
                <div>
                  <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>🌓 Thème</h5>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Bouton soleil/lune en haut pour changer le thème
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
                💡 Conseils pour commencer
              </h4>
              <ul className={`space-y-1 text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Commence par taper <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>about</code> pour me connaître</li>
                <li>• Utilise <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>projects</code> pour voir mes réalisations</li>
                <li>• Clique sur n'importe quel projet pour plus de détails</li>
                <li>• Tape <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>help</code> si tu es perdu</li>
                <li>• Les boutons en bas sont là pour t'aider !</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={() => setShowWelcomeGuide(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
              🚀 Commencer l'exploration
            </button>
            <button
              onClick={() => {
                setShowWelcomeGuide(false);
                // Simuler la commande help
                setTimeout(() => {
                  const helpCommand = commands.find(cmd => cmd.command === 'help');
                  if (helpCommand) {
                    helpCommand.action();
                  }
                }, 100);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
              📖 Voir l'aide complète
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Commands */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 ${darkMode ? 'bg-gray-900/98' : 'bg-white/98'} backdrop-blur border-t border-gray-700 p-4`}>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm opacity-70 mr-2 flex items-center gap-1">
            <MousePointer size={14} />
            Commandes rapides:
          </span>
          {quickCommands.map(cmd => {
            const command = commands.find(c => c.command === cmd);
            return (
              <motion.button
                key={cmd}
                onClick={() => {
                  setLoadingButton(cmd);
                  setCurrentCommand(cmd);
                  executeCommand(cmd);
                  setTimeout(() => setLoadingButton(null), 1000);
                }}
                whileHover={{ scale: loadingButton === cmd ? 1 : 1.05, y: loadingButton === cmd ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={loadingButton === cmd}
                className={`px-3 py-1 text-xs rounded flex items-center gap-1 transition-all duration-200 ${
                  loadingButton === cmd 
                    ? `${darkMode ? 'bg-gray-600' : 'bg-gray-300'} cursor-not-allowed opacity-75`
                    : darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-lg' 
                    : 'bg-gray-200 hover:bg-gray-300 hover:shadow-md'
                } ${command?.hasVisualContent ? 'border border-blue-500 hover:border-blue-400' : ''}`}
                title={command?.description}
              >
                {loadingButton === cmd ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-current border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    {command?.hasVisualContent && <Eye size={12} />}
                    {cmd}
                  </>
                )}
              </motion.button>
            );
          })}
          
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => {
                closeAllModals();
                setShowWelcomeGuide(true);
                executeCommand("tutorial");
              }}
              className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-200 hover:bg-blue-300'} flex items-center gap-1`}
            >
              <BookOpen size={12} />
              Guide
            </button>
            <button
              onClick={() => executeCommand("visual")}
              className={`px-2 py-1 text-xs rounded ${showVisualMode ? 'bg-green-600 text-white' : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} flex items-center gap-1`}
            >
              <Eye size={12} />
              Visuel
            </button>
          </div>
        </div>
        
        {/* Raccourcis clavier */}
        <div className="mt-2 text-xs opacity-50 flex gap-4">
          <span>Ctrl+V: Mode visuel</span>
          <span>Ctrl+G: Galerie</span>
          <span>Ctrl+H: Aide</span>
          <span>Ctrl+L: Effacer</span>
        </div>
      </div>
    </div>
  );
}
