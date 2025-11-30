"use client";
import { motion } from "framer-motion";
import { Code, Database, Shield, Wrench, Lightbulb, Star, CheckCircle, TrendingUp } from "lucide-react";
import { skills } from "@/lib/data";
import { useState } from "react";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillsWithDetails = [
    { 
      category: "Front-End", 
      icon: Code,
      color: "text-[#3b82f6]",
      bgColor: darkMode ? "from-[#3b82f6]/10 to-[#1e40af]/5" : "from-[#3b82f6]/5 to-[#1e40af]/3",
      items: [
        { name: "React.js", experience: "Avancé", description: "Hooks, Context, Performance, Testing" },
        { name: "Next.js", experience: "Avancé", description: "SSR, API Routes, Optimisation, Déploiement" },
        { name: "TypeScript", experience: "Avancé", description: "Types avancés, Interfaces, Génériques" },
        { name: "JavaScript (ES6+)", experience: "Expert", description: "Async/Await, Modules, Classes, Closures" },
        { name: "HTML5 / CSS3", experience: "Avancé", description: "Sémantique, Flexbox, Grid, Animations" },
        { name: "Tailwind CSS", experience: "Avancé", description: "Responsive, Components, Customisation" },
        { name: "React Router", experience: "Avancé", description: "Routing, Navigation, Protected routes" },
        { name: "Styled Components", experience: "Intermédiaire", description: "CSS-in-JS, Theming, Dynamic styles" },
        { name: "Framer Motion", experience: "Avancé", description: "Animations, Transitions, Gestures" },
        { name: "React Query", experience: "Intermédiaire", description: "Data fetching, Caching, Synchronisation" },
        { name: "Zustand", experience: "Intermédiaire", description: "State management, Stores, Persistence" },
        { name: "Axios", experience: "Avancé", description: "HTTP client, Interceptors, Error handling" },
        { name: "Vite", experience: "Avancé", description: "Build tool, HMR, Optimisation" },
        { name: "Bootstrap", experience: "Intermédiaire", description: "Grilles, Composants, Thèmes" }
      ]
    },
    { 
      category: "Back-End", 
      icon: Database,
      color: "text-[#10b981]",
      bgColor: darkMode ? "from-[#10b981]/10 to-[#059669]/5" : "from-[#10b981]/5 to-[#059669]/3",
      items: [
        { name: "Node.js avec Express", experience: "Avancé", description: "API REST, Middleware, Routing, Sécurité" },
        { name: "NestJS", experience: "Intermédiaire", description: "Architecture modulaire, Dependency injection, Modules" },
        { name: "API REST", experience: "Expert", description: "CRUD, Authentification, Documentation, Versioning" },
        { name: "Sequelize / Prisma", experience: "Avancé", description: "ORM, Relations, Migrations, Optimisation" },
        { name: "Socket.io", experience: "Intermédiaire", description: "WebSockets, Temps réel, Notifications push" },
        { name: "Swagger", experience: "Intermédiaire", description: "Documentation API, OpenAPI, Endpoints" },
        { name: "Express Validator", experience: "Intermédiaire", description: "Validation données, Sanitization, Middleware" },
        { name: "Intégration APIs tierces", experience: "Intermédiaire", description: "OAuth, Webhooks, SDKs, Rate limiting" }
      ]
    },
    { 
      category: "Bases de données", 
      icon: Database,
      color: "text-[#8b5cf6]",
      bgColor: darkMode ? "from-[#8b5cf6]/10 to-[#7c3aed]/5" : "from-[#8b5cf6]/5 to-[#7c3aed]/3",
      items: [
        { name: "PostgreSQL", experience: "Avancé", description: "Requêtes complexes, Index, Performance, Triggers" },
        { name: "SQLite", experience: "Intermédiaire", description: "Base de données légère, Transactions, Migrations" },
        { name: "MySQL", experience: "Avancé", description: "Optimisation, Procédures stockées, Réplication" },
        { name: "Conception et modélisation", experience: "Expert", description: "Normalisation, Relations, Contraintes" },
        { name: "MCD/MLD, Merise", experience: "Avancé", description: "Analyse fonctionnelle, Conception logique" },
        { name: "Optimisation requêtes", experience: "Avancé", description: "Explain Plan, Index, Performances" }
      ]
    },
    { 
      category: "Sécurité & Auth", 
      icon: Shield,
      color: "text-[#f59e0b]",
      bgColor: darkMode ? "from-[#f59e0b]/10 to-[#d97706]/5" : "from-[#f59e0b]/5 to-[#d97706]/3",
      items: [
        { name: "JWT (JSON Web Token)", experience: "Expert", description: "Authentification, Refresh tokens, Claims" },
        { name: "Argon2", experience: "Avancé", description: "Hachage sécurisé, Salt, Configuration" },
        { name: "bcrypt/bcryptjs", experience: "Avancé", description: "Hachage mots de passe, Salt rounds, Sécurité" },
        { name: "Helmet", experience: "Intermédiaire", description: "Sécurité HTTP headers, Protection XSS, CSRF" },
        { name: "Rate Limiting", experience: "Intermédiaire", description: "Protection DDoS, Limitation requêtes, Throttling" },
        { name: "Gestion des rôles", experience: "Avancé", description: "RBAC, Permissions, Middleware" },
        { name: "Autorisations granulaires", experience: "Intermédiaire", description: "Guards, Policies, Validation" }
      ]
    },
    { 
      category: "Outils & Workflow", 
      icon: Wrench,
      color: "text-[#ef4444]",
      bgColor: darkMode ? "from-[#ef4444]/10 to-[#dc2626]/5" : "from-[#ef4444]/5 to-[#dc2626]/3",
      items: [
        { name: "Git / GitHub", experience: "Expert", description: "Workflow pro, Branches, PR, Résolution conflits" },
        { name: "Docker", experience: "Avancé", description: "Conteneurs, Docker Compose, Multi-stage, Orchestration" },
        { name: "CI/CD", experience: "Avancé", description: "Vercel, Railway, Render, GitHub Actions, Tests auto" },
        { name: "Jest", experience: "Intermédiaire", description: "Tests unitaires, Mocks, Coverage, TDD" },
        { name: "Vitest", experience: "Intermédiaire", description: "Tests rapides, ESM, Compatibilité Vite" },
        { name: "Agile / Scrum", experience: "Avancé", description: "Sprints, Kanban, Rétrospectives, Équipe" }
      ]
    },
    { 
      category: "Innovation & IA", 
      icon: Lightbulb,
      color: "text-[#06b6d4]",
      bgColor: darkMode ? "from-[#06b6d4]/10 to-[#0891b2]/5" : "from-[#06b6d4]/5 to-[#0891b2]/3",
      items: [
        { name: "Intégration APIs IA", experience: "Intermédiaire", description: "OpenAI, Anthropic, Prompt engineering" },
        { name: "Automatisation de tâches", experience: "Intermédiaire", description: "Scripts, Workflows, Optimisation" },
        { name: "Optimisation UX/UI", experience: "Avancé", description: "Performance, Accessibilité, Analytics" }
      ]
    }
  ];

  const getExperienceInfo = (experience: string) => {
    switch (experience) {
      case "Expert":
        return { color: "text-[#10b981]", bgColor: "bg-[#10b981]/10", icon: Star };
      case "Avancé":
        return { color: "text-[#3b82f6]", bgColor: "bg-[#3b82f6]/10", icon: TrendingUp };
      case "Intermédiaire":
        return { color: "text-[#f59e0b]", bgColor: "bg-[#f59e0b]/10", icon: CheckCircle };
      default:
        return { color: "text-[#64748b]", bgColor: "bg-[#64748b]/10", icon: Code };
    }
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Technologies maîtrisées et en constante évolution. Cliquez sur une catégorie pour voir le détail.
          </p>
        </div>

        {/* Vue d'ensemble */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsWithDetails.map((skillCategory, index) => {
            const Icon = skillCategory.icon;
            const isSelected = selectedCategory === skillCategory.category;
            
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedCategory(isSelected ? null : skillCategory.category)}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? darkMode 
                      ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-[#3b82f6] shadow-lg shadow-[#3b82f6]/20'
                      : 'bg-gradient-to-br from-white to-[#f8fafc] border-2 border-[#3b82f6] shadow-lg shadow-[#3b82f6]/10'
                    : darkMode 
                      ? 'bg-[#1e293b] border border-[#334155] hover:border-[#475569]'
                      : 'bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1]'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${skillCategory.color}`} />
                  <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {skillCategory.items.slice(0, 3).map((item) => {
                    const expInfo = getExperienceInfo(item.experience);
                    const ExpIcon = expInfo.icon;
                    
                    return (
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.name}</span>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${expInfo.color} ${expInfo.bgColor}`}>
                          <ExpIcon className="w-3 h-3" />
                          {item.experience}
                        </div>
                      </div>
                    );
                  })}
                  {skillCategory.items.length > 3 && (
                    <p className="text-xs text-[#64748b] mt-2">
                      +{skillCategory.items.length - 3} autres compétences
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Détail de la catégorie sélectionnée */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl p-8 mb-8 ${
              darkMode 
                ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#334155]'
                : 'bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const category = skillsWithDetails.find(s => s.category === selectedCategory);
                const Icon = category?.icon || Code;
                return (
                  <>
                    <Icon className={`w-8 h-8 ${category?.color}`} />
                    <h3 className="text-2xl font-bold">{selectedCategory}</h3>
                  </>
                );
              })()}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsWithDetails
                .find(s => s.category === selectedCategory)
                ?.items.map((skill, index) => {
                  const expInfo = getExperienceInfo(skill.experience);
                  const ExpIcon = expInfo.icon;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-4 rounded-lg border ${
                        darkMode 
                          ? 'bg-[#334155]/30 border-[#475569]/30' 
                          : 'bg-[#f1f5f9] border-[#e2e8f0]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${expInfo.color} ${expInfo.bgColor}`}>
                          <ExpIcon className="w-4 h-4" />
                          {skill.experience}
                        </div>
                      </div>
                      
                      <p className="text-sm text-[#64748b] leading-relaxed">{skill.description}</p>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        )}

        {/* Statistiques globales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-xl text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-[#3b82f6]/10 via-[#8b5cf6]/10 to-[#10b981]/10 border border-[#3b82f6]/20'
              : 'bg-gradient-to-r from-[#3b82f6]/5 via-[#8b5cf6]/5 to-[#10b981]/5 border border-[#3b82f6]/20'
          }`}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#3b82f6]" />
            En constante évolution
          </h3>
          <p className="text-[#64748b] leading-relaxed max-w-3xl mx-auto mb-8">
            Passionné par l'apprentissage continu, je me forme régulièrement aux nouvelles technologies 
            et bonnes pratiques. Mon objectif est de rester à la pointe des innovations du développement web 
            tout en consolidant mes bases techniques.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#3b82f6] mb-1">15+</div>
              <div className="text-sm text-[#64748b]">Technologies</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#10b981] mb-1">4+</div>
              <div className="text-sm text-[#64748b]">Projets déployés</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#8b5cf6] mb-1">1 an</div>
              <div className="text-sm text-[#64748b]">Expérience</div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-[#1e293b]/50' : 'bg-white/50'}`}>
              <div className="text-2xl font-bold text-[#f59e0b] mb-1">∞</div>
              <div className="text-sm text-[#64748b]">Motivation</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}