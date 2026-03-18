import { useEffect, useMemo, useState } from 'react';
import { projects as fallbackProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_CadenzaMyFavourite;

function mapRepoToProject(repo) {
  const tags = [repo.language, ...(repo.topics ?? [])].filter(Boolean);
  const bullets = [];

  if (repo.description) bullets.push(repo.description);
  if (repo.homepage) bullets.push('Live demo available');

  return {
    title: repo.name,
    bullets: bullets.length ? bullets : ['No description provided.'],
    tags,
    github: repo.html_url,
    demo: repo.homepage ?? ''
  };
}

export default function Projects() {
  const [repos, setRepos] = useState(fallbackProjects);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const repoSourceLabel = useMemo(() => {
    if (error) return 'Manual list (GitHub sync unavailable)';
    if (!GITHUB_USERNAME) return 'Manual list (set VITE_GITHUB_CadenzaMyFavourite to enable sync)';
    return 'GitHub repos';
  }, [error]);

  useEffect(() => {
    if (!GITHUB_USERNAME) return;

    const controller = new AbortController();

    async function fetchRepos() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?sort=updated&per_page=50`,
          {
            headers: {
              Accept: 'application/vnd.github+json'
            },
            signal: controller.signal
          }
        );

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        const repos = Array.isArray(data) ? data : [];

        const filtered = repos
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filtered.slice(0, 8).map(mapRepoToProject));
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        setError('Unable to load GitHub projects. Showing fallback list.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
    return () => controller.abort();
  }, [GITHUB_USERNAME]);

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-lg text-slate-700 dark:text-white/80 max-w-2xl">
          A selection of recent work showcasing backend systems, AI tooling, and scalable platforms.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-200/80 mt-2">
          {repoSourceLabel}
          {loading ? ' (loading…)' : ''}
          {error ? ` — ${error}` : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {repos.map((project, index) => (
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
