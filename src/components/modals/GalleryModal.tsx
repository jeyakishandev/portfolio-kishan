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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            onClick={() => {
              closeAllModals();
              setSelectedProject(project);
              setShowProjectDetailModal(true);
            }}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-green-500' : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-400'} shadow-lg hover:shadow-2xl`}
          >
            {/* Header avec image du projet ou placeholder */}
            <div className="h-56 relative overflow-hidden">
              {project.image ? (
                <div className="relative h-full">
                  <img 
                    src={project.image} 
                    alt={`Screenshot de ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-indigo-700/20"></div>
                </div>
              ) : (
                <div className="h-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-white text-center relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-8 h-8 rounded bg-white/30"></div>
                    </div>
                    <p className="text-lg font-bold opacity-95">{project.title}</p>
                    <p className="text-sm opacity-80 mt-1">Projet développé</p>
                  </div>
                </div>
              )}
              
              {/* Overlay avec informations */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Voir les détails</p>
                </div>
              </div>
              
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            
            {/* Contenu */}
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              {/* Technologies (aperçu) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'}`}
                  >
                    Code
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Indicateur de clic */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              Cliquer pour voir
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
