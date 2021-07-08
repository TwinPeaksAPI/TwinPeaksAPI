import pool from '../utils/pool.js';

export default class Quote {
  id;
  quoteText;
  quoteTextOnly;
  persons;

  constructor(row) {
    this.id = row.id;
    this.quoteText = row.quote_text;
    this.quoteTextOnly = row.quote_text_only;
    this.persons = row.persons;
  }

  static async insert({ quoteText, quoteTextOnly, persons }) {
    const { rows } = await pool.query(`
    INSERT INTO lclquotes (quote_text, quote_text_only, persons)
    VALUES ($1, $2, $3)
    RETURNING *`, [quoteText, quoteTextOnly, persons]);
    console.log(quoteText)
    return new Quote(rows[0]);
  }
}