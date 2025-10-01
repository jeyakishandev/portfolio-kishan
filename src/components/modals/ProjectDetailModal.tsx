"use client";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  github: string;
  live?: string;
}

interface ProjectDetailModalProps {
  showProjectDetailModal: boolean;
  setShowProjectDetailModal: (show: boolean) => void;
  darkMode: boolean;
  selectedProject: Project | null;
}

export default function ProjectDetailModal({ 
  showProjectDetailModal, 
  setShowProjectDetailModal, 
  darkMode, 
  selectedProject 
}: ProjectDetailModalProps) {
  if (!showProjectDetailModal || !selectedProject) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          {selectedProject.title}
        </h2>
        <button
          onClick={() => setShowProjectDetailModal(false)}
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>

      {/* Image/Vidéo du projet */}
      <div className="mb-8">
        <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🖥️</div>
            <p className="text-lg opacity-90">{selectedProject.title}</p>
            <p className="text-sm opacity-75 mt-2">Screenshot du projet</p>
          </div>
        </div>
      </div>

      {/* Description complète */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Description du Projet
        </h3>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            {selectedProject.description}
          </p>
        </div>
      </div>

      {/* Technologies utilisées */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Technologies & Outils
        </h3>
        <div className="flex flex-wrap gap-3">
          {selectedProject.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Fonctionnalités clés */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Fonctionnalités Clés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedProject.id === 'gamerchallenges' && (
            <>
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>🎮 Système de Défis</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Création et participation à des défis gaming avec classement</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🔐 Authentification JWT</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sécurisation des comptes utilisateurs avec tokens</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>📊 Tableau de Bord</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suivi des performances et statistiques personnelles</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>💬 Chat Communautaire</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Communication entre joueurs et partage d'expériences</p>
              </div>
            </>
          )}
          {selectedProject.id === 'devboard' && (
            <>
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>📋 Gestion Kanban</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tableaux de bord pour organiser les tâches de développement</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>👥 Collaboration</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Travail d'équipe avec assignation de tâches</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>🐳 Docker</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conteneurisation pour un déploiement facile</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>🧪 Tests</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suite de tests avec Vitest pour la qualité</p>
              </div>
            </>
          )}
          {selectedProject.id === 'luxtime' && (
            <>
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>🛒 E-commerce Complet</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Catalogue, panier et système de commande</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>💳 Paiement Stripe</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Intégration sécurisée des paiements en ligne</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>👤 Gestion Comptes</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Inscription, connexion et historique des commandes</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>📱 Design Responsive</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface adaptée mobile et desktop</p>
              </div>
            </>
          )}
          {selectedProject.id === 'conquete-monde' && (
            <>
              <div className={`p-4 rounded ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>📝 Blog MDX</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rédaction d'articles avec composants React</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>🌍 Galerie Voyages</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Partage de photos et expériences de voyage</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>⚡ Performance</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Optimisation Next.js avec SSR et ISR</p>
              </div>
              <div className={`p-4 rounded ${darkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>🎨 Design Unique</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface personnalisée avec Tailwind CSS</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Défis techniques */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Défis Techniques
        </h3>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedProject.id === 'gamerchallenges' && (
              <>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Gestion d'état complexe :</strong> Orchestration des défis, utilisateurs et classements en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Sécurité JWT :</strong> Implémentation d'un système d'authentification robuste avec refresh tokens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Performance :</strong> Optimisation des requêtes PostgreSQL pour les classements dynamiques</span>
                </li>
              </>
            )}
            {selectedProject.id === 'devboard' && (
              <>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Drag & Drop :</strong> Implémentation d'une interface Kanban intuitive avec React DnD</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Conteneurisation :</strong> Configuration Docker multi-services pour l'environnement de développement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Tests automatisés :</strong> Couverture de tests complète avec Vitest et React Testing Library</span>
                </li>
              </>
            )}
            {selectedProject.id === 'luxtime' && (
              <>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Intégration Stripe :</strong> Configuration sécurisée des paiements avec gestion des webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Gestion d'inventaire :</strong> Synchronisation en temps réel des stocks et disponibilités</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>UX/UI :</strong> Design responsive optimisé pour la conversion e-commerce</span>
                </li>
              </>
            )}
            {selectedProject.id === 'conquete-monde' && (
              <>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>MDX avancé :</strong> Intégration de composants React dans le contenu markdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>Optimisation images :</strong> Gestion des images de voyage avec Next.js Image</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
                  <span><strong>SEO :</strong> Optimisation pour les moteurs de recherche avec métadonnées dynamiques</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Liens et actions */}
      <div className="flex gap-4">
        {selectedProject.github && (
          <a 
            href={selectedProject.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <span>💻</span>
            Voir le code GitHub
          </a>
        )}
        {selectedProject.live && (
          <a 
            href={selectedProject.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
          >
            <span>🚀</span>
            Voir la démo
          </a>
        )}
        <button
          onClick={() => setShowProjectDetailModal(false)}
          className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>
    </motion.div>
  );
}
