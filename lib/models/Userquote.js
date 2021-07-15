import pool from '../utils/pool.js';

export default class Userquote {

  id;
  quotesId;
  usersId;
  quoteText

  constructor(row) {

    this.id = row.id;
    this.quotesId = row.quotes_id;
    this.usersId = row.users_id;
    this.quoteText = row.quote_text

  }

  static async addQuote(quotesId, userId) {
    const { rows } = await pool.query(`
    INSERT INTO users_quotes_junction (quotes_id, users_id)
    VALUES ($1, $2)
    RETURNING *
    `, [quotesId, userId]);
    return new Userquote(rows[0]);
  }

  static async getQuotes(id) {
    const { rows } = await pool.query(`
    SELECT quotes_id, users_id, quote_text
    FROM users_quotes_junction
    LEFT JOIN quotes ON quotes.id = users_quotes_junction.quotes_id
    LEFT JOIN users ON users.id = users_quotes_junction.users_id
    WHERE users_id = $1
    `, [id]);
    return rows.map(row => new Userquote(row));
  }
}
