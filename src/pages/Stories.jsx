import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../lib/seo.js';
import PageHeader from '../components/PageHeader.jsx';
import { stories, storyCategories } from '../data/stories.js';
import { EASE } from '../lib/motion.js';

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return d; }
}

export default function Stories() {
  useSEO({
    title: 'Stories & News — Niger Biscuit',
    description: 'Editorial and news from Niger Biscuit Company Limited.',
    canonical: '/stories',
  });

  const [cat, setCat] = useState('All');
  const filtered = useMemo(
    () => (cat === 'All' ? stories : stories.filter((s) => s.category === cat)),
    [cat]
  );

  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHeader
        eyebrow="Stories"
        title="Stories from Niger Biscuit."
        description="Editorial, heritage, manufacturing, people and news — placeholders until verified."
      />

      <section className="container-x pb-24">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {storyCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3.5 py-2 rounded-full text-[13px] border transition-colors ${
                cat === c
                  ? 'bg-ink text-cream-50 border-ink'
                  : 'border-ink/15 text-ink-700 hover:border-ink/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-ink/20 p-10 text-center text-ink-500"
            >
              No stories in this category yet.
            </motion.div>
          ) : (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {/* Featured */}
              {featured && (
                <Link
                  to={`/stories/${featured.slug}`}
                  className="group block mb-14"
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
                      <img
                        src={featured.image}
                        alt=""
                        loading="eager"
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 text-xs text-ink-500">
                        <span className="uppercase tracking-[0.18em]">{featured.category}</span>
                        <span className="h-1 w-1 rounded-full bg-ink/30" />
                        <span>{formatDate(featured.date)}</span>
                        <span className="h-1 w-1 rounded-full bg-ink/30" />
                        <span>{featured.readingTime}</span>
                      </div>
                      <h2 className="mt-3 font-display text-display-sm leading-tight text-balance group-hover:text-gold transition-colors">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-ink-600 text-pretty">{featured.excerpt}</p>
                      <span className="mt-6 link-underline inline-flex">Read story →</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((s, i) => (
                    <motion.article
                      key={s.slug}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 + i * 0.04 }}
                    >
                      <Link to={`/stories/${s.slug}`} className="group block">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                          <img
                            src={s.image}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="mt-5 flex items-center gap-3 text-xs text-ink-500">
                          <span className="uppercase tracking-[0.18em]">{s.category}</span>
                          <span className="h-1 w-1 rounded-full bg-ink/30" />
                          <span>{formatDate(s.date)}</span>
                        </div>
                        <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-gold transition-colors">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-ink-600 line-clamp-2">{s.excerpt}</p>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}