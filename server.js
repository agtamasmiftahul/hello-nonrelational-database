const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection error :'));
db.once('open', () => {
  console.log('MongoDB connected');
});