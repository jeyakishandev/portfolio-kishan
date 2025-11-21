"use client";
import Layout from "@/components/Layout";
import Contact from "@/components/sections/Contact";
import { useTheme } from "@/contexts/ThemeContext";

export default function ContactPage() {
  const { darkMode } = useTheme();
  return (
    <Layout>
      <Contact darkMode={darkMode} />
    </Layout>
  );
}

