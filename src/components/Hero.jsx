import { motion } from 'framer-motion';
import {
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaAward,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';

export default function Hero({ onNavigate }) {
  const navCards = [
    {
      to: '/about',
      title: 'About',
      description: 'Learn who I am, my interests, and background.',
      icon: <FaUser className="w-10 h-10 mb-4 text-blue-300" />
    },
    {
      to: '/projects',
      title: 'Projects',
      description:
        'Explore backend systems, AI platforms, automated judges, ML pipelines, and research.',
      icon: <FaProjectDiagram className="w-10 h-10 mb-4 text-purple-300" />
    },
    {
      to: '/skills',
      title: 'Skills',
      description: 'View my technical skill set and competencies.',
      icon: <FaTools className="w-10 h-10 mb-4 text-green-300" />
    },
    {
      to: '/awards',
      title: 'Awards',
      description: 'See contest results, honours, and academic awards.',
      icon: <FaAward className="w-10 h-10 mb-4 text-indigo-300" />
    },
    {
      to: '/resume',
      title: 'Resume',
      description: 'View my professional experience and download my CV.',
      icon: <FaFileAlt className="w-10 h-10 mb-4 text-red-300" />
    },
    {
      to: '/about',
      title: 'Contact',
      description: 'Get in touch via email or social links.',
      icon: <FaEnvelope className="w-10 h-10 mb-4 text-yellow-300" />
    }
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[url('/images/header.jpg')] bg-cover bg-center px-6 py-16 shadow-xl">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-10">
        <div className="space-y-4 text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">Hi, I'm Jackie.</h1>
          <p className="max-w-2xl text-lg text-white/80">
            I build backend systems, AI platforms, and tooling that help teams move fast and ship with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {navCards.map((card, index) => (
            <motion.button
              key={card.title}
              type="button"
              onClick={() => onNavigate(card.to)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/20 bg-white/10 p-6 text-left shadow-sm backdrop-blur transition hover:border-white/40 hover:bg-white/15"
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-white group-hover:text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
