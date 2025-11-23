"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Calendar, Users, Code, Database, Shield, Award, Star, CheckCircle, ArrowRight, Globe, Server } from "lucide-react";
import { Project } from "@/types/Project";
import { useState } from "react";

interface ProjectModalProps {
  project: Project;
  darkMode: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, darkMode, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech" | "stats">("overview");

  const tabs = [
    { id: "overview", label: "Vue d'ensemble", icon: Star },
    { id: "features", label: "Fonctionnalités", icon: CheckCircle },
    { id: "tech", label: "Technologies", icon: Code },
    { id: "stats", label: "Statistiques", icon: Award }
  ];

  const getTechCategory = (tech: string) => {
    const frontend = ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Styled Components", "Framer Motion"];
    const backend = ["Node.js", "Express.js", "API REST", "JWT", "bcryptjs", "Helmet", "Express Validator", "Rate Limiting"];
    const database = ["PostgreSQL", "MySQL", "Sequelize", "Prisma ORM"];
    const tools = ["Git", "GitHub", "Docker", "Vercel", "Railway", "Render", "Vite", "Webpack"];
    const testing = ["Jest", "Vitest", "Cypress"];

    if (frontend.some(f => tech.includes(f))) return { category: "Frontend", color: "text-[#3b82f6]", bg: "bg-[#3b82f6]/10", icon: Code };
    if (backend.some(b => tech.includes(b))) return { category: "Backend", color: "text-[#10b981]", bg: "bg-[#10b981]/10", icon: Server };
    if (database.some(d => tech.includes(d))) return { category: "Database", color: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10", icon: Database };
    if (testing.some(t => tech.includes(t))) return { category: "Testing", color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", icon: Shield };
    if (tools.some(t => tech.includes(t))) return { category: "Tools", color: "text-[#ef4444]", bg: "bg-[#ef4444]/10", icon: Award };
    return { category: "Other", color: "text-[#64748b]", bg: "bg-[#64748b]/10", icon: Code };
  };

  const groupedTechnologies = project.technologies.reduce((acc, tech) => {
    const techInfo = getTechCategory(tech);
    if (!acc[techInfo.category]) {
      acc[techInfo.category] = { ...techInfo, techs: [] };
    }
    acc[techInfo.category].techs.push(tech);
    return acc;
  }, {} as Record<string, any>);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`max-w-6xl w-full rounded-xl sm:rounded-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-[#0f172a]' : 'bg-white'
          } shadow-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header avec image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[#3b82f6] to-[#10b981] relative overflow-hidden">
              {project.image && (
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Bouton fermer */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                aria-label="Fermer le modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Titre sur l'image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 break-words"
                >
                  {project.title}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {project.stats?.duration && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {project.stats.duration}
                    </div>
                  )}
                  {project.stats?.team && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      {project.stats.team}
                    </div>
                  )}
                  {project.live && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#10b981]/80 backdrop-blur-sm text-white text-xs sm:text-sm">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      En ligne
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation par onglets */}
          <div className={`border-b ${darkMode ? 'border-[#1e293b]' : 'border-[#e2e8f0]'}`}>
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? darkMode
                          ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] bg-[#3b82f6]/5'
                          : 'text-[#3b82f6] border-b-2 border-[#3b82f6] bg-[#3b82f6]/5'
                        : darkMode
                          ? 'text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]'
                          : 'text-[#64748b] hover:text-[#1e293b] hover:bg-[#f8fafc]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Contenu des onglets */}
          <div className="p-4 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Description du projet</h2>
                  <div className="prose prose-sm sm:prose-lg max-w-none">
                    <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-4 sm:mb-6 whitespace-pre-line">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Liens d'action */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all ${
                          darkMode
                            ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3b82f6]/30'
                            : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3b82f6]/20'
                        }`}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">{project.githubBackend ? 'Code Frontend' : 'Code Source'}</span>
                        <span className="sm:hidden">Code</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                    )}
                    
                    {project.githubBackend && (
                      <motion.a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium border-2 transition-all ${
                          darkMode
                            ? 'border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white'
                            : 'border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white'
                        }`}
                      >
                        <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">Code Backend</span>
                        <span className="sm:hidden">Backend</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                    )}
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium border-2 transition-all ${
                          darkMode
                            ? 'border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white'
                            : 'border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">Voir le projet</span>
                        <span className="sm:hidden">Voir</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "features" && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Fonctionnalités principales</h2>
                  {project.features && project.features.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                            darkMode 
                              ? 'bg-[#1e293b] border-[#334155]' 
                              : 'bg-[#f8fafc] border-[#e2e8f0]'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981] mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-[#64748b] italic">Aucune fonctionnalité détaillée disponible pour ce projet.</p>
                  )}
                </motion.div>
              )}

              {activeTab === "tech" && (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Stack technique</h2>
                  <div className="space-y-6">
                    {Object.entries(groupedTechnologies).map(([category, info]) => {
                      const Icon = info.icon;
                      return (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl border ${
                            darkMode 
                              ? 'bg-[#1e293b] border-[#334155]' 
                              : 'bg-[#f8fafc] border-[#e2e8f0]'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`p-1.5 sm:p-2 rounded-lg ${info.bg}`}>
                              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${info.color}`} />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold">{category}</h3>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {info.techs.map((tech: string) => (
                              <span
                                key={tech}
                                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${info.color} ${info.bg} border ${
                                  darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "stats" && (
                <motion.div
                  key="stats"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Statistiques du projet</h2>
                  {project.stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {project.stats.duration && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
                            darkMode ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'
                          }`}
                        >
                          <Calendar className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#3b82f6]" />
                          <div className="text-xl sm:text-2xl font-bold text-[#3b82f6] mb-1">{project.stats.duration}</div>
                          <div className="text-xs sm:text-sm text-[#64748b]">Durée de développement</div>
                        </motion.div>
                      )}
                      
                      {project.stats.team && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
                            darkMode ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'
                          }`}
                        >
                          <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#10b981]" />
                          <div className="text-xl sm:text-2xl font-bold text-[#10b981] mb-1">
                            {project.stats.team.includes("4") ? "4" : "1"}
                          </div>
                          <div className="text-xs sm:text-sm text-[#64748b]">Taille de l'équipe</div>
                        </motion.div>
                      )}
                      
                      {project.stats.linesOfCode && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
                            darkMode ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'
                          }`}
                        >
                          <Code className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#8b5cf6]" />
                          <div className="text-xl sm:text-2xl font-bold text-[#8b5cf6] mb-1">{project.stats.linesOfCode}</div>
                          <div className="text-xs sm:text-sm text-[#64748b]">Lignes de code</div>
                        </motion.div>
                      )}
                      
                      {project.stats.endpoints && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
                            darkMode ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'
                          }`}
                        >
                          <Server className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#f59e0b]" />
                          <div className="text-xl sm:text-2xl font-bold text-[#f59e0b] mb-1">{project.stats.endpoints}</div>
                          <div className="text-xs sm:text-sm text-[#64748b]">Endpoints API</div>
                        </motion.div>
                      )}
                      
                      {project.stats.components && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
                            darkMode ? 'bg-[#1e293b]' : 'bg-[#f8fafc]'
                          }`}
                        >
                          <Award className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#ef4444]" />
                          <div className="text-xl sm:text-2xl font-bold text-[#ef4444] mb-1">{project.stats.components}</div>
                          <div className="text-xs sm:text-sm text-[#64748b]">Composants React</div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-[#64748b] italic">Aucune statistique disponible pour ce projet.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}