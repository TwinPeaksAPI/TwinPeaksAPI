import pool from '../utils/pool.js';

export default class Character {

  id;
  name;
  occupation;
  age;
  hairColor;
  eyeColor;
  actor;
  image;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.occupation = row.occupation;
    this.age = row.age;
    this.hairColor = row.hair_color;
    this.eyeColor = row.eye_color;
    this.actor = row.actor;
    this.image = row.image;
  }

  static async getCharacterInfo(name) {
    console.log(name);
    const { rows } = await pool.query(`
    SELECT *
    FROM persons
    WHERE persons.name = $1`, [name]);
    console.log(rows);
    return rows.map(row => new Character(row));
  }

  static async getAllCharacterInfo() {
    const { rows } = await pool.query(`
    SELECT *
    FROM persons`);
    return rows.map(row => new Character(row));
  }
}
