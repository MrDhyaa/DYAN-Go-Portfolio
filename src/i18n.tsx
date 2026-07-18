import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
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
};

const fr: Dict = {
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
};

const ar: Dict = {
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
};

const dicts: Record<Lang, Dict> = { en, fr, ar };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved as Lang) || "en";
  });

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    // Text direction only — no visual mirroring of icons/logos/images.
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: string) => dicts[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
