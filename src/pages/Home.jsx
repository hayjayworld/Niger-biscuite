import { useSEO } from '../lib/seo.js';
import Hero from '../components/home/Hero.jsx';
import Heritage from '../components/home/Heritage.jsx';
import BrandShowcase from '../components/home/BrandShowcase.jsx';
import FeaturedProducts from '../components/home/FeaturedProducts.jsx';
import ManufacturingTeaser from '../components/home/ManufacturingTeaser.jsx';
import StoriesStrip from '../components/home/StoriesStrip.jsx';
import DistributorCTA from '../components/home/DistributorCTA.jsx';

export default function Home() {
  useSEO({
    title: 'Niger Biscuit — Made for Generations',
    description:
      'A Nigerian biscuit and FMCG manufacturer. Explore our brands, products, manufacturing and heritage.',
    canonical: '/',
  });
  return (
    <>
      <Hero />
      <Heritage />
      <BrandShowcase />
      <FeaturedProducts />
      <ManufacturingTeaser />
      <StoriesStrip />
      <DistributorCTA />
    </>
  );
}