export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 tech-grid" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.88),rgba(245,245,244,0.7)_45%,rgba(236,253,245,0.42))] dark:bg-[linear-gradient(120deg,rgba(9,9,11,0.94),rgba(24,24,27,0.82)_48%,rgba(6,78,59,0.25))]"
        aria-hidden="true"
      />
      <div className="signal-line top-[18%]" aria-hidden="true" />
      <div className="signal-line signal-line-delayed top-[64%]" aria-hidden="true" />
    </div>
  );
}
