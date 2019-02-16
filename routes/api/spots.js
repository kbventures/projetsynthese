const express = require('express');
const router = express.Router();

//Position Model

const Spot = require('../../models/Spot');



//@route  GET api/spots
//@desc   Get All spots
//@access Public

router.get('/',(req, res) => {
    Spot.find()
    .sort({_id: -1})
    .then(spots => res.json(spots));
});

//@route  POST api/spots
//@desc   Create an spots
//@access Public
router.post('/',(req, res) => {
    const newSpot = new Spot({
        longShort: req.body.longShort,
        amount: req.body.amount,
        openDate: req.body.openDate,
        closeDate: req.body.closeDate,
        openPrice: req.body.openPrice,
        closePrice: req.body.closePrice,
        stopLoss: req.body.stopLoss,
        comments: req.body.comments
    });

    newSpot.save().then(spot => res.json(spot));
});



//@route  DELETE api/items
//@desc   Delete a spots
//@access Public

router.delete('/:id', (req, res) => {
    Spot.findById(req.params.id)
    .then(spot => spot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;