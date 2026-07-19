import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

export const LANGS = ["en", "fr", "ar"] as const;
export type Lang = (typeof LANGS)[number];

export const SUPPORTED_LANGS = LANGS;

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
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
