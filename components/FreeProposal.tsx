"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Clock, MessageSquare, Shield, ArrowRight, CheckCircle2, Zap, Target } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FreeProposal() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const benefits = [
    {
      icon: Sparkles,
      titleCS: "Moderní technologie",
      titleEN: "Modern Tech",
      descriptionCS: "React, Next.js, Node.js a nejnovější nástroje",
      descriptionEN: "React, Next.js, Node.js and latest tools",
      color: "from-emerald-400 to-cyan-500"
    },
    {
      icon: Clock,
      titleCS: "Rychlé dodání",
      titleEN: "Fast Delivery",
      descriptionCS: "První prototyp za 2-3 týdny",
      descriptionEN: "First prototype in 2-3 weeks",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: MessageSquare,
      titleCS: "Přímá komunikace",
      titleEN: "Direct Contact",
      descriptionCS: "Denní updates a transparentnost",
      descriptionEN: "Daily updates and transparency",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Shield,
      titleCS: "Kvalita garantována",
      titleEN: "Quality Guaranteed",
      descriptionCS: "100% spokojenost nebo vrácení peněz",
      descriptionEN: "100% satisfaction or money back",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
      style={{ opacity }}
    >
      {/* Gradient Background Transition - Seamless from dark to white with aurora */}
      <div className="absolute inset-0">
        {/* Top dark gradient blending */}
        <div className="absolute top-0 left-0 right-0 h-64 md:h-80 bg-gradient-to-b from-slate-950 via-slate-900/70 via-slate-800/40 via-slate-700/20 to-white z-10" />
        
        {/* Main white background */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Bottom dark gradient blending */}
        <div className="absolute bottom-0 left-0 right-0 h-64 md:h-80 bg-gradient-to-t from-slate-950 via-slate-900/70 via-slate-800/40 via-slate-700/20 to-white z-10" />
        
        {/* Aurora effects on white - subtle and elegant */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'radial-gradient(ellipse 900px 700px at 20% 30%, rgba(16, 185, 129, 0.12), transparent 65%)'
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              background: 'radial-gradient(ellipse 1000px 800px at 80% 70%, rgba(59, 130, 246, 0.1), transparent 65%)'
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(139, 92, 246, 0.08), transparent 65%)'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 backdrop-blur-sm shadow-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
              </motion.div>
              <span className="text-sm md:text-base lg:text-lg font-bold text-emerald-700 tracking-widest uppercase">
                {t('ZDARMA NÁVRH', 'FREE PROPOSAL')}
              </span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold space-grotesk leading-tight mb-6 md:mb-10 px-4">
            <motion.span 
              className="text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('Postaveno', 'Built for')}
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('pro budoucnost', 'the future')}
            </motion.span>
          </h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('Získejte profesionální návrh zdarma. Bez závazků. Odpověď do 24h.', 'Get a professional proposal free. No obligations. Response within 24h.')}
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-20"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.titleCS}
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-6 sm:p-8 lg:p-10 text-center rounded-2xl sm:rounded-3xl bg-white border-2 border-gray-200/80 hover:border-emerald-300/80 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-2xl sm:rounded-3xl`} />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 rounded-2xl sm:rounded-3xl overflow-hidden"
                  animate={{
                    backgroundPosition: ["-200% -200%", "200% 200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative inline-flex w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${benefit.color} rounded-xl sm:rounded-2xl items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 space-grotesk">
                  {t(benefit.titleCS, benefit.titleEN)}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  {t(benefit.descriptionCS, benefit.descriptionEN)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          {/* CTA Title */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 space-grotesk leading-tight px-4">
            {t('Připraveni začít?', 'Ready to start?')}
          </h3>
          
          {/* CTA Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            {t('Jeden krok k vašemu novému projektu. Kontaktujeme vás do 24h.', 'One step to your new project. We contact you within 24h.')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4">
            {/* Primary CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),0_0_80px_rgba(16,185,129,0.3)] transition-all duration-500"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 via-blue-500 to-emerald-500"
                style={{ backgroundSize: "200% 100%" }}
              />
              
              {/* Outer glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/40 via-cyan-400/40 to-blue-400/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.6) 50%, transparent 80%)',
                }}
              />
              
              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-3 text-white drop-shadow-lg">
                {t('Získat návrh zdarma', 'Get free proposal')}
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </span>
            </motion.a>

            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-3 px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-lg"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
              </motion.div>
              <span className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg whitespace-nowrap">
                {t('Bez závazků • Rychlá odpověď', 'No obligations • Fast response')}
              </span>
            </motion.div>
          </div>

          {/* Additional features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: Target, textCS: "Přesně na míru", textEN: "Perfectly tailored" },
              { icon: Zap, textCS: "Rychlá realizace", textEN: "Fast execution" },
              { icon: Shield, textCS: "100% záruka", textEN: "100% guarantee" },
              { icon: CheckCircle2, textCS: "Spokojenost zaručena", textEN: "Satisfaction guaranteed" }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 sm:gap-3 justify-center"
                >
                  <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{t(item.textCS, item.textEN)}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
