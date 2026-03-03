import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Bug, Users, CheckCircle, Mail, Github, ArrowRight } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.png";
import StatCard from "@/components/dashboard/StatCard";
import SkillBar from "@/components/dashboard/SkillBar";
import ProjectCard from "@/components/dashboard/ProjectCard";
import InteractiveTerminal from "@/components/dashboard/InteractiveTerminal";
import { securityProjects, devProjects } from "@/data/projects";

const stats = [
  { icon: Briefcase, value: "10+", label: "Projets Réalisés", color: "green" as const },
  { icon: Bug, value: "30+", label: "Vulnérabilités Trouvées", color: "cyan" as const },
  { icon: Users, value: "5+", label: "Clients Accompagnés", color: "magenta" as const },
  { icon: CheckCircle, value: "95%", label: "Taux de Succès", color: "purple" as const },
];

const keySkills = [
  { name: "React / React Native", percentage: 90, color: "cyan" as const },
  { name: "Pentesting / Red Team", percentage: 85, color: "magenta" as const },
  { name: "TypeScript", percentage: 85, color: "cyan" as const },
  { name: "Python", percentage: 85, color: "green" as const },
];

const recentProjects = [
  ...securityProjects.slice(0, 1),
  ...devProjects.slice(0, 2),
];

const DashboardIndex = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <img
              src={aboutPhoto}
              alt="Hady Dieye"
              className="w-20 h-20 rounded-xl object-cover border-2 border-neon-green/30"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-background" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-neon-green font-mono text-sm">$</span>
              <span className="text-muted-foreground font-mono text-sm">hady@kali:~$</span>
              <span className="text-foreground font-mono text-sm">whoami</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Hady Dieye
            </h1>
            <p className="text-muted-foreground">
              Security Engineer & Full-Stack Developer — Du code au pentest, je maîtrise les deux faces.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="btn-neon-green flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
            <a
              href="https://github.com/hadydieye"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-border hover:border-neon-green/50 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            color={stat.color}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Skills Section */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              // Compétences Clés
            </h2>
            <Link
              to="/skills"
              className="text-xs text-neon-green hover:underline flex items-center gap-1"
            >
              Voir tout <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-4">
            {keySkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              // Projets Récents
            </h2>
            <Link
              to="/projects"
              className="text-xs text-neon-green hover:underline flex items-center gap-1"
            >
              Voir tout <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.techStack}
                badge={project.badge}
                badgeClass={project.badgeClass}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Widget */}
      <InteractiveTerminal />
    </div>
  );
};

export default DashboardIndex;
