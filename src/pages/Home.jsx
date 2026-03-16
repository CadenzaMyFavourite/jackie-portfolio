import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = useMemo(() => {
    return (to) => {
      navigate(to);
    };
  }, [navigate]);

  return (
    <div className="space-y-12">
      <Hero onNavigate={handleNavigate} />
    </div>
  );
}
