// Editorial stories / news — PLACEHOLDER content.
// Replace with real articles before launch.

export const storyCategories = [
  'All',
  'Company',
  'Heritage',
  'Products',
  'Manufacturing',
  'Community',
  'People',
  'News',
];

export const stories = [
  {
    slug: 'made-for-generations',
    category: 'Heritage',
    date: '2025-01-15',
    readingTime: '5 min read',
    title: 'Made for Generations: A Nigerian Story',
    excerpt:
      'How a Nigerian biscuit company built a place in everyday life. Placeholder story — replace with verified editorial.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&q=80&auto=format&fit=crop',
    body: [
      'Placeholder editorial body. This story is a template — replace with a verified account of the company’s heritage.',
      'Editorial pages are structured so real reporting and photography can replace this copy without changing the layout.',
      'Use this space for narrative, interviews, archival references and imagery.',
    ],
    verified: false,
  },
  {
    slug: 'inside-the-factory-floor',
    category: 'Manufacturing',
    date: '2025-02-02',
    readingTime: '6 min read',
    title: 'Inside the Factory Floor',
    excerpt:
      'A look at the processes that turn ingredients into everyday biscuits. Placeholder story.',
    image:
      'https://res.cloudinary.com/dxkz3lwwv/image/upload/v1793525785/factory.webp',
    body: [
      'Placeholder editorial body about manufacturing. Replace with verified reporting and approved photography.',
    ],
    verified: false,
  },
  {
    slug: 'quality-from-the-inside',
    category: 'Company',
    date: '2025-03-10',
    readingTime: '4 min read',
    title: 'Quality From the Inside',
    excerpt:
      'Why quality systems matter in everyday food production. Placeholder story.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80&auto=format&fit=crop',
    body: [
      'Placeholder editorial body about quality. Replace with verified content.',
    ],
    verified: false,
  },
  {
    slug: 'people-behind-the-product',
    category: 'People',
    date: '2025-04-04',
    readingTime: '5 min read',
    title: 'The People Behind the Product',
    excerpt:
      'A placeholder introduction to some of the people who make production possible.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop',
    body: [
      'Placeholder editorial body about people. Replace with verified interviews and photography.',
    ],
    verified: false,
  },
];

export const getStoryBySlug = (slug) => stories.find((s) => s.slug === slug);