import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { EASE } from '../../lib/motion';

const variants = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  gold:      'btn-gold',
  ghost:     'btn-ghost',
};

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  icon,
  withArrow = false,
  children,
  className = '',
  ...props
}) {
  const cls = `${variants[variant]} group ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {(withArrow || icon) && (
        <motion.span
          aria-hidden
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          {icon || <ArrowRight size={16} />}
        </motion.span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {content}
      </a>
    );
  }
  if (as === 'button' || props.onClick) {
    return (
      <button className={cls} {...props}>
        {content}
      </button>
    );
  }
  return (
    <span className={cls} {...props}>
      {content}
    </span>
  );
}