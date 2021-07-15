import { Router } from 'express';
import Userquote from '../models/Userquote.js';
import ensureAuth from '../middleware/ensure-auth.js';

export default Router() 

  .post('/api/users/add/:id', ensureAuth, (req, res, next) => {
    Userquote.addQuote(req.body.quotesId, req.params.id)
      .then(userQuote => res.send(userQuote))
      .catch(next);
  })

  .get('/api/users/:id', (req, res, next) => {
    Userquote.getQuotes(req.params.id)
      .then(quotes => res.send(quotes))
      .catch(next);
  });
