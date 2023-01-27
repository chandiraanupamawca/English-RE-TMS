const { Keyboard } = require(__dirname+"//node_modules//puppeteer");
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const googleUsername = "aduruthumalms@gmail.com";
const googlePassword = "R6VzrAkdsXDAaEOT^Tob19O5@$9@V#$Ic&u!QCGR4LO$3&ktCV";
_projectRoot = __dirname
function glog(){
   (async () => {
      const browser = await puppeteer.launch({
         headless: false,
         args:[
            '--no-sandbox',
            '--disable-gpu',
            '--enable-webgl',
            '--window-size=800,800'
         ]
      }); 
   
      const loginUrl = "https://accounts.google.com/AccountChooser?service=mail&continue=https://forms.google.com&hl=en";
      const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
      const page = await browser.newPage();
   
      await page.setUserAgent(ua);
      await page.goto(loginUrl, { waitUntil: 'networkidle2' });
      await page.type('input[type="email"]', googleUsername);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
      await page.type('input[type="password"]', googlePassword);
      await page.keyboard.press('Enter');
   })();
}

 

