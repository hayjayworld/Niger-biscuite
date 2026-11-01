// Product catalogue data — PLACEHOLDER until verified.
// Each product carries a `verified` flag. All fields with null or
// [CONFIRM ...] values must be reviewed before launch.

import { image } from "framer-motion/client";

export const categories = [
  'All',
  'Biscuits',
  'Cookies',
  'Cabin Biscuits',
  'Cracker Biscuits',
  'Digestive Biscuits',
  'Coaster Biscuits',
  'Snacks',
  'Rich Tea Biscuits',
  'Cereal Bars',
  'Shortcake Biscuits',
  'Chewing Gum',
  'Other',
];

export const products = [
  {
    slug: 'oxford-cabin-red',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Cabin — Red',
    category: 'Cabin Biscuits',
    description:
      'A sandwich biscuit with a vanilla-flavoured cream centre. Placeholder description — replace with verified product copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793525757/oxford-cabin.webp',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/oxford-cabin-red.webp',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793531667/product-oxford-cabin-family-65g.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793531667/product-oxford-cabin.avif',
    ],
    variants: [
      {
        label: 'Oxford Cabin Large Fresh Pack',
        value: 'a',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/oxford-cabin-red.webp'],
      },
      {
        label: 'Oxford Cabin Family 65g Blue',
        value: 'b',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793531667/product-oxford-cabin-family-65g.avif'],
      },
      {
        label: 'Oxford Cabin',
        value: 'c',
        images: [
          'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793531667/product-oxford-cabin.avif',
        ],
      },
    ],
    specifications: {
      category: 'Cabin Biscuits',
      type: 'biscuit',
      flavour: 'Vanilla',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null, // replace with verified data object
    verified: false,
  },
  {
    slug: 'oxford-cabin-extra',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Cabin — Extra',
    category: 'Cabin Biscuits',
    description:
      'A Cabin biscuit with a extra-flavoured cream centre. Placeholder description — replace with verified product copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532250/cabin-extra-brand.png',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-sweetened-cabin-large-fresh-pack.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-cabin-extra-family-65g.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532250/product-oxford-cabin-extra.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-cabin-gold.avif',
    ],
    variants: [
      {
        label: 'Oxford Sweetened Cabin Large Fresh Pack',
        value: 'a',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-sweetened-cabin-large-fresh-pack.avif'],
      },
      {
        label: 'Oxford Cabin Extra Family 65g',
        value: 'b',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-cabin-extra-family-65g.avif'],
      },
      {
        label: 'Oxford Cabin Extra',
        value: 'c',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532250/product-oxford-cabin-extra.avif'],
      },
      {
        label: 'Oxford Cabin Gold',
        value: 'd',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793532249/product-oxford-cabin-gold.avif'],
      },
    ],
    specifications: {
      category: 'Cabin Biscuits',
      type: 'biscuit',
      flavour: 'Chocolate',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Oxford-Prince-Cabin-Extra',
    brand: ['Oxford', 'Prince'],
    brandSlug: ['oxford', 'prince'],
    name: 'Oxford Prince Cabin Extra',
    category: 'Cabin Biscuits',
    description:
      'A light, everyday biscuit suited for tea-time. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-oxford-prince-cabin-extra.avif'],
    variants: [{ label: 'Oxford Prince Cabin Extra', value: 'a' }],
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
    slug: 'Oxford-Prince-Cabin',
    brand: ['Oxford', 'Prince'],
    brandSlug: ['oxford', 'prince'],
    name: 'Oxford Prince Cabin',
    category: 'Cabin Biscuits',
    description:
      'A coconut-flavoured cookie from the Niger Classic range. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-oxford-prince-cabin.avif'],
    variants: [{ label: 'Oxford Prince Cabin', value: 'a' }],
    specifications: {
      category: 'Cabin Biscuits',
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
    slug: 'CarryGo',
    brand: 'CarryGo',
    brandSlug: 'carrygo',
    name: 'CarryGo',
    category: 'cereal bar',
    description:
      'Energy On The Go. Placeholder description — replace with verified product copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537879/carrygo-range.png',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537879/product-carrygo-chocolate.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537878/product-carrygo-honey.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537878/product-carrygo-milk.avif',
      
    ],
    variants: [
      {
        label: 'CarryGo Chocolate',
        value: 'a',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537879/product-carrygo-chocolate.avif'],
      },
      {
        label: 'CarryGo Honey',
        value: 'b',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537878/product-carrygo-honey.avif'],
      },
      {
        label: 'CarryGo Milk',
        value: 'c',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793537878/product-carrygo-milk.avif'],
      },
      
    ],
    specifications: {
      category: 'Cereal Bars',
      type: 'biscuit',
      flavour: 'Chocolate',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Jenka',
    brand: 'Jenka',
    brandSlug: 'carrygo',
    name: 'Jenka bubble gum',
    category: 'Chewing gum',
    description:
      'Fresh & Fun. Placeholder description — replace with verified product copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/jenka-brand.png',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-jenka-bag.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-jenka-box.avif',
      
    ],
    variants: [
      {
        label: 'Jenka Bag',
        value: 'a',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-jenka-bag.avif'],
      },
      {
        label: 'Jenka Box',
        value: 'b',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-jenka-box.avif'],
      },
      
      
    ],
    specifications: {
      category: 'Chewing gum',
      type: 'Chewing gum',
      flavour: 'Chocolate',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'jet',
    brand: 'Jet',
    brandSlug: 'jet',
    name: 'Jet',
    category: 'Chewing gum',
    description:
      'Fresh & Fun. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-jet-box.avif'],
    variants: [{ label: 'Jet Box', value: 'a' }],
    specifications: {
      category: 'Chewing gum',
      type: 'Chewing gum',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'gogo-double-bubble',
    brand: 'GOGO',
    brandSlug: 'gogo',
    name: 'GOGO Double Bubble',
    category: 'Chewing gum',
    description:
      'Fresh & Fun. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793542015/product-gogo-double-bubble-strawberry-and-pineapple-bag.avif'],
    variants: [{ label: 'GOGO Double Bubble Strawberry & Pineapple Bag', value: 'a' }],
    specifications: {
      category: 'Chewing gum',
      type: 'Chewing gum',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Chocoaster-Biscuits',
    brand: 'OThers',
    brandSlug: 'others',
    name: 'Chocoaster',
    category: 'Coaster Biscuits',
    description:
      'Golden Goodness. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793542692/product-chocoaster.avif'],
    variants: [{ label: 'Chocoaster', value: 'a' }],
    specifications: {
      category: 'Coaster Biscuits',
      type: 'Coaster Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Oxford-Hookup',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Hookup',
    category: 'Coaster Biscuits',
    description:
      'Golden Goodness. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793543045/product-hookup.avif'],
    variants: [{ label: 'Oxford Hookup', value: 'a' }],
    specifications: {
      category: 'Coaster Biscuits',
      type: 'Coaster Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Prince-Coaster',
    brand: 'Prince',
    brandSlug: 'prince',
    name: 'Prince Coaster',
    category: 'Coaster Biscuits',
    description:
      'Golden Goodness. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793543285/product-coaster.avif'],
    variants: [{ label: 'Prince Coaster', value: 'a' }],
    specifications: {
      category: 'Coaster Biscuits',
      type: 'Coaster Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'yummies-range',
    brand: 'Yummies',
    brandSlug: 'yummies',
    name: 'Yummies Range',
    category: 'Cookies',
    description:
      'A Cabin biscuit with a extra-flavoured cream centre. Placeholder description — replace with verified product copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793543939/yummis-range.png',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-banana.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-ginger.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-butter.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-coconut.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-honey.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/product-yummies-pineapple.avif',
    ],
    variants: [
      {
        label: 'Yummies Banana',
        value: 'a',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-banana.avif'],
      },
      {
        label: 'Yummies Butter',
        value: 'b',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-butter.avif'],
      },
      {
        label: 'Yummies Coconut',
        value: 'c',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-coconut.avif'],
      },
      {
        label: 'Yummies Ginger',
        value: 'd',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-ginger.avif'],
      },
      {
        label: 'Yummies Honey',
        value: 'e',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530255/product-yummies-honey.avif'],
      },
      {
        label: 'Yummies Pineapple',
        value: 'f',
        images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/product-yummies-pineapple.avif'],
      },
    ],
    specifications: {
      category: 'Cookies',
      type: 'biscuit',
      flavour: 'Chocolate',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Sesamix',
    brand: 'Sesamix',
    brandSlug: 'sesamix',
    name: 'Sesamix',
    category: 'Cracker Biscuits',
    description:
      'Perfectly Crisp. Placeholder description — replace with verified copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/sesamix-brand.png',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-sesamix.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/product-sesamix-family.avif',
    ],
    variants: [{ label: 'Sesamix', value: 'a', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530253/product-sesamix.avif']},
    { label: 'Sesamix Family Pack', value: 'b', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530254/product-sesamix-family.avif']},
  ],
    specifications: {
      category: 'Cracker Biscuits',
      type: 'Cracker Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Prince-Cream-Crackers',
    brand: 'Prince',
    brandSlug: 'prince',
    name: 'Prince Cream Crackers',
    category: 'Cracker Biscuits',
    description:
      'Perfectly Crisp. Placeholder description — replace with verified copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-prince-cream-cracker.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-prince-cream-cracker-family.avif',
    ],
    variants: [{ label: 'Prince Cream Crackers', value: 'a', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-prince-cream-cracker.avif']},
    { label: 'Prince Cream Crackers Family Pack', value: 'b', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-prince-cream-cracker-family.avif']},
  ],
    specifications: {
      category: 'Cracker Biscuits',
      type: 'Cracker Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Oxford-Cream-Crackers',
    brand: 'Oxford',
    brandSlug: 'oxford',
    name: 'Oxford Cream Cracker',
    category: 'Cracker Biscuits',
    description:
      'Perfectly Crisp. Placeholder description — replace with verified copy.',
    images: [
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793545958/product-oxford-cream-cracker-family.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-oxford-cream-cracker-family.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793545958/product-oxford-cream-cracker-small.avif',
    ],
    variants: [{ label: 'Oxford Cream Cracker', value: 'a', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/oxford-cream-cracker.avif']},
    { label: 'Oxford Cream Cracker Family Pack', value: 'b', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/oxford-cream-cracker-family.avif']},
    { label: 'Oxford Cream Cracker Small Pack', value: 'c', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793545958/product-oxford-cream-cracker-small.avif']}
  ],
    specifications: {
      category: 'Cracker Biscuits',
      type: 'Cracker Biscuits',
      flavour: 'Classic',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Prince-Rich-Tea',
    brand: ['Oxford', 'Prince'],
    brandSlug: ['oxford', 'prince'],
    name: 'Prince Rich Tea',
    category: 'Rich Tea Biscuits',
    description:
      'The Perfect Pair. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530256/product-prince-rich-tea.avif'],
    variants: [{ label: 'Prince Rich Tea', value: 'a' }],
    specifications: {
      category: 'Rich Tea Biscuits',
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
    slug: 'Cheese-Ball',
    brand: ['Oxford', 'Prince'],
    brandSlug: ['oxford', 'prince'],
    name: 'Cheese Ball',
    category: 'Snacks',
    description:
      'Fun & Crunchy. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547005/product-cheeseball.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547003/product-solo-cheeseball.avif',
    ],
    variants: [
      { label: 'Cheese Ball', value: 'a', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547005/product-cheeseball.avif'] },
      { label: 'Solo Cheese Ball', value: 'b', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547003/product-solo-cheeseball.avif'] },
    ],
    specifications: {
      category: 'Snacks',
      type: 'Savoury snack',
      flavour: '[CONFIRM FLAVOUR]',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'Master-Chef',
    brand: ['Oxford'],
    brandSlug: ['oxford'],
    name: 'Master Chef',
    category: 'Shortcake Biscuits',
    description:
      'Crumbly & Sweet. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530727/product-master-chef-family.avif',
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530727/product-master-chef.avif',
    ],
    variants: [
      { label: 'Master Chef', value: 'a', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530727/product-master-chef.avif'] },
      { label: 'Master Chef Family', value: 'b', images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793530727/product-master-chef-family.avif'] },
    ],
    specifications: {
    category: 'Shortcake Biscuits',
      type: 'Shortcake',
      flavour: '[CONFIRM FLAVOUR]',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  {
    slug: 'digestive-fibre-active',
    brand: ['Oxford', 'Prince'],
    brandSlug: ['oxford', 'prince'],
    name: 'Digestive Fibre Active',
    category: 'Digestive Biscuits',
    description:
      'Wholesome & Nutritious. Placeholder description — replace with verified copy.',
    images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547901/product-digestive-fiberactive-biscuit.avif'],
    variants: [{ label: 'Digestive Fibre Active', value: 'a' }],
    specifications: {
      category: 'Digestive Biscuits',
      type: 'Digestive',
      flavour: 'Wheat',
      packSize: '[CONFIRM PACK SIZE]',
      manufacturer: 'Niger Biscuit Company Limited',
      countryOfOrigin: 'Nigeria',
    },
    nutrition: null,
    verified: false,
  },
  // {
  //   slug: 'snack-bites-cheese',
  //   brand: 'Nicco',
  //   brandSlug: 'nicco',
  //   name: 'Snack Bites — Cheese',
  //   category: 'Snacks',
  //   description:
  //     'A savoury snack bite. Placeholder description — replace with verified copy.',
  //   images: ['https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793547901/product-digestive-fiberactive-biscuit.avif'],
  //   variants: [{ label: '[Pack size A]', value: 'a' }],
  //   specifications: {
  //     category: 'Snacks',
  //     type: 'Savoury snack',
  //     flavour: 'Cheese',
  //     packSize: '[CONFIRM PACK SIZE]',
  //     manufacturer: 'Niger Biscuit Company Limited',
  //     countryOfOrigin: 'Nigeria',
  //   },
  //   nutrition: null,
  //   verified: false,
  // },
  // {
  //   slug: 'cereal-bar-honey',
  //   brand: 'Niger Classic',
  //   brandSlug: 'niger-classic',
  //   name: 'Cereal Bar — Honey',
  //   category: 'Cereal Bars',
  //   description:
  //     'A honey-flavoured cereal bar. Placeholder description — replace with verified copy.',
  //   images: ['/product-placeholder.svg'],
  //   variants: [{ label: '[Pack size A]', value: 'a' }],
  //   specifications: {
  //     category: 'Cereal Bars',
  //     type: 'Cereal bar',
  //     flavour: 'Honey',
  //     packSize: '[CONFIRM PACK SIZE]',
  //     manufacturer: 'Niger Biscuit Company Limited',
  //     countryOfOrigin: 'Nigeria',
  //   },
  //   nutrition: null,
  //   verified: false,
  // },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getProductBrandSlugs = (product) => {
  if (!product) return [];
  return Array.isArray(product.brandSlug)
    ? product.brandSlug
    : product.brandSlug
      ? [product.brandSlug]
      : [];
};

export const getProductBrandNames = (product) => {
  if (!product) return [];
  return Array.isArray(product.brand)
    ? product.brand
    : product.brand
      ? [product.brand]
      : [];
};

export const productHasBrand = (product, brandSlug) =>
  getProductBrandSlugs(product).includes(brandSlug);

export const getVariantImages = (product, variantIndex = 0) => {
  if (!product) return [];
  const variantImages = product.variants?.[variantIndex]?.images;
  return variantImages?.length ? variantImages : product.images ?? [];
};

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return [];
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const productBrands = getProductBrandSlugs(product);
      const aScore = (getProductBrandSlugs(a).some((slug) => productBrands.includes(slug)) ? 2 : 0) + (a.category === product.category ? 1 : 0);
      const bScore = (getProductBrandSlugs(b).some((slug) => productBrands.includes(slug)) ? 2 : 0) + (b.category === product.category ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
};