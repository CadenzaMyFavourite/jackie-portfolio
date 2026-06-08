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

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full"
    >
      <GlassCard className="cursor-default">
        <button
          type="button"
          className="flex w-full cursor-pointer items-start justify-between gap-4 rounded-md bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70"
          onClick={toggleExpanded}
          aria-expanded={expanded}
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-white/70">{description}</p>
          </div>
          <div
            aria-hidden="true"
            className={`text-slate-600 transition-transform duration-200 dark:text-white/70 ${
              expanded ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <FaChevronDown />
          </div>
        </button>

        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item.name}
              className="glass-chip px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-white/70"
            >
              {item.name}
            </span>
          ))}
        </div>

        {expanded ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <ul className="space-y-3">
              {items.map((item) => {
                const isActive = activeItem === item.name;

                return (
                  <li key={item.name} className="glass-subcard overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.name)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm text-slate-950 hover:bg-white/50 dark:text-white dark:hover:bg-white/10"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span
                        className={`text-slate-600 transition-transform duration-200 dark:text-white/70 ${
                          isActive ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        <FaChevronDown />
                      </span>
                    </button>

                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="break-words px-4 pb-4 text-sm leading-6 text-slate-700 dark:text-white/70"
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
