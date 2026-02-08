'use client';

import React, { useEffect, useRef, useState, Suspense, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  
  const wordsCS = useMemo(() => ['TVOŘÍME.', 'INOVUJEME.', 'DODÁVÁME.', 'EXCELUJEME.'], []);
  const wordsEN = useMemo(() => ['WE CREATE.', 'WE INNOVATE.', 'WE DELIVER.', 'WE EXCEL.'], []);
  const [words, setWords] = useState(language === 'CS' ? wordsCS : wordsEN);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Update words when language changes
  useEffect(() => {
    setWords(language === 'CS' ? wordsCS : wordsEN);
    setCurrentWordIndex(0); // Reset to first word
  }, [language, wordsCS, wordsEN]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
      style={{ y, opacity }}
    >
      {/* Background Aurora Orbs + 3D Sphere */}
      <div className="absolute inset-0">
        {/* Main 3D Glass Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotateY: 360,
              rotateX: [0, 10, 0],
            }}
            transition={{
              rotateY: { duration: 50, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glass sphere with aurora inside */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.02), transparent 50%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(40px)",
                boxShadow: `
                  inset 0 0 100px rgba(16, 185, 129, 0.1),
                  inset 0 0 50px rgba(6, 182, 212, 0.08),
                  0 0 150px rgba(16, 185, 129, 0.15),
                  0 0 100px rgba(6, 182, 212, 0.1)
                `
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Inner aurora glow */}
            <motion.div
              className="absolute inset-[10%] rounded-full blur-[60px]"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)",
                  "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
                  "radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%)",
                  "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <div className="relative w-full h-full opacity-40">
          {/* Northern Lights inspired gradient orbs - Seamless */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'radial-gradient(ellipse 600px 500px at 30% 30%, rgba(16, 185, 129, 0.2), transparent 70%)'
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{
              background: 'radial-gradient(ellipse 700px 600px at 70% 60%, rgba(59, 130, 246, 0.15), transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-60">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight space-grotesk">
            <div className="relative inline-block mb-6">
              {/* Aurora effect behind text */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                animate={{
                  background: [
                    "radial-gradient(ellipse, rgba(16, 185, 129, 0.4), transparent 70%)",
                    "radial-gradient(ellipse, rgba(6, 182, 212, 0.4), transparent 70%)",
                    "radial-gradient(ellipse, rgba(99, 102, 241, 0.35), transparent 70%)",
                    "radial-gradient(ellipse, rgba(139, 92, 246, 0.35), transparent 70%)",
                    "radial-gradient(ellipse, rgba(16, 185, 129, 0.4), transparent 70%)",
                  ],
                  scale: [1, 1.2, 1.1, 1.15, 1],
                  opacity: [0.6, 0.8, 0.7, 0.9, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ filter: "blur(40px)" }}
              />
              
              <motion.span
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block relative"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  style={{
                    textShadow: `
                      0 0 40px rgba(16, 185, 129, 0.5),
                      0 0 80px rgba(6, 182, 212, 0.3),
                      0 0 120px rgba(99, 102, 241, 0.2)
                    `
                  }}
                >
                  AURORIQA
                </span>
              </motion.span>
            </div>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-5xl md:text-7xl lg:text-8xl"
            >
              <motion.span
                key={currentWordIndex}
                initial={{ 
                  y: 30, 
                  opacity: 0, 
                  filter: "blur(20px)",
                  rotateX: -30,
                  scale: 0.9
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  filter: "blur(0px)",
                  rotateX: 0,
                  scale: 1
                }}
                exit={{ 
                  y: -30, 
                  opacity: 0, 
                  filter: "blur(20px)",
                  rotateX: 30,
                  scale: 1.1
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  {words[currentWordIndex]}
                </span>
              </motion.span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-medium">
              {t(
                'Digitální produkty, které fungují.',
                'Digital products that work.'
              )}
            </p>
            
            {/* Stats row with animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex items-center justify-center gap-8 text-sm text-white/40"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: "rgba(255,255,255,0.7)" }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>{t('50+ projektů', '50+ projects')}</span>
              </motion.div>
              <span className="text-white/20">·</span>
              <motion.div
                whileHover={{ scale: 1.1, color: "rgba(255,255,255,0.7)" }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-teal-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>{t('Dostupní 24/7', 'Available 24/7')}</span>
              </motion.div>
              <span className="text-white/20">·</span>
              <motion.div
                whileHover={{ scale: 1.1, color: "rgba(255,255,255,0.7)" }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>{t('Mezinárodní tým', 'International team')}</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-16 py-7 rounded-full text-white font-bold text-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Multi-layer animated gradient */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  backgroundSize: "300% 100%"
                }}
              />
              
              {/* Mega outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-700 -z-20" />
              
              {/* Shine overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.8 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                {t('Začít projekt', 'Start project')}
                <motion.span
                  animate={{ x: [0, 5, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-14 py-7 bg-white/[0.08] hover:bg-white/[0.15] border-2 border-white/30 hover:border-white/50 rounded-full text-white font-bold text-xl backdrop-blur-xl transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
            >
              {t('Naše práce', 'Our work')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: 0
        }}
        transition={{ 
          opacity: {
            duration: 3,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 1
          },
          y: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            y: {
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut"
            },
            scale: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 relative"
        >
          <motion.div 
            className="w-1.5 h-3 bg-gradient-to-b from-brand-blue to-brand-purple rounded-full"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              height: ['12px', '16px', '12px']
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-blue/20 to-brand-purple/20 blur-md"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;