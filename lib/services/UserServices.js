import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export default class UserService {

  static async create({ username, password, email }) {

    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );

    const user = await User.insert({ username, passwordHash, email });

    return user;
  }

  static async authorize({ email, password }) {

    const user = await User.findByEmail(email);

    if(!user) {
      throw new Error('Bad email you baddy');
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if(!passwordMatch) {
      throw new Error('Bad password you baddy');
    }

    return user;
  }
}
