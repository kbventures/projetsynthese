import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';







class REST extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          cryptos: []
        };
      }

      componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
          .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
          })
      }
  render() {
    return (
        <div className="REST">
              {Object.keys(this.state.cryptos).map((key) => (
                <div id="crypto-container">
                <span className="left">{key}</span>
                <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></span>
        </div>

        ))}
        </div>
    );
  }
}

export default REST;
