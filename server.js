const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection error :'));
db.once('open', () => {
  console.log('MongoDB connected');
});

let Schema = mongoose.Schema;

let heroesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true,
    default: 0
  },
  abilities: {}
}, {
  versionKey: false
});

let Heroes = mongoose.model('Heroes', heroesSchema);

let anne = new Heroes({
  name: 'Anne',
  age: 22,
  abilities: {
    style: 'pusher',
    xp: 450,
    type: 'channel'
  }
});

// POST data (save,create,insert)
anne.save(function(err) {
  if (err) throw err;

  console.log('Heroes saved successfully!');
});