const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send();
});

app.listen(port, () => {});

module.exports = app;
