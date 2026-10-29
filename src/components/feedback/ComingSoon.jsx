export default function ComingSoon({ label = 'Coming soon' }) {
  return (
    <div className="rounded-xl border border-dashed border-ink/20 bg-cream-100/60 px-5 py-6 text-center">
      <p className="text-sm text-ink-500">{label}</p>
    </div>
  );
}