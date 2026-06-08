import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFileAlt, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Awards', to: '/awards' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full">
      <div className="w-full pl-2 pr-4 sm:pl-3 sm:pr-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center p-1.5" aria-hidden="true">
              <img
                src="/images/jackie-logo-mark.png"
                alt=""
                className="h-full w-full object-contain transition dark:invert"
              />
            </div>
            <NavLink
              to="/"
              className="truncate text-base font-semibold tracking-tight text-slate-950 transition hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300"
              onClick={() => setMobileOpen(false)}
            >
              Jackie Zou
            </NavLink>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950'
                      : 'text-slate-600 hover:bg-white/60 hover:text-slate-950 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `ml-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-emerald-700 text-white dark:bg-emerald-300 dark:text-slate-950'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-300 dark:text-slate-950 dark:hover:bg-emerald-200'
                }`
              }
            >
              <FaFileAlt className="h-3.5 w-3.5" />
              Resume
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => {
              onToggleTheme();
              setMobileOpen(false);
            }}
            className="glass-control hidden items-center justify-center px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white/80 hover:text-slate-950 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white md:inline-flex"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </button>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="glass-control inline-flex h-10 w-10 items-center justify-center text-slate-700 dark:text-white/70"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              className="glass-control inline-flex h-10 w-10 items-center justify-center text-slate-700 dark:text-white/70"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/50 py-3 dark:border-white/10 md:hidden">
            {[...navItems, { label: 'Resume', to: '/resume' }].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                      : 'text-slate-600 hover:bg-white/60 hover:text-slate-950 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
