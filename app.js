const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);

const api = require(`./routes/api/index`);

const app = express();
const db = mongoose.connection;

const url = `mongodb://localhost/test`;
const successMessage = `You're connected to MongoDB`;
const errorMessage = `Connection error : `;

mongoose.connect(url);
db.on(`error`, console.log.bind(console, errorMessage));
db.once(`open`, () => {
  console.log(successMessage);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(`/api`, api);

module.exports = app;