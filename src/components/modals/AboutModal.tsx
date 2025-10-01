"use client";
import { motion } from "framer-motion";

interface AboutModalProps {
  showAboutModal: boolean;
  setShowAboutModal: (show: boolean) => void;
  darkMode: boolean;
  modalLoading: string | null;
}

const ModalSkeleton = ({ darkMode }: { darkMode: boolean }) => (
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

export default function AboutModal({ showAboutModal, setShowAboutModal, darkMode, modalLoading }: AboutModalProps) {
  if (!showAboutModal) return null;

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
        <ModalSkeleton darkMode={darkMode} />
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
  );
}
