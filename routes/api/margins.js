const express = require('express');
const router = express.Router();

//Position Model

const Margin = require('../../models/Margin');



//@route  GET api/items
//@desc   Get All Items
//@access Public

router.get('/',(req, res) => {
    Margin.find()
    .sort({_id: -1})
    .then(margins => res.json(margins));
});

//@route  POST api/items
//@desc   Create an item
//@access Public
router.post('/',(req, res) => {
    const newMargin = new Margin({
        longShort: req.body.longShort,
        amount: req.body.amount,
        openDate: req.body.openDate,
        closeDate: req.body.closeDate,
        openPrice: req.body.openPrice,
        closePrice: req.body.closePrice,
        stopLoss: req.body.stopLoss,
        leverage: req.body.leverage,
        marginInterest: req.body.marginInterest,
        liquidationPrice: req.body.liquidationPrice,
        comments: req.body.comments
    });
    newMargin.save().then(margin => res.json(margin));
});



//@route  Delete api/items/:id
//@desc   Delete an item
//@access Public
router.delete('/:id', (req, res) => {
    Margin.findById(req.params.id)
    .then(margin => margin.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;