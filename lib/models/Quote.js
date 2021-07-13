import pool from '../utils/pool.js';
import { formatName } from '../utils/utils.js';

export default class Quote {

  id;
  name;
  quoteText;
  quoteTextOnly;
  personsId;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.quoteText = row.quote_text;
    this.quoteTextOnly = row.quote_text_only;
    this.personsId = row.persons_id;
  }

  static async insert({ quoteText, quoteTextOnly, personsId }) {
    const { rows } = await pool.query(`
    INSERT INTO quotes (quote_text, quote_text_only, persons_id)
    VALUES ($1, $2, $3)
    RETURNING *`, [quoteText, quoteTextOnly, personsId]);
    return new Quote(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * FROM quotes`);
    return rows.map(row => new Quote(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT * FROM quotes WHERE id = $1`, [id]);
    return new Quote(rows[0]);
  }

  static async findByName(name) {

    const formattedName = formatName(name);

    const { rows } = await pool.query(`
    SELECT quotes.id, quote_text, quote_text_only
    FROM persons
    INNER JOIN quotes_persons_junction ON persons.id = quotes_persons_junction.persons_id
    INNER JOIN quotes ON quotes.id = quotes_persons_junction.quotes_id
    WHERE quotes_persons_junction.persons_id = (SELECT id FROM persons WHERE persons.name = $1)`, [formattedName]);
    return rows.map(row => new Quote(row));
  }


  static async findByLetter(searchTerm) {
    const { rows } = await pool.query(`
    SELECT DISTINCT quotes.id, persons.name, quote_text, quote_text_only
    FROM quotes_persons_junction
    INNER JOIN persons ON persons.id = quotes_persons_junction.persons_id
    LEFT JOIN quotes ON quotes.id = quotes_persons_junction.quotes_id
    WHERE quote_text_only ILIKE  '%'||$1||'%'`, [searchTerm]);
    return rows.map(row => new Quote(row));
  }

  static async getRandomQuote() {

    const randomNumber = Math.floor(Math.random() * 183);

    const { rows } = await pool.query(`
    SELECT quotes.id, persons.name, quote_text, quote_text_only
    FROM quotes_persons_junction
    INNER JOIN persons ON persons.id = quotes_persons_junction.persons_id
    LEFT JOIN quotes ON quotes.id = quotes_persons_junction.quotes_id
    WHERE quotes.id = $1
    `, [randomNumber]);
    return new Quote(rows[0]);
  }

  static async limitQuotes(limit) {
    const { rows } = await pool.query(`
    SELECT * FROM quotes
    LIMIT $1`, [limit]);
    return rows.map(row => new Quote(row));
  }
}
