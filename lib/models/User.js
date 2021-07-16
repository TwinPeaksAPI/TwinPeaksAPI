import pool from '../utils/pool.js';
import jwt from 'jsonwebtoken';

export default class User {

  id;
  discordId;
  passwordHash;

  constructor(row) {

    this.id = row.id;
    this.discordId = row.discord_id;
    this.passwordHash = row.password_hash;

  }

  static async insert(discordId, passwordHash) {
    const { rows } = await pool.query(`
    INSERT INTO users (discord_id, password_hash)
    VALUES ($1, $2)
    RETURNING *
    `, [discordId, passwordHash]);
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
      discordId: this.discordId,
    };
  }

  static async findById(id) {

    const { rows } = await pool.query(
      'SELECT * FROM users WHERE discord_id = $1',
      [id]
    );

    if(!rows[0]) return null;

    return new User(rows[0]);
  }

}