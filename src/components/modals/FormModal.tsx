"use client";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  collaboration: string;
  budget: string;
  timeline: string;
}

interface FormModalProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  darkMode: boolean;
  formData: FormData;
  setFormData: (data: FormData) => void;
  formSubmitting: boolean;
  setFormSubmitting: (submitting: boolean) => void;
  executeCommand: (cmd: string) => void;
}

export default function FormModal({ 
  showForm, 
  setShowForm, 
  darkMode, 
  formData, 
  setFormData, 
  formSubmitting, 
  setFormSubmitting,
  executeCommand
}: FormModalProps) {
  if (!showForm) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-20 bottom-24 left-4 right-4 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900' : 'bg-white'} border rounded-lg p-4 overflow-y-auto z-30`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-gray-800'}`}>
          Formulaire de Contact
        </h2>
        <button
          onClick={() => setShowForm(false)}
          className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Fermer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Nom *
          </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              placeholder="Votre nom"
              required
              minLength={2}
              maxLength={50}
              pattern="[a-zA-ZÀ-ÿ\s\-']+"
              title="Nom requis (2-50 caractères, lettres uniquement)"
              aria-describedby="name-error"
            />
        </div>

        {/* Email */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email *
          </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              placeholder="votre@email.com"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Email valide requis (ex: exemple@domaine.com)"
              aria-describedby="email-error"
            />
        </div>

        {/* Sujet */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Sujet
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
            placeholder="Sujet de votre message"
          />
        </div>

        {/* Type de collaboration */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Type
          </label>
          <select
            value={formData.collaboration}
            onChange={(e) => setFormData({...formData, collaboration: e.target.value})}
            className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
          >
            <option value="">Sélectionnez...</option>
            <option value="CDI/CDD">CDI/CDD</option>
            <option value="Freelance">Freelance</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Échange">Échange</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Message *
        </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className={`w-full px-3 py-2 border rounded ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
              placeholder="Décrivez votre projet ou votre demande..."
              required
              minLength={10}
              maxLength={1000}
              title="Message requis (10-1000 caractères)"
              aria-describedby="message-error"
            />
      </div>

      {/* Boutons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => {
            setFormSubmitting(true);
            executeCommand("send");
            setTimeout(() => setFormSubmitting(false), 2000);
          }}
          disabled={formSubmitting}
          className={`px-6 py-2 rounded flex items-center gap-2 font-medium ${
            formSubmitting 
              ? `${darkMode ? 'bg-gray-600' : 'bg-gray-400'} cursor-not-allowed opacity-75`
              : darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          {formSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
        <button
          onClick={() => setShowForm(false)}
          className={`px-6 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium`}
        >
          Annuler
        </button>
      </div>
    </motion.div>
  );
}
