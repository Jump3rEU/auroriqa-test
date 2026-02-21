"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Button from "@/components/Button";

export default function Contact() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold space-grotesk leading-[0.85] mb-8 px-4">
              <span className="text-white">{t('Připraveni', 'Ready to')}</span>
              <br />
              <span className="text-white/15">{t('začít?', 'start?')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl px-4">
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
              href="mailto:hello@auroriqa.cz"
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
                <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white space-grotesk tracking-tight group-hover:scale-105 transition-transform duration-300 px-4">
                  hello@auroriqa.cz
                </div>
                <div className="flex items-center gap-2 justify-center text-white/40 group-hover:text-white/60 transition-colors text-xs sm:text-sm md:text-base mt-4 px-4">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button
                variant="primary"
                size="xl"
                href="mailto:hello@auroriqa.cz"
                showArrow
                fullWidth
              >
                {t('Začít projekt', 'Start project')}
              </Button>
              
              <Button
                variant="secondary"
                size="xl"
                href="#services"
                fullWidth
              >
                {t('Naše služby', 'Our services')}
              </Button>
            </div>
            
            <p className="text-white/40 text-sm text-center">
              {t('Konzultace zdarma • Odpověď do 24h • NDA můžeme podepsat', 'Free consultation • Response within 24h • NDA available')}
            </p>
          </motion.div>
      </div>
    </motion.section>
  );
}
