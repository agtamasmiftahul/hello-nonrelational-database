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

// // POST data (save,create,insert)
// anne.save(function(err) {
//   if (err) throw err;
//
//   console.log('Heroes saved successfully!');
// });

// // GET all data (find)
// Heroes.find((err, heroes) => {
//   if (err) throw err;
//   console.log(heroes);
// });

// // GET one data (find -> property)
// Heroes.find({
//   name: 'Tom'
// }, (err, hero) => {
//   if (err) throw err;
//   console.log(hero);
// });
//
// // GET by id (finById)
// Heroes.findById('5a6feaf42f20d17834c872b3', (err, hero) => {
//   if (err) throw err;
//   console.log(hero);
// });

// UPDATE data (findById,findOneAndUpdate,findByIdAndUpdate)
Heroes.findOneAndUpdate({
  name: 'Tom'
}, {
  name: 'Brooklyn',
  age: 31
}, (err, hero) => {
  if (err) throw err;
  console.log(hero);
});