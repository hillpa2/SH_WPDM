import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//the table with data on the homepage, is not sharred
class HomeTable extends Component {
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
            </tr>
        ));
    }
    render(){
		return (
			<div>
                <table className="FULLH b-y">
  					<tr>
    					<th>Username</th>
    					<th>Goods Shiped</th>
    					<th>Origin</th>
    					<th>Destination</th>
    					<th>Origin Coord.</th> 
    					<th>Destination Coord.</th>
    					<th>Ship. Cost</th>
    					<th>Ship. Freq. Per Week</th>
					</tr>
                    {this.renderpd()}
				</table>
			</div>
		);
	}
}

export default HomeTable;