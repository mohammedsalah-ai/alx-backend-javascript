const http = require('http');

const host = '127.0.0.1';
const port = 1245;

// when a server is created a callback must be provided to handle the
// "request" event.
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  // if the body response has all of its content known beforehand.
  // then it's optimal to just use .end to write all at once and then
  // close the response.
  // if the entire response can't be generated at once we use .write to write it one bit a time
  // but it needs to always followed with a .end
  response.end('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
