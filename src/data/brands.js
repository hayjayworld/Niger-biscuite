// Brand data for Niger Biscuit Company.
// All content is PLACEHOLDER until confirmed by the brand team.
// `verified: false` marks items that must be reviewed before publishing.

export const brands = [
  {
    slug: 'oxford',
    name: 'Oxford',
    tagline: 'A familiar name in Nigerian biscuit culture.',
    shortDescription:
      'One of the household names associated with Niger Biscuit — a sandwich-style biscuit enjoyed across Nigerian homes.',
    longDescription:
      'Oxford is a sandwich biscuit brand with a warm, familiar presence in Nigerian kitchens and kiosks. Placeholder brand story — replace with verified brand history and product range.',
    accentColor: '#6B2A2A', // wine
    surface: '#F6F1E7',
    heroImage:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&q=80&auto=format&fit=crop',
    logo: null, // drop in official logo when available
    categories: ['Biscuits', 'Sandwich'],
    verified: false,
  },
  {
    slug: 'nicco',
    name: 'Nicco',
    tagline: 'Everyday biscuits, thoughtfully made.',
    shortDescription:
      'A range of everyday biscuits produced with a focus on consistency and quality. Placeholder description — replace with verified brand copy.',
    longDescription:
      'Nicco represents a line of everyday biscuits produced by Niger Biscuit. Placeholder long copy — to be replaced with verified brand narrative and pack range.',
    accentColor: '#2F4A3A', // forest
    surface: '#EDE5D4',
    heroImage:
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=1600&q=80&auto=format&fit=crop',
    logo: null,
    categories: ['Biscuits', 'Crackers'],
    verified: false,
  },
  {
    slug: 'niger-classic',
    name: 'Niger Classic',
    tagline: 'The taste of a Nigerian classic.',
    shortDescription:
      'A heritage-facing range that carries the Niger Biscuit name. Placeholder copy — replace with verified product positioning.',
    longDescription:
      'Niger Classic is positioned as a heritage range carrying the company name. Placeholder long copy — to be replaced with verified brand narrative.',
    accentColor: '#B8893F', // gold
    surface: '#F0E3CB',
    heroImage:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&q=80&auto=format&fit=crop',
    logo: null,
    categories: ['Biscuits', 'Cookies'],
    verified: false,
  },
  {
    slug: 'cream-crackers',
    name: 'Cream Crackers',
    tagline: 'Crisp, light, familiar.',
    shortDescription:
      'A classic cracker range for tea-time and everyday snacking. Placeholder copy — replace with verified brand copy.',
    longDescription:
      'Cream Crackers is a cracker range produced by Niger Biscuit. Placeholder long copy — to be replaced with verified brand narrative.',
    accentColor: '#4F463E',
    surface: '#F6F1E7',
    heroImage:
      'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=1600&q=80&auto=format&fit=crop',
    logo: null,
    categories: ['Crackers'],
    verified: false,
  },
];

export const getBrandBySlug = (slug) => brands.find((b) => b.slug === slug);