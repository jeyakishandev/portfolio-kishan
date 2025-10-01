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
      className={`fixed top-20 bottom-24 left-4 right-4 max-w-5xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 id="skills-modal-title" className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Mes Compétences Techniques
        </h2>
        <button
          onClick={() => setShowSkillsModal(false)}
          aria-label="Fermer la modal Compétences"
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>

      <div className="mb-6">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Voici les technologies et outils que j'utilise pour concevoir des sites et applications 
          modernes, performants et adaptés aux besoins de mes clients et partenaires.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Front-End */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            🖥️ Front-End
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>• React.js, Next.js</li>
            <li>• TypeScript, JavaScript (ES6+)</li>
            <li>• HTML5 / CSS3 (Flexbox, Grid)</li>
            <li>• Tailwind CSS, Bootstrap</li>
          </ul>
        </div>

        {/* Back-End */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
            ⚙️ Back-End
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>• Node.js avec Express</li>
            <li>• API REST (création, sécurisation)</li>
            <li>• Sequelize / Prisma</li>
            <li>• Intégration APIs tierces</li>
          </ul>
        </div>

        {/* Bases de données */}
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
            🗄️ Bases de données
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
            🤖 Innovation & IA
          </h3>
          <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
