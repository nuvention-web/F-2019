import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
import './style.css';

const styles = theme => ({
  card: {
    maxWidth: 345,
    height: 100,
  },
});


class CaseComponent extends Component {

  render() {
    var datetime = new Date();
    var data = this.props.data;
    return (
      <div >
        <div style={{textAlgin:"center"}}>
        	<div style={{backgroundColor:"green",width:"80%",height:"100px",display:"inline-block",
        				borderRadius:"10px"}} >  		
        		<form style={{display:"flex"}}>
        		<div>
        			<p> ID </p>
        			<p> 10 </p>  
        		</div> 
        		<div>   
        			<label>
        				Renter: <br />
    					<input type="text" name="name" />
  					</label>
  				</div>
  				<div>
        			<label>
        				Returned: <br />
    					<input type="checkbox" name="name" />
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