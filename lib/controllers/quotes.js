import { Router } from 'express';
import Quote from '../models/Quote.js';

export default Router()
  .post('/api/lclquotes', (req, res, next) => {
    Quote.insert({ ...req.body })
      .then(quote => res.send(quote))
      .catch(next);
  })
  
  .get('/api/characters/:name', (req, res, next) => {
    Quote.findByName(req.params.name)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/characters/:name', (req, res, next) => {
    Quote.findByName(req.params.name)
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
  })

  .get('/api/lclquotes/search/:letters', (req, res, next) => {
    Quote.findByLetter(req.params.letters)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/random', (req, res, next) => {
    Quote.getRandomQuote()
      .then(quote => res.send(quote))
      .catch(next);
  });
