import pool from '../lib/utils/pool.js';

run();

async function run() {
  try {

    await pool.query(`
    DROP TABLE IF EXISTS quotes;
    `);
    console.log('drop tables complete');
  }
  catch (err) {
    console.log(err);
  }
  finally {
    pool.end();
  }
}
