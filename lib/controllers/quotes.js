import { Router } from 'express';
import Quote from '../models/Quote';

export default Router()
  .post('/api/lclquotes', (req, res, next) => {
    Quote.insert({ ...req.body })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/lclquotes', (req, res, next) => {
    Quote.findAll()
      .then(quote => res.send(quote))
      .catch(next);

  });
