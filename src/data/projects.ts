export interface SecurityProject {
  id: number;
  title: string;
  description: string;
  type: string;
  badge: string;
  badgeClass: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export const securityProjects: SecurityProject[] = [
  {
    id: 1,
    title: "CrimsonOps",
    description: "Plateforme de gestion et suivi d'opérations Red Team. Interface terminal/hacker authentique avec effets CRT, chaîne d'attaque, arsenal de payloads, rapports de mission et configuration réseau (VPN, Proxy, TOR).",
    type: "RED TEAM",
    badge: "RED TEAM",
    badgeClass: "badge-red",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"],
    githubLink: "https://github.com/hadydieye/CrimsonOps",
  },
  {
    id: 2,
    title: "Port Scanner",
    description: "Scanner de ports réseau multithreadé en Python. Support du multithreading configurable (100 threads), timeout personnalisable, mode verbeux, affichage coloré et export des résultats en .txt.",
    type: "TOOL DEV",
    badge: "TOOL DEV",
    badgeClass: "badge-green",
    techStack: ["Python", "Colorama", "Threading", "Socket", "CLI"],
    githubLink: "https://github.com/hadydieye/Port_scanner",
  },
  {
    id: 3,
    title: "Script Terminal Hacker",
    description: "Terminal hacker interactif simulant un environnement de hacking avec interface CLI stylisée. Outil éducatif pour comprendre les concepts de cybersécurité de manière immersive.",
    type: "HACKER TOOL",
    badge: "HACKER TOOL",
    badgeClass: "badge-red",
    techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    githubLink: "https://github.com/hadydieye/Script-terminal-hacker",
    liveLink: "https://script-hacker-terminal.netlify.app/",
  },
];

export interface DevProject {
  id: number;
  title: string;
  description: string;
  type: string;
  badge: string;
  badgeClass: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export const devProjects: DevProject[] = [
  {
    id: 1,
    title: "Louma App",
    description: "Application mobile immobilière SaaS complète avec authentification, navigation par rôle (Locataire/Propriétaire/Agence), gestion de biens, système de leads et intégration paiements Orange Money/MTN MoMo.",
    type: "MOBILE APP",
    badge: "MOBILE APP",
    badgeClass: "badge-cyan",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase", "TanStack Query", "Zod"],
    githubLink: "https://github.com/hadydieye/louma-app",
  },
  {
    id: 2,
    title: "Dépense Tracker",
    description: "Application de gestion de dépenses personnelles inspirée de Revolut/N26. Dashboard, budgets avec alertes visuelles, analyses avec graphiques, notifications push, export CSV et multi-devises (GNF/EUR/USD).",
    type: "WEB APP",
    badge: "WEB APP",
    badgeClass: "badge-cyan",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "shadcn/ui"],
    githubLink: "https://github.com/hadydieye/Depense_tracker",
  },
  {
    id: 3,
    title: "NoteEA",
    description: "PWA de gestion de notes pour étudiants guinéens. 100% hors-ligne, suivi des moyennes par trimestre, export PDF, support Collège/Lycée/Université avec matières personnalisées. Disponible en APK Android.",
    type: "PWA",
    badge: "PWA",
    badgeClass: "badge-cyan",
    techStack: ["React 18", "TypeScript", "Zustand", "Capacitor", "Recharts", "Tailwind CSS"],
    githubLink: "https://github.com/hadydieye/noteea",
  },
];

export const hybridProjects: DevProject[] = [
  {
    id: 1,
    title: "MatrixSec",
    description: "Plateforme de cybersécurité avec esthétique Matrix. Application full-stack combinant interface de sécurité avancée avec base de données PostgreSQL et design immersif hacker.",
    type: "SECDEVOPS",
    badge: "SECDEVOPS",
    badgeClass: "badge-green",
    techStack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Vite"],
    githubLink: "https://github.com/hadydieye/matrixsec",
  },
  {
    id: 2,
    title: "Passvibe",
    description: "Générateur de mots de passe sécurisé avec interface moderne. Création de mots de passe robustes avec paramètres personnalisables, analyse de force et copie en un clic.",
    type: "SECURITY TOOL",
    badge: "SECURITY TOOL",
    badgeClass: "badge-green",
    techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    githubLink: "https://github.com/hadydieye/Passvibe",
    liveLink: "https://passvibe.netlify.app/",
  },
  {
    id: 3,
    title: "CSI Manager",
    description: "Système de gestion d'atelier de réparation avec authentification sécurisée, rôles Admin/Technicien, dashboard temps réel, gestion clients/appareils/techniciens et export/import de données.",
    type: "SECURE APP",
    badge: "SECURE APP",
    badgeClass: "badge-green",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Radix UI"],
    githubLink: "https://github.com/hadydieye/csi-app",
  },
];
