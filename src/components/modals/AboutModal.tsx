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
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      aria-describedby="about-modal-description"
      className={`fixed top-2 sm:top-4 md:top-8 lg:top-20 bottom-16 sm:bottom-20 md:bottom-24 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 max-w-4xl mx-auto ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} border ${darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 overflow-y-auto z-30 shadow-2xl`}
    >
      <div className="flex justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6 sticky top-0 bg-inherit pb-2 sm:pb-0 z-10">
        <h2 id="about-modal-title" className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
          À Propos de Kishan
        </h2>
        <button
          onClick={() => setShowAboutModal(false)}
          aria-label="Fermer la modal À propos"
          className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base flex-shrink-0 transition-colors ${
            darkMode 
              ? 'bg-[#334155] hover:bg-[#475569] text-[#e2e8f0]' 
              : 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b]'
          }`}
        >
          <span className="hidden sm:inline">Fermer</span>
          <span className="sm:hidden">✕</span>
        </button>
      </div>
      
      {modalLoading === "about" ? (
        <ModalSkeleton darkMode={darkMode} />
      ) : (
        <>
          {/* Header avec photo et infos principales - Mobile First */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block">
              <img 
                src="/avatar.svg" 
                alt="Photo de profil de Kishan, développeur full-stack" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 sm:border-4 border-[#10b981] mx-auto mb-3 sm:mb-4 shadow-lg"
              />
              <div className={`absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#10b981]' : 'bg-[#10b981]'}`}>
                <span className="text-white text-xs sm:text-sm">✓</span>
              </div>
            </div>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#1e293b]'} mb-1 sm:mb-2 px-2`}>
              Jeya Kishan Karunanithy
            </h3>
            <p className={`text-sm sm:text-base md:text-lg ${darkMode ? 'text-[#10b981]' : 'text-[#3b82f6]'} font-medium mb-1`}>
              Développeur Full-Stack
            </p>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-[#64748b]'} px-2`}>
              30 ans • Île-de-France • Disponible
            </p>
          </div>

          {/* Parcours de reconversion - Mobile First */}
          <div className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 ${darkMode ? 'bg-gradient-to-r from-[#3b82f6]/10 to-purple-900/20 border border-[#3b82f6]/20' : 'bg-gradient-to-r from-[#3b82f6]/5 to-purple-50 border border-[#3b82f6]/20'}`}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'}`}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${darkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`}>
                  De l'aviation au code : une reconversion réussie
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                  Ancien agent de trafic aérien, j'ai choisi de me reconvertir dans le développement web pour allier logique, créativité et impact concret. Près d'un an d'expérience cumulée avec une formation intensive full-stack et des projets concrets en freelance.
                </p>
              </div>
            </div>
          </div>

          {/* Compétences techniques - Mobile First */}
          <div className="mb-4 sm:mb-6">
            <h4 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
              Stack Technique
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#0f172a] border border-[#334155]' : 'bg-white border border-[#e2e8f0]'} shadow-md`}>
                <h5 className={`font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-[#10b981]' : 'bg-[#10b981]'}`}></div>
                  Front-End
                </h5>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-[#3b82f6]/20 text-[#60a5fa]' : 'bg-[#3b82f6]/10 text-[#2563eb]'}`}>React 18</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-[#3b82f6]/20 text-[#60a5fa]' : 'bg-[#3b82f6]/10 text-[#2563eb]'}`}>Next.js</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-[#3b82f6]/20 text-[#60a5fa]' : 'bg-[#3b82f6]/10 text-[#2563eb]'}`}>TypeScript</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Tailwind CSS</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Zustand</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Vitest</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#0f172a] border border-[#334155]' : 'bg-white border border-[#e2e8f0]'} shadow-md`}>
                <h5 className={`font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  Back-End
                </h5>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Fastify</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Prisma</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>PostgreSQL</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>JWT</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>Argon2</span>
                    <span className={`px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded ${darkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700'}`}>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience actuelle - Mobile First */}
          <div className="mb-4 sm:mb-6">
            <h4 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
              Expérience Actuelle
            </h4>
            <div className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${darkMode ? 'bg-gradient-to-r from-[#10b981]/10 to-emerald-900/20 border border-[#10b981]/20' : 'bg-gradient-to-r from-[#10b981]/5 to-emerald-50 border border-[#10b981]/20'}`}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-[#10b981]' : 'bg-[#10b981]'}`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className={`text-base sm:text-lg font-bold mb-1 ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}>
                    Freelance - Makara Media
                  </h5>
                  <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-[#64748b]'} mb-1.5 sm:mb-2`}>
                    Refonte front/back d'un dashboard SaaS
                  </p>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                    Développement d'un dashboard moderne en React/TypeScript connecté à un back-end Fastify. Intégration Prisma pour la gestion de base de données et implémentation de fonctionnalités de sécurité avancées.
                  </p>
                  <div className="mt-2 sm:mt-3">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full ${darkMode ? 'bg-[#10b981]/20 text-[#10b981]' : 'bg-[#10b981]/10 text-[#059669]'}`}>
                      Témoignage client disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personnalité et valeurs - Mobile First */}
          <div className="mb-4 sm:mb-6">
            <h4 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${darkMode ? 'text-purple-400' : 'text-[#1e293b]'}`}>
              Ma Personnalité
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#0f172a] border border-[#334155]' : 'bg-white border border-[#e2e8f0]'} shadow-md`}>
                <h5 className={`font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  En 3 mots
                </h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Curieux</span>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Persévérant</span>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>Ambitieux</span>
                </div>
              </div>
              
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#0f172a] border border-[#334155]' : 'bg-white border border-[#e2e8f0]'} shadow-md`}>
                <h5 className={`font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  Centres d'intérêt
                </h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Musculation</span>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Voyage</span>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>Entrepreneuriat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ce qui me rend unique - Mobile First */}
          <div className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 ${darkMode ? 'bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-700/30' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'}`}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'}`}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                  Ce qui me rend unique
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                  Ma capacité à comprendre à la fois la logique technique et la vision produit, pour transformer une idée en solution concrète. Créer des applications fiables, esthétiques et bien structurées avec des valeurs d'autonomie, rigueur et innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Objectifs professionnels - Mobile First */}
          <div className="mb-4 sm:mb-6">
            <h4 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
              Mes Objectifs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#3b82f6]/10 border border-[#3b82f6]/20' : 'bg-[#3b82f6]/5 border border-[#3b82f6]/20'} shadow-md`}>
                <h5 className={`font-semibold mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'}`}></div>
                  Entreprise (CDI/CDD)
                </h5>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
                  Mettre mes compétences au service de projets ambitieux, progresser au contact d'équipes expérimentées et contribuer à des solutions durables.
                </p>
              </div>
              <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-[#10b981]/10 border border-[#10b981]/20' : 'bg-[#10b981]/5 border border-[#10b981]/20'} shadow-md`}>
                <h5 className={`font-semibold mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${darkMode ? 'bg-[#10b981]' : 'bg-[#10b981]'}`}></div>
                  Freelance/Entrepreneuriat
                </h5>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
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
