import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import GlassCard from './GlassCard';

export default function SkillCard({ title, description, items }) {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemName) => {
    setActiveItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full"
    >
      <GlassCard className="cursor-default">
        <div
          className="flex items-start justify-between gap-4 cursor-pointer"
          role="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-white/80">{description}</p>
          </div>
          <div
            className={`text-slate-600 dark:text-white/70 transition-transform duration-200 ${
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
            <ul className="space-y-3">
              {items.map((item) => {
                const isActive = activeItem === item.name;

                return (
                  <li key={item.name} className="rounded-xl border border-white/10 bg-white/10">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.name)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm text-slate-900 dark:text-white transition hover:bg-white/20 dark:hover:bg-white/10"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span
                        className={`text-slate-600 dark:text-white/70 transition-transform duration-200 ${
                          isActive ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        <FaChevronDown />
                      </span>
                    </button>

                    {isActive ? (
                      <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="px-4 pb-4 text-sm text-slate-700 dark:text-white/80"
                      >
                        {item.description}
                      </motion.div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </GlassCard>
    </motion.div>
  );
}
