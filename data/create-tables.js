/* eslint-disable no-console */
import client from '../lib/client.js';
import quotes from './twinpeaksquotes.js';
import people from './people.js';

// async/await needs to run in a function
run();

async function run() {
  try {
    // run a query to create tables
    await client.query(` 
    CREATE TABLE persons (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT NOT NULL
    );
    CREATE TABLE lclquotes (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      quote_text TEXT NOT NULL,
      quote_text_only TEXT NOT NULL,
      persons_id BIGINT REFERENCES persons(id) NOT NULL
    );
    `);

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

    console.log('create tables complete');
  } catch (err) {
    // problem? let's see the error...
    console.log(err);
  } finally {
    // success or failure, need to close the db connection
    client.end();
  }
}
