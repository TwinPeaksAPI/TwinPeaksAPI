import pool from '../utils/pool.js';

export default class Userquote {

  id;
  quotesId;
  usersId;

  constructor(row) {

    this.id = row.id;
    this.quotesId = row.quotes_id;
    this.usersId = row.users_id;

  }

  static async addQuote({ quotesId }, userId) {
    const { rows } = await pool.query(`
    INSERT INTO users_quotes_junction (quotes_id, users_id)
    VALUES ($1, $2)
    RETURNING *
    `, [quotesId, userId]);
    return new Userquote(rows[0]);
  }
}