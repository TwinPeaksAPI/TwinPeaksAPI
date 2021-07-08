import { Router } from 'express';
import Quote from '../models/Quote';

export default Router()
  .post('/api/lclquotes', (req, res, next) => {
    console.log(req.body);
    Quote.insert(Quote)
      .then(quote => res.send(quote))
      .catch(next);
  });
