import React, { Component } from "react";
//add react-router stuff here

class HomeTable extends Component {
	render(){
		return (
			<div>
				<table className="FULLH b-y">
  					<tr>
    					<th>Username</th>
    					<th>Goods Shiped</th>
    					<th>Origin</th>
    					<th>Destination</th>
    					<th>Origin Coordinate</th> 
    					<th>Destination Coordinate</th>
    					<th>Shipment Cost</th>
    					<th>Ship. Freq. Per Week</th>
					</tr>
				</table>
			</div>
		);
	}
}

export default HomeTable;