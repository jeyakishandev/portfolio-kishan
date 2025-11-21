"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Sun, Moon, Linkedin, Menu, X, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/skills", label: "Compétences" },
    { href: "/projects", label: "Projets" },
    { href: "/experience", label: "Expérience" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { 
      href: "mailto:k.jeyakishan@gmail.com", 
      icon: Mail, 
      label: "Email",
      color: "text-[#ea4335]"
    },
    { 
      href: "https://www.linkedin.com/in/jeya-kishan-karunanithy", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "text-[#0077b5]"
    },
    { 
      href: "https://github.com/jeyakishandev", 
      icon: Github, 
      label: "GitHub",
      color: darkMode ? "text-white" : "text-[#333]"
    },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-[#0f172a]/80 border-[#1e293b] shadow-lg shadow-[#0f172a]/20' 
          : 'bg-white/80 border-[#e2e8f0] shadow-lg shadow-black/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec animation */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                boxShadow: darkMode 
                  ? "0 0 30px rgba(59, 130, 246, 0.4)" 
                  : "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#10b981] text-white shadow-xl' 
                  : 'bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#10b981] text-white shadow-xl'
              }`}
            >
              K
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent"
              >
                Jeya Kishan
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs text-[#64748b] font-medium"
              >
                Développeur Full-Stack
              </motion.div>
            </div>
          </Link>
          
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? darkMode
                        ? 'text-[#3b82f6] bg-[#3b82f6]/10'
                        : 'text-[#3b82f6] bg-[#3b82f6]/10'
                      : darkMode
                        ? 'text-[#e2e8f0] hover:text-[#3b82f6] hover:bg-[#1e293b]'
                        : 'text-[#64748b] hover:text-[#3b82f6] hover:bg-[#f8fafc]'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#10b981] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-2 mr-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'hover:bg-[#1e293b] border border-[#334155]/50 hover:border-[#334155]' 
                        : 'hover:bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1]'
                    }`}
                    title={social.label}
                  >
                    <Icon className={`w-4 h-4 ${social.color} transition-colors`} />
                  </motion.a>
                );
              })}
            </div>

            {/* Séparateur */}
            <div className={`w-px h-6 ${darkMode ? 'bg-[#334155]' : 'bg-[#e2e8f0]'}`} />

            {/* Toggle thème */}
            <motion.button
              onClick={toggleDarkMode}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'hover:bg-[#1e293b] border border-[#334155]/50 hover:border-[#334155]' 
                  : 'hover:bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1]'
              }`}
              title={darkMode ? 'Mode clair' : 'Mode sombre'}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-[#fbbf24]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-[#6366f1]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Menu mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-[#1e293b]' : 'hover:bg-[#f8fafc]'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#fbbf24]" /> : <Moon className="w-5 h-5 text-[#6366f1]" />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-[#1e293b]' : 'hover:bg-[#f8fafc]'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`md:hidden border-t ${
                darkMode ? 'border-[#1e293b]' : 'border-[#e2e8f0]'
              }`}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? darkMode
                            ? 'text-[#3b82f6] bg-[#3b82f6]/10'
                            : 'text-[#3b82f6] bg-[#3b82f6]/10'
                          : darkMode
                            ? 'text-[#e2e8f0] hover:text-[#3b82f6] hover:bg-[#1e293b]'
                            : 'text-[#64748b] hover:text-[#3b82f6] hover:bg-[#f8fafc]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Réseaux sociaux mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-[#334155]"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg transition-colors ${
                          darkMode ? 'hover:bg-[#1e293b]' : 'hover:bg-[#f8fafc]'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}