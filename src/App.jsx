import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Brands from './pages/Brands.jsx';
import BrandDetail from './pages/BrandDetail.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Manufacturing from './pages/Manufacturing.jsx';
import Quality from './pages/Quality.jsx';
import Distribution from './pages/Distribution.jsx';
import Careers from './pages/Careers.jsx';
import Stories from './pages/Stories.jsx';
import StoryDetail from './pages/StoryDetail.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import { pageTransition } from './lib/motion.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function FocusOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Move focus to the main content for screen readers.
    const main = document.getElementById('main-content');
    if (main) main.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <FocusOnRoute />
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:slug" element={<BrandDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/stories/:slug" element={<StoryDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </Layout>
    </>
  );
}