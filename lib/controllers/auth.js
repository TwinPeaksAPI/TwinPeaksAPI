import { Router } from 'express';
import UserService from '../services/UserServices.js';

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export default Router()

  .post('/api/auth/signup/:id', (req, res, next) => {

    UserService.create(req.params.id)
      .then(user => {
        res.cookie('session', user.authToken(), {
          httpOnly: true,
          maxAge: ONE_DAY_IN_MS
        });
        res.send(user);
      })
      .catch(next);
  })

  .post('/api/auth/login/:id', (req, res, next) => {
    UserService.authorize(req.params.id)
      .then(user =>  {
        res.cookie('session', user.authToken(), {
          httpOnly: true,
          maxAge: ONE_DAY_IN_MS
        });
        res.send(user);
      })
      .catch(next);
  });



