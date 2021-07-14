import app from './lib/app.js';
import pool from './lib/utils/pool.js';

const PORT = process.env.PORT || 8030;

// import express from 'express';
// const app = express();

// app.use(express.static('Public'));

// app.get('/', (req, res) => {
//   res.send('index.html');
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
