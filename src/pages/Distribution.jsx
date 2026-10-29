import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Store, Warehouse, Handshake, Users } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ImageReveal from '../components/primitives/ImageReveal.jsx';
import DistributorForm from '../components/forms/DistributorForm.jsx';
import { fadeUp, stagger } from '../lib/motion.js';

const audiences = [
  {
    icon: Store,
    title: 'Retail',
    description: 'Placeholder — how retailers stock and sell Niger Biscuit products.',
    id: 'retail',
  },
  {
    icon: Warehouse,
    title: 'Wholesale',
    description: 'Placeholder — volume and distribution arrangements for wholesalers.',
    id: 'wholesale',
  },
  {
    icon: Users,
    title: 'Distributors',
    description: 'Placeholder — distribution partnerships and coverage expectations.',
    id: 'distributors',
  },
  {
    icon: Handshake,
    title: 'Business partnerships',
    description: 'Placeholder — strategic partnerships and other B2B conversations.',
    id: 'partnerships',
  },
];

export default function Distribution() {
  useSEO({
    title: 'Distribution — Niger Biscuit',
    description:
      'Bring Niger Biscuit closer to your customers. Distribution, wholesale and partnership opportunities.',
    canonical: '/distribution',
  });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16">
          <motion.div
            variants={stagger(0, 0.09)}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}><Eyebrow>Distribution & Business</Eyebrow></motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-display-lg text-balance"
            >
              Bring Niger Biscuit
              <br />
              <span className="italic text-gold">closer to your customers.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-ink-600 max-w-2xl text-pretty">
              Placeholder introduction — describe distribution reach, partnerships
              and how to engage with the business. Replace with verified detail.
            </motion.p>
          </motion.div>
        </div>

        <div className="container-x mt-12">
          <ImageReveal
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=2000&q=80&auto=format&fit=crop"
            alt="Distribution vehicle"
            ratio="21/9"
            className="rounded-3xl"
            loading="eager"
          />
        </div>
      </section>

      {/* NETWORK */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>Our distribution network</Eyebrow>
          <h2 className="mt-4 font-display text-display-md text-balance">
            Built to reach the shelf.
          </h2>
          <p className="mt-4 text-ink-600 text-pretty">
            Placeholder — describe how product moves from factory to trade,
            including distribution channels and coverage. Replace with verified detail.
          </p>
        </div>

        <motion.div
          variants={stagger(0, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {audiences.map(({ icon: Icon, title, description, id }) => (
            <motion.div
              key={id}
              id={id}
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

      {/* FORM */}
      <section id="enquiry" className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              variants={stagger(0, 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeUp}><Eyebrow>Become a distributor</Eyebrow></motion.div>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
                Start the conversation.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-ink-600 text-pretty">
                Placeholder introduction — explain what you’re looking for from
                distribution partners and what happens next after an enquiry.
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-8 space-y-3 text-sm text-ink-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                  Submit your details below.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                  Our team reviews your coverage and business type.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                  A team member will be in touch.
                </li>
              </motion.ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="card p-6 sm:p-8">
                <DistributorForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT LINK */}
      <section className="container-x py-16">
        <p className="text-center text-ink-600">
          Prefer to talk directly?{' '}
          <Link to="/contact" className="link-underline">
            Contact our team →
          </Link>
        </p>
      </section>
    </>
  );
}