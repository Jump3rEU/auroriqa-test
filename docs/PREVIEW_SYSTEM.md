# Preview Systém pro Klienty

Tento systém umožňuje prezentovat návrhy webů klientům přímo na tvé doméně.

## 🎯 Jak to funguje

### URL struktura
- **Seznam projektů**: `http://localhost:3000/preview`
- **Konkrétní projekt**: `http://localhost:3000/preview/demo-restaurant`

Po deployment:
- `https://auroriqa.cz/preview`
- `https://auroriqa.cz/preview/demo-restaurant`

## 📁 Struktura souborů

```
lib/
  projects.ts              # Konfigurace všech projektů

app/
  preview/
    page.tsx              # Seznam všech projektů
    [projectId]/
      page.tsx            # Zobrazení konkrétního projektu

demos/
  restaurant/
    page.tsx              # Demo restaurace
  portfolio/
    page.tsx              # Demo portfolio
  [nazev-klienta]/
    page.tsx              # Další demo projekty
```

## 🚀 Přidání nového projektu

### 1. Přidej konfiguraci do `lib/projects.ts`

```typescript
export const projects: Record<string, ProjectConfig> = {
  // ... existující projekty
  
  'muj-novy-klient': {
    id: 'muj-novy-klient',
    name: 'Název webu klienta',
    client: 'Jméno klienta',
    description: 'Popis projektu',
    active: true,
    password: 'tajneheslo', // volitelné - ochrana heslem
    createdAt: '2026-02-12',
    template: 'custom'
  }
};
```

### 2. Vytvoř demo stránku v `demos/muj-novy-klient/page.tsx`

```typescript
'use client';

export default function MujNovyKlient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Tvůj custom design pro klienta */}
      <h1>Web pro klienta</h1>
    </div>
  );
}
```

### 3. Přidej import v `app/preview/[projectId]/page.tsx`

```typescript
// Na začátek souboru
const DemoMujKlient = dynamic(() => import('@/demos/muj-novy-klient/page'), { ssr: false });

// Do funkce renderProject()
switch (project.id) {
  // ... existující cases
  case 'muj-novy-klient':
    return <DemoMujKlient />;
}
```

## 🔐 Ochrana heslem

Pro ochranu projektu přidej do konfigurace:

```typescript
{
  id: 'tajny-projekt',
  password: 'bezpecneheslo123',
  // ... další nastavení
}
```

Klient bude muset zadat heslo před zobrazením.

## 🎨 Dostupné templaty

- `default` - základní design
- `business` - pro firmy (restaurace, služby)
- `portfolio` - pro portfolia (fotograf, designer)
- `landing` - landing page
- `custom` - vlastní design

## 📋 Aktivace/Deaktivace projektu

Změň `active` na `false` pro skrytí projektu:

```typescript
{
  id: 'stary-projekt',
  active: false,  // Projekt se nezobrazí v seznamu
  // ...
}
```

## 🌐 Deployment

Po nahrání na server budou projekty dostupné na:
- `https://auroriqa.cz/preview` - seznam
- `https://auroriqa.cz/preview/[project-id]` - konkrétní projekt

## 💡 Tipy

1. **Sdílení s klientem**: Pošli klientovi link `auroriqa.cz/preview/jeho-projekt`
2. **Heslo**: Pokud chceš projekt chránit, nastav password
3. **Deaktivace**: Místo mazání projektu ho pouze deaktivuj (`active: false`)
4. **Organizace**: Každý klient může mít vlastní složku v `demos/`

## 🎯 Příklad workflow

1. Klient chce náhled nového webu
2. Vytvoříš nový projekt v `lib/projects.ts`
3. Vytvoříš design v `demos/nazev-klienta/page.tsx`
4. Přidáš import do preview stránky
5. Pošleš klientovi link: `auroriqa.cz/preview/nazev-klienta`
6. Klient vidí náhled a dá feedback
7. Po dokončení můžeš projekt deaktivovat nebo smazat

## 🔧 Lokální testování

```bash
npm run dev
```

Návštěv: `http://localhost:3000/preview`
