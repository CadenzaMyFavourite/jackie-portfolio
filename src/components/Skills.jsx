import { skillCategories } from '../data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-lg text-white/80 max-w-2xl">
          A snapshot of the tools, languages, and systems I use to deliver robust, scalable
          software.
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
