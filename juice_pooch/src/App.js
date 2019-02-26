import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pooch from './img/pooch.png'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="Pooch">
        <img src={pooch} class="Pooch"/>
      </div>
        <div className="Form">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHBRVfzP4c1MEE2-pKD21YH9Si4sXJkFwEG0agGuC_KvEICw/viewform?embedded=true" width="640" height="765" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
      </div>
    );
  }
}

export default App;
