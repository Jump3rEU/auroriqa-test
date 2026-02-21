"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Code2, FlaskConical, Rocket, ArrowRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "& Design",
    description: "Hluboká analýza vašeho byznysu, cílů a uživatelů. Interaktivní prototyp za 57 dní s okamžitou zpětnou vazbou.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.4)",
    accent: "text-emerald-400",
  },
  {
    number: "02",
    icon: Code2,
    title: "Rychlý",
    subtitle: "vývoj",
    description: "Agilní sprint s denními updaty a transparentní komunikací. Moderní stack, clean code a průběžné testování.",
    gradient: "from-violet-400 to-purple-500",
    glow: "rgba(139, 92, 246, 0.4)",
    accent: "text-violet-400",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Testing",
    subtitle: "& QA",
    description: "Komplexní testování na všech zařízeních a prohlížečích. Performance audit, security check a finální polish.",
    gradient: "from-pink-400 to-rose-500",
    glow: "rgba(236, 72, 153, 0.4)",
    accent: "text-pink-400",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    subtitle: "& podpora",
    description: "Bezproblémové nasazení s full monitoringem. Dokumentace, trénink týmu a dlouhodobá podpora.",
    gradient: "from-blue-400 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.4)",
    accent: "text-blue-400",
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="py-24 md:py-40 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse 700px 500px at 20% 30%, rgba(16, 185, 129, 0.12), transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse 600px 500px at 80% 70%, rgba(139, 92, 246, 0.12), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto mb-16 md:mb-24"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <Rocket className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-white/40 tracking-[0.25em] uppercase">
                  Proces / Metodologie
                </span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold space-grotesk leading-[0.85]">
                <span className="text-white">Jak</span>
                <br />
                <span className="text-white/15">pracujeme</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:max-w-sm md:pt-10"
            >
              <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-8">
                Agilní metodologie s důrazem na transparentnost, rychlost a špičkovou kvalitu. Od discovery po launch.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">4</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Fáze</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">26</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Týdnů</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-16 md:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <motion.div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  style={{ filter: "blur(1px)" }}
                />
                <div className="relative h-full p-6 sm:p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />
                  <div className={`absolute -right-2 -top-3 text-[6rem] sm:text-[7rem] font-black leading-none bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500 select-none pointer-events-none`}>
                    {step.number}
                  </div>
                  <div className="relative z-10 flex flex-col gap-5 h-full">
                    <div className="flex items-start justify-between">
                      <span className={`text-xs font-bold tracking-[0.2em] uppercase ${step.accent}`}>
                        Krok {step.number}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight space-grotesk">
                        {step.title}
                        <span className="text-white/30"> {step.subtitle}</span>
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed flex-1">
                      {step.description}
                    </p>
                    <motion.div
                      className={`h-[2px] rounded-full bg-gradient-to-r ${step.gradient}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white space-grotesk mb-4">
                Připraveni začít váš projekt?
              </h3>
              <p className="text-white/50 mb-8 text-base sm:text-lg max-w-xl mx-auto">
                Pojďme společně vytvořit něco výjimečného.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full text-white font-bold text-base sm:text-lg hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)] transition-all duration-300 group/btn"
              >
                <span>Začněme spolupracovat</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}