"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Trophy, Lightbulb } from "lucide-react";

export default function FreeConcept() {
  const features = [
    {
      icon: Sparkles,
      title: "Kreativní design",
      description: "Unikátní vizuální návrh pro váš projekt",
    },
    {
      icon: Rocket,
      title: "Rychlá realizace",
      description: "Koncept do 7 pracovních dnů",
    },
    {
      icon: Trophy,
      title: "Profesionální kvalita",
      description: "Standardy průmyslových leaderů",
    },
    {
      icon: Lightbulb,
      title: "Bez závazků",
      description: "Žádné skryté poplatky nebo podmínky",
    },
  ];

  return (
    <section
      id="free-concept"
      className="py-32 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Card */}
          <div className="glass rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink opacity-10" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple mb-8"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Získejte <span className="text-gradient">Free Concept</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                Pošlete nám svůj nápad a my vám zdarma vytvoříme profesionální
                koncept vašeho projektu včetně prvotního designu a technického
                návrhu.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <feature.icon className="w-8 h-8 text-brand-purple mb-4 mx-auto" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink rounded-full text-white font-semibold shadow-lg glow-purple text-lg inline-block"
                >
                  Získat Free Concept
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
                >
                  Napište nám
                </motion.a>
              </div>

              <p className="text-sm text-white/50 mt-8">
                * Nabídka platí pro nové projekty s rozpočtem nad 50 000 Kč
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
