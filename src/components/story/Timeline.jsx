import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { timeline } from '../../data/timeline.js';
import { fadeUp, stagger, EASE } from '../../lib/motion.js';
import { useReducedMotion } from '../../lib/useReducedMotion.js';

export default function Timeline() {
  const reduced = useReducedMotion();
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start center', 'end center'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const widthScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <>
      {/* DESKTOP — horizontal */}
      <div className="hidden lg:block">
        <div ref={trackRef} className="relative">
          {/* Progress line */}
          <div className="absolute left-0 right-0 top-[52px] h-px bg-ink/15">
            <motion.div
              style={{ scaleX: reduced ? 1 : widthScale, transformOrigin: 'left' }}
              className="h-full bg-ink"
            />
          </div>

          <motion.ol
            variants={stagger(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-7 gap-4 relative"
          >
            {timeline.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.li
                  key={item.key}
                  variants={fadeUp}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="relative pt-24 cursor-pointer"
                >
                  {/* Node */}
                  <span
                    className={`absolute top-[46px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full ring-4 ring-cream-50 transition-colors duration-300 ${
                      isActive ? 'bg-gold' : 'bg-ink/40'
                    }`}
                  />
                  <div className="text-center px-1">
                    <div
                      className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-500'
                      }`}
                    >
                      {item.date}
                    </div>
                    <div
                      className={`mt-2 font-display text-lg leading-tight transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-600'
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        {/* Detail panel */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-14 max-w-2xl mx-auto text-center"
        >
          <p className="text-ink-600 text-lg text-pretty">
            {timeline[activeIndex].description}
          </p>
          {!timeline[activeIndex].verified && (
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-400">
              Placeholder — awaiting verification
            </p>
          )}
        </motion.div>
      </div>

      {/* MOBILE — vertical */}
      <div className="lg:hidden">
        <ol className="relative">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-ink/15" aria-hidden />
          {timeline.map((item, i) => (
            <motion.li
              key={item.key}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              <span
                className="absolute left-[8px] top-2 h-[13px] w-[13px] rounded-full bg-gold ring-4 ring-cream-50"
                aria-hidden
              />
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                {item.date}
              </div>
              <h3 className="mt-1.5 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-ink-600 text-sm text-pretty">{item.description}</p>
              {!item.verified && (
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  Placeholder — awaiting verification
                </p>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </>
  );
}