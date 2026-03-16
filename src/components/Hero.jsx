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
      id: 'about',
      title: 'About',
      description: 'Learn who I am, my interests and background.',
      icon: <FaUser className="w-10 h-10 mb-4 text-blue-500" />
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'Explore backend systems, AI platforms, automated judges, ML pipelines, and research.',
      icon: <FaProjectDiagram className="w-10 h-10 mb-4 text-purple-500" />
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'View my technical skill set and competencies.',
      icon: <FaTools className="w-10 h-10 mb-4 text-green-500" />
    },
    {
      id: 'awards',
      title: 'Awards',
      description: 'See contest results, honours, and academic awards.',
      icon: <FaAward className="w-10 h-10 mb-4 text-indigo-500" />
    },
    {
      id: 'resume',
      title: 'Resume',
      description: 'View my professional experience and download my CV.',
      icon: <FaFileAlt className="w-10 h-10 mb-4 text-red-500" />
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch via email or social links.',
      icon: <FaEnvelope className="w-10 h-10 mb-4 text-yellow-500" />
    }
  ];

  return (
    <section id="hero" className="page-section block transition-opacity duration-300">
      <div className="mb-8 flex justify-start">
        <img
          src="/assets/profile.jpg"
          alt="Jackie Zou"
          loading="lazy"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
        {navCards.map((card, index) => (
          <motion.button
            key={card.id}
            type="button"
            onClick={() => onNavigate(card.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="nav-card cursor-pointer bg-white p-8 rounded-2xl shadow transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 duration-300 ease-out text-left"
          >
            {card.icon}
            <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
