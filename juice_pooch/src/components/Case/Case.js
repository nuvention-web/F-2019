import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import './style.css';


class CaseComponent extends Component {
  constructor(){
      super();

      this.state = {
         checked_out: false,
         checkOutTime: new Date(),
         value: ""

      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeColor(){
    this.setState({checked_out: !this.state.checked_out})
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
      <div >
        <div style={{textAlgin:"center"}}>
        	<div className={box_class} >
        		<form style={{display:"flex"}}>
          		<div style={{margin:"10px"}}>
          			<p> ID {this.props.id} </p>
          		</div>

              {isCheckedOut ?
                (<div style = {{margin:"15px;width:20%"}}>{this.state.value}
                  <button onClick={ this.checkOut.bind(this)}>Return</button> </div>)

                :
                (<div style = {{margin:"15px"}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                      <input type="submit" value="Submit" onClick={ this.checkOut.bind(this)} />
                </form>
    				          </div>)
                    }


          <div style={{margin:"10px"}}>
            <p> Charger Type: <b>{this.props.type} </b> </p>
          </div>

          <div style={{margin:"15px"}}>
             <label >

                {isCheckedOut ?
                  (<div>Checked out: {currtime.toLocaleString()}</div>):
                    (<div>Available</div>) }

            </label>
          </div>

        		</form>

        	</div>
        </div>
      </div>

    );
  }
}

export default CaseComponent;
