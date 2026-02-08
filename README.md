# Auroriqa - Prémiová Webová Agentura

Moderní, SEO-optimalizovaný web prezentující prémiové webové služby s pokročilými animacemi, aurora efekty a fulltextovým blogem.

## ✨ Features

### Design & UX
- 🎨 **Premium Aurora Effects** - dynamické barevné přechody a světelné efekty
- 💎 **Glassmorphic UI** - moderní průhledné komponenty s blur efekty
- 🎭 **Framer Motion Animace** - plynulé přechody, hover efekty a scroll animace
- 🖱️ **Interactive Elements** - pokročilé UI interakce a mikroanimace
- 📱 **Plně responzivní** - optimalizováno pro všechna zařízení
- 🌈 **Multi-layer Effects** - komplexní vrstevné efekty na tlačítkách a kartách

### SEO & Performance
- 🔍 **Full SEO Optimization**
  - Dynamický sitemap.xml
  - Robots.txt
  - Meta tags (Open Graph, Twitter Cards)
  - Structured Data (JSON-LD)
  - Canonical URLs
  - Language alternates (CS/EN)
- 📝 **Blog System** - SEO-optimalizovaný blog s dynamickým routingem
- ⚡ **Next.js 14 Performance** - server-side rendering, image optimization
- 🚀 **Core Web Vitals Optimized** - rychlé načítání, nízký CLS
- 📊 **Analytics Ready** - připraveno pro Google Analytics & GTM

### Sections
- 🏠 **Hero** - impozantní úvodní sekce s premium CTA tlačítky
- 💼 **Services** - prezentace služeb s animovanými kartami
- 📂 **Portfolio** - showcase projektů
- 👥 **About** - o týmu a společnosti
- 📰 **Blog** - fulltext blog pro SEO
- 💬 **Contact** - kontaktní formulář s animacemi
- ❓ **FAQ** - často kladené otázky
- 📄 **Footer** - komplexní footer s odkazy

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **SEO:** Next.js Metadata API, JSON-LD
- **i18n:** Custom Language Context (CS/EN)

## 🚀 Instalace a spuštění

1. **Clone repository:**
```bash
git clone https://github.com/Jump3rEU/Auroriqa.git
cd Auroriqa
```

2. **Nainstalujte dependencies:**
```bash
npm install
```

3. **Nastavte environment variables:**
```bash
cp .env.example .env.local
# Upravte .env.local s vašimi hodnotami
```

4. **Spusťte development server:**
```bash
npm run dev
```

5. **Otevřete prohlížeč:**
Přejděte na [http://localhost:3000](http://localhost:3000)

## 📦 Build pro produkci

```bash
npm run build
npm start
```

## 🔍 SEO Features

### Automaticky generované
- ✅ Sitemap: `/sitemap.xml`
- ✅ Robots: `/robots.txt`
- ✅ Manifest: `/manifest.json`
- ✅ Structured Data pro všechny stránky

### Optimalizace
- Meta tags na každé stránce
- Open Graph pro social sharing
- Twitter Cards
- Canonical URLs
- Language alternates
- Image optimization
- Code splitting
- Lazy loading

### Blog SEO
- Dynamické routy `/blog/[slug]`
- SEO-optimalizované URL slugs
- Kategorie a tagy
- Reading time
- Social sharing
- Structured data pro články

## 📁 Struktura projektu

```
auroriqa/
├── app/
│   ├── globals.css          # Globální styly
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Hlavní stránka
├── components/
│   ├── Navigation.tsx        # Sticky header s glassmorphic efektem
│   ├── Hero.tsx              # Hero sekce s 3D animacemi
│   ├── Scene3D.tsx           # 3D Three.js komponenta
│   ├── Services.tsx          # Služby s kartami
│   ├── Portfolio.tsx         # Portfolio s alternating layoutem
│   ├── FreeConcept.tsx       # Free Concept sekce
│   └── Footer.tsx            # Footer s odkazy
├── public/                   # Statické soubory
└── tailwind.config.ts        # Tailwind konfigurace
```

## 🎨 Design Features

### Hero Sekce
- Asymetrický layout (1.2fr / 0.8fr)
- Animovaná rotace slov (Weby → Aplikace → Branding → E-shopy)
- 3D Three.js koule s distortion efektem
- 4 floating karty s hover tilt efekty
- 50 floating particles s parallaxem
- Aurora glow layers (3 vrstvy gradientů)
- Grid pattern overlay (50px × 50px)

### Navigace
- Glassmorphic sticky header s blur efektem
- Language switcher (pill design)
- Mobile hamburger menu
- Hover gradient efekty

### Services
- 3 karty vedle sebe
- 3D iPhone/Laptop mockups s floating animací
- React-parallax-tilt efekty
- Glassmorphic karty s gradient borders
- Feature tags

### Portfolio
- Alternating layout (levá/pravá)
- 3D mockups s hover efekty
- Gradient borders
- Stats zobrazení

### Free Concept
- Velká centered karta
- Feature grid s ikonami
- Dual CTA buttons
- Animated background blobs

## 🎨 Barvy

- **Blue:** #3b82f6
- **Purple:** #8b5cf6
- **Pink:** #ec4899
- **Background:** #0a0a0f

## 📝 Customizace

### Změna barev
Upravte `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    blue: "#3b82f6",
    purple: "#8b5cf6",
    pink: "#ec4899",
  },
  dark: "#0a0a0f",
}
```

### Změna animovaných slov
Upravte `components/Hero.tsx`:
```typescript
const words = ["Weby", "Aplikace", "Branding", "E-shopy"];
```

### Změna obsahu
Všechny textové obsahy jsou přímo v komponentách a lze je snadno upravit.

## 📄 License

MIT License - volně k použití pro osobní i komerční účely.

## 🤝 Podpora

Pro otázky a podporu kontaktujte: info@auroriqa.com

---

Vytvořeno s ❤️ pro Auroriqa
