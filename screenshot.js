import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  
  const urls = [
    { url: 'http://localhost:5173/about', name: 'about' },
    { url: 'http://localhost:5173/services', name: 'services' },
    { url: 'http://localhost:5173/people', name: 'people' },
    { url: 'http://localhost:5173/people/mona-trivedi', name: 'people_detail' }
  ];

  for (const item of urls) {
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2' });
      await page.screenshot({ path: `/Users/ayush/.gemini/antigravity-ide/brain/5a06ac5d-5b03-4986-b88e-e582854974ae/${item.name}_mobile.png`, fullPage: true });
      console.log(`Screenshot saved for ${item.name}`);
    } catch (e) {
      console.log(`Failed for ${item.name}: ${e}`);
    }
  }

  await browser.close();
})();
