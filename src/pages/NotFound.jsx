import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-white">404</h1>
        <p className="mt-4 text-lg text-white/80">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white/20 px-8 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/30"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
