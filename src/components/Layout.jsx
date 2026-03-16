import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ theme, onToggleTheme }) {
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
