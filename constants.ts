import { 
  Code2, 
  Layout, 
  Smartphone, 
  Server, 
  Database, 
  Globe, 
  Cpu,
  Layers,
  GitBranch,
  Terminal
} from 'lucide-react';
import { Project, Service, Skill } from './types';

export const NAV_ITEMS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' },
];

export const HERO_DATA = {
  name: "Vinícius Secundo",
  role: "Desenvolvedor de Software",
  description: "Transformando ideias complexas em experiências digitais elegantes, performáticas e acessíveis.",
  avatar: "https://i.pravatar.cc/300?u=vinicius"
};

export const SOCIAL_LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  instagram: "https://instagram.com/your-username",
};

export const CONTACT_DATA = {
  email: "contato@dev.com",
  location: "São Paulo, Brasil (Remoto)",
  whatsappNumber: "5511999999999", // Formato: código do país + DDD + número
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // IMPORTANTE: Substitua pelo seu endpoint do Formspree
};


export const SKILLS: Skill[] = [
  { name: 'React', icon: Code2, category: 'frontend' },
  { name: 'TypeScript', icon: Terminal, category: 'frontend' },
  { name: 'Tailwind CSS', icon: Layout, category: 'frontend' },
  { name: 'Node.js', icon: Server, category: 'backend' },
  { name: 'PostgreSQL', icon: Database, category: 'backend' },
  { name: 'Next.js', icon: Globe, category: 'frontend' },
  { name: 'Git', icon: GitBranch, category: 'tools' },
  { name: 'Figma', icon: Layers, category: 'tools' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Desenvolvimento Web Moderno',
    description: 'Criação de interfaces rápidas, modernas e otimizadas, seguindo boas práticas de código e UX.',
    icon: Globe
  },
  {
    id: 2,
    title: 'Aplicações SPA (React + Arquitetura)',
    description: 'Aplicações reativas com React, gerenciamento de estado, rotas e arquitetura escalável.',
    icon: Cpu
  },
  {
    id: 3,
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas otimizadas para conversão, com carregamento rápido e design impactante.',
    icon: Layout
  },
  {
    id: 4,
    title: 'Sistemas Simples para Microempresas',
    description: 'Soluções sob medida como controle de estoque, pedidos e automações básicas, feitas para pequenos negócios.',
    icon: Smartphone
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Painel administrativo completo com gráficos em tempo real e gestão de estoque.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Recharts"],
    liveUrl: "#",
    repoUrl: "https://github.com/your-username/ecommerce-dashboard"
  },
  {
    id: 2,
    title: "Social Connect App",
    description: "Plataforma de rede social focada em comunidades tech com chat em tempo real.",
    image: "https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1374&auto=format&fit=crop",
    tags: ["Next.js", "Socket.io", "Tailwind"],
    liveUrl: "#",
    repoUrl: "https://github.com/your-username/social-connect"
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "Aplicação para controle financeiro pessoal com categorização automática de gastos.",
    image: "https://images.unsplash.com/photo-1579621970795-87f54f595503?q=80&w=1470&auto=format&fit=crop",
    tags: ["Vue", "Firebase", "PWA"],
    liveUrl: "#",
    repoUrl: "https://github.com/your-username/finance-tracker"
  },
  {
    id: 4,
    title: "Travel Blog CMS",
    description: "Sistema de gerenciamento de conteúdo customizado para blogueiros de viagem.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    repoUrl: "https://github.com/your-username/travel-blog"
  }
];