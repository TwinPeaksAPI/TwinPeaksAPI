import app from './Public/app.js';
import pool from './Public/utils/pool.js';

const PORT = process.env.PORT || 8035;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
