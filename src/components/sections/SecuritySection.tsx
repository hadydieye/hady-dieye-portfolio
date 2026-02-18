import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/cards/ProjectCard";
import { securityProjects } from "@/data/projects";

const SecuritySection = () => (
  <section id="security" className="relative py-14 sm:py-20 md:py-32 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionTitle label="// CYBERSÉCURITÉ" title="Pentests & Audits de Sécurité" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {securityProjects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
