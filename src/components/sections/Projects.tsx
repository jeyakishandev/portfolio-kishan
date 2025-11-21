"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Users, Calendar, Star, Award, Zap } from "lucide-react";
import { Project } from "@/types/Project";
import { projects } from "@/lib/data";
import { useState } from "react";

interface ProjectsProps {
  darkMode: boolean;
  onProjectClick: (project: Project) => void;
}

export default function Projects({ darkMode, onProjectClick }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "Tous les projets", count: projects.length },
    { id: "fullstack", label: "Full-Stack", count: projects.filter(p => p.technologies.includes("React") && (p.technologies.includes("Node.js") || p.technologies.includes("Express.js"))).length },
    { id: "frontend", label: "Front-End", count: projects.filter(p => p.technologies.includes("React") || p.technologies.includes("Next.js")).length },
    { id: "team", label: "En équipe", count: projects.filter(p => p.stats?.team && p.stats.team !== "Solo (développement fullstack)").length }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "fullstack") return project.technologies.includes("React") && (project.technologies.includes("Node.js") || project.technologies.includes("Express.js"));
    if (filter === "frontend") return project.technologies.includes("React") || project.technologies.includes("Next.js");
    if (filter === "team") return project.stats?.team && project.stats.team !== "Solo (développement fullstack)";
    return true;
  });

  const getProjectType = (project: Project) => {
    if (project.stats?.team && project.stats.team !== "Solo (développement fullstack)") {
      return { label: "Équipe", icon: Users, color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10" };
    }
    if (project.technologies.includes("React") && (project.technologies.includes("Node.js") || project.technologies.includes("Express.js"))) {
      return { label: "Full-Stack", icon: Code, color: "text-[#3b82f6]", bg: "bg-[#3b82f6]/10" };
    }
    return { label: "Front-End", icon: Zap, color: "text-[#10b981]", bg: "bg-[#10b981]/10" };
  };

  const getProjectStatus = (project: Project) => {
    if (project.live) {
      return { label: "En ligne", icon: Star, color: "text-[#10b981]", bg: "bg-[#10b981]/10" };
    }
    return { label: "En développement", icon: Calendar, color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10" };
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto mb-8">
            Découvrez mes réalisations, des applications web complètes aux projets collaboratifs. 
            Chaque projet reflète ma passion pour le développement et l'innovation.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? darkMode
                      ? 'bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30'
                      : 'bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20'
                    : darkMode
                      ? 'bg-[#1e293b] text-[#e2e8f0] border border-[#334155] hover:border-[#3b82f6]'
                      : 'bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#3b82f6]'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filter === category.id
                    ? 'bg-white/20 text-white'
                    : darkMode
                      ? 'bg-[#334155] text-[#94a3b8]'
                      : 'bg-[#f1f5f9] text-[#64748b]'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const projectType = getProjectType(project);
            const projectStatus = getProjectStatus(project);
            const TypeIcon = projectType.icon;
            const StatusIcon = projectStatus.icon;
            const isHovered = hoveredProject === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => onProjectClick(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode 
                    ? 'bg-[#1e293b] border border-[#334155] hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-[#3b82f6]/20'
                    : 'bg-white border border-[#e2e8f0] hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-[#3b82f6]/10'
                }`}
              >
                {/* Image du projet */}
                <div className="relative aspect-video bg-gradient-to-br from-[#3b82f6] to-[#10b981] overflow-hidden">
                  {project.image ? (
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                  
                  {/* Overlay avec badges */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${projectType.color} ${projectType.bg} border border-white/20`}>
                      <TypeIcon className="w-3 h-3" />
                      {projectType.label}
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${projectStatus.color} ${projectStatus.bg} border border-white/20`}>
                      <StatusIcon className="w-3 h-3" />
                      {projectStatus.label}
                    </div>
                  </div>

                  {/* Liens rapides */}
                  <motion.div 
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    {project.stats?.duration && (
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-[#334155] text-[#94a3b8]' : 'bg-[#f1f5f9] text-[#64748b]'
                      }`}>
                        <Calendar className="w-3 h-3" />
                        {project.stats.duration}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-[#64748b] mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          darkMode 
                            ? 'bg-[#334155] text-[#e2e8f0]' 
                            : 'bg-[#f1f5f9] text-[#64748b]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        darkMode ? 'bg-[#334155] text-[#94a3b8]' : 'bg-[#f1f5f9] text-[#64748b]'
                      }`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Statistiques */}
                  {project.stats && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.stats.team && (
                        <div className="text-center">
                          <div className="text-sm font-bold text-[#3b82f6]">{project.stats.team.includes("4") ? "4" : "1"}</div>
                          <div className="text-xs text-[#64748b]">Équipe</div>
                        </div>
                      )}
                      {project.stats.linesOfCode && (
                        <div className="text-center">
                          <div className="text-sm font-bold text-[#10b981]">
                            {project.stats.linesOfCode.includes("15") ? "15k" : "4k"}
                          </div>
                          <div className="text-xs text-[#64748b]">Lignes</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => onProjectClick(project)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        darkMode
                          ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                          : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                      }`}
                    >
                      Voir détails
                    </motion.button>
                    
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-4 py-2 rounded-lg font-medium border transition-colors ${
                          darkMode
                            ? 'border-[#334155] hover:bg-[#1e293b] text-[#e2e8f0]'
                            : 'border-[#e2e8f0] hover:bg-[#f8fafc] text-[#64748b]'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code className="w-16 h-16 mx-auto mb-4 text-[#64748b]" />
            <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
            <p className="text-[#64748b]">Essayez un autre filtre pour voir plus de projets.</p>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-12 p-8 rounded-2xl text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-[#3b82f6]/10 via-[#8b5cf6]/10 to-[#10b981]/10 border border-[#3b82f6]/20'
              : 'bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#10b981]/5 border border-[#3b82f6]/20'
          }`}
        >
          <Award className="w-8 h-8 mx-auto mb-4 text-[#3b82f6]" />
          <h3 className="text-xl font-bold mb-4">Intéressé par mon travail ?</h3>
          <p className="text-[#64748b] mb-6 max-w-2xl mx-auto">
            Ces projets représentent mon évolution en tant que développeur. 
            Chacun m'a permis d'apprendre de nouvelles technologies et d'améliorer mes compétences.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              darkMode
                ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
            }`}
          >
            Discutons de votre projet
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}