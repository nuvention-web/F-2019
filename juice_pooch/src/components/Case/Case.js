import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import './style.css';
import checkmark from '../../img/checkmark.png';
import returnIcon from '../../img/return.png';


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

  firebase.initializeApp(config);
  var db = firebase.firestore();


class CaseComponent extends Component {
  constructor(){
      super();

      this.state = {
         checked_out: false,
         checkOutTime: new Date(),
         value: "",
         venmo: "",
         id: ""

      }
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeColor(){
    this.setState({checked_out: !this.state.checked_out})
    // Adds to database
    if (this.state.checked_out){
    db.collection("Chargers").doc("Charger " + this.props.id).set({
      InUse: !this.state.checked_out,
      ID: this.props.id,
      Renter: this.state.value,
      ReturnedTime: this.state.checkOutTime,
      venmo: this.state.venmo
    })
    }
    else {
      db.collection("Chargers").doc("Charger " + this.props.id).set({
      InUse: !this.state.checked_out,
      ID: this.props.id,
      Renter: this.state.value,
      Start_Time: this.state.checkOutTime,
      venmo: this.state.venmo
    })
    }

  }

  changeCheckoutTime(){
    this.setState({checkOutTime: new Date()})
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({venmo: event.target.value});
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
  componentDidMount() {
    this.setState({checked_out: this.props.inuse}) 
  }

  render() {
    const isCheckedOut = this.state.checked_out;
    let box_class = this.state.checked_out ?  "unavailableBox" : "availableBox" ;
    // let box_class = this.props.inuse ?  "unavailableBox" : "availableBox" ;   
    const currtime = this.state.checkOutTime;
    var data = this.props.data;


    return (
      <div className={box_class}>
        <div className={"idBox"}>
          ID {this.props.id}
        </div>
        <div className={"brandLogo"}>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className={"textBox"}>
              {isCheckedOut ?
                (<div>Checked out: {currtime.toLocaleString()}</div>):
                  (<div>
                  <div> Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </div>
                  <div> Venmo:
                  <input type="text" value={this.state.venmo} onChange={this.handleChange2} />
                  </div>
                  </div>)}

            </div>
          <div className ={"checkoutBox"}>
             <button type="submit" value="Submit" onClick={this.checkOut.bind(this)}>
                {isCheckedOut ?
                //  (<div><img src={returnIcon} className={"img"}/></div>):
                //  (<div><img src={checkmark} className ={"img"}/></div>)
                (<div>Return</div>):
                (<div>Checkout</div>)
               }
            </button>
          </div>
        </form>
      </div>

    );
  }
}

export default CaseComponent;


      // <div>
      //   <div style={{textAlgin:"center"}}>
      //   	<div className={box_class} >
      //   		<form style={{display:"flex"}}>
      //     		<div style={{margin:"10px"}}>
      //     			<p> ID {this.props.id} </p>
      //     		</div>
      //
      //         {isCheckedOut ?
      //           (<div style = {{margin:"15px;width:20%"}}>{this.state.value}
      //             <button onClick={ this.changeColor.bind(this)}>Return</button> </div>)
      //
      //
      //           :
      //           (<div style = {{margin:"15px"}}>
      //           <form onSubmit={this.handleSubmit}>
      //               <label>
      //                 Name:
      //                 <input type="text" value={this.state.value} onChange={this.handleChange} />
      //               </label>
      //                 <input type="submit" value="Submit" onClick={ this.checkOut.bind(this)} />
      //           </form>
    	// 			          </div>)
      //               }
      //
      //
      //     <div style={{margin:"10px"}}>
      //       <p> Charger Type: <b>{this.props.type} </b> </p>
      //     </div>
      //
      //     <div style={{margin:"15px"}}>
      //        <label >
      //
      //           {isCheckedOut ?
      //             (<div>Checked out: {currtime.toLocaleString()}</div>):
      //               (<div>Available</div>) }
      //
      //       </label>
      //     </div>
      //
      //   		</form>
      //
      //   	</div>
      //   </div>
      // </div>
