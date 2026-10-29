import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  gap = 0.06,
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      variants={stagger(delay, gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag variants={fadeUp} className={className}>
      {children}
    </MotionTag>
  );
}