"use client";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0f172a] text-[#e2e8f0]' 
        : 'bg-white text-[#1e293b]'
    }`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

