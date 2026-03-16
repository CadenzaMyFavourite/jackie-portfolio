import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="page-section transition-opacity duration-300 reveal">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            bullets={project.bullets}
            tags={project.tags}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
