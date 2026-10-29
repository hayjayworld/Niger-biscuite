import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion.js';
import ImageReveal from '../primitives/ImageReveal.jsx';

export default function ProcessStep({ step, index, reverse = false }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <ImageReveal
          src={step.image}
          alt={step.title}
          ratio="4/3"
          className="rounded-2xl"
        />
      </div>
      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-5xl text-gold leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
              Step
            </div>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl leading-tight">
              {step.title}
            </h3>
          </div>
        </div>
        <p className="mt-5 text-ink-600 text-pretty">{step.description}</p>
        {!step.verified && (
          <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink-400">
            Placeholder description
          </p>
        )}
      </div>
    </motion.div>
  );
}