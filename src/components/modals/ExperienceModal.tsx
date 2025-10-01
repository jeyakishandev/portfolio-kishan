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
  );
}
