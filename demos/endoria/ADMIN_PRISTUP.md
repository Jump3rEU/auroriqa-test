# 🔐 Admin Panel - Přístup a dokumentace

## 🚪 Jak se dostat do Admin Panelu

### Krok 1: Navigace
Otevři prohlížeč a přejdi na:
```
http://localhost:3000/admin
```
nebo na produkční doméně:
```
https://endoria.eu/admin
```

### Krok 2: Přihlášení
Výchozí přihlašovací údaje:
- **Username:** `admin`
- **Password:** `endoria2026`

### Krok 3: Dashboard
Po úspěšném přihlášení budeš přesměrován na:
```
http://localhost:3000/admin/dashboard
```

---

## 🛠️ Funkce Admin Panelu

### 1. **Správa týmu** (Team Management)
- ✅ Přidávání/odebírání členů týmu
- ✅ Editace jmen, rolí a popisů
- ✅ Zobrazuje se na stránce `/tym`

**Defaultní členové:**
- SetProfile (Owner)
- Lacjim168 (Co-Owner)
- FaZeTraRanTula (Elite Helper)
- Sh1payy (Trial Helper)
- vlk_1 (Trial Helper)

### 2. **Server Info**
- ✅ Minecraft Server IP: `mc.endoria.eu`
- ✅ Minecraft verze: `1.21 - 1.21.11`
- ✅ Hytale Server IP: `hytale.endoria.eu`
- ✅ Discord URL: `https://discord.endoria.eu`

### 3. **Social Media Links**
- ✅ YouTube: `@endoriaeu`
- ✅ Instagram: `@endoriaeu`
- ✅ TikTok: `@endoriaeu`
- ✅ Discord: `discord.endoria.eu`

### 4. **Připraveno pro rozšíření:**
- 📝 Pravidla (Rules)
- 🗳️ Hlasování (Voting)
- ⭐ Nábor (Recruitment)

---

## 💾 Ukládání dat

### Aktuálně (Development):
Data se ukládají do **LocalStorage** prohlížeče.

**Klíče v LocalStorage:**
- `adminAuth` - Autentizace (true/false)
- `adminUser` - Uživatelské jméno
- `teamMembers` - JSON array členů týmu
- `serverInfo` - JSON objekt server informací
- `socialLinks` - JSON objekt social links

### Pro produkci (Doporučení):
1. **Backend API** - Next.js API Routes (`/api/admin/*`)
2. **Databáze** - MongoDB/PostgreSQL/Supabase
3. **Auth** - NextAuth.js nebo JWT tokens
4. **Validace** - Zod schema validation
5. **Rate limiting** - Ochrana proti abuse

---

## 🔒 Bezpečnost

### ⚠️ DŮLEŽITÉ - Před publikováním:

1. **Změň heslo!**
   - Soubor: `app/admin/page.tsx`
   - Řádek: `if (username === "admin" && password === "endoria2026")`
   - Změň na silné heslo nebo implementuj backend auth

2. **Přidej .env soubor:**
   ```env
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=tvoje_silne_heslo_zde
   JWT_SECRET=nahodny_string_pro_jwt
   ```

3. **Implementuj backend autentizaci:**
   ```typescript
   // app/api/auth/login/route.ts
   import { NextResponse } from 'next/server';
   import bcrypt from 'bcryptjs';
   
   export async function POST(request: Request) {
     const { username, password } = await request.json();
     
     // Ověř proti databázi
     const hashedPassword = await bcrypt.hash(password, 10);
     // ... validace
     
     return NextResponse.json({ success: true });
   }
   ```

4. **Middleware pro protected routes:**
   ```typescript
   // middleware.ts
   export function middleware(request: NextRequest) {
     if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
       // Ověř JWT token
       const token = request.cookies.get('auth-token');
       if (!token) {
         return NextResponse.redirect('/admin');
       }
     }
   }
   ```

---

## 🎨 Customizace Admin Panelu

### Přidání nové sekce:

1. **Přidej tab do sidebaru** (`app/admin/dashboard/page.tsx`):
   ```typescript
   { id: "announcements", icon: FaBullhorn, label: "Oznámení" }
   ```

2. **Vytvoř content pro tab:**
   ```typescript
   {activeTab === "announcements" && (
     <div className="backdrop-blur-xl bg-black/40 border border-pink-500/20 rounded-2xl p-8">
       <h2>Správa oznámení</h2>
       {/* Tvůj content */}
     </div>
   )}
   ```

3. **Přidej state pro data:**
   ```typescript
   const [announcements, setAnnouncements] = useState<Announcement[]>([]);
   ```

---

## 📊 Připravené funkce k implementaci

### 1. **Rich Text Editor** pro pravidla
```bash
npm install @tiptap/react @tiptap/starter-kit
```

### 2. **Image Upload** pro galerii
```bash
npm install react-dropzone
```

### 3. **Analytics Dashboard**
```bash
npm install recharts
```

### 4. **Form Builder** pro nábor
- Dynamické pole formuláře
- Validační pravidla
- Export dat do CSV

---

## 🔄 API Endpoints (Pro budoucnost)

```typescript
// Team Management
GET    /api/admin/team        - Získat všechny členy
POST   /api/admin/team        - Přidat člena
PUT    /api/admin/team/:id    - Upravit člena
DELETE /api/admin/team/:id    - Odstranit člena

// Server Info
GET    /api/admin/server      - Získat info
PUT    /api/admin/server      - Upravit info

// Social Links
GET    /api/admin/social      - Získat linky
PUT    /api/admin/social      - Upravit linky

// Rules
GET    /api/admin/rules       - Získat pravidla
PUT    /api/admin/rules       - Upravit pravidla

// Voting
GET    /api/admin/voting      - Získat vote sites
PUT    /api/admin/voting      - Upravit vote sites

// Recruitment
GET    /api/admin/applications - Získat přihlášky
GET    /api/admin/applications/:id - Detail přihlášky
PUT    /api/admin/applications/:id - Schválit/zamítnout
```

---

## ✅ Checklist před publikováním

- [ ] Změnit admin username a password
- [ ] Přidat backend API pro ukládání dat
- [ ] Implementovat databázi (MongoDB/PostgreSQL)
- [ ] Přidat NextAuth.js nebo JWT autentizaci
- [ ] Vytvořit middleware pro protected routes
- [ ] Implementovat rate limiting
- [ ] Přidat HTTPS (SSL certifikát)
- [ ] Testovat na různých zařízeních
- [ ] Přidat error handling
- [ ] Implementovat backup systém pro data
- [ ] Přidat audit log (kdo co změnil)
- [ ] Nasadit na produkci (Vercel/Netlify)

---

## 🚀 Quick Start (Development)

```bash
# 1. Spusť dev server
npm run dev

# 2. Otevři admin
http://localhost:3000/admin

# 3. Přihlaš se
Username: admin
Password: endoria2026

# 4. Upravuj obsah v dashboardu
# 5. Klikni "Uložit změny"
# 6. Změny se uloží do LocalStorage
```

---

## 📝 Poznámky

- **LocalStorage limit:** ~5-10MB (stačí pro základní data)
- **Session:** Autentizace vyprší po zavření prohlížeče (localStorage se nesmaže, ale best practice je použít session)
- **Podpora:** Všechny moderní prohlížeče
- **Responsivní:** Ano, funguje na mobile i tabletu

---

## 🆘 Troubleshooting

### Problém: Nemůžu se přihlásit
**Řešení:** 
- Zkontroluj správnost hesla (`endoria2026`)
- Otevři DevTools (F12) → Console → zkontroluj chyby
- Smaž LocalStorage: F12 → Application → LocalStorage → Clear All

### Problém: Změny se neuloží
**Řešení:**
- Zkontroluj, že jsi kliknul "Uložit změny"
- F12 → Application → LocalStorage → ověř, že data jsou uložená
- Zkontroluj Console na JS errors

### Problém: Po odhlášení mi stále jde vstoupit
**Řešení:**
- Tvrdý refresh: `Ctrl + Shift + R`
- Smaž LocalStorage manuálně
- Zavři všechny taby s webem

---

**Made by auroriqa** 🎨
*Admin Panel V1 - Základní správa obsahu*
