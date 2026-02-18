import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Shield, Code, Terminal, Database, Globe, Lock, Cpu, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersécurité",
    icon: Shield,
    color: "neon-pink",
    skills: [
      { name: "Pentesting / Red Team", level: 85 },
      { name: "OWASP Top 10", level: 90 },
      { name: "Nmap / Burp Suite", level: 80 },
      { name: "Analyse de vulnérabilités", level: 85 },
      { name: "Sécurité réseau", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "neon-cyan",
    skills: [
      { name: "React / React Native", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 70 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Database,
    color: "neon-green",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL / Supabase", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux / Kali", level: 85 },
    ],
  },
  {
    title: "Outils & Méthodologie",
    icon: Terminal,
    color: "neon-purple",
    skills: [
      { name: "CLI & Scripting", level: 85 },
      { name: "Zod / React Hook Form", level: 80 },
      { name: "Zustand / TanStack Query", level: 75 },
      { name: "Vite / Capacitor", level: 80 },
      { name: "Méthodologie Agile", level: 70 },
    ],
  },
];

const barColors: Record<string, string> = {
  "neon-green": "from-[hsl(155,100%,50%)] to-[hsl(155,100%,35%)]",
  "neon-cyan": "from-[hsl(195,100%,50%)] to-[hsl(195,100%,35%)]",
  "neon-pink": "from-[hsl(330,100%,50%)] to-[hsl(330,100%,35%)]",
  "neon-purple": "from-[hsl(272,100%,50%)] to-[hsl(272,100%,35%)]",
};

const glowColors: Record<string, string> = {
  "neon-green": "shadow-[0_0_12px_hsl(155,100%,50%,0.4)]",
  "neon-cyan": "shadow-[0_0_12px_hsl(195,100%,50%,0.4)]",
  "neon-pink": "shadow-[0_0_12px_hsl(330,100%,50%,0.4)]",
  "neon-purple": "shadow-[0_0_12px_hsl(272,100%,50%,0.4)]",
};

const iconColors: Record<string, string> = {
  "neon-green": "text-primary",
  "neon-cyan": "text-secondary",
  "neon-pink": "text-accent",
  "neon-purple": "text-[hsl(272,100%,50%)]",
};

const SkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-body text-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${barColors[color]} ${glowColors[color]}`}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="relative py-14 sm:py-20 md:py-32 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionTitle label="// COMPÉTENCES" title="Mon Arsenal Technique" />

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center ${iconColors[cat.color]}`}>
                <cat.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} delay={ci * 0.1 + si * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
