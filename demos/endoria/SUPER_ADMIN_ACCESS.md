# 🔒 SUPER ADMIN CONTROL CENTER

## ⚠️ DŮVĚRNÉ - Pouze pro autorizovaný personál

Tento dokument obsahuje přístupové údaje a dokumentaci k Super Admin Control Center serveru Endoria.eu.

---

## 📍 Přístup

**URL:** `https://endoria.eu/admin/superadmin`  
**Heslo:** `endoria_superadmin_2026_failsafe`

> **BEZPEČNOST:** Toto heslo **NIKDY** nesdílejte s nikým kromě důvěryhodných osob. 
> Změňte heslo v souboru `/app/admin/superadmin/page.tsx` na řádku 30.

---

## 🛡️ Funkce Super Admin Panelu

### 1️⃣ **Admin Management** 👥
- **Účel:** Správa všech administrátorů serveru
- **Funkce:**
  - ➕ Přidávání nových adminů (username, password, role)
  - 🗑️ Mazání adminů (s potvrzením)
  - 🔑 Změna hesel adminů
  - 👤 Role: Admin / Moderátor
- **Použití:** Přes tab "Admin Management" v Super Admin panelu

### 2️⃣ **Audit Log** 📜
- **Účel:** Kompletní sledování všech akcí v admin panelech
- **Co zaznamenává:**
  - Login/Logout Super Admina a běžných adminů
  - Přidání/smazání/editace adminů
  - Změny nastavení webu
  - Uložení dat (team, server, social, rules, voting, recruitment)
- **Export:** CSV soubor s kompletní historií
- **Použití:** Tab "Audit Log" zobrazuje poslední aktivity

### 3️⃣ **Maintenance Mode** 🔧
- **Účel:** Dočasně uzavře web pro veřejnost
- **Použití:** Při aktualizacích, údržbě nebo problémech
- **Efekt:** Návštěvníci uvidí údržbovou zprávu, admin má plný přístup
- **Zpráva:** Plně editovatelná v panelu

### 4️⃣ **Force Logout All Admins** 🚪
- **Účel:** Okamžitě odhlásí všechny běžné administrátory
- **Použití:** Při bezpečnostním incidentu nebo změně týmu
- **Efekt:** Všichni admins musí znovu zadat heslo

### 5️⃣ **Reset All Settings** ♻️
- **VAROVÁNÍ:** Toto je destruktivní akce!
- **Účel:** Vrátí všechna nastavení na výchozí hodnoty
- **Efekt:** 
  - Smaže všechny změny týmu
  - Resetuje server info
  - Obnoví výchozí social linky
  - Vrátí původní barvy

### 6️⃣ **Export Backup** 💾
- **Účel:** Vytvoří JSON zálohu všech nastavení
- **Použití:** Před velkými změnami nebo pravidelně
- **Obsahuje:**
  - Tým members
  - Server info
  - Social links
  - Site settings
  - Rules, Voting Sites, Recruitment
  - Admin list
  - Audit log
  - Timestamp

### 7️⃣ **Color Customization** 🎨
- **Primární barva:** Pink (#ec4899)
- **Sekundární barva:** Purple (#a855f7)
- **Efekt:** Mění barvy napříč celým webem
- **Poznámka:** Vyžaduje refresh po uložení

---

## 🚨 Bezpečnostní Doporučení

### ✅ DOPORUČENÉ POUŽITÍ:
- Export zálohy před změnami
- Aktivace Maintenance Mode při aktualizacích
- Přidávání nových adminů přes Admin Management
- Sledování Audit Logu pro bezpečnost
- Color customization pro sezónní změny

### ❌ NEDOPORUČENÉ POUŽITÍ:
- Reset Settings bez zálohy
- Force Logout bez důvodu
- Sdílení super admin hesla
- Zapomenutí vypnout Maintenance Mode
- Mazání všech adminů (nechte minimálně 1)

---

## 🔐 Změna Super Admin Hesla

**Soubor:** `/app/admin/superadmin/page.tsx`  
**Řádek:** ~44

```typescript
const SUPER_ADMIN_PASSWORD = "VAŠE_NOVÉ_HESLO";
```

**Doporučení:**
- Používejte silné heslo (min. 20 znaků)
- Kombinace písmen, čísel a speciálních znaků
- Nepoužívejte běžná slova
- Pravidelně měňte (každé 3 měsíce)

---

## 🆕 Nové funkce v Admin Dashboardu

### ✅ Plně funkční sekce:
- **Team Management** - Přidávání/editace/mazání členů týmu
- **Server Info** - Minecraft IP, verze, Hytale, Discord
- **Social Media** - YouTube, Instagram, TikTok, Discord linky
- **Rules** - Správa pravidel serveru (přidávat/editovat/mazat)
- **Voting Sites** - Seznam voting webů s odměnami
- **Recruitment** - Správa náboru (otevřeno/zavřeno, pozice, požadavky)

### 💾 Server-Based Databáze:
Všechna data se **ukládají na server** přes API routes:
- `/api/admin/data` - Ukládání obsahu webu
- `/api/admin/audit` - Audit log
- `/api/admin/admins` - Seznam adminů

Data jsou uložena v `data/` složce jako JSON soubory:
- `admin-data.json` - Obsah webu
- `audit-log.json` - Historie akcí
- `admins.json` - Seznam administrátorů

---

## 📊 Hierarchie přístupů

```
┌─────────────────────────────────┐
│   SUPER ADMIN (Control Center)  │ ← Ty
│  - Maintenance Mode             │
│  - Force logout všech           │
│  - Reset settings               │
│  - Color customization          │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│      BĚŽNÝ ADMIN (Dashboard)    │ ← Zákazník
│  - Team management              │
│  - Server info editing          │
│  - Social links editing         │
│  - Content management           │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│         NÁVŠTĚVNÍK              │
│  - Prohlížení webu              │
│  - Kopírování IP                │
│  - Připojení na server          │
└─────────────────────────────────┘
```

---

## 📝 Scénáře použití

### 🔧 **Scénář 1: Plánovaná údržba**
1. Přihlaste se do Super Admin
2. Aktivujte **Maintenance Mode**
3. Upravte zprávu (např. "Přidáváme nové funkce!")
4. Klikněte "Uložit změny"
5. Proveďte údržbu
6. Vypněte MaintenaPřidání nového admina**
1. Přihlaste se do Super Admin
2. Otevřete tab **"Admin Management"**
3. Klikněte "Přidat Admina"
4. Vyplňte username, heslo, role (Admin/Moderátor)
5. Klikněte "Přidat"
6. Admin se objeví v seznamu a může se přihlásit

### 🕵️ **Scénář 3: Kontrola aktivit**
1. Přihlaste se do Super Admin
2. Otevřete tab **"Audit Log"**
3. Prohlédněte si historii akcí
4. Filtrujte podle admina nebo akce
5. Export CSV pro podrobnou analýzu

### 🚨 **Scénář 5ypněte

### 🚨 **Scénář 3: Bezpečnostní incident**
1. Přihlaste se do Super Admin
2. Klikněte "Odhlásit všechny adminy"
3. Potvrďte akci
4. Změňte admin heslo v kódu
5. Informujte důvěryhodné adminy

### 💾 **Scénář 4: Pravidelná záloha**
1. Přihlaste se do Super Admin
2. Klikněte "Exportovat zálohu"
3. JSON soubor se stáhne
4. Uložte na bezpečné místo
5. Doporučená frekvence: týdně

---

## 🆘 Emergency Kontakty

**Vývojář:** auroriqa.cz  
**Hosting Support:** [váš hosting provider]  
**Zákazník:** [SetProfile - kontakt]

---

## 📅 Maintenance Log

| Datum | Akce | Provedl | Poznámka |
|-------|------|---------|----------|
| 2026-02-12 | Super  (fallback):
- `superAdminAuth` - Autentizace super admina
- `adminAuth` - Autentizace běžného admina
- `siteSettings` - Nastavení webu (modes, colors)

### API Endpoints (hlavní datové úložiště):
- `POST /api/admin/data` - Ukládání obsahu webu
- `GET /api/admin/data` - Načítání obsahu webu
- `POST /api/admin/audit` - Přidání záznamu do audit logu
- `GET /api/admin/audit` - Načtení audit logu
- `DELETE /api/admin/audit` - Vymazání audit logu
- `POST /api/admin/admins` - Uložení seznamu adminů
- `admins": "[{...}]",
  "teamMembers": "[...]",
  "serverInfo": "{...}",
  "socialLinks": "{...}",
  "siteSettings": "{...}",
  "rules": "[...]",
  "votingSites": "[...]",
  "recruitment": "{...}",
  "auditLog": "[...] - Obsah webu (team, server, social, rules, voting, recruitment)
- `data/audit-log.json` - Historie akcí (max 500 záznamů)
- `data/admins.json` - Seznam administrátorů
### LocalStorage Keys:
- `superAdminAuth` - Autentizace super admina
- `adminAuth` - Autentizace běžného admina
- `siteSettings` - Nastavení webu (modes, colors)
- `teamMembers` - Data týmu
- `serverInfo` - Info o serveru
- `socialLinks` - Social media linky

### Backup Structure:
```json
{
  "timestamp": "2026-02-12T10:30:00.000Z",
  "teamMembers": "[...]",
  "serverInfo": "{...}",
  "socialLinks": "{...}",
  "siteSettings": "{...}"
}
```

---

## 🔒 Finální Poznámka

**Tento panel je poslední linie obrany.**  

Používejte pouze v případě skutečné potřeby. Každá aktivace Maintenance nebo Payment Mode by měla být dokumentována v tomto souboru pro budoucí reference.

> **"With great power comes great responsibility"**  
> – Super admin má absolutní kontrolu. Používejte moudře.

---

**Vytvořeno:** 2026-02-12  
**Verze:** 1.0  
**Status:** 🟢 Aktivní

---

*© 2026 auroriqa.cz - Všechna práva vyhrazena*
