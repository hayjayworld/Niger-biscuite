import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { EASE } from '../../lib/motion.js';

export default function ProductGallery({ images, initialIndex = 0, alt }) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(false);
  const touchStartX = useRef(null);
  const thumbsRef = useRef(null);

  const go = (dir) => {
    if (!images?.length) return;
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'Escape') setZoom(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="aspect-square rounded-2xl bg-cream-200" />;
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main */}
        <div
          className="relative flex aspect-square items-center justify-center rounded-2xl overflow-hidden bg-cream-100 border border-ink/10 group"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={images[index]}
            src={images[index]}
            alt={`${alt} — view ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />

          {/* Zoom button */}
          <button
            onClick={() => setZoom(true)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream-50/90 backdrop-blur inline-flex items-center justify-center shadow-soft hover:bg-cream-50 transition opacity-0 group-hover:opacity-100"
            aria-label="Zoom image"
          >
            <ZoomIn size={16} />
          </button>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-cream-50/90 backdrop-blur inline-flex items-center justify-center shadow-soft hover:bg-cream-50 transition opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-cream-50/90 backdrop-blur inline-flex items-center justify-center shadow-soft hover:bg-cream-50 transition opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Dots (mobile) */}
          {images.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 sm:hidden">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-ink' : 'w-1.5 bg-ink/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            ref={thumbsRef}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-1"
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={`shrink-0 flex h-20 w-20 items-center justify-center rounded-xl overflow-hidden border-2 bg-cream-100 transition-colors sm:h-24 sm:w-24 ${
                  i === index ? 'border-ink' : 'border-transparent hover:border-ink/20'
                }`}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoom modal */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setZoom(false)}
          >
            <button
              onClick={() => setZoom(false)}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-cream-50/90 inline-flex items-center justify-center text-ink"
              aria-label="Close zoom"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              transition={{ duration: 0.3, ease: EASE }}
              src={images[index]}
              alt={alt}
              className="max-h-full max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}