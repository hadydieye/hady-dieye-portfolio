import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  badge: string;
  badgeClass?: string;
  githubLink?: string;
  liveLink?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  badge,
  badgeClass = "badge-cyan",
  githubLink,
  liveLink,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={badgeClass}>{badge}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded bg-neon-green/10 hover:bg-neon-green/20 transition-colors text-neon-green"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
