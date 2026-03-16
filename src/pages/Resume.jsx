export default function Resume() {
  return (
    <section className="space-y-8">
      <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Resume
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80 mb-4">
              Browse the embedded resume below. You can also download a copy for offline viewing.
            </p>
            <iframe
              title="Resume"
              src="/SOFTWARE_ENGINEERING.pdf"
              className="w-full h-[600px] rounded-xl border border-white/10"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80 mb-4">Download a copy:</p>
            <a
              href="/SOFTWARE_ENGINEERING.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg bg-white/20 px-5 py-3 text-sm font-medium text-slate-900 dark:text-white shadow-sm backdrop-blur transition hover:bg-white/30"
            >
              Download Resume
            </a>
          </div>

          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-white/80">Tip: Use the PDF viewer controls above to zoom or print.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
