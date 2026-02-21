"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with STRONG aurora - visible on white */}
          <motion.a
            href="#"
            className="relative group z-50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              {/* ENHANCED Aurora Background - Super visible */}
              <motion.div
                className="absolute -inset-8"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.65), rgba(6, 182, 212, 0.45) 40%, transparent 70%)",
                    "radial-gradient(circle at 70% 50%, rgba(6, 182, 212, 0.65), rgba(99, 102, 241, 0.5) 40%, transparent 70%)",
                    "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.6), rgba(139, 92, 246, 0.5) 40%, transparent 70%)",
                    "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.65), rgba(16, 185, 129, 0.45) 40%, transparent 70%)",
                    "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.65), rgba(6, 182, 212, 0.45) 40%, transparent 70%)"
                  ],
                  scale: [1, 1.2, 1],
                  opacity: [0.95, 1, 0.95]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "blur(35px)" }}
              />

              {/* Extra glow layer - always visible */}
              <motion.div
                className="absolute -inset-10"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.3) 50%, transparent 70%)",
                    "radial-gradient(circle, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.3) 50%, transparent 70%)",
                    "radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(16, 185, 129, 0.3) 50%, transparent 70%)"
                  ],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ filter: "blur(45px)" }}
              />

              {/* Mega glow on hover */}
              <motion.div
                className="absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.4) 50%, transparent 70%)",
                  filter: "blur(50px)"
                }}
              />

              {/* Orbiting elements - multiple particles */}
              <motion.div
                className="absolute -inset-4 opacity-90"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2">
                  <motion.div 
                    className="w-full h-full rounded-full"
                    animate={{
                      backgroundColor: [
                        "rgba(16, 185, 129, 1)",
                        "rgba(6, 182, 212, 1)",
                        "rgba(99, 102, 241, 1)",
                        "rgba(139, 92, 246, 1)",
                        "rgba(16, 185, 129, 1)"
                      ],
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 1)",
                        "0 0 20px rgba(6, 182, 212, 1)",
                        "0 0 20px rgba(99, 102, 241, 1)",
                        "0 0 20px rgba(139, 92, 246, 1)",
                        "0 0 20px rgba(16, 185, 129, 1)"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -inset-4 opacity-90"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2">
                  <motion.div 
                    className="w-full h-full rounded-full"
                    animate={{
                      backgroundColor: [
                        "rgba(6, 182, 212, 1)",
                        "rgba(139, 92, 246, 1)",
                        "rgba(16, 185, 129, 1)",
                        "rgba(6, 182, 212, 1)"
                      ],
                      boxShadow: [
                        "0 0 15px rgba(6, 182, 212, 1)",
                        "0 0 15px rgba(139, 92, 246, 1)",
                        "0 0 15px rgba(16, 185, 129, 1)",
                        "0 0 15px rgba(6, 182, 212, 1)"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                </div>
              </motion.div>

              {/* Logo text with shadow for visibility */}
              <div className="text-2xl font-bold space-grotesk relative z-10">
                <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">AURORIQA</span>
              </div>
            </div>
          </motion.a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Language + Connect */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative glass rounded-full px-1 py-1">
              <div className="relative flex gap-1">
                <motion.button
                  onClick={() => setLanguage("CS")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
                    language === "CS"
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {language === "CS" && (
                    <motion.div
                      layoutId="language-bg"
                      className="absolute inset-0 glass bg-white/10 rounded-full border border-white/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">CS</span>
                </motion.button>
                <motion.button
                  onClick={() => setLanguage("EN")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${
                    language === "EN"
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {language === "EN" && (
                    <motion.div
                      layoutId="language-bg"
                      className="absolute inset-0 glass bg-white/10 rounded-full border border-white/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">EN</span>
                </motion.button>
              </div>
            </div>

            {/* Connect Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-modern px-6 py-2.5 font-semibold text-white"
            >
              {t('Kontakt', 'Contact')}
            </motion.a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
