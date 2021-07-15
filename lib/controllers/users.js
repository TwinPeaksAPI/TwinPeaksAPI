import { Router } from 'express';
import User from '../models/User.js';

export default Router()

  .post('/api/users', (req, res, next) => {
    console.log(req.body);

    User.insert(req.body)

      .then(user => res.send(user))
      .catch(next);
  });

