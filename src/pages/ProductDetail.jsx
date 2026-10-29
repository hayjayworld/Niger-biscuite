import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Store, Building2 } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import ProductGallery from '../components/product/ProductGallery.jsx';
import ProductTabs from '../components/product/ProductTabs.jsx';
import ProductCard from '../components/product/ProductCard.jsx';
import EmptyState from '../components/feedback/EmptyState.jsx';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ImageReveal from '../components/primitives/ImageReveal.jsx';
import { fadeUp, stagger, EASE } from '../lib/motion.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [variant, setVariant] = useState(0);

  useSEO({
    title: product ? `${product.name} — ${product.brand} | Niger Biscuit` : 'Product not found',
    description: product?.description,
    canonical: `/products/${slug}`,
  });

  if (!product) {
    return (
      <div className="container-x py-24">
        <EmptyState
          title="Product not found."
          description="The product you're looking for doesn't exist or has been removed."
          actionTo="/products"
          actionLabel="Browse all products"
        />
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);
  const specs = product.specifications;

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-x pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink transition"
        >
          <ArrowLeft size={15} /> Back to products
        </Link>
      </div>

      {/* MAIN */}
      <section className="container-x pt-8 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} alt={product.name} />
          </div>

          {/* Info */}
          <motion.div
            variants={stagger(0, 0.06)}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div variants={fadeUp}>
              <Link
                to={`/brands/${product.brandSlug}`}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-ink transition"
              >
                <span className="h-1 w-1 rounded-full bg-gold" />
                {product.brand}
              </Link>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-3 font-display text-display-sm text-balance">
              {product.name}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-ink-600 text-pretty">
              {product.description}
            </motion.p>

            {/* Specs */}
            <motion.dl
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm border-t border-ink/10 pt-6"
            >
              {[
                ['Category', specs.category],
                ['Type', specs.type],
                ['Flavour', specs.flavour],
                ['Pack Size', specs.packSize],
                ['Manufacturer', specs.manufacturer],
                ['Origin', specs.countryOfOrigin],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">{label}</dt>
                  <dd className="mt-1 text-ink-800">{value}</dd>
                </div>
              ))}
            </motion.dl>

            {/* Variants */}
            {product.variants?.length > 0 && (
              <motion.div variants={fadeUp} className="mt-8">
                <p className="eyebrow">Available options</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.value}
                      onClick={() => setVariant(i)}
                      className={`h-11 px-5 rounded-full border text-sm transition-colors ${
                        i === variant
                          ? 'border-ink bg-ink text-cream-50'
                          : 'border-ink/20 hover:border-ink/60 text-ink'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-ink-500">
                  Pack sizes are placeholders — confirm with brand team.
                </p>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/distribution"
                className="btn-primary flex-1 justify-center"
              >
                <Store size={16} />
                Find Where to Buy
              </Link>
              <Link
                to="/contact"
                className="btn-secondary flex-1 justify-center"
              >
                <Building2 size={16} />
                Distributor Enquiry
              </Link>
            </motion.div>

            {/* Tabs */}
            <motion.div variants={fadeUp} className="mt-10">
              <ProductTabs product={product} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT STORY */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ImageReveal
              src={product.images[1] || product.images[0]}
              alt={`${product.name} lifestyle`}
              ratio="4/3"
              className="rounded-2xl"
            />
          </div>
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp}><Eyebrow>More than a pack</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
              More than a pack.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-ink-600 text-lg text-pretty">
              A placeholder story about the product — its character, its place
              in everyday life, and why people come back to it. Replace with verified
              brand narrative.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex gap-6 text-sm">
              <Link to={`/brands/${product.brandSlug}`} className="link-underline">
                Explore {product.brand} →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>You may also like</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm">More from Niger Biscuit.</h2>
            </div>
            <Link to="/products" className="link-underline text-[15px]">
              All products →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}