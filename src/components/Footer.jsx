export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20 pt-8 text-sm text-slate-700 dark:text-white/70">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>&copy; {new Date().getFullYear()} Jackie Zou. All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/jiaqi-zou-652084382"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/CadenzaMyFavourite"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:zjiaqi1214@gmail.com"
            className="text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
