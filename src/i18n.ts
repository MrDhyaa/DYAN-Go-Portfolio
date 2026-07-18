import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const LANGS = ["en", "fr", "ar"] as const;
export type Lang = (typeof LANGS)[number];

const resources = {
  en: {
    translation: {
      "nav.about": "About",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "hero.name": "Yassine El Amrani",
      "hero.tagline": "Crafting digital experiences with intention and craft.",
      "hero.profession1": "Graphic Designer",
      "hero.profession2": "Web Developer",
      "hero.profession3": "Founder",
      "hero.scroll": "Scroll to explore",
      "cta.work": "View Work",
      "cta.contact": "Get in touch",
    },
  },
  fr: {
    translation: {
      "nav.about": "À propos",
      "nav.work": "Projets",
      "nav.contact": "Contact",
      "hero.name": "Yassine El Amrani",
      "hero.tagline": "Créer des expériences numériques avec intention et savoir-faire.",
      "hero.profession1": "Designer Graphique",
      "hero.profession2": "Développeur Web",
      "hero.profession3": "Fondateur",
      "hero.scroll": "Faites défiler pour explorer",
      "cta.work": "Voir les projets",
      "cta.contact": "Me contacter",
    },
  },
  ar: {
    translation: {
      "nav.about": "نبذة",
      "nav.work": "الأعمال",
      "nav.contact": "تواصل",
      "hero.name": "ياسين العمراني",
      "hero.tagline": "أصمم تجارب رقمية بنيّة وحرفية عالية.",
      "hero.profession1": "مصمم جرافيك",
      "hero.profession2": "مطور ويب",
      "hero.profession3": "مؤسس",
      "hero.scroll": "مرر للأسفل لاستكشاف المزيد",
      "cta.work": "عرض الأعمال",
      "cta.contact": "تواصل معي",
    },
  },
} as const;

const saved = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) as Lang | null;
const initialLang: Lang = saved && (LANGS as readonly string[]).includes(saved) ? saved : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Keep <html lang> and dir in sync with the active language.
function applyDocumentAttrs(lng: string) {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
  // Text direction only — no visual mirroring of icons/logos/images.
  document.documentElement.dir = dir;
}

applyDocumentAttrs(initialLang);
i18n.on("languageChanged", (lng: string) => {
  localStorage.setItem("lang", lng);
  applyDocumentAttrs(lng);
});

export default i18n;
