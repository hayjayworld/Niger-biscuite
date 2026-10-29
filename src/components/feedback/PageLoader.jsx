export default function PageLoader({ label = 'Loading' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[50vh] w-full flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-ink/20 border-t-ink animate-spin" />
        <p className="eyebrow">{label}…</p>
      </div>
    </div>
  );
}