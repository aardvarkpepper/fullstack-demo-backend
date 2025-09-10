const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI); // pop a try/catch on this, or .catch... how is autoreconnect handled; test.
console.log('Attempting to connect to MongoDB'); // test invocation of require functionality

mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
});