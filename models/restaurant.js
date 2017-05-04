const mongoose = require('mongoose');
var Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
})

let Rest = mongoose.model('Rest', restaurantSchema)

module.exports = Rest;