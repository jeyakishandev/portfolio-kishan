"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: number;
  avatar?: string;
}

interface CommentsSectionProps {
  comments: Comment[];
  onAddComment: (author: string, content: string, authorEmail?: string) => void;
  darkMode: boolean;
  projectId: string;
}

export default function CommentsSection({ 
  comments, 
  onAddComment, 
  darkMode, 
  projectId 
}: CommentsSectionProps) {
  const [newComment, setNewComment] = useState({ author: '', content: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    if (hours > 0) return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    if (minutes > 0) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    return 'à l\'instant';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.content.trim()) return;
    
    setIsSubmitting(true);
    
    // Validation email optionnel
    const email = newComment.email.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Veuillez entrer une adresse email valide.');
      setIsSubmitting(false);
      return;
    }
    
    onAddComment(
      newComment.author.trim(), 
      newComment.content.trim(),
      email || undefined
    );
    setNewComment({ author: '', content: '', email: '' });
    setIsSubmitting(false);
  };

  return (
    <div className={`mt-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {/* Titre de la section */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-1 h-8 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-gray-800'}`}>
          Commentaires ({comments.length})
        </h3>
      </div>

      {/* Formulaire d'ajout de commentaire */}
      <motion.form
        onSubmit={handleSubmit}
        className={`
          mb-8 p-6 rounded-xl border-2 border-dashed transition-all duration-300
          ${darkMode 
            ? 'bg-gray-800/50 border-gray-600 hover:border-gray-500' 
            : 'bg-gray-50 border-gray-300 hover:border-gray-400'
          }
        `}
        whileHover={{ scale: 1.01 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Votre nom *
            </label>
            <input
              type="text"
              value={newComment.author}
              onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
              placeholder="Entrez votre nom"
              className={`
                w-full px-4 py-3 rounded-lg border transition-all duration-300
                ${darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                }
              `}
              required
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email (optionnel)
            </label>
            <input
              type="email"
              value={newComment.email}
              onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
              placeholder="votre@email.com"
              className={`
                w-full px-4 py-3 rounded-lg border transition-all duration-300
                ${darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                }
              `}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Votre commentaire *
          </label>
          <textarea
            value={newComment.content}
            onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Partagez votre avis sur ce projet..."
            rows={3}
            className={`
              w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none
              ${darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }
            `}
            required
          />
        </div>
        
        <div className="flex justify-end">
          <motion.button
            type="submit"
            disabled={isSubmitting || !newComment.author.trim() || !newComment.content.trim()}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
              ${isSubmitting || !newComment.author.trim() || !newComment.content.trim()
                ? darkMode 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
              }
            `}
            whileHover={!isSubmitting && newComment.author.trim() && newComment.content.trim() ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting && newComment.author.trim() && newComment.content.trim() ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Envoi...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Publier le commentaire
              </>
            )}
          </motion.button>
        </div>
      </motion.form>

      {/* Liste des commentaires */}
      <div className="space-y-4">
        <AnimatePresence>
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`
                p-6 rounded-xl border transition-all duration-300
                ${darkMode 
                  ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                  ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}
                `}>
                  {comment.avatar || comment.author.charAt(0).toUpperCase()}
                </div>

                {/* Contenu du commentaire */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {comment.author}
                    </h4>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {formatTimeAgo(comment.timestamp)}
                    </span>
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {comment.content}
                  </p>
                </div>

                {/* Actions du commentaire */}
                <div className="flex items-center gap-2">
                  <motion.button
                    className={`
                      p-2 rounded-lg transition-all duration-300
                      ${darkMode 
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' 
                        : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                      }
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    className={`
                      p-2 rounded-lg transition-all duration-300
                      ${darkMode 
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' 
                        : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                      }
                    `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Message si aucun commentaire */}
        {comments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`
              text-center py-12 px-6 rounded-xl border-2 border-dashed
              ${darkMode 
                ? 'border-gray-600 text-gray-400' 
                : 'border-gray-300 text-gray-500'
              }
            `}
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Aucun commentaire pour le moment
            </h3>
            <p className="text-sm">
              Soyez le premier à partager votre avis sur ce projet !
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

