# RELEASE NOTES — Auroriqaa Audit Merge

## Release branch
- `chore/release-auroriqaa-audit-merge`
- Base: `master`
- Merged branches:
  - `fix/auroriqaa-uiux-audit` (includes commit `5219282`)
  - `fix/auroriqaa-functional-perf-seo` (includes commit `1687ee0`)

## Co bylo sloučeno
- UI/UX audit změny napříč hlavními sekcemi (`Hero`, `Navigation`, `Button`, `Contact`, `HowWeWork`, `ShowcasePortfolio`, `FAQ`, styling v `app/globals.css`).
- Funkční/performance/SEO změny:
  - úpravy `app/layout.tsx` a `components/PageClient.tsx`
  - vylepšené API routy `app/api/contact/route.ts` a `app/api/analytics/route.ts`
  - přidány právní stránky: `app/privacy/page.tsx`, `app/cookies/page.tsx`
  - refactor `components/ContactPopup.tsx`
  - přidán Playwright audit skript a artefakty (`scripts/playwright-audit.cjs`, `artifacts/playwright/*`, `AUDIT_PLAYWRIGHT_AURORIQAA.md`)

## Hotovo designově
- Sjednocený vizuální styl CTA/komponent.
- Upravená hero sekce a navigace (desktop/mobile chování + prezentace).
- Vyladěné spacingy/typografie a konzistence sekcí podle UI/UX auditu.

## Hotovo funkčně / perf / SEO
- Stabilizované loading/chování klíčových komponent (preferovány novější funkční fixy z `fix/auroriqaa-functional-perf-seo`).
- Rozšířené API handlery a lepší robustnost u kontaktního flow.
- SEO/metadata a struktura legal stránek doplněna (`/privacy`, `/cookies`).
- Build i lint pro release branch prochází bez chyb.

## Známé nedodělky (neblokuje release)
- Playwright audit hlásí **partial fail kolem popup scénáře** (contact popup flow) — viz `AUDIT_PLAYWRIGHT_AURORIQAA.md`.
- Artefakty ze scénáře existují, ale popup krok není 100% stabilní ve všech bězích.
- Doporučení: dořešit stabilitu selektorů/timeoutů v popup testu po deployi.

## Post-deploy checklist
- [ ] Ověřit produkční kontaktní formulář end-to-end (odeslání + API response).
- [ ] Ověřit analytics endpoint v produkci (`/api/analytics`).
- [ ] Ručně zkontrolovat `/privacy` a `/cookies` (obsah, interní linky, indexace).
- [ ] Spustit Playwright audit po deployi a potvrdit popup flow.
- [ ] Zkontrolovat Core Web Vitals (LCP/CLS/INP) na homepage.
- [ ] Ověřit mobilní navigaci a CTA interakce na reálném zařízení.
