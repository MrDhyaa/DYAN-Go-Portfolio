import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGS, type Lang } from '../i18n';

interface LangMeta {
  code: Lang;
  label: string;
  flag: string;
}

const LANGS: LangMeta[] = [
  { code: 'ar', label: 'العربية', flag: '🇩🇿' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<Lang | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find((l) => l.code === i18n.language) ?? LANGS[2];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const change = (code: Lang) => {
    if (code === i18n.language) {
      setOpen(false);
      return;
    }
    setPending(code);
    setOpen(false);
    // smooth transition — let pending flag fade content, then switch
    window.setTimeout(() => {
      i18n.changeLanguage(code);
      setPending(null);
    }, 220);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-ink-100 backdrop-blur-md transition-all hover:border-electric-500/30 hover:bg-white/[0.06]"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown
          size={12}
          className={`text-ink-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute end-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-1.5 shadow-soft-lg backdrop-blur-xl"
          >
            {LANGS.map((l) => {
              const active = l.code === current.code;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => change(l.code)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                      active
                        ? 'bg-electric-500/15 text-electric-200'
                        : 'text-ink-100 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    <span className="text-lg leading-none">{l.flag}</span>
                    <span className="flex-1 text-start font-medium">{l.label}</span>
                    {active && (
                      <Check size={14} className="text-electric-300" />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* smooth content transition overlay */}
      <AnimatePresence>
        {pending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed inset-0 z-[60] bg-ink-950/20 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export { SUPPORTED_LANGS };
