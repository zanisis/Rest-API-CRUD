const mongoose = require('mongoose');
var Schema = mongoose.Schema

const foodSchema = new Schema({
  name: String,
  price: Number,
  expired_date: Date
})

let Food = mongoose.model('Food', foodSchema)

module.exports = Food;
