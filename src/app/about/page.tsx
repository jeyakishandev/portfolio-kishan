"use client";
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import { useTheme } from "@/contexts/ThemeContext";

export default function AboutPage() {
  const { darkMode } = useTheme();
  return (
    <Layout>
      <About darkMode={darkMode} />
    </Layout>
  );
}

