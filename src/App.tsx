import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Twitter, Dribbble, PenTool, Code, Rocket } from "lucide-react";
import { LANGS, type Lang } from "./i18n";

function LangSwitch() {
  const { i18n } = useTranslation();
  const current = i18n.language as Lang;
  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => i18n.changeLanguage(l)}
            className={`uppercase transition-opacity ${
              current === l ? "opacity-100" : "opacity-40 hover:opacity-80"
            }`}
          >
            {l}
          </button>
          {i < LANGS.length - 1 && <span className="mx-2 opacity-30">/</span>}
        </span>
      ))}
    </div>
  );
}

const professions = [
  { key: "hero.profession1", Icon: PenTool },
  { key: "hero.profession2", Icon: Code },
  { key: "hero.profession3", Icon: Rocket },
];

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f5f7] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0a0a0b]/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">Y<span className="text-white/40">.</span></div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">{t("nav.about")}</a>
            <a href="#work" className="hover:text-white transition">{t("nav.work")}</a>
            <a href="#contact" className="hover:text-white transition">{t("nav.contact")}</a>
          </div>
          <LangSwitch />
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
            Portfolio · 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {t("hero.name")}
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            {t("hero.tagline")}
          </p>

          {/* Profession items — icons + separators preserved, only text translates */}
          <div className="flex items-center justify-center gap-4 text-sm text-white/70 mb-12">
            {professions.map((p, i) => (
              <span key={p.key} className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <p.Icon size={16} className="text-white/50" />
                  <span className="font-medium">{t(p.key)}</span>
                </span>
                {i < professions.length - 1 && (
                  <span className="text-white/20">·</span>
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
            >
              {t("cta.work")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/15 text-sm font-medium hover:bg-white/5 transition"
            >
              {t("cta.contact")}
            </a>
          </div>
        </motion.div>

        {/* Social icons — never mirrored */}
        <div className="absolute bottom-28 flex items-center gap-5 text-white/50" style={{ direction: "ltr" }}>
          <a href="#" aria-label="GitHub" className="hover:text-white transition"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={18} /></a>
          <a href="#" aria-label="Dribbble" className="hover:text-white transition"><Dribbble size={18} /></a>
        </div>

        {/* Scroll indicator — elegant mouse with float + soft glow */}
        <div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ direction: "ltr" }}
        >
          <div className="scroll-float">
            <div className="scroll-glow w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2">
              <span className="scroll-dot block w-1 h-1 rounded-full bg-white" />
            </div>
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
            {t("hero.scroll")}
          </span>
        </div>
      </header>

      {/* Placeholder sections so anchors resolve */}
      <section id="about" className="min-h-screen" />
      <section id="work" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </div>
  );
}
