import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import GlassCard from './GlassCard';

export default function SkillCard({ title, description, items }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full"
    >
      <GlassCard
        className="cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
          </div>
          <div
            className={`text-white/70 transition-transform duration-200 ${
              expanded ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <FaChevronDown />
          </div>
        </div>

        {expanded ? (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
            <ul className="list-disc ml-5 space-y-2 text-white/80">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </GlassCard>
    </motion.div>
  );
}
