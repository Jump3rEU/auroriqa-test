"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPost {
  titleCS: string;
  titleEN: string;
  date: string;
  readTime: string;
  category: string;
  contentCS: string;
  contentEN: string;
}

// Temporary mock data - v produkci načtěte z CMS nebo databáze
const blogContent: Record<string, BlogPost> = {
  "webovy-design-trendy-2026": {
    titleCS: "Webový Design Trendy 2026",
    titleEN: "Web Design Trends 2026",
    date: "2026-02-01",
    readTime: "8 min",
    category: "Design",
    contentCS: `
      <h2>Nejnovější trendy ve webovém designu</h2>
      <p>Rok 2026 přináší revoluční změny ve světě webového designu...</p>
      <h3>1. AI-Powered Design</h3>
      <p>Umělá inteligence mění způsob, jakým tvoříme webové stránky...</p>
    `,
    contentEN: `
      <h2>Latest trends in web design</h2>
      <p>The year 2026 brings revolutionary changes to the world of web design...</p>
      <h3>1. AI-Powered Design</h3>
      <p>Artificial intelligence is changing the way we create websites...</p>
    `,
  },
  "jak-vybrat-web-agenturu": {
    titleCS: "Jak Vybrat Web Agenturu",
    titleEN: "How to Choose a Web Agency",
    date: "2026-01-28",
    readTime: "6 min",
    category: "Business",
    contentCS: `
      <h2>Kompletní průvodce výběrem webové agentury</h2>
      <p>Výběr správné webové agentury je klíčové rozhodnutí...</p>
    `,
    contentEN: `
      <h2>Complete guide to choosing a web agency</h2>
      <p>Choosing the right web agency is a key decision...</p>
    `,
  },
  "optimalizace-rychlosti-webu": {
    titleCS: "Optimalizace Rychlosti Webu",
    titleEN: "Website Speed Optimization",
    date: "2026-01-25",
    readTime: "10 min",
    category: "Development",
    contentCS: `
      <h2>Jak zrychlit váš web</h2>
      <p>Rychlost webu je kritickým faktorem pro úspěch...</p>
    `,
    contentEN: `
      <h2>How to speed up your website</h2>
      <p>Website speed is a critical factor for success...</p>
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const { t } = useLanguage();
  const slug = params.slug as string;
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-white/60 mb-8">Článek nenalezen</p>
          <Link href="/blog" className="text-emerald-400 hover:underline">
            ← Zpět na blog
          </Link>
        </div>
      </div>
    );
  }

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
      </div>

      <article className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog">
          <motion.div
            whileHover={{ x: -5 }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-emerald-400 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t('Zpět na blog', 'Back to blog')}</span>
          </motion.div>
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
            <span className="text-sm font-semibold text-emerald-400">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white space-grotesk mb-6">
            {t(post.titleCS, post.titleEN)}
          </h1>

          <div className="flex items-center gap-6 text-white/50">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors ml-auto">
              <Share2 size={18} />
              <span>{t('Sdílet', 'Share')}</span>
            </button>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div
            className="text-white/80 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t(post.contentCS, post.contentEN),
            }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('Potřebujete pomoc s vaším projektem?', 'Need help with your project?')}
          </h3>
          <p className="text-white/60 mb-6">
            {t(
              'Kontaktujte nás a probereme vaše požadavky',
              'Contact us and we will discuss your requirements'
            )}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-bold hover:scale-105 transition-transform"
          >
            {t('Začít projekt', 'Start project')}
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
