import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import { fadeUp, stagger } from '../lib/motion.js';

export default function NotFound() {
  useSEO({
    title: 'Page not found — Niger Biscuit',
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <section className="container-x py-24 md:py-32 grain">
      <motion.div
        variants={stagger(0, 0.08)}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp} className="eyebrow">Error 404</motion.div>
        <motion.h1 variants={fadeUp} className="mt-5 font-display text-display-xl text-balance">
          This page
          <br />
          <span className="italic text-gold">doesn't exist.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg text-ink-600 max-w-md text-pretty">
          It may have moved, or the link may be broken. Try one of these instead.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary group">
            Back to Home
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/products" className="btn-secondary">Browse Products</Link>
          <Link to="/contact" className="btn-ghost">Contact</Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 grid sm:grid-cols-3 gap-3">
          {[
            { to: '/story', label: 'Our Story' },
            { to: '/brands', label: 'Brands' },
            { to: '/manufacturing', label: 'Manufacturing' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="card p-4 text-sm hover:border-ink/30 transition-colors"
            >
              {l.label} →
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}