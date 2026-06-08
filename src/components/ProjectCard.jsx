import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, role, summary, impact, bullets, tags, github, demo, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const details = impact ?? bullets ?? [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="glass-card interactive-card flex h-full flex-col p-5"
    >
      <div className="flex-1">
        {role ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            {role}
          </p>
        ) : null}
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
        {summary ? (
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-white/80">{summary}</p>
        ) : null}
        {details.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-white/80">
            {details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="glass-chip px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
          >
            <FaGithub className="h-4 w-4" />
            View Code
          </a>
        ) : null}
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="glass-control inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 hover:-translate-y-0.5 hover:bg-white/80 dark:text-white dark:hover:bg-white/20"
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" />
            View Live
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
