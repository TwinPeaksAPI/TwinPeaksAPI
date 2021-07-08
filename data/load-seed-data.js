/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import quotes from './twinpeaksquotes.js';


run();

async function run() {

  try {

    await Promise.all(
      quotes.map(quote => {
        return client.query(`
          INSERT INTO lclquotes (quote_text, quote_text_only, persons)
          VALUES ($1, $2, $3)
          RETURNING *;
        `,
        [quote.quoteText, quote.quoteTextOnly, quote.persons]);
      })
    );

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
