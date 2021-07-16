import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export default class UserService {

  static async create(discordId) {

    const textId = toString(discordId);

    const passwordHash = await bcrypt.hash(
      textId,
      Number(process.env.SALT_ROUNDS)
    );

    const user = await User.insert(discordId, passwordHash);

    return user;
  }

  static async authorize(id) {

    const user = await User.findById(id);

    if(!user) {
      throw new Error('Bad id you baddy');
    }

    const password = toString(id);

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if(!passwordMatch) {
      throw new Error('Bad password you baddy');
    }

    return user;
  }
}
