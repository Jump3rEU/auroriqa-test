"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPost {
  slug: string;
  titleCS: string;
  titleEN: string;
  excerptCS: string;
  excerptEN: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "webovy-design-trendy-2026",
    titleCS: "Webový Design Trendy 2026",
    titleEN: "Web Design Trends 2026",
    excerptCS: "Objevte nejnovější trendy ve webovém designu pro rok 2026. Od AI-powered designu po immersive 3D experiences.",
    excerptEN: "Discover the latest trends in web design for 2026. From AI-powered design to immersive 3D experiences.",
    date: "2026-02-01",
    readTime: "8 min",
    category: "Design",
    image: "/blog/design-trends.jpg"
  },
  {
    slug: "jak-vybrat-web-agenturu",
    titleCS: "Jak Vybrat Web Agenturu",
    titleEN: "How to Choose a Web Agency",
    excerptCS: "Kompletní průvodce výběrem správné webové agentury. Zjistěte, na co se zaměřit a čemu se vyhnout.",
    excerptEN: "Complete guide to choosing the right web agency. Learn what to focus on and what to avoid.",
    date: "2026-01-28",
    readTime: "6 min",
    category: "Business",
    image: "/blog/choose-agency.jpg"
  },
  {
    slug: "optimalizace-rychlosti-webu",
    titleCS: "Optimalizace Rychlosti Webu",
    titleEN: "Website Speed Optimization",
    excerptCS: "Praktický návod jak zrychlit váš web a zlepšit uživatelskou zkušenost i SEO ranking.",
    excerptEN: "Practical guide on how to speed up your website and improve user experience and SEO ranking.",
    date: "2026-01-25",
    readTime: "10 min",
    category: "Development",
    image: "/blog/speed-optimization.jpg"
  }
];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">
              {t('Blog', 'Blog')}
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white space-grotesk mb-6">
            {t('Náš', 'Our')}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t('Blog', 'Blog')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            {t(
              'Objevte nejnovější trendy, tipy a postupy ve vývoji webu a designu',
              'Discover the latest trends, tips and practices in web development and design'
            )}
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-transparent"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-6xl"
                      >
                        📝
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={16} className="text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 space-grotesk group-hover:text-emerald-400 transition-colors">
                      {t(post.titleCS, post.titleEN)}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/60 mb-6 line-clamp-3">
                      {t(post.excerptCS, post.excerptEN)}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
                      <span>{t('Číst více', 'Read more')}</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* SEO Content - Hidden but crawlable */}
        <div className="mt-20 max-w-4xl mx-auto opacity-0 h-0 overflow-hidden" aria-hidden="true">
          <h2>Webová agentura Auroriqa - Blog</h2>
          <p>
            Přinášíme vám nejnovější trendy a postupy ve webovém vývoji, designu a digitálním marketingu.
            Naše články pokrývají témata jako React, Next.js, SEO optimalizace, UI/UX design, a mnoho dalšího.
          </p>
          <ul>
            <li>Webový design - moderní trendy a best practices</li>
            <li>Vývoj webových aplikací - React, Next.js, TypeScript</li>
            <li>SEO optimalizace - jak zlepšit viditelnost vašeho webu</li>
            <li>Performance optimization - rychlost načítání stránek</li>
            <li>UI/UX design - uživatelská zkušenost a přístupnost</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
