import express from 'express';
import cors from 'cors';
import notFoundMiddleware from '../lib/middleware/not-found.js';
import errorMiddleware from '../lib/middleware/error.js';
import quoteController from './controllers/quotes.js';
import characterController from '../Public/controllers/characters.js';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const reqPath = path.join(__dirname, '/');

const app = express();

console.log(__dirname);

app.use(express.static(reqPath + '/Public'));

app.use(cors());
app.use(express.json());
app.use(quoteController);
app.use(characterController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(express.static(__dirname + '/'));
app.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
  next();
});

export default app;
