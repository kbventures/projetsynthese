const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const spots = require('./routes/api/spots');
const margins = require('./routes/api/margins');
const trades = require('./routes/api/trades');

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;


//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

     ///Use Routes
  
     app.use('/api/spots',spots);
     app.use('/api/margins',margins);
     app.use('/api/trades',trades);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log('Server started on port ${port}'));