"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Database, Rocket, Shield } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const stats = [
    { label: "Projets", value: "4+", icon: Code },
    { label: "Technologies", value: "15+", icon: Database },
    { label: "Expérience", value: "1 an", icon: Rocket },
    { label: "Sécurité", value: "JWT", icon: Shield },
  ];

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center pt-24 sm:pt-20 pb-8 sm:pb-12">
      {/* Background animé avec particules */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          darkMode 
            ? 'from-[#0f172a] via-[#1e293b] to-[#0f172a]' 
            : 'from-[#f8fafc] via-white to-[#f8fafc]'
        }`}>
          {/* Grille animée en arrière-plan */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Particules flottantes améliorées */}
          {[...Array(30)].map((_, i) => {
            // Valeurs déterministes basées sur l'index pour éviter l'erreur d'hydratation
            const randomX = (i * 137.5) % 1920; // Nombre premier pour distribution
            const randomY = (i * 97.3) % 1080;
            const size = 1 + ((i * 0.3) % 3);
            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? 'bg-[#3b82f6]' : i % 3 === 1 ? 'bg-[#10b981]' : 'bg-[#8b5cf6]'
                }`}
                style={{ width: size, height: size }}
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 0.2
                }}
                animate={{
                  x: randomX + ((i * 23) % 200 - 100),
                  y: randomY + ((i * 31) % 200 - 100),
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 4 + ((i * 0.1) % 3),
                  repeat: Infinity,
                  delay: (i * 0.2) % 2,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
        <div className="text-center mb-16">
          {/* Logo animé avec effet de rotation au hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, -10, 0],
                boxShadow: darkMode 
                  ? "0 0 40px rgba(59, 130, 246, 0.5)" 
                  : "0 0 30px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className={`w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-3xl flex items-center justify-center font-bold text-5xl sm:text-6xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#10b981] text-white shadow-2xl shadow-[#3b82f6]/50' 
                  : 'bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#10b981] text-white shadow-2xl shadow-[#3b82f6]/30'
              }`}>
                K
              </div>
            </motion.div>
          </motion.div>

          {/* Titre principal avec animation de typing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            <motion.span
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className={darkMode ? 'text-white' : 'text-[#1e293b]'}>De l'</span>
              <motion.span
                className="text-[#3b82f6] inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 60px rgba(59, 130, 246, 0.6)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Aviation
              </motion.span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.span
                className="text-[#10b981] inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.5)",
                    "0 0 40px rgba(16, 185, 129, 0.8)",
                    "0 0 60px rgba(16, 185, 129, 0.6)",
                    "0 0 40px rgba(16, 185, 129, 0.8)",
                    "0 0 20px rgba(16, 185, 129, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                au Code
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Sous-titre avec animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-6"
          >
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl mb-4 text-[#64748b] font-light"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Développeur Full-Stack
            </motion.p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#94a3b8] max-w-3xl mx-auto leading-relaxed px-4">
              Je transforme des idées en applications web performantes.<br />
              <span className="text-[#3b82f6] font-medium">Spécialisé en React, Node.js et PostgreSQL.</span>
            </p>
          </motion.div>

          {/* Statistiques rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-2 sm:p-3 rounded-lg ${
                    darkMode ? 'bg-[#1e293b]/50 backdrop-blur-sm border border-[#334155]' : 'bg-white/50 backdrop-blur-sm border border-[#e2e8f0]'
                  }`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 ${
                    index % 4 === 0 ? 'text-[#3b82f6]' : 
                    index % 4 === 1 ? 'text-[#10b981]' : 
                    index % 4 === 2 ? 'text-[#8b5cf6]' : 'text-[#f59e0b]'
                  }`} />
                  <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-xs text-[#64748b]">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Boutons d'action améliorés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className={`group relative px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg overflow-hidden block ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-xl shadow-[#3b82f6]/30'
                    : 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-xl shadow-[#3b82f6]/20'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir mes projets
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#8b5cf6] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className={`px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg border-2 transition-all block ${
                  darkMode
                    ? 'border-[#3b82f6] hover:border-[#10b981] hover:bg-[#10b981]/10 text-[#e2e8f0] shadow-lg'
                    : 'border-[#3b82f6] hover:border-[#10b981] hover:bg-[#10b981]/10 text-[#1e293b] shadow-lg'
                }`}
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
