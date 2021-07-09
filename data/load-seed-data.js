/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import quotes from './twinpeaksquotes.js';
import people from './people.js';

run();

async function run() {

  try {

    await Promise.all(
      people.map(person => {
        return client.query(`
        INSERT INTO persons (name)
        VALUES ($1)
        RETURNING *;
      `,
        [person.name]);
      })
    );


    await Promise.all(
      quotes.map(quote => {
        return client.query(`
          INSERT INTO lclquotes (quote_text, quote_text_only, persons_id)
          VALUES ($1, $2, $3)
          RETURNING *;
        `,
        [quote.quoteText, quote.quoteTextOnly, quote.personsId]);
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



