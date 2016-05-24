var mongoose = require('mongoose');
var db = require('../config.js');

// Every schema maps to a MongoDB collection and defines the shape of the documents within that collection
var animals = mongoose.Schema({
  name: String,
  type: String,
  diet: String,
  lifespan: String,
  size: String,
  weight: String,
  image: String
});

// Now we compile our schema in to a model
var Animal = mongoose.model('Animal', animals);

module.exports = Animal;