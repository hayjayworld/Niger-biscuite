import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Eyebrow from '../primitives/Eyebrow.jsx';
import ImageReveal from '../primitives/ImageReveal.jsx';
import { fadeUp, stagger } from '../../lib/motion.js';

export default function ManufacturingTeaser() {
  return (
    <section className="bg-ink text-cream-50 grain">
      <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="text-cream-50/60">Manufacturing</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 font-display text-display-md text-cream-50 text-balance">
            From ingredients to every bite.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-cream-50/75 text-lg max-w-md text-pretty">
            Placeholder manufacturing summary — describe the company's production
            approach, quality mindset and modern facility capability.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Link to="/manufacturing" className="btn-gold group">
              <span>Inside our factory</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-12 gap-3">
          <div className="col-span-8">
            <ImageReveal
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop"
              alt="Production line"
              ratio="4/3"
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-4 flex flex-col gap-3">
            <ImageReveal
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop"
              alt="Worker inspecting"
              ratio="4/3"
              className="rounded-2xl"
            />
            <ImageReveal
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80&auto=format&fit=crop"
              alt="Packaging"
              ratio="4/3"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}