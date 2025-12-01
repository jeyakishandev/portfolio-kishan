export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  video?: string;
  technologies: string[];
  github: string;
  githubBackend?: string;
  live?: string;
  liveBackend?: string;
  features?: string[];
  stats?: {
    duration?: string;
    team?: string;
    linesOfCode?: string;
    endpoints?: string;
    components?: string;
    databaseModels?: string;
    features?: string;
    testCoverage?: string;
    database?: string;
  };
}

