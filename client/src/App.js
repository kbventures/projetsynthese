import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ActiveTrades from './components/ActiveTrades';
import TradeModal from './components/TradeModal';
//import PropTypes from 'prop-types';
import REST from './components/REST';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import wsConnection from './components/wsConnection';


const URL = 'wss://api-pub.bitfinex.com/ws/2'

const msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: 'tBTCUSD' 
})
//const WebSocket = require('ws');

class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      messages: [
       {channel: Number,
        type: String,
        trades: [{
          id: Number,
          mts: Number,
          Amount: Number,
          Price: Number
        }]
      }
    ]
    };
}
    
    ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      //console.log('connected')
      //this.ws.on('open', () => this.ws.send(msg))
      console.log(msg)
      this.ws.send(msg)
    }
    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      //this.addMessage(message)
      console.log('test123',message)
      this.addMessage(message)
    }
    //this.ws.on('open', () => ws.send(msg))

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))
/*
    submitMessage = messageString => {
      // on submitting the ChatInput form, send the message, add it to the list and reset the input
      const message = { name: this.state.name, message: messageString }
      this.ws.send(JSON.stringify(message))
      this.addMessage(message)
    }

    */
  render() {

   
    return (
      <Provider store = {store}>
      {console.log('test zuwu 12', this.state.messages)}
      
        <div className="App">
            <AppNavbar />
            <Container>
            <TradeModal />
            <ActiveTrades />
            <REST />
            <div className="ws">
              {Object.keys(this.state.messages).map((data,i) => (
                <div id="crypto-container">
                <span className="left" key={ i }>{data} </span>
               
        </div>
        ))}
        
        
        </div>

        
     
            </Container>
        </div>
      </Provider>
    );
  }
}

/*
{this.state.messages.map(item => (

  console.log(this.props.data)
))}
*/



/*
<table className="table">
                <thead>
                    <tr>
                        <th>Channel</th>
                        <th>Type</th>
                        <th>ID</th>
                        <th>TimeStamp</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
            <tr>
              <td>{messages}</td>
              
              
            </tr>
*/

export default App;
