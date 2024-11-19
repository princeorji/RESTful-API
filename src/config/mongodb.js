const mongoose = require('mongoose');
const env = require('./config');

const mongoURI = env.DATABASE;

(async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connection established successfully');
  } catch (error) {
    console.error(error);
  }
})();
