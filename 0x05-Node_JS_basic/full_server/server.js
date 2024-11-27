/* eslint-disable import/no-unresolved */
// full_server/server.js

// eslint-disable-next-line import/no-unresolved
const express = require('express');
// eslint-disable-next-line import/extensions
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(1245);

export default app;
