import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/motion.js';
import Eyebrow from './primitives/Eyebrow.jsx';

export default function PageHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-16 md:pt-24 pb-10 md:pb-14">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          animate="show"
          className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Eyebrow className={align === 'center' ? 'justify-center' : ''}>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={fadeUp} className="mt-6 text-lg text-ink-600 max-w-2xl text-pretty">
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}