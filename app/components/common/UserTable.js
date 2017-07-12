import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//need to fix delete
class UserTable extends Component {
	constructor(){
        super();
        this.state = {
            pds: []
        };

    }
    componentDidMount(){
        this.getpd();
    }
    getpd(){
        API.getpd().then((res) => {
            this.setState({pds: res.data})
        });
    }
    deletepd(id){
    	console.log(id);
    	API.deletepd(id)
    }
    renderpd(){
        return this.state.pds.map(pd =>(
            <tr>
                <th>{pd.username}</th>
                <th>{pd.goods}</th>
                <th>{pd.origin}</th>
                <th>{pd.destination}</th>
                <th>{pd.originCoord}</th>
                <th>{pd.destinationCoord}</th>
                <th>{pd.shippingCost}</th>
                <th>{pd.shipFreqPWeek}</th>
                <th>
                	<button
                		onClick={() => this.deletepd(pd._id)}
                	>
                    DELL
                    </button>
                </th>
            </tr>
        ));
    }
	render(){
		return (
			<div>
                <table className="FULLU b-y">
  					<tr>
    					<th>Username</th>
    					<th>Goods Shiped</th>
    					<th>Origin</th>
    					<th>Destination</th>
    					<th>Origin Coordinate</th> 
    					<th>Destination Coordinate</th>
    					<th>Shipment Cost</th>
    					<th>Ship. Freq. Per Week</th>
    					<th>DELETE</th>
					</tr>
                    {this.renderpd()}
				</table>
			</div>
		);
	}
}

export default UserTable;