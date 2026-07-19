import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'education' | 'experience' | 'founding' | 'milestone';
}

const categoryColors: Record<TimelineItem['category'], string> = {
  education: 'bg-cyan-400',
  experience: 'bg-electric-400',
  founding: 'bg-electric-500',
  milestone: 'bg-white',
};

const items: TimelineItem[] = [
  {
    year: '2013',
    title: 'Started Graphic Design',
    subtitle: 'School of Visual Arts',
    description: 'Began formal training in brand systems and interactive design.',
    category: 'education',
  },
  {
    year: '2015',
    title: 'First Studio Role',
    subtitle: 'Studio Mono',
    description: 'Crafted brand identities and print systems for lifestyle brands.',
    category: 'experience',
  },
  {
    year: '2017',
    title: 'UI/UX Designer',
    subtitle: 'Northwind Agency',
    description: 'Designed research-led interfaces for fintech and healthtech products.',
    category: 'experience',
  },
  {
    year: '2018',
    title: 'Full-Stack Bootcamp',
    subtitle: 'Le Wagon',
    description: 'Intensive program in React, Node.js, and modern front-end engineering.',
    category: 'education',
  },
  {
    year: '2019',
    title: 'Senior Web Developer',
    subtitle: 'Lumen Labs',
    description: 'Led front-end architecture for enterprise dashboards; shipped 25+ React apps.',
    category: 'experience',
  },
  {
    year: '2021',
    title: 'Founded MrDYAN Studio',
    subtitle: 'Creative Agency',
    description: 'Launched a digital creative agency serving clients worldwide.',
    category: 'founding',
  },
  {
    year: '2023',
    title: 'Awwwards Honorable Mention',
    subtitle: 'Helix Studio',
    description: 'Recognized for scroll-driven storytelling and motion design.',
    category: 'milestone',
  },
  {
    year: '2024',
    title: '40+ Clients Worldwide',
    subtitle: 'Milestone',
    description: 'Crossed 40 clients across branding, web, and growth engagements.',
    category: 'milestone',
  },
];

export default function Timeline() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
      <div className="mb-10 text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">{t('timeline.title')}</h2>
        <p className="mt-2 text-sm text-ink-200">{t('timeline.desc')}</p>
      </div>

      {/* track */}
      <div className="absolute start-4 top-0 h-full w-px -ms-px bg-white/[0.08] sm:start-1/2 sm:-ms-px" />
      {/* progress line */}
      <motion.div
        style={{ scaleY }}
        className="absolute start-4 top-0 h-full w-px -ms-px origin-top bg-gradient-to-b from-electric-400 via-electric-500 to-cyan-400 sm:start-1/2 sm:-ms-px"
      />

      <div className="space-y-10">
        {items.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <Reveal key={item.year + item.title} delay={i * 0.04}>
              <div
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  left ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* node */}
                <div className="absolute start-4 z-10 -ms-[7px] sm:start-1/2 sm:-ms-[7px]">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, ease: 'backOut' }}
                    className={`block h-3.5 w-3.5 rounded-full border-2 border-ink-950 shadow-glow-sm ${categoryColors[item.category]}`}
                  />
                </div>

                {/* spacer */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* card */}
                <div className="ms-10 w-full sm:ms-0 sm:w-1/2 sm:px-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-electric-300">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-medium text-ink-300">{item.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-200">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
