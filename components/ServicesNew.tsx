"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, Layers, Rocket, Sparkles, ArrowRight, Check, Zap } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesNew() {
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState<number>(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      titleCS: "Webové stránky",
      titleEN: "Websites",
      descriptionCS: "Prezentační weby, landing pages a corporate identity",
      descriptionEN: "Presentation websites, landing pages and corporate identity",
      longDescCS: "Od jednoduchých landing pages až po komplexní corporate weby s vlastním CMS. Moderní design, který osloví vaše zákazníky.",
      longDescEN: "From simple landing pages to complex corporate websites with custom CMS. Modern design that reaches your customers.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      stats: [
        { label: "Avg. load time", value: "<1s" },
        { label: "Mobile score", value: "100/100" },
        { label: "Projects", value: "50+" }
      ],
      features: ["SEO optimalizace", "Responzivní design", "CMS integrace", "Analytics"],
      featuresEN: ["SEO optimization", "Responsive design", "CMS integration", "Analytics"],
    },
    {
      icon: Cpu,
      titleCS: "Webové aplikace",
      titleEN: "Web Applications",
      descriptionCS: "SaaS platformy, dashboardy a interaktivní aplikace",
      descriptionEN: "SaaS platforms, dashboards and interactive apps",
      longDescCS: "Komplexní webové aplikace s real-time funkcionalitou. Od MVP po enterprise řešení s tisíci uživateli.",
      longDescEN: "Complex web applications with real-time functionality. From MVP to enterprise solutions with thousands of users.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      glowColor: "rgba(139, 92, 246, 0.4)",
      stats: [
        { label: "Uptime", value: "99.9%" },
        { label: "Response time", value: "<200ms" },
        { label: "Users", value: "10k+" }
      ],
      features: ["Real-time data", "Cloud hosting", "Škálovatelnost", "API integrace"],
      featuresEN: ["Real-time data", "Cloud hosting", "Scalability", "API integration"],
    },
    {
      icon: Layers,
      titleCS: "Mobilní aplikace",
      titleEN: "Mobile Apps",
      descriptionCS: "Native iOS a Android aplikace pro moderní svět",
      descriptionEN: "Native iOS and Android apps for modern world",
      longDescCS: "Nativní mobilní aplikace s perfektním výkonem. Push notifikace, offline režim a bezproblémová synchronizace.",
      longDescEN: "Native mobile apps with perfect performance. Push notifications, offline mode and seamless sync.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      stats: [
        { label: "Platforms", value: "iOS+Android" },
        { label: "Downloads", value: "100k+" },
        { label: "Rating", value: "4.8★" }
      ],
      features: ["Native performance", "Push notifikace", "Offline režim", "Biometrie"],
      featuresEN: ["Native performance", "Push notifications", "Offline mode", "Biometrics"],
    },
    {
      icon: Rocket,
      titleCS: "E-commerce",
      titleEN: "E-commerce",
      descriptionCS: "Online obchody, které skutečně prodávají",
      descriptionEN: "Online stores that actually sell",
      longDescCS: "Komplexní e-shop řešení s platebními bránami, správou skladu a marketing automation pro maximalizaci prodeje.",
      longDescEN: "Complete e-shop solution with payment gateways, inventory management and marketing automation to maximize sales.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "rgba(251, 191, 36, 0.4)",
      stats: [
        { label: "Conversion", value: "3.5%" },
        { label: "Products", value: "5000+" },
        { label: "Orders/day", value: "500+" }
      ],
      features: ["Platební brány", "Správa skladů", "Marketing tools", "Analytics"],
      featuresEN: ["Payment gateways", "Inventory mgmt", "Marketing tools", "Analytics"],
    },
  ];

  return (
    <section id="services" className="py-32 md:py-48 relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic aurora that follows active service */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
              style={{
                background: `radial-gradient(circle, ${services[activeService].glowColor}, transparent 70%)`
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.05), transparent 40%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.05), transparent 40%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="flex items-start justify-between gap-12">
            {/* Left - Headline */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-white/40 tracking-[0.25em] uppercase">
                  {t('Naše služby', 'Our services')}
                </span>
              </motion.div>

              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold space-grotesk leading-[0.85] mb-8">
                <span className="text-white">Build</span>
                <br />
                <span className="text-white/15">{t('anything', 'anything')}</span>
              </h2>
            </div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-md pt-12"
            >
              <p className="text-xl text-white/50 leading-relaxed mb-8">
                {t(
                  'Od prvního návrhu po finální launch. Děláme digitální produkty, které fungují.',
                  'From initial design to final launch. We build digital products that work.'
                )}
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    50+
                  </div>
                  <div className="text-sm text-white/40">
                    {t('Projektů', 'Projects')}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-sm text-white/40">
                    {t('Spokojenost', 'Satisfaction')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Showcase - Split Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left - Service Selector */}
            <div className="lg:col-span-5 space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;
                
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => setActiveService(index)}
                    onHoverStart={() => setHoveredService(index)}
                    onHoverEnd={() => setHoveredService(null)}
                    className="w-full text-left group relative"
                  >
                    {/* Glass card */}
                    <div className={`
                      relative p-6 md:p-8 rounded-3xl transition-all duration-500
                      ${isActive 
                        ? 'bg-white/[0.08] border-white/20' 
                        : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]'
                      }
                      border backdrop-blur-xl
                    `}>
                      {/* Active indicator aurora */}
                      {isActive && (
                        <motion.div
                          layoutId="activeService"
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `radial-gradient(circle at 0% 50%, ${service.glowColor}, transparent 70%)`
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            rotate: isActive ? 5 : 0
                          }}
                          transition={{ duration: 0.4 }}
                          className={`
                            p-3 rounded-2xl transition-all duration-300
                            ${isActive 
                              ? `bg-gradient-to-br ${service.gradient} shadow-lg` 
                              : 'bg-white/5'
                            }
                          `}
                        >
                          <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/60'}`} />
                        </motion.div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`
                              text-2xl font-bold transition-colors duration-300
                              ${isActive ? 'text-white' : 'text-white/60'}
                            `}>
                              {t(service.titleCS, service.titleEN)}
                            </h3>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-emerald-400"
                              />
                            )}
                          </div>
                          <p className={`
                            text-sm leading-relaxed transition-colors duration-300
                            ${isActive ? 'text-white/70' : 'text-white/40'}
                          `}>
                            {t(service.descriptionCS, service.descriptionEN)}
                          </p>
                        </div>

                        {/* Number badge */}
                        <motion.div
                          animate={{
                            opacity: isActive ? 1 : 0.3,
                            scale: isActive ? 1.2 : 1
                          }}
                          className="text-5xl font-bold text-white/10"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right - Showcase Details */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="sticky top-24"
                >
                  {/* Main showcase card */}
                  <div className="relative rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-12">
                    {/* Aurora glow */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          `radial-gradient(circle at 50% 0%, ${services[activeService].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 80% 20%, ${services[activeService].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 20% 40%, ${services[activeService].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 50% 0%, ${services[activeService].glowColor}, transparent 60%)`,
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      style={{ filter: 'blur(40px)' }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Large icon */}
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${services[activeService].gradient} mb-8 shadow-2xl`}
                      >
                        {React.createElement(services[activeService].icon, { className: "w-12 h-12 text-white" })}
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl text-white/80 leading-relaxed mb-8"
                      >
                        {t(services[activeService].longDescCS, services[activeService].longDescEN)}
                      </motion.p>

                      {/* Stats grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-4 mb-8"
                      >
                        {services[activeService].stats.map((stat, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm">
                            <div className="text-2xl font-bold text-white mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-white/40">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* Features list */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3 mb-8"
                      >
                        {(language === 'CS' ? services[activeService].features : services[activeService].featuresEN).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/70">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl
                          bg-gradient-to-r ${services[activeService].gradient}
                          text-white font-semibold text-lg
                          shadow-2xl shadow-black/20
                          group relative overflow-hidden
                        `}
                      >
                        <span className="relative z-10">{t('Napište nám', 'Contact us')}</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="relative z-10"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                        
                        {/* Animated shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-200%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                          style={{ width: '50%' }}
                        />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <p className="text-white/40 mb-6">
            {t('Nevíte si rady? Rádi poradíme.', 'Not sure? We\'re happy to advise.')}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 text-white/80 hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-xl"
          >
            <Zap className="w-5 h-5" />
            <span className="font-medium">{t('Rezervovat konzultaci', 'Book consultation')}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
