"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      questionCS: "Jak dlouho trvá vývoj projektu?",
      questionEN: "How long does project development take?",
      answerCS: "Závisí na složitosti projektu. Jednoduchá webová stránka trvá 2-3 týdny, komplexní webová aplikace 1-3 měsíce. První prototyp máte během týdne.",
      answerEN: "It depends on project complexity. A simple website takes 2-3 weeks, a complex web application 1-3 months. You'll have the first prototype within a week.",
    },
    {
      questionCS: "Jaké technologie používáte?",
      questionEN: "What technologies do you use?",
      answerCS: "Pracujeme s moderním stackem: React, Next.js, TypeScript, Node.js, PostgreSQL. Vždy volíme technologie podle konkrétních potřeb projektu.",
      answerEN: "We work with modern stack: React, Next.js, TypeScript, Node.js, PostgreSQL. We always choose technologies based on specific project needs.",
    },
    {
      questionCS: "Nabízíte podporu po spuštění?",
      questionEN: "Do you offer post-launch support?",
      answerCS: "Ano, poskytujeme podporu a údržbu po spuštění. První měsíc je zdarma, poté nabízíme flexibilní plány podle vašich potřeb.",
      answerEN: "Yes, we provide post-launch support and maintenance. The first month is free, then we offer flexible plans according to your needs.",
    },
    {
      questionCS: "Jak funguje komunikace během projektu?",
      questionEN: "How does communication work during the project?",
      answerCS: "Denní updates přes Slack/Discord, týdenní video cally. Máte přístup k projektovému boardu a vidíte průběh v reálném čase.",
      answerEN: "Daily updates via Slack/Discord, weekly video calls. You have access to the project board and see progress in real-time.",
    },
    {
      questionCS: "Potřebuji přesnou specifikaci předem?",
      questionEN: "Do I need exact specifications upfront?",
      answerCS: "Ne. Pomůžeme vám s definicí požadavků během discovery fáze. Stačí obecná představa o tom, co chcete dosáhnout.",
      answerEN: "No. We'll help you define requirements during the discovery phase. A general idea of what you want to achieve is enough.",
    },
    {
      questionCS: "Jaké jsou platební podmínky?",
      questionEN: "What are the payment terms?",
      answerCS: "50% při podpisu smlouvy, 50% při spuštění. U větších projektů nabízíme milníkové platby. Akceptujeme bankovní převod i krypto.",
      answerEN: "50% upon contract signing, 50% at launch. For larger projects, we offer milestone payments. We accept bank transfer and crypto.",
    },
  ];

  return (
    <motion.section 
      ref={containerRef}
      id="faq" 
      className="py-32 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Aurora - Seamless */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 700px 600px at 30% 40%, rgba(16, 185, 129, 0.15), transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 800px 650px at 70% 60%, rgba(139, 92, 246, 0.12), transparent 70%)'
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
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <Plus className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase">
                  {t('PODPORA / OTÁZKY', 'SUPPORT / QUESTIONS')}
                </span>
              </motion.div>
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold space-grotesk leading-[0.85] mb-6">
                <span className="text-white">{t('Časté', 'Common')}</span>
                <br />
                <span className="text-white/15">{t('dotazy', 'questions')}</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="md:text-right max-w-md"
            >
              <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-8">
                {t('Odpovědi na nejčastější otázky. Rychlé řešení pro vaše potřeby.', 'Answers to frequently asked questions. Quick solutions for your needs.')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    24h
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{t('Odpověď', 'Response')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">{t('Podpora', 'Support')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2, margin: "0px 0px -30px 0px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full card-modern p-8 md:p-10 text-left group relative overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-white/[0.08] border-l-4 border-l-cyan-500/50' : 'border-l-4 border-l-transparent'
                  }`}
                >
                  {/* Hover aurora effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.05), transparent 60%)',
                      filter: 'blur(20px)'
                    }}
                  />

                  {/* Active aurora effect */}
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08), transparent 60%)',
                          'radial-gradient(circle at 80% 0%, rgba(6, 182, 212, 0.08), transparent 60%)',
                          'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08), transparent 60%)'
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      style={{ filter: 'blur(20px)' }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-6 relative z-10">
                    <h3 className={`text-xl md:text-3xl font-bold space-grotesk transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-white group-hover:text-white'
                    }`}>
                      {t(faq.questionCS, faq.questionEN)}
                    </h3>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30' 
                          : 'bg-white/[0.08] group-hover:bg-white/[0.12]'
                      }`}
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/60 text-lg leading-relaxed pt-6 pr-16"
                        >
                          {t(faq.answerCS, faq.answerEN)}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - vylepšené */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <div className="relative card-modern p-10 text-center overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white space-grotesk mb-3">
                {t('Nenašli jste odpověď?', 'Didn\'t find an answer?')}
              </h3>
              <p className="text-white/50 mb-8 text-base">
                {t('Napište nám a my vám rádi odpovíme', 'Write to us and we\'ll be happy to answer')}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-4 px-14 py-6 rounded-full text-white font-bold text-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: [1, 1.06, 1]
                  }}
                  transition={{
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                    backgroundSize: '300% 100%'
                  }}
                />
                
                {/* Mega glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/60 via-blue-500/60 to-purple-500/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute -inset-7 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-purple-400/40 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700 -z-20" />
                
                {/* Shine overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.8 }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)'
                  }}
                />
                
                <span className="relative z-10">{t('Kontaktujte nás', 'Contact us')}</span>
                <motion.div
                  animate={{ x: [0, 6, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-white/50 rounded-full blur-lg"
                  />
                  <ArrowRight className="w-6 h-6 relative" />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
