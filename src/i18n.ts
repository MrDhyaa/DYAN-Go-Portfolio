import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

const STORAGE_KEY = 'mrdyan_lang';
export const SUPPORTED_LANGS = ['en', 'fr', 'ar'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const getInitialLang = (): string => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && (SUPPORTED_LANGS as readonly string[]).includes(saved)) return saved;
  return 'en';
};

const initial = getInitialLang();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const applyLang = (lng: string) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lng;
  document.documentElement.dataset.lang = lng;
  document.documentElement.classList.toggle('lang-ar', lng === 'ar');
  document.documentElement.classList.toggle('lang-fr', lng === 'fr');
};
applyLang(initial);

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  applyLang(lng);
});

export default i18n;
