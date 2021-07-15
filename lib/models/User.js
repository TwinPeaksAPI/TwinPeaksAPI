import pool from '../utils/pool.js';
import jwt from 'jsonwebtoken';

export default class User {

  id;
  email;
  passwordHash;
  username;

  constructor(row) {

    this.id = row.id;
    this.email = row.email;
    this.passwordHash = row.password_hash;
    this.username = row.username;

  }

  static async insert({ username, passwordHash, email }) {
    const { rows } = await pool.query(`
    INSERT INTO users (username, password_hash, email)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [username, passwordHash, email]);
    return new User(rows[0]);
  }

  authToken() {
    return jwt.sign({ ...this }, process.env.APP_SECRET, {
      expiresIn: '24h'
    });
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
    };
  }

  static async findByEmail(email) {

    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if(!rows[0]) return null;

    return new User(rows[0]);
  }

}