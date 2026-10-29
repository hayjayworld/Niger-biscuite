import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSEO } from '../lib/seo.js';
import { useReducedMotion } from '../lib/useReducedMotion.js';
import { fadeUp, stagger, EASE } from '../lib/motion.js';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ImageReveal from '../components/primitives/ImageReveal.jsx';
import ProcessStep from '../components/manufacturing/ProcessStep.jsx';
import { processSteps } from '../data/manufacturing.js';
import { Link } from 'react-router-dom';

export default function Manufacturing() {
  useSEO({
    title: 'Manufacturing — Niger Biscuit',
    description:
      'From ingredients to every bite — a look at the manufacturing process at Niger Biscuit.',
    canonical: '/manufacturing',
  });

  const reduced = useReducedMotion();
  const insideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: insideRef,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16 pb-10">
          <motion.div
            variants={stagger(0, 0.09)}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}><Eyebrow>Manufacturing</Eyebrow></motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-display-xl text-balance"
            >
              From ingredients
              <br />
              <span className="italic text-gold">to every bite.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-ink-600 max-w-2xl text-pretty">
              Placeholder introduction — describe the production approach, quality
              mindset and modern facility capability. Replace with verified detail.
            </motion.p>
          </motion.div>
        </div>

        <div className="container-x mt-6 md:mt-10">
          <ImageReveal
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&q=80&auto=format&fit=crop"
            alt="Production line"
            ratio="21/9"
            className="rounded-3xl"
            loading="eager"
          />
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="container-x py-20 md:py-28">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}><Eyebrow>The Journey</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
            Eight stages. One standard.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-600 text-pretty">
            Placeholder — describe the process stages in outline. Each stage will
            be replaced with verified process imagery and copy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.05, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 md:mt-24 space-y-16 md:space-y-28"
        >
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </motion.div>
      </section>

      {/* INSIDE NIGER BISCUIT — parallax strip */}
      <section ref={insideRef} className="bg-ink text-cream-50 overflow-hidden grain">
        <div className="container-x py-20 md:py-28">
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <motion.div variants={fadeUp}><Eyebrow className="text-cream-50/60">Inside Niger Biscuit</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-cream-50 text-balance">
              The factory floor, up close.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-cream-50/75 text-lg text-pretty">
              Placeholder description — set the scene inside the facility: people,
              machinery, and production at scale.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.div style={{ y: y1 }} className="col-span-7 md:col-span-5 rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1565960938037-2d0c8b1b4d6a?w=1200&q=80&auto=format&fit=crop"
                alt="Worker inspecting product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="col-span-5 md:col-span-4 rounded-2xl overflow-hidden aspect-square self-center">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop"
                alt="Machinery close-up"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div style={{ y: y3 }} className="col-span-12 md:col-span-3 rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80&auto=format&fit=crop"
                alt="Packaging line"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — QUALITY + DISTRIBUTION */}
      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border border-ink/10 bg-cream-100 p-8 sm:p-12 grain"
          >
            <Eyebrow>Quality</Eyebrow>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl text-balance">
              Quality you can trust.
            </h3>
            <p className="mt-3 text-ink-600 text-pretty">
              How quality is approached across the process.
            </p>
            <Link to="/quality" className="mt-6 link-underline inline-flex">
              Explore quality →
            </Link>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border border-ink/10 bg-gold-100 p-8 sm:p-12 grain"
          >
            <Eyebrow>Distribution</Eyebrow>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl text-balance">
              From the factory, across Nigeria.
            </h3>
            <p className="mt-3 text-ink-700 text-pretty">
              Distribution and partnership opportunities.
            </p>
            <Link to="/distribution" className="mt-6 link-underline inline-flex">
              Distribution →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}