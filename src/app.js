const express = require('express');
const passport = require('passport');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middleware/errorHandler');
require('./config/passport');

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/users', userRoutes);

// Handle errors.
app.use(errorHandler);

module.exports = app;
