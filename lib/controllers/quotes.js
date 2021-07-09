import { Router } from 'express';
import Quote from '../models/Quote.js';

export default Router()
  .post('/api/lclquotes', (req, res, next) => {
    Quote.insert({ ...req.body })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/lclquotes/:persons', (req, res, next) => {
    const { persons } = req.params;
    Quote.findByName(persons)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/lclquotes', (req, res, next) => {
    Quote.findAll()
      .then(quote => res.send(quote))
      .catch(next);

  })

  .get('/api/lclquotes/:id', (req, res, next) => {
    Quote.findById(req.params.id)
      .then(quote => res.send(quote))
      .catch(next);
  });


