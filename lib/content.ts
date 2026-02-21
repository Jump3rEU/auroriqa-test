/**
 * ─── AURORIQA — SITE CONTENT ────────────────────────────────────────────────
 *
 * This is the single source of truth for all editable content on the website.
 * Edit this file to update text, services, FAQs, portfolio projects, stats, etc.
 * After saving, push to GitHub → Vercel auto-deploys in ~30 seconds.
 *
 * Structure:
 *   siteSettings  — company info, contact, social links, hero text
 *   services      — service cards shown in the Services section
 *   faqs          — FAQ section questions & answers
 *   portfolioProjects — portfolio/showcase projects
 *   stats         — homepage statistics
 */

// ─── Site Settings ───────────────────────────────────────────────────────────

export const siteSettings = {
  companyName: "Auroriqa",
  tagline: {
    CS: "Digitální produkty, které fungují.",
    EN: "Digital products that work.",
  },
  description: {
    CS: "Tvoříme moderní weby, aplikace a digitální produkty s důrazem na výkon, design a výsledky.",
    EN: "We craft modern websites, apps and digital products with a focus on performance, design, and results.",
  },
  email: "hello@auroriqa.cz",
  phone: "+420 777 000 000",
  socials: {
    github: "https://github.com/Jump3rEU/Auroriqa",
    linkedin: "https://linkedin.com/company/auroriqa",
    instagram: "",
  },
};

// ─── Homepage Stats ───────────────────────────────────────────────────────────

export const stats = {
  projectsCount: "50+",
  clientSatisfaction: "100%",
  yearsExperience: "5+",
  avgDeliveryWeeks: "2–6",
};

// ─── Services ────────────────────────────────────────────────────────────────

export const services = [
  {
    id: "web",
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
      { label: "Projects", value: "50+" },
    ],
    features: ["SEO optimalizace", "Responzivní design", "CMS integrace", "Analytics"],
    featuresEN: ["SEO optimization", "Responsive design", "CMS integration", "Analytics"],
  },
  {
    id: "webapp",
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
      { label: "Users", value: "10k+" },
    ],
    features: ["Real-time data", "Cloud hosting", "Škálovatelnost", "API integrace"],
    featuresEN: ["Real-time data", "Cloud hosting", "Scalability", "API integration"],
  },
  {
    id: "mobile",
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
      { label: "Rating", value: "4.8★" },
    ],
    features: ["Native performance", "Push notifikace", "Offline režim", "Biometrie"],
    featuresEN: ["Native performance", "Push notifications", "Offline mode", "Biometrics"],
  },
  {
    id: "ecommerce",
    titleCS: "E-commerce",
    titleEN: "E-commerce",
    descriptionCS: "Online obchody, které skutečně prodávají",
    descriptionEN: "Online stores that actually sell",
    longDescCS: "Komplexní e-shop řešení s platebními bránami, správou skladu a marketing automation.",
    longDescEN: "Complete e-shop solution with payment gateways, inventory management and marketing automation.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
    stats: [
      { label: "Conversion", value: "3.5%" },
      { label: "Products", value: "5000+" },
      { label: "Orders/day", value: "500+" },
    ],
    features: ["Platební brány", "Správa skladů", "Marketing tools", "Analytics"],
    featuresEN: ["Payment gateways", "Inventory mgmt", "Marketing tools", "Analytics"],
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    id: "timeline",
    questionCS: "Jak dlouho trvá vývoj projektu?",
    questionEN: "How long does project development take?",
    answerCS: "Závisí na složitosti projektu. Jednoduchá webová stránka trvá 2–3 týdny, komplexní webová aplikace 1–3 měsíce. První prototyp máte během týdne.",
    answerEN: "It depends on project complexity. A simple website takes 2–3 weeks, a complex web application 1–3 months. You'll have the first prototype within a week.",
  },
  {
    id: "tech",
    questionCS: "Jaké technologie používáte?",
    questionEN: "What technologies do you use?",
    answerCS: "Pracujeme s moderním stackem: React, Next.js, TypeScript, Node.js, PostgreSQL. Vždy volíme technologie podle konkrétních potřeb projektu.",
    answerEN: "We work with a modern stack: React, Next.js, TypeScript, Node.js, PostgreSQL. We always choose technologies based on specific project needs.",
  },
  {
    id: "support",
    questionCS: "Nabízíte podporu po spuštění?",
    questionEN: "Do you offer post-launch support?",
    answerCS: "Ano, poskytujeme podporu a údržbu po spuštění. První měsíc je zdarma, poté nabízíme flexibilní plány podle vašich potřeb.",
    answerEN: "Yes, we provide post-launch support and maintenance. The first month is free, then we offer flexible plans according to your needs.",
  },
  {
    id: "communication",
    questionCS: "Jak funguje komunikace během projektu?",
    questionEN: "How does communication work during the project?",
    answerCS: "Denní updates přes Slack/Discord, týdenní video cally. Máte přístup k projektovému boardu a vidíte průběh v reálném čase.",
    answerEN: "Daily updates via Slack/Discord, weekly video calls. You have access to the project board and see progress in real-time.",
  },
  {
    id: "specs",
    questionCS: "Potřebuji přesnou specifikaci předem?",
    questionEN: "Do I need exact specifications upfront?",
    answerCS: "Ne. Pomůžeme vám s definicí požadavků během discovery fáze. Stačí obecná představa o tom, co chcete dosáhnout.",
    answerEN: "No. We'll help you define requirements during the discovery phase. A general idea of what you want to achieve is enough.",
  },
  {
    id: "payment",
    questionCS: "Jaké jsou platební podmínky?",
    questionEN: "What are the payment terms?",
    answerCS: "50 % při podpisu smlouvy, 50 % při spuštění. U větších projektů nabízíme milníkové platby. Akceptujeme bankovní převod i krypto.",
    answerEN: "50% upon contract signing, 50% at launch. For larger projects, we offer milestone payments. We accept bank transfer and crypto.",
  },
];

// ─── Portfolio Projects ───────────────────────────────────────────────────────

export const portfolioProjects = [
  {
    id: "endoria",
    title: "Endoria",
    category: "web" as const,
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    descriptionCS: "Moderní herní platforma s admin systémem, aplikacemi a real-time daty.",
    descriptionEN: "Modern gaming platform with admin system, applications and real-time data.",
    url: "",
    featured: true,
    color: "from-emerald-500 to-teal-500",
  },
  // Přidej další projekty sem ↓
];

// ─── TypeScript Types ─────────────────────────────────────────────────────────

export type Service = (typeof services)[number];
export type FAQ = (typeof faqs)[number];
export type PortfolioProject = (typeof portfolioProjects)[number];
