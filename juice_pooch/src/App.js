import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pooch from './img/pooch.png'
import venmo from './img/venmo.jpg'

import CaseComponent from './components/Case/Case.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaseComponent/>
        <CaseComponent/>
        <CaseComponent/>

      </div>
    );
  }
}

export default App;
