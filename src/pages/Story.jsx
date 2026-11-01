import { motion } from 'framer-motion';
import { useSEO } from '../lib/seo.js';
import { fadeUp, stagger } from '../lib/motion.js';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ImageReveal from '../components/primitives/ImageReveal.jsx';
import Timeline from '../components/story/Timeline.jsx';
import { company } from '../data/company.js';

export default function Story() {
  useSEO({
    title: 'Our Story — Niger Biscuit',
    description:
      'A Nigerian story built across generations. Explore the heritage of Niger Biscuit Company Limited.',
    canonical: '/story',
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16">
          <motion.div
            variants={stagger(0.05, 0.09)}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}><Eyebrow>Our Story</Eyebrow></motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-display-xl text-balance"
            >
              A story built
              <br />
              <span className="italic text-gold">over generations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-ink-600 max-w-2xl text-pretty">
              Placeholder introduction — describe the company’s origins, its people,
              and its place in Nigerian households. This section should be replaced
              with verified historical narrative.
            </motion.p>
          </motion.div>
        </div>

        <div className="container-x mt-14 md:mt-20">
          <ImageReveal
            src="https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793525757/oxford-cabin.webp"
            alt="Archival-inspired composition of biscuits"
            ratio="21/9"
            className="rounded-3xl"
            loading="eager"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp}><Eyebrow>Since [Year]</Eyebrow></motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-display-md text-balance"
            >
              A Nigerian institution, in biscuits.
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-ink-600 text-lg text-pretty"
          >
            <motion.p variants={fadeUp}>
              Placeholder paragraph — describe the founding moment, the
              decision to build a biscuit factory in Nigeria, and the people
              behind the early years.
            </motion.p>
            <motion.p variants={fadeUp}>
              Placeholder paragraph — describe how the company grew across
              decades, its relationship with Nigerian consumers, and the
              brands associated with it.
            </motion.p>
            <motion.p variants={fadeUp}>
              Placeholder paragraph — set out the company’s modern era,
              investment in manufacturing and distribution, and its place
              today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {company.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-ink">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x py-20 md:py-28">
        <motion.div
          variants={stagger(0, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}><Eyebrow>Milestones</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
            A history in motion.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-600 text-pretty">
            Milestone dates and descriptions below are placeholders and must be
            verified with Niger Biscuit before publishing.
          </motion.p>
        </motion.div>

        <div className="mt-16">
          <Timeline />
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-ink text-cream-50 grain">
        <div className="container-x py-20 md:py-28">
          <motion.blockquote
            variants={stagger(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="eyebrow text-cream-50/60">
              Editorial Quote
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-display text-display-sm leading-tight text-cream-50 text-balance"
            >
              “Placeholder editorial quote — a line that captures the company’s
              relationship with Nigerian households.”
            </motion.p>
            <motion.cite variants={fadeUp} className="mt-6 block text-sm text-cream-50/60 not-italic">
              — [Name], [Role]
            </motion.cite>
          </motion.blockquote>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="container-x py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 font-display text-display-md text-balance">
            The people guiding the company.
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Leadership profiles will be published once verified. Structure below
            is ready for real names, roles and portraits.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="aspect-square bg-cream-200 flex items-center justify-center text-ink-400 text-sm">
                Portrait
              </div>
              <div className="p-5">
                <div className="font-display text-lg">[Name]</div>
                <div className="text-sm text-ink-500 mt-1">[Role]</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}