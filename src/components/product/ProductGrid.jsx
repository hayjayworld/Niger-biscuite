import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard.jsx';
import { EASE } from '../../lib/motion.js';

export default function ProductGrid({ products, layoutKey }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
    >
      <AnimatePresence mode="popLayout">
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, delay: i * 0.02, ease: EASE }}
          >
            <ProductCard product={p} index={0} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}