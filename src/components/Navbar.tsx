import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const links = [
  { key: 'about', to: '/about' },
  { key: 'cv', to: '/cv' },
  { key: 'beyondWork', to: '/beyond-work' },
  { key: 'portfolio', to: '/portfolio' },
  { key: 'services', to: '/services' },
  { key: 'contact', to: '/contact' },
  { key: 'faq', to: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide section-pad flex h-16 items-center justify-between gap-4">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow-sm">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
              Mr<span className="text-electric-400">DYAN</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-ink-200 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(`nav.${l.key}`)}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link to="/contact" className="btn-primary hidden text-sm sm:inline-flex">
              {t('nav.hireMe')}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-wide section-pad flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white/[0.06] text-white'
                          : 'text-ink-100 hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {t(`nav.${l.key}`)}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/contact" className="btn-primary mt-2 w-full">
                  {t('nav.hireMe')}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
