import React, { Component } from 'react';
import _ from 'lodash';
// import logo from './logo.svg';
import './App.css';
// import pooch from './img/pooch.png'
// import venmo from './img/venmo.jpg'


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
         contractor: "",
         numChargers: 1
      }
      this.handleChange = this.handleChange.bind(this);
    }
    

  getChargers() {
    // console.log(this.state.chargers);
    // return <h1>{this.state.chargers[0]["ID"]}</h1>;
  }

  handleChange(event) {
    this.setState({contractor: event.target.value});
    // console.log(this.state.contractor)
  }

  componentDidMount() {
      
      var db = firebase.firestore();
      var i = 0;
      var current = this;

      db.collection(this.state.contractor + "Chargers").get().then(function(querySnapshot) {
        var chargerlist ={};

        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //this.setState({chargers: this.state.chargers.push(doc.data())});
          // chargerlist.push(doc.data());
          // if(doc.data()['Contractor'] == this.state.contractor){
          chargerlist[i] = doc.data();
          i = i + 1;
        });
        current.setState({
            chargers:chargerlist
        });

        console.log(current.state.chargers);  
      });
  }
  // showChargers() {
  //   return _.map(this.state.chargers, (item, index) => {
  //     return (
  //         <div>
  //         <CaseComponent id={item['ID']} inuse={item['InUse']} user={this.state.contractor}/>
  //         </div>
  //       )
  //   })
  // }

  showChargers() {
    return _.map(this.state.chargers, (item, index) => {
      return (
        <div>
          {this.state.contractor == item['Contractor'] ?
                (<div><CaseComponent id={item['ID']} inuse={item['InUse']} user={this.state.contractor}/>
                  </div>):
                  (<div>
                  </div>)}
        </div>
        )
    })
  }

  render() {

    return (
      
      <div className="App">
      <div class="topnav" id="title">Juice Pooch</div>
      <form onSubmit={this.handleSubmit}>
      <div id="user"> Contractor: 
        <input type="text" id="userInput" value={this.state.contractor} onChange={this.handleChange} />
      </div>
      </form>
        {/* {this.showChargers()} */}
        {this.state.contractor?
                (<div>{this.showChargers()}</div>):
                  (<div></div>)}
      </div>
    );
  }
}

export default App;
