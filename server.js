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



//websocket config

/*
    const BFX = require('bitfinex-api-node')
 
    const bfx = new BFX({
      apiKey: '...',
      apiSecret: '...',
     
      ws: {
        autoReconnect: true,
        seqAudit: true,
        packetWDDelay: 10 * 1000
      }
    })

const ws = bfx.ws()
 
ws.on('error', (err) => console.log(err))
ws.on('open', () => {
  ws.subscribeTrades('BTCUSD')
})
 
ws.onTrades({ symbol: 'tBTCUSD' }, (trades) => {
  console.log(`trades: ${JSON.stringify(trades)}`)
})
ws.onTradeEntry({ symbol: 'tBTCUSD' }, (trades) => {
  console.log(`te: ${JSON.stringify(trades)}`)
})
 
ws.open()
*/
/*


const ws = require('ws');
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))

/*

var ws = new WebSocket("wss://api2.bitfinex.com:3000/ws");

ws.onopen = function(){
  ws.send(JSON.stringify({"event": "subscribe","channel":"ticker","pair":"BTCUSD"}))
};

ws.onmessage = function(msg){
  var response = JSON.parse(msg.data);
  console.log(response);
};
*/


/*
const ws = require('ws');
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))

*/
