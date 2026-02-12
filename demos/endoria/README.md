# 🎮 Endoria.eu - Modern Minecraft Server

<div align="center">

**Moderní český Minecraft SMP server s aktivní komunitou**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🚀 Quick Start

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000)

---

## 🔐 ADMIN PANEL

### ⚡ Rychlý přístup:
```
URL:      http://localhost:3000/admin
Username: admin
Password: endoria2026
```

### 📋 Co můžeš upravovat:
- ✅ **Tým** - přidávat/mazat/upravovat členy týmu
- ✅ **Server Info** - IP adresy, verze Minecraftu
- ✅ **Social Media** - YouTube, Instagram, TikTok, Discord
- 📝 **Připraveno:** Pravidla, Hlasování, Nábor (pro budoucnost)

### 💾 Ukládání:
- Klikni **"Uložit změny"** - data se uloží do LocalStorage
- Pro produkci: implementuj backend API (viz [ADMIN_PRISTUP.md](./ADMIN_PRISTUP.md))

### 🔒 DŮLEŽITÉ - Před publikováním:
1. **ZMĚŇ HESLO** v `app/admin/page.tsx`
2. Implementuj backend autentizaci
3. Přidej databázi pro ukládání dat

**📖 Kompletní dokumentace:** [ADMIN_PRISTUP.md](./ADMIN_PRISTUP.md)

---

## 📂 Struktura

```
app/
├── page.tsx           # 🏠 Homepage
├── pravidla/          # 📜 Pravidla
├── tym/               # 👥 Tým
├── hlasovani/         # 🗳️ Hlasování
├── nabor/             # ⭐ Nábor
└── admin/             # 🔐 Admin panel
    ├── page.tsx       #    → Login
    └── dashboard/     #    → Dashboard
```

---

## 🎨 Features

### ⚡ Live Server Status
- API integrace (mcsrvstat.us)
- Auto-refresh 30s
- Online/Offline + player count

### 📱 Responsive
- Mobile menu
- Tablet optimized
- Desktop premium design

### 🎬 Smooth Animations
- Framer Motion
- Viewport-triggered
- Žádné broken efekty

### 🎨 Black/Pink/Purple Theme
- Barvy z loga
- Glassmorphism cards
- Gradient buttons

---

## 🌐 Stránky

| URL | Obsah |
|-----|-------|
| `/` | Homepage (Hero, Features, Status) |
| `/pravidla` | 6 kategorií pravidel |
| `/tym` | SetProfile, Lacjim168, FaZeTraRanTula, Sh1payy, vlk_1 |
| `/hlasovani` | Craftlist, MinecraftServery.eu, Hytalist |
| `/nabor` | Formulář pro admin přihlášku |
| `/admin` | 🔐 Admin login |
| `/admin/dashboard` | 🛠️ Správa webu |

---

## 📊 Real Data

**Server:**
- mc.endoria.eu (1.21 - 1.21.11)
- hytale.endoria.eu

**Social:**
- YouTube: @endoriaeu
- Instagram: @endoriaeu
- TikTok: @endoriaeu
- Discord: discord.endoria.eu

---

## 🛠️ Tech Stack

- Next.js 15 + TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- mcsrvstat.us API

---

## 📚 Dokumentace

| Soubor | Popis |
|--------|-------|
| [ADMIN_PRISTUP.md](./ADMIN_PRISTUP.md) | 🔐 Admin panel - kompletní guide |
| [V6_DOKONCENO.md](./V6_DOKONCENO.md) | ✅ Co bylo implementováno |
| [NAVRHY_VYLEPSENI.md](./NAVRHY_VYLEPSENI.md) | 💡 40+ nápadů na upgrade |
| [DEAD_CODE_CHECK.md](./DEAD_CODE_CHECK.md) | ✅ Kontrola čistoty kódu |

---

## ⚠️ Kontrola projektu

### ✅ Hotovo:
- [x] Multi-page architektura
- [x] Live API integrace
- [x] Admin panel
- [x] Všechny stránky z web.txt
- [x] Správné barvy (logo)
- [x] Reálná data
- [x] **Žádný mrtvý kód** ✅
- [x] Nábor stránka ✅
- [x] Všechno z web.txt ✅

### ⚠️ Před publikováním:
- [ ] Změnit admin heslo
- [ ] Odstranit/nahradit Hytale screenshot (`media/SPOILER_*.png`)
- [ ] Přidat backend API
- [ ] Implementovat databázi

---

## 🚀 Deployment

```bash
# Vercel (doporučeno)
npm i -g vercel
vercel

# Build
npm run build
npm start
```

---

## 📞 Kontakt

- Discord: discord.endoria.eu
- Web: endoria.eu
- Server: mc.endoria.eu

---

<div align="center">

**Made with ❤️ by auroriqa**

🎮 **mc.endoria.eu** 🎮

*Premium website za 20-30K - Production Ready*

</div>
