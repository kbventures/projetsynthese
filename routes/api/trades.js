
const express = require('express');
const router = express.Router();

// Item Model
const Trade = require('../../models/Trade');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Trade.find()
    .sort({ date: -1 })
    .then(trades => res.json(trades));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newTrade = new Trade({
    name: req.body.name,
    amount: req.body.amount
  });
  console.log(newTrade.amount);
  newTrade.save().then(trade => res.json(trade));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Trade.findById(req.params.id)
    .then(trade => trade.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;