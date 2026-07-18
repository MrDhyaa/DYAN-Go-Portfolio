import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Dribbble, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const socials = [
  { icon: Twitter, href: 'https://x.com', label: 'X / Twitter' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const navLinks = [
  { key: 'about', to: '/about' },
  { key: 'cv', to: '/cv' },
  { key: 'beyondWork', to: '/beyond-work' },
  { key: 'portfolio', to: '/portfolio' },
  { key: 'services', to: '/services' },
  { key: 'contact', to: '/contact' },
  { key: 'faq', to: '/faq' },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="section-pad relative border-t border-white/[0.06] py-12">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow-sm">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
                Mr<span className="text-electric-400">DYAN</span>
              </span>
            </Link>

            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs font-medium text-ink-300 transition-colors hover:text-white"
                >
                  {t(`nav.${l.key}`)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-ink-200 transition-all hover:border-electric-500/30 hover:text-electric-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 text-center sm:flex-row sm:text-start">
            <p className="text-xs text-ink-400">
              © {new Date().getFullYear()} MrDYAN. {t('footer.rights')}
            </p>
            <p className="text-xs text-ink-400">{t('footer.madeWith')}</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-300 transition-colors hover:text-white"
            >
              {t('footer.backToTop')} <ArrowUp size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
