/**
 * Core TypeScript interfaces for the developer portfolio
 */

export type ProjectCategory = 'web' | 'mobile' | 'uiux' | 'ai' | 'research';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  status?: 'ongoing' | 'completed';
  coverImage: string;
  images?: ProjectImage[];
  description: string;
  tech?: string[];
  role?: string;
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization?: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: SkillGroup[];
  certifications: string[];
  softSkills: string[];
  experience: ExperienceItem[];
  languages: LanguageItem[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
  profileImage: string;
  awards?: string[];
  clients?: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'web' | 'uiux' | 'collaboration';
  message: string;
  timestamp: Date;
}

export interface ResumeEntry {
  period: string;
  title: string;
  subtitle?: string;
  organization?: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  organization: string;
  email: string;
  phone: string;
}

export interface ResumeData {
  cvUrl: string;
  cvFileName: string;
  education: ResumeEntry[];
  projects: ResumeEntry[];
  experience: ResumeEntry[];
  softwareTools: string[];
  certifications: string[];
  softSkills: string[];
  languages: LanguageItem[];
  references: ReferenceItem[];
}