import express from 'express';
import cors from 'cors';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import quoteController from '../lib/controllers/quotes.js';
import characterController from '../lib/controllers/characters.js';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const reqPath = path.join(__dirname, '../');

console.log(__dirname);

const app = express();

app.use(express.static(__dirname));

app.use(cors());
app.use(express.json());
app.use(quoteController);
app.use(characterController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
