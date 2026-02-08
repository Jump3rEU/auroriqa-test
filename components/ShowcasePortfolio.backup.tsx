"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Sparkles, Lock, Check, ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ShowcasePortfolio() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      titleCS: "hrtly.eu",
      titleEN: "hrtly.eu",
      descriptionCS: "InteraktivnĂ­ platforma pro emocionĂˇlnĂ­ zprĂˇvy",
      descriptionEN: "Interactive platform for emotional messages",
      longDescCS: "ModernĂ­ web aplikace pro sdĂ­lenĂ­ emocĂ­ a konfesĂ­. Real-time zprĂˇvy, moderace obsahu pomocĂ­ AI, a pokroÄŤilĂ© analytickĂ© dashboardy.",
      longDescEN: "Modern web application for sharing emotions and confessions. Real-time messaging, AI-powered content moderation, and advanced analytics dashboards.",
      taglineCS: "50K+ lidĂ­ uĹľ breÄŤelo đźĄą",
      taglineEN: "50K+ people already cried đźĄą",
      status: "live" as const,
      tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      gradient: "from-pink-500 via-purple-500 to-blue-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      link: "https://hrtly.eu",
      year: "2026",
      emoji: "đź’—",
      mockupType: "browser" as const,
      stats: [
        { label: "Active Users", value: "50K+" },
        { label: "Page Speed", value: "98/100" },
        { label: "Messages", value: "2M+" }
      ],
      features: ["Real-time messaging", "AI moderation", "Analytics dashboard", "Mobile responsive"],
      featuresCS: ["Real-time zprĂˇvy", "AI moderace", "AnalytickĂ˝ dashboard", "MobilnĂ­ design"]
    },
    {
      titleCS: "Enterprise Dashboard",
      titleEN: "Enterprise Dashboard",
      descriptionCS: "Real-time analytics a projektovĂ˝ management",
      descriptionEN: "Real-time analytics and project management",
      longDescCS: "KomplexnĂ­ dashboard pro sprĂˇvu projektĹŻ s real-time daty, team collaboration, a progress tracking. Ĺ kĂˇlovatelnĂ© Ĺ™eĹˇenĂ­ pro enterprise klienty.",
      longDescEN: "Comprehensive dashboard for project management with real-time data, team collaboration, and progress tracking. Scalable solution for enterprise clients.",
      taglineCS: "Pro modernĂ­ tĂ˝my",
      taglineEN: "For modern teams",
      status: "development" as const,
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
      year: "2026",
      emoji: "đź“Š",
      mockupType: "dashboard" as const,
      stats: [
        { label: "Response Time", value: "<100ms" },
        { label: "Uptime", value: "99.9%" },
        { label: "Data Points", value: "10M+" }
      ],
      features: ["WebSocket sync", "Team collaboration", "Advanced analytics", "Cloud scalable"],
      featuresCS: ["WebSocket sync", "TĂ˝movĂˇ spoluprĂˇce", "PokroÄŤilĂˇ analytika", "Cloud ĹˇkĂˇlovĂˇnĂ­"]
    },
    {
      titleCS: "FinTech Mobile App",
      titleEN: "FinTech Mobile App",
      descriptionCS: "BezpeÄŤnĂˇ mobilnĂ­ banka s biometrikou",
      descriptionEN: "Secure mobile banking with biometrics",
      longDescCS: "NativnĂ­ mobilnĂ­ bankovnĂ­ aplikace s biometrickou autentizacĂ­, blockchain transakcemi, a AI-powered finanÄŤnĂ­m poradcem. Enterprise-grade zabezpeÄŤenĂ­.",
      longDescEN: "Native mobile banking app with biometric authentication, blockchain transactions, and AI-powered financial advisor. Enterprise-grade security.",
      taglineCS: "Banking novĂ© generace",
      taglineEN: "Next-gen banking",
      status: "development" as const,
      tech: ["React Native", "TypeScript", "Blockchain"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      year: "2026",
      emoji: "đźŹ¦",
      mockupType: "mobile" as const,
      stats: [
        { label: "Security", value: "Bank-grade" },
        { label: "Transactions", value: "500K+" },
        { label: "Rating", value: "4.9â…" }
      ],
      features: ["Biometric auth", "Blockchain secure", "AI advisor", "Offline mode"],
      featuresCS: ["BiometrickĂˇ autentizace", "Blockchain zabezpeÄŤenĂ­", "AI poradce", "Offline reĹľim"]
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      id="showcase" 
      className="py-32 md:py-48 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[150px]"
              style={{
                background: `radial-gradient(circle, ${projects[activeProject].glowColor}, transparent 70%)`
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.05), transparent 40%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.05), transparent 40%)',
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
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-medium text-white/40 tracking-[0.25em] uppercase">
                  {t('Portfolio', 'Portfolio')}
                </span>
              </motion.div>

              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold space-grotesk leading-[0.85] mb-8">
                <span className="text-white">{t('NaĹˇe', 'Our')}</span>
                <br />
                <span className="text-white/15">{t('prĂˇce', 'work')}</span>
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
                  'Projekty, kterĂ© mÄ›nĂ­ prĹŻmysl. Od MVP po enterprise Ĺ™eĹˇenĂ­.',
                  'Projects that change the industry. From MVP to enterprise solutions.'
                )}
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    3+
                  </div>
                  <div className="text-sm text-white/40">
                    {t('Live projekty', 'Live projects')}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    50K+
                  </div>
                  <div className="text-sm text-white/40">
                    {t('UĹľivatelĹŻ', 'Users')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Showcase - Split Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left - Project Selector */}
            <div className="lg:col-span-5 space-y-4">
              {projects.map((project, index) => {
                const isActive = activeProject === index;
                
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onClick={() => setActiveProject(index)}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverEnd={() => setHoveredProject(null)}
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
                          layoutId="activeProjectCard"
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `radial-gradient(circle at 0% 50%, ${project.glowColor}, transparent 70%)`
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative">
                        {/* Top row - Status & Emoji */}
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            animate={{
                              scale: isActive ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
                              project.status === 'live' 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            }`}
                          >
                            {project.status === 'live' ? (
                              <>
                                <motion.span
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  âś¨
                                </motion.span>
                                {t('Ĺ˝IVĂ‰', 'LIVE')}
                              </>
                            ) : (
                              <>
                                <Lock className="w-3 h-3" />
                                {t('VĂťVOJ', 'DEV')}
                              </>
                            )}
                          </motion.div>
                          <span className="text-4xl">{project.emoji}</span>
                        </div>

                        {/* Title & Description */}
                        <div className="mb-4">
                          <h3 className={`
                            text-2xl font-bold mb-2 transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-white/60'}
                          `}>
                            {t(project.titleCS, project.titleEN)}
                          </h3>
                          <p className={`
                            text-sm leading-relaxed transition-colors duration-300
                            ${isActive ? 'text-white/70' : 'text-white/40'}
                          `}>
                            {t(project.descriptionCS, project.descriptionEN)}
                          </p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 rounded-lg text-xs font-medium transition-colors duration-300 ${
                                isActive 
                                  ? 'bg-white/10 text-white/80' 
                                  : 'bg-white/5 text-white/40'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 text-xs text-white/40">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
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
                  key={activeProject}
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
                          `radial-gradient(circle at 50% 0%, ${projects[activeProject].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 80% 20%, ${projects[activeProject].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 20% 40%, ${projects[activeProject].glowColor}, transparent 60%)`,
                          `radial-gradient(circle at 50% 0%, ${projects[activeProject].glowColor}, transparent 60%)`,
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      style={{ filter: 'blur(40px)' }}
                    />

                    {/* Content */}
                    <div className="relative space-y-8">
                      {/* Tagline */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg text-white/60 italic">
                          {t(projects[activeProject].taglineCS, projects[activeProject].taglineEN)}
                        </p>
                      </motion.div>

                      {/* Long Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-white/80 leading-relaxed"
                      >
                        {t(projects[activeProject].longDescCS, projects[activeProject].longDescEN)}
                      </motion.p>

                      {/* Stats grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-4"
                      >
                        {projects[activeProject].stats.map((stat, idx) => (
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
                        className="space-y-3"
                      >
                        {(language === 'CS' ? projects[activeProject].featuresCS : projects[activeProject].features).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${projects[activeProject].gradient} flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/70">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        {projects[activeProject].status === 'live' ? (
                          <motion.a
                            href={projects[activeProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                              flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl
                              bg-gradient-to-r ${projects[activeProject].gradient}
                              text-white font-semibold text-lg
                              shadow-2xl shadow-black/20
                              group relative overflow-hidden
                            `}
                          >
                            <span className="relative z-10">{t('NavĹˇtĂ­vit projekt', 'Visit project')}</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="relative z-10"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.div>
                            
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
                        ) : (
                          <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                              flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl
                              bg-gradient-to-r ${projects[activeProject].gradient}
                              text-white font-semibold text-lg
                              shadow-2xl shadow-black/20
                              group relative overflow-hidden
                            `}
                          >
                            <span className="relative z-10">{t('MĂˇm podobnĂ˝ projekt', 'I have similar project')}</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="relative z-10"
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                            
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
                        )}
                      </motion.div>
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
          <p className="text-white/40 mb-8 text-lg">
            {t('MĂˇte zajĂ­mavĂ˝ projekt na mysli?', 'Have an interesting project in mind?')}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full text-white font-bold text-xl shadow-2xl group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"
            />
            <span className="relative z-10">{t('PojÄŹme tvoĹ™it', 'Let\'s create')}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
