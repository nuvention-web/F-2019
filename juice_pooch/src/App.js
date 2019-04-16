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
        <CaseComponent id="1" type="Lightning"/>
        <CaseComponent id="2" type="Lightning"/>
        <CaseComponent id="3" type="Lightning"/>
        <CaseComponent id="4" type="Android"/>
        <CaseComponent id="5" type="Android"/>
        <CaseComponent id="6" type="Android"/>

      </div>
    );
  }
}

export default App;
