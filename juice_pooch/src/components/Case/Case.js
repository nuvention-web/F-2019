import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import './style.css';


class CaseComponent extends Component {
  constructor(){
      super();

      this.state = {
         toggled: true
      }
  }

  changeColor(){
    this.setState({toggled: !this.state.toggled})
  }

  // const styles = theme => ({
  //   card: {
  //     maxWidth: 345,
  //     height: 100,
  //   },
  // });

  render() {
    let box_class = this.state.toggled ?   "greenBox" : "redBox";


    var datetime = new Date();
    var data = this.props.data;
    return (
      <div >
        <div style={{textAlgin:"center"}}>
        	<div className={box_class} >
        		<form style={{display:"flex"}}>
        		<div style={{margin:"10px"}}>
        			<p> ID {this.props.id} </p>
        		</div>
        		<div style = {{margin:"15px"}}>
        			<label>
        				Renter: <br />
    					<input type="text" name="name" />
  					</label>
  				</div>
  				<div style={{margin:"15px"}}>
        			<label>
        				In Use: <br />
    					<input type="checkbox"  onClick={this.changeColor.bind(this)} name="name" />
  					</label>
  				</div>
          <div style={{margin:"10px"}}>
            <p> Charger Type: <b>{this.props.type} </b> </p>
          </div>

        		</form>

        	</div>
        </div>
      </div>

    );
  }
}

export default CaseComponent;
