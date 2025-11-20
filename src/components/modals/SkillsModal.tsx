"use client";
import { motion } from "framer-motion";

interface SkillsModalProps {
  showSkillsModal: boolean;
  setShowSkillsModal: (show: boolean) => void;
  darkMode: boolean;
}

export default function SkillsModal({ showSkillsModal, setShowSkillsModal, darkMode }: SkillsModalProps) {
  if (!showSkillsModal) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-modal-title"
      aria-describedby="skills-modal-description"
      className={`fixed top-2 sm:top-4 md:top-8 lg:top-20 bottom-16 sm:bottom-20 md:bottom-24 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 max-w-5xl mx-auto ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} border ${darkMode ? 'border-[#334155]' : 'border-[#e2e8f0]'} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 overflow-y-auto z-30 shadow-2xl`}
    >
      <div className="flex justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6 sticky top-0 bg-inherit pb-2 sm:pb-0 z-10">
        <h2 id="skills-modal-title" className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-[#10b981]' : 'text-[#1e293b]'}`}>
          Mes Compétences Techniques
        </h2>
        <button
          onClick={() => setShowSkillsModal(false)}
          aria-label="Fermer la modal Compétences"
          className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base flex-shrink-0 transition-colors ${
            darkMode 
              ? 'bg-[#334155] hover:bg-[#475569] text-[#e2e8f0]' 
              : 'bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#1e293b]'
          }`}
        >
          <span className="hidden sm:inline">Fermer</span>
          <span className="sm:hidden">✕</span>
        </button>
      </div>

      <div className="mb-4 sm:mb-6">
        <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
          Voici les technologies et outils que j'utilise pour concevoir des sites et applications 
          modernes, performants et adaptés aux besoins de mes clients et partenaires.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {/* Front-End */}
        <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-[#3b82f6]/10' : 'bg-[#3b82f6]/5'}`}>
          <h3 className={`text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 ${darkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`}>
            🖥️ Front-End
          </h3>
          <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
            <li>• React.js, Next.js</li>
            <li>• TypeScript, JavaScript (ES6+)</li>
            <li>• HTML5 / CSS3 (Flexbox, Grid)</li>
            <li>• Tailwind CSS, Bootstrap</li>
          </ul>
        </div>

        {/* Back-End */}
        <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-[#10b981]/10' : 'bg-[#10b981]/5'}`}>
          <h3 className={`text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 ${darkMode ? 'text-[#10b981]' : 'text-[#059669]'}`}>
            ⚙️ Back-End
          </h3>
          <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
            <li>• Node.js avec Express</li>
            <li>• API REST (création, sécurisation)</li>
            <li>• Sequelize / Prisma</li>
            <li>• Intégration APIs tierces</li>
          </ul>
        </div>

        {/* Bases de données */}
        <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
          <h3 className={`text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
            🗄️ Bases de données
          </h3>
          <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
            <li>• PostgreSQL, MySQL</li>
            <li>• Conception et modélisation</li>
            <li>• MCD/MLD, Merise</li>
            <li>• Optimisation requêtes</li>
          </ul>
        </div>

        {/* Sécurité */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
            🔒 Sécurité & Auth
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>• JWT (JSON Web Token)</li>
            <li>• Argon2 (hachage mots de passe)</li>
            <li>• Gestion des rôles</li>
            <li>• Autorisations granulaires</li>
          </ul>
        </div>

        {/* Outils & Workflow */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
            🚀 Outils & Workflow
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>• Git / GitHub (workflow pro)</li>
            <li>• Docker (conteneurs)</li>
            <li>• CI/CD (Vercel, Railway)</li>
            <li>• Agile / Scrum</li>
          </ul>
        </div>

        {/* Innovation */}
        <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}>
          <h3 className={`text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
            🤖 Innovation & IA
          </h3>
          <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm ${darkMode ? 'text-[#e2e8f0]' : 'text-[#1e293b]'}`}>
            <li>• Agents IA (prototypage)</li>
            <li>• Intégration APIs IA</li>
            <li>• Applications SaaS</li>
            <li>• Solutions sur mesure</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
