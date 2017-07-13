import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//brief intro seen on the home page
class Conn extends Component {
	render(){
		return (
			<div>
				<div className="CONN b-y">
					Samuel Hill's World Production and Distribution Montitor.
					<p>
					You need to be a user to access the UserPage. Contact Samuel to become user. Map dosn't work.
					</p>
				</div>
			</div>
		);
	}
}

export default Conn;