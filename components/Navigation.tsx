"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const navItems = [
  { href: "#services", cs: "Služby", en: "Services" },
  { href: "#portfolio", cs: "Reference", en: "Work" },
  { href: "#process", cs: "Proces", en: "Process" },
  { href: "#faq", cs: "FAQ", en: "FAQ" },
  { href: "#contact", cs: "Kontakt", en: "Contact" },
];

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { openPopup } = useContactPopup();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-black/65 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            : "bg-black/20 border-white/[0.07] backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            aria-label="Auroriqa domů"
            className="text-lg sm:text-xl font-bold tracking-tight space-grotesk focus-ring rounded-md text-white hover:text-white/80 transition-colors duration-200"
          >
            AURORIQA
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/45 hover:text-white/85 transition-colors duration-200 focus-ring rounded-md"
              >
                {t(item.cs, item.en)}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
              {(["CS", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`h-7 min-w-9 rounded-full px-3 text-xs font-semibold transition-colors focus-ring ${
                    language === lang
                      ? "bg-white text-black"
                      : "text-white/45 hover:text-white/70"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => openPopup()}
              className="h-9 rounded-full bg-white text-black px-5 text-sm font-semibold hover:bg-white/90 transition-colors focus-ring"
            >
              {t("Nezávazná konzultace", "Free consultation")}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/15 bg-white/[0.04] text-white focus-ring"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="sm:hidden border-t border-white/[0.07] px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors focus-ring"
              >
                {t(item.cs, item.en)}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openPopup();
              }}
              className="mt-3 h-11 w-full rounded-xl bg-white text-black text-sm font-semibold focus-ring"
            >
              {t("Nezávazná konzultace", "Free consultation")}
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
