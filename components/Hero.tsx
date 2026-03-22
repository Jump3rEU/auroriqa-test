'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.16),transparent_45%),radial-gradient(ellipse_at_80%_40%,rgba(59,130,246,0.14),transparent_45%)]" />
        <div className="absolute inset-0 opacity-35">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs sm:text-sm text-white/80 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t('Pro ty, co chtějí víc než průměr · Praha', 'For brands that refuse to blend in · Prague')}
          </div>

          <h1 className="space-grotesk text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            {t('Záříte, nebo jste jen', 'Are you shining, or just')}
            <br />
            <span className="text-white/75">{t('online?', 'online?')}</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-white/72 leading-relaxed max-w-2xl">
            {t(
              'Navrhujeme a spouštíme weby, e-shopy a SaaS aplikace. 80 000+ unikátních návštěv generujeme pro klienty ročně. Prototyp vidíte do 5 dní.',
              'We design and ship websites, e-commerce and SaaS apps. 80K+ unique visits generated for clients annually. Prototype in 5 days.'
            )}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button variant="primary" size="xl" showArrow onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('Domluvit 20min call', 'Book a 20-min call')}
            </Button>
            <Button variant="secondary" size="xl" href="#portfolio">
              {t('Vidět výsledky', 'See results')}
            </Button>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {[t('80 000+ unikátních návštěv', '80K+ unique visits generated'), t('4.4 / 5 spokojenost klientů', '4.4/5 client satisfaction'), t('Cena jasná před startem', 'Price clear before start')].map((item) => (
              <div key={item} className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/85 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
