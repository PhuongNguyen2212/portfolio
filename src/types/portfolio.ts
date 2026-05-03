export type SkillLevel = "Learning" | "Intermediate" | "Solid" | "In Progress";

export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
  percent: number;
}

export type ProjectStatus = "Building" | "Completed" | "Coming Soon";

export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
