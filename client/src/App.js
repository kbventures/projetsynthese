import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ActiveTrades from './components/ActiveTrades';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ActiveTrades />
      </div>
    );
  }
}

export default App;
