import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from '../sections/Hero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { services } from '../data/services';

export default function Home() {
  const { t } = useTranslation();
  const featured = projects.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured work preview */}
      <section className="section-pad relative py-20 sm:py-28">
        <div className="container-wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow={t('home.featuredEyebrow')}
              title={t('home.featuredTitle')}
              description={t('home.featuredDesc')}
            />
            <Reveal>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                {t('home.viewAll')} <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <Link to={`/portfolio/${p.slug}`} className="group block">
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
                  >
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
                      <p className="mt-2 text-sm leading-relaxed text-ink-200">
                        {p.description}
                      </p>
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
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-pad relative bg-ink-900/40 py-20 sm:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow={t('home.servicesEyebrow')}
            title={t('home.servicesTitle')}
            description={t('home.servicesDesc')}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md transition-colors hover:border-electric-500/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/15 to-electric-700/10 text-electric-300 ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:shadow-glow-sm">
                    <s.icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200">
                    {s.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                {t('home.viewAll')} <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
