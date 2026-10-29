import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ComingSoon from '../feedback/ComingSoon.jsx';
import { EASE } from '../../lib/motion.js';

const tabs = ['Overview', 'Ingredients', 'Nutrition', 'Allergens', 'Packaging'];

export default function ProductTabs({ product }) {
  const [active, setActive] = useState('Overview');

  const renderContent = () => {
    if (active === 'Overview') {
      return (
        <div className="space-y-3 text-ink-600 text-pretty">
          <p>{product.description}</p>
          <p className="text-sm text-ink-500">
            Full product information will be published here once verified.
          </p>
        </div>
      );
    }
    return <ComingSoon label={`${active} information coming soon.`} />;
  };

  return (
    <div className="border-t border-ink/10 pt-8">
      <div className="flex flex-wrap gap-1 border-b border-ink/10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`relative px-4 py-3 text-sm transition-colors ${
              active === t ? 'text-ink' : 'text-ink-500 hover:text-ink'
            }`}
          >
            {t}
            {active === t && (
              <motion.div
                layoutId="tab-underline"
                className="absolute inset-x-3 -bottom-px h-0.5 bg-ink"
                transition={{ duration: 0.3, ease: EASE }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}