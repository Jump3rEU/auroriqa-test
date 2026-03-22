const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium, devices } = require('@playwright/test');

(async () => {
  const baseUrl = 'http://localhost:3000';
  const outDir = path.resolve('artifacts/playwright');
  await fs.mkdir(outDir, { recursive: true });

  const results = [];
  const push = (name, ok, details = '') => results.push({ name, ok, details });

  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: path.join(outDir, '01-initial-load.png'), fullPage: true });
    push('Initial load screenshot', true, '01-initial-load.png');

    await page.waitForTimeout(3200); // let loading transition finish
    await page.waitForSelector('header a:has-text("AURORIQA")', { timeout: 15000 });

    await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'instant' }));
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outDir, '02-scrolled-header.png'), fullPage: false });
    push('Scrolled header screenshot', true, '02-scrolled-header.png');

    await page.click('a[href="#services"]');
    await page.waitForTimeout(500);
    const yAfterServices = await page.evaluate(() => window.scrollY);
    push('Anchor link #services works', yAfterServices > 100, `scrollY=${yAfterServices}`);

    const ctaButton = page.locator('header').getByRole('button', { name: /konzultace|consultation/i }).first();
    await ctaButton.click();
    let popupVisible = false;
    try {
      await page.waitForSelector('h2:has-text("Zdarma konzultace")', { timeout: 3000 });
      popupVisible = true;
    } catch {}
    await page.screenshot({ path: path.join(outDir, '03-contact-popup.png'), fullPage: true });
    push('Contact popup opens', popupVisible, '03-contact-popup.png');
    await page.keyboard.press('Escape');

    await page.goto(`${baseUrl}/privacy`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outDir, '04-legal-privacy.png'), fullPage: true });
    push('Privacy page loads', true, '04-legal-privacy.png');

    await page.goto(`${baseUrl}/cookies`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outDir, '05-legal-cookies.png'), fullPage: true });
    push('Cookies page loads', true, '05-legal-cookies.png');

    await context.close();

    const mobileContext = await browser.newContext({ ...devices['iPhone 13'] });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await mobilePage.waitForTimeout(3200);
    await mobilePage.getByRole('button', { name: /Menu/i }).click();
    await mobilePage.waitForTimeout(300);
    await mobilePage.screenshot({ path: path.join(outDir, '06-mobile-nav.png'), fullPage: true });
    push('Mobile nav screenshot', true, '06-mobile-nav.png');

    await mobileContext.close();
  } catch (err) {
    push('Playwright run', false, String(err));
  } finally {
    await browser.close();
  }

  const summaryPath = path.join(outDir, 'summary.json');
  await fs.writeFile(summaryPath, JSON.stringify(results, null, 2), 'utf8');

  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    console.error('FAILED checks:', failed);
    process.exit(1);
  }

  console.log('Playwright audit completed:', results.length, 'checks');
})();
