const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Spot Schema
const SpotSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    openDate: {
        type: String,
        required: true
    },
    closeDate: {
        type: String,
        required: true
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
    comments: {
        type: String,
        default: ''
    },
});
module.exports = Spot = mongoose.model('spot', SpotSchema);
