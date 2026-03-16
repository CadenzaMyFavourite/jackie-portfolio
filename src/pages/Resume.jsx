export default function Resume() {
  return (
    <section className="space-y-8">
      <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Resume
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
              className="inline-flex items-center justify-center rounded-lg bg-white/20 px-5 py-3 text-sm font-medium text-slate-900 dark:text-white shadow-sm backdrop-blur transition hover:bg-white/30"
            >
              Open full screen
            </a>
          </div>

          <div className="mt-6">
            <iframe
              title="Resume"
              src="/resume.pdf"
              className="w-full min-h-[72vh] max-h-[90vh] rounded-xl border border-white/10"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80 mb-4">Download a copy:</p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg bg-white/20 px-5 py-3 text-sm font-medium text-slate-900 dark:text-white shadow-sm backdrop-blur transition hover:bg-white/30"
            >
              Download Resume
            </a>
          </div>

          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80">Tip: Use the PDF viewer zoom controls or open in a new tab for a better reading experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
