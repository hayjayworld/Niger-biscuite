import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion.js';

export default function DistributorCTA() {
  return (
    <section className="container-x py-20 md:py-28">
      <motion.div
        variants={stagger(0, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="rounded-3xl bg-gold-100 border border-ink/10 p-8 sm:p-12 md:p-16 grid lg:grid-cols-2 gap-8 items-center grain"
      >
        <div>
          <motion.div variants={fadeUp} className="eyebrow">Business</motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
            Bring Niger Biscuit closer to your customers.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-ink-700 max-w-lg text-pretty">
            Distribution, wholesale and partnership opportunities. Placeholder copy — replace with verified business messaging.
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:justify-end">
          <Link to="/distribution" className="btn-primary group">
            <span>Become a Distributor</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Sales
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}