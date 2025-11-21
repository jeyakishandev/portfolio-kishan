"use client";
import Layout from "@/components/Layout";
import Skills from "@/components/sections/Skills";
import { useTheme } from "@/contexts/ThemeContext";

export default function SkillsPage() {
  const { darkMode } = useTheme();
  return (
    <Layout>
      <Skills darkMode={darkMode} />
    </Layout>
  );
}

