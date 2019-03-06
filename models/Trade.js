
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TradeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Trade = mongoose.model('trade', TradeSchema);