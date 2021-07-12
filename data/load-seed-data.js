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
<<<<<<< HEAD
        [quote.quoteText, quote.quoteTextOnly, quote.persons]);
=======
        [quote.quoteText, quote.quoteTextOnly, quote.personsId]);
>>>>>>> e545dd4dbfee3e081aef1e19eed868ded012f642
      })
    );

    console.log('seed data load complete');
<<<<<<< HEAD
    
  } catch(err) {
=======
  }
  catch(err) {
>>>>>>> e545dd4dbfee3e081aef1e19eed868ded012f642
    console.log(err);
  }
  finally {
    client.end();
  }

}



