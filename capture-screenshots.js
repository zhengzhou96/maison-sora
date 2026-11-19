const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Desktop screenshot
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/opt/data/profiles/coordinator/cache/maison-sora/screenshots/desktop-1440.png', fullPage: true });
  console.log('✅ Desktop screenshot captured (1440px)');
  
  // Tablet screenshot
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ path: '/opt/data/profiles/coordinator/cache/maison-sora/screenshots/tablet-768.png', fullPage: true });
  console.log('✅ Tablet screenshot captured (768px)');
  
  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '/opt/data/profiles/coordinator/cache/maison-sora/screenshots/mobile-390.png', fullPage: true });
  console.log('✅ Mobile screenshot captured (390px)');
  
  await browser.close();
  console.log('\n📸 All screenshots captured successfully!');
})();
