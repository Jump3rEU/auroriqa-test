"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Rocket, Globe, Cpu } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const services = [
    {
      icon: Globe,
      titleCS: "Webové stránky",
      titleEN: "Websites",
      descriptionCS: "Od landing pages po komplexní corporate weby. Moderní design, který zaujme a prodává.",
      descriptionEN: "From landing pages to complex corporate sites. Modern design that captivates and sells.",
      color: "from-emerald-500 to-teal-500",
      number: "01",
      features: ["Responzivní design", "SEO optimalizace", "Rychlé načítání"],
      featuresEN: ["Responsive design", "SEO optimization", "Fast loading"],
    },
    {
      icon: Cpu,
      titleCS: "Webové aplikace",
      titleEN: "Web Apps",
      descriptionCS: "Komplexní SaaS platformy a interaktivní webové aplikace postavené na nejnovějších technologiích.",
      descriptionEN: "Complex SaaS platforms and interactive web applications built on latest technologies.",
      color: "from-violet-500 to-purple-500",
      number: "02",
      features: ["React/Next.js", "Real-time data", "Škálovatelnost"],
      featuresEN: ["React/Next.js", "Real-time data", "Scalability"],
    },
    {
      icon: Layers,
      titleCS: "Mobilní aplikace",
      titleEN: "Mobile Apps",
      descriptionCS: "Nativní aplikace pro iOS a Android. Plynulý výkon a skvělá uživatelská zkušenost.",
      descriptionEN: "Native apps for iOS and Android. Smooth performance and great user experience.",
      color: "from-pink-500 to-rose-500",
      number: "03",
      features: ["iOS & Android", "Push notifikace", "Offline režim"],
      featuresEN: ["iOS & Android", "Push notifications", "Offline mode"],
    },
    {
      icon: Rocket,
      titleCS: "E-commerce",
      titleEN: "E-commerce",
      descriptionCS: "Online obchody, které skutečně prodávají. Integrace plateb, administrace, analytics.",
      descriptionEN: "Online stores that actually sell. Payment integration, admin panel, analytics.",
      color: "from-amber-500 to-orange-500",
      number: "04",
      features: ["Platební brány", "Správa produktů", "Marketing tools"],
      featuresEN: ["Payment gateways", "Product management", "Marketing tools"],
    },
  ];

  return (
    <motion.section 
      ref={containerRef}
      id="services" 
      className="py-40 relative overflow-hidden"
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
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 20% 30%, rgba(59, 130, 246, 0.15), transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at 80% 70%, rgba(236, 72, 153, 0.12), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent" />
                <span className="text-sm font-medium text-emerald-400 tracking-widest uppercase">
                  {t('Služby', 'Services')}
                </span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-7xl font-bold text-white space-grotesk leading-tight mb-6"
                style={{ y }}
              >
                {t('Vytváříme digitální', 'Building digital')}
                <br />
                <span className="text-white/30">{t('zážitky', 'experiences')}</span>
              </motion.h2>

              <p className="text-xl text-white/50 leading-relaxed">
                {t(
                  'Od webu po aplikace. Komplexní řešení šitá na míru vašemu byznysu.',
                  'From websites to apps. Complete solutions tailored to your business.'
                )}
              </p>
            </div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex gap-4 text-white/40 text-sm"
            >
              <div>
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div>{t('Hlavní', 'Main')}<br />{t('služby', 'services')}</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div>{t('Dokončené', 'Completed')}<br />{t('projekty', 'projects')}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stack Cards Layout - Unique Design */}
        <div className="relative max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.titleCS}
                initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-12 last:mb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative card-modern overflow-hidden ${
                    isEven ? 'ml-0 mr-auto' : 'ml-auto mr-0'
                  }`}
                  style={{ 
                    maxWidth: isEven ? '90%' : '85%',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '40px 40px',
                    }} />
                  </div>

                  {/* Gradient Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className={`flex flex-col md:flex-row items-start gap-10 p-10 md:p-12 relative z-10 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}>
                    {/* Left Side - Number & Icon */}
                    <div className="flex-shrink-0 w-full md:w-auto">
                      {/* Large Number */}
                      <motion.div
                        className={`text-8xl md:text-9xl font-bold space-grotesk mb-6 bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-20`}
                        whileHover={{ opacity: 0.4, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.number}
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative inline-block"
                      >
                        <motion.div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center relative`}
                          animate={{
                            boxShadow: [
                              '0 8px 32px -8px rgba(16, 185, 129, 0.3)',
                              '0 8px 32px -8px rgba(16, 185, 129, 0.6)',
                              '0 8px 32px -8px rgba(16, 185, 129, 0.3)',
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className={`text-4xl md:text-5xl font-bold text-white mb-4 space-grotesk leading-tight`}>
                          {t(service.titleCS, service.titleEN)}
                        </h3>
                        <p className="text-lg text-white/60 leading-relaxed">
                          {t(service.descriptionCS, service.descriptionEN)}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {(language === 'CS' ? service.features : service.featuresEN).map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm text-white/70 hover:text-white hover:border-white/[0.15] transition-all"
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Link */}
                      <motion.div
                        className="pt-4"
                        whileHover={{ x: 5 }}
                      >
                        <a
                          href="#contact"
                          className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold group`}
                        >
                          <span>{t('Zjistit více', 'Learn more')}</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <motion.div
                    className={`absolute ${isEven ? 'top-6 right-6' : 'top-6 left-6'} w-16 h-16 opacity-10`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className={`w-full h-full border-4 border-white rounded-full`} style={{
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                    }} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Bottom Info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 card-modern p-10 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 space-grotesk">
                  {t('Máte projekt na mysli?', 'Have a project in mind?')}
                </h3>
                <p className="text-white/50 text-lg">
                  {t('Řekněte nám o něm a my vám pomůžeme ho realizovat.', 'Tell us about it and we\'ll help you bring it to life.')}
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] rounded-full text-white font-semibold transition-all group"
              >
                <span>{t('Promluvme si', 'Let\'s talk')}</span>
                <motion.span
                  className="text-emerald-400"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
