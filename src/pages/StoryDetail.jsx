import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import { getStoryBySlug, stories } from '../data/stories.js';
import EmptyState from '../components/feedback/EmptyState.jsx';
import { fadeUp, stagger } from '../lib/motion.js';

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch { return d; }
}

export default function StoryDetail() {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);

  useSEO({
    title: story ? `${story.title} — Niger Biscuit` : 'Story not found',
    description: story?.excerpt,
    canonical: `/stories/${slug}`,
    ogImage: story?.image,
  });

  if (!story) {
    return (
      <div className="container-x py-24">
        <EmptyState
          title="Story not found."
          description="The story you’re looking for isn’t available."
          actionTo="/stories"
          actionLabel="Browse all stories"
        />
      </div>
    );
  }

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      <div className="container-x pt-8">
        <Link to="/stories" className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink transition">
          <ArrowLeft size={15} /> All stories
        </Link>
      </div>

      <motion.article
        variants={stagger(0, 0.08)}
        initial="hidden"
        animate="show"
        className="container-x pt-8 pb-24 max-w-3xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 text-xs text-ink-500">
          <span className="uppercase tracking-[0.18em]">{story.category}</span>
          <span className="h-1 w-1 rounded-full bg-ink/30" />
          <span>{formatDate(story.date)}</span>
          <span className="h-1 w-1 rounded-full bg-ink/30" />
          <span>{story.readingTime}</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
          {story.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-5 text-xl text-ink-600 text-pretty">
          {story.excerpt}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 rounded-2xl overflow-hidden">
          <img src={story.image} alt="" className="w-full aspect-[16/9] object-cover" />
        </motion.div>

        <div className="mt-10 space-y-6 text-lg text-ink-700 leading-relaxed text-pretty">
          {story.body.map((p, i) => (
            <motion.p variants={fadeUp} key={i}>{p}</motion.p>
          ))}
        </div>

        {!story.verified && (
          <motion.p variants={fadeUp} className="mt-10 text-xs uppercase tracking-[0.18em] text-ink-400">
            Placeholder editorial — awaiting verified content
          </motion.p>
        )}
      </motion.article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-cream-100 border-t border-ink/10">
          <div className="container-x py-16">
            <h2 className="font-display text-display-sm mb-8">More stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} to={`/stories/${s.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out-expo" />
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-500">
                    {s.category}
                  </div>
                  <h3 className="mt-1.5 font-display text-lg group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}