import { projects } from "../../data/projects";
import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
            featured={project.featured}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
