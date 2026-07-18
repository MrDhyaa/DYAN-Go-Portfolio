export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link: string;
  year: string;
  client: string;
  role: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'aether-banking',
    title: 'Aether Banking',
    category: 'UI/UX Design',
    tags: ['Figma', 'React', 'TypeScript'],
    description:
      'A next-generation banking dashboard with real-time insights, animated charts, and a calm, focused interface.',
    image:
      'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2024',
    client: 'Aether Financial',
    role: 'Lead Designer & Developer',
    gallery: [
      'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    slug: 'nova-cosmetics',
    title: 'Nova Cosmetics',
    category: 'Brand Identity',
    tags: ['Illustrator', 'Photoshop'],
    description:
      'Full brand identity for a clean-beauty startup — logo, packaging, and a tactile print system.',
    image:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2024',
    client: 'Nova Cosmetics',
    role: 'Brand Designer',
    gallery: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    slug: 'helix-studio',
    title: 'Helix Studio',
    category: 'Web Development',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    description:
      'Award-style agency site with scroll-driven storytelling, magnetic interactions, and buttery motion.',
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2023',
    client: 'Helix Studio',
    role: 'Designer & Developer',
    gallery: [
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    slug: 'pulse-analytics',
    title: 'Pulse Analytics',
    category: 'Web Development',
    tags: ['Next.js', 'TypeScript'],
    description:
      'A high-converting SaaS landing page with interactive product demos and animated metrics.',
    image:
      'https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2023',
    client: 'Pulse Analytics',
    role: 'Front-end Developer',
    gallery: [
      'https://images.pexels.com/photos/5905705/pexels-photo-5905705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    slug: 'atlas-coffee',
    title: 'Atlas Coffee',
    category: 'Brand Identity',
    tags: ['Illustrator', 'InDesign'],
    description:
      'Premium coffee packaging system with regional storytelling and sustainable materials.',
    image:
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2022',
    client: 'Atlas Coffee Co.',
    role: 'Packaging Designer',
    gallery: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  {
    slug: 'drift-social',
    title: 'Drift Social',
    category: 'Marketing Design',
    tags: ['Canva', 'Photoshop'],
    description:
      'A 90-day social content system that grew engagement 4x with a cohesive visual language.',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '#',
    year: '2022',
    client: 'Drift Social',
    role: 'Marketing Designer',
    gallery: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
