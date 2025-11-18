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
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      aria-describedby="about-modal-description"
      className={`fixed top-20 bottom-24 left-4 right-4 max-w-4xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 id="about-modal-title" className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          À Propos de Kishan
        </h2>
        <button
          onClick={() => setShowAboutModal(false)}
          aria-label="Fermer la modal À propos"
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>
      
      {modalLoading === "about" ? (
        <ModalSkeleton darkMode={darkMode} />
      ) : (
        <>
          {/* Header avec photo et infos principales */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img 
                src="/avatar.svg" 
                alt="Photo de profil de Kishan, développeur full-stack" 
                className="w-32 h-32 rounded-full border-4 border-green-400 mx-auto mb-4 shadow-lg"
              />
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                <span className="text-white text-sm">✓</span>
              </div>
            </div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Jeya Kishan Karunanithy
            </h3>
            <p className={`text-lg ${darkMode ? 'text-green-400' : 'text-blue-600'} font-medium mb-1`}>
              Développeur Full-Stack
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              30 ans • Île-de-France • Disponible
            </p>
          </div>

          {/* Parcours de reconversion */}
          <div className={`p-6 rounded-xl mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  De l'aviation au code : une reconversion réussie
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ancien agent de trafic aérien, j'ai choisi de me reconvertir dans le développement web pour allier logique, créativité et impact concret. Près d'un an d'expérience cumulée avec une formation intensive full-stack et des projets concrets en freelance.
                </p>
              </div>
            </div>
          </div>

          {/* Compétences techniques */}
          <div className="mb-6">
            <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Stack Technique
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-md`}>
                <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  Front-End
                </h5>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>React 18</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>Next.js</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>TypeScript</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Tailwind CSS</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Zustand</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Vitest</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-md`}>
                <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  Back-End
                </h5>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Fastify</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Prisma</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>PostgreSQL</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>JWT</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>Argon2</span>
                    <span className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience actuelle */}
          <div className="mb-6">
            <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Expérience Actuelle
            </h4>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30' : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-600' : 'bg-green-500'}`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className={`text-lg font-bold mb-1 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                    Freelance - Makara Media
                  </h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                    Refonte front/back d'un dashboard SaaS
                  </p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Développement d'un dashboard moderne en React/TypeScript connecté à un back-end Fastify. Intégration Prisma pour la gestion de base de données et implémentation de fonctionnalités de sécurité avancées.
                  </p>
                  <div className="mt-3">
                    <span className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-green-800/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                      Témoignage client disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personnalité et valeurs */}
          <div className="mb-6">
            <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-gray-800'}`}>
              Ma Personnalité
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-md`}>
                <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  En 3 mots
                </h5>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Curieux</span>
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Persévérant</span>
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Ambitieux</span>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-md`}>
                <h5 className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  Centres d'intérêt
                </h5>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Musculation</span>
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Voyage</span>
                  <span className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Entrepreneuriat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ce qui me rend unique */}
          <div className={`p-6 rounded-xl mb-6 ${darkMode ? 'bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-700/30' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  Ce qui me rend unique
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ma capacité à comprendre à la fois la logique technique et la vision produit, pour transformer une idée en solution concrète. Créer des applications fiables, esthétiques et bien structurées avec des valeurs d'autonomie, rigueur et innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs professionnels */}
          <div className="mb-6">
            <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
              Mes Objectifs
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'} shadow-md`}>
                <h5 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  Entreprise (CDI/CDD)
                </h5>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Mettre mes compétences au service de projets ambitieux, progresser au contact d'équipes expérimentées et contribuer à des solutions durables.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/20 border border-green-700/30' : 'bg-green-50 border border-green-200'} shadow-md`}>
                <h5 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  Freelance/Entrepreneuriat
                </h5>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Accompagner mes clients dans la réalisation de sites et d'applications modernes, tout en développant mes propres projets digitaux autour de la tech et l'automatisation.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
