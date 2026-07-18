export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Design',
    skills: [
      { name: 'Photoshop', level: 96 },
      { name: 'Illustrator', level: 92 },
      { name: 'Figma', level: 98 },
      { name: 'Canva', level: 88 },
    ],
  },
  {
    name: 'Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'TailwindCSS', level: 97 },
      { name: 'WordPress', level: 85 },
    ],
  },
  {
    name: 'Marketing',
    skills: [
      { name: 'SEO', level: 89 },
      { name: 'Digital Marketing', level: 86 },
    ],
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native', percent: 100 },
  { name: 'English', level: 'Fluent', percent: 92 },
  { name: 'French', level: 'Professional', percent: 80 },
];

export const certificates = [
  { name: 'Google UX Design Certificate', issuer: 'Google', year: '2023' },
  { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2022' },
  { name: 'Advanced React & Redux', issuer: 'Frontend Masters', year: '2021' },
  { name: 'Brand Strategy Masterclass', issuer: 'Domestika', year: '2020' },
];
