import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pooch from './img/pooch.png'
import venmo from './img/venmo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="topnav" id="myTopnav">
        <a href="#Rent">Rent</a>
        <a href="#Find">Find a station</a>
      </div>

      <div class="Pooch">
        <img src={pooch} class="Pooch"/>
      </div>
        <div className="Form" id="Rent">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHBRVfzP4c1MEE2-pKD21YH9Si4sXJkFwEG0agGuC_KvEICw/viewform?embedded=true" width="640" height="765" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
        <img src={venmo}/>
        <div id="Find">
          <h1> Nearby Stations </h1>
          <iframe width="80%" height="480" src="https://jdk27.carto.com/builder/61e6bebb-2d71-49fa-a61a-d2c7e87483b9/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
