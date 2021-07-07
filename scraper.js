/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import fs from 'fs';

const getQuotes = { quotes: [] };
let getQuotesJson;
let obj;

async function scrapeQuotes(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  const quoteLength = await page.$$eval('dl', el => el.length);

  for (let i = 0; i < quoteLength; i++) {
    try {
      const quote = await page.evaluate(el => el.textContent, (await page.$$('dl'))[i]);
      let persons = quote.match(/((\S|^)[A-Z][a-z]+..[A-Z][a-z]+:.)|((\S|^)[A-Z][a-z]+:.)/gm);
      persons = persons.map(el => el.replace(/:./gm, ''));
      let quoteTextOnly = quote.replace(/((\S|^)[A-Z][a-z]+..[A-Z][a-z]+:.)|((\S|^)[A-Z][a-z]+:.)/gm, '');
      quoteTextOnly = quoteTextOnly.trim();

      obj = {
        id: i + 1,
        quoteText: quote,
        quoteTextOnly,
        persons
      };

      getQuotes.quotes.push(obj);
    } catch (err) {
      console.log(err);
    }
  }
  getQuotesJson = JSON.stringify(getQuotes);
  fs.writeFileSync('twinpeaksquotes.json', getQuotesJson);
  await browser.close();
}
scrapeQuotes('https://en.wikiquote.org/wiki/Twin_Peaks');

