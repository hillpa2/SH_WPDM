import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//for searching for specific data
class UserLoginSearch extends Component {
	constructor() {
		super();
		this.state = {
		inputValue: "",
		spds: []
	};
		// Binding handleInputChange and handleButtonClick since we'll be passing them as
		// callbacks and 'this' will change otherwise
		this.handleInputChangeUsername = this.handleInputChangeUsername.bind(this);
		this.handleInputChangeGoods = this.handleInputChangeGoods.bind(this);
		this.handleInputChangeOrigin = this.handleInputChangeOrigin.bind(this);
		this.handleInputChangeDestination = this.handleInputChangeDestination.bind(this);
		this.handleInputChangeOriginCoord = this.handleInputChangeOriginCoord.bind(this);
		this.handleInputChangeDestinationCoord = this.handleInputChangeDestinationCoord.bind(this);
		this.handleInputChangeShippingCost = this.handleInputChangeShippingCost.bind(this);
		this.handleInputChangeShipFreqPWeek = this.handleInputChangeShipFreqPWeek.bind(this);
		
		//this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	//handling the input changes
	handleInputChangeUsername(event) {
		this.setState({ username: event.target.value });
	}
	handleInputChangeGoods(event) {
		this.setState({ goods: event.target.value });
	}
	handleInputChangeOrigin(event) {
		this.setState({ origin: event.target.value });
	}
	handleInputChangeDestination(event) {
		this.setState({ destination: event.target.value });
	}
	handleInputChangeOriginCoord(event) {
		this.setState({ originCoord: event.target.value });
	}
	handleInputChangeDestinationCoord(event) {
		this.setState({ destinationCoord: event.target.value });
	}
	handleInputChangeShippingCost(event) {
		this.setState({ shippingCost: event.target.value });
	}
	handleInputChangeShipFreqPWeek(event) {
		this.setState({ shipFreqPWeek: event.target.value });
	}
	//end handling input changes

	//when the search button is pushed
	whenButtonPushed() {
		API.getpd().then((res) => {
            this.setState({spds: res.data});
            console.log(spds);
        });
	}
	renderSearchpds() {
		return this.state.spds.map(pd =>(
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
                        className="b-y"
                	>
                    DEL
                    </button>
                </th>
            </tr>
		));
	}

	render(){
		return (
			<div>
				<div className="FULLU b-y">
					<textarea
						placeholder="USERNAME"
						value={this.state.username}
						onChange={this.handleInputChangeUsername}
						rows="1"
					/>
					<textarea
						placeholder="GOODS"
						value={this.state.goods}
						onChange={this.handleInputChangeGoods}
						rows="1"
					/>
					<textarea
						placeholder="ORIGIN"
						value={this.state.origin}
						onChange={this.handleInputChangeOrigin}
						rows="1"
					/>
					<textarea
						placeholder="DESTINATION"
						value={this.state.destination}
						onChange={this.handleInputChangeDestination}
						rows="1"
					/>
					<textarea
						placeholder="ORIGIN_CHOORD"
						value={this.state.originCoord}
						onChange={this.handleInputChangeOriginCoord}
						rows="1"
					/>
					<textarea
						placeholder="DESTINATION_COORD"
						value={this.state.destinationCoord}
						onChange={this.handleInputChangeDestinationCoord}
						rows="1"
					/>
					<textarea
						placeholder="SHIPPING_COST"
						value={this.state.shippingCost}
						onChange={this.handleInputChangeShippingCost}
						rows="1"
					/>
					<textarea
						placeholder="SHIP_FREQ_PER_WEEK"
						value={this.state.shipFreqPWeek}
						onChange={this.handleInputChangeShipFreqPWeek}
						rows="1"
					/>
        			<button
		    			className="b-y"
		    			onClick={this.whenButtonPushed}
					>
						SEARCH THREW CURRENT DATA
					</button>	
				</div>
			</div>
		);
	}
}

export default UserLoginSearch;