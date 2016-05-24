var mongoose = require('mongoose');
var db = require('../config.js');

var animals = mongoose.Schema({
  name: String,
  type: String,
  diet: String,
  lifespan: String,
  size: String,
  weight: String,
  image: String
});

var Animal = mongoose.model('Animal', animals);

module.exports = Todo;