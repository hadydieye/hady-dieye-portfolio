import { motion } from "framer-motion";
import { Shield, Code2, Database, Wrench } from "lucide-react";
import SkillBar from "@/components/dashboard/SkillBar";

const skillCategories = [
  {
    title: "Cybersécurité",
    icon: Shield,
    color: "magenta" as const,
    skills: [
      { name: "Pentesting", percentage: 90 },
      { name: "Red Team Operations", percentage: 85 },
      { name: "OWASP Top 10", percentage: 95 },
      { name: "Burp Suite", percentage: 85 },
      { name: "Nmap / Recon", percentage: 90 },
      { name: "Social Engineering", percentage: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "cyan" as const,
    skills: [
      { name: "React / React Native", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Next.js", percentage: 80 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "Framer Motion", percentage: 75 },
      { name: "HTML/CSS", percentage: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "green" as const,
    skills: [
      { name: "Python", percentage: 85 },
      { name: "Node.js", percentage: 80 },
      { name: "Supabase", percentage: 85 },
      { name: "PostgreSQL", percentage: 75 },
      { name: "REST APIs", percentage: 90 },
      { name: "Express.js", percentage: 75 },
    ],
  },
  {
    title: "Outils",
    icon: Wrench,
    color: "cyan" as const,
    skills: [
      { name: "Git / GitHub", percentage: 90 },
      { name: "Docker", percentage: 70 },
      { name: "Linux / Kali", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "Figma", percentage: 70 },
      { name: "Vite", percentage: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h1 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          // Compétences
        </h1>
        <p className="text-muted-foreground text-sm">
          Une expertise technique diversifiée alliant cybersécurité et développement full-stack.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-neon-${category.color}/10 border border-neon-${category.color}/30 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 text-neon-${category.color}`} />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
