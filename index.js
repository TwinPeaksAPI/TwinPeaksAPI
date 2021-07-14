import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static('Public'));

app.get('/', (req, res) => {
  console.log('poop');
  res.send('index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

