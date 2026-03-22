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
    CS: "Weby, které svítí. Ne jen existují.",
    EN: "Websites that shine. Not just exist.",
  },
  description: {
    CS: "Navrhujeme a spouštíme weby, e-shopy a SaaS aplikace pro firmy, kde záleží na výsledcích. Praha, dodáváme i do zahraničí.",
    EN: "We design and ship websites, e-commerce and SaaS apps for businesses where results matter. Prague-based, delivering globally.",
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
    longDescCS: "Landing pages a firemní weby s CMS. Spuštění za 2–3 týdny od 25 000 Kč. Průměrný load time pod 1 sekundu — Google to pozná, zákazníci taky.",
    longDescEN: "Landing pages and corporate websites with CMS. Launch in 2–3 weeks from €1 000. Average load time under 1 second — Google notices, customers too.",
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
    longDescCS: "MVP i enterprise. Real-time data, API integrace, cloud. 4–8 týdnů od 60 000 Kč. Škálujete s námi, ne kvůli nám.",
    longDescEN: "MVP to enterprise. Real-time data, API integrations, cloud. 4–8 weeks from €2 500. You scale with us, not because of us.",
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
    longDescCS: "iOS a Android nativně. Push notifikace, offline režim, biometrie. Za 6–12 týdnů od 90 000 Kč. Perfektní výkon, protože na tom záleží.",
    longDescEN: "iOS and Android natively. Push notifications, offline mode, biometrics. In 6–12 weeks from €3 500. Perfect performance, because it matters.",
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
    longDescCS: "E-shop na míru s platební bránou, skladem a automatizací. Za 3–5 týdnů od 45 000 Kč. Víc, než Shoptet kdy nabídne.",
    longDescEN: "Custom e-shop with payment gateway, inventory and automation. In 3–5 weeks from €1 800. More than Shopify will ever offer.",
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
    title: "Endoria.eu",
    category: "web" as const,
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    descriptionCS: "Moderní webová platforma pro největší český Minecraft server s 500+ online hráči a živou komunitou.",
    descriptionEN: "Modern web platform for the largest Czech Minecraft server with 500+ online players and a live community.",
    longDescCS: "Kompletní návrh a vývoj webu pro Endoria — jeden z největších českých Minecraft serverů. Real-time status serveru, live statistiky online hráčů, Discord integrace, správa pravidel a novinek, responzivní design optimalizovaný pro komunitu.",
    longDescEN: "Complete design and development of the website for Endoria — one of the largest Czech Minecraft servers. Real-time server status, live player count, Discord integration, rules & news management, responsive design optimized for the community.",
    url: "https://endoria.eu",
    featured: true,
    color: "from-emerald-500 to-teal-600",
    stats: {
      players: "500+",
      uptime: "99.9%",
      community: "CZ/SK",
    },
    highlights: [
      "Live server status & player count",
      "Discord komunitní integrace",
      "CMS pro novinky a pravidla",
      "Full-stack Next.js 15 architektura",
    ],
  },
  // Přidej další projekty sem ↓
];

// ─── TypeScript Types ─────────────────────────────────────────────────────────

export type Service = (typeof services)[number];
export type FAQ = (typeof faqs)[number];
export type PortfolioProject = (typeof portfolioProjects)[number];
