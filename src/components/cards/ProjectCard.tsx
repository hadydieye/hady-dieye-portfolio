import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  techStack: string[];
  index: number;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ title, description, badge, badgeClass, techStack, index, githubLink, liveLink }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -4 }}
    className="glass-card p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 group cursor-pointer transition-colors duration-300"
  >
    <div className="flex items-center justify-between">
      <span className={badgeClass}>{badge}</span>
      <div className="flex gap-2">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors" onClick={(e) => e.stopPropagation()}>
            <Github size={18} />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-cyan transition-colors" onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-neon-green transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto pt-2">
      {techStack.map((tech) => (
        <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-muted/50 text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
