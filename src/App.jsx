import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';
import About from './components/About';

const SECTION_IDS = ['hero', 'projects', 'skills', 'about', 'awards', 'resume', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: 'Home', id: 'hero' },
      { label: 'Projects', id: 'projects' },
      { label: 'Skills', id: 'skills' },
      { label: 'About', id: 'about' },
      { label: 'Awards', id: 'awards' },
      { label: 'Resume', id: 'resume' },
      { label: 'Contact', id: 'contact' }
    ],
    []
  );

  useEffect(() => {
    // Initialize theme from localStorage
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const activeRef = useRef('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionTops = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Number.POSITIVE_INFINITY };
        return { id, top: el.getBoundingClientRect().top };
      });
      const current = sectionTops
        .filter((s) => s.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      if (current && current.id && current.id !== activeRef.current) {
        activeRef.current = current.id;
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', next);
  };

  return (
    <div className="min-h-screen text-gray-900 antialiased flex flex-col items-center p-6 sm:p-12">
      <div className="w-full max-w-4xl">
        <Navbar
          navItems={navItems}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onToggleTheme={toggleTheme}
          isDark={theme === 'dark'}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        <Hero onNavigate={scrollToSection} />
        <Projects />
        <Skills />
        <Awards />

        <section id="about" className="page-section transition-opacity duration-300 reveal">
          <About />
        </section>

        <section id="resume" className="page-section transition-opacity duration-300 reveal">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Resume
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-600 mb-6">You can view my full resume below or download a version.</p>
            <div className="mb-4">
              <label htmlFor="resume-select" className="sr-only">
                Resume version
              </label>
              <select id="resume-select" className="border rounded px-3 py-2" onChange={(e) => {
                  const url = e.target.value;
                  const frame = document.getElementById('resume-frame');
                  const download = document.getElementById('resume-download');
                  if (frame) frame.src = url;
                  if (download) download.href = url;
                }}>
                <option value="/assets/SOFTWARE_ENGINEERING.pdf">SOFTWARE_ENGINEERING Resume</option>
                <option value="/assets/AIMachinelearning.pdf">AIMachinelearning Resume</option>
              </select>
            </div>
            <iframe
              id="resume-frame"
              src="/assets/SOFTWARE_ENGINEERING.pdf"
              width="100%"
              height="600"
            />
            <div className="mt-6">
              <a
                id="resume-download"
                href="/assets/SOFTWARE_ENGINEERING.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section transition-opacity duration-300 reveal">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact
          </div>
          <p className="text-gray-700">Let's work together.</p>
          <p className="mt-4">
            Email: <a href="mailto:zjiaqi1214@gmail.com" className="text-blue-600">zjiaqi1214@gmail.com</a>
          </p>
          <div className="mt-2 space-x-4">
            <a href="https://github.com/CadenzaMyFavourite" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jiaqi-zou-652084382" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
