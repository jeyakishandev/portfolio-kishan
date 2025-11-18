export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: number;
  avatar?: string;
}

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
  };
  likes: number;
  comments: Comment[];
  isLiked?: boolean;
}

