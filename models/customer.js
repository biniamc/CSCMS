const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  bp_number: {
    type: Number
  },
  password: {
    type: String
  }
}, {
  collection: 'customer'
})

module.exports = mongoose.model('Student', customerSchema)
