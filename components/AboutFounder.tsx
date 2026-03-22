"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutFounder() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 500px at 80% 50%, rgba(139, 92, 246, 0.07), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — founder avatar + quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Founder monogram */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                {/* Outer aurora glow */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-[2rem] opacity-50"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(16,185,129,0.6), rgba(6,182,212,0.3), rgba(139,92,246,0.15), rgba(16,185,129,0.6))",
                    filter: "blur(16px)",
                  }}
                />
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-950/70 via-teal-950/50 to-black/80 border border-emerald-500/25 flex items-center justify-center overflow-hidden relative">
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "44px 44px",
                    }}
                  />
                  {/* Rotating decorative rings */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-10 rounded-full border border-emerald-400/20"
                  />
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[4.5rem] rounded-full border border-teal-400/15"
                  />
                  {/* Bottom gradient wash */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                  {/* Monogram */}
                  <span
                    className="relative z-10 text-[9rem] font-black space-grotesk select-none leading-none"
                    style={{
                      background: "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(52,211,153,0.6) 60%, rgba(255,255,255,0.2) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    S
                  </span>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-5 py-3 shadow-xl"
                >
                  <div className="text-white font-semibold text-sm">Svjéťa</div>
                  <div className="text-white/40 text-xs">
                    {t("Zakladatel & lead developer", "Founder & lead developer")}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-emerald-400" />
                  <span className="text-xs font-medium text-white/40 tracking-[0.25em] uppercase">
                    {t("Příběh / Zakladatel", "Story / Founder")}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold space-grotesk leading-[0.9] mb-6">
                  <span className="text-white">{t("Jmenuji se Svjéťa", "My name is Svjéťa")}</span>
                  <br />
                  <span className="text-white/20">{t("a tohle je Auroriqa", "and this is Auroriqa")}</span>
                </h2>
              </div>

              <div className="space-y-5 text-white/60 leading-relaxed">
                <p className="text-lg">
                  {t(
                    "Auroriqu jsem začal stavět, protože mě unavovalo sledovat, jak české firmy platí za weby, které nevydělávají, nenačtou se do 3 sekund a vypadají jako šablona z roku 2018.",
                    "I started building Auroriqa because I was tired of watching Czech businesses pay for websites that don't convert, take 3+ seconds to load, and look like a 2018 template."
                  )}
                </p>
                <p>
                  {t(
                    "Každý projekt beru jako vlastní produkt — ne jako řádek v tabulce. Jsem ten člověk, který bude na Slacku večer před spuštěním, když se něco pokazí.",
                    "I treat every project like my own product — not a line item in a spreadsheet. I'm the person on Slack the night before launch if something breaks."
                  )}
                </p>
                <p>
                  {t(
                    "Za Auroriqa jsem já. Neposílám juniorní vývojáře, nekomunikuju přes project managery. Přímá linka, přímá odpovědnost.",
                    "Auroriqa is me. I don't hand you off to junior devs or route everything through a PM. Direct line, direct accountability."
                  )}
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
              >
                <span>{t("Napište mi přímo", "Message me directly")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
