'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

const rotatingWordPairs = [
  { cs: 'online?', en: 'online?' },
  { cs: 'průměr?', en: 'average?' },
  { cs: 'jen šedí?', en: 'just grey?' },
  { cs: 'zapomenutí?', en: 'forgotten?' },
];

export default function Hero() {
  const { t } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % rotatingWordPairs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Single subtle background — reduced from 3 radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_15%,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="absolute inset-0" style={{ opacity: 0.10 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs sm:text-sm text-white/40 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            {t('Pro ty, co chtějí víc než průměr · Praha', 'For brands that refuse to blend in · Prague')}
          </motion.div>

          <h1 className="space-grotesk text-[2.75rem] sm:text-6xl lg:text-[5.25rem] font-black leading-[1.0] tracking-tight">
            <span className="text-white/45 font-light">
              {t('Záříte, nebo jste jen', 'Are you shining, or just')}
            </span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-white"
              >
                {t(rotatingWordPairs[wordIndex].cs, rotatingWordPairs[wordIndex].en)}
              </motion.span>
            </AnimatePresence>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 text-base sm:text-lg text-white/45 leading-relaxed max-w-xl"
          >
            {t(
              'Navrhujeme a spouštíme weby, e-shopy a SaaS aplikace. 80 000+ unikátních návštěv generujeme pro klienty ročně. Prototyp vidíte do 5 dní.',
              'We design and ship websites, e-commerce and SaaS apps. 80K+ unique visits generated for clients annually. Prototype in 5 days.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button variant="primary" size="xl" showArrow onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('Domluvit 20min call', 'Book a 20-min call')}
            </Button>
            <Button variant="secondary" size="xl" href="#portfolio">
              {t('Vidět výsledky', 'See results')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 max-w-xl"
          >
            {[
              t('80 000+ unikátních návštěv', '80K+ unique visits generated'),
              t('4.4 / 5 spokojenost klientů', '4.4/5 client satisfaction'),
              t('Cena jasná před startem', 'Price clear before start'),
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/35">
                {i > 0 && <span className="hidden sm:block w-px h-3 bg-white/15 shrink-0" />}
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
