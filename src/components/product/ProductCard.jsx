import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion.js';
import { getProductBrandNames } from '../../data/products.js';

export default function ProductCard({ product, index = 0 }) {
  const brandNames = getProductBrandNames(product);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="group relative flex flex-col h-full rounded-2xl bg-cream-100 border border-ink/10 overflow-hidden transition-colors duration-500 hover:bg-cream-200/60 hover:border-ink/20"
      >
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-cream-200">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="max-h-full max-w-full object-contain"
          />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-50/90 backdrop-blur text-[10px] uppercase tracking-[0.16em] text-ink-700">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {brandNames.join(' · ')}
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-5 flex flex-col">
          <div className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
            {product.category}
          </div>
          <h3 className="mt-1.5 font-display text-lg sm:text-xl leading-tight text-ink">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-ink-600 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[13px] text-ink-600">View Product</span>
            <span className="h-8 w-8 rounded-full border border-ink/15 inline-flex items-center justify-center transition-all duration-300 group-hover:bg-ink group-hover:text-cream-50 group-hover:border-ink">
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}