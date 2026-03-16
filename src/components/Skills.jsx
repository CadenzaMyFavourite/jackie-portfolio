import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="page-section transition-opacity duration-300 reveal">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <a
            key={category.title}
            href={category.href}
            className="block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:animate-spin-slow no-underline"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b pb-2">{category.title}</h3>
            <ul className="space-y-2 text-gray-700">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
