"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Projects from "@/components/sections/Projects";
import ProjectModal from "@/components/ProjectModal";
import { useTheme } from "@/contexts/ThemeContext";
import { Project } from "@/types/Project";

export default function ProjectsPage() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      <Projects 
        darkMode={darkMode} 
        onProjectClick={setSelectedProject}
      />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          darkMode={darkMode}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Layout>
  );
}

