import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: Tag = 'h2',
}) {
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <motion.div
      variants={stagger(0, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col gap-4 ${alignCls} ${className}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.div variants={fadeUp}>
          <Tag className="font-display text-display-md text-balance max-w-3xl">{title}</Tag>
        </motion.div>
      )}
      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-ink-600 text-pretty max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}