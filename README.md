# Auroriqa - Personal Developer Portfolio

Moderní, interaktivní portfolio web s 3D efekty, custom cursorem, glassmorphic designem a pokročilými animacemi.

## ✨ Features

- 🎨 **Čistý Hero Layout** s animovanými slovy a 3D efekty
- 🌟 **3D Three.js Animace** - animované koule a částice
- 💎 **Glassmorphic UI** - průhledné komponenty s blur efekty po celém webu
- 🖱️ **Custom Cursor** - interaktivní kurzor reagující na hover
- 📊 **Scroll Progress Bar** - gradient progress bar při scrollování
- 🎭 **Framer Motion Animace** - plynulé přechody a hover efekty
- ✨ **Floating Particles** - animované částice v pozadí
- 📱 **Plně responzivní** - optimalizováno pro všechna zařízení
- ⚡ **Next.js 14** - rychlý, moderní framework
- 🎯 **TypeScript** - typová bezpečnost
- 🌈 **Tailwind CSS** - moderní styling

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber, @react-three/drei
- **Animations:** Framer Motion
- **Effects:** React Parallax Tilt
- **Icons:** Lucide React

## 🚀 Instalace a spuštění

1. **Nainstalujte dependencies:**
```bash
npm install
```

2. **Spusťte development server:**
```bash
npm run dev
```

3. **Otevřete prohlížeč:**
Přejděte na [http://localhost:3000](http://localhost:3000)

## 📦 Build pro produkci

```bash
npm run build
npm start
```

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
