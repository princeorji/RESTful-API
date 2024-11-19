const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

// Handle errors.
app.use(errorHandler);

module.exports = app;
