import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, Languages as LangIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { experiences, education } from '../data/experience';
import { skillCategories, languages, certificates } from '../data/skills';

export default function CV() {
  const { t } = useTranslation();

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('cv.eyebrow')}
          title={t('cv.title')}
          description={t('cv.desc')}
        />

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a href="/cv.pdf" download className="btn-primary">
              <Download size={16} /> {t('cv.download')}
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Experience */}
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-electric-300" />
                <h2 className="font-display text-xl font-bold">{t('cv.experience')}</h2>
              </div>
              <div className="mt-6 space-y-6">
                {experiences.map((e) => (
                  <div key={e.role + e.company} className="border-s border-white/10 ps-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-electric-300">
                      {e.period}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold">{e.role}</h3>
                    <p className="text-sm text-ink-300">{e.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-200">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-electric-300" />
                <h2 className="font-display text-xl font-bold">{t('cv.education')}</h2>
              </div>
              <div className="mt-6 space-y-6">
                {education.map((e) => (
                  <div key={e.degree + e.school} className="border-s border-white/10 ps-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-electric-300">
                      {e.period}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold">{e.degree}</h3>
                    <p className="text-sm text-ink-300">{e.school}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-200">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.08}>
              <div className="glass h-full rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                  {cat.name}
                </h3>
                <div className="mt-6 space-y-5">
                  {cat.skills.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-ink-100">{s.name}</span>
                        <span className="font-mono text-xs text-electric-300">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-300 shadow-glow-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages + Certificates */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <LangIcon className="h-5 w-5 text-electric-300" />
                <h2 className="font-display text-xl font-bold">{t('cv.languages')}</h2>
              </div>
              <div className="mt-6 space-y-5">
                {languages.map((l, i) => (
                  <div key={l.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-100">{l.name}</span>
                      <span className="text-xs text-ink-300">{l.level}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.percent}%` }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-electric-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-7">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-electric-300" />
                <h2 className="font-display text-xl font-bold">{t('cv.certificates')}</h2>
              </div>
              <div className="mt-6 space-y-3">
                {certificates.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.04] bg-white/[0.02] p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink-100">{c.name}</p>
                      <p className="text-xs text-ink-300">{c.issuer}</p>
                    </div>
                    <span className="font-mono text-xs text-electric-300">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
