/**
 * ─── AURORIQA — BLOG DATA ────────────────────────────────────────────────────
 * Central metadata store for all blog posts.
 * Used by layout.tsx for per-post SSR metadata & generateStaticParams.
 */

export interface BlogPostMeta {
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

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "webovy-design-trendy-2026",
    titleCS: "Webový Design Trendy 2026",
    titleEN: "Web Design Trends 2026",
    excerptCS: "Objevte nejnovější trendy ve webovém designu pro rok 2026. Od AI-powered designu po immersive 3D experiences.",
    excerptEN: "Discover the latest trends in web design for 2026. From AI-powered design to immersive 3D experiences.",
    date: "2026-02-01",
    readTime: "8 min",
    category: "Design",
    image: "/blog/design-trends.jpg",
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
    image: "/blog/choose-agency.jpg",
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
    image: "/blog/speed-optimization.jpg",
  },
  {
    slug: "react-vs-vue-porovnani-2026",
    titleCS: "React vs Vue: Komplexní Porovnání 2026",
    titleEN: "React vs Vue: Comprehensive Comparison 2026",
    excerptCS: "Detailní porovnání React a Vue frameworků. Který je lepší pro váš projekt?",
    excerptEN: "Detailed comparison of React and Vue frameworks. Which is better for your project?",
    date: "2026-01-20",
    readTime: "12 min",
    category: "Development",
    image: "/blog/react-vue.jpg",
  },
  {
    slug: "seo-optimalizace-kompletni-pruvodce",
    titleCS: "SEO Optimalizace: Kompletní Průvodce 2026",
    titleEN: "SEO Optimization: Complete Guide 2026",
    excerptCS: "Vše co potřebujete vědět o SEO optimalizaci vašeho webu. Od základů po pokročilé techniky.",
    excerptEN: "Everything you need to know about SEO optimization. From basics to advanced techniques.",
    date: "2026-01-15",
    readTime: "15 min",
    category: "SEO",
    image: "/blog/seo-guide.jpg",
  },
  {
    slug: "nextjs-performance-tipy",
    titleCS: "Next.js Performance: 10 Tipů Pro Rychlý Web",
    titleEN: "Next.js Performance: 10 Tips For Fast Website",
    excerptCS: "Praktické tipy jak maximalizovat výkon vašeho Next.js projektu a zlepšit Core Web Vitals.",
    excerptEN: "Practical tips to maximize your Next.js project performance and improve Core Web Vitals.",
    date: "2026-01-10",
    readTime: "9 min",
    category: "Development",
    image: "/blog/nextjs-perf.jpg",
  },
  {
    slug: "ui-ux-design-best-practices",
    titleCS: "UI/UX Design: Best Practices 2026",
    titleEN: "UI/UX Design: Best Practices 2026",
    excerptCS: "Moderní best practices pro tvorbu intuitivních a přístupných uživatelských rozhraní.",
    excerptEN: "Modern best practices for creating intuitive and accessible user interfaces.",
    date: "2026-01-05",
    readTime: "11 min",
    category: "Design",
    image: "/blog/ui-ux.jpg",
  },
  {
    slug: "typescript-proc-pouzivat",
    titleCS: "TypeScript: Proč Ho Používat v Roce 2026",
    titleEN: "TypeScript: Why Use It in 2026",
    excerptCS: "Důvody proč TypeScript změnil způsob jak píšeme JavaScript a proč byste ho měli používat.",
    excerptEN: "Reasons why TypeScript changed the way we write JavaScript and why you should use it.",
    date: "2025-12-28",
    readTime: "7 min",
    category: "Development",
    image: "/blog/typescript.jpg",
  },
  {
    slug: "webova-bezpecnost-zaklady",
    titleCS: "Webová Bezpečnost: Základy Pro Každého",
    titleEN: "Web Security: Basics For Everyone",
    excerptCS: "Základní bezpečnostní principy které by měl znát každý vývojář a majitel webu.",
    excerptEN: "Basic security principles every developer and website owner should know.",
    date: "2025-12-20",
    readTime: "13 min",
    category: "Security",
    image: "/blog/security.jpg",
  },
];

export const blogPostsBySlug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));
