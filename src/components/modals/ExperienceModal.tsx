"use client";
import { motion } from "framer-motion";

interface ExperienceModalProps {
  showExperienceModal: boolean;
  setShowExperienceModal: (show: boolean) => void;
  darkMode: boolean;
}

export default function ExperienceModal({ 
  showExperienceModal, 
  setShowExperienceModal, 
  darkMode 
}: ExperienceModalProps) {
  if (!showExperienceModal) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-2 sm:top-4 md:top-8 lg:top-20 bottom-16 sm:bottom-20 md:bottom-24 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 max-w-5xl mx-auto ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} border ${darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 overflow-y-auto z-30 shadow-2xl`}
    >
      <div className="flex justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6 sticky top-0 bg-inherit pb-2 sm:pb-0 z-10">
        <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
          Mon Parcours & Expériences
        </h2>
        <button
          onClick={() => setShowExperienceModal(false)}
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

      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className={`p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-l-2 sm:border-l-4 ${darkMode ? 'bg-[#0f172a] border-[#3b82f6]' : 'bg-[#f8fafc] border-[#3b82f6]'}`}>
          <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'} leading-relaxed`}>
            Découvrez mon parcours de reconversion et mes expériences professionnelles dans le développement web.
          </p>
        </div>
      </div>

      {/* Formation - Mobile First */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
          <div className={`w-0.5 sm:w-1 h-6 sm:h-8 rounded-full ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'}`}></div>
          <h3 className={`text-base sm:text-lg md:text-xl font-bold ${darkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`}>
            Formation
          </h3>
        </div>
        <div className={`p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border ${darkMode ? 'bg-[#0f172a] border-[#334155]' : 'bg-white border-[#e2e8f0]'} shadow-lg`}>
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'} shadow-lg`}>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Développeur Web & Web Mobile – O'clock (2024–2025)
              </h4>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Spécialisation JavaScript Full-Stack (React.js, Node.js, TypeScript, PostgreSQL).
              </p>
              <div className="space-y-3">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h5 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Projet de fin de formation</h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    GamerChallenges, une plateforme collaborative de défis gaming avec authentification sécurisée, 
                    gestion de challenges et déploiement Vercel/Railway.
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h5 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Méthodologie</h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Travail en méthode Agile/Scrum avec sprints et gestion d'équipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expériences Professionnelles */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
            Expériences Professionnelles
          </h3>
        </div>
        
        {/* Freelance Makara Media */}
        <div className={`p-8 rounded-xl border mb-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-600' : 'bg-green-500'} shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Développeur Full-Stack – Makara Media (2025)
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-800/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  En cours
                </span>
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Prolongation après mon stage pour refonte complète d'une plateforme SaaS de gestion multi-réseaux sociaux.
              </p>
              <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Technologies</h5>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Conception d'une architecture scalable et modulaire (Node.js/TypeScript + React 19).
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h6 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Fonctionnalités</h6>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Gestion multi-organisations avec rôles</li>
                    <li>• Intégration OAuth2 (Facebook, Instagram, LinkedIn)</li>
                    <li>• Système de planification et analytics</li>
                  </ul>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h6 className={`font-medium mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Qualité & Sécurité</h6>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Système d'abonnement Stripe</li>
                    <li>• Fonctionnalités premium avec crédits AI</li>
                    <li>• Tests 90%+ de couverture, CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Makara Media */}
        <div className={`p-8 rounded-xl border mb-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-600' : 'bg-purple-500'} shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Stage Développeur Web – Makara Media (2025)
              </h4>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Refonte du dashboard interne avec React + TypeScript et intégration de composants dynamiques.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h6 className={`font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Développement</h6>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Composants : statistiques sociales</li>
                    <li>• Publications à venir</li>
                    <li>• Carrousel d'actualités</li>
                  </ul>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h6 className={`font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Collaboration</h6>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Front/back avec Symfony (PHP)</li>
                    <li>• API REST</li>
                    <li>• Choix UI/UX via Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expériences antérieures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-orange-600' : 'bg-orange-500'} shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Équipier Polyvalent – Monoprix
                </h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Gestion de stock, mise en rayon, relation client.
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <strong>Compétences :</strong> Organisationnelles et travail en équipe.
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-cyan-600' : 'bg-cyan-500'} shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Agent de Trafic – Aéroport
                </h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Gestion opérationnelle et coordination des vols.
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <strong>Compétences :</strong> Responsabilité, rigueur et réactivité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compétences Clés */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-400' : 'text-gray-800'}`}>
            Compétences Clés Développées
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-orange-600' : 'bg-orange-500'}`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Développement Full-Stack
              </h4>
            </div>
            <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'}`}></div>
                <span>Architecture scalable Node.js/TypeScript + React 19</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'}`}></div>
                <span>Gestion multi-organisations avec rôles complexes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'}`}></div>
                <span>Intégration OAuth2 (Facebook, Instagram, LinkedIn)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'}`}></div>
                <span>Systèmes d'abonnement Stripe et paiements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'}`}></div>
                <span>Tests automatisés 90%+ de couverture</span>
              </li>
            </ul>
          </div>
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-cyan-600' : 'bg-cyan-500'}`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                UI/UX & Collaboration
              </h4>
            </div>
            <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span>Composants React dynamiques et interactifs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span>Design systems cohérents (Figma)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span>Collaboration front/back avec Symfony/PHP</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span>Méthodologies Agile/Scrum et gestion d'équipe</span>
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span>CI/CD et bonnes pratiques de développement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
