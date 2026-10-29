import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { EASE } from '../lib/motion.js';

const navItems = [
  { to: '/story', label: 'Our Story' },
  { to: '/brands', label: 'Brands' },
  { to: '/products', label: 'Products' },
  { to: '/manufacturing', label: 'Manufacturing' },
  { to: '/distribution', label: 'Distribution' },
  { to: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

useEffect(() => {
  if (!open) return;
  const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
  document.addEventListener('keydown', onKey);
  return () => document.removeEventListener('keydown', onKey);
}, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(251, 248, 242, 0.85)' : 'rgba(251, 248, 242, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottomColor: scrolled ? 'rgba(26,23,20,0.08)' : 'rgba(26,23,20,0)',
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <div className="container-x">
          <motion.div
            animate={{ height: scrolled ? 64 : 80 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex items-center justify-between"
          >
            <Logo />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-600 hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                          transition={{ duration: 0.35, ease: EASE }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Link to="/products" className="btn-ghost text-[13.5px]">
                Find Our Products
              </Link>
              <Link to="/contact" className="btn-primary text-[13.5px] group">
                <span>Contact Us</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-ink/15 hover:bg-ink/5 transition"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" aria-hidden />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[60] bg-ink text-cream-50 lg:hidden grain"
          >
            <div className="container-x h-full flex flex-col">
              <div className="flex items-center justify-between h-20">
                <Logo onDark />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-cream-50/20 hover:bg-cream-50/10 transition"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                className="flex-1 flex flex-col justify-center gap-1 py-8"
                aria-label="Mobile"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
                  >
                    <NavLink
                      to={item.to}
                      className="block font-display text-4xl sm:text-5xl py-2 tracking-tight hover:text-gold transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5, ease: EASE } }}
                className="pb-8 flex flex-col gap-3"
              >
                <Link to="/contact" className="btn-gold w-full justify-center">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <div className="flex items-center justify-between text-cream-50/60 text-xs uppercase tracking-[0.2em]">
                  <span>Niger Biscuit</span>
                  <span>Made for Generations</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}