const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let heroesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: 0
  },
  style: {
    type: String,
    required: true
  },
  xp: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

module.exports = mongoose.model(`Heroes`, heroesSchema);