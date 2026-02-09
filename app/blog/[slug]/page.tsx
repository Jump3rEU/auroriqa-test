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
      <h2>🎨 Nejnovější trendy ve webovém designu pro rok 2026</h2>
      <p>Webový design prochází neustálou evolucí a rok 2026 přináší revoluční změny. Pojďme se podívat na klíčové trendy, které formují budoucnost webu.</p>
      
      <h3>1. AI-Powered Personalizace</h3>
      <p>Umělá inteligence již není jen buzzword - stává se standardem v tvorbě personalizovaných uživatelských zkušeností. Moderní weby se přizpůsobují každému návštěvníkovi v reálném čase:</p>
      <ul>
        <li><strong>Dynamický obsah</strong> - AI analyzuje chování uživatele a zobrazuje relevantní informace</li>
        <li><strong>Prediktivní UX</strong> - systém předvídá potřeby návštěvníka ještě předtím, než je vysloví</li>
        <li><strong>Adaptivní layout</strong> - design se mění podle preferencí a chování uživatele</li>
      </ul>

      <h3>2. Immersive 3D Experiences</h3>
      <p>WebGL a Three.js otevírají dveře plně interaktivním 3D zážitkům. Vidíme explosion 3D produktových katalogů, virtuálních showroomů a gamifikovaných presentací.</p>

      <h3>3. Micro-Interactions & Motion Design</h3>
      <p>Jemné animace a micro-interactions se stávají klíčovým diferenciátorem. Každá interakce má svůj feedback - od hover efektů po loading states. To vytváří pocit živého, responzivního produktu.</p>

      <h3>4. Dark Mode & Accessibility First</h3>
      <p>Dark mode již není optional - je to očekávaný standard. Současně vidíme masivní posun k accessibility-first přístupu:</p>
      <ul>
        <li>Lepší kontrast a čitelnost</li>
        <li>Keyboard navigation jako priorita</li>
        <li>Screen reader optimalizace</li>
        <li>Respektování prefers-reduced-motion</li>
      </ul>

      <h3>5. Minimalistický Maximalismus</h3>
      <p>Paradoxní trend kombinující čistý minimalistický layout s bohatými, expresivními prvky. Velká typografie, jasné barvy, ale čistá struktura.</p>

      <h2>🚀 Jak implementovat tyto trendy?</h2>
      <p>Při <a href="/#services" class="text-emerald-400 hover:underline">tvorbě moderního webu</a> je klíčové nesledovat trendy naslepo, ale vybrat ty, které dávají smysl pro váš byznys a cílovou skupinu.</p>
      
      <p><strong>Potřebujete pomoc s implementací moderního designu?</strong> V Auroriqa se specializujeme na <a href="/#services" class="text-emerald-400 hover:underline">création webů</a>, které kombinují nejnovější trendy s provověřenými UX principy. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Kontaktujte nás</a> pro konzultaci zdarma.</p>
    `,
    contentEN: `
      <h2>🎨 Latest Web Design Trends for 2026</h2>
      <p>Web design is constantly evolving, and 2026 brings revolutionary changes. Let's explore the key trends shaping the future of the web.</p>
      
      <h3>1. AI-Powered Personalization</h3>
      <p>Artificial intelligence is no longer just a buzzword - it's becoming standard in creating personalized user experiences. Modern websites adapt to each visitor in real-time.</p>

      <h3>2. Immersive 3D Experiences</h3>
      <p>WebGL and Three.js open doors to fully interactive 3D experiences. We're seeing an explosion of 3D product catalogs, virtual showrooms, and gamified presentations.</p>

      <h3>3. Micro-Interactions & Motion Design</h3>
      <p>Subtle animations and micro-interactions are becoming key differentiators. Every interaction has feedback - from hover effects to loading states.</p>

      <h2>🚀 How to Implement These Trends?</h2>
      <p>When <a href="/#services" class="text-emerald-400 hover:underline">creating modern websites</a>, it's crucial not to follow trends blindly. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Contact us</a> for a free consultation.</p>
    `,
  },
  "jak-vybrat-web-agenturu": {
    titleCS: "Jak Vybrat Web Agenturu",
    titleEN: "How to Choose a Web Agency",
    date: "2026-01-28",
    readTime: "6 min",
    category: "Business",
    contentCS: `
      <h2>💼 Kompletní průvodce výběrem správné webové agentury</h2>
      <p>Výběr webové agentury je strategické rozhodnutí, které ovlivní úspěch vašeho online byznysu. Špatná volba může znamenat ztrátu času, peněz a příležitostí. Pojďme se podívat, na co se zaměřit.</p>

      <h3>🎯 1. Portfolio & Case Studies</h3>
      <p>První věc, kterou byste měli zkontrolovat, je portfolio agentury. Ale pozor - nestačí jen hezké obrázky:</p>
      <ul>
        <li><strong>Měřitelné výsledky</strong> - Zvýšení konverzí? Lepší SEO? Rychlejší načítání?</li>
        <li><strong>Podobné projekty</strong> - Mají zkušenosti s vaším odvětvím?</li>
        <li><strong>Technologie</strong> - Používají moderní stack nebo zastaralé řešení?</li>
        <li><strong>Živé weby</strong> - Nejsou to jen mockupy? Otestujte živé verze</li>
      </ul>

      <h3>🔍 2. Technologický Stack</h3>
      <p>Technologie, kterou agentura používá, je zásadní. V roce 2026 byste měli očekávat:</p>
      <ul>
        <li>Next.js nebo similar modern framework</li>
        <li>TypeScript pro type safety</li>
        <li>Headless CMS pro flexibilitu</li>
        <li>Cloud hosting (Vercel, AWS, Azure)</li>
        <li>CI/CD automatizace</li>
      </ul>

      <h3>💬 3. Komunikace & Proces</h3>
      <p>Jak probíhá spolupráce? To je často důležitější než samotné dovednosti:</p>
      <ul>
        <li><strong>Transparentnost</strong> - Pravidelné updates? Přístup k projektu?</li>
        <li><strong>Agilní metodologie</strong> - Iterativní vývoj s vašim feedbackem</li>
        <li><strong>Dostupnost</strong> - Jak rychle reagují na otázky?</li>
        <li><strong>Dokumentace</strong> - Poskytují kompletní dokumentaci?</li>
      </ul>

      <h3>💰 4. Cena vs. Hodnota</h3>
      <p>Nejlevnější řešení je často nejdražší. Ptejte se:</p>
      <ul>
        <li>Co je zahrnuto v ceně?</li>
        <li>Jaké jsou skryté náklady?</li>
        <li>Co se stane po spuštění?</li>
        <li>Zahrnuje cena SEO optimalizaci?</li>
        <li>Je součástí také školení a podpora?</li>
      </ul>

      <h3>🚀 5. Post-Launch Podpora</h3>
      <p>Web není "hotový" po spuštěni. Potřebujete:</p>
      <ul>
        <li>Technickou podporu a maintenance</li>
        <li>Monitoring a analytics</li>
        <li>Pravidelné updates a security patches</li>
        <li>Možnost dalšího rozvoje a škálování</li>
      </ul>

      <h2>✅ Red Flags - Čeho Se Vyvarovat</h2>
      <ul>
        <li>❌ Žádné živé reference nebo case studies</li>
        <li>❌ Nejasné cenové kalkulace</li>
        <li>❌ Používání zastaralých technologií (WordPress themes, jQuery...)</li>
        <li>❌ Žádná zmínka o SEO nebo performance</li>
        <li>❌ Slibování nereálných termínů</li>
        <li>❌ Chybějící smlouva nebo scope of work</li>
      </ul>

      <h2>🎯 Proč Auroriqa?</h2>
      <p>V Auroriqa kombinujeme moderní technologie (Next.js, TypeScript, Tailwind) s agilním procesem a transparentní komunikací. Každý náš projekt zahrnuje:</p>
      <ul>
        <li>✅ Kompletní SEO optimalizaci</li>
        <li>✅ Performance monitoring (Core Web Vitals)</li>
        <li>✅ 3 měsíce post-launch podpory zdarma</li>
        <li>✅ Školení vašeho týmu</li>
        <li>✅ Kompletní dokumentaci</li>
      </ul>

      <p><strong>Chcete probrat váš projekt?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Domluvte si konzultaci zdarma</a> - bez závazků, jen otevřená diskuze o vašich potřebách.</p>
    `,
    contentEN: `
      <h2>💼 Complete Guide to Choosing a Web Agency</h2>
      <p>Selecting a web agency is a strategic decision that will impact your online business success. Let's look at what to focus on.</p>

      <h3>🎯 1. Portfolio & Case Studies</h3>
      <p>First thing to check is the agency's portfolio. But be careful - pretty pictures aren't enough.</p>

      <h3>🔍 2. Technology Stack</h3>
      <p>The technology an agency uses is crucial. In 2026, you should expect modern frameworks, TypeScript, and cloud hosting.</p>

      <h2>🎯 Why Auroriqa?</h2>
      <p><strong>Want to discuss your project?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Schedule a free consultation</a>.</p>
    `,
  },
  "optimalizace-rychlosti-webu": {
    titleCS: "Optimalizace Rychlosti Webu",
    titleEN: "Website Speed Optimization",
    date: "2026-01-25",
    readTime: "10 min",
    category: "Development",
    contentCS: `
      <h2>⚡ Jak zrychlit váš web a proč to je kritické</h2>
      <p>Každá sekunda načítání stojí peníze. Studies ukazují, že 53% návštěvníků opouští web, který se načítá déle než 3 sekundy. Performance není luxury - je to nutnost.</p>

      <h3>📊 Core Web Vitals - Co Google Měří</h3>
      <p>Od 2021 Google používá Core Web Vitals jako ranking factor. V roce 2026 je to ještě důležitější:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> - hlavní obsah by měl být viditelný do 2.5s</li>
        <li><strong>FID (First Input Delay)</strong> - interaktivita do 100ms</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> - vizuální stabilita pod 0.1</li>
        <li><strong>INP (Interaction to Next Paint)</strong> - nová metrika pro interaktivitu</li>
      </ul>

      <h3>🚀 1. Optimalizace Obrázků</h3>
      <p>Obrázky často tvoří 50-70% velikosti stránky. Zde je checklist:</p>
      <ul>
        <li><strong>Next.js Image Component</strong> - Automatická optimalizace, lazy loading, responsive</li>
        <li><strong>WebP / AVIF formáty</strong> - 30-50% menší než JPEG při stejné kvalitě</li>
        <li><strong>Správné rozměry</strong> - Nikdy neshrinkujte 4K obrázek CSS</li>
        <li><strong>Lazy loading</strong> - Načtěte pouze to, co je vidět</li>
        <li><strong>CDN</strong> - Rychlá distribuce z nejbližšího serveru</li>
      </ul>

      <h3>⚙️ 2. Code Splitting & Bundle Optimization</h3>
      <p>Moderní build tools umožňují chytré rozdělení kódu:</p>
      <pre><code>// Next.js automatický code splitting
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false // Pokud není potřeba SSR
})</code></pre>

      <h3>🗄️ 3. Caching Strategie</h3>
      <p>Chytrý caching může redukovat loading time o 90%+:</p>
      <ul>
        <li><strong>Static Generation</strong> - Pre-render statického obsahu</li>
        <li><strong>ISR (Incremental Static Regeneration)</strong> - Update statických stránek on-demand</li>
        <li><strong>HTTP Cache Headers</strong> - Browser a CDN caching</li>
        <li><strong>Service Workers</strong> - Offline-first approach</li>
      </ul>

      <h3>📡 4. Network Optimizations</h3>
      <ul>
        <li><strong>HTTP/3 & QUIC</strong> - Rychlejší protocol s nižší latencí</li>
        <li><strong>Preload Critical Resources</strong> - <code>&lt;link rel="preload"&gt;</code> pro fonty, CSS</li>
        <li><strong>DNS Prefetch</strong> - Prepare connections k third-party domains</li>
        <li><strong>Compression</strong> - Brotli nebo Gzip pro všechny text assets</li>
      </ul>

      <h3>🎨 5. CSS & JavaScript Optimization</h3>
      <ul>
        <li><strong>Critical CSS</strong> - Inline above-the-fold styles</li>
        <li><strong>Remove Unused CSS</strong> - PurgeCSS s Tailwind</li>
        <li><strong>Defer Non-Critical JavaScript</strong> - Async/defer attributes</li>
        <li><strong>Tree Shaking</strong> - Odstranění nepoužitého kódu</li>
      </ul>

      <h2>🔧 Performance Monitoring</h2>
      <p>Optimalizace není jednorázová akce. Potřebujete continuous monitoring:</p>
      <ul>
        <li>Google PageSpeed Insights</li>
        <li>WebPageTest.org</li>
        <li>Lighthouse CI v deployment pipeline</li>
        <li>Real User Monitoring (RUM)</li>
        <li>Vercel Analytics nebo similar</li>
      </ul>

      <h2>📈 Reálný Dopad Na Byznys</h2>
      <ul>
        <li>Amazon: 100ms zpomalení = 1% pokles prodeje</li>
        <li>Walmart: 1s zrychlení = 2% zvýšení konverzí</li>
        <li>BBC: Ztráta 10% uživatelů za každou další sekundu</li>
      </ul>

      <p><strong>Váš web je pomalý?</strong> <a href="/#services" class="text-emerald-400 hover:underline">Nabízíme performance audit</a> s konkrétními doporučeními. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Získejte analýzu zdarma</a> - během 48h dostanete detailed report s prioritizovanými úkoly.</p>
    `,
    contentEN: `
      <h2>⚡ How to Speed Up Your Website</h2>
      <p>Every second of loading costs money. Studies show 53% of visitors abandon sites loading longer than 3 seconds.</p>

      <h3>📊 Core Web Vitals</h3>
      <p>Google uses Core Web Vitals as a ranking factor: LCP, FID, CLS, and the new INP metric.</p>

      <p><strong>Is your website slow?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Get a free analysis</a>.</p>
    `,
  },
  "react-vs-vue-porovnani-2026": {
    titleCS: "React vs Vue: Komplexní Porovnání 2026",
    titleEN: "React vs Vue: Comprehensive Comparison 2026",
    date: "2026-01-20",
    readTime: "12 min",
    category: "Development",
    contentCS: `
      <h2>⚛️ React vs Vue - Která knihovna vyhrává v 2026?</h2>
      <p>Pětiletá debata pokračuje. React a Vue jsou obě vynikající volby, ale mají odlišné filozofie a use cases. Pojďme to rozebrat objektivně.</p>

      <h3>📊 Současný Stav (2026 Data)</h3>
      <ul>
        <li><strong>React</strong>: 220M+ npm downloads/měsíc, 42% market share</li>
        <li><strong>Vue</strong>: 45M+ npm downloads/měsíc, 18% market share</li>
        <li><strong>Job Demand</strong>: React 3× více pracovních nabídek</li>
        <li><strong>Enterprise Adoption</strong>: React dominuje u Fortune 500</li>
      </ul>

      <h3>🎯 React - Strengths</h3>
      <ul>
        <li><strong>Ekosystém</strong> - Obrovský; řešení pro všechno</li>
        <li><strong>Next.js</strong> - Nejlepší React framework pro produkci</li>
        <li><strong>React Server Components</strong> - Budoucnost web appsů</li>
        <li><strong>TypeScript podpora</strong> - Vynikající DX</li>
        <li><strong>Community</strong> - Největší komunita, nejvíce tutoriálů</li>
        <li><strong>Jobs</strong> - Nejvíce pozic, highest salaries</li>
      </ul>

      <h3>⚠️ React - Challenges</h3>
      <ul>
        <li>Strmější learning curve</li>
        <li>Více boilerplate kódu</li>
        <li>Nutnost rozhodovat o architektuře</li>
        <li>Changelog fatigue (časté breaking changes)</li>
      </ul>

      <h3>💚 Vue - Strengths</h3>
      <ul>
        <li><strong>Developer Experience</strong> - Nejlepší DX, intuitivní API</li>
        <li><strong>Single File Components</strong> - Elegantní struktura</li>
        <li><strong>Composition API</strong> - Síla Hooks s lepší ergonomií</li>
        <li><strong>Dokumentace</strong> - Nejlepší docs v odvětví</li>
        <li><strong>Performance</strong> - Optimalizovaný virtual DOM</li>
        <li><strong>Gentle curve</strong> - Rychlejší onboarding</li>
      </ul>

      <h3>⚠️ Vue - Challenges</h3>
      <ul>
        <li>Menší ekosystém</li>
        <li>Méně enterprise adoption</li>
        <li>Nuxt vs. Next.js gap</li>
        <li>Méně job opportunities</li>
      </ul>

      <h3>🏆 Kdy Použít React?</h3>
      <ul>
        <li>✅ Large-scale aplikace s mnoha developerů</li>
        <li>✅ Když potřebujete biggest talent pool</li>
        <li>✅ Enterprise projekty s long-term support</li>
        <li>✅ Komplexní state management potřeby</li>
        <li>✅ React Native pro mobile (code sharing)</li>
      </ul>

      <h3>🏆 Kdy Použít Vue?</h3>
      <ul>
        <li>✅ Smaller team s focus na velocity</li>
        <li>✅ Prototyping a MVP development</li>
        <li>✅ Migration z jQuery nebo legacy stack</li>
        <li>✅ Když chcete best developer experience</li>
        <li>✅ Projekty kde rychlý onboarding je key</li>
      </ul>

      <h2>💼 Naše Zkušenost v Auroriqa</h2>
      <p>Po 5+ letech práce s oběma frameworky jsme se usadili na <strong>React + Next.js</strong> jako primary stack. Důvody:</p>
      <ul>
        <li>Server Components pro optimal performance</li>
        <li>Nejlepší TypeScript integrace</li>
        <li>Vercel deployment & analytics</li>
        <li>Největší talent pool při škálování týmu</li>
        <li>Enterprise clients prefer React</li>
      </ul>

      <p>Ale Vue používáme pro specific use cases kde rapid development a DX jsou priorita.</p>

      <h2>🎓 Naše Doporučení</h2>
      <p><strong>Pro většinu projektů v 2026: React + Next.js + TypeScript</strong></p>
      <p>Je to battle-tested stack s nejlepší budoucností a největší komunitou.</p>

      <p><strong>Potřebujete pomoc s výběrem tech stacku?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Domluvte si konzultaci</a> - probereme váš projekt a doporučíme optimální řešení založené na vašich potřebách, ne na hype.</p>
    `,
    contentEN: `
      <h2>⚛️ React vs Vue - Which Wins in 2026?</h2>
      <p>Both React and Vue are excellent choices with different philosophies and use cases.</p>

      <h3>🏆 When to Use React?</h3>
      <p>Large-scale applications, enterprise projects, React Native for mobile.</p>

      <h3>🏆 When to Use Vue?</h3>
      <p>Smaller teams, rapid prototyping, best developer experience.</p>

      <p><strong>Need help choosing?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Schedule a consultation</a>.</p>
    `,
  },
  "seo-optimalizace-kompletni-pruvodce": {
    titleCS: "SEO Optimalizace: Kompletní Průvodce 2026",
    titleEN: "SEO Optimization: Complete Guide 2026",
    date: "2026-01-15",
    readTime: "15 min",
    category: "SEO",
    contentCS: `
      <h2>🔍 SEO v roce 2026 - Co Funguje (A Co Ne)</h2>
      <p>SEO se dramaticky změnilo. Google je chytřejší, uživatelé náročnější, a konkurence tvrdší. Zde je aktuální guide založený na datech, ne spekulacích.</p>

      <h3>🎯 1. Technical SEO - Základ Všeho</h3>
      <p>Bez solidního technical foundation ostatní optimalizace nemají smysl:</p>
      <ul>
        <li><strong>Core Web Vitals</strong> - LCP pod 2.5s, FID pod 100ms, CLS pod 0.1</li>
        <li><strong>Mobile-First Indexing</strong> - Google indexuje mobile verzi</li>
        <li><strong>HTTPS</strong> - Absolutní nutnost, non-negotiable</li>
        <li><strong>Sitemap.xml</strong> - Proper structure bez hash fragments</li>
        <li><strong>Robots.txt</strong> - Correct crawl directives</li>
        <li><strong>Schema Markup</strong> - Structured data pro rich snippets</li>
      </ul>

      <h3>📝 2. Content is (Still) King</h3>
      <p>Ale v 2026 nestačí jen "dobrý content". Potřebujete:</p>
      <ul>
        <li><strong>Search Intent Match</strong> - Odpovídejte přesně na user query</li>
        <li><strong>E-E-A-T</strong> - Experience, Expertise, Authority, Trust</li>
        <li><strong>Comprehensive Coverage</strong> - Pokrývejte topic kompletně</li>
        <li><strong>Freshness</strong> - Regular updates starého content</li>
        <li><strong>Multimedia</strong> - Video, infographics, interactive elements</li>
      </ul>

      <h3>🔗 3. Link Building (Done Right)</h3>
      <p>Backlinks jsou stále top 3 ranking factor, ale kvalita > kvantita:</p>
      <ul>
        <li><strong>Quality Content</strong> - Vytváříte linkable assets</li>
        <li><strong>Guest Posting</strong> - Na relevantních autoritativních sites</li>
        <li><strong>Digital PR</strong> - Získání zmínek v médiích</li>
        <li><strong>Broken Link Building</strong> - Replace dead links</li>
        <li><strong>HARO</strong> - Help a Reporter Out pro media mentions</li>
      </ul>

      <h3>🏠 4. On-Page SEO Checklist</h3>
      <ul>
        <li>✅ <strong>Title Tag</strong> - Keyword na začátku, max 60 chars</li>
        <li>✅ <strong>Meta Description</strong> - Compelling CTA, max 160 chars</li>
        <li>✅ <strong>H1-H6 Structure</strong> - Logical hierarchy s keywords</li>
        <li>✅ <strong>URL Structure</strong> - Short, descriptive, keyword-rich</li>
        <li>✅ <strong>Internal Linking</strong> - Distribute page authority</li>
        <li>✅ <strong>Image Optimization</strong> - Alt text, file names, compression</li>
        <li>✅ <strong>Schema Markup</strong> - Article, FAQ, Breadcrumb schemas</li>
      </ul>

      <h3>🌐 5. Local SEO (Pokud Relevantní)</h3>
      <ul>
        <li>Google Business Profile optimization</li>
        <li>Local citations (NAP consistency)</li>
        <li>Reviews & rating management</li>
        <li>Local content & keywords</li>
        <li>Location pages pro multiple locations</li>
      </ul>

      <h3>📊 6. Měření & Analytics</h3>
      <p>You can't improve what you don't measure:</p>
      <ul>
        <li><strong>Google Search Console</strong> - Click-through rates, impressions, positions</li>
        <li><strong>Google Analytics 4</strong> - User behavior, conversions</li>
        <li><strong>Rank Tracking</strong> - Monitor keyword positions</li>
        <li><strong>Backlink Monitoring</strong> - Ahrefs nebo Semrush</li>
        <li><strong>Core Web Vitals</strong> - PageSpeed Insights, Lighthouse</li>
      </ul>

      <h3>🚫 Co NEFUNGUJE v 2026</h3>
      <ul>
        <li>❌ Keyword stuffing</li>
        <li>❌ PBN (Private Blog Networks)</li>
        <li>❌ Duplicate content</li>
        <li>❌ Buying links z spamových sites</li>
        <li>❌ Thin content</li>
        <li>❌ Hiding text nebo links</li>
        <li>❌ AI-generated content bez human review</li>
      </ul>

      <h2>⏱️ Realistické Timeline</h2>
      <ul>
        <li><strong>0-3 měsíce</strong>: Technical foundation, on-page optimization</li>
        <li><strong>3-6 měsíců</strong>: První measurable results</li>
        <li><strong>6-12 měsíců</strong>: Significant organic growth</li>
        <li><strong>12+ měsíců</strong>: Compound effect, autoritative position</li>
      </ul>

      <h2>💡 Proč SEO S Námi?</h2>
      <p>V Auroriqa built SEO přímo do každého webu od začátku:</p>
      <ul>
        <li>✅ Technical SEO jako standard (Next.js benefits)</li>
        <li>✅ Schema markup pro všechny pages</li>
        <li>✅ Optimalizace Core Web Vitals</li>
        <li>✅ Content strategy & keyword research</li>
        <li>✅ Monthly SEO audits & reports</li>
      </ul>

      <p><strong>Chcete audit vašeho webu?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Získejte SEO analysis zdarma</a> - identifikujeme top 10 issues a prioritized action plan během 48 hodin.</p>
    `,
    contentEN: `
      <h2>🔍 SEO in 2026 - What Works</h2>
      <p>SEO has changed dramatically. Here's an updated guide based on data.</p>

      <h3>🎯 Technical SEO Foundation</h3>
      <p>Core Web Vitals, mobile-first indexing, HTTPS, proper sitemaps.</p>

      <p><strong>Want a website audit?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Get free SEO analysis</a>.</p>
    `,
  },
  "nextjs-performance-tipy": {
    titleCS: "Next.js Performance: 10 Tipů Pro Rychlý Web",
    titleEN: "Next.js Performance: 10 Tips For Fast Website",
    date: "2026-01-10",
    readTime: "9 min",
    category: "Development",
    contentCS: `
      <h2>⚡ Next.js Performance Optimization - Production Ready Tipy</h2>
      
      <h3>1️⃣ Image Optimization s Next/Image</h3>
      <pre><code>import Image from 'next/image'

&lt;Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // Above fold images
  quality={85} // Balance mezi quality a size
  placeholder="blur" // Smooth loading
  blurDataURL="..." // Low-res preview
/&gt;</code></pre>
      
      <h3>2️⃣ Static Generation Hvor Možné</h3>
      <pre><code>// Static pages = fastest possible loading
export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default async function Page({ params }) {
  // Pre-rendered at build time
}</code></pre>

      <h3>3️⃣ Server Components jako Default</h3>
      <p>V App Router jsou componenty server-side by default. Client components jen když nutné:</p>
      <pre><code>"use client" // Pouze když potřebujete interactivity

// Server Component (default)
async function BlogPost() {
  const data = await fetch(...)
  return &lt;Article data={data} /&gt;
}</code></pre>

      <h3>4️⃣ Dynamic Imports Pro Heavy Components</h3>
      <pre><code>const Chart = dynamic(() => import('./Chart'), {
  loading: () => &lt;ChartSkeleton /&gt;,
  ssr: false
})</code></pre>

      <h3>5️⃣ Font Optimization</h3>
      <pre><code>import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})</code></pre>

      <h3>6️⃣ Metadata API pro SEO</h3>
      <pre><code>export const metadata = {
  title: 'Page Title',
  description: 'Description',
  openGraph: { images: ['/og-image.jpg'] }
}</code></pre>

      <h3>7️⃣ Route Segment Config</h3>
      <pre><code>export const revalidate = 3600 // ISR každou hodinu
export const dynamic = 'force-static' // Force static</code></pre>

      <h3>8️⃣ Parallel Routes & Loading States</h3>
      <pre><code>// app/dashboard/loading.tsx
export default function Loading() {
  return &lt;DashboardSkeleton /&gt;
}</code></pre>

      <h3>9️⃣ Streaming s Suspense</h3>
      <pre><code>&lt;Suspense fallback={&lt;Loading /&gt;}&gt;
  &lt;SlowComponent /&gt;
&lt;/Suspense&gt;</code></pre>

      <h3>🔟 Bundle Analysis</h3>
      <pre><code>// next.config.js
module.exports = {
  webpack: (config) => {
    config.plugins.push(new BundleAnalyzerPlugin())
    return config
  }
}</code></pre>

      <p><strong>Potřebujete Next.js expert?</strong> <a href="/#services" class="text-emerald-400 hover:underline">Specializujeme se na Next.js</a> development a optimalizaci. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Kontaktujte nás</a> pro konzultaci.</p>
    `,
    contentEN: `
      <h2>⚡ Next.js Performance Tips</h2>
      <p>Production-ready optimization tips for Next.js applications.</p>
      <p><strong>Need Next.js expert?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Contact us</a>.</p>
    `,
  },
  "ui-ux-design-best-practices": {
    titleCS: "UI/UX Design: Best Practices 2026",
    titleEN: "UI/UX Design: Best Practices 2026",
    date: "2026-01-05",
    readTime: "11 min",
    category: "Design",
    contentCS: `
      <h2>🎨 UI/UX Best Practices Pro Moderní Weby</h2>

      <h3>🎯 1. User-Centered Design</h3>
      <ul>
        <li><strong>User Research</strong> - Zjistěte kdo jsou vaši uživatelé</li>
        <li><strong>Personas</strong> - Konkrétní user personas</li>
        <li><strong>User Journey Maps</strong> - Visualize cesta uživatele</li>
        <li><strong>Usability Testing</strong> - Test s real users</li>
      </ul>

      <h3>♿ 2. Accessibility (A11Y)</h3>
      <ul>
        <li>Minimum kontrast ratio 4.5:1</li>
        <li>Keyboard navigation</li>
        <li>Screen reader optimization</li>
        <li>ARIA labels kde potřeba</li>
        <li>Focus states clearly visible</li>
      </ul>

      <h3>📱 3. Mobile-First Approach</h3>
      <p>60%+ traffic je mobile. Design mobile → desktop, ne opačně.</p>

      <h3>🎭 4. Visual Hierarchy</h3>
      <ul>
        <li>Velikost pro importance</li>
        <li>Kontrast pro attention</li>
        <li>Bílý prostor pro clarity</li>
        <li>Typografie pro readability</li>
      </ul>

      <h3>⚡ 5. Micro-interactions</h3>
      <p>Každá akce by měla mít visual feedback - hover, click, loading states.</p>

      <h3>🎨 6. Konzistentní Design System</h3>
      <ul>
        <li>Color palette (primary, secondary, neutral)</li>
        <li>Typography scale</li>
        <li>Spacing system (8pt grid)</li>
        <li>Component library</li>
      </ul>

      <p><strong>Redesign nebo nový web?</strong> <a href="/#services" class="text-emerald-400 hover:underline">Náš design proces</a> kombinuje research, prototyping a testing. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Získejte design audit</a> zdarma.</p>
    `,
    contentEN: `
      <h2>🎨 UI/UX Best Practices</h2>
      <p>Modern web design practices for 2026.</p>
      <p><strong>Redesign or new website?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Get free design audit</a>.</p>
    `,
  },
  "typescript-proc-pouzivat": {
    titleCS: "TypeScript: Proč Ho Používat v Roce 2026",
    titleEN: "TypeScript: Why Use It in 2026",
    date: "2025-12-28",
    readTime: "7 min",
    category: "Development",
    contentCS: `
      <h2>💙 TypeScript v 2026 - Už Není Optional</h2>

      <h3>📊 TypeScript Dominance</h3>
      <ul>
        <li>84% top 100 NPM packages používá TypeScript</li>
        <li>75% new projects startují s TypeScript</li>
        <li>All major frameworks podporují TS out-of-box</li>
      </ul>

      <h3>✅ Proč TypeScript?</h3>
      <ul>
        <li><strong>Type Safety</strong> - Catch errors před runtime</li>
        <li><strong>IntelliSense</strong> - Amazing developer experience</li>
        <li><strong>Refactoring</strong> - Confident code changes</li>
        <li><strong>Documentation</strong> - Types jako living docs</li>
        <li><strong>Team Collaboration</strong> - Clear contracts</li>
      </ul>

      <h3>🚀 Začínáme</h3>
      <pre><code>// Strict mode = best practices
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext"
  }
}</code></pre>

      <h3>💡 Pro Tips</h3>
      <ul>
        <li>Používejte utility types (Partial, Pick, Omit)</li>
        <li>Type inference > explicit types</li>
        <li>Generics pro reusable code</li>
        <li>Const assertions pro literal types</li>
      </ul>

      <p><strong>Migrace z JS na TS?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Pomůžeme vám</a> s smooth přechodem.</p>
    `,
    contentEN: `
      <h2>💙 TypeScript in 2026</h2>
      <p>Why TypeScript is no longer optional for serious projects.</p>
      <p><strong>Migration from JS?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">We can help</a>.</p>
    `,
  },
  "webova-bezpecnost-zaklady": {
    titleCS: "Webová Bezpečnost: Základy Pro Každého",
    titleEN: "Web Security: Basics For Everyone",
    date: "2025-12-20",
    readTime: "13 min",
    category: "Security",
    contentCS: `
      <h2>🔒 Web Security Essentials</h2>

      <h3>🛡️ 1. HTTPS is Mandatory</h3>
      <p>Ne optional - absolute must. Let's Encrypt nabízí free certificates.</p>

      <h3>🔐 2. Authentication & Authorization</h3>
      <ul>
        <li><strong>Password Requirements</strong> - Min 12 chars, special chars</li>
        <li><strong>2FA</strong> - Two-factor authentication</li>
        <li><strong>OAuth</strong> - Pro third-party logins</li>
        <li><strong>JWT Tokens</strong> - Secure s proper expiration</li>
      </ul>

      <h3>🚫 3. Common Vulnerabilities</h3>
      <ul>
        <li><strong>SQL Injection</strong> - Use prepared statements</li>
        <li><strong>XSS</strong> - Sanitize user input</li>
        <li><strong>CSRF</strong> - Use CSRF tokens</li>
        <li><strong>Clickjacking</strong> - X-Frame-Options header</li>
      </ul>

      <h3>🔒 4. Security Headers</h3>
      <pre><code>// next.config.js
headers: [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'"
  }
]</code></pre>

      <h3>🔑 5. API Security</h3>
      <ul>
        <li>Rate limiting</li>
        <li>API keys rotation</li>
        <li>Input validation</li>
        <li>CORS properly configured</li>
      </ul>

      <h3>📊 6. Monitoring & Logging</h3>
      <ul>
        <li>Failed login attempts</li>
        <li>Unusual activity patterns</li>
        <li>Error tracking (Sentry)</li>
        <li>Regular security audits</li>
      </ul>

      <p><strong>Security audit potřeba?</strong> <a href="/#services" class="text-emerald-400 hover:underline">Nabízíme security review</a> vašeho webu. <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Domluvte si audit</a> - identifikujeme vulnerabilities předtím než to udělají hackeři.</p>
    `,
    contentEN: `
      <h2>🔒 Web Security Basics</h2>
      <p>Essential security principles every developer should know.</p>
      <p><strong>Need security audit?</strong> <a href="/#contact" class="text-emerald-400 hover:underline font-bold">Schedule an audit</a>.</p>
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
