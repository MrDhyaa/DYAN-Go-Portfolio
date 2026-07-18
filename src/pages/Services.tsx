import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { services } from '../data/services';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.desc')}
        />

        <div className="mt-16 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group grid gap-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-md transition-colors hover:border-electric-500/30 lg:grid-cols-[auto_1fr_1fr] lg:items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/15 to-electric-700/10 text-electric-300 ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:shadow-glow-sm">
                  <s.icon size={28} strokeWidth={1.75} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-200 sm:text-base">
                    {s.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-300">
                    What's included
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-ink-100"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-electric-300">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
