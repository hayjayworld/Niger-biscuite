import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import { getBrandBySlug, brands } from '../data/brands.js';
import { products, productHasBrand } from '../data/products.js';
import EmptyState from '../components/feedback/EmptyState.jsx';
import ProductCard from '../components/product/ProductCard.jsx';
import { fadeUp, stagger } from '../lib/motion.js';
import Eyebrow from '../components/primitives/Eyebrow.jsx';

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = getBrandBySlug(slug);

  useSEO({
    title: brand ? `${brand.name} — Niger Biscuit` : 'Brand not found — Niger Biscuit',
    description: brand?.shortDescription,
    canonical: `/brands/${slug}`,
  });

  if (!brand) {
    return (
      <div className="container-x py-24">
        <EmptyState
          title="Brand not found."
          description="The brand you're looking for isn't available."
          actionTo="/brands"
          actionLabel="Browse all brands"
        />
      </div>
    );
  }

  const brandProducts = products.filter((product) => productHasBrand(product, brand.slug));
  const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: brand.surface }}>
        <div className="container-x pt-10 md:pt-16 pb-16 md:pb-24">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink transition"
          >
            <ArrowLeft size={15} /> All brands
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={stagger(0, 0.08)}
              initial="hidden"
              animate="show"
              className="lg:col-span-6"
            >
              <motion.div variants={fadeUp}>
                <Eyebrow style={{ color: brand.accentColor }}>Brand</Eyebrow>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-5 font-display text-display-lg text-balance"
              >
                {brand.name}
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-4 text-xl text-ink-600 font-display italic">
                {brand.tagline}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-6 text-ink-700 max-w-xl text-pretty">
                {brand.longDescription}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
                {brand.categories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-ink/15 text-xs uppercase tracking-[0.16em] text-ink-700"
                  >
                    {c}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative mx-auto aspect-[4/5] w-full max-w-[560px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={brand.heroImage}
                  alt={`${brand.name} product range`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>
              <div
                className="absolute -left-4 top-10 flex aspect-square w-28 items-center justify-center overflow-hidden rounded-full bg-cream-50 p-4 shadow-lift ring-8 ring-cream-50 sm:-left-8 sm:w-36"
                aria-label={`${brand.name} logo`}
              >
                {brand.logo ? (
                  <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="font-display text-center text-sm text-ink sm:text-base">{brand.name}</span>
                )}
              </div>
              <div className="absolute -right-3 bottom-8 w-[200px] rounded-2xl bg-cream-50 p-4 shadow-lift sm:-right-6 sm:bottom-14 sm:w-[230px] sm:p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ink-500">Brand range</div>
                <div className="mt-1.5 font-display text-lg leading-tight">{brand.name}</div>
                <div className="mt-1 text-xs text-ink-600">{brand.categories.slice(0, 2).join(' · ')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Eyebrow>Products in this brand</Eyebrow>
            <h2 className="mt-4 font-display text-display-md">
              {brandProducts.length > 0 ? `${brandProducts.length} product${brandProducts.length > 1 ? 's' : ''}` : 'No products listed yet'}
            </h2>
          </div>
          <Link to="/products" className="link-underline text-[15px]">
            All products →
          </Link>
        </div>

        {brandProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {brandProducts.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState
              title="Products coming soon."
              description="Product listings for this brand are being updated."
              actionTo="/products"
              actionLabel="Browse all products"
            />
          </div>
        )}
      </section>

      {/* RELATED BRANDS */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>More brands</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm">Explore the portfolio.</h2>
            </div>
            <Link to="/brands" className="link-underline text-[15px]">
              All brands →
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {otherBrands.map((b, i) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[16/9]"
                style={{ backgroundColor: b.surface }}
              >
                <img
                  src={b.heroImage}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream-50">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm">
                    Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}