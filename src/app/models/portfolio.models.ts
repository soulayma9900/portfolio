export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  tags: string[];
  thumbnail: string;
  images: string[];
  technologies: string[];
  features: string[];
  results: string[];
  overview?: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics?: Metric[];
}

export type ProjectCategory = 'All' | 'BI' | 'Machine Learning' | 'Deep Learning';

export interface Metric {
  label: string;
  value: string;
  unit?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: SkillCategory;
}

export type SkillCategory = 'All' | 'Languages' | 'ML & AI' | 'Data & BI' | 'Tools';

export interface Experience {
  role: string;
  company: string;
  position?: string;
  period: string;
  location?: string;
  description?: string;
  highlights: string[];
  techStack?: string[];
  expanded?: boolean;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: string;
  color: string;
  link?: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}
