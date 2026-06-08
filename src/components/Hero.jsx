import { motion } from 'framer-motion';
import {
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaProjectDiagram,
  FaRobot,
  FaTools
} from 'react-icons/fa';
import { experienceHighlights } from '../data/experience';

export default function Hero({ onNavigate }) {
  const stats = experienceHighlights;

  const proofCards = [
    {
      title: 'AI Infrastructure',
      description: 'RAG, vector search, paper ingestion, LLM reasoning, and grounded knowledge workflows.',
      icon: <FaRobot className="h-5 w-5" />
    },
    {
      title: 'Quant & Optimization',
      description: 'Backtesting, market data, portfolio accounting, execution costs, and allocation logic.',
      icon: <FaChartLine className="h-5 w-5" />
    },
    {
      title: 'Backend/Data Systems',
      description: 'APIs, databases, async jobs, data pipelines, and full-stack tools around real workflows.',
      icon: <FaDatabase className="h-5 w-5" />
    }
  ];

  const navCards = [
    {
      to: '/projects',
      title: 'Projects',
      description: 'Inspect source-linked project stories and implementation choices.',
      icon: <FaProjectDiagram className="h-5 w-5" />
    },
    {
      to: '/skills',
      title: 'Skills',
      description: 'Scan my strongest languages, frameworks, and systems tools.',
      icon: <FaTools className="h-5 w-5" />
    },
    {
      to: '/awards',
      title: 'Awards',
      description: 'See math contest and academic recognition highlights.',
      icon: <FaAward className="h-5 w-5" />
    },
    {
      to: '/resume',
      title: 'Resume',
      description: 'Open or download the resume recruiters usually need next.',
      icon: <FaFileAlt className="h-5 w-5" />
    },
    {
      to: '/contact',
      title: 'Contact',
      description: 'Reach me by email, LinkedIn, or GitHub.',
      icon: <FaEnvelope className="h-5 w-5" />
    }
  ];

  return (
    <section className="relative py-8 sm:py-12">
      <div className="grid min-h-[calc(100vh-11rem)] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-300/70 bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
            <FaBriefcase className="h-3.5 w-3.5" />
            Building AI, data, backend, and quant systems
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Jackie Zou builds AI infrastructure, data systems, and quantitative research tools.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-white/80 sm:text-lg">
              University of Waterloo Computer Science student focused on RAG systems, backend engineering, data pipelines, optimization, and full-stack tools that turn messy information into usable workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
            >
              <FaProjectDiagram className="h-4 w-4" />
              View Projects
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/resume')}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <FaFileAlt className="h-4 w-4" />
              Resume
            </button>
            <a
              href="https://github.com/CadenzaMyFavourite"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/50 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-md border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10"
              >
                <p className="text-sm font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-2xl dark:border-white/10">
            <img
              src="/images/profile.jpg"
              alt="Jackie Zou"
              className="aspect-[4/5] w-full object-cover object-center opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="rounded-md border border-white/10 bg-slate-950/90 p-4 text-white shadow-xl backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono">jackie.profile</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs leading-6 text-emerald-100 sm:text-sm">
                  <p><span className="text-cyan-300">focus</span>: RAG, data systems, quant research tools</p>
                  <p><span className="text-cyan-300">stack</span>: APIs, vector DBs, backtests, ML workflows</p>
                  <p><span className="text-cyan-300">goal</span>: build reliable systems around unclear problems</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {proofCards.map((card) => (
          <div
            key={card.title}
            className="rounded-md border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              {card.icon}
            </div>
            <h2 className="text-base font-semibold text-slate-950 dark:text-white">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-white/10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-white/50">
            Explore
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {navCards.map((card, index) => (
            <motion.button
              key={card.title}
              type="button"
              onClick={() => onNavigate(card.to)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group rounded-md border border-slate-200 bg-white/70 p-4 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:border-emerald-300/50 dark:hover:bg-white/20"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                {card.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">{card.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
