import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-start'
      }`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-electric-300">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400 animate-pulse-glow" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h1 className="text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
