import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import './style.css';

  //
  // const firebase = require("firebase");
  // // Required for side-effects
  // require("firebase/firestore");
  //
  // var config = {
  //   apiKey: "AIzaSyBMVF74o5DaHdq772T-rOHYS2shoc1BQbk",
  //   authDomain: "juicepooch-75729.firebaseapp.com",
  //   databaseURL: "https://juicepooch-75729.firebaseio.com",
  //   projectId: "juicepooch-75729",
  //   storageBucket: "juicepooch-75729.appspot.com",
  //   messagingSenderId: "637216624692"
  // };
  //
  // firebase.initializeApp(config);
  // var db = firebase.firestore();


class CaseComponent2 extends Component {
  constructor(){
      super();

      this.state = {
         checked_out: false,
         checkOutTime: new Date(),
         value: "",
         id: ""

      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeColor(){
    this.setState({checked_out: !this.state.checked_out})
    // Adds to database
    if (this.state.checked_out){
    //db.collection("Chargers").doc("Charger " + this.props.id).set({
      InUse: !this.state.checked_out,
      ID: this.props.id,
      Renter: this.state.value,
      ReturnedTime: this.state.checkOutTime
    })
    }
    else {
      //db.collection("Chargers").doc("Charger " + this.props.id).set({
      InUse: !this.state.checked_out,
      ID: this.props.id,
      Last_Renter: this.state.value,
      Start_Time: this.state.checkOutTime
    })
    }

  }

  changeCheckoutTime(){
    this.setState({checkOutTime: new Date()})
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }

handleSubmit(event) {
  event.preventDefault();
}
  checkOut(){
    this.changeColor();
    this.changeCheckoutTime();

    // db.collection("Chargers").doc("Charger " + this.props.id).set({
    //   ID: this.props.id,
    //   Renter: this.state.value,
    //   StartTime: this.state.checkOutTime
    // })
  }



  // const styles = theme => ({
  //   card: {
  //     maxWidth: 345,
  //     height: 100,
  //   },
  // });

  render() {
    const isCheckedOut = this.state.checked_out;
    let box_class = this.state.checked_out ?  "redBox" : "greenBox" ;
    const currtime = this.state.checkOutTime;
    var data = this.props.data;

    return (
      <div className={"availableBox"}>

      </div>
    );
  }
}

export default CaseComponent2;
