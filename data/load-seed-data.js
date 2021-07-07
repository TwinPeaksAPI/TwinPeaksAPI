import pool from '../lib/utils/pool.js';
import quotes from './twinpeaksquotes.js';

run();

async function run() {
  try {
    await Promise.all(

      quotes.map(quote => {
        return pool.query(`
        INSERT INTO quotes (quote_text, quote_text_only, persons)
        VALUES ($1, $2, $3)
        RETURNING *
        `, [quote.quoteText, quote.quoteTextOnly, quote.persons]);
      })
    );


    console.log('seed data load complete');
  }
  catch (err) {
    console.log(err);
  }
  finally {
    pool.end();
  }
}
