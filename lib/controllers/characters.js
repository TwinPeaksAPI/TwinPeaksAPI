import { Router } from 'express';
import Character from '../models/Character.js';

export default Router()
  .get('/api/characters/:name', (req, res, next) => {
    console.log(req.params);
    Character.getCharacterInfo(req.params.name)
      .then(person => res.send(person))
      .catch(next);
  })

  .get('/api/characters', (req, res, next) => {
    Character.getAllCharacterInfo()
      .then(person => res.send(person))
      .catch(next);
  });
