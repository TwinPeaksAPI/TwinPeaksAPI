/* eslint-disable no-console */
import client from '../lib/client.js';
import quotes from './twinpeaksquotes.js';
import people from './people.js';
import junction from './junction.js';

// async/await needs to run in a function
run();

async function run() {
  try {
    // run a query to create tables
    await client.query(` 
    CREATE TABLE persons (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name TEXT NOT NULL,
      occupation TEXT,
      age TEXT,
      hair_color TEXT,
      eye_color TEXT,
      actor TEXT,
      image TEXT
      
    );
    CREATE TABLE quotes (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      quote_text TEXT NOT NULL,
      quote_text_only TEXT NOT NULL
    );
    CREATE TABLE quotes_persons_junction (
      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      persons_id SMALLINT NOT NULL,
      quotes_id SMALLINT NOT NULL
    );
    `);

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
          INSERT INTO quotes (quote_text, quote_text_only)
          VALUES ($1, $2)
          RETURNING *;
        `,
          [quote.quoteText, quote.quoteTextOnly]);
      })
    );

    await Promise.all(
      junction.map(item => {
        return client.query(`
          INSERT INTO quotes_persons_junction (persons_id, quotes_id)
          VALUES ($1, $2)
          RETURNING *;
        `,
          [item.persons_id, item.quotes_id]);
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
export default run;
