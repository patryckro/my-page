import { ElementType } from "react";

// ========== Project Types ==========
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  startDate?: string;
  endDate?: string;
  highlights?: string[];
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile';

// ========== Experience Types ==========
export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

// ========== Skill Types ==========
export interface Skill {
  name: string;
  category: SkillCategory;
  icon: ElementType;
  proficiency: number; // 1-100
  yearsOfExperience?: number;
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'mobile'
  | 'database' 
  | 'tools' 
  | 'cloud'
  | 'other';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// ========== Contact Types ==========
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// ========== Social Links ==========
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ========== Navigation ==========
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

// ========== Education ==========
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

// ========== Certification ==========
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
}
