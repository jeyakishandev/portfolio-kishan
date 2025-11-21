"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Award, Code, Users, Zap, Target, CheckCircle, Star, Briefcase, GraduationCap, Plane } from "lucide-react";
import { experiences } from "@/lib/data";
import { useState } from "react";

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0); // Premier élément ouvert par défaut

  const getExperienceIcon = (title: string) => {
    if (title.includes("Développeur")) return Code;
    if (title.includes("Stage")) return GraduationCap;
    if (title.includes("Aviation") || title.includes("Agent de Trafic")) return Plane;
    if (title.includes("Équipier")) return Users;
    return Briefcase;
  };

  const getExperienceColor = (index: number) => {
    const colors = [
      { primary: "text-[#3b82f6]", bg: "bg-[#3b82f6]/10", border: "border-[#3b82f6]/20" },
      { primary: "text-[#10b981]", bg: "bg-[#10b981]/10", border: "border-[#10b981]/20" },
      { primary: "text-[#8b5cf6]", bg: "bg-[#8b5cf6]/10", border: "border-[#8b5cf6]/20" },
      { primary: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/20" },
      { primary: "text-[#ef4444]", bg: "bg-[#ef4444]/10", border: "border-[#ef4444]/20" }
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mon Parcours Professionnel</h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto mb-8">
            De l'aviation au développement web, découvrez mon évolution professionnelle 
            et les compétences acquises à chaque étape.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne de timeline */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-[#334155]' : 'bg-[#e2e8f0]'
          }`} />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getExperienceIcon(exp.title);
              const colors = getExperienceColor(index);
              const isExpanded = expandedExperience === index;
              const isCurrentJob = exp.status === "En cours";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Point sur la timeline */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                      isCurrentJob 
                        ? 'bg-[#10b981] border-[#10b981] shadow-lg shadow-[#10b981]/50'
                        : darkMode 
                          ? 'bg-[#1e293b] border-[#334155]' 
                          : 'bg-white border-[#e2e8f0]'
                    } z-10`}
                  />

                  {/* Carte d'expérience */}
                  <div className="ml-16">
                    <motion.div
                      whileHover={{ y: -4 }}
                      onClick={() => setExpandedExperience(isExpanded ? null : index)}
                      className={`cursor-pointer rounded-2xl border transition-all duration-300 ${
                        isExpanded
                          ? darkMode
                            ? `bg-gradient-to-br from-[#1e293b] to-[#0f172a] ${colors.border} border-2 shadow-xl`
                            : `bg-gradient-to-br from-white to-[#f8fafc] ${colors.border} border-2 shadow-xl`
                          : darkMode
                            ? 'bg-[#1e293b] border-[#334155] hover:border-[#475569]'
                            : 'bg-white border-[#e2e8f0] hover:border-[#cbd5e1]'
                      } ${isCurrentJob ? 'ring-2 ring-[#10b981]/20' : ''}`}
                    >
                      {/* Header de la carte */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${colors.bg}`}>
                              <Icon className={`w-6 h-6 ${colors.primary}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                {isCurrentJob && (
                                  <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30"
                                  >
                                    <div className="flex items-center gap-1">
                                      <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                                      {exp.status}
                                    </div>
                                  </motion.span>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-[#64748b] mb-2">
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  <span className="font-medium text-[#3b82f6]">{exp.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                              </div>
                              <p className="text-[#64748b] leading-relaxed">{exp.description}</p>
                            </div>
                          </div>
                          
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-2 rounded-lg ${
                              darkMode ? 'hover:bg-[#334155]' : 'hover:bg-[#f1f5f9]'
                            }`}
                          >
                            <CheckCircle className="w-5 h-5 text-[#64748b]" />
                          </motion.div>
                        </div>

                        {/* Technologies */}
                        {exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, isExpanded ? exp.technologies.length : 4).map((tech) => (
                              <span
                                key={tech}
                                className={`text-xs px-3 py-1 rounded-full font-medium ${
                                  darkMode 
                                    ? 'bg-[#334155] text-[#e2e8f0]' 
                                    : 'bg-[#f1f5f9] text-[#64748b]'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {!isExpanded && exp.technologies.length > 4 && (
                              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                darkMode ? 'bg-[#334155] text-[#94a3b8]' : 'bg-[#f1f5f9] text-[#64748b]'
                              }`}>
                                +{exp.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Détails étendus */}
                      {isExpanded && exp.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`border-t px-6 pb-6 ${
                            darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'
                          }`}
                        >
                          <div className="pt-6 space-y-6">
                            {/* Technologies détaillées */}
                            {exp.details.technologies && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`p-4 rounded-xl ${
                                  darkMode ? 'bg-[#0f172a]/50' : 'bg-[#f8fafc]'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Code className="w-5 h-5 text-[#3b82f6]" />
                                  <h4 className="font-semibold text-[#3b82f6]">Stack Technique</h4>
                                </div>
                                <p className="text-sm leading-relaxed">{exp.details.technologies}</p>
                              </motion.div>
                            )}

                            {/* Fonctionnalités */}
                            {exp.details.features && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`p-4 rounded-xl ${
                                  darkMode ? 'bg-[#0f172a]/50' : 'bg-[#f8fafc]'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Zap className="w-5 h-5 text-[#10b981]" />
                                  <h4 className="font-semibold text-[#10b981]">Fonctionnalités Développées</h4>
                                </div>
                                <ul className="space-y-2">
                                  {exp.details.features.map((feature, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.3 + i * 0.1 }}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <Star className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}

                            {/* Qualité & Sécurité */}
                            {exp.details.quality && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={`p-4 rounded-xl ${
                                  darkMode ? 'bg-[#0f172a]/50' : 'bg-[#f8fafc]'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Award className="w-5 h-5 text-[#8b5cf6]" />
                                  <h4 className="font-semibold text-[#8b5cf6]">Qualité & Sécurité</h4>
                                </div>
                                <ul className="space-y-2">
                                  {exp.details.quality.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + i * 0.1 }}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <CheckCircle className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}

                            {/* Développement */}
                            {exp.details.development && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className={`p-4 rounded-xl ${
                                  darkMode ? 'bg-[#0f172a]/50' : 'bg-[#f8fafc]'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Target className="w-5 h-5 text-[#f59e0b]" />
                                  <h4 className="font-semibold text-[#f59e0b]">Développement</h4>
                                </div>
                                <ul className="space-y-2">
                                  {exp.details.development.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.5 + i * 0.1 }}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <Code className="w-4 h-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}

                            {/* Collaboration */}
                            {exp.details.collaboration && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className={`p-4 rounded-xl ${
                                  darkMode ? 'bg-[#0f172a]/50' : 'bg-[#f8fafc]'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <Users className="w-5 h-5 text-[#ef4444]" />
                                  <h4 className="font-semibold text-[#ef4444]">Collaboration</h4>
                                </div>
                                <ul className="space-y-2">
                                  {exp.details.collaboration.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.6 + i * 0.1 }}
                                      className="flex items-start gap-2 text-sm"
                                    >
                                      <Users className="w-4 h-4 text-[#ef4444] mt-0.5 flex-shrink-0" />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}

                            {/* Projet de fin de formation */}
                            {exp.details.project && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className={`p-4 rounded-xl border-l-4 border-[#3b82f6] ${
                                  darkMode ? 'bg-[#3b82f6]/5' : 'bg-[#3b82f6]/5'
                                }`}
                              >
                                <h4 className="font-semibold text-[#3b82f6] mb-2">Projet de fin de formation</h4>
                                <p className="text-sm leading-relaxed">{exp.details.project}</p>
                              </motion.div>
                            )}

                            {/* Méthodologie */}
                            {exp.details.methodology && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className={`p-4 rounded-xl border-l-4 border-[#10b981] ${
                                  darkMode ? 'bg-[#10b981]/5' : 'bg-[#10b981]/5'
                                }`}
                              >
                                <h4 className="font-semibold text-[#10b981] mb-2">Méthodologie</h4>
                                <p className="text-sm leading-relaxed">{exp.details.methodology}</p>
                              </motion.div>
                            )}

                            {/* Compétences */}
                            {exp.details.skills && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className={`p-4 rounded-xl border-l-4 border-[#8b5cf6] ${
                                  darkMode ? 'bg-[#8b5cf6]/5' : 'bg-[#8b5cf6]/5'
                                }`}
                              >
                                <h4 className="font-semibold text-[#8b5cf6] mb-2">Compétences acquises</h4>
                                <p className="text-sm leading-relaxed">{exp.details.skills}</p>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Résumé des compétences */}
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
          <Briefcase className="w-8 h-8 mx-auto mb-4 text-[#3b82f6]" />
          <h3 className="text-xl font-bold mb-4">Évolution professionnelle</h3>
          <p className="text-[#64748b] mb-6 max-w-3xl mx-auto leading-relaxed">
            Mon parcours illustre une progression constante : de la rigueur acquise dans l'aviation 
            aux compétences techniques du développement web. Chaque expérience m'a apporté des 
            compétences complémentaires qui font ma force aujourd'hui.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#3b82f6] mb-1">5+</div>
              <div className="text-sm text-[#64748b]">Expériences</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#10b981] mb-1">1 an</div>
              <div className="text-sm text-[#64748b]">En développement</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#8b5cf6] mb-1">2</div>
              <div className="text-sm text-[#64748b]">Secteurs d'activité</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#f59e0b] mb-1">100%</div>
              <div className="text-sm text-[#64748b]">Évolution</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}