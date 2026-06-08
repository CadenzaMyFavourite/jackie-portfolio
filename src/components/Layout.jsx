import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ theme, onToggleTheme }) {
  return (
    <div className={`relative min-h-screen overflow-x-hidden ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-stone-50 text-slate-950'}`}>
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
