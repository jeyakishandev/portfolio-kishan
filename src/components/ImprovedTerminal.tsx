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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-green-400' : 'bg-gray-100 text-gray-800'} font-mono`}>
      {/* Skip Links pour la navigation au clavier */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:left-4 focus-within:z-50">
        <a 
          href="#main-content" 
          className="px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main-content')?.focus();
          }}
        >
          Aller au contenu principal
        </a>
        <a 
          href="#terminal-input" 
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.focus();
          }}
        >
          Aller à la ligne de commande
        </a>
      </div>

      {/* Header Terminal */}
      <header 
        role="banner"
        className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border-b px-4 py-3 flex items-center justify-between`}
      >
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

        <div className="flex items-center gap-2">
          <motion.button
            onClick={handleToggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'hover:bg-gray-800 focus:ring-green-500 focus:ring-offset-gray-900' : 'hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-white'}`}
            aria-label={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {darkMode ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </motion.button>

          <motion.button
            onClick={handleShowTutorial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'hover:bg-gray-800 focus:ring-green-500 focus:ring-offset-gray-900' : 'hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-white'}`}
            aria-label="Afficher le guide d'utilisation"
            title="Afficher le guide d'utilisation"
          >
            <HelpCircle size={16} aria-hidden="true" />
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/jeya-kishan-karunanithy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Kishan (ouvre dans un nouvel onglet)"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded transition-all duration-200 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
            title="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/jeyakishandev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Kishan (ouvre dans un nouvel onglet)"
            className={`p-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'hover:bg-gray-800 focus:ring-green-500 focus:ring-offset-gray-900' : 'hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-white'}`}
            title="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={16} aria-hidden="true" />
          </motion.a>
        </div>
      </header>

      {/* Terminal Content */}
      <main 
        id="main-content"
        role="main"
        className="p-4 max-w-6xl mx-auto pb-24"
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

        <div className="space-y-2">
          <AnimatePresence>
            {outputHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`font-mono text-sm whitespace-pre-wrap ${
                  item.type === 'command' 
                    ? darkMode ? 'text-green-400' : 'text-green-600'
                    : item.type === 'error'
                    ? darkMode ? 'text-red-400' : 'text-red-600'
                    : item.type === 'tutorial'
                    ? darkMode ? 'text-blue-400' : 'text-blue-600'
                    : item.type === 'visual'
                    ? darkMode ? 'text-purple-400' : 'text-purple-600'
                    : darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                role={item.type === 'error' ? 'alert' : 'log'}
                aria-label={item.type === 'command' ? 'Commande exécutée' : item.type === 'error' ? 'Erreur' : 'Sortie'}
              >
                {item.content}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center gap-2" role="group" aria-label="Ligne de commande">
            <span 
              className={darkMode ? 'text-green-300' : 'text-green-600'}
              aria-hidden="true"
            >
              kishan@portfolio:~$
            </span>
            <div className="flex-1 flex items-center">
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`flex-1 bg-transparent outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'text-green-400 focus:ring-green-500 focus:ring-offset-black' : 'text-gray-800 focus:ring-blue-500 focus:ring-offset-white'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Tapez une commande ou utilisez les boutons..."
                autoComplete="off"
                disabled={isLoading}
                aria-label="Commande terminal"
                aria-describedby="terminal-help"
                aria-invalid={false}
                aria-required="false"
              />
              {isLoading ? (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-yellow-400"
                  aria-label="Chargement en cours"
                  role="status"
                >
                  <span aria-hidden="true">⏳</span>
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-5 bg-green-400"
                  aria-label="Prêt à recevoir une commande"
                  role="status"
                />
              )}
            </div>
          </div>
          <div id="terminal-help" className="sr-only">
            Tapez une commande et appuyez sur Entrée pour l'exécuter. Utilisez Tab pour naviguer, Escape pour fermer les modales.
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
                onClick={() => handleCommandClick(cmd)}
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
                aria-label={command?.description || cmd}
                aria-pressed={loadingButton === cmd}
                role="button"
              >
                {loadingButton === cmd ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border border-current border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    {cmd === 'about' && <BookOpen size={12} />}
                    {cmd === 'skills' && <Zap size={12} />}
                    {cmd === 'projects' && <Image size={12} />}
                    {cmd === 'experience' && <Briefcase size={12} />}
                    {cmd === 'cv' && <FileText size={12} />}
                    {cmd === 'contact' && <Mail size={12} />}
                    {cmd === 'form' && <MousePointer size={12} />}
                    {cmd === 'gallery' && <Play size={12} />}
                    {cmd === 'help' && <HelpCircle size={12} />}
                    {cmd}
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
