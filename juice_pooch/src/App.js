import React, { Component } from 'react';
import _ from 'lodash';
// import logo from './logo.svg';
import './App.css';
// import pooch from './img/pooch.png'
// import venmo from './img/venmo.jpg'
import Button from 'react-bootstrap/Button';

import CaseComponent from './components/Case/Case.js'
  
  const firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");  

  var config = {
    apiKey: "AIzaSyBMVF74o5DaHdq772T-rOHYS2shoc1BQbk",
    authDomain: "juicepooch-75729.firebaseapp.com",
    databaseURL: "https://juicepooch-75729.firebaseio.com",
    projectId: "juicepooch-75729",
    storageBucket: "juicepooch-75729.appspot.com",
    messagingSenderId: "637216624692"
  };



class App extends Component {
    constructor(){
      super();

      this.state = {
         chargers: [],
         numChargers: 1
      }
  }

  getChargers() {
    console.log(this.state.chargers);
    // return <h1>{this.state.chargers[0]["ID"]}</h1>;
  }

  componentDidMount() {
      
      var db = firebase.firestore();
      var i = 0;
      var current = this;

      db.collection("Chargers").get().then(function(querySnapshot) {
        var chargerlist ={};

        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data(), doc.data()["ID"], typeof(doc.data()));
          //this.setState({chargers: this.state.chargers.push(doc.data())});
          // chargerlist.push(doc.data());
          chargerlist[i] = doc.data();
          i = i + 1;
        });
        // console.log(chargerlist)
        current.setState({
            chargers:chargerlist
        });

        console.log(chargerlist[0]["ID"])

        // if (chargerlist) {
        //   
        // }

        console.log(current.state.chargers);  
      });
  }
  showChargers() {
    return _.map(this.state.chargers, (item, index) => {
      return (
          <div>
            {/* <h1>{item["Renter"]}</h1> */}
          <CaseComponent id={item['ID']} inuse={item['InUse']}/>
          </div>
        )
    })
  }

  render() {
// Make render by lodash map to go over chargers if chargers exists
// Need to make another function ^ that we call in return
// Function will use lodash map to iterate through all chargers in chargers and create a caseComponent
// Check if chargers before getting data, otherwise render nothing
      // <p> Charger 3 is being rented by {this.state.chargers[1]["ID"]} </p>);
    // if (this.state.chargers){
    // if (this.state.chargers.length > 0){
    //   console.log(this.state.chargers);
    //   // this.getChargers();
    //   return <h1>{this.state.chargers[0]["ID"]}</h1>;
    // }

    return (
      
      <div className="App">
      <div class="topnav" id="title">Juice Pooch</div>
        {this.showChargers()}
      </div>
    );
  }
}

export default App;
