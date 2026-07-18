export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Founder & Creative Director',
    company: 'MrDYAN Studio',
    period: '2021 — Present',
    description:
      'Founded a digital creative agency serving 40+ clients worldwide across branding, web, and growth.',
  },
  {
    role: 'Senior Web Developer',
    company: 'Lumen Labs',
    period: '2019 — 2021',
    description:
      'Led front-end architecture for enterprise dashboards and shipped 25+ React applications.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Northwind Agency',
    period: '2017 — 2019',
    description:
      'Designed research-led interfaces for fintech and healthtech products with a focus on usability.',
  },
  {
    role: 'Graphic Designer',
    company: 'Studio Mono',
    period: '2015 — 2017',
    description:
      'Crafted brand identities, packaging, and print systems for lifestyle and hospitality brands.',
  },
];

export const education = [
  {
    degree: 'B.A. Graphic Design',
    school: 'School of Visual Arts',
    period: '2013 — 2017',
    description: 'Specialized in brand systems and interactive design.',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'Le Wagon',
    period: '2018',
    description: 'Intensive program in React, Node.js, and modern front-end engineering.',
  },
];
