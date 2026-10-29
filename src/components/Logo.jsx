import { Link } from 'react-router-dom';

export default function Logo({ onDark = false, className = '' }) {
  return (
    <Link
      to="/"
      aria-label="Niger Biscuit — Home"
      className={`inline-flex items-center gap-2.5 group ${className}`}
    >
      <span
        aria-hidden
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-500 ${
          onDark ? 'border border-cream-50/40' : 'border border-ink/25'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${onDark ? 'bg-gold' : 'bg-gold'}`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] tracking-tight ${
            onDark ? 'text-cream-50' : 'text-ink'
          }`}
        >
          Niger Biscuit
        </span>
        <span
          className={`mt-1 text-[9px] uppercase tracking-[0.28em] ${
            onDark ? 'text-cream-50/60' : 'text-ink-500'
          }`}
        >
          Since&nbsp;
          <span className="opacity-70">[Year]</span>
        </span>
      </span>
    </Link>
  );
}