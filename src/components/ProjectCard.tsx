"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function ProjectCard({ title, tagline, tags, href = "#", darkMode = true }:{
  title: string; tagline: string; tags: string[]; href?: string; darkMode?: boolean;
}) {
  return (
    <motion.a whileHover={{ y: -4 }} href={href}
      className={`group relative overflow-hidden rounded-3xl border p-5 ${darkMode ? 'border-white/10 bg-[#0F172A]/60' : 'border-gray-300 bg-gray-50'}`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tagline}</p>
        </div>
        <div className={`rounded-2xl p-2 ${darkMode ? 'bg-white/5' : 'bg-gray-200'}`}><Rocket size={16} /></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className={`rounded-xl border px-2 py-1 text-xs ${darkMode ? 'border-white/10 text-slate-300' : 'border-gray-300 text-gray-700'}`}>{t}</span>
        ))}
      </div>
    </motion.a>
  );
}
