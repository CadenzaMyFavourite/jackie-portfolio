import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-lg text-slate-700 dark:text-white/80 max-w-2xl">
          A selection of recent work showcasing backend systems, AI tooling, and scalable platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            bullets={project.bullets}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
