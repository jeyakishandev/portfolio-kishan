"use client";
import Layout from "@/components/Layout";
import Experience from "@/components/sections/Experience";
import { useTheme } from "@/contexts/ThemeContext";

export default function ExperiencePage() {
  const { darkMode } = useTheme();
  return (
    <Layout>
      <Experience darkMode={darkMode} />
    </Layout>
  );
}

