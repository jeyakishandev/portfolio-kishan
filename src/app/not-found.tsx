"use client";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Code, AlertCircle } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useTheme } from "@/contexts/ThemeContext";

export default function NotFound() {
  const { darkMode } = useTheme();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animation du code 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className={`text-8xl sm:text-9xl md:text-[12rem] font-extrabold ${
                  darkMode ? 'text-[#3b82f6]' : 'text-[#3b82f6]'
                }`}
                style={{
                  textShadow: darkMode
                    ? '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)'
                    : '0 0 30px rgba(59, 130, 246, 0.3)'
                }}
              >
                404
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
              >
                <AlertCircle className={`w-8 h-8 sm:w-12 sm:h-12 ${
                  darkMode ? 'text-[#f59e0b]' : 'text-[#f59e0b]'
                }`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Message d'erreur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Page introuvable
            </h1>
            <p className="text-lg sm:text-xl text-[#64748b] mb-2">
              Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <p className="text-sm sm:text-base text-[#94a3b8]">
              Il semble que vous ayez suivi un lien cassé ou entré une URL incorrecte.
            </p>
          </motion.div>

          {/* Animation de code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`mb-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
              darkMode
                ? 'bg-[#1e293b] border-[#334155]'
                : 'bg-[#f8fafc] border-[#e2e8f0]'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Code className={`w-5 h-5 ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`} />
              <span className="text-sm font-mono text-[#64748b]">Error 404</span>
            </div>
            <div className="text-left font-mono text-xs sm:text-sm">
              <div className="text-[#64748b] mb-1">
                <span className="text-[#ef4444]">const</span>{' '}
                <span className="text-[#3b82f6]">page</span>{' '}
                <span className="text-[#ef4444]">=</span>{' '}
                <span className="text-[#10b981]">null</span>;
              </div>
              <div className="text-[#64748b]">
                <span className="text-[#ef4444]">console</span>.
                <span className="text-[#3b82f6]">error</span>(
                <span className="text-[#10b981]">'Page not found'</span>);
              </div>
            </div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className={`group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-xl shadow-[#3b82f6]/30'
                    : 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] hover:from-[#2563eb] hover:to-[#059669] text-white shadow-xl shadow-[#3b82f6]/20'
                }`}
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg border-2 transition-all ${
                  darkMode
                    ? 'border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white'
                    : 'border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white'
                }`}
              >
                <Search className="w-5 h-5" />
                Voir mes projets
              </Link>
            </motion.div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`mt-12 pt-8 border-t ${
              darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'
            }`}
          >
            <p className="text-sm text-[#64748b] mb-4">Pages disponibles :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/about", label: "À propos" },
                { href: "/projects", label: "Projets" },
                { href: "/skills", label: "Compétences" },
                { href: "/experience", label: "Expérience" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? 'bg-[#1e293b] text-[#e2e8f0] hover:bg-[#3b82f6] hover:text-white border border-[#334155]'
                        : 'bg-white text-[#64748b] hover:bg-[#3b82f6] hover:text-white border border-[#e2e8f0]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

