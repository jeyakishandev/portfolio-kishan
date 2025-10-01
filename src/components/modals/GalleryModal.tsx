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

interface GalleryModalProps {
  showGalleryModal: boolean;
  setShowGalleryModal: (show: boolean) => void;
  darkMode: boolean;
  projects: Project[];
  closeAllModals: () => void;
  setSelectedProject: (project: Project) => void;
  setShowProjectDetailModal: (show: boolean) => void;
}

export default function GalleryModal({ 
  showGalleryModal, 
  setShowGalleryModal, 
  darkMode, 
  projects,
  closeAllModals,
  setSelectedProject,
  setShowProjectDetailModal
}: GalleryModalProps) {
  if (!showGalleryModal) return null;

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
          Galerie de Projets
        </h2>
        <button
          onClick={() => setShowGalleryModal(false)}
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => {
              closeAllModals();
              setSelectedProject(project);
              setShowProjectDetailModal(true);
            }}
            className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🖥️</div>
                <p className="text-sm opacity-90">{project.title}</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}
