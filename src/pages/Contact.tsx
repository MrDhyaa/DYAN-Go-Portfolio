import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const channels = [
  { icon: Mail, labelKey: 'email', value: 'hello@mrdyan.studio', href: 'mailto:hello@mrdyan.studio' },
  { icon: Phone, labelKey: 'phone', value: '+1 (555) 012-3456', href: 'tel:+15550123456' },
  { icon: MessageCircle, labelKey: 'whatsapp', value: '+1 (555) 012-3456', href: 'https://wa.me/15550123456' },
  { icon: MapPin, labelKey: 'location', value: 'Remote · Worldwide', href: '#' },
];

const projectTypes = ['branding', 'web', 'uiux', 'marketing', 'other'];

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: '', email: '', projectType: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section-pad relative py-24 pt-32 sm:py-32">
      <div className="container-narrow">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          description={t('contact.desc')}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* channels */}
          <Reveal>
            <div className="glass flex h-full flex-col gap-3 rounded-3xl p-7">
              {channels.map((c) => (
                <a
                  key={c.labelKey}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.02] p-4 transition-colors hover:border-electric-500/20 hover:bg-white/[0.04]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-300 transition-colors group-hover:bg-electric-500/20">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-300">
                      {t(`contact.channels.${c.labelKey}`)}
                    </p>
                    <p className="text-sm font-medium text-ink-100">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass flex h-full flex-col gap-5 rounded-3xl p-7">
              <FloatingField
                id="name"
                label={t('contact.name')}
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder={t('contact.namePlaceholder')}
                error={errors.name}
              />
              <FloatingField
                id="email"
                type="email"
                label={t('contact.email')}
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder={t('contact.emailPlaceholder')}
                error={errors.email}
              />

              {/* project type select */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-ink-300">
                  {t('contact.projectType')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, projectType: pt }))}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                        form.projectType === pt
                          ? 'bg-electric-500 text-white shadow-glow-sm'
                          : 'border border-white/10 bg-white/[0.03] text-ink-200 hover:text-white'
                      }`}
                    >
                      {t(`contact.projectTypes.${pt}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium uppercase tracking-wider text-ink-300">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={t('contact.messagePlaceholder')}
                  className={`resize-none rounded-2xl border bg-white/[0.02] px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-400 focus:bg-white/[0.04] ${
                    errors.message ? 'border-crimson-500/60' : 'border-white/[0.06] focus:border-electric-500/40'
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-crimson-400">{errors.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center"
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> {t('contact.sent')}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="inline-flex items-center gap-2"
                    >
                      {t('contact.send')} <Send size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="relative flex flex-col gap-2">
      <label className="text-xs font-medium uppercase tracking-wider text-ink-300">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`rounded-2xl border bg-white/[0.02] px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-400 focus:bg-white/[0.04] ${
          error ? 'border-crimson-500/60' : 'border-white/[0.06] focus:border-electric-500/40'
        }`}
      />
      {error && <span className="text-xs text-crimson-400">{error}</span>}
    </div>
  );
}
