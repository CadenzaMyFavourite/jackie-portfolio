import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProjectCard({ title, bullets, tags, github, demo, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <ul className="list-disc ml-5 text-slate-700 dark:text-white/80 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-700 dark:text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white shadow-sm backdrop-blur transition hover:bg-white/30"
          >
            View Code
          </a>
        ) : null}
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white shadow-sm backdrop-blur transition hover:bg-white/30"
          >
            View Live
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
