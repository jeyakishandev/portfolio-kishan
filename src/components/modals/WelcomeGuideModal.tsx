"use client";
import { motion } from "framer-motion";

interface Command {
  id: string;
  command: string;
  description: string;
  action: () => void;
  category: 'navigation' | 'info' | 'visual' | 'utility';
  hasVisualContent?: boolean;
}

interface WelcomeGuideModalProps {
  showWelcomeGuide: boolean;
  setShowWelcomeGuide: (show: boolean) => void;
  darkMode: boolean;
  commands: Command[];
}

export default function WelcomeGuideModal({ 
  showWelcomeGuide, 
  setShowWelcomeGuide, 
  darkMode,
  commands
}: WelcomeGuideModalProps) {
  if (!showWelcomeGuide) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      aria-describedby="guide-modal-description"
      className={`fixed top-2 sm:top-4 md:top-8 lg:top-20 bottom-16 sm:bottom-20 md:bottom-24 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 max-w-4xl mx-auto ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} border ${darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 overflow-y-auto z-30 shadow-2xl`}
    >
      <div className="flex justify-between items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 sticky top-0 bg-inherit pb-2 sm:pb-0 z-10">
        <h2 id="guide-modal-title" className={`text-base sm:text-lg md:text-xl font-bold ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
          Bienvenue sur mon Portfolio Terminal !
        </h2>
        <button
          onClick={() => setShowWelcomeGuide(false)}
          aria-label="Fermer le guide de bienvenue"
          className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base flex-shrink-0 transition-colors ${
            darkMode 
              ? 'bg-[#334155] hover:bg-[#475569] text-[#e2e8f0]' 
              : 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b]'
          }`}
        >
          <span className="hidden sm:inline">Commencer</span>
          <span className="sm:hidden">OK</span>
        </button>
      </div>

      <div className="mb-4 sm:mb-6">
        <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#10b981]/10' : 'bg-[#10b981]/5'} mb-3 sm:mb-4`}>
          <h3 className={`text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}>
            🚀 Comment utiliser ce portfolio ?
          </h3>
          <p id="guide-modal-description" className={`text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'} leading-relaxed`}>
            Ce portfolio utilise une interface terminal unique ! Tu peux naviguer en tapant des commandes
            ou en utilisant les boutons rapides en bas de l'écran.
          </p>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} mb-6`}>
          <h4 className={`text-base font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            🚀 Comment naviguer ?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-600'}`}>💻 Tape des commandes :</h5>
              <div className="flex flex-wrap gap-1">
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>about</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>skills</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>projects</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>experience</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>cv</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>contact</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>form</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>gallery</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>help</span>
              </div>
            </div>
            <div>
              <h5 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-600'}`}>🖱️ Ou clique les boutons colorés :</h5>
              <div className="flex flex-wrap gap-1">
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-blue-700' : 'bg-blue-200'}`}>📖 About</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-yellow-700' : 'bg-yellow-200'}`}>⚡ Skills</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-green-700' : 'bg-green-200'}`}>🖼️ Projects</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-purple-700' : 'bg-purple-200'}`}>💼 Experience</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-orange-700' : 'bg-orange-200'}`}>📄 CV</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-red-700' : 'bg-red-200'}`}>📧 Contact</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-indigo-700' : 'bg-indigo-200'}`}>📝 Form</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-pink-700' : 'bg-pink-200'}`}>🎬 Gallery</span>
                <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>❓ Help</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'} mb-4`}>
          <h4 className={`text-base font-semibold mb-3 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
            ⚡ Fonctionnalités Spéciales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>🎬 Galerie Visuelle</h5>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Commande "gallery" ou bouton "Gallery" pour voir tous mes projets visuellement
              </p>
            </div>
            <div>
              <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>📝 Formulaire Interactif</h5>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Commande "form" ou bouton "Form" pour un formulaire de contact complet
              </p>
            </div>
            <div>
              <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>💼 Expérience Pro</h5>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Commande "experience" ou bouton "Experience" pour mon parcours professionnel
              </p>
            </div>
            <div>
              <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>📄 Mon CV</h5>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Commande "cv" ou bouton "CV" pour télécharger mon curriculum vitae
              </p>
            </div>
            <div>
              <h5 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-orange-200' : 'text-orange-600'}`}>🌓 Thème Sombre/Clair</h5>
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
            <li>• Commence par taper <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>about</code> ou cliquer "About" pour me connaître</li>
            <li>• Utilise <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>projects</code> ou "Projects" pour voir mes réalisations</li>
            <li>• Clique sur n'importe quel projet pour plus de détails</li>
            <li>• Essaye <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>experience</code> pour mon parcours pro</li>
            <li>• Utilise <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>form</code> pour me contacter directement</li>
            <li>• Les boutons colorés en bas sont là pour t'aider !</li>
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
  );
}
