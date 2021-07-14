import express from 'express';
import cors from 'cors';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import quoteController from './controllers/quotes.js';
import characterController from './controllers/characters.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static('/home/grahf/alchemy/career-track-backend/TwinPeaksAPI/Public'));


app.use(cors());
app.use(express.json());
app.use(quoteController);
app.use(characterController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.get('/', (req, res, next) => {
  console.log('dsfdsafdsfdsfdsf');
  res.sendFile('index.html');
  next();
});

export default app;
