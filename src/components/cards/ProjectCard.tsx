import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  techStack: string[];
  image: string;
  secondaryImage?: string;
  isMobile?: boolean;
  index: number;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ title, description, badge, badgeClass, techStack, image, secondaryImage, isMobile, index, githubLink, liveLink }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -4 }}
    className="glass-card overflow-hidden flex flex-col group cursor-pointer transition-colors duration-300 h-full"
  >
    {/* Project Image Area */}
    <div className={`relative ${isMobile ? "h-64 sm:h-72" : "h-48"} overflow-hidden bg-muted/20`}>
      {isMobile && secondaryImage ? (
        <div className="flex justify-center items-center h-full p-4 gap-4 sm:gap-6 bg-gradient-to-br from-background/40 to-muted/20">
          <motion.div
            whileHover={{ y: -10 }}
            className="w-[40%] aspect-[9/19.5] rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-2xl relative z-10 bg-black"
          >
            <img src={image} alt={`${title} light`} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ delay: 0.1 }}
            className="w-[40%] aspect-[9/19.5] rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-2xl mt-8 bg-black"
          >
            <img src={secondaryImage} alt={`${title} dark`} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

      <div className="absolute top-4 left-4 z-20">
        <span className={badgeClass}>{badge}</span>
      </div>

      <div className="absolute top-4 right-4 flex gap-2 z-20">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/60 backdrop-blur-md text-foreground hover:text-neon-green transition-transform hover:scale-110 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <Github size={18} />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/60 backdrop-blur-md text-foreground hover:text-neon-cyan transition-transform hover:scale-110 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>

    <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-neon-green transition-colors flex items-center gap-2">
        {title}
        {isMobile && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">APP</span>}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-border/30">
        {techStack.map((tech) => (
          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground/80 border border-border/20">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
