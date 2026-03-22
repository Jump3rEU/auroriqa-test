"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutFounder() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
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
              {/* Avatar placeholder */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent border border-white/[0.08] flex items-center justify-center overflow-hidden relative">
                  {/* Animated background */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15), rgba(139,92,246,0.1), rgba(16,185,129,0.3))",
                    }}
                  />
                  {/* Initials */}
                  <span className="relative z-10 text-7xl font-black text-white/20 space-grotesk select-none">
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
