import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion.js';
import Eyebrow from '../primitives/Eyebrow.jsx';
import ImageReveal from '../primitives/ImageReveal.jsx';
import { company } from '../../data/company.js';

export default function Heritage() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-5"
        >
          <motion.div variants={fadeUp}><Eyebrow>Heritage</Eyebrow></motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-balance"
          >
            More than a biscuit company.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-ink-600 text-lg text-pretty">
            A Nigerian story built across generations — from early production
            to a modern manufacturing footprint. Placeholder narrative — replace
            with verified company story.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Link to="/story" className="link-underline text-[15px]">
              Explore Our Story →
            </Link>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-7 space-y-6">
          <ImageReveal
            src="https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793525775/factory-interior.webp"
            alt="Interior of a biscuit production facility"
            ratio="16/10"
            className="rounded-2xl"
          />

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-ink/10">
            {company.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-ink">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}