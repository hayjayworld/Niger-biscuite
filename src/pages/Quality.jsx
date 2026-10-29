import { motion } from 'framer-motion';
import { ShieldCheck, Sprout, FlaskConical, Factory, Package, Truck } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import PageHeader from '../components/PageHeader.jsx';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import { fadeUp, stagger } from '../lib/motion.js';

const pillars = [
  {
    icon: Sprout,
    title: 'Ingredients',
    description:
      'Placeholder description — how ingredients are sourced, received and checked. Replace with verified process.',
  },
  {
    icon: Factory,
    title: 'Production',
    description:
      'Placeholder description — controls applied during production. Replace with verified detail.',
  },
  {
    icon: ShieldCheck,
    title: 'Food Safety',
    description:
      'Placeholder description — food safety approach and standards. Replace with verified detail.',
  },
  {
    icon: FlaskConical,
    title: 'Quality Control',
    description:
      'Placeholder description — inspection and testing at critical stages. Replace with verified detail.',
  },
  {
    icon: Package,
    title: 'Packaging',
    description:
      'Placeholder description — packaging and protection of finished product. Replace with verified detail.',
  },
  {
    icon: Truck,
    title: 'Distribution',
    description:
      'Placeholder description — how product is kept in good condition across distribution. Replace with verified detail.',
  },
];

export default function Quality() {
  useSEO({
    title: 'Quality — Niger Biscuit',
    description:
      'How Niger Biscuit approaches quality across ingredients, production, food safety and distribution.',
    canonical: '/quality',
  });

  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="Quality you can trust."
        description="Placeholder introduction — describe the company’s approach to quality and food safety. Replace with verified detail."
      />

      <section className="container-x pb-20 md:pb-28">
        <motion.div
          variants={stagger(0, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card p-7 hover:border-ink/25 transition-colors"
            >
              <div className="h-11 w-11 rounded-full bg-ink text-cream-50 inline-flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-ink-600 text-sm text-pretty">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-28">
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}><Eyebrow>Standards</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
              Certifications & standards.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-ink-600 text-pretty">
              Certification badges will be published here once verified. This
              section is structured for real certificates only — no invented claims.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl border border-dashed border-ink/20 flex flex-col items-center justify-center gap-2 text-ink-400"
              >
                <ShieldCheck size={26} />
                <span className="text-[10px] uppercase tracking-[0.18em]">Certificate</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}