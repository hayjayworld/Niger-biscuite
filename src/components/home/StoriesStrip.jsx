import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { stories } from '../../data/stories.js';
import Eyebrow from '../primitives/Eyebrow.jsx';
import { fadeUp, stagger } from '../../lib/motion.js';

export default function StoriesStrip() {
  const items = stories.slice(0, 3);
  return (
    <section className="container-x py-20 md:py-28">
      <motion.div
        variants={stagger(0, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <motion.div variants={fadeUp}><Eyebrow>Editorial</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 font-display text-display-md text-balance">
            Stories from Niger Biscuit.
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <Link to="/stories" className="link-underline text-[15px]">
            All stories →
          </Link>
        </motion.div>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <motion.article
            key={s.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Link to={`/stories/${s.slug}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs text-ink-500">
                <span className="uppercase tracking-[0.18em]">{s.category}</span>
                <span className="h-1 w-1 rounded-full bg-ink/30" />
                <span>{s.readingTime}</span>
              </div>
              <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 line-clamp-2">{s.excerpt}</p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}