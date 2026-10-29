import { Link } from 'react-router-dom';

export default function EmptyState({
  title = "We couldn't find what you're looking for.",
  description,
  actionTo,
  actionLabel,
  icon,
}) {
  return (
    <div className="card p-10 sm:p-16 flex flex-col items-center text-center gap-5 grain">
      {icon && <div className="text-ink-400">{icon}</div>}
      <h3 className="font-display text-display-sm max-w-md">{title}</h3>
      {description && <p className="text-ink-600 max-w-md">{description}</p>}
      {actionTo && actionLabel && (
        <Link to={actionTo} className="link-underline mt-2">
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}