import { awards } from '../data/awards';

export default function Awards() {
  return (
    <section id="awards" className="page-section transition-opacity duration-300 reveal">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      <ul className="list-disc ml-5 text-gray-700 space-y-2">
        {awards.map((award) => (
          <li key={award.text}>{award.text}</li>
        ))}
      </ul>
    </section>
  );
}
