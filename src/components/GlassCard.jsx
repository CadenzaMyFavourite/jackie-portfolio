export default function GlassCard({ className = '', children, ...rest }) {
  return (
    <div
      className={`glass-card border border-white/20 shadow-sm backdrop-blur-md bg-white/10 rounded-2xl p-6 transition hover:shadow-lg hover:bg-white/15 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
