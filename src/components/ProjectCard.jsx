import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProjectCard({ title, bullets, tags, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="project-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc ml-5 text-gray-600 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-gray-200 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
