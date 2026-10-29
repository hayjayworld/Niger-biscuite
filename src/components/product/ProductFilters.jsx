import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../../data/products.js';
import { brands } from '../../data/brands.js';
import { EASE } from '../../lib/motion.js';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'name-asc', label: 'Name A → Z' },
  { value: 'name-desc', label: 'Name Z → A' },
  { value: 'brand', label: 'By Brand' },
];

export default function ProductFilters({
  query,
  onQuery,
  category,
  onCategory,
  brand,
  onBrand,
  sort,
  onSort,
  resultCount,
}) {
  const [openMobile, setOpenMobile] = useState(false);

  const activeCount =
    (category && category !== 'All' ? 1 : 0) +
    (brand && brand !== 'All' ? 1 : 0) +
    (query ? 1 : 0);

  const clearAll = () => {
    onQuery('');
    onCategory('All');
    onBrand('All');
    onSort('featured');
  };

  return (
    <div className="sticky top-16 z-30 -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 py-4 bg-cream-50/85 backdrop-blur-md border-y border-ink/10">
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search products, brands, categories…"
            aria-label="Search products"
            className="w-full h-11 pl-10 pr-4 rounded-full border border-ink/15 bg-cream-50 text-sm focus:border-ink/40 focus:outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => onQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full inline-flex items-center justify-center hover:bg-ink/5"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Desktop sort */}
        <div className="hidden md:flex items-center gap-2">
          <label htmlFor="sort" className="text-xs uppercase tracking-[0.16em] text-ink-500">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="h-11 rounded-full border border-ink/15 bg-cream-50 px-4 text-sm focus:border-ink/40 focus:outline-none"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setOpenMobile(true)}
          className="md:hidden inline-flex items-center gap-2 h-11 px-4 rounded-full border border-ink/15 text-sm"
          aria-label="Open filters"
        >
          <SlidersHorizontal size={15} />
          Filters
          {activeCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center h-5 min-w-5 px-1 rounded-full bg-ink text-cream-50 text-[10px]">
              {activeCount}
            </span>
          )}
        </button>

        {/* Desktop category pills */}
        <div className="hidden lg:flex items-center gap-1 ml-auto overflow-x-auto no-scrollbar">
          {categories.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className={`shrink-0 px-3.5 py-2 rounded-full text-[13px] transition-colors ${
                  active
                    ? 'bg-ink text-cream-50'
                    : 'text-ink-600 hover:bg-ink/5'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result line */}
      <div className="mt-3 flex items-center justify-between text-xs text-ink-500">
        <span>
          {resultCount} {resultCount === 1 ? 'product' : 'products'}
          {activeCount > 0 && ' matched'}
        </span>
        {activeCount > 0 && (
          <button onClick={clearAll} className="hover:text-ink transition">
            Clear filters
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="fixed inset-0 z-[70] md:hidden bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpenMobile(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-cream-50 rounded-t-3xl p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">Filters</h3>
                <button
                  onClick={() => setOpenMobile(false)}
                  className="h-10 w-10 rounded-full border border-ink/15 inline-flex items-center justify-center"
                  aria-label="Close filters"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="eyebrow">Category</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => onCategory(c)}
                        className={`px-3.5 py-2 rounded-full text-[13px] border transition-colors ${
                          category === c
                            ? 'bg-ink text-cream-50 border-ink'
                            : 'border-ink/15 text-ink-700'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow">Brand</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => onBrand('All')}
                      className={`px-3.5 py-2 rounded-full text-[13px] border transition-colors ${
                        brand === 'All'
                          ? 'bg-ink text-cream-50 border-ink'
                          : 'border-ink/15 text-ink-700'
                      }`}
                    >
                      All
                    </button>
                    {brands.map((b) => (
                      <button
                        key={b.slug}
                        onClick={() => onBrand(b.slug)}
                        className={`px-3.5 py-2 rounded-full text-[13px] border transition-colors ${
                          brand === b.slug
                            ? 'bg-ink text-cream-50 border-ink'
                            : 'border-ink/15 text-ink-700'
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow">Sort</p>
                  <select
                    value={sort}
                    onChange={(e) => onSort(e.target.value)}
                    className="mt-3 w-full h-11 rounded-full border border-ink/15 bg-cream-50 px-4 text-sm"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={clearAll}
                  className="btn-secondary flex-1 justify-center"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setOpenMobile(false)}
                  className="btn-primary flex-1 justify-center"
                >
                  Show {resultCount}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}