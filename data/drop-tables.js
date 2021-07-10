/* eslint-disable no-console */
import client from '../lib/client.js';

run();

async function run() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS persons CASCADE;
      DROP TABLE IF EXISTS lclquotes CASCADE;
    `);

    console.log('drop tables complete');
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}