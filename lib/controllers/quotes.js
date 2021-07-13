import { Router } from 'express';
import Quote from '../models/Quote.js';

export default Router()
  .post('/api/lclquotes', (req, res, next) => {
    Quote.insert({ ...req.body })
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/characters/:name', async (req, res, next) => {
    Quote.findByName(req.params.name)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes', async (req, res, next) => {
    Quote.findAll()
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/random', (req, res, next) => {
    Quote.getRandomQuote()
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/:id', (req, res, next) => {
    Quote.findById(req.params.id)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/search/:letters', (req, res, next) => {
    Quote.searchKeyword(req.params.letters)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/limit/:limit', (req, res, next) => {
    Quote.limitQuotes(req.params.limit)
      .then(quote => res.send(quote))
      .catch(next);
  })

  .get('/api/quotes/characters/random/:character', (req, res, next) => {
    Quote.randomQuoteByCharacter(req.params.character)
      .then(quote => res.send(quote))
      .catch(next);
  });


