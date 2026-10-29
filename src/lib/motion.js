// Centralized Framer Motion variants.
// Kept lean — used across the site so timing stays consistent.

export const EASE = [0.16, 1, 0.3, 1]; // out-expo

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: EASE },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = (delay = 0, gap = 0.06) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});

export const revealImage = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.05 },
  show: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    transition: { duration: 1.0, ease: EASE },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
};

export const hoverLift = {
  rest:  { y: 0 },
  hover: { y: -4, transition: { duration: 0.3, ease: EASE } },
};