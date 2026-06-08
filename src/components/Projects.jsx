import { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'CadenzaMyFavourite';
const FEATURED_REPO_NAMES = new Set(
  projects
    .map((project) => project.github?.split('/').filter(Boolean).pop())
    .filter(Boolean)
);

function mapRepoToProject(repo) {
  const tags = [repo.language, ...(repo.topics ?? [])].filter(Boolean);

  return {
    title: repo.name,
    role: 'Recent GitHub activity',
    summary: repo.description || 'Recent public repository.',
    impact: repo.homepage ? ['Live demo available from the repository homepage.'] : [],
    tags,
    github: repo.html_url,
    demo: repo.homepage ?? ''
  };
}

export default function Projects() {
  const [recentRepos, setRecentRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const repoSourceLabel = useMemo(() => {
    if (error) return 'GitHub sync unavailable';
    if (!GITHUB_USERNAME) return '';
    return `Recent public repos from @${GITHUB_USERNAME}`;
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
          .filter((repo) => !FEATURED_REPO_NAMES.has(repo.name))
          .filter((repo) => Boolean(repo.description))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRecentRepos(filtered.slice(0, 4).map(mapRepoToProject));
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        setError('Unable to load extra repositories.');
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
    return () => controller.abort();
  }, []);

  return (
    <section className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Recruiter proof
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Featured engineering work
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 dark:text-white/80">
          Projects selected to show how I think about AI infrastructure, quantitative research tooling,
          backend engineering, data systems, and applied ML. Each card links to public source so the
          implementation can be inspected.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            role={project.role}
            summary={project.summary}
            impact={project.impact}
            bullets={project.bullets}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
            delay={index * 100}
          />
        ))}
      </div>

      {recentRepos.length || loading || error ? (
        <div className="space-y-4 pt-6">
          <div className="flex flex-col gap-2 border-t border-slate-200 pt-6 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">More recent GitHub activity</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                {repoSourceLabel}
                {loading ? ' - loading...' : ''}
                {error ? ` - ${error}` : ''}
              </p>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
            >
              View full GitHub profile
            </a>
          </div>
          {recentRepos.length ? (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {recentRepos.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  role={project.role}
                  summary={project.summary}
                  impact={project.impact}
                  tags={project.tags}
                  github={project.github}
                  demo={project.demo}
                  delay={index * 80}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
