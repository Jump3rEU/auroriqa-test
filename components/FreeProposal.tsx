"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Clock, MessageSquare, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FreeProposal() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const benefits = [
    {
      icon: Sparkles,
      titleCS: "Moderní technologie",
      titleEN: "Modern Tech",
      descriptionCS: "React, Next.js, Node.js",
      descriptionEN: "React, Next.js, Node.js",
      color: "from-brand-blue to-brand-purple"
    },
    {
      icon: Clock,
      titleCS: "Rychlé dodání",
      titleEN: "Fast Delivery",
      descriptionCS: "První prototyp za 2-3 týdny",
      descriptionEN: "First prototype in 2-3 weeks",
      color: "from-brand-purple to-brand-pink"
    },
    {
      icon: MessageSquare,
      titleCS: "Přímá komunikace",
      titleEN: "Direct Contact",
      descriptionCS: "Denní updates a transparentnost",
      descriptionEN: "Daily updates and transparency",
      color: "from-brand-pink to-brand-blue"
    },
    {
      icon: Shield,
      titleCS: "Kvalita garantována",
      titleEN: "Quality Guaranteed",
      descriptionCS: "100% spokojenost",
      descriptionEN: "100% satisfaction",
      color: "from-brand-green to-brand-blue"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="relative overflow-hidden h-screen flex items-center p-0"
      style={{ opacity }}
    >
      {/* Aurora background - Seamless */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 600px 500px at 60% 30%, rgba(34, 197, 94, 0.08), transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 650px 550px at 40% 70%, rgba(59, 130, 246, 0.06), transparent 70%)'
          }}
        />
      </div>

      {/* Fullscreen White Inset Card - NO MARGIN */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
      >
        {/* White card - TRUE FULLSCREEN with padding inside */}
        <div className="relative w-full h-full rounded-none overflow-hidden py-16 px-8 md:py-20 md:px-16 lg:py-24 lg:px-20 bg-white flex flex-col justify-center">
          {/* EXTREME inset shadow overlay */}
          <div className="absolute inset-0 shadow-[inset_0_50px_180px_rgba(0,0,0,0.35),inset_0_-50px_180px_rgba(0,0,0,0.3),inset_0_0_150px_rgba(0,0,0,0.22)]" />
          
          {/* STRONG aurora glow inside - MORE VISIBLE */}
          <div className="absolute inset-0 opacity-100">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 60, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 1000px 800px at 15% 25%, rgba(34, 197, 94, 0.18), transparent 60%)'
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                x: [0, -60, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 1100px 900px at 85% 75%, rgba(59, 130, 246, 0.15), transparent 60%)'
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6,
              }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 900px 700px at 50% 50%, rgba(139, 92, 246, 0.12), transparent 60%)'
              }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 9,
              }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 800px 600px at 70% 40%, rgba(236, 72, 153, 0.1), transparent 60%)'
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-24 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-12"
              >
                <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/40 backdrop-blur-sm shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                  <span className="text-lg md:text-xl font-bold text-emerald-700 tracking-[0.25em] uppercase">
                    {t('ZDARMA NÁVRH', 'FREE PROPOSAL')}
                  </span>
                </div>
              </motion.div>
              
              <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-bold space-grotesk leading-[0.85] mb-12">
                <motion.span 
                  className="text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {t('Postaveno', 'Built for')}
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {t('pro budoucnost', 'the future')}
                </motion.span>
              </h2>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t('Získejte profesionální návrh zdarma. Bez závazků. Odpověď do 24h.', 'Get a professional proposal free. No obligations. Response within 24h.')}
              </motion.p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.titleCS}
                      initial={{ scale: 0.9, opacity: 0, y: 50 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5 + index * 0.15,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                      }}
                      whileHover={{ y: -16, scale: 1.08, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="group relative p-14 text-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/90 via-white/80 to-gray-50/90 backdrop-blur-xl border-2 border-gray-200/60 hover:border-emerald-300/80 shadow-[0_10px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.3),0_0_120px_rgba(34,197,94,0.25)] transition-all duration-700"
                    >
                      {/* Multi-layer glow effects */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 scale-150`} />
                      <div className={`absolute inset-0 bg-gradient-to-tl ${benefit.color} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-1000`} />
                      
                      {/* Enhanced shine sweep */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-50"
                        animate={{
                          backgroundPosition: ["-200% -200%", "200% 200%"],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          background: 'linear-gradient(45deg, transparent 20%, rgba(255, 255, 255, 0.9) 50%, transparent 80%)',
                          backgroundSize: '300% 300%',
                        }}
                      />
                      
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.25 }}
                        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                        className={`relative inline-flex w-28 h-28 bg-gradient-to-br ${benefit.color} rounded-[2rem] items-center justify-center mb-10 shadow-[0_15px_60px_rgba(0,0,0,0.4)] group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.5)] transition-all duration-700`}
                      >
                        {/* Icon pulsing inner glow */}
                        <motion.div
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-white/40 blur-xl"
                        />
                        <Icon className="w-14 h-14 text-white relative z-10 drop-shadow-2xl" />
                      </motion.div>
                      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 mb-5 space-grotesk group-hover:from-gray-950 group-hover:to-gray-800 transition-all">
                        {t(benefit.titleCS, benefit.titleEN)}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-xl font-medium leading-relaxed">
                        {t(benefit.descriptionCS, benefit.descriptionEN)}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

          {/* CTA - ULTIMATE BUTTON */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 mb-10 space-grotesk leading-tight">
              {t('Připraveni začít?', 'Ready to start?')}
            </h3>
            <p className="text-3xl md:text-4xl text-gray-700 mb-20 max-w-5xl mx-auto leading-relaxed font-light">
              {t('Jeden krok k vašemu novému projektu. Kontaktujeme vás do 24h.', 'One step to your new project. We contact you within 24h.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.12, y: -8 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative px-20 py-10 rounded-full font-bold text-3xl md:text-4xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.35)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.45),0_0_120px_rgba(34,197,94,0.35)] transition-all duration-700"
              >
                {/* Multi-layer animated gradient */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 via-blue-500 to-emerald-500"
                  style={{ backgroundSize: "300% 100%" }}
                />
                
                {/* Mega outer glow - Multi-layer */}
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/70 via-cyan-400/70 via-blue-400/70 to-emerald-400/70 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <div className="absolute -inset-10 bg-gradient-to-r from-emerald-300/50 via-cyan-300/50 to-blue-300/50 rounded-full blur-[80px] opacity-0 group-hover:opacity-90 transition-opacity duration-1000 -z-20" />
                
                {/* Double shine overlays */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-300%", "300%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.7) 50%, transparent 80%)',
                  }}
                />
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.6) 60deg, transparent 120deg)',
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-5 text-white drop-shadow-2xl">
                  {t('Získat návrh zdarma', 'Get free proposal')}
                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    {/* Arrow glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-white/50 rounded-full blur-xl"
                    />
                    <ArrowRight className="w-10 h-10 relative z-10" />
                  </motion.div>
                </span>
              </motion.a>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="relative flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-gray-50/95 to-gray-100/95 backdrop-blur-xl border-2 border-gray-200/70 shadow-xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <span className="font-bold text-gray-800 text-xl">{t('Bez závazků • Rychlá odpověď', 'No obligations • Fast response')}</span>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
