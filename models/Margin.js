const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Margin Schema
const MarginSchema = new Schema({
    longShort:{
        type: Boolean,
        default: true
    },
    amount:{
        type: Number,
        required: true
    },
    openDate: {
        type: String,
        required: true
    },
    closeDate: {
        type: String
    },
    openPrice: {
        type: Number,
        default: 0.00,
        required: true
    },
    closePrice: {
        type: Number
    },
    stopLoss: {
        type: Number,
        required: true
    },
    leverage:{
        type: Number,
        default: 0.00,
        max: 3.33
    },
    marginInterest: {
        type: Number,
        required: true
    },
    liquidationPrice: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
        default: ''
    },
});
module.exports = Margin = mongoose.model('margin', MarginSchema);