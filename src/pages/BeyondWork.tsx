import { motion } from 'framer-motion';
import {
  Camera,
  Music,
  Coffee,
  BookOpen,
  Wrench,
  Lightbulb,
  Sparkles,
  Target,
  Gamepad2,
  Plane,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const hobbies = [
  { icon: Camera, label: 'Photography' },
  { icon: Music, label: 'Music production' },
  { icon: Coffee, label: 'Specialty coffee' },
  { icon: BookOpen, label: 'Reading' },
  { icon: Gamepad2, label: 'Game design' },
  { icon: Plane, label: 'Travel' },
];

const tools = [
  'Figma', 'Photoshop', 'Illustrator', 'React', 'TypeScript',
  'TailwindCSS', 'Framer Motion', 'Notion', 'Linear', 'Vercel',
];

const workflow = [
  'Morning: deep work — design & dev blocks',
  'Afternoon: client calls & reviews',
  'Evening: learning, side projects, reading',
  'Weekly: retro, planning, and tooling audits',
];

const inspiration = [
  'Dieter Rams — less but better',
  'Massimo Vignelli — timeless discipline',
  'Linear & Framer — modern product craft',
  'Nature — patterns, rhythm, restraint',
];

const facts = [
  'Coffee-to-code ratio: roughly 1:1',
  'Have shipped sites on 4 continents',
  'Design in silence, code with lo-fi',
  'Collect vintage typographic specimens',
];

const goals = [
  'Launch a design tool for founders',
  'Speak at a major design conference',
  'Mentor 100 designers by 2026',
  'Open-source a motion component library',
];

export default function BeyondWork() {
  const { t } = useTranslation();

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('beyond.eyebrow')}
          title={t('beyond.title')}
          description={t('beyond.desc')}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Hobbies */}
          <Reveal>
            <Card icon={<Sparkles size={20} />} title={t('beyond.hobbies')}>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((h) => (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-ink-100"
                  >
                    <h.icon size={14} className="text-electric-300" />
                    {h.label}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Tools */}
          <Reveal delay={0.08}>
            <Card icon={<Wrench size={20} />} title={t('beyond.tools')}>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-ink-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Workflow */}
          <Reveal delay={0.16}>
            <Card icon={<Coffee size={20} />} title={t('beyond.workflow')}>
              <ul className="space-y-3">
                {workflow.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-400" />
                    {w}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Inspiration */}
          <Reveal>
            <Card icon={<Lightbulb size={20} />} title={t('beyond.inspiration')}>
              <ul className="space-y-3">
                {inspiration.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Fun facts */}
          <Reveal delay={0.08}>
            <Card icon={<Sparkles size={20} />} title={t('beyond.facts')}>
              <ul className="space-y-3">
                {facts.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Goals */}
          <Reveal delay={0.16}>
            <Card icon={<Target size={20} />} title={t('beyond.goals')}>
              <ul className="space-y-3">
                {goals.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-400" />
                    {g}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        {/* Workspace photo */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/[0.06]">
            <div className="relative aspect-[21/9]">
              <img
                src="https://images.pexels.com/photos/7988077/pexels-photo-7988077.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&dpr=2"
                alt="My workspace"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 start-6">
                <h3 className="font-display text-xl font-bold">The workspace</h3>
                <p className="text-sm text-ink-200">Where the work happens — calm, focused, minimal.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass h-full rounded-3xl p-7 transition-colors hover:border-electric-500/20"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-electric-500/10 text-electric-300">
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
}
