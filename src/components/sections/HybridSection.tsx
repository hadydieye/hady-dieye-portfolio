import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/cards/ProjectCard";
import { hybridProjects } from "@/data/projects";

const HybridSection = () => (
  <section id="hybrid" className="relative py-14 sm:py-20 md:py-32 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionTitle label="// PROJETS HYBRIDES" title="Quand Code Rencontre Sécurité" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {hybridProjects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default HybridSection;
