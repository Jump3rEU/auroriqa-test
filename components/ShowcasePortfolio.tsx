"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featuredProject = {
  number: "01",
  title: "hrtly.eu",
  category: { cs: "Web Aplikace", en: "Web App" },
  fullDesc: {
    cs: "Inovativní web aplikace, kde se potkávají skutečné příběhy a autentické emoce. Real-time zprávy s AI moderací a komunita 50 000+ aktivních uživatelů.",
    en: "Innovative web app where real stories meet authentic emotions. Real-time messaging with AI moderation and a 50K+ active user community.",
  },
  status: "live" as const,
  link: "https://hrtly.eu",
  tech: ["Next.js 14", "TypeScript", "Framer Motion", "PostgreSQL"],
  stats: [
    { value: "50K+", label: { cs: "Aktivních uživatelů", en: "Active users" } },
    { value: "+120%", label: { cs: "Meziroční růst", en: "YoY growth" } },
    { value: "2M+", label: { cs: "Zpráv", en: "Messages" } },
    { value: "4.9/5", label: { cs: "Hodnocení", en: "Rating" } },
  ],
};

const secondaryProjects = [
  {
    number: "02",
    title: "Endoria.eu",
    category: { cs: "Minecraft Server Web", en: "Minecraft Server Web" },
    status: "live" as const,
    link: "https://endoria.eu",
    stats: [
      { value: "500+", label: { cs: "Online hráčů", en: "Online players" } },
      { value: "99.9%", label: { cs: "Uptime", en: "Uptime" } },
    ],
  },
  {
    number: "03",
    title: "Portfolio Studio",
    category: { cs: "Creative Web", en: "Creative Web" },
    status: "development" as const,
    link: undefined,
    stats: [
      { value: "+180%", label: { cs: "Konverze", en: "Conversion" } },
      { value: "98/100", label: { cs: "Rychlost", en: "Speed" } },
    ],
  },
];

export default function ShowcasePortfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-20"
        >
          <div>
            <span className="text-xs font-medium text-white/25 tracking-[0.25em] uppercase mb-4 block">
              {t("Projekty", "Projects")}
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold space-grotesk leading-[0.9]">
              <span className="text-white/30 font-light">{t("Naše", "Our")}</span>
              <br />
              <span className="text-white">{t("práce", "work")}</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-white/30 max-w-xs leading-relaxed text-right">
            {t(
              "Od konceptu po launch. Projekty, které rezonují.",
              "From concept to launch. Projects that resonate."
            )}
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 py-14">
            {/* Left: info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/20">{featuredProject.number}</span>
                <span className="text-xs font-medium text-white/20 tracking-wider uppercase">
                  {t("Flagship", "Flagship")}
                </span>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/15">
                  LIVE
                </span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-white/30 text-sm font-medium">
                  {t(featuredProject.category.cs, featuredProject.category.en)}
                </p>
              </div>

              <p className="text-white/50 text-base leading-relaxed max-w-md">
                {t(featuredProject.fullDesc.cs, featuredProject.fullDesc.en)}
              </p>

              {/* Stats — inline, not grid cards */}
              <div className="flex flex-wrap gap-8">
                {featuredProject.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-white/25 mt-0.5">
                      {t(stat.label.cs, stat.label.en)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-xs text-white/35 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200 group"
              >
                {t("Navštívit projekt", "Visit project")}
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Right: cinematic ghost title */}
            <div className="hidden lg:flex items-end justify-end pb-4">
              <div className="text-right">
                <div className="text-[8rem] xl:text-[10rem] font-black text-white/[0.03] leading-none tracking-tight select-none">
                  hrtly
                </div>
                <div className="text-white/10 text-xs tracking-[0.3em] uppercase mt-2">
                  hrtly.eu · LIVE · 2024
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 border-b border-b-white/10">
          {secondaryProjects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 space-y-5 first:md:pr-10 last:md:pl-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/20">{project.number}</span>
                {project.status === "live" ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/15">
                    LIVE
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] text-white/25 text-xs border border-white/8">
                    DEV
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-xs text-white/25 mt-1">
                  {t(project.category.cs, project.category.en)}
                </p>
              </div>

              <div className="flex gap-8">
                {project.stats.map((stat, j) => (
                  <div key={j}>
                    <div className="text-lg font-black text-white/75">{stat.value}</div>
                    <div className="text-xs text-white/25 mt-0.5">
                      {t(stat.label.cs, stat.label.en)}
                    </div>
                  </div>
                ))}
              </div>

              {project.status === "live" && project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors group"
                >
                  {project.link.replace("https://", "")}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors group"
                >
                  {t("Zjistit více", "Learn more")}
                  <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-8 flex justify-between items-center"
        >
          <span className="text-xs text-white/18">
            {t("Další projekty k dispozici na vyžádání", "More projects available on request")}
          </span>
          <a
            href="#contact"
            className="text-xs text-white/30 hover:text-white/55 transition-colors"
          >
            {t("Spolupracovat →", "Work together →")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
