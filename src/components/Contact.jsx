import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const contactItems = [
  {
    label: 'Email',
    value: 'zjiaqi1214@gmail.com',
    href: 'mailto:zjiaqi1214@gmail.com',
    icon: FaEnvelope,
    color: 'bg-emerald-600'
  },
  {
    label: 'GitHub',
    value: 'github.com/CadenzaMyFavourite',
    href: 'https://github.com/CadenzaMyFavourite',
    icon: FaGithub,
    color: 'bg-slate-950'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jiaqi-zou-652084382',
    href: 'https://www.linkedin.com/in/jiaqi-zou-652084382',
    icon: FaLinkedin,
    color: 'bg-blue-700'
  },
  {
    label: 'Location',
    value: 'Waterloo / Toronto, ON',
    icon: FaMapMarkerAlt,
    color: 'bg-amber-600'
  },
  {
    label: 'Availability',
    value: 'Open to backend, AI infrastructure, data science, quant tooling, and full-stack roles',
    icon: FaRegClock,
    color: 'bg-cyan-700'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Let us talk about where I can contribute.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-white/70">
            Best path for recruiters: email first, then LinkedIn or GitHub for project context.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isLink = Boolean(item.href);

            return (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-md border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-md ${item.color} text-white shadow-sm transition group-hover:scale-105`}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">{item.label}</p>
                  {isLink ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block break-words text-sm text-slate-700 transition hover:text-slate-950 dark:text-white/70 dark:hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-700 dark:text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
