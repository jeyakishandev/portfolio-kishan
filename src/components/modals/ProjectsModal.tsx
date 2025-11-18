"use client";
import { motion } from "framer-motion";

import { Project } from '@/types/Project';

interface ProjectsModalProps {
  showProjectsModal: boolean;
  setShowProjectsModal: (show: boolean) => void;
  darkMode: boolean;
  projects: Project[];
  setSelectedProject: (project: Project) => void;
  setShowProjectDetailModal: (show: boolean) => void;
}

export default function ProjectsModal({ 
  showProjectsModal, 
  setShowProjectsModal, 
  darkMode, 
  projects,
  setSelectedProject,
  setShowProjectDetailModal
}: ProjectsModalProps) {
  if (!showProjectsModal) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Mes Projets
        </h2>
        <button
          onClick={() => setShowProjectsModal(false)}
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>

      <div className="mb-8">
        <div className={`p-6 rounded-lg border-l-4 ${darkMode ? 'bg-gray-800 border-green-500' : 'bg-gray-50 border-green-400'}`}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Voici une sélection de projets que j'ai réalisés ou imaginés. Les projets concrets sont 
            déjà développés, tandis que les projets exploratoires représentent ma volonté d'innover.
          </p>
        </div>
      </div>

      {/* Projets Concrets */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
            Projets Concrets
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              onClick={() => {
                setSelectedProject(project);
                setShowProjectDetailModal(true);
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-green-500' : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-400'} shadow-lg hover:shadow-xl`}
            >
              {/* Header avec indicateur de statut */}
              <div className={`p-6 pb-4 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-750' : 'bg-gradient-to-r from-gray-50 to-white'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'} shadow-sm`}></div>
                    <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h4>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                    Actif
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className={`px-6 pb-6 flex gap-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'}`}
                  >
                    Code Source
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                  >
                    Voir la démo
                  </a>
                )}
              </div>

              {/* Effet de survol */}
              <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-green-500/5 to-transparent' : 'from-green-400/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projets Exploratoires */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-gray-800'}`}>
            Projets Exploratoires
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -2, scale: 1.01 }}
            className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} shadow-sm`}></div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                Agents IA
              </h4>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Concept
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Idée de créer des assistants intelligents pour automatiser certaines tâches.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -2, scale: 1.01 }}
            className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} shadow-sm`}></div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                SnackNow
              </h4>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Concept
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Concept d'application géolocalisée pour trouver des snacks/restaurants ouverts en temps réel.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -2, scale: 1.01 }}
            className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} shadow-sm`}></div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                PlanMyTrip AI
              </h4>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Concept
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Idée de planificateur de voyages courts automatisé par IA.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -2, scale: 1.01 }}
            className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} shadow-sm`}></div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                AdminZero
              </h4>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                Concept
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Concept d'assistant IA pour simplifier les démarches administratives.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
