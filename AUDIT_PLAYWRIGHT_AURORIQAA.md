# AUDIT_PLAYWRIGHT_AURORIQAA

Datum: 2026-03-22
Branch: `fix/auroriqaa-functional-perf-seo`

## 1) Initial loading UX fix (FOUC / header flash)

### Co bylo upraveno
- Soubor: `components/PageClient.tsx`
- Změna:
  - hlavní obsah (`<main>`) je během loading screenu skrytý přes `opacity-0` + `pointer-events-none`
  - po dokončení loadingu proběhne fade-in přes `transition-opacity duration-500`
  - přidáno `aria-busy={isLoading}`

### Výsledek
- Header/hero už není během prvního paintu viditelný „pod“ loading overlayem.
- Přechod z loading stavu na obsah je plynulý.
- SSR/SEO zůstává zachováno (obsah je stále renderovaný, jen vizuálně skrytý do dokončení loadingu).

## 2) Playwright audit (lokálně)

### Spuštění
- App: `npm run dev` na `http://localhost:3000`
- Skript: `node scripts/playwright-audit.cjs`
- Výstup: `artifacts/playwright/summary.json`

### Screenshoty
- `artifacts/playwright/01-initial-load.png`
- `artifacts/playwright/02-scrolled-header.png`
- `artifacts/playwright/03-contact-popup.png`
- `artifacts/playwright/04-legal-privacy.png`
- `artifacts/playwright/05-legal-cookies.png`
- `artifacts/playwright/06-mobile-nav.png`

### Smoke checks
- ✅ Initial load screenshot
- ✅ Scrolled header screenshot
- ✅ Anchor link `#services` funguje (`scrollY=545`)
- ❌ Contact popup opens (v automatizovaném průchodu se nepodařilo spolehlivě potvrdit otevření popupu)
- ✅ Privacy page loads (`/privacy`)
- ✅ Cookies page loads (`/cookies`)
- ✅ Mobile nav screenshot

## 3) Quality checks

- `npm run lint` → ✅ PASS (bez warning/error)
- `npm run build` → ✅ PASS

## Shrnutí
- Loading UX fix: ✅ hotovo
- Lint/build: ✅ PASS
- Playwright smoke: ⚠️ částečný FAIL (kontakt popup check)
