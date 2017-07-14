import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//brief intro seen on the home page
class Conn extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    	value: '',
    	evalue:''
    	};

    	this.handleChange = this.handleChange.bind(this);
    	this.ehandleChange = this.ehandleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
	}
	ehandleChange(event) {
    	this.setState({evalue: event.target.evalue});
	}
	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.value);
    	event.preventDefault();
	}

	render() {
    	return (
    		<div className="CONN b-y">
    		Samuel Hill World Production and Distribution Monitor: Email to maybe become user
    		<form onSubmit={this.handleSubmit} action="https://formspree.io/samuelhill.samuelhill@ghill.com"
			method="POST">
        		<label>
        		Name:
        		<input type="text" value={this.state.value} onChange={this.handleChange} name="name"/>
    			</label>
    			<label>
				Email:
				<input type="email" value={this.state.evalue} onChange={this.ehandleChange} name="_replyto"/>
    			</label>
				<input type="submit" value="Send" />
			</form>
			</div>
    	);
	}
}

export default Conn;