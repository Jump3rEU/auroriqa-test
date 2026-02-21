"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Check, ArrowRight, Zap, Star, TrendingUp, Users, Globe, MessageSquare } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  labelCS: string;
  labelEN?: string;
  value: string;
}

interface Highlight {
  titleCS: string;
  titleEN?: string;
  descCS: string;
  descEN?: string;
}

interface Project {
  id: number;
  titleCS: string;
  categoryCS: string;
  descriptionCS: string;
  fullDescCS: string;
  status: "live" | "development";
  tech: string[];
  gradient: string;
  glowColor: string;
  link?: string;
  emoji: string;
  stats: Stat[];
  highlights: Highlight[];
}

const projects: Project[] = [
  {
    id: 1,
    titleCS: "hrtly.eu",
    categoryCS: "Web Aplikace",
    descriptionCS: "Emocionální platforma nové generace",
    fullDescCS: "Inovativní web aplikace, kde se potkávají skutečné příběhy a autentické emoce. Real-time zprávy s AI moderací, pokročilá analytika, a komunita 50 000+ aktivních uživatelů.",
    status: "live",
    tech: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "PostgreSQL"],
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glowColor: "rgba(236, 72, 153, 0.5)",
    link: "https://hrtly.eu",
    emoji: "💗",
    stats: [
      { icon: Users, labelCS: "Aktivních uživatelů", labelEN: "Active Users", value: "50K+" },
      { icon: TrendingUp, labelCS: "Růst", labelEN: "Growth", value: "+120%" },
      { icon: MessageSquare, labelCS: "Zpráv", labelEN: "Messages", value: "2M+" },
      { icon: Star, labelCS: "Hodnocení", labelEN: "Rating", value: "4.9/5" }
    ],
    highlights: [
      { titleCS: "Real-time komunikace", titleEN: "Real-time messaging", descCS: "Okamžité doručení zpráv", descEN: "Instant delivery" },
      { titleCS: "AI moderace", titleEN: "AI moderation", descCS: "Automatická kontrola obsahu", descEN: "Automatic content filtering" },
      { titleCS: "Analytika", titleEN: "Analytics", descCS: "Pokročilé sledování metrik", descEN: "Advanced metrics tracking" }
    ]
  },
  {
    id: 2,
    titleCS: "Lokální Kavárna",
    categoryCS: "Web & E-commerce", 
    descriptionCS: "Moderní web s online objednávkami",
    fullDescCS: "Elegantní web pro lokální kavárnu s online menu, možností rezervace stolů, e-shop se speciálními kávami a integrace s doručovacími službami.",
    status: "development",
    tech: ["Next.js 14", "Stripe API", "Google Maps", "Tailwind CSS", "Sanity CMS"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    emoji: "☕",
    stats: [
      { icon: Star, labelCS: "Design", labelEN: "Design", value: "Modern" },
      { icon: TrendingUp, labelCS: "Features", labelEN: "Features", value: "Full" },
      { icon: Users, labelCS: "UX", labelEN: "UX", value: "Premium" },
      { icon: Globe, labelCS: "Responsive", labelEN: "Responsive", value: "100%" }
    ],
    highlights: [
      { titleCS: "Online rezervace", titleEN: "Online booking", descCS: "Jednoduché rezervace stolů", descEN: "Easy table reservations" },
      { titleCS: "E-shop s kávami", titleEN: "Coffee e-shop", descCS: "Prodej speciálních káv", descEN: "Specialty coffee sales" },
      { titleCS: "Doručovací služba", titleEN: "Delivery service", descCS: "Integrace s doručovacími službami", descEN: "Delivery integration" }
    ]
  },
  {
    id: 3,
    titleCS: "Portfolio Studio",
    categoryCS: "Creative Web",
    descriptionCS: "Interaktivní portfolia pro kreativce",
    fullDescCS: "Špičková portfolio řešení pro designéry, fotografy a umělce. Pokročilé galerie, animace, CMS pro snadnou správu obsahu a SEO optimalizace.",
    status: "development",
    tech: ["React 18", "Three.js", "GSAP", "Contentful", "Vercel"],
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    glowColor: "rgba(147, 51, 234, 0.5)",
    emoji: "🎨",
    stats: [
      { icon: Zap, labelCS: "Rychlost", labelEN: "Speed", value: "98/100" },
      { icon: Star, labelCS: "Designů", labelEN: "Designs", value: "15+" },
      { icon: Globe, labelCS: "Šablon", labelEN: "Templates", value: "8" },
      { icon: TrendingUp, labelCS: "Konverze", labelEN: "Conversion", value: "+180%" }
    ],
    highlights: [
      { titleCS: "3D animace", titleEN: "3D animations", descCS: "WebGL & Three.js efekty", descEN: "WebGL & Three.js effects" },
      { titleCS: "CMS integrace", titleEN: "CMS integration", descCS: "Headless Contentful", descEN: "Headless Contentful" },
      { titleCS: "Mobile-first", titleEN: "Mobile-first", descCS: "Responzivní na všech zařízeních", descEN: "Responsive on all devices" }
    ]
  }
];

export default function ShowcasePortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextProject = () => {
    setDirection(1);
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 35 : -35,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.85,
      rotateY: direction < 0 ? 35 : -35,
    })
  };

  const currentProject = projects[selectedProject];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative min-h-screen flex items-start justify-center py-16 overflow-hidden scroll-snap-align-start"
      style={{ perspective: "2500px", scrollSnapType: "y mandatory" }}
    >
      {/* Dynamic Aurora Background - Smoother Transitions */}
      <AnimatePresence>
        <motion.div
          key={selectedProject}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-20 blur-3xl`}
            animate={{
              scale: [1, 1.3, 1.1, 1],
              rotate: [0, 90, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase">
                  SHOWCASE / PROJEKTY
                </span>
              </motion.div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold space-grotesk leading-[0.85] mb-4 md:mb-8">
                <span className="text-white">Naše</span>
                <br />
                <span className="text-white/15">práce</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="md:text-right"
            >
              <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-6 max-w-md">
                Od prvního designu po finální launch. Projekty, které mění pravidla hry.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    3+
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Projekty</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    2026
                  </div>
                  <div className="text-sm text-white/40 uppercase tracking-wider">Est.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Counter - Top Center */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center mb-8"
        >
          <div className="px-6 py-3 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-lg">
            <span className="text-2xl font-bold text-white">
              {selectedProject + 1}
            </span>
            <span className="text-white/40 mx-2">/</span>
            <span className="text-lg text-white/60">
              {projects.length}
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Glassmorphism Navigation Arrows — hidden on mobile, shown on xl+ */}
          <button
            onClick={prevProject}
            type="button"
            className="hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/[0.12] backdrop-blur-2xl border border-white/40 items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.18] hover:border-white/60 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextProject}
            type="button"
            className="hidden xl:flex absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/[0.12] backdrop-blur-2xl border border-white/40 items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.18] hover:border-white/60 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 35 },
                opacity: { duration: 0.15 },
                scale: { duration: 0.15 },
                rotateY: { duration: 0.2 },
              }}
              className="grid lg:grid-cols-5 gap-8 items-start"
            >
              {/* Left Side - Project Info (2 cols) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-4xl">{currentProject.emoji}</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-bold">
                    {currentProject.categoryCS}
                  </span>
                  {currentProject.status === "live" ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                      LIVE
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/30">
                      DEVELOPMENT
                    </span>
                  )}
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 }}
                  className="text-4xl md:text-5xl font-black tracking-tight"
                >
                  {currentProject.titleCS}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.09 }}
                  className="text-lg text-zinc-400 font-medium"
                >
                  {currentProject.descriptionCS}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.11 }}
                  className="text-sm text-zinc-500 leading-relaxed"
                >
                  {currentProject.fullDescCS}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {currentProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.13 }}
                >
                  {currentProject.status === "live" && currentProject.link ? (
                    <motion.a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${currentProject.gradient} font-bold text-lg shadow-lg relative overflow-hidden group`}
                    >
                      <span className="relative z-10">Navštívit projekt</span>
                      <ExternalLink className="w-5 h-5 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.a>
                  ) : (
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 font-bold text-lg transition-colors"
                    >
                      <span>Zajímá vás?</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Right Side - Stats & Highlights (3 cols) */}
              <div className="lg:col-span-3 space-y-6">
                {/* Stats Grid (2x2) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {currentProject.stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: `0 20px 60px ${currentProject.glowColor}`,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden group cursor-pointer"
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />
                        <div className="relative z-10">
                          <Icon className="w-7 h-7 mb-3 text-zinc-400" />
                          <div className="text-3xl font-black mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-zinc-500">
                            {stat.labelCS}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Highlights List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-3"
                >
                  {currentProject.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + idx * 0.02, duration: 0.2 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${currentProject.gradient} flex items-center justify-center`}
                      >
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">
                          {highlight.titleCS}
                        </div>
                        <div className="text-sm text-zinc-500">
                          {highlight.descCS}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex xl:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevProject}
            type="button"
            className="w-12 h-12 rounded-2xl bg-white/[0.12] backdrop-blur-2xl border border-white/40 flex items-center justify-center hover:bg-white/[0.18] hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextProject}
            type="button"
            className="w-12 h-12 rounded-2xl bg-white/[0.12] backdrop-blur-2xl border border-white/40 flex items-center justify-center hover:bg-white/[0.18] hover:scale-105 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Project Indicators - Below Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex justify-center items-center gap-5 mt-8"
        >
          {projects.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => {
                setDirection(idx > selectedProject ? 1 : -1);
                setSelectedProject(idx);
              }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="relative group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`text-3xl transition-all duration-300 ${
                  idx === selectedProject ? 'scale-110 grayscale-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'scale-100 grayscale opacity-50'
                }`}>
                  {project.emoji}
                </div>
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === selectedProject ? 'w-12 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'w-6 bg-white/20 group-hover:bg-white/40 group-hover:w-8'
                }`}>
                  {idx === selectedProject && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${project.glowColor}, rgba(255,255,255,0.8))`,
                        filter: 'blur(4px)'
                      }}
                    />
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
