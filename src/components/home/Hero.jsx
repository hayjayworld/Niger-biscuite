import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EASE, fadeUp, stagger } from '../../lib/motion.js';
import { useReducedMotion } from '../../lib/useReducedMotion.js';

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const layer1x = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const layer1y = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const layer2x = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const layer2y = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const layer3x = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const layer3y = useTransform(sy, [-0.5, 0.5], [-4, 4]);

  const handleMove = (e) => {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="relative overflow-hidden grain"
    >
      {/* Soft background wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cream-200/70 blur-3xl" />
      </div>

      <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* LEFT — copy */}
          <motion.div
            variants={stagger(0.05, 0.09)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1"
          >
            <motion.p variants={fadeUp} className="eyebrow">
              <span className="inline-block h-px w-6 bg-current align-middle mr-3 opacity-60" />
              Niger Biscuit
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-display-xl text-balance"
            >
              Made for
              <br />
              <span className="italic text-gold">generations.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 text-lg text-ink-600 max-w-md text-pretty"
            >
              A Nigerian story built across generations — biscuits, cookies,
              crackers and snacks made with care and made to be shared.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/products" className="btn-primary group">
                <span>Explore Our Products</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/story" className="link-underline text-[15px] px-2 py-2">
                Our Story →
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-6 text-xs text-ink-500"
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl text-ink">[Year]</span>
                <span>Heritage</span>
              </div>
              <div className="h-8 w-px bg-ink/15" />
              <div className="flex flex-col">
                <span className="font-display text-2xl text-ink">Multiple</span>
                <span>Brands</span>
              </div>
              <div className="h-8 w-px bg-ink/15" />
              <div className="flex flex-col">
                <span className="font-display text-2xl text-ink">Nigeria</span>
                <span>Manufacturing</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — layered visual */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.15 }}
              className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] max-w-[560px] mx-auto"
            >
              {/* Base card / hero product */}
              <motion.div
                style={{ x: layer1x, y: layer1y }}
                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-lift"
              >
                <img
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop"
                  alt="A product composition of biscuits"
                  className="h-full w-full object-cover"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating product disc — top-left */}
              <motion.div
                style={{ x: layer2x, y: layer2y }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
                className="absolute -left-4 sm:-left-8 top-10 w-28 sm:w-36 aspect-square rounded-full overflow-hidden ring-8 ring-cream-50 shadow-lift"
              >
                <img
                  src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&q=80&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Floating caption card — bottom-right */}
              <motion.div
                style={{ x: layer3x, y: layer3y }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
                className="absolute -right-3 sm:-right-6 bottom-8 sm:bottom-14 bg-cream-50 rounded-2xl shadow-lift p-4 sm:p-5 w-[200px] sm:w-[230px]"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  Featured
                </div>
                <div className="mt-1.5 font-display text-lg leading-tight">
                  Oxford Sandwich
                </div>
                <div className="mt-1 text-xs text-ink-600">
                  A familiar name. Placeholder.
                </div>
                <Link to="/brands/oxford" className="mt-3 inline-flex items-center gap-1 text-xs text-ink link-underline">
                  Explore brand →
                </Link>
              </motion.div>

              {/* Small dot accent */}
              <div className="absolute -top-4 right-8 h-3 w-3 rounded-full bg-gold" aria-hidden />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}