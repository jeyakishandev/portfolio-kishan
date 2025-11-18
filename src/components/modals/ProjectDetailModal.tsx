"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import LikeButton from "../LikeButton";
import CommentsSection from "../CommentsSection";

import { Project, Comment } from '@/types/Project';

interface ProjectDetailModalProps {
  showProjectDetailModal: boolean;
  setShowProjectDetailModal: (show: boolean) => void;
  darkMode: boolean;
  selectedProject: Project | null;
  onLikeProject?: (projectId: string) => void;
  onAddComment?: (projectId: string, author: string, content: string) => void;
}

export default function ProjectDetailModal({ 
  showProjectDetailModal, 
  setShowProjectDetailModal, 
  darkMode, 
  selectedProject,
  onLikeProject,
  onAddComment
}: ProjectDetailModalProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  
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
        <div className="relative group">
          {/* Container principal avec effet de profondeur */}
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Barre de titre du navigateur simulée */}
            <div className={`px-4 py-3 border-b ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className={`flex-1 text-center text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProject.live ? selectedProject.live : `${selectedProject.title}.com`}
                </div>
                <div className="w-4 h-4"></div>
              </div>
            </div>
            
            {/* Image avec effet de zoom au survol */}
            <div 
              className="relative overflow-hidden cursor-pointer"
              onClick={() => setShowImageModal(true)}
            >
              <img 
                src={selectedProject.image} 
                alt={`Screenshot de ${selectedProject.title}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay avec informations au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`px-4 py-2 rounded-lg backdrop-blur-sm ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                    <p className="text-white text-sm font-medium">Screenshot du projet</p>
                    <p className="text-white/80 text-xs">Cliquez pour agrandir</p>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
            Fonctionnalités Clés
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProject.id === 'gamerchallenges' && (
            <>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Système de Défis</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Création et participation à des défis gaming avec classement</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Authentification JWT</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sécurisation des comptes utilisateurs avec tokens</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Tableau de Bord</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suivi des performances et statistiques personnelles</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-orange-500' : 'bg-white border-gray-200 hover:border-orange-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>Chat Communautaire</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Communication entre joueurs et partage d'expériences</p>
              </motion.div>
            </>
          )}
          {selectedProject.id === 'devboard' && (
            <>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Gestion Kanban</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tableaux de bord pour organiser les tâches de développement</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Collaboration</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Travail d'équipe avec assignation de tâches</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Docker</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conteneurisation pour un déploiement facile</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-orange-500' : 'bg-white border-gray-200 hover:border-orange-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>Tests</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Suite de tests avec Vitest pour la qualité</p>
              </motion.div>
            </>
          )}
          {selectedProject.id === 'luxtime' && (
            <>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>E-commerce Complet</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Catalogue, panier et système de commande</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Paiement Stripe</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Intégration sécurisée des paiements en ligne</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Gestion Comptes</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Inscription, connexion et historique des commandes</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-orange-500' : 'bg-white border-gray-200 hover:border-orange-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>Design Responsive</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface adaptée mobile et desktop</p>
              </motion.div>
            </>
          )}
          {selectedProject.id === 'conquete-monde' && (
            <>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Blog MDX</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rédaction d'articles avec composants React</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Galerie Voyages</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Partage de photos et expériences de voyage</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Performance</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Optimisation Next.js avec SSR et ISR</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -2, scale: 1.02 }}
                className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-orange-500' : 'bg-white border-gray-200 hover:border-orange-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>Design Unique</h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interface personnalisée avec Tailwind CSS</p>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Défis techniques */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-orange-500' : 'bg-orange-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-orange-400' : 'text-gray-800'}`}>
            Défis Techniques
          </h3>
        </div>
        <div className={`p-8 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg`}>
          <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedProject.id === 'gamerchallenges' && (
              <>
                <li className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-1 ${darkMode ? 'bg-green-500' : 'bg-green-600'} shadow-sm`}></div>
                  <div>
                    <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Gestion d'état complexe :</span>
                    <span className="ml-2">Orchestration des défis, utilisateurs et classements en temps réel</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-1 ${darkMode ? 'bg-green-500' : 'bg-green-600'} shadow-sm`}></div>
                  <div>
                    <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Sécurité JWT :</span>
                    <span className="ml-2">Implémentation d'un système d'authentification robuste avec refresh tokens</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full mt-1 ${darkMode ? 'bg-green-500' : 'bg-green-600'} shadow-sm`}></div>
                  <div>
                    <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Performance :</span>
                    <span className="ml-2">Optimisation des requêtes PostgreSQL pour les classements dynamiques</span>
                  </div>
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

      {/* Section Likes et Commentaires */}
      <div className="mt-8 space-y-6">
        {/* Bouton Like */}
        <div className="flex justify-center">
          <LikeButton
            likes={selectedProject.likes}
            isLiked={selectedProject.isLiked || false}
            onLike={() => onLikeProject?.(selectedProject.id)}
            darkMode={darkMode}
            projectId={selectedProject.id}
          />
        </div>

        {/* Section Commentaires */}
        <CommentsSection
          comments={selectedProject.comments}
          onAddComment={(author, content) => onAddComment?.(selectedProject.id, author, content)}
          darkMode={darkMode}
          projectId={selectedProject.id}
        />
      </div>

      {/* Liens et actions */}
      <div className="flex flex-wrap gap-4">
        {selectedProject.github && (
          <motion.a 
            href={selectedProject.github} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-3 transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'} shadow-md hover:shadow-lg`}
          >
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
            Frontend GitHub
          </motion.a>
        )}
        {selectedProject.githubBackend && (
          <motion.a 
            href={selectedProject.githubBackend} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-3 transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'} shadow-md hover:shadow-lg`}
          >
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
            Backend GitHub
          </motion.a>
        )}
        {selectedProject.live && (
          <motion.a 
            href={selectedProject.live} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-medium flex items-center gap-3 transition-all duration-200 ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white shadow-lg hover:shadow-xl`}
          >
            <div className="w-2 h-2 rounded-full bg-white"></div>
            Voir la démo
          </motion.a>
        )}
        <motion.button
          onClick={() => setShowProjectDetailModal(false)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'} shadow-md hover:shadow-lg`}
        >
          Fermer
        </motion.button>
      </div>

      {/* Modal d'image agrandie */}
      {showImageModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
          
          {/* Image agrandie */}
          <div className="relative max-w-7xl max-h-[90vh] z-10">
            <img 
              src={selectedProject.image} 
              alt={`Screenshot agrandi de ${selectedProject.title}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowImageModal(false)}
              className={`absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg transition-colors duration-200`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Titre du projet */}
            <div className={`absolute bottom-4 left-4 right-4 px-4 py-3 rounded-lg backdrop-blur-sm ${darkMode ? 'bg-black/50' : 'bg-white/50'}`}>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedProject.title}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Screenshot du projet
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
