import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Timeline from '../components/Timeline';

const pillars = [
  { icon: Target, titleKey: 'mission', textKey: 'missionText' },
  { icon: Eye, titleKey: 'vision', textKey: 'visionText' },
  { icon: Heart, titleKey: 'values', textKey: 'valuesText' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          title={
            <>
              {t('about.title').split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text-blue">
                {t('about.title').split(' ').slice(-2).join(' ')}
              </span>
            </>
          }
          description={t('about.desc')}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <h3 className="font-display text-2xl font-bold">{t('about.storyTitle')}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-200">{t('about.storyBody')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl font-bold">{t('about.whatTitle')}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-200">{t('about.whatBody')}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-display text-2xl font-bold">{t('about.whyTitle')}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-200">{t('about.whyBody')}</p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.titleKey} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass group flex gap-4 rounded-3xl p-6 transition-colors hover:border-electric-500/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-electric-500/10 text-electric-300 transition-colors group-hover:bg-electric-500/20">
                    <p.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold">{t(`about.${p.titleKey}`)}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                      {t(`about.${p.textKey}`)}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Interactive timeline (Phase 3) */}
        <Timeline />
      </div>
    </section>
  );
}
