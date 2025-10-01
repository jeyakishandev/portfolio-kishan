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

      <div className="mb-6">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Voici une sélection de projets que j'ai réalisés ou imaginés. Les projets concrets sont 
          déjà développés, tandis que les projets exploratoires représentent ma volonté d'innover.
        </p>
      </div>

      {/* Projets Concrets */}
      <div className="mb-8">
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          🚀 Projets Concrets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => {
                setSelectedProject(project);
                setShowProjectDetailModal(true);
              }}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></div>
                <h4 className={`font-semibold ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                  {project.title}
                </h4>
              </div>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-3 py-1 text-xs rounded ${darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-200 hover:bg-green-300'}`}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projets Exploratoires */}
      <div>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-gray-800'}`}>
          🔬 Projets Exploratoires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                Agents IA
              </h4>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Idée de créer des assistants intelligents pour automatiser certaines tâches.
            </p>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                SnackNow
              </h4>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Concept d'application géolocalisée pour trouver des snacks/restaurants ouverts en temps réel.
            </p>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                PlanMyTrip AI
              </h4>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Idée de planificateur de voyages courts automatisé par IA.
            </p>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                AdminZero
              </h4>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Concept d'assistant IA pour simplifier les démarches administratives.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
