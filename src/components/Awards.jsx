import GlassCard from './GlassCard';
import { awards } from '../data/awards';

export default function Awards() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Awards & Recognition
        </h2>
        <p className="text-lg text-slate-700 dark:text-white/80 max-w-2xl">
          Highlights of notable awards and recognition received during my studies.
        </p>
      </div>

      <div className="space-y-4">
        {awards.map((award) => (
          <GlassCard key={award.text} className="p-6">
            <p className="text-slate-700 dark:text-white/80">{award.text}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
