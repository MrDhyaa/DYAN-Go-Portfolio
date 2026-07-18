import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'Graphic design, brand identity, web development, UI/UX design, and marketing design — all under one roof.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A brand identity takes 2–4 weeks; a full website takes 4–8 weeks depending on scope and complexity.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Fixed-scope project pricing with clear milestones. After a discovery call, you receive a detailed proposal with transparent costs.',
  },
  {
    q: 'Do you work with clients remotely?',
    a: 'Yes — I work with clients worldwide. Communication happens through Slack, email, and scheduled video calls.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes, I offer retainer agreements for ongoing design, development, and optimization support.',
  },
  {
    q: 'Can you work with my existing brand guidelines?',
    a: 'Absolutely. I can work within existing systems or help evolve them — whichever serves the project best.',
  },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          description={t('faq.desc')}
        />

        <div className="mt-14 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-start"
                  >
                    <span className="font-display text-base font-bold sm:text-lg">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric-500/10 text-electric-300"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-ink-200">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
