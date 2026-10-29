import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { brands } from '../../data/brands.js';
import { fadeUp, stagger } from '../../lib/motion.js';
import Eyebrow from '../primitives/Eyebrow.jsx';

export default function BrandShowcase() {
  return (
    <section className="bg-cream-100 border-y border-ink/10">
      <div className="container-x py-20 md:py-28">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.div variants={fadeUp}><Eyebrow>Our Brands</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-5 font-display text-display-md text-balance">
              Discover our brands.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/brands" className="link-underline text-[15px]">
              All brands →
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {brands.map((b, i) => (
            <motion.div
              key={b.slug}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Link
                to={`/brands/${b.slug}`}
                className="group block relative overflow-hidden rounded-2xl"
                style={{ backgroundColor: b.surface }}
              >
                <div className="relative aspect-[5/4] sm:aspect-[16/10]">
                  <img
                    src={b.heroImage}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-cream-50">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: b.accentColor }}
                    />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-cream-50/80">
                      Brand
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">
                    {b.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-cream-50/85 text-pretty">
                    {b.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    Explore Brand
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}