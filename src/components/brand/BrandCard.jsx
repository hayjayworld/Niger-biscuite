import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion.js';

export default function BrandCard({ brand, index = 0, layout = 'large' }) {
  const isLarge = layout === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
    >
      <Link
        to={`/brands/${brand.slug}`}
        className={`group relative block overflow-hidden rounded-2xl ${
          isLarge ? 'aspect-[5/4]' : 'aspect-[4/3]'
        }`}
        style={{ backgroundColor: brand.surface }}
      >
        <img
          src={brand.heroImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out-expo group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-cream-50">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: brand.accentColor }}
              aria-hidden
            />
            <span className="text-[11px] uppercase tracking-[0.22em] text-cream-50/80">
              {brand.categories.join(' · ')}
            </span>
          </div>
          <h3
            className={`mt-3 font-display leading-tight ${
              isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
            }`}
          >
            {brand.name}
          </h3>
          <p className="mt-2 text-sm text-cream-50/85 max-w-md text-pretty">
            {brand.tagline}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
            Explore Brand
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}