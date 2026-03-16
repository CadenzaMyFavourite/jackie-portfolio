export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh (primary animated gradient background) */}
      <div className="absolute inset-0 animate-gradient-mesh opacity-80" aria-hidden="true" />

      {/* Soft translucent overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" aria-hidden="true" />

      {/* Floating blurred color blobs */}
      <div
        className="blob blob-1"
        aria-hidden="true"
      />
      <div
        className="blob blob-2"
        aria-hidden="true"
      />
      <div
        className="blob blob-3"
        aria-hidden="true"
      />
      <div
        className="blob blob-4"
        aria-hidden="true"
      />
    </div>
  );
}
