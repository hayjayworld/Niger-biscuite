import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import { products, getProductBrandNames, productHasBrand } from '../data/products.js';
import PageHeader from '../components/PageHeader.jsx';
import ProductFilters from '../components/product/ProductFilters.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import EmptyState from '../components/feedback/EmptyState.jsx';

export default function Products() {
  useSEO({
    title: 'Products — Niger Biscuit',
    description:
      'Explore biscuits, cookies, crackers, snacks, cereal bars and more from Niger Biscuit.',
    canonical: '/products',
  });

  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(params.get('category') || 'All');
  const [brand, setBrand] = useState(params.get('brand') || 'All');
  const [sort, setSort] = useState('featured');

  // Sync category to URL
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category !== 'All') next.set('category', category);
    else next.delete('category');
    if (brand !== 'All') next.set('brand', brand);
    else next.delete('brand');
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, brand]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'All') list = list.filter((p) => p.category === category);
    if (brand !== 'All') list = list.filter((product) => productHasBrand(product, brand));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          getProductBrandNames(p).some((name) => name.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'name-asc':  list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'name-desc': list.sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'brand':     list.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name)); break;
      default: break;
    }
    return list;
  }, [query, category, brand, sort]);

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Find your favourite."
        description="Explore biscuits, cookies, crackers, snacks and more from the Niger Biscuit family of brands."
      />

      <section className="container-x pb-24">
        <ProductFilters
          query={query}
          onQuery={setQuery}
          category={category}
          onCategory={setCategory}
          brand={brand}
          onBrand={setBrand}
          sort={sort}
          onSort={setSort}
          resultCount={filtered.length}
        />

        <div className="mt-8">
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} layoutKey={`${category}-${brand}-${sort}-${query}`} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <EmptyState
                icon={<PackageOpen size={32} />}
                title="We couldn't find what you're looking for."
                description="Try a different search term or clear your filters."
                actionTo="/products"
                actionLabel="Browse all products"
              />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}