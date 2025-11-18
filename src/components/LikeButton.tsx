"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface LikeButtonProps {
  likes: number;
  isLiked: boolean;
  onLike: () => void;
  darkMode: boolean;
  projectId: string;
}

export default function LikeButton({ likes, isLiked, onLike, darkMode, projectId }: LikeButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    onLike();
    
    // Animation duration
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={handleLike}
        disabled={isAnimating}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
          ${isLiked 
            ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
            : darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
          }
          ${isAnimating ? 'scale-95' : 'hover:scale-105'}
        `}
        whileHover={{ scale: isAnimating ? 0.95 : 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
      >
        {/* Icône cœur */}
        <motion.div
          animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {isLiked ? (
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                clipRule="evenodd" 
              />
            </svg>
          ) : (
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          )}
        </motion.div>

        {/* Compteur de likes */}
        <span className="font-medium text-sm">
          {likes}
        </span>

        {/* Effet de particules lors du like */}
        {isLiked && isAnimating && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full"
                initial={{ 
                  x: 10, 
                  y: 10, 
                  scale: 0,
                  opacity: 1 
                }}
                animate={{
                  x: Math.cos(i * 60 * Math.PI / 180) * 30 + 10,
                  y: Math.sin(i * 60 * Math.PI / 180) * 30 + 10,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
        )}
      </motion.button>

      {/* Message de confirmation */}
      {isLiked && isAnimating && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm text-green-500 font-medium"
        >
          Merci ! ❤️
        </motion.div>
      )}
    </div>
  );
}

