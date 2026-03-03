import { motion } from "framer-motion";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { devProjects, hybridProjects } from "@/data/projects";

const Projects = () => {
  const allDevProjects = [
    ...devProjects,
    ...hybridProjects.filter(p => p.badgeClass !== "badge-green"),
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h1 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          // Projets Développement
        </h1>
        <p className="text-muted-foreground text-sm">
          Applications web et mobile développées avec les technologies modernes : React, React Native, TypeScript, et plus.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allDevProjects.map((project, index) => (
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
  );
};

export default Projects;
