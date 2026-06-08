export default function GlassCard({ className = '', children, ...rest }) {
  return (
    <div
      className={`glass-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
