import { motion } from 'framer-motion';
import { revealImage, EASE } from '../../lib/motion';
import { useReducedMotion } from '../../lib/useReducedMotion';

export default function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  ratio = '4/3',
  loading = 'lazy',
  once = true,
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={reduced ? undefined : revealImage}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once, margin: '-80px' }}
      className={`overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo ${imgClassName}`}
        initial={reduced ? undefined : { scale: 1.08 }}
        whileInView={reduced ? undefined : { scale: 1 }}
        viewport={{ once }}
        transition={{ duration: 1.2, ease: EASE }}
      />
    </motion.div>
  );
}