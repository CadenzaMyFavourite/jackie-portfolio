import { skillCategories } from '../data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Technical stack
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 dark:text-white/70">
          A recruiter-friendly snapshot first, with expandable details for technical readers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            description={category.description}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}
