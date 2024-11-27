// 6-http_express.js

// eslint-disable-next-line import/no-unresolved
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

export default app;
