"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Target, Heart, Code2, Plane, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    {
      icon: Plane,
      title: "Aviation → Tech",
      description: "Reconversion réussie d'agent de trafic aérien vers développeur full-stack",
      color: "text-[#3b82f6]"
    },
    {
      icon: Code2,
      title: "Formation intensive",
      description: "École O'clock - Spécialisation JavaScript Full-Stack avec mention",
      color: "text-[#10b981]"
    },
    {
      icon: Award,
      title: "Projets concrets",
      description: "4+ applications déployées en production avec architectures complètes",
      color: "text-[#8b5cf6]"
    },
    {
      icon: Users,
      title: "Travail d'équipe",
      description: "Expérience en méthode Agile/Scrum et collaboration technique",
      color: "text-[#f59e0b]"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Précision",
      description: "Rigueur acquise dans l'aviation appliquée au développement"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Enthousiasme pour les nouvelles technologies et l'innovation"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Esprit d'équipe et communication efficace"
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center px-4">À propos de moi</h2>
        
        {/* Carte principale */}
        <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 ${
          darkMode ? 'bg-[#1e293b] border border-[#334155]' : 'bg-[#f8fafc] border border-[#e2e8f0]'
        }`}>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Photo/Avatar */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#10b981] flex items-center justify-center text-4xl sm:text-6xl font-bold text-white shadow-xl overflow-hidden">
                {personalInfo.avatar ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover rounded-xl sm:rounded-2xl"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                ) : (
                  "K"
                )}
              </div>
            </motion.div>
            
            {/* Informations principales */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-lg mb-4 text-[#64748b] flex items-center gap-2">
                  <span className="font-medium text-[#3b82f6]">{personalInfo.title}</span>
                  <span>•</span>
                  <span>{personalInfo.age} ans</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {personalInfo.location}
                  </span>
                </p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-[#10b981]/20 text-[#10b981]' : 'bg-[#10b981]/10 text-[#059669]'
                }`}>
                  <Calendar className="w-4 h-4" />
                  {personalInfo.status}
                </div>
              </div>

              {/* Histoire personnelle */}
              <div className={`p-6 rounded-xl mb-6 ${
                darkMode 
                  ? 'bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 border border-[#3b82f6]/20' 
                  : 'bg-gradient-to-r from-[#3b82f6]/5 to-[#8b5cf6]/5 border border-[#3b82f6]/20'
              }`}>
                <h4 className="text-lg font-bold mb-3 text-[#3b82f6] flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  Mon parcours : De l'aviation au code
                </h4>
                <p className="mb-4 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-sm text-[#64748b] italic">
                  "La rigueur et la gestion du stress acquises dans l'aviation sont mes atouts dans le développement."
                </p>
              </div>

              {/* Description détaillée */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Passionné par le développement web moderne, je crée des applications performantes et élégantes 
                  en utilisant les dernières technologies. Ma spécialisation en <span className="font-semibold text-[#3b82f6]">JavaScript Full-Stack</span> 
                  me permet de maîtriser l'ensemble de la chaîne de développement.
                </p>
                <p className="leading-relaxed">
                  Après une reconversion professionnelle réussie, j'ai développé plusieurs projets fullstack 
                  déployés en production, démontrant mes compétences en <span className="font-semibold text-[#10b981]">architecture</span>, 
                  <span className="font-semibold text-[#8b5cf6]"> sécurité</span> et bonnes pratiques de développement.
                </p>
                <p className="leading-relaxed">
                  Actuellement en poste chez <span className="font-semibold text-[#f59e0b]">Makara Media</span>, 
                  je contribue au développement d'une plateforme SaaS de gestion multi-réseaux sociaux, 
                  en utilisant des technologies modernes comme React 19, Node.js/TypeScript et PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Points forts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Mes points forts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl text-center ${
                    darkMode ? 'bg-[#1e293b] border border-[#334155]' : 'bg-white border border-[#e2e8f0]'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-4 ${highlight.color}`} />
                  <h4 className="font-bold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-[#64748b] leading-relaxed">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Valeurs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Mes valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`p-6 rounded-xl text-center ${
                    darkMode 
                      ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155]' 
                      : 'bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0]'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-3 text-[#3b82f6]" />
                  <h4 className="font-bold mb-2 text-[#3b82f6]">{value.title}</h4>
                  <p className="text-sm text-[#64748b]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Objectifs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-2xl text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-[#3b82f6]/10 via-[#8b5cf6]/10 to-[#10b981]/10 border border-[#3b82f6]/20' 
              : 'bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#10b981]/5 border border-[#3b82f6]/20'
          }`}
        >
          <Target className="w-8 h-8 mx-auto mb-4 text-[#3b82f6]" />
          <h3 className="text-xl font-bold mb-4">Mes objectifs</h3>
          <p className="text-[#64748b] leading-relaxed max-w-3xl mx-auto">
            Continuer à évoluer dans l'écosystème JavaScript/TypeScript, contribuer à des projets innovants 
            et partager mes connaissances avec la communauté. Je recherche des opportunités pour approfondir 
            mes compétences en architecture logicielle et en technologies émergentes.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}