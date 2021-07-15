import pool from '../utils/pool.js';

export default class User {
  id;
  username;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;

  }

  static async insert({ name }) {

    const { rows } = await pool.query(`
    INSERT INTO users (username)
    VALUES ($1)
    RETURNING *
    `, [name]);
    console.log(rows);
    return new User(rows[0]);
  }
}