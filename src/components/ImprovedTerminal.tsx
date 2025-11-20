"use client";
import { AnimatePresence } from "framer-motion";
import { Github, Mail, Sun, Moon, HelpCircle, MousePointer, Zap, BookOpen, Image, Play, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import AboutModal from "@/components/modals/AboutModal";
import SkillsModal from "@/components/modals/SkillsModal";
import ProjectsModal from "@/components/modals/ProjectsModal";
import FormModal from "@/components/modals/FormModal";
import GalleryModal from "@/components/modals/GalleryModal";
import ContactModal from "@/components/modals/ContactModal";
import ExperienceModal from "@/components/modals/ExperienceModal";
import ProjectDetailModal from "@/components/modals/ProjectDetailModal";
import WelcomeGuideModal from "@/components/modals/WelcomeGuideModal";

export default function ImprovedTerminal() {
  const {
    // États de base
    darkMode,
    setDarkMode,
    currentCommand,
    setCurrentCommand,
    outputHistory,
    showVisualMode,
    setShowVisualMode,
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
    loadingButton,
    setLoadingButton,
    modalLoading,
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
    executeCommand,
    handleKeyPress,
  } = useTerminal();

  const handleCommandClick = async (cmd: string) => {
    setLoadingButton(cmd);
    setCurrentCommand(cmd);
    await executeCommand(cmd);
    setTimeout(() => setLoadingButton(null), 1000);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleShowTutorial = () => {
    closeAllModals();
    setShowWelcomeGuide(true);
  };

  // Gestion globale de Escape pour fermer les modales
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeAllModals]);

  // Mapping des commandes avec labels explicites pour non-tech
  const commandLabels: Record<string, { label: string; emoji: string; category: string }> = {
    'about': { label: 'À propos de moi', emoji: '👤', category: 'Profil' },
    'skills': { label: 'Mes compétences', emoji: '⚡', category: 'Profil' },
    'projects': { label: 'Mes projets', emoji: '🖼️', category: 'Projets' },
    'experience': { label: 'Mon parcours', emoji: '💼', category: 'Profil' },
    'cv': { label: 'Télécharger CV', emoji: '📄', category: 'Contact' },
    'contact': { label: 'Me contacter', emoji: '📧', category: 'Contact' },
    'form': { label: 'Formulaire', emoji: '✉️', category: 'Contact' },
    'gallery': { label: 'Galerie', emoji: '🎨', category: 'Projets' },
    'help': { label: 'Aide', emoji: '❓', category: 'Aide' },
  };

  // Grouper les commandes par catégorie pour organisation atypique (préparé pour future amélioration)
  // const commandsByCategory = quickCommands.reduce((acc, cmd) => {
  //   const info = commandLabels[cmd];
  //   if (info) {
  //     if (!acc[info.category]) acc[info.category] = [];
  //     acc[info.category].push(cmd);
  //   }
  //   return acc;
  // }, {} as Record<string, string[]>);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0f172a] text-[#e2e8f0]' 
        : 'bg-[#f8fafc] text-[#1e293b]'
    }`}>
      {/* Skip Links pour la navigation au clavier */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:left-4 focus-within:z-50">
        <a 
          href="#main-content" 
          className="px-4 py-2 bg-[#3b82f6] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main-content')?.focus();
          }}
        >
          Aller au contenu principal
        </a>
        <a 
          href="#terminal-input" 
          className="ml-2 px-4 py-2 bg-[#3b82f6] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          Aller à la ligne de commande
        </a>
      </div>

      {/* Header Professionnel avec Palette Cohérente */}
      <header 
        role="banner"
        className={`${darkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-[#e2e8f0]'} border-b backdrop-blur-sm sticky top-0 z-30 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo/Initiale avec effet atypique et palette cohérente */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg glow-effect ${
                darkMode 
                  ? 'bg-gradient-to-br from-[#3b82f6] to-[#10b981] text-white shadow-lg shadow-[#3b82f6]/20' 
                  : 'bg-gradient-to-br from-[#3b82f6] to-[#10b981] text-white shadow-lg shadow-[#3b82f6]/10'
              }`}
            >
              K
              {showVisualMode && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 ${
                    darkMode ? 'bg-[#10b981] border-[#1e293b]' : 'bg-[#10b981] border-white'
                  }`}
                />
              )}
            </motion.div>
            
            {/* Nom et titre avec gradient text atypique */}
            <div className="flex flex-col">
              <h1 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#1e293b]'}`}>
                Jeya Kishan Karunanithy
              </h1>
              <p className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                Développeur Full-Stack
              </p>
            </div>
          </div>

          {/* Actions Header avec palette cohérente */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleToggleTheme}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                darkMode 
                  ? 'hover:bg-[#334155] text-[#e2e8f0]' 
                  : 'hover:bg-[#f1f5f9] text-[#1e293b]'
              }`}
              aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
              title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </motion.button>

            <motion.button
              onClick={handleShowTutorial}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                darkMode 
                  ? 'hover:bg-[#334155] text-[#e2e8f0]' 
                  : 'hover:bg-[#f1f5f9] text-[#1e293b]'
              }`}
              aria-label="Aide et guide d'utilisation"
              title="Aide"
            >
              <HelpCircle size={18} aria-hidden="true" />
            </motion.button>

            <div className={`h-6 w-px ${darkMode ? 'bg-[#334155]' : 'bg-[#e2e8f0]'}`} />

            <motion.a
              href="https://www.linkedin.com/in/jeya-kishan-karunanithy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn (ouvre dans un nouvel onglet)"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'hover:bg-[#334155] text-[#e2e8f0]' 
                  : 'hover:bg-[#f1f5f9] text-[#1e293b]'
              }`}
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/jeyakishandev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub (ouvre dans un nouvel onglet)"
              className={`p-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 ${
                darkMode 
                  ? 'hover:bg-[#334155] text-[#e2e8f0]' 
                  : 'hover:bg-[#f1f5f9] text-[#1e293b]'
              }`}
              title="GitHub"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </header>

      {/* Terminal Content - Layout Asymétrique Unique */}
      <main 
        id="main-content"
        role="main"
        className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto pb-40 sm:pb-36"
        tabIndex={-1}
      >
        {/* Région live pour les annonces */}
        <div 
          id="announcements"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />

        {/* Terminal Container avec palette cohérente et design atypique */}
        <div className={`rounded-2xl border shadow-2xl overflow-hidden glow-effect ${
          darkMode 
            ? 'bg-[#1e293b] border-[#334155]' 
            : 'bg-white border-[#e2e8f0]'
        }`}>
          {/* Terminal Header Bar - Sans cercles colorés, design épuré */}
          <div className={`px-6 py-3.5 border-b flex items-center justify-between ${
            darkMode ? 'bg-[#0f172a]/50 border-[#334155]' : 'bg-[#f8fafc] border-[#e2e8f0]'
          }`}>
            <div className="flex items-center gap-3">
              {/* Indicateur de statut atypique au lieu de cercles */}
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#10b981]' : 'bg-[#10b981]'}`}
                />
                <span className={`text-xs font-mono font-medium ${
                  darkMode ? 'text-[#94a3b8]' : 'text-[#64748b]'
                }`}>
                  terminal@portfolio
                </span>
              </div>
            </div>
            {showVisualMode && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  darkMode 
                    ? 'bg-[#3b82f6]/20 text-[#60a5fa] border border-[#3b82f6]/30' 
                    : 'bg-[#3b82f6]/10 text-[#2563eb] border border-[#3b82f6]/20'
                }`}
              >
                Mode Visuel
              </motion.span>
            )}
          </div>

          {/* Terminal Content avec palette cohérente */}
          <div className="p-6 space-y-4 min-h-[400px] timeline-line">
            <AnimatePresence>
              {outputHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`font-mono text-sm leading-relaxed whitespace-pre-wrap pl-4 ${
                    item.type === 'command' 
                      ? darkMode ? 'text-[#10b981]' : 'text-[#059669] font-semibold'
                      : item.type === 'error'
                      ? darkMode ? 'text-red-400' : 'text-red-600'
                      : item.type === 'tutorial'
                      ? darkMode ? 'text-[#3b82f6]' : 'text-[#2563eb]'
                      : item.type === 'visual'
                      ? darkMode ? 'text-purple-400' : 'text-purple-600'
                      : darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'
                  }`}
                  role={item.type === 'error' ? 'alert' : 'log'}
                  aria-label={item.type === 'command' ? 'Commande exécutée' : item.type === 'error' ? 'Erreur' : 'Sortie'}
                >
                  {item.content}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input Line - Design Moderne avec palette cohérente */}
            <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
              darkMode 
                ? 'bg-[#0f172a]/50 border-[#334155] focus-within:border-[#3b82f6] focus-within:shadow-lg focus-within:shadow-[#3b82f6]/10' 
                : 'bg-[#f8fafc] border-[#e2e8f0] focus-within:border-[#3b82f6] focus-within:shadow-lg focus-within:shadow-[#3b82f6]/5'
            }`} role="group" aria-label="Ligne de commande">
              <span 
                className={`font-mono text-sm font-semibold ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}
                aria-hidden="true"
              >
                &gt;
              </span>
              <div className="flex-1 flex items-center gap-2">
                <input
                  ref={inputRef}
                  id="terminal-input"
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className={`flex-1 bg-transparent outline-none font-mono text-sm ${
                    darkMode 
                      ? 'text-[#e2e8f0] placeholder:text-[#64748b] focus:text-[#10b981]' 
                      : 'text-[#1e293b] placeholder:text-[#94a3b8] focus:text-[#059669]'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Tapez une commande ou utilisez les boutons de navigation..."
                  autoComplete="off"
                  disabled={isLoading}
                  aria-label="Commande terminal"
                  aria-describedby="terminal-help"
                  aria-invalid={false}
                  aria-required="false"
                />
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className={`w-4 h-4 border-2 rounded-full border-t-transparent ${
                      darkMode ? 'border-[#3b82f6]' : 'border-[#2563eb]'
                    }`}
                    aria-label="Chargement en cours"
                    role="status"
                  />
                ) : (
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-2 h-5 rounded-sm ${darkMode ? 'bg-[#10b981]' : 'bg-[#059669]'}`}
                    aria-label="Prêt à recevoir une commande"
                    role="status"
                  />
                )}
              </div>
            </div>
            <div id="terminal-help" className="sr-only">
              Tapez une commande et appuyez sur Entrée pour l'exécuter. Utilisez les boutons de navigation pour une exploration facile.
            </div>
          </div>
        </div>
      </main>

      {/* Modales */}
      <AnimatePresence>
        <AboutModal 
          showAboutModal={showAboutModal}
          setShowAboutModal={setShowAboutModal}
          darkMode={darkMode}
          modalLoading={modalLoading}
        />
      </AnimatePresence>

      <AnimatePresence>
        <SkillsModal 
          showSkillsModal={showSkillsModal}
          setShowSkillsModal={setShowSkillsModal}
          darkMode={darkMode}
        />
      </AnimatePresence>

      <AnimatePresence>
        <ProjectsModal 
          showProjectsModal={showProjectsModal}
          setShowProjectsModal={setShowProjectsModal}
          darkMode={darkMode}
          projects={projects}
          setSelectedProject={setSelectedProject}
          setShowProjectDetailModal={setShowProjectDetailModal}
        />
      </AnimatePresence>

      <AnimatePresence>
        <FormModal 
          showForm={showForm}
          setShowForm={setShowForm}
          darkMode={darkMode}
          formData={formData}
          setFormData={setFormData}
          formSubmitting={formSubmitting}
          setFormSubmitting={setFormSubmitting}
          executeCommand={executeCommand}
        />
      </AnimatePresence>

      <AnimatePresence>
        <GalleryModal 
          showGalleryModal={showGalleryModal}
          setShowGalleryModal={setShowGalleryModal}
          darkMode={darkMode}
          projects={projects}
          closeAllModals={closeAllModals}
          setSelectedProject={setSelectedProject}
          setShowProjectDetailModal={setShowProjectDetailModal}
        />
      </AnimatePresence>

      <AnimatePresence>
        <ContactModal 
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
          darkMode={darkMode}
          closeAllModals={closeAllModals}
          setShowForm={setShowForm}
        />
      </AnimatePresence>

      <AnimatePresence>
        <ExperienceModal 
          showExperienceModal={showExperienceModal}
          setShowExperienceModal={setShowExperienceModal}
          darkMode={darkMode}
        />
      </AnimatePresence>

      <AnimatePresence>
        <ProjectDetailModal 
          showProjectDetailModal={showProjectDetailModal}
          setShowProjectDetailModal={setShowProjectDetailModal}
          darkMode={darkMode}
          selectedProject={selectedProject}
        />
      </AnimatePresence>

      <AnimatePresence>
        <WelcomeGuideModal 
          showWelcomeGuide={showWelcomeGuide}
          setShowWelcomeGuide={setShowWelcomeGuide}
          darkMode={darkMode}
          commands={commands}
        />
      </AnimatePresence>

      {/* Quick Commands - Design Professionnel avec Labels Clairs et Palette Cohérente */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 ${
        darkMode 
          ? 'bg-[#1e293b] border-t border-[#334155]' 
          : 'bg-white border-t border-[#e2e8f0]'
      } backdrop-blur-lg shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          {/* Labels clairs pour non-tech avec design atypique */}
          <div className="mb-4 px-1">
            <div className="flex items-center gap-2 mb-1">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-lg"
              >
                🚀
              </motion.div>
              <p className={`text-sm font-semibold ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                Navigation rapide
              </p>
            </div>
            <p className={`text-xs ${darkMode ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
              Explorez mon portfolio en un clic - Conçu pour être intuitif même sans connaissances techniques
            </p>
          </div>
          
          {/* Boutons organisés par catégorie avec palette cohérente */}
          <div className="flex flex-wrap gap-3">
            {quickCommands.map(cmd => {
              const command = commands.find(c => c.command === cmd);
              const labelInfo = commandLabels[cmd] || { label: cmd, emoji: '•', category: 'Autre' };
              
              return (
                <motion.button
                  key={cmd}
                  onClick={() => handleCommandClick(cmd)}
                  whileHover={{ scale: loadingButton === cmd ? 1 : 1.03, y: loadingButton === cmd ? 0 : -3 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loadingButton === cmd}
                  className={`group px-5 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 font-medium text-sm ${
                    loadingButton === cmd 
                      ? `${darkMode ? 'bg-[#334155]/50' : 'bg-[#e2e8f0]/50'} cursor-not-allowed opacity-60`
                      : darkMode
                      ? 'bg-[#0f172a] hover:bg-[#1e293b] border border-[#334155] hover:border-[#3b82f6] text-[#e2e8f0] hover:text-white shadow-lg hover:shadow-xl hover:shadow-[#3b82f6]/10' 
                      : 'bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#3b82f6] text-[#1e293b] hover:text-[#0f172a] shadow-md hover:shadow-lg hover:shadow-[#3b82f6]/5'
                  } ${command?.hasVisualContent ? darkMode ? 'ring-1 ring-[#10b981]/30' : 'ring-1 ring-[#10b981]/30' : ''}`}
                  title={command?.description || labelInfo.label}
                  aria-label={labelInfo.label}
                  aria-pressed={loadingButton === cmd}
                  role="button"
                >
                  {loadingButton === cmd ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className={`w-4 h-4 border-2 rounded-full border-t-transparent ${
                        darkMode ? 'border-[#3b82f6]' : 'border-[#2563eb]'
                      }`}
                    />
                  ) : (
                    <>
                      <span className="text-base">{labelInfo.emoji}</span>
                      <span>{labelInfo.label}</span>
                      {command?.hasVisualContent && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            darkMode 
                              ? 'bg-[#10b981]/20 text-[#10b981]' 
                              : 'bg-[#10b981]/10 text-[#059669]'
                          }`}
                        >
                          Visuel
                        </motion.span>
                      )}
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
