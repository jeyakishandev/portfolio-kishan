"use client";
import { motion } from "framer-motion";

interface ContactModalProps {
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
  darkMode: boolean;
  closeAllModals: () => void;
  setShowForm: (show: boolean) => void;
}

export default function ContactModal({ 
  showContactModal, 
  setShowContactModal, 
  darkMode, 
  closeAllModals,
  setShowForm
}: ContactModalProps) {
  if (!showContactModal) return null;

  return (
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
  );
}
