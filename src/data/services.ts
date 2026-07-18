import {
  Gem,
  Code2,
  Megaphone,
  Figma,
  Palette,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  titleKey: string;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    icon: Palette,
    titleKey: 'graphic',
    title: 'Graphic Design',
    description: 'Visual systems, posters, and collateral crafted with precision and intent.',
    includes: ['Posters & flyers', 'Print design', 'Social media graphics', 'Visual systems'],
  },
  {
    icon: Gem,
    titleKey: 'brand',
    title: 'Brand Identity',
    description: 'End-to-end identity systems — voice, visuals, and guidelines.',
    includes: ['Logo design', 'Brand guidelines', 'Color & typography', 'Visual language'],
  },
  {
    icon: Code2,
    titleKey: 'web',
    title: 'Web Development',
    description: 'Fast, accessible, production-grade sites built with modern tooling.',
    includes: ['React websites', 'Landing pages', 'Business websites', 'Performance & SEO'],
  },
  {
    icon: Figma,
    titleKey: 'uiux',
    title: 'UI/UX Design',
    description: 'Research-led interfaces with thoughtful, usable flows.',
    includes: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
  },
  {
    icon: Megaphone,
    titleKey: 'marketing',
    title: 'Marketing Design',
    description: 'Full-funnel campaigns across paid, social, and email channels.',
    includes: ['Social media design', 'Ad creatives', 'Email design', 'Campaign systems'],
  },
];
