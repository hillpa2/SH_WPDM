import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

class Adder extends Component {
	constructor() {
		super();
		this.state = {
		inputValue: ""
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
		
		this.handleButtonClick = this.handleButtonClick.bind(this);
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
	handleButtonClick() {
    	console.log(this.props.validUser)
    	API.savepd(this.state.username,
    		this.state.goods,
    		this.state.origin,
    		this.state.destination,
    		this.state.originCoord,
    		this.state.destinationCoord,
    		this.state.shippingCost,
    		this.state.shipFreqPWeek
    	).then(this.props.getpd);
    	//this.setState({ inputValue: "" });
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
		    			onClick={this.handleButtonClick}
					>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Adder;