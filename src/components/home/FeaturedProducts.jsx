import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../../data/products.js';
import { fadeUp, stagger } from '../../lib/motion.js';
import Eyebrow from '../primitives/Eyebrow.jsx';
import ProductCard from '../product/ProductCard.jsx';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);
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
          <motion.div variants={fadeUp}><Eyebrow>Favourites</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 font-display text-display-md text-balance">
            Find your favourite.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-ink-600 max-w-xl text-pretty">
            Explore biscuits, cookies, crackers, snacks and more from the Niger Biscuit family of brands.
          </motion.p>
        </div>
        <motion.div variants={fadeUp}>
          <Link to="/products" className="btn-secondary group">
            <span>View all products</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {featured.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}