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
        INSERT INTO persons (name, occupation, age, hair_color, eye_color, actor, image)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `,
          [person.name, person.occupation, person.age, person.hair_color, person.eye_color, person.actor, person.image]);
      })
    );

    await Promise.all(
      quotes.map(quote => {
        return client.query(`
          INSERT INTO lclquotes (quote_text, quote_text_only, persons_id)
          VALUES ($1, $2, $3)
          RETURNING *;
        `,
          [quote.quoteText, quote.quoteTextOnly, quote.persons]);
      })
    );

    console.log('seed data load complete');

  } catch (err) {
    console.log(err);
  }
  finally {
    client.end();
  }

}



