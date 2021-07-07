import pool from '../lib/utils/pool.js';

run();

async function run() {

  try {
    await pool.query(`
    CREATE TABLE quotes (
    id SERIAL PRIMARY KEY NOT NULL,
    quote_text TEXT NOT NULL,
    quote_text_only TEXT NOT NULL,
    persons TEXT NOT NULL
    );
    `);
    console.log('create tables complete');
  }
  catch (err) {
    console.log(err);
  }
  finally {
    pool.end();
  }
}

