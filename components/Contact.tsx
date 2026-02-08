"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      id="contact" 
      className="py-32 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background - Seamless */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 700px 600px at 70% 30%, rgba(139, 92, 246, 0.15), transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 800px 650px at 30% 70%, rgba(59, 130, 246, 0.12), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Portfolio Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase">
                {t('KONTAKT / SPOJME SE', 'CONTACT / GET IN TOUCH')}
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold space-grotesk leading-[0.85] mb-8">
              <span className="text-white">{t('Připraveni', 'Ready to')}</span>
              <br />
              <span className="text-white/15">{t('začít?', 'start?')}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
              {t('Spojme síly a vytvořme něco jedinečného. Začněte svůj projekt ještě dnes.', 'Let\'s join forces and create something unique. Start your project today.')}
            </p>
          </div>
        </motion.div>

          {/* Email Display */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 flex justify-center"
          >
            <a
              href="mailto:hello@auroriqa.com"
              className="group relative inline-block"
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-100 -z-10"
                animate={{
                  background: [
                    'radial-gradient(ellipse, rgba(139, 92, 246, 0.4), transparent 70%)',
                    'radial-gradient(ellipse, rgba(59, 130, 246, 0.4), transparent 70%)',
                    'radial-gradient(ellipse, rgba(236, 72, 153, 0.4), transparent 70%)',
                    'radial-gradient(ellipse, rgba(139, 92, 246, 0.4), transparent 70%)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ filter: 'blur(60px)' }}
              />
              
              <div className="relative">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white space-grotesk tracking-tight group-hover:scale-105 transition-transform duration-300">
                  hello@auroriqa.com
                </div>
                <div className="flex items-center gap-2 justify-center text-white/40 group-hover:text-white/60 transition-colors text-sm md:text-base mt-4">
                  <Mail className="w-4 h-4" />
                  <span>{t('Napište nám', 'Email us')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:hello@auroriqa.com"
                whileHover={{ scale: 1.1, y: -6 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-20 py-8 rounded-full text-white font-bold text-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
              >
                {/* Multi-layer animated gradient */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    backgroundPosition: { duration: 3.5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)',
                    backgroundSize: '300% 100%'
                  }}
                />
                
                {/* Triple outer glow */}
                <div className="absolute -inset-5 bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-blue-500/70 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-90 transition-opacity duration-700 -z-20" />
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-300/30 via-pink-300/30 to-blue-300/30 rounded-full blur-[70px] opacity-0 group-hover:opacity-70 transition-opacity duration-1000 -z-30" />
                
                {/* Double shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-250%', '250%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }}
                  style={{
                    background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.7) 50%, transparent 80%)'
                  }}
                />
                <motion.div
                  className="absolute inset-0 opacity-40"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.5) 50deg, transparent 100deg)'
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-4">
                  {t('Začít projekt', 'Start project')}
                  <motion.div
                    animate={{ x: [0, 8, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className="absolute inset-0 bg-white/60 rounded-full blur-lg"
                    />
                    <ArrowRight className="w-7 h-7 relative z-10" />
                  </motion.div>
                </span>
              </motion.a>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="px-18 py-8 bg-white/[0.08] hover:bg-white/[0.15] border-2 border-white/30 hover:border-white/60 rounded-full text-white font-bold text-xl transition-all duration-300 backdrop-blur-xl shadow-[0_15px_50px_rgba(255,255,255,0.15)]"
              >
                {t('Naše služby', 'Our services')}
              </motion.a>
            </div>
            
            <p className="text-white/40 text-sm text-center">
              {t('Konzultace zdarma • Odpověď do 24h • NDA můžeme podepsat', 'Free consultation • Response within 24h • NDA available')}
            </p>
          </motion.div>
      </div>
    </motion.section>
  );
}
