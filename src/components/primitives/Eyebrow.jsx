export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="inline-block h-px w-6 bg-current align-middle mr-3 opacity-60" aria-hidden />
      {children}
    </p>
  );
}