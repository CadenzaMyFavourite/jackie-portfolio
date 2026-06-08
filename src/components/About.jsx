import { experiences } from '../data/experience';

export default function About() {
  return (
    <section className="py-8">
      <div className="w-full max-w-4xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Hi, I'm Jackie (Jiaqi) Zou.
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 dark:text-white/80">
          <p>
            Hi, I'm Jackie (Jiaqi) Zou, a Computer Science and Combinatorics & Optimization student at the University of Waterloo with a strong interest in artificial intelligence, backend engineering, data systems, and quantitative research.
          </p>

          <p>
            I enjoy building systems that turn messy real-world information into something structured, searchable, and useful. My work usually sits at the intersection of software engineering, data processing, and applied AI. I like projects where I can design the full pipeline: collecting data, cleaning it, storing it, building APIs around it, applying machine learning or retrieval systems, and finally presenting the result through a usable interface.
          </p>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            Experience
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            Practical AI, data, and internal tooling work
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 dark:text-white/70">
            Recent work experience where I connected real business workflows with automation, data pipelines,
            searchable knowledge bases, and full-stack tools.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="glass-card flex h-full flex-col p-5"
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                    {experience.company}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    {experience.period} | {experience.location}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-white/80">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-white/75 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 dark:text-white/80">
          <p>
            My current focus is on building practical AI and data infrastructure. Through projects like CadenSci, I am exploring how Retrieval-Augmented Generation, vector databases, scientific paper ingestion, and LLM-based reasoning can help people search, understand, and organize large amounts of technical knowledge. I am especially interested in making AI systems more grounded, traceable, and useful for real workflows instead of only producing surface-level answers.
          </p>

          <p>
            I am also interested in quantitative finance and optimization. My Quant Backtesting & Portfolio Optimization Engine is a long-term project where I am building a realistic algorithmic trading research system from the ground up. Instead of only chasing profitable strategies, I focus on the engineering behind trustworthy backtests: standardized market data, portfolio accounting, transaction costs, slippage, next-bar execution, performance metrics, and optimization-based allocation. This project lets me connect programming, financial data, statistics, and combinatorics/optimization into one system.
          </p>

          <p>
            Professionally, I have experience working on AI automation, full-stack internal tools, data pipelines, and knowledge-base systems for property-management and consulting workflows. These experiences taught me that strong software is not just about writing code. It is about understanding the actual business process, finding repeated manual work, designing a better workflow, and building tools that people can actually use.
          </p>

          <p>
            I care a lot about clarity, correctness, and continuous improvement. When I build something, I do not only want it to work once. I want to understand why it works, how it can fail, how to test it, and how to make it easier to extend later. That mindset is why I enjoy backend systems, data infrastructure, AI workflows, and simulation engines: they require both technical detail and system-level thinking.
          </p>

          <p>
            Outside of coursework, I spend a lot of time learning by building. I use projects as a way to connect different areas of computer science, including algorithms, databases, machine learning, APIs, frontend design, optimization, and software architecture. My goal is to become the kind of engineer who can take an unclear problem, break it into clean components, and build a reliable system around it.
          </p>

          <p>
            I am currently looking for opportunities where I can work on backend engineering, AI infrastructure, data science, quantitative research tools, or full-stack systems. I am especially excited by teams that care about practical problem-solving, technical depth, and building software that creates measurable value.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Looking for</p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/70">
              Backend Engineering, AI Infrastructure, Data Science, Quant Research Tools, Full-Stack Systems
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Core focus</p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/70">
              RAG, vector databases, data pipelines, APIs, optimization, ML systems
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Working style</p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/70">
              Clarity, correctness, testing, extensibility, system-level thinking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
