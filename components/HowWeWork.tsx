"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code, TestTube, Rocket, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowWeWork() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      icon: Zap,
      titleCS: "Discovery & Design",
      titleEN: "Discovery & Design",
      descriptionCS: "Hluboká analýza vašeho byznysu, cílů a uživatelů. Vytvoříme interaktivní prototyp během 5-7 dnů s možností okamžité zpětné vazby.",
      descriptionEN: "Deep analysis of your business, goals and users. We create interactive prototype in 5-7 days with instant feedback loop.",
      color: "from-brand-blue to-brand-purple",
      delay: 0,
    },
    {
      icon: Code,
      titleCS: "Rychlý vývoj",
      titleEN: "Fast Development",
      descriptionCS: "Agilní sprint s daily updates a transparentní komunikací. Moderní technologie, clean code a průběžné testování kvality.",
      descriptionEN: "Agile sprint with daily updates and transparent communication. Modern tech stack, clean code and continuous quality testing.",
      color: "from-brand-purple to-brand-pink",
      delay: 0.15,
    },
    {
      icon: TestTube,
      titleCS: "Testing & QA",
      titleEN: "Testing & QA",
      descriptionCS: "Komplexní testování na všech zařízeních a prohlížečích. Performance optimalizace, security audit a finální polish.",
      descriptionEN: "Comprehensive testing on all devices and browsers. Performance optimization, security audit and final polish.",
      color: "from-brand-pink to-brand-blue",
      delay: 0.3,
    },
    {
      icon: Rocket,
      titleCS: "Launch & Podpora",
      titleEN: "Launch & Support",
      descriptionCS: "Bezproblémové nasazení do produkce s full monitoringem. Poskytujeme dokumentaci, trénink týmu a dlouhodobou podporu.",
      descriptionEN: "Seamless production deployment with full monitoring. We provide documentation, team training and long-term support.",
      color: "from-brand-green to-brand-blue",
      delay: 0.45,
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="py-32 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Aurora gradient background - Seamless */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at 30% 20%, rgba(16, 185, 129, 0.15), transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 70% 80%, rgba(139, 92, 246, 0.15), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Portfolio Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-24"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase">
                  {t('PROCES / METODOLOGIE', 'PROCESS / METHODOLOGY')}
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] font-bold space-grotesk leading-[0.85] mb-6 px-4">
                <span className="text-white">{t('Jak', 'How')}</span>
                <br />
                <span className="text-white/15">{t('pracujeme', 'we work')}</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="md:text-right max-w-md"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed mb-8 px-4">
                {t('Agilní metodologie s důrazem na transparentnost, rychlost a špičkovou kvalitu. Od discovery po launch.', 'Agile methodology focused on transparency, speed and top quality. From discovery to launch.')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    4
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{t('Fáze', 'Phases')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    2-6
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{t('Týdnů', 'Weeks')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-brand-blue via-brand-purple to-brand-green opacity-30"
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeStep === index;
            
            return (
              <motion.div
                key={step.titleCS}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onClick={() => setActiveStep(index)}
                className="relative mb-20 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative w-full md:w-[calc(50%-3rem)] cursor-pointer"
                  >
                    <div className="relative card-modern p-10 overflow-hidden border-l-4 border-l-transparent group-hover:border-l-white/30 transition-all duration-300">
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start gap-5 mb-5">
                          <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <span
                              className="text-xs font-bold text-white/40 tracking-[0.15em] uppercase mb-2 block"
                              style={{ fontFamily: 'var(--font-space-grotesk)' }}
                            >
                              {t('Krok', 'Step')} {index + 1}
                            </span>
                            <h3 className="text-3xl font-bold text-white space-grotesk group-hover:text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text transition-all duration-300">
                              {t(step.titleCS, step.titleEN)}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-base text-white/50 group-hover:text-white/70 transition-colors duration-200 leading-relaxed pl-[84px]">
                          {t(step.descriptionCS, step.descriptionEN)}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className="relative flex-shrink-0 w-6 h-6 hidden md:flex"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? [1, 1.3, 1] : 1,
                        boxShadow: isActive 
                          ? [
                              '0 0 0 0 rgba(16, 185, 129, 0.7)',
                              '0 0 0 12px rgba(16, 185, 129, 0)',
                              '0 0 0 0 rgba(16, 185, 129, 0.7)',
                            ]
                          : '0 0 0 0 rgba(16, 185, 129, 0.4)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} border-4 border-[#0a0a0f]`}
                    />
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Vylepšený */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="relative card-modern p-12 text-center overflow-hidden group">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 mb-6"
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white space-grotesk mb-4">
                {t('Připraveni začít váš projekt?', 'Ready to start your project?')}
              </h3>
              
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                {t('Pojďme společně vytvořit něco výjimečného', 'Let\'s create something exceptional together')}
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full text-white font-bold text-xl hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)] transition-all duration-300 group/btn"
              >
                <span>{t('Začněme spolupracovat', 'Let\'s work together')}</span>
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
