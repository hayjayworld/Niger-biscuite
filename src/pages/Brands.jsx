import { motion } from 'framer-motion';
import { useSEO } from '../lib/seo.js';
import { brands } from '../data/brands.js';
import PageHeader from '../components/PageHeader.jsx';
import BrandCard from '../components/brand/BrandCard.jsx';
import { fadeUp, stagger } from '../lib/motion.js';

export default function Brands() {
  useSEO({
    title: 'Our Brands — Niger Biscuit',
    description: 'Discover the brands of Niger Biscuit Company Limited.',
    canonical: '/brands',
  });

  return (
    <>
      <PageHeader
        eyebrow="Our Brands"
        title="Brands built for Nigerian households."
        description="Placeholder introduction — replace with verified brand narrative describing the portfolio."
      />

      <section className="container-x pb-24">
        <motion.div
          variants={stagger(0, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {brands.map((b, i) => (
            <BrandCard key={b.slug} brand={b} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-ink/10 bg-cream-100 p-8 sm:p-12 grain"
        >
          <p className="eyebrow">Note</p>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl text-balance">
            Brand portfolio is being finalised.
          </h3>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Brand names, descriptions and product ranges on this page are structured
            placeholders. They will be replaced with verified brand information
            before launch.
          </p>
        </motion.div>
      </section>
    </>
  );
}