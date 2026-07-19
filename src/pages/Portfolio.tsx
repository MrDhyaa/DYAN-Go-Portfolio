import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('portfolio.eyebrow')}
          title={t('portfolio.title')}
          description={t('portfolio.desc')}
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active === c
                    ? 'bg-electric-500 text-white shadow-glow-sm'
                    : 'border border-white/10 bg-white/[0.03] text-ink-200 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
              >
                <Link to={`/portfolio/${p.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                    <span className="absolute start-4 top-4 rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 text-xs font-medium text-electric-300 backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-200">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-ink-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-electric-500/10 px-4 py-2 text-xs font-semibold text-electric-300 transition-colors hover:bg-electric-500/20">
                      {t('portfolio.caseStudy')} <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
