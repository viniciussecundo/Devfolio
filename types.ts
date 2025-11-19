import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}
