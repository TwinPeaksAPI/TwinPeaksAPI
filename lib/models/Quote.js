import pool from '../utils/pool.js';

export default class Quote {

  id;
  quoteText;
  quoteTextOnly;
  personsId;

  constructor(row) {
    this.id = row.id;
    this.quoteText = row.quote_text;
    this.quoteTextOnly = row.quote_text_only;
    this.personsId = row.persons_id;
  }

  static async insert({ quoteText, quoteTextOnly, personsId }) {
    const { rows } = await pool.query(`
    INSERT INTO lclquotes (quote_text, quote_text_only, persons_id)
    VALUES ($1, $2, $3)
    RETURNING *`, [quoteText, quoteTextOnly, personsId]);
    return new Quote(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * FROM lclquotes`)
    return rows.map(row => new Quote(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM lclquotes WHERE id = $1`, [id])
    return new Quote(rows[0]);
  }

  static async findByName(name) {
    console.log(name);
    const { rows } = await pool.query(`
    SELECT * FROM persons 
    INNER JOIN lclquotes ON lclquotes.persons_id = persons.id
    WHERE persons.name = $1`, [name])
    return rows.map(row => new Quote(row));
  }

}
