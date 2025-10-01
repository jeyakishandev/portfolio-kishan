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
  );
}
