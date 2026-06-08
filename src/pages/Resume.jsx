export default function Resume() {
  return (
    <section className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Resume
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
          Resume
        </h1>
      </div>

      <div className="space-y-8">
        <div className="glass-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-700 dark:text-white/80">
              Browse the embedded resume below. You can also download a copy for offline viewing.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
            >
              Open full screen
            </a>
          </div>

          <div className="mt-6">
            <iframe
              title="Resume"
              src="/resume.pdf"
              className="w-full min-h-[72vh] max-h-[90vh] rounded-md border border-slate-200 dark:border-white/10"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="glass-card p-6">
            <p className="mb-4 text-slate-700 dark:text-white/80">Download a copy:</p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Download Resume
            </a>
          </div>

          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80">
              Tip: Use the PDF viewer zoom controls or open in a new tab for a better reading experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
