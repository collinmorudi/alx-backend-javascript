/* eslint-disable import/extensions */
// 5-http.js

const http = require('http');
// eslint-disable-next-line import/no-unresolved
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(process.argv[2]);
    } catch (error) {
      res.end(error.message);
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;
