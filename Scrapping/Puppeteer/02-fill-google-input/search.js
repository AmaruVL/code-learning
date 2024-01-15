const { Keyboard } = require("puppeteer");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const searchText = "This is google!";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe",
    args: [
      "--no-sandbox",
      "--disable-gpu",
      "--enable-webgl",
      "--window-size=800,800",
    ],
  });

  const loginUrl = "https://www.google.com/";
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36";
  const page = await browser.newPage();

  await page.setUserAgent(ua);
  await page.goto(loginUrl, { waitUntil: "networkidle2" });
  await page.type('textarea[type="search"]', searchText);
  await page.keyboard.press("Enter");
  // await page.waitForTimeout(2000);
  // await page.type('input[type="password"]', googlePassword);
  // await page.keyboard.press("Enter");
})();
