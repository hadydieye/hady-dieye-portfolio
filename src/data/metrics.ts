export interface Metric {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  trend?: string;
  color: "green" | "cyan" | "pink" | "purple";
}

export const heroMetrics: Metric[] = [
  { id: 1, value: 10, suffix: "+", label: "Projets Réalisés", icon: "🛡️", color: "green" },
  { id: 2, value: 30, suffix: "+", label: "Vulnérabilités Trouvées", icon: "🎯", color: "cyan" },
  { id: 3, value: 5, suffix: "+", label: "Clients Accompagnés", icon: "⭐", color: "pink" },
  { id: 4, value: 95, suffix: "%", label: "Taux de Succès", icon: "✅", color: "green" },
];

export const impactMetrics: Metric[] = [
  { id: 1, value: 30, suffix: "+", label: "Vulnérabilités Détectées", icon: "🎯", color: "cyan" },
  { id: 2, value: 100, suffix: "%", label: "Taux de Satisfaction Client", icon: "⭐", color: "green" },
  { id: 3, value: 48, suffix: "h", label: "Temps de Réponse Moyen", icon: "⚡", color: "pink" },
  { id: 4, value: 0, suffix: "", label: "Incidents Post-Audit", icon: "🛡️", color: "green" },
];

export const beforeAudit = [
  { label: "Vulnérabilités critiques", value: "12", color: "pink" as const },
  { label: "Vulnérabilités haute priorité", value: "23", color: "pink" as const },
  { label: "Temps de réponse", value: "3.5s", color: "pink" as const },
  { label: "Score sécurité", value: "42/100", color: "pink" as const },
];

export const afterAudit = [
  { label: "Vulnérabilités critiques", value: "0", color: "green" as const },
  { label: "Vulnérabilités mineures", value: "2", color: "green" as const },
  { label: "Temps de réponse", value: "0.8s", color: "green" as const },
  { label: "Score sécurité", value: "94/100", color: "green" as const },
];
