// Product catalogue data — PLACEHOLDER until verified.
// Each product carries a `verified` flag. All fields with null or
// [CONFIRM ...] values must be reviewed before launch.

export const categories = [
  'All',
  'Biscuits',
  'Cookies',
  'Crackers',
  'Digestives',
  'Snacks',
  'Cereal Bars',
  'Chewing Gum',
];

export const products = [
  {
    slug: 'oxford-sandwich-vanilla',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Sandwich — Vanilla',
    category: 'Biscuits',
    description:
      'A sandwich biscuit with a vanilla-flavoured cream centre. Placeholder description — replace with verified product copy.',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [
      { label: '[Pack size A]', value: 'a' },
      { label: '[Pack size B]', value: 'b' },
    ],
    specifications: {
      category: 'Biscuits',
      type: 'Sandwich biscuit',
      flavour: 'Vanilla',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null, // replace with verified data object
    verified: false,
  },
  {
    slug: 'oxford-sandwich-chocolate',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Sandwich — Chocolate',
    category: 'Biscuits',
    description:
      'A sandwich biscuit with a chocolate-flavoured cream centre. Placeholder description — replace with verified product copy.',
    images: [
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Biscuits',
      type: 'Sandwich biscuit',
      flavour: 'Chocolate',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'nicco-rich-tea',
    brand: 'Nicco',
    brandSlug: 'nicco',
    name: 'Nicco Rich Tea',
    category: 'Biscuits',
    description:
      'A light, everyday biscuit suited for tea-time. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Biscuits',
      type: 'Rich tea',
      flavour: '[CONFIRM FLAVOUR]',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'niger-classic-coconut',
    brand: 'Niger Classic',
    brandSlug: 'niger-classic',
    name: 'Niger Classic — Coconut',
    category: 'Cookies',
    description:
      'A coconut-flavoured cookie from the Niger Classic range. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Cookies',
      type: 'Cookie',
      flavour: 'Coconut',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'cream-crackers-classic',
    brand: 'Cream Crackers',
    brandSlug: 'cream-crackers',
    name: 'Cream Crackers — Classic',
    category: 'Crackers',
    description:
      'A crisp, light cracker. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Crackers',
      type: 'Cracker',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'digestive-wheat',
    brand: 'Nicco',
    brandSlug: 'nicco',
    name: 'Digestive Wheat',
    category: 'Digestives',
    description:
      'A wheat-based digestive biscuit. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Digestives',
      type: 'Digestive',
      flavour: 'Wheat',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'snack-bites-cheese',
    brand: 'Nicco',
    brandSlug: 'nicco',
    name: 'Snack Bites — Cheese',
    category: 'Snacks',
    description:
      'A savoury snack bite. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Snacks',
      type: 'Savoury snack',
      flavour: 'Cheese',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'cereal-bar-honey',
    brand: 'Niger Classic',
    brandSlug: 'niger-classic',
    name: 'Cereal Bar — Honey',
    category: 'Cereal Bars',
    description:
      'A honey-flavoured cereal bar. Placeholder description — replace with verified copy.',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80&auto=format&fit=crop',
    ],
    variants: [{ label: '[Pack size A]', value: 'a' }],
    specifications: {
      category: 'Cereal Bars',
      type: 'Cereal bar',
      flavour: 'Honey',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return [];
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const aScore = (a.brandSlug === product.brandSlug ? 2 : 0) + (a.category === product.category ? 1 : 0);
      const bScore = (b.brandSlug === product.brandSlug ? 2 : 0) + (b.category === product.category ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
};