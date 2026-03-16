import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = useMemo(() => {
    return (to) => {
      navigate(to);
    };
  }, [navigate]);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <div className="space-y-12">
      <Hero onNavigate={handleNavigate} />
      <Contact />
    </div>
  );
}
