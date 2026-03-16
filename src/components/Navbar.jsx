import { useEffect, useRef } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

export default function Navbar({
  navItems,
  activeSection,
  onNavigate,
  onToggleTheme,
  isDark,
  mobileOpen,
  setMobileOpen
}) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 10) {
        navRef.current.classList.add('shadow-lg');
        navRef.current.classList.remove('shadow-sm');
      } else {
        navRef.current.classList.add('shadow-sm');
        navRef.current.classList.remove('shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onLinkClick = (id) => {
    onNavigate(id);
  };

  return (
    <nav ref={navRef} className="sticky top-0 bg-white z-50 flex justify-between items-center mb-12 shadow-sm">
      <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => onNavigate('hero')}>
        Jackie Zou
      </div>

      <button
        className="sm:hidden focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <FaBars className="w-6 h-6" />
      </button>

      <div
        className={`${mobileOpen ? 'block' : 'hidden'} sm:flex space-x-6 text-sm font-medium text-gray-500`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            data-section={item.id}
            onClick={() => onLinkClick(item.id)}
            className={`nav-link hover:text-blue-600 transition-colors text-left sm:text-center ${
              activeSection === item.id ? 'active text-gray-900 font-semibold' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          title="Toggle dark mode"
          className="ml-4 text-lg"
          type="button"
          onClick={onToggleTheme}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
