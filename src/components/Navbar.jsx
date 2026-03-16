import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Awards', to: '/awards' },
  { label: 'Contact', to: '/#contact', isAnchor: true },
  { label: 'Resume', to: '/resume' }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700"
          onClick={() => setMobileOpen(false)}
        >
          Jackie Zou
        </NavLink>

        <button
          className="sm:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FaBars className="h-6 w-6" />
        </button>

        <div
          className={`${
            mobileOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:gap-6`}
        >
          {navItems.map((item) => {
            if (item.isAnchor) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-600 transition rounded-lg hover:bg-white/50 hover:text-slate-900"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm font-medium transition rounded-lg ${
                    isActive
                      ? 'bg-white/70 text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}

          <button
            type="button"
            onClick={() => {
              onToggleTheme();
              setMobileOpen(false);
            }}
            className="ml-0 mt-3 inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/30 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur transition hover:bg-white/50 hover:text-slate-900 sm:mt-0 sm:ml-4"
            title="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
