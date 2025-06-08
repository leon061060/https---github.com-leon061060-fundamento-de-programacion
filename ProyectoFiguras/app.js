import express from 'express';

const app = express();
const port = 3000;

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});