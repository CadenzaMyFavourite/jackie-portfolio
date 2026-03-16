import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ theme, onToggleTheme }) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${theme === 'dark' ? 'bg-slate-950/70 text-white' : 'bg-slate-50/80 text-slate-900'}`}>
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
