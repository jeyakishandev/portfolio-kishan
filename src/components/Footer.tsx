"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: Github,
      color: darkMode ? "text-white hover:text-white" : "text-[#333] hover:text-[#333]"
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: "text-[#0077b5] hover:text-[#0077b5]"
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: "text-[#ea4335] hover:text-[#ea4335]"
    }
  ];

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/projects", label: "Projets" },
    { href: "/skills", label: "Compétences" },
    { href: "/experience", label: "Expérience" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className={`border-t ${
      darkMode ? 'border-[#334155] bg-[#1e293b]' : 'border-[#e2e8f0] bg-[#f8fafc]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <p className="text-sm text-[#64748b] leading-relaxed mb-4">
              Développeur Full-Stack passionné par la création d'applications web modernes et performantes.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#64748b]">
              <span>Disponible pour</span>
              <span className="px-2 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] text-xs font-medium">
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm text-[#64748b] hover:text-[#3b82f6] transition-colors ${
                    darkMode ? 'hover:text-[#3b82f6]' : 'hover:text-[#2563eb]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Réseaux</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 text-sm ${social.color} transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                    {social.name}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className={`border-t mb-6 ${
          darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'
        }`} />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#64748b]">
          <p>
            © {currentYear} {personalInfo.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1">
            <span>Fait avec</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[#ef4444] fill-[#ef4444]" />
            </motion.span>
            <span>en France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

